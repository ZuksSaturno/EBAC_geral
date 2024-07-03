const form = document.getElementById('formatividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji feliz">';
const imgReprovado ='<img src="./images/reprovado.png" alt="emoji triste">';
const atividades=[];
const notas=[];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha()
    atualizaTabela()
    atualizamediafinal()
    calculamediafinal()
})

function adicionaLinha(){
    const inputNome = document.getElementById('nome-atividade');
    const inputNota = document.getElementById('nota-atividade');

    atividades.push(inputNome.value)
    notas.push(parseFloat(inputNota.value))

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

function atualizamediafinal(){
    const mediafinal=calculamediafinal()
    console.log(somaDasNotas)
}
function calculamediafinal(){
    let somaDasNotas=0;
    for (let i= 0; i <notas.length; i++)
        somaDasNotas += notas[i]
    return somaDasNotas / notas.length;
    
}