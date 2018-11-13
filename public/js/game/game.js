class Game {

  constructor(socket, convas) {
    this.socket = socket;
    this.selfPlayer = null;
    this.otherPlayers = [];
    this.animationFrameId = 0;
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

    this.img.src = "assets/player.png";
    this.bg.src = "assets/background.png";
  }

  loop() {
    socket.on('state', (players) => {
      var pattern = this.ctx.createPattern(this.bg, 'repeat');
      this.ctx.fillStyle = pattern;
      this.ctx.fillRect(0, 0, this.width, this.height);
      // this.ctx.clearRect(0, 0, this.width, this.height);
      for (var id in players) {
        var player = players[id];
        this.ctx.drawImage(this.img, player.x, player.y, 80, 80);
      }
    });

    setInterval(() => {
      socket.emit('movement', { movement, canvas: { width: this.width, height: this.height }});
    }, 1000 / 60);
  }
}
