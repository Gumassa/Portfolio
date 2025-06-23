const fala = document.querySelector('.fala p');

function falar(texto) {
    const utter = new SpeechSynthesisUtterance(texto);
    utter.lang = 'pt-BR';
    speechSynthesis.cancel(); // Interrompe fala anterior
    speechSynthesis.speak(utter);
}

// Falas das seções do menu
const frases = {
    "sobre": "Aqui conto um pouco sobre mim!",
    "habilidades": "Essas são as minhas principais habilidades.",
    "projetos": "Veja os projetos que desenvolvi.",
    "contato": "Se precisar só me mande uma mensagem!"
};

document.getElementById('link-sobre').addEventListener('mouseover', () => {
    fala.textContent = frases.sobre;
    falar(frases.sobre);
});
document.getElementById('link-habilidades').addEventListener('mouseover', () => {
    fala.textContent = frases.habilidades;
    falar(frases.habilidades);
});
document.getElementById('link-projetos').addEventListener('mouseover', () => {
    fala.textContent = frases.projetos;
    falar(frases.projetos);
});
document.getElementById('link-contato').addEventListener('mouseover', () => {
    fala.textContent = frases.contato;
    falar(frases.contato);
});

document.querySelector('nav').addEventListener('mouseout', () => {
    const texto = "oii, eu sou o massa e esse é o meu projeto";
    fala.textContent = texto;
    falar(texto);
});

// Falas para os projetos
const projetosFrases = {
    "proj-quente-frio": "Esse é um jogo de adivinhação com pistas visuais.",
    "proj-monalisa": "Esse projeto recria a Monalisa usando programação.",
    "proj-corrida1": "Aqui começa a corrida! A primeira versão do jogo.",
    "proj-corrida2": "A segunda parte traz velocidade e diversão jogando com 4 pessoas!"
};

Object.keys(projetosFrases).forEach(id => {
    const div = document.getElementById(id);
    div.addEventListener('mouseover', () => {
        fala.textContent = projetosFrases[id];
        falar(projetosFrases[id]);
    });
    div.addEventListener('mouseout', () => {
        const texto = "Oii, sou o Massa e esse é o meu projeto";
        fala.textContent = texto;
        falar(texto);
    });
});