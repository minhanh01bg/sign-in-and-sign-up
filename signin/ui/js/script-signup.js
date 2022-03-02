let btn = document.getElementById('btn');
let Myname = document.getElementById('myname');
let date = document.getElementById('date');
let job = document.getElementById('job');
let email = document.getElementById('email');
let user = document.getElementById('username');
let pass = document.getElementById('password');
let repass = document.getElementById('rewrite-pass');

function excute() {
    if (pass.value != repass.value) {
        alert("incorrect password");
        return;
    }
    else if (Myname.value.trim() == "" || date.value.trim() == "" || job.value.trim() == "" || email.value.trim() == "" || user.value.trim() == "" || pass.value.trim() == "") {
        alert("not empty");
        return;
    }
    else {
        $.ajax({
            url: "/signin/app/compiler.php",
            method: 'POST',
            data: {
                name: Myname.value,
                date: date.value,
                job: job.value,
                email: email.value,
                user: user.value,
                pass: pass.value
            },
            success: function (reponse) {
                
            }
        })
        let win =window.open("/signin/ui/login.html", "_blank");
        win.focus();
    }
}