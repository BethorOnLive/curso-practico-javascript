function miLista(lista1){
    /*const lista1 = [100,200,300,400];
let sumaLista = 0;

for(let i = 0; i < lista1.length; i++){
    sumaLista = lista1[i] + sumaLista;
}*/

const sumaLista = lista1.reduce( //El metodo reduce ayuda a recorrer el array para hacer una operacion
    function(valorAcumulado = 0, nuevoElemento){ //Le asignamos 2 paranetros iniializando en 0 la variable que acumula
        return valorAcumulado + nuevoElemento //el resultado, y una segundo parametro que recibe los valores que van 
    } //saliendo del array
);

const promedioLista = sumaLista / lista1.length;
return promedioLista;
}

