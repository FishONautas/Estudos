var idade = 65 //VALOR DA VARIAVEL//
if (idade<16) /*CONDIÇÃO*/ {
    console.log('Não Vota') /*exiba*/
}
else { /* caso não*/
    if (idade >= 16 && idade <18 || idade >=65) /*A VARIAVEL NAO PRECISOU SER CONVERTIDA PRA NUMBER POIS ELA FOI DECLARADA COM UM VALOR PELO DESENVOLVEDOR COMO NUMERO SEM ALGARISMOS QUE A PUDESSE CLASSIFICAR COMO STRING*/{
    console.log('Voto Opcional')
    }
    else{
        console.log('Não Vota')
    }
}