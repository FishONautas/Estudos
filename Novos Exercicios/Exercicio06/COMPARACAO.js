var campo = document.getElementById ('pedido')
var lista = document.querySelector('select#lista')
var res = document.querySelector('div#res')
let pedidos = []
let botao = document.getElementById('procurar')
campo.focus()
let valores = [
  {name: "Pizza Mussarela", id: 0}
, {name: "Pizza Calabresa", id: 1}
, {name: "Pizza Pepperoni", id: 2}
, {name: "Pizza Portuguesa", id: 3}
, {name: "Pizza Marguerita", id: 4}
, {name: "Pizza Escarola", id: 5}
, {name: "Pizza Toscana", id: 6}
, {name: "Pizza Bacon", id: 7}
, {name: "Pizza Catupiry", id: 8}
, {name: "Pizza Gorgonzola", id: 9}
]

valores.forEach(function(element,key) {     /*Criando options no select com os valores do array */
    lista[key] = new Option(element.name,key);
});

function capitalize (value){       /*Função de formatação das Strings */
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

let cap = campo.value.split(' ').map((txt)=>{ /*cap se torna um array com tudo que o usuario digitar, e formatando o texto com a function capitalize */
    return capitalize(txt)
  }).join(' ')


let sabores = valores.join(' ')  /*transformando os objetos do array em strings */

let filtro = sabores.filter(item => item.includes(cap)).map((txt)=>{   /*filtro verifica se no array valores existe algum elemento igual ao elemento que foi adicionado no cap atraves do campo.value */
    return capitalize(txt)})

function procurar(){  /*função procurar, um botão acionado no onclick */

    let itemerro = document.createElement('option') /*criando uma opção no caso do usuário pesquisar uma opção inválida */

    if (campo.value == ''||!filtro){ /*se campo.value estiver vazio ou a variavel filtro não for encontrada, faça: */

        lista.innerHTML=''
        itemerro = document.createElement('option') /*Limpe a lista e mostre somente a mensagem de item não encontrado */
        itemerro.innerHTML='Item não localizado'
        lista.appendChild(itemerro)
    }
    else {
        lista.innerHTML=''
        pedidos.push(filtro) /*se não, exiba um tudo ok, apenas para saber se o if/else está funcionando, em breve pretendo que seja exibido o resultado desejado aqui */
        window.alert('Tudo Ok')
    }
}