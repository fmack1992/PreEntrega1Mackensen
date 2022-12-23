let producto1 = 0, producto2 = 0, producto3 = 0, producto4 = 0, producto5 = 0, producto6 = 0, producto7 = 0;
let precioProd1 = 500, precioProd2 = 1000, precioProd3 = 2000, precioProd4 = 800, precioProd5 = 3500, precioProd6 = 2500, precioProd7 = 7000;

function comprar () {
    let codigo
do{
    //Solicitud de código:
    codigo = parseInt(prompt(`**** Bienvenido a Sunshine Store **** \n Ingrese el número de acuerdo a la opción que desea adquirir: \n1: Producto 1 $500. \n2: Producto 2 $1000. \n3 Producto 3 $2000. \n4 Producto 4 $800. \n5 Producto 5 $3500. \n6 Producto 6 $2500. \n7 Producto 7 $7000. \n8 Ingrese 8 para finalizar su pedido.`));

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
alert(`El total a pagar es de ${totalPagar}`)