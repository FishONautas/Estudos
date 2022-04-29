var agora = new Date()
var hora = agora.getHours() //PEGANDO HORAS DO COMANDO NEW DATE//
console.log (`Agora são extamente ${hora} horas`)
if (hora > 5 && hora < 12){
    console.log ('Bom dia!')
}
else {
    if (hora >= 13 && hora <= 18) {
        console.log ('Boa tarde')
    }
    else if (hora >18 && hora <=23){
        console.log('Boa noite!')
        }
        else {
            console.log('Boa Madrugada!')
        }
    }
