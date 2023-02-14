//Deixando o campo de texto criptografado oculto (div) 

document.getElementById('mostrar').style.display = 'none';

var textoPrinc = '';
var textoPronto = '';


//Função para corrigir texto caso tenha letras maiúsculas e acentos 

function verificaTexto() {
    textoPrinc = document.getElementById('texto').value;
    //variável textoPrinc recebe o valor digitado no elemento 'texto'
    if (textoPrinc !== '') {
    //ele verifica se o campo não está vazio
    document.getElementById('semTexto').style.display = 'none';
    //ele esconde a div que contém a imagem e o texto para digitar a mensagem
    document.getElementById('mostrar').style.display = 'inline';
    //ele mostra a div com a caixa de texto criptografado
    textoPronto = textoPrinc.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'');
    //converte todo o texto em letras minúsculas e remove acentos
        return textoPronto;
    }
}

//função para executar a criptografia
function botaoCrip() {
    verificaTexto();
    criptografar();
    enviaTexto();
}

//função para executar se o botão descriptografar for apertado
function botaoDescrip() {
    verificaTexto();
    descriptografar();
    enviaTexto();
}

function criptografar() {
    novoTexto = '';
    //garante que o campo seja limpo cada vez que o botão for apertado
    for (var letra = 0; letra < textoPronto.length; letra++) {
    //o for vai percorrer o texto escrito e substituir as letras
        if (textoPronto[letra] == 'e') {
            novoTexto += 'enter';
        } else if (textoPronto[letra] == 'i') {
            novoTexto += 'imes';         
        } else if (textoPronto[letra] == 'a') {
            novoTexto += 'ai';
        } else if (textoPronto[letra] == 'o') {
            novoTexto += 'ober';
        } else if (textoPronto[letra] == 'u') {
            novoTexto += 'ufat';
        } else {
            novoTexto += textoPronto[letra];
        }
    }
    return novoTexto;
   
}

function descriptografar() {
    novoTexto = '';
    novoTexto =
    textoPrinc.replace(/enter/g, 'e')
    .replace(/ai/g, 'a')
    .replace(/ufat/g, 'u')
    .replace(/imes/g, 'i')
    .replace(/ober/g, 'o');
    return novoTexto;
  
}

function enviaTexto() {
    var resultado = document.getElementById('criptografado');
    //variável recebe o campo 'criptografado' que é a div onde o texto irá aparecer
    resultado.innerHTML = novoTexto;
    //envia o texto para a div selecionada na variável
}

//botão de copiar:
document.getElementById('copiar').addEventListener('click', copiaTexto);
//seleciona o botão 'copiar' e aciona um evento quando ele é clicado
async function copiaTexto() {
  await navigator.clipboard.writeText(novoTexto);
  //ativa a função que irá copiar o texto
}
  
var button = document.getElementById("crip");
button.onclick = botaoCrip;

var button = document.getElementById("descrip");
button.onclick = botaoDescrip;