var token = localStorage.getItem("token");
async function loadAllUser() {
    $('#example').DataTable().destroy();
    var role = document.getElementById("allrole").value
    var url = 'http://localhost:8080/api/admin/getUserByRole';
    if(role != ""){
        url = 'http://localhost:8080/api/admin/getUserByRole?role='+role;
    }
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    var list = await response.json();
    console.log(list)
    var main = '';
    for (i = 0; i < list.length; i++) {
        var phone = list[i].phone == null ? "" : list[i].phone
        var fullname = list[i].fullname == null ? "" : list[i].fullname
        var btnxoa = `<button onclick="deleteUser(${list[i].id})" class="btn btn-danger">Xóa</button>`;
        if(list[i].role == "ROLE_ADMIN"){
            btnxoa ='';
        }
        main += `<tr>
                    <td>${list[i].id}</td>
                    <td>${list[i].username}</td>
                    <td>${fullname}</td>
                    <td>${phone}</td>
                    <td>${list[i].role}</td>
                    <td>${btnxoa}</td>
                </tr>`
    }
    document.getElementById("listuser").innerHTML = main
    $('#example').DataTable();
}





async function deleteUser(id) {
    var con = confirm("Bạn muốn xóa user này, hành động không thể quay lại?");
    if(con == false){
        return;
    }
    var url = 'http://localhost:8080/api/admin/deleteUser?id=' + id;
    const response = await fetch(url, {
        method: 'DELETE',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    if (response.status < 300) {
        swal({
            title: "Thông báo", 
            text: "Xóa thành công",
            type: "success"
          },
        function(){ 
            window.location.reload();
        });
    }
    else {
        swal({
            title: "Thông báo", 
            text: "hành động thất bại", 
            type: "error"
          },
        function(){ 
        });
    }
}
