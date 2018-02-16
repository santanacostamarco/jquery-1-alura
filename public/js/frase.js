function getPhrase(){
    var notice = $(".notice");
    notice.addClass("load");
    
    
    $.get("http://localhost:3000/frases", function(data){
        var frase = data[Math.floor(Math.random()*(data.length))];
        $(".frase").text(frase.texto);
        setCountdown(frase.tempo);
        getPhraseSize(frase.texto);
        notice.removeClass("fail");
        notice.text("");
    })
    .always(function(){
        notice.text("");
        notice.removeClass("load");
    })
    .fail(function(){
        notice.addClass("fail");
        notice.text("Desculpe, houve um erro.");
    });
}
