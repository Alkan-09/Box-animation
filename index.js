function myMove(){
  const FPS = 60;
  var bs = 50;
  var bx, by;
  var xv, yv;
  var canvas, context;
  
  canvas = document.getElementById("gameCanvas");
  context = canvas.getContext("2d");
  
  setInterval(update, 300 / FPS);
  
  bx = canvas.width / 2;
  by = canvas.height / 2;
  
  xv = 60 / FPS;
  yv = 60 / FPS;
  
  if (Math.floor(Math.random() * 2) == 0) {
      xv = -xv;
  }
  if (Math.floor(Math.random() * 2) == 0) {
      yv = -yv;
  }
  
  function update() {
      bx += xv;
      by += yv;
      
      if (bx - bs / 2 < 0 && xv < 0) {
          xv = -xv;
          document.getElementById("button_btn").innerHTML="Kutu sola vurdu";
      }
      if (bx + bs / 2 > canvas.width && xv > 0) {
          xv = -xv;
          document.getElementById("button_btn").innerHTML="Kutu sağa vurdu";
      }
      if (by - bs / 2 < 0 && yv < 0) {
          yv = -yv;
          document.getElementById("button_btn").innerHTML="Kutu yukari vurdu";
      }
      if (by + bs / 2 > canvas.height && yv > 0) {
          yv = -yv;
          document.getElementById("button_btn").innerHTML="Kutu alta vurdu";
      }
  
      context.fillStyle = "black";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = "red";
      context.fillRect(bx - bs / 2, by - bs / 2, bs, bs);
      }
  }