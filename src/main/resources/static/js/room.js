var sizeTrangChu = 3;

async function phongTrangChu(page) {
    var url = 'http://localhost:8080/api/public/dsphongTrangChu?size='+sizeTrangChu +'&page='+page;
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var listroom = await response.json();
    console.log(listroom)
    var list = listroom.content;
    var totalPage = listroom.totalPages 
    var main = '';
    for (i = 0; i < list.length; i++) {
        document.getElementById("textoke").innerHTML = list[i].description;
        var des = document.getElementById("textoke").textContent;
        main += `<div class="singleroom row">
        <div class="col-sm-3 divanhphong">
            <a href="chitietphong?id=${list[i].id}"><img src="${list[i].banner}" class="anhroom"></a>
        </div>
        <div class="col-sm-9">
            <a href="chitietphong?id=${list[i].id}" class="tenphongindex">${list[i].titleRoom}</a>
            <div class="thongtinct">
                <p class="giatientro">${tinhTienThang(list[i].price)}</p>
                <p class="dientichtro">${list[i].area}m²</p>
                <p class="diachitro">${list[i].address}</p>
                <p class="thoigiandangtro">${list[i].createdDate}<br>${list[i].createdTime}</p>
            </div>
            <p class="motatro">${des}</p>
            <div class="thongtinnguoidang">
                <p>${list[i].user.fullname}</p>
                <p><a href="tel:${list[i].user.phone}" class="btngoi">Gọi ${list[i].user.phone}</a></p>
            </div>
        </div>
    </div>`
    }
    document.getElementById("danhsachcacphong").innerHTML = main
    document.getElementById("textoke").innerHTML = "";

    var mainpage = ''
    for(i=1; i<= totalPage; i++){
        mainpage += '<li onclick="phongTrangChu('+(Number(i)-1)+')" class="page-item"><a class="page-link" href="#danhsachcacphong">'+i+'</a></li>'
    }
    document.getElementById("listpage").innerHTML = mainpage
}

async function loadChiTietPhong() {
    var id = window.location.search.split('=')[1];
    if(id != null){
        var url = 'http://localhost:8080/api/public/listAnhPhong?id='+id;
        const res = await fetch(url, {
            method: 'GET',
            headers: new Headers({
            })
        });
        var list = await res.json();
        var main = `<div class="carousel-item active">
                        <img src="${list[0].room.banner}" class="anhchitiets">
                    </div>`
        for(i=0; i<list.length; i++){
            main += `<div class="carousel-item">
                    <img src="${list[i].linkImage}" class="anhchitiets">
                </div>`
        }
        document.getElementById("listanhp").innerHTML = main
        var url = 'http://localhost:8080/api/public/thongTinPhong?id='+id;
        const response = await fetch(url, {
            method: 'GET',
            headers: new Headers({
            })
        });
        var room = await response.json();
        document.getElementById("tenphongchitiet").innerHTML = room.titleRoom
        document.getElementById("diachiphong").innerHTML = room.address
        document.getElementById("giatienctphong").innerHTML = tinhTienThang(room.price)
        document.getElementById("dtphongct").innerHTML = room.area
        document.getElementById("ngaydangct").innerHTML = room.createdDate
        document.getElementById("matinct").innerHTML = "#"+room.id
        document.getElementById("loaitingiao").innerHTML = room.category.name
        document.getElementById("noidungmotact").innerHTML = room.description
        document.getElementById("tenchuphong").innerHTML = room.user.fullname
        document.getElementById("sdtchuphong").innerHTML = room.user.phone
        document.getElementById("zalophone").href = "https://zalo.me/"+room.user.phone
    }
}



async function phongMoiDang() {
    var url = 'http://localhost:8080/api/public/phongMoiDang';
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var list = await response.json();
    var main = '';
    for (i = 0; i < list.length; i++) {
        main += ` <div class="singleroom row sanphammoidang">
                    <div class="col-sm-3 divanhphong">
                        <a href="chitietphong?id=${list[i].id}"><img src="${list[i].banner}" class="anhroom"></a>
                    </div>
                    <div class="col-sm-9">
                        <a href="chitietphong?id=${list[i].id}" class="tenphongindex">${list[i].titleRoom}</a>
                        <div class="thongtinct">
                            <p class="giatientro">${tinhTienThang(list[i].price)}</p>
                            <p class="thoigiandangtro">${list[i].createdDate}</p>
                        </div>
                    </div>
                </div>`
    }
    document.getElementById("phongmoidang").innerHTML = main
}

