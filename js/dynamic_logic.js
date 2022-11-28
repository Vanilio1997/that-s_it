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


// Добавление и удаление товаров 

const plusButtons = document.querySelectorAll(".plus_btn")
const minusButtons = document.querySelectorAll(".minus_btn")


function plusProduct(id){
    data.forEach(product => {
        if(product.plus_id === id){
            console.log(product);
            product.plus()
            document.querySelector(`#${product.weHaveId}`).innerHTML = product.weHave
            document.querySelector(`#${product.inStokeId}`).innerHTML = `осталось ${product.inStoke} шт.`
            showPrice()
        }
    })
}

function minusProduct(id){
    data.forEach(product => {
        if(product.minus_id === id){
            product.minus()

            console.log(product.inStoke);
            document.querySelector(`#${product.weHaveId}`).innerHTML = product.weHave
            document.querySelector(`#${product.inStokeId}`).innerHTML = `осталось ${product.inStoke} шт.`
            showPrice()
        }
    })
}

plusButtons.forEach(e => {
    let plus =  document.querySelector(`#${e.id}`)
    plus.addEventListener("click" , () => plusProduct(e.id))
})

minusButtons.forEach(e => {
    let minus =  document.querySelector(`#${e.id}`)
    minus.addEventListener("click" , () => minusProduct(e.id))
})

const fullPrice = document.querySelector("#full_price")
const discountPrice = document.querySelector("#discount_price")
const discount = document.querySelector("#discount")


function showPrice(){
    let fullPriceValue = 0
    let discountPriceValue = 0
    let discountValue = 0
    discount.innerHTML =''
    discountPrice.innerHTML =''
    fullPrice.innerHTML = ''
    data.forEach((product) => {
        if(product.weHave){
            fullPriceValue += product.price * product.weHave
            discountPriceValue += product.discountPrice * product.weHave
            discountValue  -= product.price  * product.weHave  - product.discountPrice * product.weHave
        }
    })
    fullPrice.innerHTML = `${fullPriceValue} сом` 
    discountPrice.innerHTML = `${discountPriceValue} сом`
    discount.innerHTML = `${discountValue} сом`
}
showPrice()

// Скрытие элементов из корзины

let isShow = true
const showBtn  = document.querySelector("#show_products")
const hideBtn  = document.querySelector("#hide_products")
const hiddenProductsInfo = document.querySelector("#hidden_products_info")

const showingProductsElelemnts = document.querySelectorAll(".show_products_elements");




function hideProducts(){
    showingProductsElelemnts.forEach(element =>{
        element.classList.add("hide_element")
    })
    showBtn.classList.add("show_element")
    let prodcutsQuanity = 0
    let price = 0

    data.forEach(({weHave , discountPrice})=>{
        if(weHave){
            prodcutsQuanity += weHave
            price += weHave * discountPrice
        }
    })
    hiddenProductsInfo.innerHTML  = `${prodcutsQuanity} товаров · ${price} сом`
}

function showProducts(){
    showingProductsElelemnts.forEach(element =>{
        element.classList.remove("hide_element")
    })
    showBtn.classList.remove("show_element")
    hiddenProductsInfo.innerHTML = ''
}

showBtn.addEventListener('click' ,showProducts)
hideBtn.addEventListener('click' ,hideProducts)

// Скрытие  отсутсвующих товаров 

const notAvailableProductsList = document.querySelector(".not_available_list_container")
const hideNotAvailableProductsBtn = document.querySelector("#hide_notAvailable_products")
const showNotAvailableProductsBtn = document.querySelector("#show_notAvailable_products")

function hideNotAvailableProducts(){
    notAvailableProductsList.classList.add("hide_element")
    hideNotAvailableProductsBtn.classList.add("hide_element")
    showNotAvailableProductsBtn.classList.remove("hide_element")
}

function showNotAvailableProducts(){
    notAvailableProductsList.classList.remove("hide_element")
    hideNotAvailableProductsBtn.classList.remove("hide_element")
    showNotAvailableProductsBtn.classList.add("hide_element")
}

hideNotAvailableProductsBtn.addEventListener('click' , hideNotAvailableProducts)
showNotAvailableProductsBtn.addEventListener('click' , showNotAvailableProducts)

