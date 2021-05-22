function verificar(){
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('ERRO! Verifique os dados  e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <12){
                //criança
                img.setAttribute('src', 'criancahomem.png')
            } else if (idade <21){
                //joven
                img.setAttribute('src', 'adolehomem.png')
            } else if (idade<55){
                //Adulto
                img.setAttribute('src', 'adultohomem.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosohomem.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <12){
                //criança
                img.setAttribute('src', 'criancamulher.png')
            } else if (idade <21){
                //joven
                img.setAttribute('src', 'adolemulher.png')
            } else if (idade<55){
                //Adulto
                img.setAttribute('src', 'adultomulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosomulher.png')
            }

        }
        res.style.textAlign= 'center'
        res.innerHTML=`Detectamos genero ${genero} com idade de ${idade} anos.`
        res.appendChild(img)
    }
    

}