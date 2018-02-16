function adicionaPlacar(nome, palavras, char, tempo){
    var row = $("<tr>").addClass("item-placar");
    var nome = $("<td>").addClass("placar-usuario").text(nome);
    var palavras = $("<td>").addClass("placar-palavras").text(palavras);
    var charPorSegundo = $("<td>").addClass("placar-char-segundo").text(char/tempo);
    var tdRemover = $("<td>").addClass("placar-remover");
    var remover = $("<a>").addClass("remover-placar").attr("href", "#").append("<i>").addClass("small").addClass("material-icons").text("delete");
    tdRemover.append(remover);
    row.append(nome).append(palavras).append(charPorSegundo).append(tdRemover);
    $(".corpo-tabela").append(row);
    $(".placar").slideDown(500);
    scrollPlacar();

    remover.on("click", function removeLinha(event){
        event.preventDefault()
        var linha = $(this).parent().parent();
        linha.fadeOut(500);
        setTimeout(function(){
            linha.remove();
        },500);
        
    });
}
showPlacar();
function showPlacar(){
    var btnShowPlacar = $(".show-placar");
    btnShowPlacar.on("click", function(){
        $(".placar").slideToggle(500);
        scrollPlacar();
    });
}
function scrollPlacar(){
    var posicaoPlacar = $(".placar").offset().top;
    var body = $("html, body");
    body.animate({
        scrollTop: posicaoPlacar + "px"
    }, 1000);

}