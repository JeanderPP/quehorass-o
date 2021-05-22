function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    if (hora >= 0 && hora < 12){
    msg.innerHTML=`BOM DIA! Agora são ${hora} horas.`
    img.src="fotomanha.png"
    document.body.style.background = "#e2cd9f"
} else if (hora>=12 && hora <= 18){
    msg.innerHTML=`BOM TARDE! Agora são ${hora} horas.`
    img.src='fototarde.png'
    document.body.style.background = '#B0E0E6' 

} else {
    msg.innerHTML=`BOA NOITE! Agora são ${hora} horas.`
    img.src="fotonoite.png"
    document.body.style.background = "#9370DB"

}
}   