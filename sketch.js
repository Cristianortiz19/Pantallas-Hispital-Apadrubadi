let pantallas = [];
let pantallaActual;

function setup() {
  createCanvas(428, 926);
  pantallaActual = 3;
  preload();
}

function draw() {
  background(220);
  image(pantallas[pantallaActual], 0, 0);
  console.log("X: " + parseInt(mouseX) + " Y: " + parseInt(mouseY));
}

function preload() {
  pantallas[0] = loadImage("assets/Pantalla0.png");
  pantallas[1] = loadImage("assets/Pantalla1.png");
  pantallas[2] = loadImage("assets/Pantalla2.png");
  pantallas[3] = loadImage("assets/Pantalla3.png");
  pantallas[4] = loadImage("assets/Pantalla4.png");
  pantallas[5] = loadImage("assets/Pantalla5.png");
  pantallas[6] = loadImage("assets/Pantalla6.png");
  pantallas[7] = loadImage("assets/Pantalla7.png");
  pantallas[8] = loadImage("assets/Pantalla8.png");
  pantallas[9] = loadImage("assets/Pantalla9.png");
  pantallas[10] = loadImage("assets/Pantalla10.png")
  pantallas[11] = loadImage("assets/Pantalla11.png");
  pantallas[12] = loadImage("assets/Pantalla12.png");
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
  if (mouseX > 126 && mouseX < 126 + 180 && mouseY > 748 && mouseY < 748 + 40 &&
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

  // Botón hacer encuesta
  if (mouseX > 27 && mouseX < 27 + 305 && mouseY > 839 && mouseY < 839 + 51 &&
    pantallaActual === 5) {
    pantallaActual = 12;
  }

  // Botón de dudas generales
  if (mouseX > 54 && mouseX < 54 + 305 && mouseY > 528 && mouseY < 528 + 31 &&
    pantallaActual === 2) {
    pantallaActual = 11;
  }

   // Botón hacer encuesta
   if (mouseX > 54 && mouseX < 54 + 305 && mouseY > 676 && mouseY < 676 + 62 &&
    pantallaActual === 11) {
    pantallaActual = 12;
  }


  // Boton de emergencia alta
  if (mouseX > 54 && mouseX < 54 + 320 && mouseY > 478 && mouseY < 478 + 40 &&
    pantallaActual === 2) {
    pantallaActual = 6;
  }

  // Botón comenzar asistencia
  if (mouseX > 128 && mouseX < 128 + 175 && mouseY > 666 && mouseY < 666 + 40 &&
    pantallaActual === 6) {
    pantallaActual = 7;
  }

   // Botón comenzar asistencia
   if (mouseX > 54 && mouseX < 54 + 320 && mouseY > 450 && mouseY < 450 + 40 &&
    pantallaActual === 7) {
    pantallaActual = 8;
  }
  //carga de llamada (hay que cambiarlo)
  if (mouseX > 45 && mouseX < 45 + 108 && mouseY > 874 && mouseY < 874 + 31 &&
    pantallaActual === 8) {
    pantallaActual = 9;
  }

  // Botón terminar llamada
  if (mouseX > 166 && mouseX < 166 + 92 && mouseY > 754 && mouseY < 754 + 94 &&
    pantallaActual === 9) {
    pantallaActual = 10;
  }

  // Botón hacer encuesta
  if (mouseX > 32 && mouseX < 32 + 303 && mouseY > 280 && mouseY < 280 + 54 &&
    pantallaActual === 10) {
    pantallaActual = 12;
  }

   // Botón enviar encuesta
   if (mouseX > 110 && mouseX < 110 + 203 && mouseY > 814 && mouseY < 814 + 53 &&
    pantallaActual === 12) {
    pantallaActual = 1;
  }





}