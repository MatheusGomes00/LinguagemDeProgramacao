function calcularRaiz(){
    var numero = document.getElementById("inNumero")
    var inNumero = Number(numero.value)
    var outResposta = document.getElementById("outResposta")

    raiz = Math.sqrt(inNumero)
    console.log(raiz)
    if(raiz % 1 === 0){
        outResposta.textContent = `A raiz quadrada de ${inNumero} é: ${raiz}`
    }else{
        outResposta.textContent = `Não há raiz exata para ${inNumero}`
    }
}

var btExibir = document.getElementById("btExibir")
btExibir.addEventListener("click", calcularRaiz)
