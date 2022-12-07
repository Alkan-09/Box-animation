window.onload = function myMove() {
    let id = null;
    const elem = document.getElementById("animate");
    let width = 2.352415026833631;
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 559) {
        clearInterval(id);
      } else {
        pos++;
        elem.style.top = pos + "px"; 
        elem.style.left = pos * width + "px"; 
        elem.style.transform = "rotate(" + pos + "deg)";
      }
    }
  }