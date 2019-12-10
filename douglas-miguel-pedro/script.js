const regexNome = new RegExp(/[a-zA-Z]/);
const regexTelefone = new RegExp(/[1-9]{11}/);
const regexEmail = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
const pikaday = new Pikaday({
  field: document.getElementById('datepicker'),
  toString(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
  firstDay: 1,
  maxDate: new Date(2019, 11, 31),
  yearRange: [1905, 2020],
});

const botaoAzul = document.getElementsByClassName('azul')[0];
botaoAzul.addEventListener('click', function () {
  const botoesLogin = document.querySelectorAll('.primeirosInputs');
  if (botoesLogin[0].value === '') {
    alert('Ta vazio');
  } if (botoesLogin[1].value === '') {
    alert('o 2 ta vazio');
  } if (botoesLogin[0].value !== '' && botoesLogin[1].value !== '') {
    alert('Login realizado com sucesso');
  }
  event.preventDefault();
});

const cadastro = document.querySelector('.btn');
cadastro.addEventListener('click', function () {
  const nome = document.getElementById('nome').value;
  const sobrenome = document.getElementById('sobrenome').value;
  const novasenha = document.getElementById('novasenha').value;
  const emailOuPassword = document.getElementById('emailoupassword').value;
  const data = document.getElementById('datepicker').value;
  event.preventDefault();
  if (!regexNome.test(nome)) {
    alert('Nome inválido');
  } else if (!regexNome.test(sobrenome)) {
    alert('Sobrenome inválido');
  } else if (novasenha === '') {
    alert('Nova senha inválida');
  } else if ((!regexTelefone.test(emailOuPassword)) && (!regexEmail.test(emailOuPassword))) {
    alert('E-mail ou password inválido');
  } else if (data === '') {
    alert('Selecione a data');
  } else {
    alert('nome: ' + nome + ' ' + 'sobrenome: ' + sobrenome + 'Nova senha: ' + novasenha + 'E-mail/password: ' + emailOuPassword + 'Nascimento: ' + data);
  }
});
