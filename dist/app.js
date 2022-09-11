import { render } from "./helpers/render_tasks_helper.js";
import { renderCategories } from "./helpers/render_categories_helper.js";
const buttonElement = document.querySelector('#buttonAdd');
const inputElement = document.querySelector('#inputTask');
const tasksContainerElement = document.querySelector('.tasks');
const ulCategoriesElements = document.querySelector('.categories');
let selectedCategory;
const categories = ["general", "work", "gym", "hobby"];
// demo tasks
const tasks = [{
        name: "Wyrzucić śmieci",
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
const addTask = (task) => {
    task.name && tasks.push(task);
    render(tasks, tasksContainerElement, removeTask);
    inputElement.value = "";
};
const removeTask = (index, e) => {
    e.preventDefault();
    tasks.splice(index, 1);
    render(tasks, tasksContainerElement, removeTask);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
renderCategories(categories, updateSelectedCategory, ulCategoriesElements);
render(tasks, tasksContainerElement, removeTask);
buttonElement.addEventListener("click", (e) => {
    e.preventDefault();
    addTask({ name: inputElement.value, done: false, category: selectedCategory });
});
