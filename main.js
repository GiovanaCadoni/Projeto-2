const form = document.getElementById('form-cadastro');
const nomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function adicionaLinha() {
    const inputNomeMorador = document.getElementById('nome');
    const inputNumero = document.getElementById('numero');

    if (numeros.includes(inputNumero.value)) {
        alert (`O número ${inputNumero.value} já está cadastrado`);
    } else {
        numeros.push(inputNumero.value);
        nomes.push(parseFloat(inputNomeMorador.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeMorador.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += '</tr>'

        linhas += linha;
    }

    inputNomeMorador.value = '';
    inputNumero.value = '';
}


