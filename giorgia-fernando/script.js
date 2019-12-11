const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexTelefone = /\d{4,5}-\d{4}/g;


const botaoEntrar = document.querySelector('#botaoEntrar');
let campoInserido = document.getElementsByTagName('input')[0].value

botaoEntrar.addEventListener('click', function () {
  event.preventDefault()
  if (regexEmail == true || regexTelefone == true) {
    alert("Você não inseriu um e-mail ou número de telefone válido.");
  } else {
    alert("Login realizado com sucesso!");
  }
})
