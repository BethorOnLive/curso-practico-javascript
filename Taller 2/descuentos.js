
//Calcular descuentos de productos
function descuentos(precioFull,porcentajeDesc){
    const precioConDescuento = precioFull - ((porcentajeDesc * precioFull)/100);
    return precioConDescuento;
}
document.getElementById("InputPrecioFull").addEventListener("input", calcularDescuento);
document.getElementById("InputDescuento").addEventListener("input", calcularDescuento);
function calcularDescuento(){
    const precioFull = document.getElementById("InputPrecioFull").value;
    const porcentajeDesc = document.getElementById("InputDescuento").value;
    const precioFinal = descuentos(precioFull,porcentajeDesc);
    const imprimeResultado = document.getElementById("resultado");
    imprimeResultado.innerText = "$" + precioFinal; 
}
//Calcular descuentos de cupones
const cupones = [   //Creando array de objetos con atributos y valores en el mismo sitio
    {codigo: "LOG95", descuento: 20},
    {codigo: "LOG96", descuento: 30},
    {codigo: "LOG97", descuento: 40},
]//Escuchando a mi boton aplicar, para que cuando ocurra el evento click se ejecute mi funcion calcular descuento cupon
document.getElementById("BotonAplicar").addEventListener("click", calcularDescuentoCupon);
function calcularDescuentoCupon(){  //Apertura de la función
    //Recupero el valor que el usuario ingresó en el campo precio y lo convierto en entero, y lo guardo en una variable
    const precioFull = parseInt(document.getElementById("InputPrecioNormal").value); 
    //Recupero el codigo del cupon que ingresó el usuario y lo guardo en una variable
    const cuponIngresado = document.getElementById("InputCupon").value;
    //Guardo en una variable el resultado de una función anonima
    const cuponValido = function(cupon){    //le paso como argumento un index que llamaré cupon
        return cupon.codigo === cuponIngresado; // Buscar un objeto(codigo) en un array por una de sus propiedades
    }   // y comparando que sea estrictamente igual a lo que el usuario ingreso como su cupon de descuento
    const buscaCupon = cupones.find(cuponValido);   //Ejecuta la busqueda y guardando el resultado en una variable
    if(!buscaCupon){    //Si el resultado es distinto a lo que se busca
        const imprimeError = document.getElementById("resultado-cupon");
            imprimeError.className = "error";
            imprimeError.innerText = "Cupón invalido"; 	//Imprimir el mensaje en el parrafo con el id "resultado-cupon"
    }
    else{ // Si el resultado no es diferente al esperado 
        const porcentajeDesc= buscaCupon.descuento;
        const precioFinal = descuentos(precioFull,porcentajeDesc);
        const imprimeResultado = document.getElementById("resultado-cupon");
        imprimeResultado.className = "item-dos--parrafo";
        imprimeResultado.innerText = "$" + precioFinal; 
    }
}
