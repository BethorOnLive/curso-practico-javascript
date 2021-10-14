//Calcular descuentos de productos
function descuentos(precioFull,porcentajeDesc){
    const precioConDescuento = precioFull - ((porcentajeDesc * precioFull)/100);
    return precioConDescuento;
}
document.getElementById("InputPrecioFull").addEventListener("input", calcularDescuento);
document.getElementById("InputDescuento").addEventListener("input", calcularDescuento);
function calcularDescuento(){
    const precioFull = parseInt(document.getElementById("InputPrecioFull").value);
    const porcentajeDesc = parseInt(document.getElementById("InputDescuento").value);
    const precioFinal = descuentos(precioFull,porcentajeDesc);
    const imprimeResultado = document.getElementById("resultado");
    imprimeResultado.innerText = "$" + precioFinal; 
}
