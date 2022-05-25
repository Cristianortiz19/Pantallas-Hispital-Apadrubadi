let pantallas = [];
let pantallaActual;
let mousex
let mousey

function setup() {
  createCanvas(428, 926);
  pantallaActual = 0;
  preload();
}

function draw() {
  fill(255);
  text('pos MouseX:' + mousex, 50, 100);
  text('pos MouseY:' + mousey, 50, 120);
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
  pantallas[6] = loadImage("assets/Pantalla5.png");
  pantallas[7] = loadImage("assets/Pantalla5.png");
  pantallas[8] = loadImage("assets/Pantalla5.png");
  pantallas[9] = loadImage("assets/Pantalla5.png");
  pantallas[11] = loadImage("assets/Pantalla11.png");
}

function mousePressed() {
  // Botón iniciar sección
  if (mouseX > 35 && mouseX < 35 + 360 && mouseY > 540 && mouseY < 540 + 45 &&
    pantallaActual === 0) {
    pantallaActual = 1;
  }

  // Botón de solicitar asistencia
  if (mouseX > 60 && mouseX < 60 + 305 && mouseY > 142 && mouseY < 142 + 55 &&
    pantallaActual === 1) {
    pantallaActual = 2;
  }

  // Botón de urgencia BAJA
  if (mouseX > 55 && mouseX < 55 + 312 && mouseY > 427 && mouseY < 427 + 42 &&
    pantallaActual === 2) {
    pantallaActual = 3;
  }

  // Botón de comenzar asistencia
  if (mouseX > 128 && mouseX < 128 + 161 && mouseY > 666 && mouseY < 666 + 42 &&
    pantallaActual === 3) {
    pantallaActual = 4;
  }
  // Presionar en el mic de pantalla 4
  if (mouseX > 379 && mouseX < 379 + 16 && mouseY > 881 && mouseY < 881 + 17 &&
    pantallaActual === 4) {
    pantallaActual = 5;
  }

  // Botón de dudas generales
  if (mouseX > 54 && mouseX < 54 + 305 && mouseY > 528 && mouseY < 528 + 31 &&
    pantallaActual === 2) {
    pantallaActual = 11;
  }

  // Presionar de emergencia alta
  if (mouseX > 379 && mouseX < 379 + 16 && mouseY > 881 && mouseY < 881 + 17 &&
    pantallaActual === 4) {
    pantallaActual = 5;
  }

  // Botón de dudas generales
  if (mouseX > 54 && mouseX < 54 + 305 && mouseY > 528 && mouseY < 528 + 31 &&
    pantallaActual === 2) {
    pantallaActual = 11;
  }





}