const menorValor = 1
const maiorValor = 1000
const elementoMenorValor = document.getElementById('menor-valor')
const elementoMaiorValor = document.getElementById('maior-valor')

elementoMenorValor.innerHTML= menorValor
elementoMaiorValor.innerHTML = maiorValor

const numeroSecreto = gerarNumeroAleatorio()
function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1)
}
console.log("O numero secreto é:", numeroSecreto)