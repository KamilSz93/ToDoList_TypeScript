import {Category} from "../types/types"

export const renderCategories = (categories: Category[], 
                                 inputChangeCallback: (el: Category) => void,
                                 ulCategoriesElements: HTMLElement,
) => {
    categories.forEach(
        (el)=>{
            const liCategoryElement = document.createElement("li")

            const labelCateghoryElemnt = document.createElement("label")
            labelCateghoryElemnt.setAttribute("for", `category-${el}` )  
            labelCateghoryElemnt.innerHTML = el.toUpperCase();

            const radioCategoryElement = document.createElement("input")
            radioCategoryElement.type = "radio";
            radioCategoryElement.id = `category-${el}`
            radioCategoryElement.value = el;
            radioCategoryElement.name = "category"
            radioCategoryElement.addEventListener('change', ()=>{
                inputChangeCallback(el);
            })
           
            liCategoryElement.appendChild(labelCateghoryElemnt)
            liCategoryElement.appendChild(radioCategoryElement)
            
            ulCategoriesElements.appendChild(liCategoryElement)
        }
    )
}
