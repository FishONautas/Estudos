function calcular()
{
    var numero = document.getElementById('numero')
    var n = Number(numero.value)
    var tabuada = document.getElementById('tabuada') //Pegando variavel Select, ou seja, possiveis resultados que podemos imputa-la//
    if (n == '')
    {
    alert('ERRO! O campo é obrigatório')
    }
    else
    {
        var t = 1 /* variavel de multiplicação */
        tabuada.innerHTML = '' /* sempre limpar o inicio da tabuada, pois está antes do while, ou seja, antes da condição a variavel tabuada estara vazia e só depois do while ela será preenchida */
        for (c = 1; c<=10; t+=c){
            var item = document.createElement('option') /* essa variavel foi criada com elemento option, ou seja, a variavel que carrega as opções do select*/
            item.innerHTML = `${n} x ${c} = ${n*c}` /* resultado a ser exibido no campo item */
            tabuada.appendChild(item) /*dentro da var tabuada, foi criado o elemento option representado pela variavel item, que sera exibido*/
            c++
        }
    }
}