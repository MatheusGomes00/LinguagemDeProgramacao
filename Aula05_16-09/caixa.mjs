function verificarNotas(){
    var valor = document.getElementById("inValor")
    var inValor = Number(valor.value)
    var outResposta = document.getElementById("outResposta")

    if(inValor > 0 && inValor % 10 === 0){
        switch(true){
            case inValor >= 100:
                var centenaMin = parseInt(inValor / 100)  // 2
                var resto1 = inValor - (centenaMin * 100)  // 80
                if(resto1 > 50){
                    var cinquentaMin = parseInt(resto1 / 50)  // 1
                    var resto2 = resto1 - (cinquentaMin * 50)  // 30
                    var dezMin = resto2 / 10
                    outResposta.innerHTML = `Notas de R$100: ${centenaMin}<br>Notas de R$50: ${cinquentaMin}<br>Notas de R$10: ${dezMin}`
                }else if(resto1 === 50){
                    outResposta.innerHTML = `Notas de R$100: ${centenaMin}<br>Nota de R$50: 1`
                }else if(resto1 >= 10 && resto1 <= 40){
                    dezMin = resto1 / 10
                    outResposta.innerHTML = `Notas de R$100: ${centenaMin}<br>Notas de R$10: ${dezMin}`
                }else{
                    outResposta.textContent = "1 nota de R$100"
                }              
                break

            case inValor === 50:
                outResposta.textContent = "1 nota de R$50"
                break

            case inValor > 50 && inValor <= 90:
                resto1 = inValor - 50
                dezMin = resto1 / 10
                outResposta.innerHTML = `Nota de R$50: 1<br>Notas de R$10: ${dezMin}`
                break
            
            case inValor === 10:
                outResposta.textContent = "1 nota de R$10"
                break

            case inValor > 10 && inValor < 50:
                dezMin = inValor / 10
                outResposta.textContent = `Notas de R$10: ${dezMin}`
                break 

            default:
                outResposta.textContent = "erro"
        }
    }else{
        alert("Valor incompatível com notas disponíveis.")
        document.getElementById("inValor").value = ""
        valor.focus()
    }
}
var btExibir = document.getElementById("btExibir")
btExibir.addEventListener("click", verificarNotas)
