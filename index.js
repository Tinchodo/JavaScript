const productos = [
    {nombre: "ron", precio: 1500},
    {nombre: "vodka", precio: 1200},
    {nombre: "tequila", precio: 1100},
];
let carrito = []


let seleccion = prompt ("hola, desea comprar algún producto si o no?")

while(seleccion != "si" && seleccion !="no"){
    alert("porfavor ingresa si o no")
    seleccion = prompt ("hola, desea comprar algo si o no?")
}


if(seleccion == "si"){
    alert("a continuacion nuestra lista de productos")
    let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(todosLosProductos.join(" - "))
} else if (seleccion = "no"){
    alert("Gracias por venir, hasta pronto!")
}

while(seleccion != "no"){
    let producto = prompt("agrega un producto a tu carrito")
    let precio = 0

    if(producto == "ron" || producto == "vodka" || producto == "tequila"){
      switch(producto) {
        case "ron" :
         precio = 1500;
         break;
        case "vodka" :
          precio = 1200;
          break;
          case "tequila" :
          precio = 1100;
          break;
          default:
            break;
      }
    let unidades = parseInt(prompt("cuantas unidades quiere llevar?"))  
      
    carrito.push({producto, unidades, precio})
    console.log(carrito)
    } else {
        alert("no tenemos ese producto")
    }    

    seleccion = prompt("desea seguir comprando?")

    while(seleccion === "no"){
        alert("gracias por la compra")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
}   


const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagar por su compra es: ${total}`) 

// Entregable 14/9

const parrafo = document.querySelector("p")
const boton = document.querySelector("button")

let carrito1 = 0;

boton.addEventListener("click", () =>{
   console.log("click");
   carrito1++;
   parrafo.textContent = carrito1;
});