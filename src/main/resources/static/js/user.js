var token = localStorage.getItem("token");


async function dangNhap() {
    var url = 'http://localhost:8080/api/authenticate'
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    var user = {
        "username": username,
        "password": password
    }
    console.log(user)
    const response = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(user)
    });
    var token = await response.text(); 

    
    if(response.status > 300){
        swal({
            title: "Thông báo", 
            text: "tài khoản hoặc mật khẩu không chính xác!", 
            type: "warning"
          },
        function(){ 
        });
    }
    if(response.status < 300){

        window.localStorage.setItem('token', token);
       
        var urlAccount = 'http://localhost:8080/api/userlogged';
        const res = await fetch(urlAccount, {
            method: 'POST',
            headers: new Headers({
                'Authorization': 'Bearer '+token, 
                'Content-Type': 'application/json'
            })
        });

        var account = await res.json();
        window.localStorage.setItem('username', account.username);
        window.localStorage.setItem('iduser', account.id);
        window.localStorage.setItem('fullnames', account.fullname);
        console.log(account)
        var check = 0;
        if(account.role === 'ROLE_ADMIN'){
            check = 1;
        }
        if(account.role === 'ROLE_USER'){
            check = 0;
        }
        if(check === 0){
            window.location.replace('index')
        }
        if(check === 1){
            window.location.replace('admin/category')
        }
    }
}

async function dangKy() {
    var url = 'http://localhost:8080/api/register'
    var fullname = document.getElementById("fullname").value
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    var phone = document.getElementById("phone").value
    var user = {
        "username": username,
        "password": password,
        "phone": phone,
        "fullname": fullname,
    }
    if(password === ""){
        alert("mật khẩu không được để trống!")
        return;
    }
    const res = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(user)
    });
    var result = await res.text();
    console.log(result)
    if (result === '2') {
        alert("email đã tồn tại")
    }
    else if (result === '0') {
        swal({
            title: "Thông báo", 
            text: "đăng ký thành công",
            type: "success"
          },
        function(){ 
            window.location.replace('login')
        });
    }
}
async function checkRoleUser(){
    var token = localStorage.getItem("token");
    var url = 'http://localhost:8080/api/user/checkroleUser';
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    if(response.status > 300){
        window.location.replace('../login')
    }
}
async function loadThongTinTaiKhoanThemPhong(){
    var urlAccount = 'http://localhost:8080/api/userlogged';
    const res = await fetch(urlAccount, {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer '+token,
            'Content-Type': 'application/json'
        })
    });

    var account = await res.json();
    document.getElementById("hoten").value = account.fullname
    document.getElementById("sdt").value = account.phone
}
