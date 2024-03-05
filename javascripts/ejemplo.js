console.log("Test JS")
const cafes = [
    {
        id: 1,
        nombre: "Cafe Americano",
        precio: 500,
        cantidad: 0
    },
    {
        id: 2,
        nombre: "Cafe Latte",
        precio: 900,
        cantidad: 0
    },
    {
        id: 3,
        nombre: "Café Mocha",
        precio: 700,
        cantidad: 0
    },
    {
        id: 4,
        nombre: "Cappuccino",
        precio: 1200,
        cantidad: 0
    },
]

let compras = []

function add() {
    //alert("Prueba boton")
    const id = document.getElementById("product").value
    const cant = document.getElementById("number").value
    console.log(id, cant)

    const producto = cafes.find((cafe) => cafe.id == id)
    console.log(producto)

    const comprobar = compras.find((compra) => compra.id == id)
    if (comprobar){
        comprobar.cantidad += parseInt(cant)
    } else{
        producto.cantidad = parseInt(cant)
        compras.push(producto)
    }
    console.log(compras)

    mostrar()
}

function mostrar() {
    let mensaje = ""
    for (const compra of compras) {
        mensaje += `${compra.nombre} - ${compra.cantidad} - Precio: ${compra.precio}\n`
    }
    alert(mensaje)
}