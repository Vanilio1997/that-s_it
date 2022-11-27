// hover эффект для товаров в корзине

const productsElements = document.querySelectorAll(".product_container")
const inStoksEl = document.querySelectorAll(".product_inStoke")
const deletelikeEl = document.querySelectorAll(".delete_like_btns_container")

function showProductLikeDelete(index){
    inStoksEl[index].classList.remove("hide_element")
    deletelikeEl[index].classList.remove("hide_element")
}

function hideProductLikeDelete(index){
    inStoksEl[index].classList.add("hide_element")
    deletelikeEl[index].classList.add("hide_element")
}


for(let i = 0; i<productsElements.length; i++){
    productsElements[i].addEventListener("mouseenter", showProductLikeDelete.bind(null , i))
    productsElements[i].addEventListener("mouseleave", hideProductLikeDelete.bind(null ,i))
}


// hover эффект для отсутсвующих товаров на складе

const notAvailableProductsElements = document.querySelectorAll(".notAvailable_product_container")
const notAbailableDeleteLikeEl = document.querySelectorAll(".notAbailable_container_logos")


function showAvailableProductLikeDelete(index){
    notAbailableDeleteLikeEl[index].classList.remove("hide_element")
}
function hideAvailableProductLikeDelete(index){
    notAbailableDeleteLikeEl[index].classList.add("hide_element")
}

for(let i = 0; i<notAvailableProductsElements.length; i++){
    notAvailableProductsElements[i].addEventListener("mouseenter", showAvailableProductLikeDelete.bind(null , i))
    notAvailableProductsElements[i].addEventListener("mouseleave", hideAvailableProductLikeDelete.bind(null , i))
}

// Работа с инпутами 

let tag = ""

const nameInput = document.querySelector("#name_input")
const secondNameInput = document.querySelector("#second_name_input")
const emailInput = document.querySelector("#email_input")
const phoneNumberInput = document.querySelector("#phone_number_input")
const indexInput = document.querySelector("#index_input")



const inputsElements = [] 

inputsData.forEach(({id}) => inputsElements.push(id))

for (let i = 0; i< inputsElements.length; i++){
    const element = document.querySelector(`#${inputsElements[i]}`)
    const placeholder = element.getAttribute("placeholder")
    const label = document.querySelector(`[for="${inputsElements[i]}"]`);
    const inputObj = compareId(element.id)
    element.addEventListener("change", (e) => checkInputValue(e.target.value, element ,e.type))
    element.addEventListener('input', (e) => {
        if(e.target.value.length > 0 ){
            label.innerHTML = placeholder
                if(inputObj.isChange){
                    checkInputValue(e.target.value, element, e.type)
                }
        }else{
            label.innerHTML = ''
        } 
    });
}

function compareId(id){
    let currentInput = {}
    inputsData.forEach(inputInfo => {
        if(id === inputInfo.id){
            currentInput = inputInfo
        }
    })
    return currentInput
}


function checkInputValue(inputText, element, eventType){
    console.log(eventType);
    let inputObj = compareId(element.id)
    const chekResult = inputObj.regex.test(inputText);
    let div = document.createElement("div");
    div.className = "inputs_warning_text";
    div.innerHTML = inputObj.warningText;
    if(chekResult){
        element.classList.remove("red_warning")
        div.style.backgroundColor = "red";
        element.nextSibling.remove()
        inputObj.isWarning = false
        if(eventType === "change"){
            inputObj.isChange = false
        }
    }else{
        if(!inputObj.isWarning){
            element.classList.add("red_warning")
            element.after(div)
            inputObj.isWarning = true
            if(eventType === "change"){
                inputObj.isChange = true
            }
        }
    }

}


