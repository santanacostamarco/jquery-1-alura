function getPhrase(test){
    var notice = $(".notice");
    notice.addClass("load");
    
    $.get("http://localhost:3001/frases", function(data){
        test = typeof test === 'undefined' ? Math.floor(Math.random()*(data.length)) : test; 
        if (test < data.length){
            notice.text("");
            var frase = data[test];
            $(".frase").text(frase.texto);
            setCountdown(frase.tempo);
            getPhraseSize(frase.texto);
            notice.removeClass("fail");
            notice.text("");
            $(".tempo").attr("data-time", frase.tempo);
        } else {
            notice.addClass("fail");
            notice.text("Desculpe, so há " + data.length + " frases");
        }
        
    })
    .always(function(){
        notice.removeClass("load");
    })
    .fail(function(){
        notice.addClass("fail");
        notice.text("Desculpe, houve um erro.");
    });
}
