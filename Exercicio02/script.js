function verificar(){
    var data = new Date() // VAR DATA CHAMA FUNÇÃO DATA //
    var ano = data.getFullYear() // VAR ANO RECEBE A DATA NO MODELO ANO //
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')
    var img = document.getElementById('foto')
    if (fano.value.length == 0  || fano.value > ano){ //COMO A VARIAVEL NAO FOI TRANSFORMADA EM NUMBER USAMOS O VALUE.LENGHT MAS PODERIAMOS FAZER "var x =Number(fano.value)" e depois x <= 0 por exemplo//
        var fsex = document.getElementsByName('radsex') //DECLARANDO VAR DE INPUT RADIO POR NAME POIS SEMPRE EXISTE MAIS UMA OPÇÃO NESSA MODALIDADE, E DECLARARA POR ID CAUSARA CONFLITO// 
        var idade = ano - Number(fano.value)
        alert('ERRO! Verifique os dados e tente novamente!')
    }
    else{
        var genero = '' // DECLARANDO GENERO COMO VAZIO//
        if (fsex[0].checked){ //CRIANDO UMA CONDIÇÃO PARA PREENCHER A VARIAVEL GENERO//
            genero = 'Homem' //SE O FSEX, OU SEJA O RADSEX, INPUT RADIO FOR 0 + CHECKED (ESCOLHIDO) GENERO RECEBE HOMEM//
            
            if (idade >=0 && idade <= 10){
                img.src='baby.png' //EXIBINDO FOTO POR UM METODO//
            }
            else if (idade <25){
                img.setAttribute('src','young.png') //OUTRO METODO (NAO GOSTEI)//
            }
            else if (idade < 50) {
                img.setAttribute('src','men.png')
            }
            else{
                img.setAttribute('src','oldmen.png')
            }
        }
        else if (fsex[1].checked){ //APOS UM ELSE FINAL, E CONTINUAÇÃO DE UM IF, DECLARAR ELSE IF//
            genero = 'Mulher'
            if (idade >=0 && idade <= 10){
                img.setAttribute('src','babygirl.png')
            }
            else if (idade <25){
                img.setAttribute('src','youngirl.png')
            }
            else if (idade < 50) {
                img.setAttribute('src','woman.png')
            }
            else{
                img.setAttribute('src','oldwoman.png')
            }
        }
        res.style.textAlign = 'center' //VARIAVEL>ESTILO>LOCAL A SER EDITADO//
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}
//FUNÇÃO DE MUDAR COR DO BOTÃO//
var area = document.getElementById('botao') 
function entrar(){
    area.style.background = '#ff81a2'
}
function sair(){
    area.style.background = '#ebebeb'
}
