var h2 = document.getElementById('h2_horas')
var horasAgora = new Date();
var horas = horasAgora.getHours()

if (horas > 6 && horas < 12) {
    h2.innerHTML = 'Bom dia'
} else if (horas >= 12 && horas < 18) {
    h2.innerHTML = 'Boa tarde'
} else if (horas >= 18 && horas <= 5) {
    h2.innerHTML = 'Boa noite'
}


var travis = document.getElementById('travis_scott')
var body = document.getElementById('bosta')
var verme = document.getElementById('banner_meio')

function mudarCor() {
    verme.style.backgroundImage = "linear-gradient(to bottom left, rgb(13, 61, 27), rgb(4, 17, 5), black)"
    document.body.style.backgroundImage = "linear-gradient(to bottom, rgb(13, 61, 27), rgb(4, 17, 5), rgb(16, 16, 16), rgb(16, 16, 16), rgb(16, 16, 16))"
}

function voltarCor() {
    verme.style.backgroundImage = "linear-gradient(to bottom left, rgb(18, 18, 100), rgb(2, 4, 32), black)"
    document.body.style.backgroundImage = "linear-gradient(to bottom, rgb(7, 7, 88), rgb(11, 11, 34), rgb(16, 16, 16), rgb(16, 16, 16), rgb(16, 16, 16))"
}
