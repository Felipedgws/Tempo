function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    
    if(hora >= 0 && hora < 12){
        // Bom dia
        img.src = 'cafe-manha.webp'
        document.body.style.background = '#e9d053'
    } else if(hora >= 12 && hora <= 18){
        // Boa tarde
        img.src = 'afternoon.jpg'
        document.body.style.background = '#e6dc94'
    }else{
        //Boa noite
        img.src = 'quadro-decorativo-natureza-paisagem-noite-de-lua-cheia-quadro-reflexo-da-lua-no-mar.webp'
        document.body.style.background = 'gray'
    }
}