const inputDate = document.getElementById('datepicker');

const form = document.querySelector('form').require = true;

const picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'D/M/YYYY',
  toString(date, format) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
  }
});

let nameRegex = new RegExp(/[a-zA-Z]/);
let phoneRegex = new RegExp(/[0-9]{11}/);
let emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
let dateRegex = new RegExp(/^\d{1,2}\/\d{1,2}\/\d{4}$/);

const cadastrar = document.getElementById('downBtn')
cadastrar.addEventListener('click', function () {
  const name = document.getElementById('nome').value
  const lastName = document.getElementById('sobrenome').value
  const phoneMail = document.getElementById('phonemail').value
  const password = document.getElementById('password').value

  if (!nameRegex.test(name)){
    alert ("O nome informado é inválido");
  }
  else if (!nameRegex.test(lastName)){
    alert ("O sobrenome informado é inválido");
  }
  else if ((!phoneRegex.test(phoneMail)) && (!emailRegex.test(phoneMail))) {
    alert ("O telefone/email informado é inválido");
  }
  else if (password === ''){
    alert ("Informe sua senha");
  }
  else if (!dateRegex.test(inputDate.value)){s
    alert ("Informe sua data de nascimento");
  }

  else {
    alert(` Conta criada com sucesso!
            nome: ${name}
            sobrenome: ${lastName}
            Nova senha: ${password}
            E-mail/Telefone: ${phoneMail}
            Data de nascimento: ${inputDate.input}`)
  }

})
