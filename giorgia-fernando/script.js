let regexEmail = /^(([^<>()[\]\\.,;:\s@“]+(\.[^<>()[\]\\.,;:\s@“]+)*)|(“.+“))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
let regexTelefone = /\d{4,5}-\d{4}/;



let email = document.getElementById('email');
let senha = document.getElementById('senha');
let entrar = document.getElementById('botaoEntrar');

entrar.addEventListener('click', function () {
  if (email.value == '' || regexEmail.test(email.value) /* && email.value != regexTelefone */) {
    alert('Não é possível fazer o login se não inserir um e-mail ou telefone válido.');
  } else if (senha == '') {
    alert('Não é possível fazer o login se não inserir uma senha válida.');
  } else {
    alert('Login realizado com sucesso!');
  }
});


// Função abaixo insere o datepicker da biblioteca JQuery
$(function dataNascimento() {
  $('#calendario').datepicker();
});
