const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexTelefone = /\d{4,5}-\d{4}/;

function verificandoLogin() {
  const email = document.getElementById('#email');
  const senha = document.getElementById('#senha');
  if (email.value === '') {
    alert('Não é possível fazer o login se não inserir um e-mail ou telefone válido.')
  } else if (senha === '') {
    alert('Não é possível fazer o login se não inserir uma senha válida.')
  } else {
    alert('Login realizado com sucesso!')
  }
}

verificandoLogin();

let botaoEntrar = document.querySelector('#botaoEntrar');

botaoEntrar.addEventListener('click', function () {
  event.preventDefault();
  if (regexEmail === true || regexTelefone === true) {
    alert('Você não inseriu um e-mail ou número de telefone válido.');
  } else {
    alert('Login realizado com sucesso!');
  }
});

// Função abaixo insere o datepicker da biblioteca JQuery


$(document).ready(function(){

    $(function dataNascimento() {
  $('#calendario').datepicker();
});


});