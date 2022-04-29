var campo = document.getElementById ('pedido')
var lista = document.querySelector('select#lista')
var res = document.querySelector('div#res')
let valores = []
let botao = document.getElementById('button')
campo.focus()

function capitalize (value){
   return value[0].toUpperCase() + value.slice(1).toLowerCase()
}

function ChecarChar(p){         /* Neste caso, P representa a letra que o usuário irá digitar */
    let char = String.fromCharCode(p.keyCode)
    let padrao = '[a-zA-Z;ÁÉÍÓÚáéíóúâêîôûàèìòùÇçãÃÕõ; ;]'
    if (char.match(padrao)){
        return true
    }
}

campo.addEventListener("keypress", function(p){ /* Neste caso, P representa a letra que o usuário irá digitar */
    if(!ChecarChar(p)){
        p.preventDefault()
    }
})

campo.addEventListener("keypress", function(e){ /* Neste caso, E representa a tecla que o usuário irá pressionar */
    if(e.key === "Enter"){
    botao.click();      
    }
})


function NaLista(prato, list){          /* Verificando se existe um elemento "prato" na lista */
    if (list.indexOf(prato) != -1){
        return true
    }
    else{
        return false
    }
}

function adicionar(){
    let cap = campo.value.split(' ').map((txt)=>{
      return capitalize(txt)
    }).join(' ')
    if (campo.value == '' || NaLista(cap, valores)) {
    window.alert('O campo está inválido ou já foi adicionado')
    item.innerHTML=''
    }
    else
    res.innerHTML = ''
    valores.push(cap)
    const item = document.createElement('option')
    item.innerHTML = `${cap} Adicionado ao pedido`
    lista.appendChild(item)
    campo.value=''
    campo.focus()
}

function finalizar(){
    if (valores == ''){
    window.alert ('Você não fez pedidos')
    }
    else {
        campo.value = ''
        lista.innerHTML = ''
        lista.value = ''
        res.innerHTML = `O Chef irá preparar seu pedido: ${valores.join(', ')}.`
        valores.length ='' /* para zerar o valor de um array, deve-se zerar seu length */
    }
}