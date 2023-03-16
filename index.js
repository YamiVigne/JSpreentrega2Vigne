// alerta nombre & edad
alert("Bienvenido a Perifericos Center");

function solicitarUsuario(){
    let usuario = prompt("Por favor, ingresa tu nombre");
    console.log(usuario);
    while (usuario === "") {
    usuario = prompt("Ingresa tu nombre!!!!");
    }
    let edad = prompt(` ${usuario}! ¿Qué edad tenes? `);
    console.log(edad);
      if (edad >= 18) {
      alert(`Perfecto ${usuario}!... Estas en el lugar indicado ~ `)
      }else{
      alert(` ${usuario}! sos menor!, no vas a poder realizar compras ni gastos a tu nombre. Necesitas un adulto responsable que te ayude a concretar la compra`)
      }
}

// PRECIOS PRODUCTOS

// TECLADO 
let logitech = 11670
let hyperX= 34999
let razer = 58292
// MOUSE
let logitech203 = 7999
let aurora = 6912
let razerviper = 17299
// WEB CAM
let logitech505 = 6532
let logitech920 = 23500
let logitech922 = 29000
// JOYSTICK
let sony = 34399
let xbox = 25999
let generico = 7890
//VALORES SUBTOTALES Y TOTALES
let subtotal = 0;
let valorTotal = 0;

// FUNCIONES
function sumarProductos (producto) {
  subtotal = producto + subtotal  
  };
function calcularTotal (total) {
  valorTotal = total ;
  };
function cuotificar (cuotas) {
  return subtotal / cuotas;
  };

 let comprar = true;
 let carritoFinalizado = false;

function mostrarPerif() {
  let perif;
    do {
      perif = parseInt (prompt("Elegí los periféricos que necesitas para tu pc : \n 1) Teclados \n 2) Mouse \n 3) Joysticks \n 4) Webcam"))
      } while (perif != 1 && perif != 2 && perif != 3 && perif != 4 )
        switch (perif) {
          case 1:
            alert("Seleccionaste Teclados");
              while (comprar) {
                let producto = prompt("Elegí la marca del teclado:\n 1- Teclado bluetooth Logitech K380 $11670 \n 2- Teclado HyperX Alloy Origins Core $34999 \n 3- Teclado Razer BlackWidow V3 $58292 \n 4-Finalizar Compra");
                if (producto === "4") {
                  calcularTotal (subtotal);
                  alert("El valor total de la compra es de $" + subtotal);
                  comprar = false;
                  carritoFinalizado = true;
                }
                else if (producto == "1") {
                  sumarProductos (logitech);
                  console.log("Producto añadido: "+producto+ ". Subtotal = $"+subtotal);
                  alert("Teclado bluetooth Logitech K380 QWERTY fue agregado al carrito");   
                }
                else if (producto == "2") {
                  sumarProductos (hyperX);
                  console.log("Producto añadido: "+producto+ ". Subtotal = $"+subtotal);
                  alert("Teclado HyperX Alloy Origins Core QWERTY fue agregado al carrito");
                }
                else if (producto === "3") {
                  sumarProductos (razer);
                  console.log("Producto añadido: "+producto+ ". Subtotal = $"+subtotal);
                  alert("Teclado Razer BlackWidow V3 QWERTY fue agregado al carrito");
                }
              }
            break;
          case 2:
            alert("Seleccionaste Mouse");
              while (comprar) {
                let producto = prompt("Elegí el Mouse para tu necesidad:\n 1- Mouse Logitech G203 $7999 \n 2- Mouse VSG Aurora $ 6912 \n 3- Mouse Razer Viper Mini $ 17299 \n 4-Finalizar compra");
                if (producto === "4") {
                  calcularTotal (subtotal);
                  alert("El valor total de la compra es de $" + valorTotal +".");
                  comprar = false;
                  carritoFinalizado = true;
                }
                else if (producto == "1") {
                  sumarProductos (logitech203);
                  console.log("Producto añadido: "+producto+ ". Subtotal = $"+subtotal);
                  alert("Mouse Logitech G203 fue agregado al carrito");
                }
                else if (producto == "2") {
                  sumarProductos (aurora);
                  console.log("Producto añadido: "+producto+ ". Subtotal = $"+subtotal);
                  alert("Mouse VSG Aurora fue agregado al carrito");
                }
                else if (producto == "3") {
                  sumarProductos (razerviper);
                  console.log("Producto añadido: "+producto+ ". Subtotal = $"+subtotal);
                  alert("Mouse Razer Viper Mini fue agregado al carrito");
                }
              }
            break;  
          case 3:
            alert("Seleccionaste Joystick, elige cual agregar al carrito");
              while (comprar) {
                let producto = prompt("Ingrese el Joystick que deseas agregar al carrito:\n 1- Joystick Dual sense Galactic Purple $34399 \n 2- Joystick inalámbrico Xbox $25999  \n 3- Joystick genérico $7890 \n 4- Finalizar compra");
                if (producto === "4") {
                  calcularTotal (subtotal);
                  alert("El valor total de la compra es de $" + subtotal);
                  comprar = false;
                  carritoFinalizado = true;
                }
                else if (producto == "1") {
                  sumarProductos (sony);
                  console.log("Producto añadido: "+producto+ ". Subtotal = $"+subtotal);
                  alert("Joystick Dual sense Galactic Purple fue agregado al carrito");
                }
                else if (producto == "2") {
                  sumarProductos (xbox);
                  console.log("Producto añadido: "+producto+ ". Subtotal = $"+subtotal);
                  alert("Joystick inalámbrico Xbox fue agregado al carrito");
                }
                else if (producto === "3") {
                  sumarProductos (generico);
                  console.log("Producto añadido: "+producto+ ". Subtotal = $"+subtotal);
                  alert("Joystick Genérico fue agregada al carrito");
                }
              }
            break;
          case 4:
            alert("Seleccionaste Webcam, elige cual agregar al carrito");
              while (comprar) {
                let producto = prompt("Ingrese el nombre de la figura que desea agregar al carrito:\n 1- Cámara web Logitech C505e HD 30FPS $6532 \n 2- Cámara web Logitech C920e Full HD $23500 \n 3- Cámara web Logitech C922 $29000 \n 4-Finalizar compra");
                if (producto === "4") {
                  calcularTotal (subtotal);
                  alert("El valor total de la compra es de $" + subtotal);
                  comprar = false;
                  carritoFinalizado = true;
                }
                else if (producto == "1") {
                  sumarProductos (logitech505);
                  console.log("Producto añadido: "+producto+ ". Subtotal = $"+subtotal);
                  alert("Cámara web Logitech C505e HD 30FPS fue agregada al carrito");
                }
                else if (producto == "2") {
                  sumarProductos (logitech920);
                  console.log("Producto añadido: "+producto+ ". Subtotal = $"+subtotal);
                  alert("Cámara web Logitech C920e Full HD fue agregada al carrito");
                }
                else if (producto === "3") {
                  sumarProductos (logitech922);
                  console.log("Producto añadido: "+producto+ ". Subtotal = $"+subtotal);
                  alert("Cámara web Logitech C922 fue agregada al carrito");
                }
              }
            break;
        default:
            alert("Opcion no valida");
            break;
      }
    }