async function phongByUser(iduser) {
    var url = 'http://localhost:8080/api/public/phongByUser?id='+iduser;
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var list = await response.json();
    var main = '';
    for (i = 0; i < list.length; i++) {
        document.getElementById("textoke").innerHTML = list[i].description;
        var des = document.getElementById("textoke").textContent;
        main += `<div class="singleroom row">
        <div class="col-sm-3 divanhphong">
            <a href="chitietphong?id=${list[i].id}"><img src="${list[i].banner}" class="anhroom"></a>
        </div>
            <div class="col-sm-9">
                <a href="chitietphong?id=${list[i].id}" class="tenphongindex">${list[i].titleRoom}</a>
                <div class="thongtinct">
                    <p class="giatientro">${tinhTienThang(list[i].price)}</p>
                    <p class="dientichtro">${list[i].area}m²</p>
                    <p class="diachitro">${list[i].wards.districts.name}<br>${list[i].wards.districts.province.name}</p>
                    <p class="thoigiandangtro">${list[i].createdDate}<br>${list[i].createdTime}</p>
                </div>
                <p class="motatro">${des}</p>
                <div class="thongtinnguoidang">
                    <img src="${list[i].user.avatar}" class="nguoidang">
                    <p>${list[i].user.fullname}</p>
                    <p><a href="tel:${list[i].user.phone}" class="btngoi">Gọi ${list[i].user.phone}</a></p>
                </div>
            </div>
        </div>`
    }
    document.getElementById("danhsachcacphonglq").innerHTML = main
    document.getElementById("textoke").innerHTML = "";
    
}

async function timKiemPhong(page) {
    var uls = new URL(document.URL)
    var loaiphong = uls.searchParams.get("loaiphong");
    var search = uls.searchParams.get("search");
    var url = "";
    if(loaiphong != null){
        url = 'http://localhost:8080/api/public/timKiemPhong?size='+sizeTrangChu+"&page="+page+"&loaiphong="+loaiphong;

    }
    if(search != null){
        url = 'http://localhost:8080/api/public/timKiemPhong?size='+sizeTrangChu+"&page="+page+"&search="+search;
    }

    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var listroom = await response.json();
    console.log(listroom)
    var list = listroom.content;
    var totalPage = listroom.totalPages
    var main = '';
    for (i = 0; i < list.length; i++) {
        document.getElementById("textoke").innerHTML = list[i].description;
        var des = document.getElementById("textoke").textContent;
        main += `<div class="singleroom row">
        <div class="col-sm-3 divanhphong">
            <a href="chitietphong?id=${list[i].id}"><img src="${list[i].banner}" class="anhroom"></a>
        </div>
        <div class="col-sm-9">
            <a href="chitietphong?id=${list[i].id}" class="tenphongindex">${list[i].titleRoom}</a>
            <div class="thongtinct">
                <p class="giatientro">${tinhTienThang(list[i].price)}</p>
                <p class="dientichtro">${list[i].area}m²</p>
                <p class="diachitro">${list[i].address}</p>
                <p class="thoigiandangtro">${list[i].createdDate}<br>${list[i].createdTime}</p>
            </div>
            <p class="motatro">${des}</p>
            <div class="thongtinnguoidang">
                <p>${list[i].user.fullname}</p>
                <p><a href="tel:${list[i].user.phone}" class="btngoi">Gọi ${list[i].user.phone}</a></p>
            </div>
        </div>
    </div>`
    }
    document.getElementById("danhsachcacphong").innerHTML = main
    document.getElementById("textoke").innerHTML = "";

    var mainpage = ''
    for(i=1; i<= totalPage; i++){
        mainpage += '<li onclick="phongTrangChu('+(Number(i)-1)+')" class="page-item"><a class="page-link" href="#danhsachcacphong">'+i+'</a></li>'
    }
    document.getElementById("listpage").innerHTML = mainpage
}


