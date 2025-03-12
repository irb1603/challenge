const nomeInput = document.getElementById('nome');
const adicionarButton = document.getElementById('adicionar');
const sortearButton = document.getElementById('sortear');
const resultadoDiv = document.getElementById('resultado');
let nomes = [];

adicionarButton.addEventListener('click', () => {
    const nome = nomeInput.value.trim();
    if (nome) {
        nomes.push(nome);
        nomeInput.value = '';
    }
});

sortearButton.addEventListener('click', () => {
    if (nomes.length < 2) {
        resultadoDiv.textContent = 'Adicione pelo menos dois nomes para sortear.';
        return;
    }
    const indiceSorteado = Math.floor(Math.random() * nomes.length);
    const nomeSorteado = nomes[indiceSorteado];
    resultadoDiv.textContent = `O amigo secreto sorteado é: ${nomeSorteado}`;
});
