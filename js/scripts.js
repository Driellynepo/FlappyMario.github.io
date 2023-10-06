const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const startButton = document.querySelector('.start-button');
const restartButton = document.querySelector('.restart-button');
const logo = document.querySelector('.logo');
const gameOver = document.querySelector('.game-over');
const ground = document.querySelector('.ground');
const instruction = document.querySelector('.instruction')
let score = 0;

startButton.addEventListener('click', () => {
    startGame();
})

restartButton.addEventListener('click', () => {
    restartGame();
});

function startGame() {
    const jump = () => {
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }

    pipe.style.animation = 'none';

    const loop = setInterval(() => {

        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 160) {

            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = './images/mario-game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';

            clearInterval(loop);

            gameOver.style.display = 'block';
            restartButton.style.display = 'block';

        } else {
            score++;
            document.querySelector('.score').textContent = `Score: ${score}`;
        }

    }, 10);

    document.addEventListener('keydown', (event) => {
        if (event.keyCode === 32) {
            jump();
        }
    });

    setTimeout(() => {
        pipe.style.animation = 'pipe-animation 1.7s infinite linear';
        ground.style.animation = 'ground-animation 0.3s infinite linear';
    }, 0);

    instruction.style.display = 'none';
    logo.style.display = 'none';
    startButton.style.display = 'none';
}
function restartGame() {
    location.reload();
}