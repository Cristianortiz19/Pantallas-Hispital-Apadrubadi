let pantallas = [];
let pantallaActual;

function setup() {
  createCanvas(428, 926);
  pantallaActual = 0;
  preload();
}

function draw() {
  background(220);
  image(pantallas[pantallaActual], 0, 0);
}

function preload() {
  pantallas[0] = loadImage("assets/Pantalla0.png");
  pantallas[1] = loadImage("assets/Pantalla1.png");
  pantallas[2] = loadImage("assets/Pantalla2.png");
  pantallas[3] = loadImage("assets/Pantalla3.png");
  pantallas[4] = loadImage("assets/Pantalla4.png");
  pantallas[5] = loadImage("assets/Pantalla5.png");
  pantallas[11] = loadImage("assets/Pantalla11.png");
}

function mousePressed() {
  // Botón iniciar sección
  if(mouseX > 35 && mouseX < 35 + 360 && mouseY > 540 && mouseY < 540 + 45 &&
    pantallaActual === 0){
    pantallaActual = 1;
  }

  // Botón de solicitar asistencia
  if(mouseX > 60 && mouseX < 60 + 305 && mouseY > 142 && mouseY < 142 + 55 &&
    pantallaActual === 1){
    pantallaActual = 2;
  }

  // Botón de urgencia BAJA
  if(mouseX > 55 && mouseX < 55 + 312 && mouseY > 427 && mouseY < 427 + 42 &&
    pantallaActual === 2){
    pantallaActual = 3;
  }

  // Botón de comenzar asistencia
  if(mouseX > 128 && mouseX < 128 + 250 && mouseY > 666 && mouseY < 666 + 42 &&
    pantallaActual === 3){
    pantallaActual = 4;
  }


  
}

