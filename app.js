const tacosTutaco = [
    {tacos: "Taco PíoPío", proteina: "Pollo", porción: "250g", picante: "Suave", precio: 2500 },
    {tacos: "Taco al Pastor", proteina: "Carne Vacuna", porción: "275g", picante: "Medio", precio: 3000 },
    {tacos: "Taco Cochinita", proteina: "Carne de Cerdo", porción: "170g", picante: "Moderado", precio: 1700 },
    {tacos: "Taco del Mar", proteina: "Pescado", porción: "200g", picante: "Extremo", precio: 3500 },
    {tacos: "Taco Tour", proteina: "Todas", porción: "350g", picante: "Sin picante", precio: 4500 }

]
const shopcart = []

let pedido = prompt("¿Quieres elegir uno de nuestros Tacos? (Orale que si) o (Chanfles que paso,no)")

pedidos(pedido,tacosTutaco)

function pedidos(pedido,tacosTutaco) {
    
    if(pedido == "Chanfles que paso,no"){
     return alert("Muchas gracias, nos vemos la proxima");
    }
    
    else if (pedido == "Orale que si"){
        let todosLosTacos = tacosTutaco.map((tuTaco) => tuTaco.tacos + " " + tuTaco.precio + "$");
     alert(todosLosTacos.toString())
    
    }
    else alert("Selecciona una orden valida, carnal ");
}

while (pedido != "Chanfles que paso,no") {
    let tuTaco = prompt("Agrega o elige un taco a tu carrito de tacos")

    let tacoEncontrado = tacosTutaco.find((item) => item.tacos == tuTaco)
    if (tacoEncontrado != undefined) {
        let unidades = parseInt(prompt("Cuantos tacos quieres llevar"))
        
        shopcart.push({ nombre: tuTaco, cantidad: unidades, precio: tacoEncontrado.precio })
        console.log(shopcart)
    } else {
        alert("Disculpa, pero no tenemos ese taco")
    }

    pedido = prompt("¿Quieres seguir comprando? Orale que si / Chanfles que paso,no")

    if (pedido === "Chanfles que paso,no") {
        alert("Gracias por tu compra: Te estaremos esperando de vuelta, para otro Taqueteo en Tu Taco.com")
        shopcart.forEach((comprafinal) => {
        console.log(`tuTaco: ${comprafinal.nombre}, unidades ${comprafinal.cantidad}, total a pagar por tacos ${comprafinal.cantidad * comprafinal.precio}`)
        })
    }

}

const total = shopcart.reduce((acc, el) => acc + el.precio * el.cantidad, 0)
console.log(`El total a pagar por la compra del taco o los tacos es:  ${total}`)

