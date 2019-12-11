const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexTelefone = /\d{4,5}-\d{4}/g;


const botaoEntrar = document.querySelector('#botaoEntrar');
let campoInserido = document.getElementsByTagName('input')[0].value

botaoEntrar.addEventListener('click', function () {
  console.log(rolou);
  // event.preventDefault()
  // if (regexEmail == true || regexTelefone == true) {
  //   alert("Você não inseriu um e-mail ou número de telefone válido.");
  // } else {
  //   alert("Login realizado com sucesso!");
  // }
})

// function dados() {
//   let dadosParaValidar = {
//     "nome": document.querySelector("#nome").value,
//     "sobrenome": document.querySelector("#sobrenome").value,
//     "email": document.querySelector("#contato").value,
//     "novaSenha": document.querySelector("#novaSenha").value,
//     //"dataDeNascimento": document.querySelector(XXX).value,
//     "genero": document.querySelector("#genero")
//     "sexo": document.querySelector('input[id='genero']:checked').value,
//   }
//   console.log(dados());
// }