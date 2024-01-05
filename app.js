const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

p1Button.addEventListener('click', () => {
    if (!isGameOver) {
        p1Score += 1;
        p1Display.innerText = p1Score;
        if (p1Score === winningScore) {
            isGameOver = true;
        }
    }
});


p2Button.addEventListener('click', () => {
    if (!isGameOver) {
        p2Score += 1;
        p2Display.innerText = p2Score;
        if (p2Score === winningScore) {
            isGameOver = true;
        }
    }
});