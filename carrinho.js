const produtos = document.getElementsByClassName('produto')

const total = document.getElementById('total')

const botao_enviar= document.getElementById('btn-enviar')

window.onchange = calculaTotal

function calculaTotal() {
    var totalProdutos = 0
var totalItens = 0

for (var index = 0; index < produtos.length; index++) {
    const elementsPrice = produtos[index].getElementsByClassName('preco');
    const priceText = elementsPrice[0].innerHTML
    const price = converteTextNumber(priceText)

    const elementsQtd = produtos[index].getElementsByClassName('quantity')

    if(elementsQtd[0].value <= '0'){
        elementsQtd[0].value = '0'
       }
     
    const qtd = converteTextNumber(elementsQtd[0].value)

 

    //var Itens = qtd
    //totalItens +=Itens

    var subTotal = qtd * price
    totalProdutos += subTotal

    //console.log(`Total: ${Math.round(totalProdutos, 4)}`)
    //console.log(totalItens)
  
    
}
    //document.getElementById('total').innerHTML = converteNumberText(totalProdutos)
    escreveTotal(totalProdutos)
  
}


function converteTextNumber(text) {
    var number = text.replace('R$ ', '').replace(',','.')
    return parseFloat(number)
}

function converteNumberText(value){
   var texto = (value < 1?'0':'') + Math.floor(value *100)
   texto = 'R$ ' + texto
   return texto.substr(0, texto.length -2) + ',' + texto.substr(-2)

}

function escreveTotal(value) {
    total.innerHTML = converteNumberText(value)
}

botao_enviar.addEventListener('click', Enviar)

var msn = ''
function Enviar(value) {

    for (let index = 0; index < produtos.length; index++) {
        const nomeProduto = produtos[index].getElementsByClassName('foto-produto')
        var textoProduto = nomeProduto[0].getAttribute('alt')
    
        const elementsPrice = produtos[index].getElementsByClassName('preco');
    const priceText = elementsPrice[0].innerHTML
       
    const elementsQtd = produtos[index].getElementsByClassName('quantity')
        var qtd = elementsQtd[0].value

  msn += `produto${index}: ${textoProduto} | ${priceText} | ${qtd} \n`

    console.log(textoProduto, priceText)
    }
    console.log(msn)
    //alert('compra finalizada')
msn = window.encodeURIComponent(msn)
    let url = "https://api.whatsapp.com/send?phone=5585994348407&text=Bem vindo a Limpinho-->> Seu pedido \n" + "Descricao | Preço | Quantidade \n" + msn + "Total do pedido: " + total.innerHTML;

    window.open(url)
}