function calcularModa(lista){
//const lista  = [1, 2, 2, 3, 4, 14, 5, 1, 2, 3, 5, 5, 5, 5];
const listaCount = {};  //creamos un objeto vacio

lista.map(function(elemento){   //utlizamos el metodo map para recorrer el array
  if (listaCount[elemento]) {   //la condicional valida si ya hay un elemento repetido
    listaCount[elemento] = listaCount[elemento] + 1;  //acumula el numero de veces que se repite el elemento en el array
  }else{
    listaCount[elemento] = 1;   //si el elemento no se ha repetido entonces asignarle el valor de 1
  }
})
//Ahora convertimos el objeto que llenamos previaamente en una matriz/array de arrays y para eso utilizamos el metodo
//Object.entries. y la ordenamos con sort.
const matrizOrdenanda = Object.entries(listaCount).sort(function(elementoA,elementoB){
    return elementoA[1] - elementoB[1]; //bucamos en la posicion [1] ya que ahí es donde esta guardada la cantidad
    //de veces que el elemento se ha repetido
})
const ultimaPosicion =  matrizOrdenanda.length - 1;
const moda = matrizOrdenanda[ultimaPosicion];
return moda;
}