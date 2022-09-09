var produtos = document.getElementsByClassName('produto');

var total = document.getElementById('total')
for(var pos = 0; pos < produtos.length; pos++){

    var price = produtos[pos].getElementsByClassName('preco');
    var priceText = price[0].innerHTML
  
}
console.log(produtos[0].getElementsByClassName('preco'));
console.log(priceText)
console.log(produtos.length)

function converteTextNum(text) {
    var texto = text.replace('R$ ', '').replace(',','.')
    return parseFloat(texto)
}
function converteNumText(value) {
    var texto = (value <1?'0':'') + Math.floor(value*100)
    texto = 'R$ ' + texto
    return texto.substr(0, texto.length-2) + ',' + texto.substr(-2)
}
console.log(converteTextNum(priceText))
console.log(converteNumText(converteTextNum(total.innerHTML)) )