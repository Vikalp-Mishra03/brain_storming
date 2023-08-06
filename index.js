let cardsArray = [
    {
        'name': 'Adidas',
        'img': 'img/brand1.jpg'
    },
    {
        'name': 'Nike',
        'img': 'img/brand2.jpg'
    },
    {
        'name': 'Gucci',
        'img': 'img/brand3.jpg'
    },
    {
        'name': 'Merrell',
        'img': 'img/brand4.jpg'
    },
    {
        'name': 'Puma',
        'img': 'img/brand5.jpg'
    },
    {
        'name': 'Red Chief',
        'img': 'img/red.pnh'
    },
]

const parentDiv = document.querySelector("#card-section")
for(let i = 0; i < cardsArray.length; i++){
    const childDiv = document.createElement('div')
    childDiv.classList.add('card')

    // childDiv.dataset.name = cardsArray[i].name
    parentDiv.appendChild(childDiv)
}