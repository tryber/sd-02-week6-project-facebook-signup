/* global validation */

function gambiarraData() {
  const datepicker = document.getElementById('datepicker');
  if (datepicker.value === '') {
    event.preventDefault();
    alert('Preencha sua data de nascimento');
  }
}

document.getElementById('datepicker').DatePickerX.init({
  format: 'dd/mm/yyyy',
});

validation.init('#direita', {
  events: ['change', 'paste', 'keyup']
});

const botaoCadastro = document.getElementById('botao-envia');
botaoCadastro.addEventListener('click', gambiarraData);
