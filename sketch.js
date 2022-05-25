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
}
