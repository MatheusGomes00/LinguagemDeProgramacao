function calcularValor(){
    var valorMinuto = document.getElementById("inValorMin")
    var inValorMin = Number(valorMinuto.value)
    var tempoUso = document.getElementById("inTempo")
    var inTempo = Number(tempoUso.value)
    var outResposta = document.getElementById("outResposta")

    if(inValorMin <= 0 || inTempo <= 0){
        alert("Preencha os campos corretamente.")
        document.getElementById("inValorMin").value = ""
        document.getElementById("inTempo").value = ""
        valorMinuto.focus()
    }

    if(inTempo % 15 === 0){
        var valorApagar = (inTempo / 15) * inValorMin
    }else{
        valorApagar = (parseInt(inTempo / 15) + 1) * inValorMin
    }
    
    outResposta.textContent = `Valor a pagar R$: ${valorApagar}`
}


var btCalcular = document.getElementById("btCalcularValor")
btCalcular.addEventListener('click', calcularValor)

