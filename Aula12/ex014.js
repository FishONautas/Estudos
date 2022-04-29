var agora = new Date()
var diaSem = agora.getDay() //pegando data pelo dia//

/*
0 = domingo
1 = segunda 
2 = terça
3 = quarta
4 = quinta 
5 = sexta
6 = sabado
*/

/*console.log(`Hoje é ${diaSem}`) Descartavel*/ 

switch(diaSem) /* switch serve para exercutar um comando caso alguma das condições seja verdadeira */ {
    case 0: //caso 0//
        console.log('Hojé é Domingo') //faça//
    break //break = se for verdadeiro, pare//
    case 1:
        console.log('Hojé é Segunda')
    break
    case 2:
        console.log('Hojé é Terça')
    break
    case 3:
        console.log('Hojé é Quarta')
    break
    case 4:
        console.log('Hojé é Quinta')
    break
    case 5:
        console.log('Hojé é Sexta')
    break
    case 6:
        console.log('Hojé é Sabado')
    break
    default: /* caso nenhuma se encaixe, use default */
        console.log('ERRO! Dia invalido!')

}