function adicionaPlacar(nome, char){
    var row = $("<tr>").addClass("item-placar");
    var nome = $("<td>").addClass("placar-usuario").text(nome);
    var pontos = $("<td>").addClass("placar-pontos").text(char);
    var tdRemover = $("<td>").addClass("placar-remover");
    var remover = $("<a>").addClass("remover-placar").attr("href", "#").append("<i>").addClass("small").addClass("material-icons").text("delete");
    tdRemover.append(remover);
    row.append(nome).append(pontos).append(tdRemover);
    $(".corpo-tabela").append(row);
    $(".placar").slideDown(500);
    scrollPlacar();

    remover.on("click", function removeLinha(event){
        event.preventDefault()
        var linha = $(this).parent().parent();
        linha.fadeOut(500);
        setTimeout(function(){
            linha.remove();
            sync();
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
function sync(){
    var arrayPlacar = [];
    $("tbody>tr").each(function(){
        var score = {
            usuario: $(this).find(".placar-usuario").text(),
            pontos: $(this).find(".placar-pontos").text()
        }
        arrayPlacar.push(score);
    });
    var dados = { placar: arrayPlacar }
    
    $.post("http://localhost:3000/placar", dados);
}

function getPlacar(){
    $.get("http://localhost:3000/placar", function(data){
        $(data).each(function(){
            adicionaPlacar(this.usuario, this.pontos);
        });
    });
}