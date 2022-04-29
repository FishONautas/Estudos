function verificar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date() //DECLARANDO HORA//
var hora = window.prompt ('Digite a hora atual') //VARIAVEL HORA RECEBE O VALOR DIGITADO//
var cump = document.getElementById('cumprimento')
msg.innerHTML = `Agora são ${hora} horas` // AGORA SÃO A HORA DIGITADA NO PROMPT//

    if(hora >= 0 && hora < 12) { //SE//
    img.src= 'manha.png' //EXIBA FOTO, A VARIAVEL IMG JA HAVIA SIDO DECLARADA//
    cump.innerHTML = "Bom dia" //VARIAVEL CUMP EXIBINDO TEXTO//
    document.body.style.background = "#47d6ff"} //MUDA COR DO FUNDO, APENAS DENTRO DO "SE" SENDO VERDADEIRO//

    else if (hora >= 12 && hora < 18) {  //SE NÃO COM CONDIÇÃO, USAR ELSE IF, ELSE APENAS PARA QUANDO NENHUMA DAS CONDIÇÕES SE ENCAIXAREM//
    img.src= 'tarde.png'
    cump.innerHTML='Boa tarde!'
    document.body.style.background = "#f67c2a"
}

    else if (hora>=18 && hora <=24){
    img.src= 'noite.png'
    cump.innerHTML='Boa noite!'
    document.body.style.background = "#001490"
    }
    else { //SE NENHUMA CONDIÇÃO SE ENCAIXAR FAÇA//
        window.alert('Hora invalida')
        msg.innerHTML = 'Hora invalida'
        img.src='ue.png'
        cump.innerHTML= 'Digite uma hora válida'
        document.body.style.background = "black"
    }
}
