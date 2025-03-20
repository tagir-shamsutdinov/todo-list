document.addEventListener("DOMContentLoaded", () => {
    const addTaskBtn = document.getElementById("addTask");
    const taskTextInput = document.getElementById("taskText");
    const backlog = document.getElementById("backlog");
    const inProgress = document.getElementById("inProgress");
    const done = document.getElementById("done");
    const trash = document.getElementById("trash");
    const clearTrashBtn = document.getElementById("clearTrash");

    function createTaskElement(text) {
        const task = document.createElement("div");
        task.classList.add("task");
        task.textContent = text;

        task.draggable = true;
        task.addEventListener("dragstart", (event) => {
            event.dataTransfer.setData("text", event.target.textContent);
            event.target.classList.add("dragging");
        });

        task.addEventListener("dragend", (event) => {
            event.target.classList.remove("dragging");
        });

        return task;
    }

    addTaskBtn.addEventListener("click", () => {
        if (taskTextInput.value.trim() !== "") {
            const task = createTaskElement(taskTextInput.value.trim());
            backlog.appendChild(task);
            taskTextInput.value = "";
        }
    });

    document.querySelectorAll(".task-list").forEach((column) => {
        column.addEventListener("dragover", (event) => {
            event.preventDefault();
        });

        column.addEventListener("drop", (event) => {
            event.preventDefault();
            const taskText = event.dataTransfer.getData("text");
            const task = createTaskElement(taskText);
            column.appendChild(task);
        });
    });

    clearTrashBtn.addEventListener("click", () => {
        trash.innerHTML = "";
    });
});