
const productos = [

    {
        nombre: "Perro blanco después de peluquería",
        raza: "Maltés",
        imagen: "IMG/galeria1.jpg",
        descripcion: "Un nuevo look"
    },

    {
        nombre: "Perro husky feliz",
        raza: "Husky",
        imagen: "IMG/galeria2.jpg",
        descripcion: "Bienestar y cuidado"
    },

    {
        nombre: "Perro arreglado",
        raza: "Yorkshire",
        imagen: "IMG/galeria3.jpg",
        descripcion: "Peluquería canina"
    },

    {
        nombre: "Golden retriever",
        raza: "Golden Retriever",
        imagen: "IMG/galeria4.jpg",
        descripcion: "Amigos felices"
    },

    {
        nombre: "Perro durante un baño",
        raza: "Beagle",
        imagen: "IMG/bano-basico.jpg",
        descripcion: "Un baño especial"
    },

    {
        nombre: "Perro después de su baño",
        raza: "Pequeño mestizo",
        imagen: "IMG/bano-premium.jpg",
        descripcion: "Cuidado premium"
    }

];


const galeria = document.getElementById("galeria");

productos.forEach(producto => {

    galeria.innerHTML += `
        <figure>
            <img src="${producto.imagen}" alt="${producto.nombre}">

            <figcaption>
                <h3>${producto.descripcion}</h3>
                <p>${producto.raza}</p>
            </figcaption>
        </figure>
    `;

});
