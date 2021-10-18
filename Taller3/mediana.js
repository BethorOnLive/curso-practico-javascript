function mediana(array){
	let resultado = 0;  
	const longitud = array.length;  //guardando el tamaño del arreglo
	array.sort(function(a, b) {     //funcion para ordenar una array en orden ascendente
  	return a - b;
	});
	if(longitud % 2 === 0){     //condición para validar si el tamaño del arreglo es un numero par
		const mitad = parseInt(longitud/2); 
		const mitadMenosUno =	mitad-1;
		return resultado = (array[mitadMenosUno] + array[mitad])/2;
	}else{
		const mitad = parseInt(longitud/2);
		return array[mitad];
	}
}
mediana([12,2,5,4,9,15,88000]);	




