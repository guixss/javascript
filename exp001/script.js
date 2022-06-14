function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 10
msg.innerHTML= `Agora são ${hora} horas!`
if (hora >= 0 && hora < 12) {
    //bom dia
    img.src = `fotomanha.jpg`
    document.body.style.background = '#F2A71B'
    document.body.style.textAlign = 'center'
} else if (hora >= 12 && hora < 18) {
    //boa tarde
    img.src = `fototarde.jpg`
    document.body.style.background = '#FFCB9A'
    document.body.style.textAlign = 'center'
} else {
    //boa noite
    img.src = `fotonoite.jpg`
    document.body.style.background = '#012030'
    document.body.style.textAlign = 'center'
}
}
