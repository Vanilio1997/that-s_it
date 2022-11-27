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

// let checkName =  !(/[^а-я]/gi.test(tag)) 

const nameInput = document.querySelector("#name_input")
const secondNameInput = document.querySelector("#second_name_input")
const emailInput = document.querySelector("#email_input")
const phoneNumberInput = document.querySelector("#phone_number_input")
const indexInput = document.querySelector("#index_input")


nameInput.addEventListener('input', (e) => {
 
});

const inputsElements = [] 

inputsData.forEach(({id}) => inputsElements.push(id))

for (let i = 0; i< inputsElements.length; i++){
    const element = document.querySelector(`#${inputsElements[i]}`)
    const placeholder = element.getAttribute("placeholder")
    const label = document.querySelector(`[for="${inputsElements[i]}"]`);
    element.addEventListener('input', (e) => {
        if(e.target.value.length > 0 ){
            label.innerHTML = placeholder
        }else{
            label.innerHTML = ''
        } 
    });
}

function checkName(name){
    const chekResult = !(/[^а-я]/gi.test(name))
    if(chekResult){
        nameInput.classList.remove("red_warning")
    }else{
        nameInput.classList.add("red_warning")
        let div = document.createElement("div");
        div.className = "inputs_warning_text";
        div.innerHTML = "Укажите имя";
        nameInput.after(div)
    }
}

function checkSecondName(name){
    const chekResult = !(/[^а-я]/gi.test(name))
    if(chekResult){
        secondNameInput.classList.remove("red_warning")
    }else{
        secondNameInput.classList.add("red_warning")
        let div = document.createElement("div");
        div.className = "inputs_warning_text";
        div.innerHTML = "Укажите фамилию";
        secondNameInput.after(div)
    }
}

function checkEmail(email){
   const chekResult = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)  
   if(chekResult){
        emailInput.classList.remove("red_warning")
    }else{
        emailInput.classList.add("red_warning")
        let div = document.createElement("div");
        div.className = "inputs_warning_text";
        div.innerHTML = "Проверьте адрес электронной почты";
        emailInput.after(div)
}
}
function checkPhoneNumber(number){
    const chekResult = /((\+7|7|8)+([0-9]){10})$/.test(number);
    if(chekResult){
        phoneNumberInput.classList.remove("red_warning")
    }else{
        phoneNumberInput.classList.add("red_warning")
        let div = document.createElement("div");
        div.className = "inputs_warning_text";
        div.innerHTML = "Формат: +9 999 999 99 99";
        phoneNumberInput.after(div)
    }
}

function checkIndex(index){
    const chekResult = /^[0-9]{10}$/.test(index);
    
    if(chekResult){
        indexInput.classList.remove("red_warning")
    }else{
        indexInput.classList.add("red_warning")
        let div = document.createElement("div");
        div.className = "inputs_warning_text";
        div.innerHTML = "Формат: 1234567";
        indexInput.after(div)
    }
}


nameInput.addEventListener("change", (e) => checkName(e.target.value))
secondNameInput.addEventListener("change", (e) => checkSecondName(e.target.value))
emailInput.addEventListener("change" , (e)=> checkEmail(e.target.value))
phoneNumberInput.addEventListener("change", (e)=> checkPhoneNumber(e.target.value))
indexInput.addEventListener("change", (e)=> checkIndex(e.target.value))

data[1].plus()