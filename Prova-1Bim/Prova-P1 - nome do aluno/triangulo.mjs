function verificaT(){
    var ladoA = document.getElementById("inLadoA")
    var inLadoA = Number(ladoA.value)
    var ladoB = document.getElementById("inLadoB")
    var inLadoB = Number(ladoB.value)
    var ladoC = document.getElementById("inLadoC")
    var inLadoC = Number(ladoC.value)
    var outResposta = document.getElementById("outResposta")

    if(inLadoA === 0 || inLadoB === 0 || inLadoC === 0){
        alert("Informe lados válidos para os triângulo!")
        limpaCampos()
    }else{
        if(inLadoA + inLadoB > inLadoC && inLadoA + inLadoC > inLadoB && inLadoB + inLadoC > inLadoA){
            var formaT = true
            if(inLadoA === inLadoB && inLadoB === inLadoC){
                var tipoTriang = "Equilátero"
                limpaCampos()
            }else if(inLadoA === inLadoB || inLadoA === inLadoC || inLadoB === inLadoC){
                tipoTriang = "Isósceles"
                limpaCampos()
            }else if(inLadoA !== inLadoB || inLadoA !== inLadoC || inLadoB !== inLadoC){
                tipoTriang = "Escaleno"
                limpaCampos()
            }
        }else{
            formaT = false 
        }
        
        if(formaT){
            outResposta.innerHTML = `Lados podem formar um triangulo <br> Tipo: ${tipoTriang}`
            
        }else{
            outResposta.innerHTML = "Não é possível formar um triangulo com os lados fornecidos"
            limpaCampos()
        }
    }

    function limpaCampos(){
        document.getElementById("inLadoA").value = ''
        document.getElementById("inLadoB").value = ''
        document.getElementById("inLadoC").value = ''
        ladoA.focus()
        return
    }
}

var btVerificar = document.getElementById("btVerificar")
btVerificar.addEventListener("click", verificaT)


