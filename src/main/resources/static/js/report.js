var token = localStorage.getItem("token");

async function guiBaoCao() {
    var uls = new URL(document.URL)
    var id = uls.searchParams.get("id");
    var url = 'http://localhost:8080/api/all/createReport';
    var noidungbaocao = document.getElementById("noidungbaocao").value
    var report = {
        "content": noidungbaocao,
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
        body: JSON.stringify(report)
    });
    if (response.status < 300) {
        swal({
                title: "Thông báo",
                text: "Đã gửi báo cáo của bạn",
                type: "success"
            },
            function() {
                window.location.reload();
            });
    } else {
        alert("Thất bại!");
    }
}