$(".tamanho").text($(".frase").text().split(" ").length);

var digitacao = $(".digitacao");
digitacao.on("input", function(){
    var texto = digitacao.val();
    $(".count-char").text(texto.length);
    $(".count-words").text(texto.split(/\S+/).length - 1);
});

var tempo = $(".tempo")
var tempoRestante = 10;
tempo.text(tempoRestante);
    digitacao.one("input", function(){
    var countdown = setInterval(function(){
        tempo.text(tempoRestante);
        tempoRestante--;
        if (tempoRestante < 0){
            digitacao.attr("disabled", true);
            clearInterval(countdown);
        }
    }, 1000);
});