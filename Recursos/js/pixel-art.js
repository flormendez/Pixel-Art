var nombreColores = [
  "White",
  "LightYellow",
  "LemonChiffon",
  "LightGoldenrodYellow",
  "PapayaWhip",
  "Moccasin",
  "PeachPuff",
  "PaleGoldenrod",
  "Bisque",
  "NavajoWhite",
  "Wheat",
  "BurlyWood",
  "Tan",
  "Khaki",
  "Yellow",
  "Gold",
  "Orange",
  "DarkOrange",
  "OrangeRed",
  "Tomato",
  "Coral",
  "DarkSalmon",
  "LightSalmon",
  "LightCoral",
  "Salmon",
  "PaleVioletRed",
  "Pink",
  "LightPink",
  "HotPink",
  "DeepPink",
  "MediumVioletRed",
  "Crimson",
  "Red",
  "FireBrick",
  "DarkRed",
  "Maroon",
  "Brown",
  "Sienna",
  "SaddleBrown",
  "IndianRed",
  "RosyBrown",
  "SandyBrown",
  "Goldenrod",
  "DarkGoldenrod",
  "Peru",
  "Chocolate",
  "DarkKhaki",
  "DarkSeaGreen",
  "MediumAquaMarine",
  "MediumSeaGreen",
  "SeaGreen",
  "ForestGreen",
  "Green",
  "DarkGreen",
  "OliveDrab",
  "Olive",
  "DarkOliveGreen",
  "YellowGreen",
  "LawnGreen",
  "Chartreuse",
  "GreenYellow",
  "Lime",
  "SpringGreen",
  "LimeGreen",
  "LightGreen",
  "PaleGreen",
  "PaleTurquoise",
  "AquaMarine",
  "Cyan",
  "Turquoise",
  "MediumTurquoise",
  "DarkTurquoise",
  "DeepSkyBlue",
  "LightSeaGreen",
  "CadetBlue",
  "DarkCyan",
  "Teal",
  "Steelblue",
  "LightSteelBlue",
  "Honeydew",
  "LightCyan",
  "PowderBlue",
  "LightBlue",
  "SkyBlue",
  "LightSkyBlue",
  "DodgerBlue",
  "CornflowerBlue",
  "RoyalBlue",
  "SlateBlue",
  "MediumSlateBlue",
  "DarkSlateBlue",
  "Indigo",
  "Purple",
  "DarkMagenta",
  "Blue",
  "MediumBlue",
  "DarkBlue",
  "Navy",
  "Thistle",
  "Plum",
  "Violet",
  "Orchid",
  "DarkOrchid",
  "Fuchsia",
  "Magenta",
  "MediumOrchid",
  "BlueViolet",
  "DarkViolet",
  "DarkOrchid",
  "MediumPurple",
  "Lavender",
  "Gainsboro",
  "LightGray",
  "Silver",
  "DarkGray",
  "Gray",
  "DimGray",
  "LightSlateGray",
  "DarkSlateGray",
  "Black"
];

var paleta = document.getElementById("paleta");


var grillapixeles = document.getElementById("grilla-pixeles");

// Variable para guardar el elemento 'color-personalizado'.Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById("color-personalizado");


//--Funciones y eventos


//Crea paleta para selección de colores
var paletaDeColor = function() {
  for (var i = 0; i < nombreColores.length; i++) {
    var coloresPaleta = document.createElement("div");
    coloresPaleta.className = "color-paleta";
    coloresPaleta.style.backgroundColor = nombreColores[i];
    paleta.appendChild(coloresPaleta);
  }
};
paletaDeColor();

//Crea lienzo con pixeles en blanco
var grilla = function() {
  for (var i = 0; i <= 1750; i++) {
    var pixeles = document.createElement("div");
    grillapixeles.appendChild(pixeles);
  }
};
grilla();

//Cambia primer cuadrado que indica el color seleccionado de la paleta
var cambiarIndicador = function(e) {
  document.getElementById("indicador-de-color").style.backgroundColor =
    e.target.style.backgroundColor;
}

paleta.addEventListener("click", cambiarIndicador);


//Función para colorear los pixeles del lienzo
var pintarPixeles = function(e){
  e.target.style.backgroundColor = document.getElementById("indicador-de-color").style.backgroundColor
};
grillapixeles.addEventListener("click", pintarPixeles);

//Cambia el segundo cuadrado que indica el color personalizado
colorPersonalizado.addEventListener('change', function(){
  colorActual = colorPersonalizado.value;
  document.getElementById("indicador-de-color").style.backgroundColor = colorActual;
});


//Detecta si el Mouse está apretado 
var haceClick = function(){
  console.log("click");
  haceClick=true;
}
grillapixeles.addEventListener("mousedown", haceClick)

//Detecta si el Mouse no está apretado
var noHaceClick = function(){
  console.log("no");
  haceClick=false;
}
grillapixeles.addEventListener("mouseup", noHaceClick)

//FuNción que si el mouse está apretado, pinta varios pixeles a la vez
var pintarEnMovimiento = function(e){
  if (haceClick == true) {
    pintarPixeles(e)
  }

}
grillapixeles.addEventListener("mouseover", pintarEnMovimiento)