// // cobro
// function cobrar(producto,precio){
//   alert("Estas por comprar el siguiente périferico para tu pc: " + producto +" \nPrecio: $"+ subtotal) 
//    let pago = parseInt(prompt("¿Con cuanto dinero abonas?"))
//    if(pago> precio){
//        alert("¡Gracias por tu compra! Tu vuelto es "+ "$" + (pago - subtotal))
//    }
//   }    
//    else if (pago === subtotal) {
//        alert("¡Gracias por tu compra!!");
//    }
//    else {
//        alert ("No te alcanza !!!!")
//    }
// }


// // REVISAR ESTA PARTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
// //Finalizar compra
// function formaPago()
//   let formaPago = prompt("Seleccione como desea abonar su compra, usando la palabra correspondiente: \n Efectivo \n Transferencia \n Crédito ");
//   while (formaPago !== "efectivo" && formaPago !== "transferencia" && formaPago !== "credito") {
  
//   switch (formaPago) {
//     case "efectivo":
//     alert("Estas por comprar el siguiente périferico para tu pc: " + nombre +" \nPrecio: $"+ precio); 
//     let pago = parseInt(prompt("¿Con cuanto dinero abonas?"))
//     if(pago> precio){
//         alert("¡Gracias por tu compra! Tu vuelto es "+ "$" + (pago - precio))
//     }
            
//     else if (pago === precio) {
//         alert("¡Gracias por tu compra!!");
//     }
//     else {
//         alert ("No te alcanza !!!!")
//     } 
//     break;  
//     case "transferencia":
//     alert("Se debitaran $"+valorTotal+" de su cuenta bancaria.");
//     break;
//     case "credito":
//     let cuotas = 0;
//     let cuotasAprobado = true;
//     cuotas = parseInt(prompt("Elija cantidad de cuotas: \n 1 \n 3 \n 6 \n 12"));
//     while (cuotasAprobado) {
//     if (cuotas === 1 || cuotas === 3 * interes3p || cuotas === 6 * interes6p || cuotas === 12 * interes12p ) {
//       alert("Su pago será de "+cuotas+" cuotas de $"+cuotificar(cuotas)+"." );
//       cuotasAprobado= false;
//     }
//     else {
//       cuotas = parseInt(prompt("Ingrese un número de cuotas válido: 1, 3, 6 o 12 cuotas."));
//     }
//     let creditCard = prompt("Ingrese número de tarjeta de crédito");
//     alert("Su tarjeta "+creditCard+" ha sido aprobada. Muchas gracias por su compra!");
//   }
//     break;
//   }
//   let envio = prompt("Indique su direccion para el envio");
//   alert("Su envio ha sido programado para mañana en el horario de 9 am a 18 pm a la direccion : " + envio);
// }

// if (carritoFinalizado) {
//   let envio = prompt("Agregue su direccion para el envio");
//   alert("Se enviara en el horario de 9 am a 4 pm a la direccion de " + envio);
//   }


solicitarUsuario();
let setupNombre = mostrarPerif();
let precioSetup = validarPrecio(setupNombre);
cobrar(setupNombre,precioSetup);