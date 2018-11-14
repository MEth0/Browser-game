
var mouse = {
  x: null,
  y: null,
  changed: false,
}

function mouseEvent(e) {
  var bounds = canvas.getBoundingClientRect();
  mouse.x = e.pageX - bounds.left;
  mouse.y = e.pageY - bounds.top;
  mouse.changed = true;
}

document.addEventListener("mousemove", mouseEvent);
