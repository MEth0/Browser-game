
class Game {

  constructor(socket, convas) {
    this.socket = socket;
    this.selfPlayer = null;
    this.otherPlayers = [];
    this.width = 1200;
    this.height = 720

    canvas.width = this.width;
    canvas.height = this.height;
    canvas.style.border = '1px solid black';
    this.ctx = canvas.getContext('2d');
  }

  init() {
    this.socket.emit('player join');
    this.img = new Image();
    this.bg = new Image();

    this.img.src = "assets/player-regular.png";
    this.bg.src = "assets/background.png";
  }

  drawImageLookat(img, x, y, lookx, looky) {
    this.ctx.setTransform(1, 0, 0, 1, x, y);
    this.ctx.rotate(Math.atan2(looky - y, lookx - x) + Math.PI / 2); // Adjust image 90 degree anti clockwise (PI/2) because the image  is pointing in the wrong direction.
    this.ctx.drawImage(img, -img.width / 2, -img.height / 2);
    this.ctx.setTransform(1, 0, 0, 1, 0, 0); // restore default not needed if you use setTransform for other rendering operations
  }

  loop() {
    socket.on('state', (players) => {
      var pattern = this.ctx.createPattern(this.bg, 'repeat');
      this.ctx.fillStyle = pattern;
      this.ctx.fillRect(0, 0, this.width, this.height);
      for (var id in players) {
        var player = players[id];
        var x = player.mouse.x - scrollX;
        var y = player.mouse.y - scrollY;
        this.drawImageLookat(this.img, player.x, player.y, x, y, this.ctx);
      }
    });

    setInterval(() => {
      socket.emit('movement', { movement, canvas: { width: this.width, height: this.height }, mouse });
    }, 1000 / 60);
  }
}
