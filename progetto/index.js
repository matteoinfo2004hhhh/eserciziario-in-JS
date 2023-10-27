function aggiungiAttivita() {
    var task = document.getElementById("task").value;
    if (task === "") {
        return;
    }

    var taskList = document.getElementById("task-list");
    var taskItem = document.createElement("div");
    taskItem.className = "task-item";

    var taskText = document.createElement("span");
    taskText.textContent = task;

    var completato = document.createElement("input");
    completato.type = "checkbox";
    completato.onclick = function() {
        if (completato.checked) {
            taskText.classList.add("completed");
        } else {
            taskText.classList.remove("completed");
        }
    };

    var elimina = document.createElement("button");
    elimina.textContent = "Elimina";
    elimina.onclick = function() {
        taskItem.remove();
    };

    taskItem.appendChild(taskText);
    taskItem.appendChild(completato);
    taskItem.appendChild(elimina);

    taskList.appendChild(taskItem);
    document.getElementById("task").value = "";
}
