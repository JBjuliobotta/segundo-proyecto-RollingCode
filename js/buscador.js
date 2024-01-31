import { ocultarFavoritos } from "./favoritos.js";
import { mostrarCardsProductos } from "./hellpers.js";

let inputBusqueda = document.getElementById("busqueda");
let inputBuscado = document.getElementById("search-btn");


inputBusqueda.addEventListener("click", () => {
    filtrarProductos();
});


function filtrarProductos() {
    let arrayProductos = JSON.parse(localStorage.getItem("productos")) || [];
    let categoriasFiltradas = [];
    if (inputBuscado.value.trim() === "") {
        // si la busqueda esta vacia, mostrar todos los productos
        categoriasFiltradas = arrayProductos;
        console.log(categoriasFiltradas);
    } else {
        // filtrado por categorias
        categoriasFiltradas = arrayProductos.filter(producto => {
            return producto.categoria.toLowerCase().includes(inputBuscado.value.toLowerCase());
        });
    }

    mostrarCardsProductos(categoriasFiltradas);
    ocultarFavoritos();
}

if (inputBuscado.value === "") {
    mostrarCardsProductos(JSON.parse(localStorage.getItem("productos")) || []);
    ocultarFavoritos();
}
