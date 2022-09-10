const produtos = document.getElementsByClassName('produto')

const total = document.getElementById('total')

const botao_enviar= document.getElementById('btn-enviar')

const btn_menos = document.getElementsByClassName('btn-subtrair')

const btn_adicionar = document.getElementsByClassName('btn-adicionar')

const input = document.getElementsByClassName('quantity');
/*var x = 1*/
//btn_menos[0].addEventListener('click', subInput)
//btn_adicionar[0].addEventListener('click', addInput)
function addInput(value) {

    
      /*  const inputMais = produtos[0].getElementsByClassName('btn-adicionar')
        var entrada = inputMais[0].previousSibling.value 

    
        
        var valor = parseFloat(entrada)
        valor++
        document.querySelector('.btn-adicionar').previousSibling.value = valor
        calculaTotal()
     
        console.log(entrada)*/
        for (var index = 0; index < produtos.length; index++) {
            const btnmais = produtos[index].getElementsByClassName('quantity')
            if(value == (index+1)){
            var x = btnmais[0].value
            x++
            btnmais[0].value = x
            calculaTotal()
        }
            //input[0].setAttribute('id', `${index+1}`)
        }
    
   /* var element = document.querySelector('.btn-adicionar').previousSibling.value;
    var x = parseFloat(element)
    x++
    document.querySelector('.btn-adicionar').previousSibling.value = x
    calculaTotal()

    //console.log(btn_menos)*/
}

function subInput(value) {
//const valores = document.querySelector('button input')
/*const inputMenos = produtos[0].getElementsByClassName('btn-subtrair')
var entrada1 = inputMenos[0].nextElementSibling.value 



var valor1 = parseFloat(entrada1)
valor1--
document.querySelector('.btn-subtrair').nextElementSibling.value = valor1
calculaTotal()*/

for (var index = 0; index < produtos.length; index++) {
    const btnmenos = produtos[index].getElementsByClassName('quantity')
    if(value == (index+1)){
    var b = btnmenos[0].value
    b--
    btnmenos[0].value = b
    calculaTotal()
}}
   /* var y = document.querySelector('.btn-subtrair').nextElementSibling.value;

   var x = parseFloat(y)
    x--
    document.querySelector('.btn-subtrair').nextElementSibling.value = x
    calculaTotal()*/
   
}


window.onchange = calculaTotal

function calculaTotal() {
    var totalProdutos = 0


for (var index = 0; index < produtos.length; index++) {
    const input = produtos[index].getElementsByClassName('quantity')
    input[0].setAttribute('id', `${index+1}`)

    const elementsPrice = produtos[index].getElementsByClassName('preco');
    const priceText = elementsPrice[0].innerHTML
    const price = converteTextNumber(priceText)

    const elementsQtd = produtos[index].getElementsByClassName('quantity')

    if(elementsQtd[0].value <= '0'){
        elementsQtd[0].value = '0'
       }
     
    const qtd = converteTextNumber(elementsQtd[0].value)

 


    var subTotal = qtd * price
    totalProdutos += subTotal

    
}
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


function Enviar() {
    var msn = ''
    for (let index = 0; index < produtos.length; index++) {
        const nomeProduto = produtos[index].getElementsByClassName('foto-produto')
        var textoProduto = nomeProduto[0].getAttribute('alt')
    
        const elementsPrice = produtos[index].getElementsByClassName('preco');
    const priceText = elementsPrice[0].innerHTML
      var preco = converteNumberText(converteTextNumber(priceText))
    const elementsQtd = produtos[index].getElementsByClassName('quantity')
        var qtd = elementsQtd[0].value

        if(qtd == '0'){
           textoProduto = ''
          preco = ''
           qtd = ''
            }
   

            msn += `${textoProduto}  ${preco}  ${qtd}  \n`

           
 

    console.log(textoProduto, priceText)
    }
   
if(converteTextNumber(total.innerHTML) <= 0){
    alert('carrinho vazio')
}else{
    let url = "https://api.whatsapp.com/send?phone=5585994348407&text=Bem vindo a Limpinho-->> Seu pedido \n" + "Descricao | Preço | Quantidade \n" + msn + "Total do pedido: " + total.innerHTML;

    
    window.open(url)
}
    //alert('compra finalizada')

   
   
}