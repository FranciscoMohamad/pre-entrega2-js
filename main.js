//Damos la Bienvenida al usuario.

alert("Bienvenido a nuestro Ecommerce")

//Generamos las categorias a filtrar del array.

const category1 = "electronics";
const category2 = "jewelery"

// Filtramos la categoria jewelery y electronics. Mostramos mediante un alert las mismas.

function filtrador(array, category1, category2) {
    return array.filter(producto => producto.category === category1 || producto.category === category2)
}

alert(`Actualmente trabajamos con la siguiente linea de productos:
    1) Ropa de hombres
    2) Electrónica`)

//mediante un map extraemos los titulos del array.

let productos = filtrador(products, category1, category2)
const titles = productos.map(producto => producto.title)

//Ordenamos los titulos de A a Z y con sus respectivos numeros.

function ordenarArray(array) {

    let producto = "";
    array.sort();

    for (let i = 0; i < array.length; i++) {
        producto += (i + 1) + ") " + array[i];
        
        if (i < array.length - 1) {
            producto += "\n";
        }
    }

    return producto;
}

let listaProductos = ordenarArray(titles);


let productoUsuario = parseInt(prompt(`Seleccione el número del producto que desee adquirir:
  ${listaProductos}`));

  if (isNaN(productoUsuario)) {
    alert("Gracias por su visita!");
} else {
    while (productoUsuario < 1 || productoUsuario > 10) {
        productoUsuario = prompt(`Ingrese el número de los productos disponibles:
        ${listaProductos}`)
    }

    let compraUsuario;

    do {
    // Obtenemos el nombre del producto seleccionado
    const nombreElegido =titles[productoUsuario - 1];
    
    compraUsuario = productos.find(producto => producto.title == nombreElegido);
    
    if (compraUsuario) {
        const infoProducto = 
        `Nombre: ${compraUsuario.title}
         Descripción: ${compraUsuario.description}
         Precio: $${compraUsuario.price}`;

        // Mediante un confirm mostramos la informacion del producto

        const confirmarCompra = confirm(`Información del producto:
        ${infoProducto}
        Confirmar compra?`);

        //Configuramos la fecha actual y le damos 4 dias de demora a la entrega

        if (confirmarCompra) {
            const diaActual = new Date();
            const diaEntrega = new Date(diaActual);
            diaEntrega.setDate(diaEntrega.getDate() + 4);
            alert(`Su producto tiene una demora de 4 dias APROXIMADAMENTE.
            Fecha de entrega: ${diaEntrega}
            Muchas Gracias por su compra!`);
        } else {
            alert("Gracias por la visita!");
        }
        }
    } while (!compraUsuario);
}