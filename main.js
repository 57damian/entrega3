let pedir = 1;
const pedido  = [];
let total;
let gusto;
let cantidad;
let cantCarne;

class empanada {
    constructor(id,nombre,precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
}

const empadadas = [];

empadadas.push(new empanada (1,'carne', 150));
empadadas.push(new empanada (2,'pollo', 140));
empadadas.push(new empanada (3,'jamon y queso', 120));


const agregarPedido = (nombreEmpanada,cantidad) =>{
    
    const articulo = empadadas.find ((emp) => emp.nombre === nombreEmpanada)
    
    for(let i = 0; i < cantidad; i++){
    pedido.push(articulo)
    }
}


const boton = document.getElementById('carne')
const elPedido = document.querySelector('#pedido')

boton.addEventListener('click', () => {
    let gusto = "carne"
    cantCarne = document.getElementById("cantidadCarne").value;

    agregarPedido(gusto, cantCarne)
    console.log(pedido)
    
    total = pedido.reduce((acumulador, articulo) => acumulador + articulo.precio, 0)

    console.log(total)

})

pedido.forEach(emp => {
    //console.log(emp.nombre)
    elPedido.innerHTML = ` <p> ${emp.nombre}</p>`
})






// while(pedir != 0){
//     let gusto = prompt('ingrese el gusto de empanada');
//     let cantidad = prompt ('ingrese la cantidad');
//     agregarPedido(gusto, cantidad)


// pedir = prompt('ingrese 0 para terminar o cualquier tecla para seguir')
// }

// let total = pedido.reduce((acumulador, articulo) => acumulador + articulo.precio, 0)

// articulosPedidos = (pedido, mostrarPedido) =>{
//     for(const el of pedido){
//         return mostrarPedido(el.nombre)
//     }
// }

// articulosPedidos(pedido,console.log())
        
 


// alert(`Su pedido esta compuesto por ${mostrarPedido} y su precio total es ${total}`)






