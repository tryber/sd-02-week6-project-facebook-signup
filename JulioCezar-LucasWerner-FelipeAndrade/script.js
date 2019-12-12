// Regex Nome

function validateNome() {
  const nomeValue = event.target.value.trim();
  const resultado = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\s]+$/;
  if (resultado.test(nomeValue) === true) {
    event.target.style.borderColor = 'greenyellow';
    event.target.value = nomeValue;
  } else if (resultado.test(nomeValue) !== true || nomeValue === '') {
    event.target.style.borderColor = 'red';
  }
}

// Regex Sobrenome

function validateNomeSobrenome() {
  const nomeValue = event.target.value.trim();
  const resultado = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\s]+$/;
  if (resultado.test(nomeValue) === true) {
    event.target.value = nomeValue;
    event.target.style.borderColor = 'greenyellow';
  } else if (resultado.test(nomeValue) !== true || nomeValue === '') {
    event.target.value = nomeValue;
    event.target.style.borderColor = 'red';
  }
}

function validateEmailTelefoneForm() {
  const emailValue = event.target.value.trim();
  const resultadoEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const resultadoTelefone = /\d{4,5}-\d{4}/;
  const emailValidation = resultadoEmail.test(emailValue);
  const telefoneValidation = resultadoTelefone.test(emailValue);
  if ((emailValidation || telefoneValidation) === true) {
    event.target.value = emailValue;
    event.target.style.borderColor = 'greenyellow';
  } else {
    event.target.value = emailValue;
    event.target.style.borderColor = 'red';
  }
}

function validateData() {
  const dataValue = event.target.value.trim();
  if (dataValue === '') {
    event.target.style.borderColor = 'red';
  } else {
    event.target.style.borderColor = 'greenyellow';
  }
}

function verificaSenhaForm() {
  const evento = event.target;
  const eventoValue = event.target.value;
  if (eventoValue !== '') {
    evento.style.borderColor = 'greenyellow';
  } else {
    evento.style.borderColor = 'red';
  }
}

// Verifica Nome

const bordaNome = document.querySelectorAll('.form-group')[0].querySelector('.form-control');

// Eventos no Nome do Formulário

bordaNome.addEventListener('blur', validateNome);

// Verifica Sobrenome

const bordaSobrenome = document.querySelectorAll('.form-group')[1].querySelectorAll('.form-control')[0];

// Eventos no Sobrenome do Formulário

bordaSobrenome.addEventListener('blur', validateNomeSobrenome);

// Verifica Email

const bordaEmail = document.querySelectorAll('.form-group')[2].querySelectorAll('.form-control')[0];

// Eventos no E-mail e Celular

bordaEmail.addEventListener('blur', validateEmailTelefoneForm);

// Verifica Data

const bordaData = document.querySelector('#datePicker');

// Eventos na Data

bordaData.addEventListener('blur', validateData);
bordaData.addEventListener('change', validateData);

// Verifica Senha Formulário

const campoSenhaValue = document.querySelector('.novaSenha');


// Eventos na senha

campoSenhaValue.addEventListener('blur', verificaSenhaForm);

// Verifica Gender


// Regex E-mail

function validateEmail(email) {
  const resultado = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return resultado.test(email);
}

// Regex Telefone

function validateTelefone(telefone) {
  const resultado = /\d{4,5}-\d{4}/;
  return resultado.test(telefone);
}

const botaoEnviar = document.getElementsByClassName('submitLogin')[0];

// Verificação de Login

botaoEnviar.addEventListener('click', function campoLogin() {
  event.preventDefault();
  const campoEmailTelefone = document.getElementsByTagName('input')[0].value;
  const campoSenha = document.querySelectorAll('.loginItem')[1].querySelectorAll('input')[0].value;
  if ((campoSenha !== '' && validateEmail(campoEmailTelefone) === true) || validateTelefone(campoEmailTelefone) === true) {
    alert('Login realizado com sucesso');
  } else {
    alert('Você não inseriu um e-mail ou número de telefone válido(xxxxx-xxxx) e/ou o campo senha está vazio');
  }
});

document.querySelector('#datePicker').DatePickerX.init({
  format: 'dd/mm/yyyy',
});


// Regex Nome

