
movement = {
  up: false,
  down: false,
  left: false,
  right: false
}

class Input {

  static applyEventHandlers() {
    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          movement.left = true;
          break;
        case 'ArrowUp':
          movement.up = true;
          break;
        case 'ArrowRight':
          movement.right = true;
          break;
        case 'ArrowDown':
          movement.down = true;
          break;
        default:
          return;
      }
    });
    document.addEventListener('keyup', (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          movement.left = false;
          break;
        case 'ArrowUp':
          movement.up = false;
          break;
        case 'ArrowRight':
          movement.right = false;
          break;
        case 'ArrowDown':
          movement.down = false;
          break;
        default:
          return;
      }
    });
  }

}
