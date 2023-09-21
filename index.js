let cardsArray = [
    {
        'name': 'CSS',
        'img': 'img/css.png',
    },
    {
        'name': 'HTML',
        'img': 'img/html.png',
    },
    {
        'name': 'jQuery',
        'img': 'img/jquery.png',
    },
    {
        'name': 'JS',
        'img': 'img/javascript.png',
    },
    {
        'name': 'Node',
        'img': 'img/node.png',
    },
    {
        'name': 'Python',
        'img': 'img/python.png',
    }
];
const parentDiv = document.querySelector("#card-section");

// duplicating the card
const gameCard = cardsArray.concat(cardsArray)
console.log(gameCard)

// to shuffle the card

const myNumber = (array) => {
    for (let i = array.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1))
        console.log(i, j)
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
} 

const shuffleChild = myNumber(gameCard)


for (let i = 0; i < gameCard.length; i++) {
    const childDiv = document.createElement('div');
    childDiv.classList.add('card');
    childDiv.dataset.name = gameCard[i].name;
    childDiv.style.backgroundImage = `url('${gameCard[i].img}')`;     
    parentDiv.appendChild(childDiv);
}
