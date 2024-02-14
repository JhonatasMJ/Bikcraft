

//Menu Ativo//

const links = document.querySelectorAll ('.header-menu a')

function ativarLink(link) {
    const url = location.href;
    const href = link.href;

if (url.includes (href) /* Verifica se a palavra existe na string */) {
    link.classList.add('ativo');  //Adiciona uma classe CSS ao element
}
}


links.forEach (ativarLink)

//Ativar itens do orçamento


//Pegar o array do url

const url = new URLSearchParams (location.search)

function ativarProduto (parametro) {
    const elemento = document.getElementById(parametro)
    if (elemento) {

   elemento.checked = true;
}
}
url.forEach(ativarProduto);

//Perguntas Frequentes

const perguntas = document.querySelectorAll('.perguntas button')

function ativarPergunta(event) {
    const pergunta = event.currentTarget
    const controls = pergunta.getAttribute('aria-controls')
    const resposta = document.getElementById(controls)
    const ativa = resposta.classList.contains ('ativa')
    resposta.classList.toggle('ativa')
    pergunta.setAttribute('aria-expanded', ativa)
}


function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta)
}

perguntas.forEach(eventosPerguntas)


//Geleria

const galeria = document.querySelectorAll('.bicicleta-imagens img')
const galeriaContainer = document.querySelector('.bicicleta-imagens')

function trocarImagem (event) {
    const img = event.currentTarget;
    const midia =  matchMedia('(min-width:1000px)').matches
     if (midia) {
        galeriaContainer.prepend(img) /* Jogando a img para a primeira posição caso a tela tenha mais que 1000px*/
     
     }
}

function eventosGaleria(img) {
    img.addEventListener('click', trocarImagem)
}

galeria.forEach(eventosGaleria);