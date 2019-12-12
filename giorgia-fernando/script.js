/* global $ */
/* eslint no-undef: "error" */

const regexEmailTelefone = /^([_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,5}))|(\d+$)$/;
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const entrar = document.getElementById('botaoEntrar');

entrar.addEventListener('click', function () {
  if (email.value === '' || regexEmailTelefone.test(email.value) === false) {
    alert('Não é possível fazer o login se não inserir um e-mail ou telefone válido.');
  } else if (/* regexEmailTelefone.test(email.value) == true && */ senha.value === '') {
    alert('Não é possível fazer o login se não inserir uma senha válida.');
  } else {
    alert('Login realizado com sucesso!');
  }
});


// Função abaixo insere o datepicker da biblioteca JQuery
$(function dataNascimento() {
  $('#calendario').datepicker();
});
