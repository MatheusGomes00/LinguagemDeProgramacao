function calcularPromo(){
    var mediacamento = document.getElementById("inMedicamento")
    var inMedicamento = mediacamento.value
    var preco = document.getElementById("inPreco")
    var inPreco = Number(preco.value)
    var outResposta = document.getElementById("outResposta")

    if(inMedicamento === '' || inPreco <=0){
        alert("Preencha os campos corretamente.")
        document.getElementById("inMedicamento").value = ''
        document.getElementById("inPreco").value = ''
        mediacamento.focus()
        return
    }


    var valorPromo = parseInt(inPreco) * 2

    outResposta.innerHTML = `Promoção de ${inMedicamento}<br> Leve 2 por apenas R$:${valorPromo}`

}
var btMostrar = document.getElementById("btMostrarPromo")
btMostrar.addEventListener('click', calcularPromo)
