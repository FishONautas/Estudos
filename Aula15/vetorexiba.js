var num = [4, 5, 1, 2, 7]
    for(pos=0;pos<num.length;pos++){
        console.log (`a posição ${pos} tem o valor ${num[pos]}`)
    }

    for (pos in num){
        console.log (`a posição ${pos} tem o valor ${num[pos]}`)
    }   

    const sabor = 'Pizza de Mussarela'
    const pizzas = [
        {name: "Pizza de Mussarela", id:0},
        {name: "Pizza de Calabresa", id: 1}
    ]

    const encontrar = pizzas.find(p => p.name == sabor)

    console.log(encontrar) 

    const filtrar = pizzas.filter((elemento, index, array)=> array.indexOf(elemento)===index)

    console.log(filter)
