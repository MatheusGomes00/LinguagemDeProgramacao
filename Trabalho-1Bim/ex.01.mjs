function calcularPreco(){
    var valorQuilo = document.getElementById("inValorQuilo")
    var inValorQuilo = Number(valorQuilo.value)
    var consumo = document.getElementById("inConsumo")
    var inConsumo = Number(consumo.value)
    var outResposta = document.getElementById("outResposta")

    if(inValorQuilo <= 0 || inConsumo <= 0){
        alert("Preencha os dois campos corretamente.")
        document.getElementById("inValorQuilo").value = ""
        document.getElementById("inConsumo").value = ""
        valorQuilo.focus()
        return
    }
    
    var precoApagar = (inValorQuilo * inConsumo) / 1000

    outResposta.textContent = `Valor a pagar R$: ${precoApagar.toFixed(2)}`
}


var btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener('click', calcularPreco)
