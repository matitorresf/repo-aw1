let tasks = [];
let task_id = 0
const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");


function addTask() {
    const taskName = document.getElementById("taskName").value;
    const taskDescription = document.getElementById("taskDescription").value;
    const limitDate = document.getElementById("limitDate").value;

    if (!taskName) {
        alert("El nombre de la tarea es obligatorio.");
        return;
    }

    if (!limitDate) {
        alert("La fecha limite es obligatoria.");
        return;
    }
     
    task_id++;

    tasks.push({
        name: taskName,
        description: taskDescription,
        date: limitDate,
        state: true,
        id: task_id

    });


    displayTasks();


    taskForm.reset();
}


function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task) => {
        if (task.state) {
            const taskCard = document.createElement("div");
            taskCard.className = "task-card";
            taskCard.innerHTML = `
                <h3>${task.name}</h3>
                <p>Fecha Limite: ${task.date}</p>
                <p>Descripción: ${task.description || "N/A"}</p>
                <button onclick="deleteTask(${task.id})">Finalizada</button>
            `;
            taskList.appendChild(taskCard);
        }
    });
}


function deleteTask(taskId) {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
        tasks[taskIndex].state = !tasks[taskIndex].state;
        displayTasks();
    }
}


document.getElementById("addTask").addEventListener("click", addTask);
