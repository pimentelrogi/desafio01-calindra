// $(document).ready(function () {

//     $.get('https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=camiseta&source=nanook').then((result) => {

//         console.log(result);

//         $('#resultado').append('<p>' + result.products[5].name + '</p>');

//     }).catch((erro) => {

//         console.log(erro.responseText);

//     });
// }); FUNÇÃO QUE TRÁS O RESULTADO AO CARREGAR A PÁGINA HTML

function procurarProduto() {
    $.get('https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=camiseta&source=nanook').then((result) => {

       console.log(result);
        

    }).catch((erro) => {

        console.log(erro.responseText);

        
        
    });


}


