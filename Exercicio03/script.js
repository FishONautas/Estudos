function calcular(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById ('passo')
    var res = document.getElementById ('res')
    var i = Number(inicio.value) //Convertendo VARIAVEIS para NUMERO//
    var f = Number(fim.value) // SEMPRE QUE PRECISAR CONVERTER UMA VARIAVEL PRA NUMERO FAÇA ISSO!//
    var p = Number(passo.value) // VARIAVEL P RECEBE UM *NUMERO* QUE TEM O *VALOR* DA VARIAVEL *PASSO* //

    if (i == '' || f == 0 || p == 0){
        alert('ERRO! Revise os dados')
    } 
    else {  
        if(f >= i){
        res.innerHTML = 'Contando:'
        while (i <= f){
            res.innerHTML += ` ${i} ` // ENQUANTO A CONDIÇÃO FOR FALSA, EXIBA A VARIAVEL, POR ISSO ELA SE REPETE //
            i+=p
            }
        }
        else {
            res.innerHTML = 'Contando:'
        for(c = i; c >= f; c -= p){
            res.innerHTML += ` ${c} `
            }
        }
    }
}