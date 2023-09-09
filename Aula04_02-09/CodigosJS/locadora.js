function converterDuracao(){
    // referência aos elementos da página
    var inTitulo = document.getElementById("inTitulo")
    var inDuracao = document.getElementById("inDuracao")
    var outTitulo = document.getElementById("outTitulo")
    var outDuracao = document.getElementById("outDuracao")

    // obtém os conteúdos dos campos de entrada
    var titulo = inTitulo.value
    var duracao = Number(inDuracao.value)


    // arredonda hora para baixo
    var horas = Math.floor(duracao / 60)
    // obter os minutos
    var minutos = duracao % 60

    // altera parágrafos de respostas
    outTitulo.textContent = titulo
    outDuracao.textContent = horas + " hora(s) e " + minutos + " minuto(s)"
}

// refência ao elemento btConverter
var btConverter = document.getElementById("btConverter")
// registra evento associado ao botao e chama a função
btConverter.addEventListener("click", converterDuracao)
 