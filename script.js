class Producto{

    constructor( nombre, precio, material){

        this.nombre = nombre;
        this.precio = precio;
        this.material = material;
    }

    get_datos(){
        console.log("<------------------------>")
        console.log("Nombre: " , this.nombre);
        console.log("Precio: " , this.precio);
        console.log("Material: " , this.material);
        console.log("");
    }
}

//ALTA DE PRODUCTOS//

let lista_productos = [];

for ( let i=0 ; i < 2 ; i = i+ 1){

    let nombre = prompt("Ingrese el nombre del producto");
    let precio = parseInt(prompt("Ingrese el precio del producto"));
    let material = prompt("Ingrese el nombre del material");

    let producto = new Producto(nombre, precio, material);

    lista_productos.push(producto);
}

console.log( lista_productos );

//FIN ALTA DE PRODUCTOS//

// INICIO RENDER DE PRODUCTOS

for( let producto of lista_productos ){

    producto.get_datos();

}

//FIN DEL RENDER DE PRODUCTOS


//SIMULAR COMPRA DE USUARIO//

function buscar_producto ( producto ){

    return producto.nombre == compra

}


function agregar_carrito ()
{
    let resultado = lista_productos.find(buscar_producto);
    

    productos_carrito.push(resultado);
}

let consultar ="";
let productos_carrito= [];
let compra = "";


// let resultado = {};

while( consultar != "NO" ){
    compra = prompt("Ingrese el nombre del producto que desea comprar");

    agregar_carrito();

    consultar = prompt('Escriba "Si" para agregar productos y "NO" para finalizar');
}

console.log(productos_carrito);


// console.log(productos_carrito);tv

// if(resultado != undefined){
    
    
// }