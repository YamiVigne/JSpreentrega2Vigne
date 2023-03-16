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
solicitarUsuario();

//--------------------------------------------------------------------------

const divPerifericos = document.getElementById("divPerifericos")
const tablaCarrito = document.getElementById("tablaCarrito")
const totalCarrito = document.getElementById("totalCarrito")

document.addEventListener('DOMContentLoaded', () => {
    mostrarCarrito()
    mostrarTotalCarrito()
    mostrarProductos(perifericos);
});

function mostrarProductos(perifericos){
    divPerifericos.innerHTML=""
    perifericos.forEach(perifericos => {
        divPerifericos.innerHTML+=`
        <div class="card mb-4" style="width: 18rem;">
            <img src="${perifericos.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${perifericos.marca} ${perifericos.modelo}</h5>
                <p class="card-text">$ ${perifericos.precio}</p>
                <button onclick="agregarAlCarrito(${perifericos.id})" class="btn btn-success">Comprar</button>
            </div>
        </div>
        `
    });
}

// carrito

function mostrarCarrito() {
    let carrito = capturarStorage()
    tablaCarrito.innerHTML =""
    carrito.forEach(element => {
        tablaCarrito.innerHTML+= `
        <tr>
            <td data-th="Product">
                <div class="row">
                <div class="col-sm-2 hidden-xs"><img src="${element.img}" width=50px alt="..."/></div>
                    <div class="col-sm-10">
                        <h5 class="nomargin">${element.marca} ${element.modelo}</h5><h6>${element.color}</h6>
                    </div>
                </div>
            </td>
            <td data-th="Precio">${element.precio}</td>
            <td data-th="Cantidad">
                <div class="column d-flex align-items-center">
                    <button class="btn btn-sm" onclick="restarCant(${element.id})"><i class="fa-solid fa-square-minus"></i></button>
                    <p class="form-control text-center mb-0">${element.cantidad}</p>
                    <button class="btn btn-sm" onclick="incrementarCant(${element.id})"><i class="fa fa-plus-square"></i></button>
                </div>
            </td>
            <td data-th="Subtotal" class="text-center">${element.precio * element.cantidad}</td>
            <td><button onclick="eliminarProductoCarrito(${element.id})" class="btn btn-danger btn-sm"><i class="fa-solid fa-trash-can"></i></button></td>
        </tr>
        `
    });
}

function capturarStorage(){
    return JSON.parse(localStorage.getItem("carrito")) || []
}

function guardarStorage(array){
    localStorage.setItem("carrito", JSON.stringify(array))
}

function agregarAlCarrito(id) {
    let carrito = capturarStorage()
    if (estaEnCarrito(id)){
        incrementarCant(id)
    } else {
        let productoEncontrado = perifericos.find(perifericos=>perifericos.id==id)
        carrito.push({...productoEncontrado, cantidad: 1})
        guardarStorage(carrito)
        mostrarCarrito()
    }
    mostrarCarrito()
    console.log(carrito)
    mostrarTotalCarrito()
}

function incrementarCant(id) {
    let carrito = capturarStorage()
    const indice = carrito.findIndex(perifericos => perifericos.id==id)
    carrito[indice].cantidad++
    guardarStorage(carrito)
    mostrarCarrito()
    mostrarTotalCarrito()
}

function restarCant(id) {
    let carrito = capturarStorage();
    const index = carrito.findIndex((e) => e.id == id); 
    if (carrito[index].cantidad > 1) {
      carrito[index].cantidad--; 
      guardarStorage(carrito);
      mostrarCarrito();
      mostrarTotalCarrito();
    } else {
      carrito = confirm(`deseas eliminar ${carrito[index].marca} ${carrito[index].modelo} del carrito de compras`) && eliminarProductoCarrito(id);
    }
  }

function estaEnCarrito(id){
    let carrito = capturarStorage()
    return carrito.some(e=>e.id==id)
}

function eliminarProductoCarrito(id) {
    let carrito = capturarStorage()
    //hace que nos devuelva todo, menos el id buscado
    let resultado = carrito.filter(perifericos => perifericos.id != id)
    guardarStorage(resultado)
    console.log(resultado)
    mostrarCarrito()
    mostrarTotalCarrito()
}


// calculo el valor total

function mostrarTotalCarrito() {
    const carrito = capturarStorage();
    const total = carrito.reduce(
      (acc, element) => acc + element.cantidad * element.precio,0
    );
    totalCarrito.innerHTML = total;
  }