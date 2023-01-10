var boxSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

var snakeX = boxSize * 5;
var snakeY = boxSize * 5;

var foodX = boxSize * 10;
var foodY = boxSize * 10;

window.onload = function () {
    board = document.getElementById('board');
    board.height = rows * boxSize;
    board.width = cols * boxSize;
    context = board.getContext("2d");

    update();
}

function update() {
    context.fillStyle = '#D3ECA7';
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = '#A1B57D';
    context.fillRect(snakeX, snakeY, boxSize, boxSize);

    context.fillStyle = '#B33030';
    context.fillRect(foodX, foodY, boxSize, boxSize);
}