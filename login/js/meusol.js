
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "Mariana" && password == "251023") {
        window.location = "final.html";
        return false;
    }
    else {
        alerta();
        return false;
    }
}

function alerta() {
    swal("Desculpa!", "Não posso aceitar, você não parece ser a Mariana! :(")
}
