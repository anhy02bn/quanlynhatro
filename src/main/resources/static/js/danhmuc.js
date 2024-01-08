
async function loadDanhMucBenPhai() {
    var url = 'http://localhost:8080/api/public/allcategorySoLuong';
    const response = await fetch(url, {
        method: 'GET', headers: new Headers({ })
    });
    var list = await response.json();
    var main = '<option value="-1">Tất cả loại phòng</option>';
    for (i = 0; i < list.length; i++) {
        main += `<div class="singledm">
                    <a href="danhsachphong?loaiphong=${list[i].id}">> ${list[i].name}</a><span>(${list[i].soLuongPhong})</span>
                </div>`
    }
    document.getElementById("danhmucsoluong").innerHTML = main
}


async function loadDanhMucThemPhong() {
    var url = 'http://localhost:8080/api/public/allcategory';
    const response = await fetch(url, {
        method: 'GET', headers: new Headers({ })
    });
    var list = await response.json();
    var main = '';
    for (i = 0; i < list.length; i++) {
        main += `<option value="${list[i].id}">${list[i].name}</option>`
    }
    document.getElementById("danhmuclist").innerHTML = main
}