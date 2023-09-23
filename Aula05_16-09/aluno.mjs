function calcularMedia(){
    // criar referencia aos elementos da página
    var inNome = document.getElementById("inNome")
    var inNota1 = document.getElementById("inNota1")
    var inNota2 = document.getElementById("inNota2")
    var outMedia = document.getElementById("outMedia")
    var outSituacao = document.getElementById("outSituacao")

    // obter os conteúdos dos campos da página
    var nome = inNome.value
    var nota1 = Number(inNota1.value)
    var nota2 = Number(inNota2.value)

    // calcular os dados
    var media = (nota1 + nota2) / 2

    // apresentar a média (altera o conteúdo do elemento outMedia/outSituacao)
    outMedia.textContent = `Média das notas: ${media.toFixed(1)}`
    
    if(media >= 7){
        // altera o texto e estilo cor do elemento outSituacao
        outSituacao.textContent = `Parabéns ${nome}! Você foi aprovado(a)`
        outSituacao.style.color = "blue"
    }else if (media >=4){
        outSituacao.textContent = `Atenção ${nome} vocÊ está de sub`
        outSituacao.style.color = "green"
    }else{
        outSituacao.textContent = `Reprovado`
        outSituacao.style.color = "red"
    }    
}

var btResultado = document.getElementById("btResultado")
btResultado.addEventListener("click", calcularMedia)