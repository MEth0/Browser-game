
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
        case 'q':
          movement.left = true;
          break;
        case 'ArrowUp':
        case 'z':
          movement.up = true;
          break;
        case 'ArrowRight':
        case 'd':
          movement.right = true;
          break;
        case 'ArrowDown':
        case 's':
          movement.down = true;
          break;
        default:
          return;
      }
    });
    document.addEventListener('keyup', (event) => {
      switch (event.key) {
        case 'ArrowLeft':
        case 'q':
          movement.left = false;
          break;
        case 'ArrowUp':
        case 'z':
          movement.up = false;
          break;
        case 'ArrowRight':
        case 'd':
          movement.right = false;
          break;
        case 'ArrowDown':
        case 's':
          movement.down = false;
          break;
        default:
          return;
      }
    });
  }

}
