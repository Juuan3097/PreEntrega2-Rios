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

lista_productos.push(new Producto("anillo" , 500 , "oro"));
lista_productos.push(new Producto("pulsera" , 600 , "oro"));
lista_productos.push(new Producto("collar" , 700 , "oro"));
lista_productos.push(new Producto("boton" , 400 , "plata"));
lista_productos.push(new Producto("amuleto" , 200 , "plata"));
lista_productos.push(new Producto("cruz" , 100 , "plata"));

// let lista_productos = [];

// for ( let i=0 ; i < 6 ; i = i+ 1){

//     let nombre = prompt("Ingrese el nombre del producto");
//     let precio = parseInt(prompt("Ingrese el precio del producto"));
//     let material = prompt("Ingrese el nombre del material");

//     let producto = new Producto(nombre, precio, material);

//     lista_productos.push(producto);
// }

// console.log( lista_productos );

//FIN ALTA DE PRODUCTOS//

// INICIO RENDER DE PRODUCTOS

for( let producto of lista_productos ){

    producto.get_datos();

}

//FIN DEL RENDER DE PRODUCTOS


//SIMULAR COMPRA DE USUARIO//

//AGREGAR PRODUCTOS AL CARRITO

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


while( consultar != "NO" ){
    compra = prompt("Ingrese el nombre del producto que desea comprar");

    agregar_carrito();

    consultar = prompt('Escriba "Si" para agregar productos y "NO" para finalizar');
}

console.log(productos_carrito);




    
let con_descuento = productos_carrito.filter((ele_uno) => ele_uno.material.includes("oro")) 
let sin_descuento = productos_carrito.filter((ele_dos) => ele_dos.material.includes("plata"))

let descuento
//USAR MAPA PARA APLICAR EL 30% DE DESCUENTO A con_descuento

let cupones = [
    {codigo:"ABC101" , descuento: 0.9},
    {codigo:"ABC102" , descuento: 0.85},
    {codigo:"ABC103" , descuento: 0.80},
    {codigo:"ABC104" , descuento: 0.75},
    {codigo:"ABC105" , descuento: 0.5},

]


function buscar_cupon ( cupones ){

    if( cupones.codigo == cupon){
        return cupones.descuento
    }
    else
        return false

}
let cupon = prompt("Ingrese código de descuento, recuerde que tiene un solo intento");

let resultado_cupon = cupones.find(buscar_cupon);


let aplicar_descuento = con_descuento.map((ele_uno) => {
    if(resultado_cupon != undefined){
        return {
            nombre: ele_uno.nombre,
            precio: ele_uno.precio * resultado_cupon.descuento,
            material: ele_uno.material
        }
    }
else{
    console.log("el cupón ingresado no es válido, su compra continuara")
}
})

let suma_total = sin_descuento.concat(aplicar_descuento)

function calcular_total( acu , producto){
    acu = acu + producto.precio;
    return acu

}

let venta_total = suma_total.reduce(calcular_total , 0);

console.log("El valor final con descuentos aplicados es de: " , venta_total);