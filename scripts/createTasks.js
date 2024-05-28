export { taskAdd }
export { cleanseImputs }
import { renderAll } from "./renderAll.js";
import { taskList } from "./tasks.js";

const inputTask = document.getElementById("taskInput")

let btn_create = document.getElementById("btn_create");
btn_create.addEventListener("click", () => {
    taskAdd();
});

inputTask.addEventListener("keyup", (event) => {
    if(event.key === "Enter"){
        taskAdd();
    }
});

function taskAdd() {
    taskPush()
    cleanseImputs()
    renderAll()

}
function taskPush() {
    let inputTaskValue = (document.getElementById("taskInput").value);
    if (inputTaskValue != "") {
        taskList.push({
            id: ((taskList.length) + 1),
            name: inputTaskValue
        });

    } else {
        alert("Debe introducir algun caracter en el input de tareas. ")
    }
    cleanseImputs
}
function cleanseImputs() {
    inputTask.value = "";

}