function carregar() {
    var msg = window.document.getElementById(`msg`)
    var img = window.document.getElementById(`imagem`)
    var data = new Date()
    var hora = data.getHours()
    //var hora = 18
    msg.innerHTML = `Agora são ${hora} horas.`
    if ( hora >= 0 && hora < 12) {
    // BOM DIA!
        document.body.style.background = `#f7c69d`
        img.src = `fotomanha.png`
    } else if (hora >= 12 && hora < 18) {
    //BOA TARDE!
        document.body.style.background = `#5a5a53`
        img.src = `fototarde.png`
    } else {
    //BOA NOITE!
        document.body.style.background = `#2e1613`
        img.src = `fotonoite.png`
    }

}