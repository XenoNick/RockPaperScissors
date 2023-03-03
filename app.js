function generateComputersChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;

    if (choice === 1) choice = 'Rock';
    else if (choice === 2) choice = 'Paper';
    else choice = 'Scissors';

    return choice
}

function checkResults(playerChoice, computersChoice) {
    if (playerChoice === computersChoice) return 'tie';
    else if (playerChoice === 'Rock') {
        if (computersChoice === 'Paper') return 'lose';
        else if (computersChoice === 'Scissors') return 'win';
    } else if (playerChoice === 'Paper') {
        if (computersChoice === 'Scissors') return 'lose';
        else if (computersChoice === 'Rock') return 'win';
    } else if (playerChoice === 'Scissors') {
        if (computersChoice === 'Rock') return 'lose';
        else if (computersChoice === 'Paper') return 'win';
    }
}

function incrementScore(score){
    return String(++score)
}

const rpsContainer = document.querySelector('.rpsContainer');
const info = document.querySelector('.info');
const playerScore = document.querySelector('.player > span');
const computerScore = document.querySelector('.computer > span');

rpsContainer.addEventListener('click', (e) => {
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
        console.log(result)
    }
})