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
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        console.log(i, j)
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}

const shuffleChild = myNumber(gameCard)

// selecting the card
// let clickCount = 0;
// let firstCard = "";
// let secondCard = "";


parentDiv.addEventListener('click', (event) => {
    let current_Card = event.target;
    // if (current_Card === "card-section") {
    //     return false
    // }
    current_Card.classList.add('card-selected');
});


for (let i = 0; i < shuffleChild.length; i++) {
    const childDiv = document.createElement('div');
    childDiv.classList.add('card');
    childDiv.dataset.name = shuffleChild[i].name;
    childDiv.style.backgroundImage = `url('${shuffleChild[i].img}')`;
    parentDiv.appendChild(childDiv);
}
