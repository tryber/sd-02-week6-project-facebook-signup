/* Pikaday JS - Requisito 17 */

const picker = new Pikaday({
  field: document.getElementById('dtnasc'),
  firstDay: 1,
  minDate: new Date(1899, 12, 1),
  maxDate: new Date(2020, 12, 31),
  yearRange: [1900, 2020],
  format: 'DD/MM/YYYY',
  i18n: {
    previousMonth: 'Mês anterior',
    nextMonth: 'Novo mês',
    months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    weekdays: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
    weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  };
});

/* Validações com a Lib js-form-validator */
const formRegister = document.querySelector('#form-register');

new Validator(formRegister, function (err, res) {
  return res;
}, {
  rules: {
    date: function (value) {
      const dataReg = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([1|2][9|0][0-9][0-9])/;
      if (value.match(dataReg)) {
        return true;
      }
    }
  },
  messages: {
    pt: {
      date: {
        incorrect: 'Por favor, digite uma data válida no estilo "DD/MM/AAAA"'
      }
    }
  }
});

/* Variáveis globais */
const botaoEnviar = document.querySelector('#enviar');
const containerRadios = document.querySelector('.gender-block');
const arrRadios = document.querySelectorAll('.gender-input');
const divErro = document.createElement('div');
const divUndefined = document.querySelector('#show-undefined');


/* Validando radio button */
divErro.className = 'error esconder';
divErro.setAttribute('data-type', 'validator-error');
divErro.innerHTML = 'Escolha um gênero. Você poderá alterar quem pode ver isso posteriormente.';
containerRadios.appendChild(divErro);

function checkGenero() {
  for (let i = 0; i < arrRadios.length; i += 1) {
    if (arrRadios[i].checked) {
      divErro.classList.add('esconder');
      break;
    } else {
      divErro.classList.remove('esconder');
    }
  }
}

function alterGenero(item) {
  item.addEventListener('blur', checkGenero);
  item.addEventListener('change', checkGenero);
}

arrRadios.forEach(alterGenero);
botaoEnviar.addEventListener('click', checkGenero);

/* Escondendo/Mostrando Div dependendo do gênero escolhido */

function mostraChildUndefined() {
  const valorRadio = document.querySelector('input[name=genero]:checked');
  if (valorRadio.value === 3) {
    divUndefined.classList.remove('esconder');
  } else {
    divUndefined.classList.add('esconder');
  }
}

function changeRadio(item) {
  item.addEventListener('change', mostraChildUndefined);
}

arrRadios.forEach(changeRadio);
