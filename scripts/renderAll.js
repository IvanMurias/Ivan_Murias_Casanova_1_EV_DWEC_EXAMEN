import { taskList } from "./tasks.js";
import { eraseAll } from "./eraseTasks.js";
import { cleanseImputs } from "./createTasks.js";

export const renderAll = () => {
    eraseAll();
    cleanseImputs();
    taskList.forEach((task) => {
        renderTask(task);
    });
    
}

function renderTask(item) {
    const listContainer = document.getElementById("taskList");
    let li = document.createElement('li');
    let taskLabel = document.createElement('label');
    let btnDelete = document.createElement('button');
    let liContainer = document.createElement('div');

    btnDelete.innerHTML = "X";
    btnDelete.className = "btnDelete";
    liContainer.className = "liDiv";
    taskLabel.textContent = item.name;

    liContainer.appendChild(taskLabel);
    liContainer.appendChild(btnDelete);
    li.appendChild(liContainer)
    listContainer.appendChild(li);
}   