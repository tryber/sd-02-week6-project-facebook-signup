function dados() {
  let dadosParaValidar = {
    "nome": document.querySelector("#nome").value,
    "sobrenome": document.querySelector("#sobrenome").value,
    "email": document.querySelector("#contato").value,
    "novaSenha": document.querySelector("#novaSenha").value,
    //"dataDeNascimento": document.querySelector(XXX).value,
    "sexo": document.querySelector('input[id='genero']:checked').value,
  }
  return dadosParaValidar
}
