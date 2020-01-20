var regexNome = /^[a-zA-Z ]{2,30}$/;
var regexSenha = /^([a-zA-Z0-9_-]){8,30}$/;
var regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var regexCalendario = /^\d{1,2}[./-]\d{1,2}[./-]\d{4}$/;
var emailOuTelefone = document.getElementById("entradaEmail");
var senha = document.getElementById("entradaSenha");
var nomeRegistrado = document.getElementById("inserirNome");
var sobrenomeRegistrado = document.getElementById("inserirSobrenome");
var emailOuTelefoneRegistrado = document.getElementById("inserirEmailSenha");
var senhaRegistrada = document.getElementById("inserirSenha");
var dataDeNascimento = document.getElementById("calendario");
var sectionBody = document.getElementsByClassName("corpoSection")[0];
var resposta;

function validarDadosDeEntrada() {
    let respostaValidacaoEmailOuTelefone = validandoEmailOuTelefone(emailOuTelefone);
    let respostaValidacaoSenha = validandoSenha(senha);
    if (respostaValidacaoEmailOuTelefone == true && respostaValidacaoSenha == true) {
        alert("Login realizado com sucesso!");
        emailOuTelefone.value = "";
        senha.value = "";
    } else {
        alert("Email ou senha inválidos!");
    }
}

function validarDadosCadastro() {
    let respostaValidacaoNome = validandoNome(nomeRegistrado);
    let respostaValidacaoSobrenome = validandoNome(sobrenomeRegistrado);
    let respostaValidacaoEmailOuTelefoneRegistrado = validandoEmailOuTelefone(emailOuTelefoneRegistrado);
    let respostaValidacaoSenhaRegistrada = validandoSenha(senhaRegistrada);
    let respostaValidacaoDataDeNascimento = validandoData(dataDeNascimento);
    let respostaValidacaoGenero = validandoGenero();
    let respostasInvalidas = [];
    let contador = 0;

    if (respostaValidacaoNome == false) {
        respostasInvalidas.push(" Nome");
        contador++;
    }
    if (respostaValidacaoSobrenome == false) {
        respostasInvalidas.push(" Sobrenome");
        contador++;
    }
    if (respostaValidacaoEmailOuTelefoneRegistrado == false) {
        respostasInvalidas.push(" Email ou telefone");
        contador++;
    }
    if (respostaValidacaoSenhaRegistrada == false) {
        respostasInvalidas.push(" Senha");
        contador++;
    }
    if (respostaValidacaoDataDeNascimento == false) {
        respostasInvalidas.push(" Data de nascimento");
        contador++;
    }
    if (respostaValidacaoGenero == undefined) {
        respostasInvalidas.push(" Gênero")
        contador++;
    }
    if (contador > 0) {
        alert("Dados inválidos nos campos: " + respostasInvalidas + ".");
    } else {
        alert("Dados cadastrados: " + "Nome: " + nomeRegistrado.value + "; Sobrenome: " + sobrenomeRegistrado.value + "; Email ou telefone: " + emailOuTelefoneRegistrado.value + "; Senha: " + senhaRegistrada.value + "; Data de nascimento: " + dataDeNascimento.value + "; Gênero: " + respostaValidacaoGenero + ".");
        limpandoCampos();
    }
}

function validandoNome(nomeRegistrado) {
    resposta = regexNome.test(nomeRegistrado.value);
    return validacao;
}

function validandoEmailOuTelefone(emailOuTelefone) {
    validacao = regexEmail.test(emailOuTelefone.value);
    return validacao;
}

function validandoSenha(senha) {
    validacao = regexSenha.test(senha.value);
    return validacao;
}

function validandoData(dataDeNascimento) {
    validacao = regexCalendario.test(dataDeNascimento.value);
    return validacao;
}

function validandoGenero() {
    let opcoesDeGenero = document.getElementsByClassName("radio");
    let numeroDeOpcoesDeGenero = opcoesDeGenero.length;
    let genero = [];
    for (let index = 0; index < numeroDeOpcoesDeGenero; index++) {
        genero = document.getElementsByClassName("radio")[index];
        if (genero.checked) {
            validacao = genero;
        }
    }
    if (validacao.value == "Personalizado") {
        validacao = document.getElementById("personalized-gender");
    }
    return validacao.value;
}

function limpandoCampos() {
    emailOuTelefoneRegistrado.value = "";
    senhaRegistrada.value = "";
    nomeRegistrado.value = "";
    sobrenomeRegistrado.value = "";
    dataDeNascimento.value = "";
}