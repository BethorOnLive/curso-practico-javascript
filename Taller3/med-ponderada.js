const tareas = 0.1;
const proyecto = 0.2;
const examen = 0.7;

document.getElementById("InputTarea").addEventListener("input", calcularMediaPonderada);
document.getElementById("InputProyecto").addEventListener("input", calcularMediaPonderada);
document.getElementById("InputExamen").addEventListener("input", calcularMediaPonderada);


function calcularMediaPonderada(){
    const resulTarea = document.getElementById("InputTarea").value;
    const resulProyecto = document.getElementById("InputProyecto").value;
    const resulExamen = document.getElementById("InputExamen").value;

    const mediaPonderada = (resulTarea * tareas) + (resulProyecto * proyecto) + (resulExamen * examen);
    const imprimir = document.getElementById("resultado");
    imprimir.innerText = mediaPonderada; 
}

