
class Producto {
    constructor(codigo, nombre, precio){
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
    }

    /* mostrarInformacion() {
        alert(`- Codigo: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio}`)
    } */
}

//Instancias de Class Producto
const productos1 = new Producto("1", "Remera1", 5000);
const productos2 = new Producto("2", "Remera2", 6000);
const productos3 = new Producto("3", "Buzo1", 12000);
const productos4 = new Producto("4", "Buzo2", 10000);
const productos5 = new Producto("5", "Cinto1", 3000);
const productos6 = new Producto("6", "Cinto2", 2500);
const productos7 = new Producto("7", "Billetera1", 3500);


//CARRITO CLASS
class CarritoCompras{
    constructor() {
        this.productosCarrito = [];
    }

    addProductos(cantidad, precio) {
        this.productosCarrito.push(...Array (cantidad).fill(precio)); //Los puntos suspensivos (spread operator) crean una copia del Array anterior. Para que más adelante no nos cree un Array por cada elemento. Fill rellena el arreglo.
    }

    /* mostrarProductos() {
        alert(this.productosCarrito);
    } */

    calcTotal() {
        return this.productosCarrito
                    .map(precio => precio)
                    .reduce( (acc, precio) => acc + precio, 0);
    }

    imprimirTicket() {
        alert(`Total a pagar ${this.calcTotal()}`)
    }
}



let eleccionUsuario = parseInt(prompt(`**** Bienvenido a RockHouse Store **** \n Ingrese el número de acuerdo a la acción que desea realizar: \n1: Ver lista de productos. \n2: Salir.`));

while(eleccionUsuario != "1" && eleccionUsuario != "2") {
    alert("Por favor, ingrese 1 si desea ver la Lista de Productos, o 2 para Salir.")
    eleccionUsuario = parseInt(prompt(`\n1: Ver lista de productos. \n2: Salir.`));
}

if(eleccionUsuario == "1") {
    alert (`A continuación se desplegará la lista de productos`)
} else if (eleccionUsuario == "2") {
    alert("¡Muchas gracias por visitarnos!")
}


const carrito = new CarritoCompras(); //Se arma el carrito

//CLIENTE SELECCIONA PRODUCTOS
while (eleccionUsuario != "2") {
    let productoElegido = prompt (`\n Por favor, ingrese el codigo del producto para agregarlo al carrito: \n- Codigo: ${productos1.codigo}, Nombre: ${productos1.nombre}, Precio: ${productos1.precio}\n- Codigo: ${productos2.codigo}, Nombre: ${productos2.nombre}, Precio: ${productos2.precio}\n- Codigo: ${productos3.codigo}, Nombre: ${productos3.nombre}, Precio: ${productos3.precio}\n- Codigo: ${productos4.codigo}, Nombre: ${productos4.nombre}, Precio: ${productos4.precio} \n- Codigo: ${productos5.codigo}, Nombre: ${productos5.nombre}, Precio: ${productos5.precio} \n- Codigo: ${productos6.codigo}, Nombre: ${productos6.nombre}, Precio: ${productos6.precio}\n- Codigo: ${productos7.codigo}, Nombre: ${productos7.nombre}, Precio: ${productos7.precio} \n *Para finalizar, ingrese el número 8`)
    

 //QUE PASA SI EL CLIENTE SELECCIONA UN PRODUCTO???? Si el cliente seleeciona un producto, agrego una unidad y el precio del producto elegido.
 if(productoElegido == "1" || productoElegido == "2" || productoElegido == "3" || productoElegido == "4" || productoElegido == "5" || productoElegido == "6" || productoElegido == "7") {
    switch(productoElegido) {
        case "1":
        carrito.addProductos(1, productos1.precio); //Si el cliente seleeciona un producto, agrego una unidad y el precio del producto elegido.
        break;

        case "2":
        carrito.addProductos(1, productos2.precio);
        break;

        case "3":
        carrito.addProductos(1, productos3.precio);
        break;

        case "4":
        carrito.addProductos(1, productos4.precio);
        break;

        case "5":
        carrito.addProductos(1, productos5.precio);
        break;

        case "6":
        carrito.addProductos(1, productos6.precio);
        break;

        case "7":
        carrito.addProductos(1, productos7.precio);
        break;

        default:
        break;
    } 
 }
    eleccionUsuario = prompt("Ingrese 1 para seguir comprando, o 2 para salir.")
    while(eleccionUsuario == "2"){
        alert("Muchas gracias por su compra")
        break;
    }
}

/* carrito.mostrarProductos(); MEJORAR EL CODIGO PARA QUE ME MUESTRE UN DETALLE CON NOMBRE DE PRODUCTOS*/

carrito.imprimirTicket();


