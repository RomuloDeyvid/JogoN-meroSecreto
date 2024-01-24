function verificaSeOChutePossuiUmValorValido(chute){
    const numero =+chute
    if(chuteForInvalido(numero)){
        if(chute.toUpperCase() === "GAME OVER"){
            document.body.innerHTML = `
            <h1>Game Over!!!</h1>
            <h3>Pressione o botão para jogar novamente</h3>
            <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
            `
            document.body.style.background = "black"
        }
        else {elementoChute.innerHTML += '<div>Valor Inválido</div>'
        }
    }
    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `<div>Valor invalido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }
    if(numero == numeroSecreto){
        document.body.innerHTML = `
        <h1>Você acertou!</h1>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    }
    else if(numero > numeroSecreto){
        elementoChute.innerHTML += ` 
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    }
    else if (numero < numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

function chuteForInvalido(numero) {

    return Number.isNaN(numero)
}

document.body.addEventListener('click', e =>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})