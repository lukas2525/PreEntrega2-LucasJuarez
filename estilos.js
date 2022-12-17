// Segunda PreEntrega Proyecto

// Entrada de Datos

// Defino el Array de Video Juegos 
const videoJuegos = [
    {id : 1, nombre: "Fifa 23", precio: 23000, stock: 100},
    {id : 2, nombre: "Nba 2K23", precio: 18000, stock: 50},
    {id : 3, nombre: "Mortal Kombat XL", precio: 12000, stock: 805},
    {id : 4, nombre: "Uncharter 4", precio: 8000, stock: 1000},
    {id : 5, nombre: "God of War 4", precio: 21600, stock: 900},
    {id : 6, nombre: "Crash Bandicoot Team Rumble", precio: 25000, stock: 1500},
    {id : 7, nombre: "E Football 2023", precio: 11000, stock: 350},
    {id : 8, nombre: "Nba Live 23", precio: 14000, stock: 200},
    {id : 9, nombre: "Formula 1 2023", precio: 16000, stock: 30},
    {id : 10, nombre: "Call of Duty WARZONE 2.0  ", precio: 28000, stock: 1000},
]; 


// Defino el Array de videoJuegos del Carrito
const videoJuegosCarrito = [];


// Defino una Clase
class Juego {
    constructor (id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.iva = 21;
    }

    aplicarIva() {
        this.precio = this.precio + ((this.precio * this.iva) / 100);
    }

}


// Declaro funcion buscar Juego
function buscarJuego(id) {
    return (videoJuegos.find(jueguito => jueguito.id === id) || null);
}


// Defino funcion Agregar
function agregarVideoJuego (juego_) {
    videoJuegosCarrito.push(juego_);
}


// Defino funcion eliminar
function eliminarVideoJuego(id) {
    let posicion = videoJuegosCarrito.findIndex(jueguito => jueguito.id === id);
    if (posicion > -1) {
        videoJuegosCarrito.splice(posicion, 1);
    }
    console.log(posicion);
}


// Recorro Video Juegos
function recorrerVideoJuegos() {
    let contenido_videoJuegos = "";
     
    for (let juego of videoJuegos) {
        contenido_videoJuegos += juego.id + "-> " + juego.nombre + ":"  + " $" + juego.precio + "\n";
    }
    return contenido_videoJuegos;
}


// Recorro Video Juegos del Carrito
function recorrerVideoJuegosCarrito() {
    let contenido_videoJuegos = "";
     
    for (let juego of videoJuegosCarrito) {
        contenido_videoJuegos += juego.id + "-> " + juego.nombre + ":" + " $" + juego.precio + "\n";
    }
    return contenido_videoJuegos;
}

// Carga de videoJuegos
let cargarJuego = true;


// Cargo videoJuegos en el Carrito
cargarJuego = true;


while (cargarJuego) {
    let contenido_videoJuegos = recorrerVideoJuegos();
    let juego = parseInt(prompt("Seleccione el Video Juego que Desea agregar al Carrito:\n\n" + contenido_videoJuegos));

    // Buscar el Video Juego
    let juego_ = buscarJuego(juego);
    console.log(juego_);

    // Verifica si el Juego Seleccionado es Valido    // Agregar Video Juegos al Carrito
    if (juego_ != null) {      
    agregarVideoJuego(juego_);
    } else {
    alert("No existe el Video Juego con el ID: " + juego + "!");
    }

    cargarJuego = confirm("Quiere agregar otro Video Juego al Carrito?");
}


// Cargo  la Eliminacion de videoJuegos que no desee en el Carrito
cargarJuego = true;


while (cargarJuego) {
    let contenido_videoJuegos = recorrerVideoJuegosCarrito();
    let juego = parseInt(prompt("Seleccione el Video Juego que desee Eliminar del Carrito: (0 - Salir!) \n\n" + contenido_videoJuegos));

    // Buscar el ID del Video Juego
    if (juego > 0) {
        eliminarVideoJuego(juego);
    } else {
        alert("No existe el Video Juego con el ID: " + juego + "!");
    }
    
    cargarJuego = confirm("Quiere eliminar otro Video Juego del Carrito?");
}


// Imprimo el Total de Video Juegos en el Carrito
let suma_total = 0;
let contenido_videoJuegos = "";

for (let jue of videoJuegosCarrito) {
    let juego =  new Juego(jue.id, jue.nombre, jue.precio, jue.stock);
    juego.aplicarIva(); //Aplico el Iva
    contenido_videoJuegos += juego.id + "-> " + juego.nombre + ":" + " $" + juego.precio + "\n";
    suma_total += juego.precio;
}



// Total a Pagar
alert("Video Juegos seleccionados:\n\n" + contenido_videoJuegos + "\n\nTotal a Pagar: $" + suma_total + "\nGracias por su Compra!");
