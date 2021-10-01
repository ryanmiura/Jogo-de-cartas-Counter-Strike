var cartas = [
    card_zywoo = { nome: "ZywOo", stats: { major: 0, rating: 1.27, kd: 1.38, maps: 874, diff: "+5346" }, img: "https://img-cdn.hltv.org/playerbodyshot/FU6cX0sBXlqI-UGYm_92sq.png?bg=3e4c54&h=200&ixlib=java-2.1.0&rect=140%2C12%2C451%2C451&w=200&s=ff93670ce9dba75364d08a0cb4e04270" },
    card_simple = { nome: "s1mple", stats: { major: 0, rating: 1.25, kd: 1.33, maps: 1442, diff: "+8139" }, img: "https://img-cdn.hltv.org/playerbodyshot/RGemStZHTfFk8AAjkJrbTR.png?bg=3e4c54&h=200&ixlib=java-2.1.0&rect=128%2C8%2C447%2C447&w=200&s=a9fce418efc5dfcd8bfa70f67ec271ea" },
    card_shiro = { nome: "sh1ro", stats: { major: 0, rating: 1.22, kd: 1.44, maps: 746, diff: "+4611" }, img: "https://img-cdn.hltv.org/playerbodyshot/BdarGeGFrVkqTeGANja0Gk.png?bg=3e4c54&h=200&ixlib=java-2.1.0&rect=109%2C12%2C494%2C494&w=200&s=e5357d315848e713518a809e9682919f" },
    card_coldzera = { nome: "coldzera", stats: { major: 2, rating: 1.16, kd: 1.27, maps: 1337, diff: "+5673" }, img: "https://img-cdn.hltv.org/playerbodyshot/q1FEKlj4Xp2IjCQ8bTTfzK.png?bg=3e4c54&h=200&ixlib=java-2.1.0&rect=140%2C35%2C436%2C436&w=200&s=9f81108a50e10df5d953eca67443d6d0" },
    card_device = { nome: "device", stats: { major: 4, rating: 1.16, kd: 1.25, maps: 1747, diff: "+7035" }, img: "https://img-cdn.hltv.org/playerbodyshot/e-VpY--MZr_3XFDmj8DBd6.png?bg=3e4c54&h=200&ixlib=java-2.1.0&rect=124%2C12%2C467%2C467&w=200&s=be6cce908948cc957456a583af69c172" },
    card_forest = { nome: "f0rest", stats: { major: 1, rating: 1.11, kd: 1.17, maps: 1945, diff: "+5625" }, img: "https://img-cdn.hltv.org/playerbodyshot/mVxFFZz33sbG8ftyVlajpL.png?bg=3e4c54&h=200&ixlib=java-2.1.0&rect=140%2C16%2C428%2C428&w=200&s=ec3859d664ac44ba6e3bd07db9dc4730" },
    card_fallen = { nome: "FalleN", stats: { major: 2, rating: 1.07, kd: 1.16, maps: 1443, diff: "+3580" }, img: "https://img-cdn.hltv.org/playerbodyshot/BVGgD5hJMifm1iVGXFwbws.png?bg=3e4c54&h=200&ixlib=java-2.1.0&rect=124%2C8%2C459%2C459&w=200&s=f757fe89d6e2e7b05d9454bf6438242f" },
]
var cartaJogador
var cartaMaquina    
var resultado = document.querySelector("#resultado")
var radioStats = document.getElementsByName("stats")

function sortearCarta() {

    while (cartaJogador == cartaMaquina) {
        var numeroRandomJ = parseInt(Math.random() * cartas.length)
        cartaJogador = cartas[numeroRandomJ]
        var numeroRandomM = parseInt(Math.random() * cartas.length)
        cartaMaquina = cartas[numeroRandomM]

    }
    document.querySelector("#btnSortear").disabled = true
    document.querySelector("#btnJogar").disabled = false
    console.log(cartaJogador)
    
    exibirCartaJogador()
 radioStats[0].checked= true //codigo marcava o primeiro radio btn



}


function exibirCartaJogador(){
    var divImagemJogador = document.querySelector("#carta-jogador")
    divImagemJogador.style.backgroundImage = "url('"+cartaJogador.img +"')"

    var moldura ="<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style='width: inherit; height: inherit; position: absolute;'>"

    var tagHTML ="<div id='opcoes' class='carta-status'>"

    var opcoesTexto = ""
    for (var stat in cartaJogador.stats) {
        opcoesTexto += "<input  type='radio' name='stats' value='" + stat + "'>" + stat + " : " + cartaJogador.stats[stat] +"<br>"
    }

    var nome = "<p class='carta-subtitle'>"+cartaJogador.nome+"</p>"
    divImagemJogador.insertAdjacentHTML("afterbegin", moldura + nome + tagHTML + opcoesTexto + "</div>")

 }

function obtemStatsSelecionado() {
    for (var i = 0; i < radioStats.length; i++) {
        if (radioStats[i].checked == true) {
            return radioStats[i].value

        } 
    }

}



function jogar() {

   resultado.innerHTML = null

    var statsSelecionado = obtemStatsSelecionado()
    var valorStatsSelecionadoJogador = cartaJogador.stats[statsSelecionado]
    console.log(statsSelecionado)
    console.log(valorStatsSelecionadoJogador)
    var valorStatsSelecionadoMaquina = cartaMaquina.stats[statsSelecionado]
    console.log(valorStatsSelecionadoMaquina)

    if (valorStatsSelecionadoJogador > valorStatsSelecionadoMaquina) {

       
        resultado.insertAdjacentHTML("beforeend", "Voce ganhou")
        resultado.style.backgroundColor="green"

    } else if (valorStatsSelecionadoMaquina > valorStatsSelecionadoJogador) {

        resultado.insertAdjacentHTML("beforeend", "Voce perdeu")
        resultado.style.backgroundColor="red"

    } else if (valorStatsSelecionadoJogador == valorStatsSelecionadoMaquina){

        resultado.insertAdjacentHTML("beforeend", "Deu empate")
        resultado.style.backgroundColor="rgb(211, 208, 28)"

    } 
    exibirCartaMaquina()
    document.querySelector("#btnJogar").disabled = true
    document.querySelector("#btnJogarDnv").disabled = false



}

function exibirCartaMaquina(){
    var divImagemMaquina = document.querySelector("#carta-maquina")
    divImagemMaquina.style.backgroundImage = "url('"+cartaMaquina.img +"')"

    var moldura ="<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style='width: inherit; height: inherit; position: absolute;'>"

    var tagHTML ="<div id='opcoes' class='carta-status'>"

    var opcoesTexto = ""
    for (var stat in cartaMaquina.stats) {
        opcoesTexto += "<p class='texto-carta-maquina'>" + stat + " : " + cartaMaquina.stats[stat] +"</p>"
    }

    var nome = "<p class='carta-subtitle'>"+cartaMaquina.nome+"</p>"
    divImagemMaquina.insertAdjacentHTML("afterbegin", moldura + nome + tagHTML + opcoesTexto + "</div>")
  
}

function jogarDnv(){
    location.reload()
}