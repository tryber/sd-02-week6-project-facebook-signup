/* global validation */

function verificaDados(){
	const usuario = document.getElementById('input-user');
	const senha = document.getElementById('input-password');
	if (usuario.value === '') {
		alert ('Digite seu nome de usuário.');
	} else if (senha === '') {
		alert ('Digite sua senha.');
	} else{
		alert ('Login bem sucedido!');
	}
}

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
  events: ['change', 'paste', 'keyup'],
});

const botaoLogin = document.getElementById('botao-login');
botaoLogin.addEventListener('click', verificaDados);

const botaoCadastro = document.getElementById('botao-envia');
botaoCadastro.addEventListener('click', gambiarraData);
