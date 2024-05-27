const botonCarrito = document.getElementById("agregarCarrito");
const carrito = document.getElementById("carrito");

botonCarrito.addEventListener("click", () => {
	const producto = document.querySelector(".producto");
	const nombreProducto = producto.querySelector("h2").textContent;
	const precioProducto = producto.querySelector("p").textContent;

	// Crea el elemento del producto para el carrito
	const elementoCarrito = document.createElement("div");
	elementoCarrito.innerHTML = `
    <h3>${nombreProducto}</h3>
    <p>${precioProducto}</p>
    <button class="eliminarProducto">Eliminar</button>
  `;

	// Añade el elemento al carrito
	carrito.appendChild(elementoCarrito);

	// Evento click para eliminar producto
	const botonEliminar = elementoCarrito.querySelector(".eliminarProducto");
	botonEliminar.addEventListener("click", () => {
		carrito.removeChild(elementoCarrito);
	});
});
