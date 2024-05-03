const form = document.getElementById('formvalidador');
const valorCampoA = document.getElementById('campa');
const valorCampoB = document.getElementById('campb');


function validaCampo(primeironumero, segundonumero){
    return primeironumero.value < segundonumero.value;
}


form.addEventListener('submit', function(e){
    e.preventDefault()

    const msgerror =document.getElementById('erro')
    const msgsucess =document.getElementById('acerto')

    if (validaCampo(valorCampoA,valorCampoB)){
        valorCampoA.value = '';
        valorCampoB.value ='';

        msgsucess.classList.add('messagesucesso')
        msgerror.classList.remove('errormsg')
    }else{
        msgsucess.classList.remove('messagesucesso')
        msgerror.classList.add('errormsg')
    }
})
