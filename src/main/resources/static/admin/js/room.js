var token = localStorage.getItem("token");

async function loadAllRoom() {
    $('#example').DataTable().destroy();
    var trangthai = document.getElementById("trangthaiphonglist").value;
    var url = 'http://localhost:8080/api/admin/tatCaPhong';
    if (trangthai != -1) {
        url = 'http://localhost:8080/api/admin/tatCaPhong?id=' + trangthai;
    }
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    var list = await response.json();
    var main = '';
    for (i = 0; i < list.length; i++) {

        main += `<tr>
                    <td>${list[i].id}</td>
                    <td>${list[i].user.username}</td>
                    <td><img src="${list[i].banner}" class="anhphongqltin"></td>
                    <td>${list[i].titleRoom}</td>
                    <td>${formatmoney(list[i].price)}</td>
                    <td>${list[i].createdTime}<br>${list[i].createdDate}</td>
                    <td>
                        <select onchange="capNhatTrangThai(this, ${list[i].id})" class="form-control">
                            <option value="DANG_HIEN_THI" ${list[i].statusRoom == "DANG_HIEN_THI" ? "selected" : ""}>Đang hiển thị</option>
                            <option value="DANG_CHO_DUYET" ${list[i].statusRoom == "DANG_CHO_DUYET" ? "selected" : ""}>Đang chờ duyệt</option>
                            <option value="VI_PHAM" ${list[i].statusRoom == "VI_PHAM" ? "selected" : ""}>Vi phạm</option>
                        </select>
                    </td>
                    <td>
                        <a target="_blank" href="../chitietphong?id=${list[i].id}">Xem phòng</a>
                        <p onclick="loadBaoCao(${list[i].id})" data-bs-toggle="modal" data-bs-target="#chitiet" class="poiter">Xem báo cáo</p>
                    </td>
                </tr>`
    }
    document.getElementById("listroom").innerHTML = main
    $('#example').DataTable();
}


async function loadBaoCao(id) {
    var urladd = 'http://localhost:8080/api/admin/report-by-room?id=' + id;
    const response = await fetch(urladd, {
        method: 'GET',
        headers: new Headers({})
    });
    var list = await response.json();
    var main = ''
    for (i=0; i< list.length; i++){
        main += `<tr>
                    <td>${list[i].user.username}</td>
                    <td>${list[i].createdDate}</td>
                    <td><a target="_blank" href="../chitietphong?id=${list[i].room.id}">${list[i].room.id}</a></td>
                    <td>${list[i].content}</td>
                </tr>`
    }
    document.getElementById("dsphanhoi").innerHTML = main
}

async function capNhatTrangThai(e, id) {
    var trangthai = e.value;
    var url = 'http://localhost:8080/api/admin/capNhatTrangThai?id=' + id+'&trangthai='+trangthai;
    const response = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    if (response.status < 300) {
        swal({
                title: "Thông báo",
                text: "Thành công",
                type: "success"
            },
            function () {
                window.location.reload();
            });
    }
}
