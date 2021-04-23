function natal(){
    
    document.getElementById("corpo").style.backgroundImage = 'url(../imagens/natal.jpg)';
}

function outros(){
   
}

function aniversario(){
    
    document.getElementById("corpo").style.backgroundImage = 'url(../imagens/aniversario.jpg)';
}

function casamento(){
    
    document.getElementById("corpo").style.backgroundImage = 'url(../imagens/casamento.jpg)';
}

function pascoa(){
   
    document.getElementById("corpo").style.backgroundImage = 'url(../imagens/pascoa.jpg)';
}

function diaDosNamorados(){
   
    document.getElementById("corpo").style.backgroundImage = 'url(../imagens/diaDosNamorados.jpg)';
}

function enviarSolicitacao() {
    $("#myModal").removeClass("in");
    $(".modal-backdrop").remove();
    $("#myModal").hide();
    


    $.ajax({
        url: "http://localhost:5001/Home/enviarSolicitacao",
        type: 'POST',
        data: {
            nomePresenteador: `${document.getElementById('validationCustom01').value}`,
            nomePresenteada: `${document.getElementById('validationCustom02').value}`,
            tipoPresenteado: `${$("#validationCustom04 option:selected").text()}`,
            relacao: `${$("#validationCustom05 option:selected").text()}`,
            tipoDataComemorativa: `${$("#validationCustom06 option:selected").text()}`,
            personalidade1: `${$("#validationCustom08 option:selected").text()}`,
            personalidade2: `${$("#validationCustom09 option:selected").text()}`
        },
        success: function (result) {
            console.log("teste");

            $.ajax({
                contentType: 'application/json',
                cache: false,
                method: 'GET', 
                url: "http://localhost:5001/Home/BuscarSolicitacao?idsolicitacao=" + result,
                success: function (result) {
                    console.log(result);
                   
                }
            });
        }
    });

    document.getElementById("listaPresentes").innerHTML = `<table class="table table-dark table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Nome do Presente</th>
                      <th scope="col">Descrição</th>
                      <th scope="col">Site para compra</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Marvel</td>
                      <td>Livro de fantasia</td>
                      <td ><a href="https://www.amazon.com.br/Trilogia-Star-Wars-IV-VI/dp/B07GCQGHNS">Link aqui!</a></td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>The Marvel Book</td>
                      <td>Livro de fantasia</td>
                      <td ><a href="https://www.amazon.com.br/Marvel-Book-Expand-Knowledge-Universe/dp/146547899X/ref=asc_df_146547899X/?tag=googleshopp00-20&linkCode=df0&hvadid=379736262876&hvpos=&hvnetw=g&hvrand=3509759156428997863&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001776&hvtargid=pla-820491794135&psc=1">Link aqui!</a></td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Batman: Criaturas da Noite</td>
                      <td>Livro de fantasia</td>
                      <td ><a href="https://www.amazon.com.br/Batman-Criaturas-Noite-Lendas-Livro-ebook/dp/B078WCBPLM/ref=sr_1_4?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=livro+dc&qid=1619030343&s=books&sr=1-4">Link aqui!</a></td>
                    </tr>
                    
                  </tbody>
                </table>`

    //$.ajax({
    //    url: "demo_test.txt", success: function (result) {
    //        $("#div1").html(result);
    //    }
    //});

}