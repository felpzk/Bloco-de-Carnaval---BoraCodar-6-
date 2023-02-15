let mapa = document.querySelector('.mapa');
let lista = document.querySelector('.lista');
let city = document.querySelectorAll('#city')
let search = document.querySelector('#search')
let arrayCity = []

for(i = 0; i < city.length; i++) {
    arrayCity.push(city[i].textContent)
}


mapa.addEventListener('click', () => {
    mapa.classList.add('focus')
    lista.classList.remove('focus')
})

lista.addEventListener('click', function (){
    lista.classList.add('focus')
    mapa.classList.remove('focus')
})

console.log(arrayCity)


