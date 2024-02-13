const fortuneCookie = document.querySelector('#fortune-cookie')

const phrases = [
    'A solidão é a sorte de todos os espíritos excepcionais.',
    'Não ser amado é falta de sorte, mas não amar é a própria infelicidade.',
    'Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar.',
    'Eu acredito demais na sorte. E tenho constatado que, quanto mais duro eu trabalho, mais sorte eu tenho.',
    'A sorte não existe. Aquilo a que chamas sorte é o cuidado com os pormenores.',
    'Homens fracos acreditam na sorte. Homens fortes acreditam em causa e efeito.',
    'A perseverança é a mãe da boa sorte.',
    'Sorte é estar pronto quando a oportunidade vem.'
]

//Function randomly chooses a phrase from array.
function randomChoicePhrase (array) {
    return array[Math.floor(Math.random() * array.length)]
}

function handleFortuneCookieClick () {
    document.querySelector('#main-screen').classList.add('hide')
    document.querySelector('#reset-screen').classList.remove('hide')

    //Add animation
    document.querySelector('#today-luck').classList.add('scale-in-bottom')
    
    document.querySelector('#today-luck p').innerText = randomChoicePhrase(phrases)
}

fortuneCookie.addEventListener('click', handleFortuneCookieClick)

document.querySelector('#btn-reset').addEventListener('click', () => {location.reload()})