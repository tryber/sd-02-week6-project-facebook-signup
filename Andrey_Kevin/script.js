/* global Pikaday */
const dataNasc = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'D/M/YYYY',
  toString(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
  parse(dateString) {
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  },
});

const nameRegex = new RegExp(/[a-zA-Z]/);
const phoneRegex = new RegExp(/[0-9]{11}/);
const emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

const cadastrar = document.getElementById('downBtn');
cadastrar.addEventListener('click', function () {
  const name = document.getElementById('nome').value;
  const lastName = document.getElementById('sobrenome').value;
  const phoneMail = document.getElementById('phonemail').value;
  const password = document.getElementById('password').value;
  const dateInput = document.getElementById('datepicker').value;
  const female = document.getElementById('female');
  const male = document.getElementById('male');
  const personalizado = document.getElementById('personalizado');

  if (!nameRegex.test(name)) {
    alert('O nome informado é inválido');
  } else if (!nameRegex.test(lastName)) {
    alert('O sobrenome informado é inválido');
  } else if ((!phoneRegex.test(phoneMail)) && (!emailRegex.test(phoneMail))) {
    alert('O telefone/email informado é inválido');
  } else if (password === '') {
    alert('Informe sua senha');
  } else if (dateInput === '') {
    alert('Informe sua data de nascimento');
  } else if (!female.checked && !male.checked && !personalizado.checked) {
    alert('Informe o seu gênero');
  } else {
    const genero = (document.querySelector('input[name="gender"]:checked').value);
    alert(` Conta criada com sucesso!
            nome: ${name}
            sobrenome: ${lastName}
            Nova senha: ${password}
            E-mail/Telefone: ${phoneMail}
            Data de nascimento: ${dataNasc}
            Gênero: ${genero}`);
  }
});

const loginBtn = document.querySelector('#login');
loginBtn.addEventListener('click',() => {
  const phoneMail = document.getElementById('phonemailLogin').value;
  const password = document.getElementById('passwordLogin').value;

  if ((!phoneRegex.test(phoneMail)) && (!emailRegex.test(phoneMail))) {
    alert('O telefone/email informado é inválido');
  } else if (password === '') {
    alert('A senha informada é inválida');
  }
  else {
    alert(` Login efetuad com sucesso!
            telefone/email: ${phoneMail}
            senha: ${password}`);
  }
});
