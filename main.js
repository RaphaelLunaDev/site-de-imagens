$(document).ready(function() /*Assim se chama o JQuery*/{



    /*Duas formas de chamar um evento no jQuerry : */
    $('header button').click(function() /* "function" callBack */ {
        $('form').slideDown() //animação de slideDown//
    })
    $('#botao-cancelar').click(function(){
        $('form').slideUp() //animação de slideUp//
    })

    $('form').on('submit', function(e){
        e.preventDefault() /*faz a pagina não recarregar */
        const enderecoNovaImagem = $('#endereço-imagem').val(); /*quando é um Jquerry é assim que se coloca o value */

        const novoItem = $('<li style="display: none"></li>')/*display none para conseguir adicionar uma animação dps */

        $(`<img src=    "${enderecoNovaImagem}" />`).appendTo(novoItem) /*o "appendTo" pega o elemento "$(`<img src= "${endereçoNovaImagem}" />`"  e coloca entre os Li do novoItem*/


        $(`
            <div class="imagem-link">
            <a href="${enderecoNovaImagem}" target="_blank" title="ver imagem em tamanho real">
            Ver a imagem em tamanho real </a>
        </div> `).appendTo(novoItem) /*é basicamente oq está no html mas com o endereço */


        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(5000) /*animação de fadein quando por uma foto */ /*animaçao de 5 segundos (é definido em milisegundos) */

        $('#endereço-imagem').val('') /*vai limpar os campos */
    })
    
})