async function loadChiTietPhongDangPhong() {
    var id = window.location.search.split('=')[1];
    if(id != null){
        var urladd = 'http://localhost:8080/api/public/thongTinPhong?id='+id;
        const response = await fetch(urladd, {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + token
            })
        });
        var room = await response.json();
        document.getElementById("address").value = room.address;
        document.getElementById("danhmuclist").value = room.category.id;
        document.getElementById("tieude").value = room.titleRoom
        document.getElementById("giatien").value = room.price
        document.getElementById("dientich").value = room.area
        document.getElementById("anhendathem").src = room.banner
        anhbia = room.banner
        document.getElementById("divanhdathem").style.display = ''
        await new Promise(r => setTimeout(r, 500));
        tinyMCE.get('editor').setContent(room.description)

        urladd = 'http://localhost:8080/api/public/listAnhPhong?id='+id;
        const res = await fetch(urladd, {
            method: 'GET'
        });
        var list = await res.json();
        var main = `<div class="col-sm-12">
                        <h4 style="margin-top: 30px;">Ảnh đã thêm</h4>
                    </div>`
        for(i=0; i<list.length; i++){
            main += `<div id="anhphongdon${list[i].id}" class="col-md-4">
                        <img style="width:90%" src="${list[i].linkImage}" class="image-upload imgspre">
                        <button onclick="xoaAnhPhong(${list[i].id})" style="width:90%; height:30px" class="btnxoaanhpreview"><i class="fa fa-trash"></i> xóa ảnh</button>
                    </div>`
        }
        document.getElementById("divanhdathem").innerHTML = main

    }
}


const listFile = [];
function loadInit() {
    $('input#choosefile').change(function () {
        var files = $(this)[0].files;
    });
    document.querySelector('#choosefile').addEventListener("change", previewImages);
    function previewImages() {
        var files = $(this)[0].files;
        for (i = 0; i < files.length; i++) {
            listFile.push(files[i]);
        }

        var preview = document.getElementById("listpreview");

        for (i = 0; i < files.length; i++) {
            readAndPreview(files[i]);
        }
        function readAndPreview(file) {

            if (!/\.(jpe?g|png|gif)$/i.test(file.name)) {
                return alert(file.name + " is not an image");
            }

            var reader = new FileReader(file);

            reader.addEventListener("load", function () {

                var div = document.createElement('div');
                div.className = 'col-md-4';
                div.style.height = '120px';
                div.marginTop = '100px';
                preview.appendChild(div);

                var img = document.createElement('img');
                img.src = this.result;
                img.style.height = '85px';
                img.style.width = '90%';
                img.className = 'image-upload imgspre';
                img.style.marginTop = '5px';
                div.appendChild(img);

                var button = document.createElement('button');
                button.style.height = '30px';
                button.style.width = '90%';
                button.innerHTML = '<i class="fa fa-trash"></i> xóa'
                button.className = 'btnxoaanhpreview';
                div.appendChild(button);

                button.addEventListener("click", function () {
                    div.remove();
                    console.log(listFile.length)
                    for(i=0; i<listFile.length; i++){
                        if(listFile[i] === file){
                            listFile.splice(i, 1);
                        }
                    }
                    console.log(listFile.length)
                });
            });

            reader.readAsDataURL(file);

        }

    }

}

