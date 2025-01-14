const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const doneList = document.getElementById('done-list');

addBtn.addEventListener('click', () => {
    if (taskInput.value.trim() !== "") {
        const taskText = taskInput.value.trim();
        const listItem = createTaskItem(taskText, false);
        todoList.appendChild(listItem);
        taskInput.value = "";
    }
});

function createTaskItem(text, isDone) {
    const listItem = document.createElement("li");
    listItem.textContent = text;

    const actionButtons = document.createElement("div");
    actionButtons.classList.add("action-buttons");

    if (!isDone) {
        const checkBtn = document.createElement("button");
        checkBtn.textContent = "✔️";
        checkBtn.classList.add("check-btn");
        checkBtn.addEventListener('click', () => {
            listItem.remove();
            doneList.appendChild(createTaskItem(text, true));
        });
        actionButtons.appendChild(checkBtn);
    } else {
        const crossBtn = document.createElement("button");
        crossBtn.textContent = "❌";
        crossBtn.classList.add("cross-btn");
        crossBtn.addEventListener('click', () => {
            listItem.remove();
            todoList.appendChild(createTaskItem(text, false));
        });
        actionButtons.appendChild(crossBtn);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener('click', () => {
            listItem.remove();
        });
        actionButtons.appendChild(deleteBtn);
    }

    listItem.appendChild(actionButtons);
    return listItem;
}