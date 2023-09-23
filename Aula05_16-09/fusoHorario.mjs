function calcularFuso(){
    var horaBrasil = document.getElementById("inHora")
    var inHora = parseFloat(horaBrasil.value)
    var outResposta = document.getElementById("outResposta")
    
    if(inHora >= 0 && inHora <= 23.59 && verificaDecimal(inHora)){
        if(inHora >= 19){ 
            var horaFranca = inHora - 19
        }else{ 
            horaFranca = inHora + 5
        }
        outResposta.textContent = `Hora na França: ${horaFranca.toFixed(2)}`
    }else{
        alert("Por favor, informe um horário válido.")
        document.getElementById("inHora").value = ""
        horaBrasil.focus()
        return
    }
}

function verificaDecimal(numero){
    const parteDecimal = numero - Math.floor(numero)
    if (parteDecimal >=0 && parteDecimal <=0.59){
        return true
    }else{
        return false
    }
}

var btExibir = document.getElementById("btExibir")
btExibir.addEventListener("click", calcularFuso)