function validateNomeTudo() {
  const nomeValue = document.querySelectorAll('.form-group')[0].querySelector('.form-control').value;
  const resultado = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\s]+$/;
  if (resultado.test(nomeValue) === true) {
    return [true, nomeValue];
  }
  document.querySelectorAll('.form-group')[0].querySelector('.form-control').style.borderColor = 'red';
  return [false, ''];
}

// Regex Sobrenome

function validateNomeSobrenomeTudo() {
  const sobrenomeValue = document.querySelectorAll('.form-group')[1].querySelectorAll('.form-control')[0].value;
  const resultado = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\s]+$/;
  if (resultado.test(sobrenomeValue) === true) {
    return [true, sobrenomeValue];
  }
  document.querySelectorAll('.form-group')[1].querySelectorAll('.form-control')[0].style.borderColor = 'red';
  return [false, ''];
}

function validateEmailTelefoneFormTudo() {
  const emailValue = document.querySelectorAll('.form-group')[2].querySelectorAll('.form-control')[0].value;
  const resultadoEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const resultadoTelefone = /\d{4,5}-\d{4}/;
  const emailValidation = resultadoEmail.test(emailValue);
  const telefoneValidation = resultadoTelefone.test(emailValue);
  if ((emailValidation || telefoneValidation) === true) {
    return [true, emailValue];
  }
  document.querySelectorAll('.form-group')[2].querySelectorAll('.form-control')[0].style.borderColor = 'red';
  return [false, ''];
}

function validateDataTudo() {
  const Data = document.querySelector('#datePicker').value;
  if (Data === '') {
    document.querySelector('#datePicker').style.borderColor = 'red';
    return [false, ''];
  }
  return [true, Data];
}

function verificaSenhaFormTudo() {
  const senhaValue = document.querySelector('.novaSenha').value;
  if (senhaValue !== '') {
    return [true, senhaValue];
  }
  document.querySelector('.novaSenha').style.borderColor = 'red';
  return [false, ''];
}

const verificaGenderTudo = () => {
  const caminhoGenderTudo = document.querySelectorAll('.form-check-input');
  let i = 0;
  let value = '';
  caminhoGenderTudo.forEach((element) => {
    if (element.checked === true) {
      i += 1;
      value = element.value;
    }
  });
  if (i === 1) {
    document.querySelectorAll('.form-check-inline')[0].style.border = 'none';
    document.querySelectorAll('.form-check-inline')[1].style.border = 'none';
    document.querySelectorAll('.form-check-inline')[2].style.border = 'none';
    return [true, value];
  }
  document.querySelectorAll('.form-check-inline')[0].style.borderColor = 'red';
  document.querySelectorAll('.form-check-inline')[1].style.borderColor = 'red';
  document.querySelectorAll('.form-check-inline')[2].style.borderColor = 'red';
  return [false, ''];
};

function arrayNomeSobrenomeEmail() {
  return validateNomeTudo(bordaNome).concat(validateNomeSobrenomeTudo(bordaSobrenome));
}

function arrayEmailTelData() {
  return validateEmailTelefoneFormTudo(bordaEmail).concat(validateDataTudo(bordaData));
}

function arraySenhaGender() {
  return verificaSenhaFormTudo(campoSenhaValue).concat(verificaGenderTudo());
}

function validaArrays() {
  const valida = arrayNomeSobrenomeEmail().concat(arrayEmailTelData(), arraySenhaGender());
  for (let i = 0; i < valida.length; i += 1) {
    if (valida[i] === false) {
      return false;
    }
  }
  return true;
}

function validaTodosCampos() {
  const valida = arrayNomeSobrenomeEmail().concat(arrayEmailTelData(), arraySenhaGender());
  if (validaArrays() === false) {
    alert('Cadastro não foi realizado. Corrija os campos em vermelho!!!');
  } else {
    alert(`Nome: ${valida[1]}\nSobrenome: ${valida[3]}\nEmail ou Telefone: ${valida[5]}'\nData de Nascimento: ${valida[7]}'\nSenha: ${valida[9]}'\nSexo: ${valida[11]}`);
  }
}

// Verifica Botao

const botaoCadastrar = document.querySelector('.buttonContent');
botaoCadastrar.addEventListener('click', validaTodosCampos);
