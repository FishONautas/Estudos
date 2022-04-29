var num = [2,1,3,4,5] //array//
num[4] = 6 // adicionando um valor ao array direcionando a vaga //
num.push(7) //adicionando valor ao array direcionando para a ultima vaga//
var pos = num.indexOf(3)  //var POS recebe o valor 1//
num.sort()
console.log(`o vetor tem ${num.length} posições`)
console.log (`${num}`)
console.log (`O primeiro valor do vetor é ${num[0]}`)   
if(pos == -1){ //POS = -1 significa NAO ENCONTRADO//
    console.log('O valor não foi encontrado')
}
else{
console.log (`o valor ${num[pos]} está na posição ${pos}`)
} //O valor um se encontra na POS que recebeu o atributo IndexOf que vai localizar a vaga do item declarado ('')//