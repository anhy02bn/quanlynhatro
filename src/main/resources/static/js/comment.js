var token = localStorage.getItem("token");
var star = 5;
async function loadComment(){
    if(token == null){
        document.getElementById("mycomment").style.display = 'none';
        document.getElementById("btnguibaocao").style.display = 'none';
    }
    var uls = new URL(document.URL)
    var id = uls.searchParams.get("id");
    var iduserdangnhap = -1;
    if(localStorage.getItem("iduser") != null){
        iduserdangnhap = localStorage.getItem("iduser");
    }
    var url = 'http://localhost:8080/api/public/find-comment-by-room?idRoom='+id;
    const response = await fetch(url, {
    });
    var list = await response.json();
    var main = '';
    for (i = 0; i < list.length; i++) {
        var listImg = ''
        for (j = 0; j < list[i].commentImages.length; j++) {
            listImg += `<img class="imgcomment" src="${list[i].commentImages[j].linkImage}">`
        }
        var star = '';
        for (j = 0; j < list[i].star; j++) {
            star += `<span class="fa fa-star checkedstar"></span>`
        }
        main += `<div class="singlectlct">
        <div class="row">
            <div class="col-11">
                <div class="d-flex nguoidangctl">
                    <span class="usernamedangctl">${list[i].user.fullname==null?'Người dùng':list[i].user.fullname}</span>
                    <span class="ngaytraloi">${list[i].createdDate}</span>
                    <span class="starcmts">${star}</span>
                    ${list[i].user.id==iduserdangnhap?`<span class="starcmts"><i onclick="deleteComment(${list[i].id})" class="fa fa-trash pointer"></i></span>`:''}
                </div>
                <div class="contentctlct">${list[i].content}</div>
                <div class="listimgcontent">
                    ${listImg}
                </div>
            </div>
        </div>
    </div>`
    }
    document.getElementById("listcautlct").innerHTML = main
}


function loadStar(val) {
    star = val + 1;
    var listS = document.getElementById("liststar").getElementsByClassName("fa-star");
    for (i = 0; i < listS.length; i++) {
        listS[i].classList.remove('checkedstar');
    }
    for (i = 0; i < listS.length; i++) {
        if (i <= val) {
            listS[i].classList.add('checkedstar');
        }
    }

}

async function uploadMultipleFile(fileInput) {
    const formData = new FormData()
    for (i = 0; i < fileInput.files.length; i++) {
        formData.append("file", fileInput.files[i])
    }
    var urlUpload = 'http://localhost:8080/api/public/upload-multiple-file';
    const res = await fetch(urlUpload, {
        method: 'POST',
        body: formData
    });
    if(res.status < 300){
        return await res.json();
    }
    else{
        return [];
    }
}

async function saveComment() {
    // document.getElementById("loading").style.display = 'block'
    var uls = new URL(document.URL)
    var id = uls.searchParams.get("id");
    var url = 'http://localhost:8080/api/user/createComment';
    var noidungbl = document.getElementById("noidungbl").value
    if (document.getElementById("choosefilecmt").files.length > 3) {
        alert("Chỉ được chọn tối đa 3 ảnh");
        return;
    }
    var listLinkImg = await uploadMultipleFile(document.getElementById("choosefilecmt"));
    var comment = {
        "star": star,
        "content": noidungbl,
        "listLink": listLinkImg,
        "room": {
            "id": id
        }
    }
    const response = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(comment)
    });
    if (response.status < 300) {
        swal({
                title: "Thông báo",
                text: "Đã đăng bình luận của bạn",
                type: "success"
            },
            function() {
                window.location.reload();
            });
    } else {
        alert("Thất bại!");
    }
}

async function deleteComment(id) {
    var con = confirm("Bạn muốn xóa bình luận này?");
    if (con == false) {
        return;
    }
    var url = 'http://localhost:8080/api/user/deleteComment?id=' + id;
    const response = await fetch(url, {
        method: 'DELETE',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    if (response.status < 300) {
        alert("xóa thành công!");
        loadComment();
    }
    if (response.status == exceptionCode) {
        alert("thất bại")
    }
}


function setFile(){
    if (document.getElementById("choosefilecmt").files.length > 3) {
        alert("Chỉ được chọn tối đa 3 ảnh");
        return;
    }
    var fileInput = document.getElementById("choosefilecmt");
    var imgs = '';
    for (i = 0; i < fileInput.files.length; i++) {
        var urlanh = URL.createObjectURL(fileInput.files[i]);
        imgs += `<img src="${urlanh}" class="anhpreviewcmt">`
    }
    document.getElementById("listimgpreview").innerHTML = imgs;
}