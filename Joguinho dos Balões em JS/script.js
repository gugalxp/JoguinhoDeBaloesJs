// criar balao
// estourar balao
// carregar joho

totBalaoRM = 0;
totalBalaoAp = 0;
totalBalaoRemovido = 0;

function criarBalao() {

    var balao = document.createElement('div');
    contagemBalao = balao.setAttribute("class", "balao");

    var x = Math.floor(Math.random() * 1200);
    var y = Math.floor(Math.random() * 700);

    var randomColor = Math.floor(Math.random() * 16777215).toString(16);

    balao.setAttribute("style", "left:" + x + "px;top:" + y + "px;background-color: #" + randomColor);
    balao.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(balao);

    totalBalaoAp++;

    var totalBalao = document.getElementById('totalBalao');

    totalBalao.innerHTML = "O total de balões na tela são: " + totalBalaoAp;



}

function estourar(objeto) {


    document.body.removeChild(objeto);

    totBalaoRM++;
    var score = document.getElementById('totBalaoRM');
    score.innerHTML = "O total de balões estourados são: " + totBalaoRM;

    totalBalaoRemovido -= 1;
    var totalBalaqeuremovi = document.getElementById('totalBalaoRemovido');

    totalBalaqeuremovi.innerHTML = "O total de balões estourados foram: " + totalBalaoAp;

    if (totalBalaoAp == 5) {

        var ganhei = document.getElementById('gameGain');

        ganhei.innerHTML = "GANHEI A PARTIDA!!!!! Atingi o numero: " + totalBalaoAp;

    }
}


function carregarJogo() {

    setInterval(criarBalao, 1000);

}