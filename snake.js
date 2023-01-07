var boxSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

window.onload = function () {
    board = document.getElementById('board');
    board.height = rows * boxSize;
    board.width = cols * boxSize;
    context = board.getContext("2d");

    update();
}