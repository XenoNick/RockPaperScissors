function generateComputersChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;

    if (choice === 1) choice = 'Rock';
    else if (choice === 2) choice = 'Paper';
    else choice = 'Scissors';

    return choice
}

function checkResults(playerChoice, computersChoice) {
    if (playerChoice === computersChoice) {
        return 'tie';
    } else if (playerChoice === 'Rock') {
        return computersChoice === 'Scissors' ? 'win' : 'lose'
    } else if (playerChoice === 'Paper') {
        return computersChoice === 'Rock' ? 'win' : 'lose'
    } else if (playerChoice === 'Scissors') {
        return computersChoice === 'Paper' ? 'win' : 'lose'
    }
}

function incrementScore(score) {
    return String(++score)
}

function endGame() {
    rpsContainer.removeEventListener('click', playMatch)
    resetButton.classList.toggle('hidden')
    if (+playerScore.textContent === 5) {
        info.textContent = 'Congratulations, you\'ve beaten the computer!'
    } else[
        info.textContent = 'Ouch, looks like the computer got the upper hand!'
    ]
}

const playMatch = (e) => {
    //Grabbing players choice from the alt text on the images
    const playerChoice = e.target.alt;
    if (playerChoice) {
        const computersChoice = generateComputersChoice();
        const result = checkResults(playerChoice, computersChoice);
        if (result === 'win') {
            info.textContent = 'You win!';
            playerScore.textContent = incrementScore(+playerScore.textContent);
        } else if (result === 'lose') {
            info.textContent = 'Darn, it\'s a loss!';
            computerScore.textContent = incrementScore(+computerScore.textContent);
        } else {
            info.textContent = 'It\'s a tie!';
        }
        if (+playerScore.textContent === 5 || +computerScore.textContent === 5) {
            endGame()
        }
        console.log(result)
    }
}

const rpsContainer = document.querySelector('.rpsContainer');
const info = document.querySelector('.info');
const playerScore = document.querySelector('.player > span');
const computerScore = document.querySelector('.computer > span');
const resetButton = document.querySelector('.resetButton')

rpsContainer.addEventListener('click', playMatch)

resetButton.addEventListener('click', () => {
    playerScore.textContent = '0'
    computerScore.textContent = '0'
    info.textContent = 'Waiting on player...'
    resetButton.classList.toggle('hidden')
    rpsContainer.addEventListener('click', playMatch)
})