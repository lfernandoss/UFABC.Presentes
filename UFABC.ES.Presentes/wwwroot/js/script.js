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
    var texto = ``
    


    $.ajax({
        url: "http://localhost:5001/Home/enviarSolicitacao",
        type: 'POST',
        data: {
            
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
                    for (var i = 0; i < result.length; i++) {
                        texto += ` <tr>
                      <th scope="row">${i}</th>
                      <td>${result[i]["nome"]}</td>
                      <td>${result[i]["descricao"]}</td>
                      <td ><a href="${result[i]["url"]}">Link aqui!</a></td>
                    </tr>`
                  
                    }
                    document.getElementById("listaPresentes").innerHTML += `<table class="table table-dark table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Nome do Presente</th>
                      <th scope="col">Descrição</th>
                      <th scope="col">Site para compra</th>
                    </tr>
                  </thead>
                    <tbody>${texto}               
                    
                    
                  </tbody>
                </table>`
                    
                   
                }
            });
        }
    });

   

    //$.ajax({
    //    url: "demo_test.txt", success: function (result) {
    //        $("#div1").html(result);
    //    }
    //});

}