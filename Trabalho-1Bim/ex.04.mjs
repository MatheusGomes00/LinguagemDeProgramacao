function verificarPromo(){
    var produto = document.getElementById("inProduto")
    var inProduto = produto.value
    var preco = document.getElementById("inPreco")
    var inPreco = Number(preco.value)
    var outResposta = document.getElementById("outResposta")

    if(inPreco <= 0){
        alert("Digite um valor válido.")
        document.getElementById("inPreco").value = ""
        preco.focus()
        return
    }
    var desconto = inPreco / 2
    var valorCompra = parseFloat((inPreco * 2) + desconto)
    outResposta.innerHTML = `${inProduto} - Promoção: Leve 3 por R$${valorCompra.toFixed(2)}<br> O 3º produto custa apenas R$${desconto}`
}
var btVerPromo = document.getElementById("btVerPromo")
btVerPromo.addEventListener("click", verificarPromo)

