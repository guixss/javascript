function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert ('[ERRO] Verifique os dados!')
    } else {
        var sex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sex[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'criançam.jpg')

            } else if (idade < 21) {
                img.setAttribute('src', 'jovemm.jpg')

            } else if (idade < 50){
                img.setAttribute('src', 'homem.jpg')

            } else {
                img.setAttribute('src', 'senhor.jpg')
                
            }

        } else if(sex[1].checked) {
            genero = 'mulher'
            if(idade >=0 &&  idade < 10) {
                img.setAttribute('src', 'criança.jpg')

            } else if (idade < 21) {
                img.setAttribute('src', 'jovem.jpg')

            } else if (idade < 50){
                img.setAttribute('src', 'mulher.jpg')

            } else {
                img.setAttribute('src', 'senhora.jpg')
                
            }

        } 
        res.innerHTML= `detectamos ${genero} com ${idade} anos!`
        res.style.textAlign='center'
        res.appendChild(img)
        }

}