var anhbia = "";
async function themPhong() {
    document.getElementById("loading").style.display = 'block'
    var id = window.location.search.split('=')[1];

    var url = 'http://localhost:8080/api/all/dang-phong';
    var address = document.getElementById("address").value
    var category = document.getElementById("danhmuclist").value
    var tieude = document.getElementById("tieude").value
    var giatien = document.getElementById("giatien").value
    var dientich = document.getElementById("dientich").value
    var motaphong = tinyMCE.get('editor').getContent()

    const filePath = document.getElementById('anhbiass')
    const formData = new FormData()
    formData.append("file", filePath.files[0])
    var urlUpload = 'http://localhost:8080/api/public/upload';
    const res = await fetch(urlUpload, {
        method: 'POST',
        headers: new Headers({
        }),
        body: formData
    });
    if(res.status < 300){
        anhbia = await res.text();
    }

    var room = {
        "id": id,
        "titleRoom": tieude,
        "address": address,
        "banner":anhbia,
        "price":giatien,
        "description":motaphong,
        "area":dientich,
        "category":{
            "id":category
        }
    }

    const response = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(room)
    });
    var result = await response.json();
    console.log(result)
    if (response.status < 300) {
        var urladdImage = 'http://localhost:8080/api/all/image-room-upload';
        var urlUpload = 'http://localhost:8080/api/public/upload';

        for(i=0; i<listFile.length; i++){
            const formData = new FormData()
            formData.append("file", listFile[i])
            const res = await fetch(urlUpload, {
                method: 'POST',
                headers: new Headers({
                }),
                body: formData
            });
            var linkbanner = await res.text();

            var imageRoom = {
                "linkImage":linkbanner,
                "room":{
                    "id":result.id
                }
            }
            const response = await fetch(urladdImage, {
                method: 'POST',
                headers: new Headers({
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(imageRoom)
            });
        }
        swal({
                title: "Thông báo",
                text: "thêm/cập nhật thông tin phòng thành công!",
                type: "success"
            },
            function(){
                document.getElementById("loading").style.display = 'none'
                window.location.replace('quanlytin')
            });
    }
    else {
        swal({
                title: "Thông báo",
                text: "Thêm/cập nhật thông tin phòng thất bại",
                type: "error"
            },
            function(){
                document.getElementById("loading").style.display = 'none'
                window.location.reload();
            });
    }
}

async function loadPhongCuaToi() {
    $('#example').DataTable().destroy();
    var trangthai = document.getElementById("trangthaiphonglist").value;
    var urladd = 'http://localhost:8080/api/user/phongCuaToi';
    if(trangthai != -1){
        urladd = 'http://localhost:8080/api/user/phongCuaToi?id='+trangthai;
    }
    const response = await fetch(urladd, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    var list = await response.json();
    var main = ''
    for(i=0; i<list.length; i++){
        main += `<tr>
                    <td>${list[i].id}</td>
                    <td><img src="${list[i].banner}" class="anhphongqltin"></td>
                    <td>${list[i].titleRoom}</td>
                    <td>${formatmoney(list[i].price)}</td>
                    <td>${list[i].createdTime}<br>${list[i].createdDate}</td>
                    <td>${list[i].statusRoom}</td>
                    <td><a href="dangtin?id=${list[i].id}" class="btn btn-primary"><i class="fa fa-edit"></i> Sửa</a></td>
                    <td><a onclick="xoaPhong(${list[i].id})" class="btn btn-danger"><i class="fa fa-trash"></i> Xóa</a></td>
                </tr>`
    }
    document.getElementById("listphong").innerHTML = main
    $('#example').DataTable();
}


async function xoaPhong(id) {
    var urladd = 'http://localhost:8080/api/user/xoaPhong?id='+id;
    const response = await fetch(urladd, {
        method: 'DELETE',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    if (response.status < 300) {
        swal({
                title: "Thông báo",
                text: "xóa phòng thành công!",
                type: "success"
            },
            function(){
                window.location.reload();
            });
    }
    else {
        swal({
                title: "Thông báo",
                text: "không thể xóa phòng",
                type: "error"
            },
            function(){
            });
    }
}

async function xoaAnhPhong(id) {
    var con = confirm("Bạn chắc chắn muốn xóa ảnh này!")
    if(con){
        var urladd = 'http://localhost:8080/api/user/xoaAnhPhong?id='+id;
        const response = await fetch(urladd, {
            method: 'DELETE',
            headers: new Headers({
                'Authorization': 'Bearer ' + token
            })
        });
        if (response.status < 300) {
            $("#anhphongdon"+id).remove();
        }
    }
}

