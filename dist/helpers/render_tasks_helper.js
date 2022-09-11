export const render = (tasks, tasksContainerElement, removeTask) => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach((task, index) => {
        var _a;
        const id = `task-${index}`;
        const liElement = document.createElement('li');
        liElement.classList.add(`${id}`);
        task.category && liElement.classList.add(task.category);
        const labelElement = document.createElement('label');
        labelElement.setAttribute("for", id);
        labelElement.innerText = task.name;
        const inputElement = document.createElement('input');
        inputElement.setAttribute('type', "checkbox");
        inputElement.setAttribute("id", `${id}`);
        inputElement.setAttribute("name", `${task.name}`);
        inputElement.checked = task.done;
        inputElement.addEventListener("change", () => {
            task.done = !task.done;
            task.done ? labelElement.classList.add("doneTask")
                : labelElement.classList.remove("doneTask");
        });
        const removeButton = document.createElement('button');
        removeButton.classList.add("removeButton");
        removeButton.innerText = "X";
        removeButton.addEventListener("click", (e) => removeTask(index, e));
        const categoryInfo = document.createElement("span");
        categoryInfo.innerText = `${((_a = task.category) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || ""}`;
        liElement.appendChild(labelElement);
        liElement.appendChild(inputElement);
        liElement.appendChild(categoryInfo);
        liElement.appendChild(removeButton);
        tasksContainerElement.appendChild(liElement);
    });
};
