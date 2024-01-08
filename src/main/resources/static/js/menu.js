async function loadMenu() {
    var tops = `
    <form class="formmenu" action="danhsachphong">
    <a href="dangky"><img src="image/add-user.png" class="imglogotopmenu"> Đăng ký</a>
    <a style="padding-bottom:15px" href="login"><img src="image/log-in.png" class="imglogotopmenu"> Đăng nhập</a>
    <input name="search" placeholder="Tìm kiếm phòng trọ" style="border-radius: 5px;background:none;color:#000;text-align:left" class="btn btn-primary"><button style="margin-left: 7px" class="btn btn-primary">Tìm kiếm</button></form>
    `
    var token = localStorage.getItem("token");
    if (token != null) {
        tops = `<form class="formmenu" action="danhsachphong">
        <a href="#" class="dropdown-toggle menucha"  id="morongnoidung" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img src="image/dashboard.png" class="imglogotopmenu"> Quản lý tài khoản</a>
                <ul class="dropdown-menu" aria-labelledby="morongnoidung">
                    <li class="licanhan"><a class="dropdown-item" href="dangtin"><img src="image/themtin.png" class="imglogotopmenu"> Đăng tin</a></li>
                    <li class="licanhan"><a class="dropdown-item" href="quanlytin"><img src="image/tattin.png" class="imglogotopmenu"> Quản lý tin đăng</a></li>
                    <li onclick="dangXuat()"><a class="dropdown-item" href="#"><img src="image/dangxuatmenu.png" class="imglogotopmenu"> Đăng xuất</a></li>
                </ul>
                <input autocomplete="false" name="search" placeholder="Tìm kiếm phòng trọ" style="border-radius: 5px;background:none;color:#000;text-align:left" class="btn btn-primary"><button style="margin-left: 7px" class="btn btn-primary">Tìm kiếm</button></form> `
    }
    var menu =
        `
    <nav id="menu" class="navbar navbar-expand-lg">
        <div class="container">
            <a href="index"><img class="poiter imglogomenu" src="image/logo.jpg"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item"><a class="nav-link menucha" href="index">Trang chủ</a></li>
                <div id="danhsachdanhmuc">
                <li class="nav-item"><a class="nav-link menucha" href="ticket">Phòng trọ</a></li>
                </div>
            </ul>
            </div>
            <li class="nav-item dropdown" style="list-style:none">
            ${tops}
            </li>
    </nav>`
    document.getElementById("mainmenu").innerHTML = menu

    loadDanhMucMenu();

}


async function dangXuat() {
    localStorage.removeItem("token");
    window.location.replace("logout")
}

async function loadDanhMucMenu() {
    var url = 'http://localhost:8080/api/public/allcategory';
    const response = await fetch(url, {
        method: 'GET', headers: new Headers({})
    });
    var list = await response.json();
    var main = '';
    for (i = 0; i < list.length; i++) {
        main += `<li class="nav-item"><a class="nav-link menucha" href="danhsachphong?loaiphong=${list[i].id}">${list[i].name}</a></li>`
    }
    document.getElementById("danhsachdanhmuc").innerHTML = main
}

function formatmoney(money) {
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    return VND.format(money);
}

function tinhTienThang(money) {
    var ti = money / 1000000;
    return ti + " triệu/ tháng"
}