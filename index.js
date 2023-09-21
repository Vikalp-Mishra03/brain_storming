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

for (let i = 0; i < cardsArray.length; i++) {
    const childDiv = document.createElement('div');
    childDiv.classList.add('card');
    childDiv.dataset.name = cardsArray[i].name;
    childDiv.style.backgroundImage = `url('${cardsArray[i].img}')`;     
    parentDiv.appendChild(childDiv);
}
