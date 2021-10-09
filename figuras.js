// Calculo del cuadrado
console.group("Cuadrado")
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro es : " + perimetroCuadrado + "cm");;

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area es : " + areaCuadrado + "cm^2");
console.groupEnd();

// Calculo del triangulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log("Altura del triangulo: " + alturaTriangulo + "cm");

console.log(`Lado triangulo 1: ${ladoTriangulo1}cm, Lado triangulo 2: ${ladoTriangulo2}cm,
Base del trinagulo: ${baseTriangulo}cm`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("Perimetro del triangulo: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("Area del triangulo: " + areaTriangulo + "cm^2");
console.groupEnd();

//Calculo del circulo+
console.group("Circulo");
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");
const diametroCirculo = radioCirculo * 2;
console.log("El dimetro es: " + diametroCirculo + "cm");
const pi = Math.PI;
console.log("El valor de PI: " + pi);
const perimetroCirculo = diametroCirculo * pi;
console.log("El perimetro del circulo: " + perimetroCirculo + "cm");
const areaCirculo = pi * (radioCirculo * radioCirculo);
console.log("El area del circulo: " + areaCirculo + "cm");
console.groupEnd();