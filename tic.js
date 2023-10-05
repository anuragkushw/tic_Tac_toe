const cells = document.querySelectorAll('[data-cell]');
const message = document.getElementById('message');
const restartButton = document.getElementById('restart-button');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameActive = false;
            message.textContent = `${currentPlayer} wins!`;
            message.style.display = 'block';
        }
    }

    if (!gameBoard.includes('') && gameActive) {
        gameActive = false;
        message.textContent = "It's a draw!";
        message.style.display = 'block';
    }
}

function handleCellClick(e) {
    const cell = e.target;
    const index = [...cells].indexOf(cell);

    if (gameBoard[index] === '' && gameActive) {
        cell.textContent = currentPlayer;
        
        // Add class based on the current player
        cell.classList.add(currentPlayer.toLowerCase());

        gameBoard[index] = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function restartGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    cells.forEach(cell => cell.textContent = '');
    message.style.display = 'none';
}
// ...



// ...


cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartButton.addEventListener('click', restartGame);
