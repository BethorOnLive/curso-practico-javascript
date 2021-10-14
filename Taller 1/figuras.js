// Calculo del cuadrado
console.group("Cuadrado")
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");
function perimetroCuadrado(ladoCuadrado){
    return ladoCuadrado * 4;
}
//const perimetroCuadrado = 
//console.log("El perimetro es : " + perimetroCuadrado + "cm");;

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log("El area es : " + areaCuadrado + "cm^2");
function areaCuadrado(ladoCuadrado){
    return ladoCuadrado * ladoCuadrado;
}
console.groupEnd();

// Calculo del triangulo
console.group("Triangulo");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;

//console.log("Altura del triangulo: " + alturaTriangulo + "cm");

//console.log(`Lado triangulo 1: ${ladoTriangulo1}cm, Lado triangulo 2: ${ladoTriangulo2}cm,
//Base del trinagulo: ${baseTriangulo}cm`);

//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}
//console.log("Perimetro del triangulo: " + perimetroTriangulo + "cm");

//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
function areaTriangulo(base,altura){
    return (base * altura) / 2;
}
//console.log("Area del triangulo: " + areaTriangulo + "cm^2");
console.groupEnd();

//Calculo del circulo+
console.group("Circulo");
//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + "cm");
//const diametroCirculo = radioCirculo * 2;
function diametroCirculo(radioCirculo){
    return radioCirculo * 2;
}
//console.log("El dimetro es: " + diametroCirculo + "cm");
const pi = Math.PI;
//console.log("El valor de PI: " + pi);
//const perimetroCirculo = diametroCirculo * pi;
function perimetroCirculo(radioCirculo){
    const diametro = diametroCirculo(radioCirculo);
    return diametro * pi;
}
//console.log("El perimetro del circulo: " + perimetroCirculo + "cm");
//const areaCirculo = pi * (radioCirculo * radioCirculo);
function areaCirculo(radioCirculo){
    return pi * (radioCirculo * radioCirculo);
}
//console.log("El area del circulo: " + areaCirculo + "cm");
console.groupEnd();

//Calculando perimetro del cuadrado
document.getElementById("button__content--uno").addEventListener("click", calcularPerimetroCuadrado);

function calcularPerimetroCuadrado(){
    let ladoCuadrado = document.getElementById("InputCuadrado").value;     
    let perimetro = perimetroCuadrado(ladoCuadrado); //guardamos el resultado de ejecutar la función perimetroCuadrado
    //y al mismo tiempo le pasamos el argumento ladoCuadrado recuperado del input a nuestra funcion previa perimetroCuadrado
    alert("El perimetro es igual a: " + perimetro);
}
//Calculando el area del cuadrado
document.getElementById("button__content--dos").addEventListener("click", calcularAreaCuadrado);

function calcularAreaCuadrado(){
    let ladoCuadrado = document.getElementById("InputCuadrado").value;     
    let area = areaCuadrado(ladoCuadrado);
    alert("El área es igual a: " + area);
}

//Calculando el perimetro del triangulo
document.getElementById("button__content__dos--uno").addEventListener("click", calcularPerimetroTriangulo);
function calcularPerimetroTriangulo(){
    const lado1 = parseInt(document.getElementById("ladoUnoTriangulo").value);  //parseInt
    const lado2 = parseInt(document.getElementById("ladoDosTriangulo").value);  //parseInt
    const base = parseInt(document.getElementById("InputBaseTriangulo").value); //parseInt
    const perimetro =  perimetroTriangulo(lado1,lado2,base);
    alert("El perimetro es igual a: " + perimetro);
}/*

Recuerden que todo lo que entra en un formulario es tipo string, el input type=“number” 
lo que hace es que solamente reciba caracteres tipo número. 
Pero no significa que lo que entra JS lo tome como Number en las funciones.
Para ello se debe hacer coerción  */   
//document.getElementById("ladoDosTriangulo")

//Calculando area del triangulo
document.getElementById("button__content__dos--dos").addEventListener("click", calcularAreaTriangulo);
function calcularAreaTriangulo(){
    const base = parseInt(document.getElementById("InputBaseTriangulo").value); //parseInt
    const altura = parseInt(document.getElementById("InputAlturaTriangulo").value);
    const area = areaTriangulo(base,altura);
    alert("El área es igual a: " + area);
}

//Calcular la circunferencia de un circulo
document.getElementById("button__content__tres--uno").addEventListener("click", calcularCircunferencia);
function calcularCircunferencia(){
    const radio = parseInt(document.getElementById("InputCirculo").value);
    const circunferencia = perimetroCirculo(radio);
    alert("La circunferencia es igual a: " + circunferencia);
}
//Calcuñar el area de un circulo
document.getElementById("button__content__tres--dos").addEventListener("click", calcularAreaCirculo);
function calcularAreaCirculo(){
    const radioCirculo = parseInt(document.getElementById("InputCirculo").value);
    const area = areaCirculo(radioCirculo);
    alert("El área es igual a: " + area);
}
//Calcular altura de un triangulo isisceles
function calcularAltura(a,b){
    return Math.sqrt((a*a)-((b*b)/4));
}
document.getElementById("button__content__cuatro--uno").addEventListener("click", calcularAlturaIsosceles);
function calcularAlturaIsosceles(){
    const lados = parseInt(document.getElementById("ladosIsosceles").value);
    const base = parseInt(document.getElementById("BaseIsosceles").value);
    const altura = calcularAltura(lados,base);
    alert("La altura es igual a: " + altura);
}
