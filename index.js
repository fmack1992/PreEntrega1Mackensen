
const productos = [
    {
        codigo: "1",
        nombre: "Producto 01",
        precio: 500
    },
    {
        codigo: "2",
        nombre: "Producto 02",
        precio: 1000
    },
    {
        codigo: "3",
        nombre: "Producto 03",
        precio: 2000
    },
    {
        codigo: "4",
        nombre: "Producto 04",
        precio: 800
    },
    {
        codigo: "5",
        nombre: "Producto 05",
        precio: 3500
    },
    {
        codigo: "6",
        nombre: "Producto 06",
        precio: 2500
    },
    {
        codigo: "7",
        nombre: "Producto 07",
        precio: 7000
    }
];

let carrito = [];

let eleccionUsuario = parseInt(prompt(`**** Bienvenido a RockHouse Store **** \n Ingrese el número de acuerdo a la acción que desea realizar: \n1: Ver lista de productos. \n2: Salir.`));

while(eleccionUsuario != "1" && eleccionUsuario != "2") {
    alert("Por favor, ingrese 1 para ver la Lista de Productos, o 2 para Salir.")
    eleccionUsuario = parseInt(prompt(`\n1: Ver lista de productos. \n2: Salir.`));
}

if(eleccionUsuario == "1") {
    let listaProductos = productos.map(
        (producto) => producto.codigo + " - " + producto.nombre + " - " + "$" + producto.precio
    );
    alert(listaProductos.join(`\n`))
} else if (eleccionUsuario == "2") {
    alert("¡Muchas gracias por visitarnos!")
}

while (eleccionUsuario != "2") {
    let producto = prompt("Agrega un producto a tu carrito, indicando el codigo correspondiente:")
    let precio = 0

    if(producto == "1" || producto == "2" || producto == "3" || producto == "4" || producto == "5" || producto == "6" || producto == "7") {
        switch(producto) {
            case "1":
            precio = 500;
            break;

            case "2":
            precio = 1000;
            break;

            case "3":
            precio = 2000;
            break;

            case "4":
            precio = 800;
            break;

            case "5":
            precio = 3500;
            break;

            case "6":
            precio = 2500;
            break;

            case "7":
            precio = 7000;
            break;

            default:
            break;
        }
        let unidades = parseInt(prompt("Por favor, indique cuántas unidades desea adquirir"))
        carrito.push({producto, unidades, precio})
        console.log(carrito)
    } else {
        alert("No ha seleccionado una opción valida")
    }
    eleccionUsuario = prompt("Ingrese 1 para seguir comprando, o 2 para salir.")
    while(eleccionUsuario == "2"){
        alert("Muchas gracias por su compra")
        carrito.forEach((carritoFinal) => {
            alert(`producto: ${carritoFinal.producto}, unidades ${carritoFinal.unidades}, Total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
alert(`El total a pagar es: ${total}`)







//CODIGO ANTERIOR
/*function comprar () {
    let codigo
do{
    //Solicitud de código:
    codigo = parseInt(prompt(`**** Bienvenido a RockHouse Store **** \n Ingrese el número de acuerdo a la opción que desea adquirir: \n1: Producto 1 $500. \n2: Producto 2 $1000. \n3 Producto 3 $2000. \n4 Producto 4 $800. \n5 Producto 5 $3500. \n6 Producto 6 $2500. \n7 Producto 7 $7000. \n8 Ingrese 8 para finalizar su pedido.`));

    //Casos:
    switch(codigo){
        case 1: producto1 +=1; alert ("Usted ha adquirido una unidad de Producto 1");
        break;

        case 2: producto2 +=1; alert ("Usted ha adquirido una unidad de Producto 2");
        break;

        case 3: producto3 +=1; alert ("Usted ha adquirido una unidad de Producto 3");
        break;

        case 4: producto4 +=1; alert ("Usted ha adquirido una unidad de Producto 4");
        break;

        case 5: producto5 +=1; alert ("Usted ha adquirido una unidad de Producto 5");
        break;

        case 6: producto6 +=1; alert ("Usted ha adquirido una unidad de Producto 6");
        break;

        case 7: producto7 +=1; alert ("Usted ha adquirido una unidad de Producto 7");
        break;

        case 8: alert ("Usted ha finalizado su pedido.");
        break;

        default: alert("Ha seleccionado una opción no valida.");
    } //fin switch
}   while (codigo != 8);
};

comprar();
alert(`El detalle de su pedido es: \n Producto 1: ${producto1}. \n Producto 2: ${producto2}. \n Producto 3: ${producto3}. \n Producto 4: ${producto4}. \n Producto 5: ${producto5}. \n Producto 6: ${producto6}. \n Producto 7: ${producto7}`);

const TOTALPEDIDO = (producto1, producto2, producto3, producto4, producto5, producto6, producto7) => producto1 * precioProd1 + producto2 * precioProd2 + producto3 * precioProd3 + producto4 * precioProd4 + producto5 * precioProd5 + producto6 * precioProd6 + producto7 * precioProd7;

let totalPagar = TOTALPEDIDO(producto1, producto2, producto3, producto4, producto5, producto6, producto7);
alert(`El total a pagar es de ${totalPagar}`) */