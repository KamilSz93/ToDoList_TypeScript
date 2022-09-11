import { Task } from "../types/types";

export const render = ( tasks: Task[], 
                        tasksContainerElement: HTMLElement,
                        removeTask: (index: number, e:Event) => void 
                      ) => {
    tasksContainerElement.innerHTML = "";

    tasks.forEach((task, index)=>{
        const id: string = `task-${index}`;

        const liElement: HTMLLIElement = document.createElement('li');
        liElement.classList.add(`${id}`)

        task.category && liElement.classList.add(task.category);
        
        const labelElement: HTMLLabelElement = document.createElement('label')
        labelElement.setAttribute("for", id);
        labelElement.innerText = task.name;

        const inputElement: HTMLInputElement = document.createElement('input')
        inputElement.setAttribute('type', "checkbox")
        inputElement.setAttribute("id", `${id}`)
        inputElement.setAttribute("name", `${task.name}`)
        inputElement.checked = task.done;
        inputElement.addEventListener("change", ()=>{
             task.done = !task.done
             task.done ? labelElement.classList.add("doneTask")
                      : labelElement.classList.remove("doneTask")
        })

        const removeButton = document.createElement('button');
        removeButton.classList.add("removeButton")
        removeButton.innerText = "X"
        removeButton.addEventListener("click", (e)=> removeTask(index, e))

        const categoryInfo = document.createElement("span")
        categoryInfo.innerText = `${task.category?.toUpperCase() || ""}`

        liElement.appendChild(labelElement)
        liElement.appendChild(inputElement)
        liElement.appendChild(categoryInfo)
        liElement.appendChild(removeButton)

        tasksContainerElement.appendChild(liElement);
    })
}