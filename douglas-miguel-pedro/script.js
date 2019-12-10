const pikaday = new Pikaday({
  field: document.getElementById('datepicker'),
  toString(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
  firstDay: 1,
  maxDate: new Date(2022, 12, 31),
  yearRange: [2000, 2020],
});

const botaoAzul = document.getElementsByClassName('azul')[0];
botaoAzul.addEventListener('click', function () {
  const botoesLogin = document.querySelectorAll('.primeirosInputs');
  if (botoesLogin[0].value == '') {
    alert('Ta vazio')
  } if (botoesLogin[1].value == '') {
    alert('o 2 ta vazio')
  } if( botoesLogin[0].value != '' && botoesLogin[1].value != '' ) {
    alert('Login realizado com sucesso')
  }
  event.preventDefault();
});
