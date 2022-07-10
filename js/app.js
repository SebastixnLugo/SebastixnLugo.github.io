const items = document.getElementById("items")
const templateCard = document.getElementById("templateCard").content

document.addEventListener("DOMContentLoaded", () => {
    fetchData()
})
items.addEventListener("click", e => {
    addCarrito(e)
})

const fetchData = async () => {
    const res = await fetch("api-productos.json")
    const data = await res.json()
    dataProducto(data)

}

const dataProducto = data => {
    data.forEach(item => {
        templateCard.querySelector("h3").textContent = item.title
        templateCard.querySelector("price").textContent = item.precio
        templateCard.querySelector("buy").dataset.id = item.id
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}

const addCarrito = e => {
    console.log(e.target)
}