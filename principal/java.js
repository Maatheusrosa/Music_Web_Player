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


