const form = document.getElementById('formatividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji feliz">';
const imgReprovado ='<img src="./images/reprovado.png" alt="emoji triste">';

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha()
})

function adicionaLinha(){
    const inputNome = document.getElementById('nome-atividade');
    const inputNota = document.getElementById('nota-atividade');

    let linha = `<tr>`
    linha += `<td>${inputNome.value}</td>`
    linha += `<td>${inputNota.value}</td>`
    linha += `<td>${inputNota.value >= 7 ? imgAprovado : imgReprovado}</td>`
    linha += `</tr>` ;

    linhas += linha;

    inputNome.value=''
    inputNota.value=''
}
function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML= linhas;
}