export {borradoBoton}
export {eraseAll}
import {renderAll} from "./renderAll.js";
import {taskList} from "./tasks.js";

// Function de borrado de todas las tareas (lista)

function eraseAll(){
    const todas = document.getElementById("taskList");
    while(todas.firstChild){
        todas.removeChild(todas.firstChild);
    }
}

//Function de borrado de todas las tareas (Objeto)
function eraseTasks(){
    console.log(taskList.length)
    for (let j=taskList.length; j>=0; j--){
        taskList.splice(j,1);
    }
    renderAll();
}

function borradoBoton(){
    let btn_borrar = document.getElementById("btn_cleanse");
    btn_borrar.addEventListener("click", eraseTasks);
}
