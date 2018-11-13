const socket = io();
const canvas = document.getElementById('canvas');

Input.applyEventHandlers();

var game = new Game(socket, canvas);
game.init();

game.loop();
