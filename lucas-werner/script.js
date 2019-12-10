//Regex E-mail

function validateEmail(email) {
    var resultado = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return resultado.test(email);
  }

function validadeTelefone(telefone){
    var resultado = /\d{4,5}-\d{4}/g;
    return resultado.test(telefone);
}



let botaoEnviar = document.getElementsByClassName('botaoEnviar')[0]
let campoEmailTelefone = document.getElementsByTagName('input')[0].value


botaoEnviar.addEventListener('click', function () {
    event.preventDefault()
    if (validateEmail(campoEmailTelefone) == true || validateTelefone(campoEmailTelefone) == true){
        alert("Você não inseriu um e-mail ou número de telefone válido");
    } else {
        alert("Login realizado com sucesso");
    }
})

$('#datepicker').datepicker({
    uiLibrary: 'bootstrap4'
})