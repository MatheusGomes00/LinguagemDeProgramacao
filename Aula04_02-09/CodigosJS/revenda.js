function verificaPromo(){
    // referência aos elementos da página
    var inVeiculo = document.getElementById("inVeiculo")
    var inPreco = document.getElementById("inPreco")
    var outVeiculo = document.getElementById("outVeiculo")
    var outEntrada = document.getElementById("outEntrada")
    var outParcelas = document.getElementById("outParcelas")
    
    // obtém os conteúdos dos campos de entrada
    var veiculo = inVeiculo.value
    var preco = Number(inPreco.value)
    
    // calcula o valor da entrada e das parcelas
    var entrada = preco / 2
    var parcelas = entrada / 12

    // altera parágrafos de resposta
    outVeiculo.textContent = "Promoção: " + veiculo
    outEntrada.textContent = "Entrada: R$" + entrada.toFixed(2)
    outParcelas.textContent = "12x de R$" + parcelas.toFixed(2)
}

// referência ao elemento "btPromocao"
var btPromocao = document.getElementById("btPromocao")
// registra evento de entrada e associa botão que chama a função
btPromocao.addEventListener("click", verificaPromo)
