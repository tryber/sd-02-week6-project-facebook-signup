const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexTelefone = /\d{4,5}-\d{4}/;

function verificandoLogin() {
  const email = document.getElementById('#email');
  const senha = document.getElementById('#senha');
  if (email.value === '' || regexEmail === '') {
    alert('Não é possível fazer o login se não inserir um e-mail ou telefone válido.');
  } else if (senha === '' || regexTelefone === '') {
    alert('Não é possível fazer o login se não inserir uma senha válida.');
  } else {
    alert('Login realizado com sucesso!');
  }
}

const entrar = document.getElementById('#botaoEntrar');
entrar.addEventListener('click', function () {
  verificandoLogin();
});

verificandoLogin(); 
// Função abaixo insere o datepicker da biblioteca JQuery
$(function dataNascimento() {
  $('#calendario').datepicker();
});
