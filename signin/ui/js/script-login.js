let btn = document.getElementById('btn');
let user = document.getElementById('username');
let pass = document.getElementById('password');

function excute() {
    $.ajax({
        url: "/signin/app/login.php",
        method: 'POST',
        data: {
            user: user.value,
            pass: pass.value
        },
        success: function (response) {
            console.log(response);
            if (response == "false") {
                alert('Không tồn tại tài khoản này');
                return;
            }
            else if (response == "true") {
                let win = window.open("https://phimbathu.info/", "_blank");
                win.focus();
            }
            else if (response == "wrong") {
                alert('sai mật khẩu');
                return;
            }
        }
    })
}