import { Task, Category } from "./types/types"
import { render } from "./helpers/render_tasks_helper.js"
import { renderCategories } from "./helpers/render_categories_helper.js"

const buttonElement: HTMLButtonElement = document.querySelector('#buttonAdd')
const inputElement: HTMLInputElement = document.querySelector('#inputTask')
const tasksContainerElement: HTMLElement = document.querySelector('.tasks')
const ulCategoriesElements: HTMLElement = document.querySelector('.categories')

let selectedCategory: Category;

const categories: Category[] = ["general", "work", "gym", "hobby"];
// demo tasks
const tasks: Task [] = [{
        name:"Wyrzucić śmieci", 
        done: false,
        category: "general",
    }, 
    {
        name: "Pójść na siłke", 
        done: true,
        category: "gym",
    }, 
    {
        name: "Nakarmić koty",
        done: false,
        category: "hobby",
    }
];

const addTask = (task: Task) => {
    task.name && tasks.push(task);
              render(tasks, tasksContainerElement, removeTask);
              inputElement.value = ""; 
};
const removeTask = (index: number, e:Event) => {
    e.preventDefault()
    tasks.splice(index, 1);
    render(tasks, tasksContainerElement, removeTask);
};

const updateSelectedCategory = (newCategory: Category) => {
    selectedCategory = newCategory; 
};  

renderCategories(categories, updateSelectedCategory, ulCategoriesElements )
render(tasks, tasksContainerElement, removeTask);

buttonElement.addEventListener("click" , (e: Event)=>{
    e.preventDefault()
    addTask({name: inputElement.value, done: false, category: selectedCategory })
});


