// hover эффект для товаров в корзине

const productsElements = document.querySelectorAll(".product_container")
const inStoksEl = document.querySelectorAll(".product_inStoke")
const deletelikeEl = document.querySelectorAll(".delete_like_btns_container")
const hiddenData = document.querySelectorAll(".hidden_date")

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
const productPictures = document.querySelectorAll(".product_picture_withQuantity")



function changeProductCount(id, symbol){
    data.forEach( product => {
        if (product.minus_id === id || product.mobId.minus_id === id || product.plus_id === id || product.mobId.plus_id === id ){
            if(symbol === "plus"){
                product.plus()
            }else if(symbol === "minus"){
                product.minus()
            }
            document.querySelector(`#${product.weHaveId}`).innerHTML = product.weHave
            document.querySelector(`#${product.inStokeId}`).innerHTML = `осталось ${product.inStoke} шт.`
            document.querySelector(`#${product.mobId.weHaveId}`).innerHTML = product.weHave
            document.querySelector(`#${product.mobId.inStokeId}`).innerHTML = `осталось ${product.inStoke} шт.`
            
        }
            showPrice()
    })
}

//Функция для показа/скрытия/изменения для картинки в блоке "Способ доставки"

function changeProductQuantityInPicture(product){
  
    productPictures.forEach(productPictureNode => {
        console.log(productPictureNode);
        [...productPictureNode.children].forEach(element => {
            if(element.id === product.arrival_logo_id){
                if(product.weHave === 0){
                    productPictureNode.classList.add("hide_element")
                } else if(product.weHave === 1){
                    if(productPictureNode.classList.contains("hide_element")){
                        productPictureNode.classList.remove("hide_element")
                    }
                    element.classList.add("hide_element")
                } else if(product.weHave > 1){
                    if(element.classList.contains("hide_element")){
                        element.classList.remove("hide_element")
                    }
                }
                if(product.isChecked){
                    if(product.weHave){
                    productPictureNode.classList.remove("hide_element")
                    }
                }else{
                    productPictureNode.classList.add("hide_element")
                }
            }
        })
    })

    if(product.weHave > 1){
        document.querySelector(`#${product.arrival_logo_id}`).innerHTML = `<div class="quantity_circle_value">${product.weHave}</div>`
    }
}

const orderHiddeElement = document.querySelectorAll(".order_hidden")

function clearAllNoDate(){
    hiddenData.forEach(element => element.classList.add("hide_element"))
    orderHiddeElement.forEach(element => element.classList.add("hide_element"))
}

function showAllNoDate(){
    hiddenData.forEach(element => element.classList.remove("hide_element"))
    orderHiddeElement.forEach(element => element.classList.remove("hide_element"))
}

plusButtons.forEach(e => {
    let plus =  document.querySelector(`#${e.id}`)
    plus.addEventListener("click" , () => changeProductCount(e.id ,"plus"))
})

minusButtons.forEach(e => {
    let minus =  document.querySelector(`#${e.id}`)
    minus.addEventListener("click" , () => changeProductCount(e.id , "minus"))
})

const fullPrice = document.querySelector("#full_price")
const discountPrice = document.querySelector("#discount_price")
const discount = document.querySelector("#discount")
const productQuantityElement = document.querySelector(".price_quantity_left ")


function showPrice(){
    let fullPriceValue = 0
    let discountPriceValue = 0
    let discountValue = 0
    let productQuantity = 0
    let productName = ''
    data.forEach((product) => {
        if(product.weHave && product.isChecked){
            fullPriceValue += product.price * product.weHave
            discountPriceValue += product.discountPrice * product.weHave
            discountValue  -= product.price  * product.weHave  - product.discountPrice * product.weHave
            productQuantity += product.weHave
        }
        changeProductQuantityInPicture(product)
    })
    if(!fullPriceValue && !discountPriceValue){
        clearAllNoDate()
    }
    if(fullPriceValue || discountPriceValue){
        showAllNoDate()
    }

   if(productQuantity  === 0 | productQuantity > 4){
    productName = "товаров"
   } else if (productQuantity === 1){
    productName = "товар"
   } else {
    productName = "товара"
   }

    fullPriceValue = fullPriceValue.toLocaleString()
    discountPriceValue = discountPriceValue.toLocaleString()
    discountValue = discountValue.toLocaleString()
    fullPrice.innerHTML = `${fullPriceValue} сом` 
    discountPrice.innerHTML = `${discountPriceValue} сом`
    discount.innerHTML = `${discountValue} сом`
    productQuantityElement.innerHTML = `${productQuantity} ${productName}`
}

showPrice()

// Скрытие/показ элементов из корзины

let isShow = true
const showBtn  = document.querySelector("#show_products")
const hideBtn  = document.querySelector("#hide_products")
const hiddenProductsInfo = document.querySelector("#hidden_products_info")

const showingProductsElelemnts = document.querySelectorAll(".show_products_elements");

function hideProducts(){
    showingProductsElelemnts.forEach(element =>{
        element.classList.add("hide_element")
    })
    showBtn.classList.remove("hide_element")
    let prodcutsQuanity = 0
    let price = 0
    let productName = ''
    console.log(data)
    data.forEach(({weHave , discountPrice,isChecked })=>{
        if(weHave && isChecked ){
            prodcutsQuanity += weHave
            price += weHave * discountPrice
        }
    })

    if(prodcutsQuanity  === 0 | prodcutsQuanity > 4){
        productName = "товаров"
       } else if (prodcutsQuanity === 1){
        productName = "товар"
       } else {
        productName = "товара"
       }



    hiddenProductsInfo.innerHTML  = `${prodcutsQuanity} ${productName} · ${price} сом`
}

function showProducts(){
    showingProductsElelemnts.forEach(element =>{
        element.classList.remove("hide_element")
    })
    showBtn.classList.add("hide_element")
    hiddenProductsInfo.innerHTML = ''
}

showBtn.addEventListener('click' ,showProducts)
hideBtn.addEventListener('click' ,hideProducts)

// Скрытие/показ  отсутсвующих товаров 

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

//hover эффекты для различных элементов на странице

//1. hover в котором написано об бесплатном возврате

{
    const leftSideWarningText = document.querySelector("#left_side_hover_warning_element")
    const rightSideWarningText = document.querySelector("#right_side_hover_warning_element")
    const refundWindows =  document.querySelectorAll(".hover_refund_info")

    function showHiddenElement(index){
            if(index === 0){
                refundWindows[index].classList.remove("hide_element")   
            }else{
                refundWindows[index].classList.remove("hide_element")
            }
    }

    function hideHiddenElement(index){
        if(index === 0){
            refundWindows[index].classList.add("hide_element")   
        }else{
            refundWindows[index].classList.add("hide_element")
        }
    }
    
    leftSideWarningText.addEventListener("mouseenter" , showHiddenElement.bind(null , 0))
    leftSideWarningText.addEventListener("mouseleave" , hideHiddenElement.bind(null , 0))
    rightSideWarningText.addEventListener("mouseenter" , showHiddenElement.bind(null , 1))
    rightSideWarningText.addEventListener("mouseleave" , hideHiddenElement.bind(null , 1))
}

//2 hover для элементов в корзине скидки и названия компании

{
    const companiesInfo =  document.querySelectorAll(".more_company_info_btn")
    const discountPricesInfo = document.querySelectorAll(".prodcut_price")

    function showCompanyInfo(id){
        data.forEach(product =>{
            if(product.infoLogoId === id){
                document.querySelector(`#${product.companyInfo.id}`).classList.remove("hide_element")
            }
        })
    }

    function hideCompanyInfo(id){
        data.forEach(product =>{
            if(product.infoLogoId === id){
                document.querySelector(`#${product.companyInfo.id}`).classList.add("hide_element")
            }
        })
    }

    companiesInfo.forEach(companyInfo =>{
        companyInfo.addEventListener("mouseenter" , () => showCompanyInfo(companyInfo.id))
        companyInfo.addEventListener("mouseleave" , () => hideCompanyInfo(companyInfo.id))
    })

    function showDiscountInfo(id){
        data.forEach(product =>{
            if(product.discountPriceId === id){
                document.querySelector(`#${product.discountInfo.id}`).classList.remove("hide_element")
            }
        })
    }
    function hideDiscountInfo(id){
        data.forEach(product =>{
            if(product.discountPriceId === id){
                document.querySelector(`#${product.discountInfo.id}`).classList.add("hide_element")
            }
        })
    }

    discountPricesInfo.forEach(discountPrice =>{
        discountPrice.addEventListener("mouseenter" , () => showDiscountInfo(discountPrice.id))
        discountPrice.addEventListener("mouseleave" , () => hideDiscountInfo(discountPrice.id))
    })

}

//Модальное окно для изменения банковской карты и изменение карты на странице, в зависимости от выбранной карты

{
    const ourCards = document.getElementsByName('card');
    const changeCardBtn = document.querySelector("#card_modal_btn")
    const openModalBtns = document.querySelectorAll(".change_card")
    const closeModalBtn = document.querySelector("#close_card_modal")
    const cardModalWindow = document.querySelector("#card_modal_window")
    const changingElements = document.querySelectorAll(".changing_card")


    openModalBtns.forEach(btn => {
        btn.addEventListener('click' , ()=> cardModalWindow.classList.remove("hide_element"))
    })
    closeModalBtn.addEventListener('click', ()=> cardModalWindow.classList.add("hide_element"))


    function changeCard(){
        let checkboxId = null
        let newCardInfo 
        ourCards.forEach(card =>{
            if(card.checked){
                checkboxId = card.id
            }
        })

        if(checkboxId){
            cardRadioBtnData.forEach(cardInfo => {
                if(cardInfo.id === checkboxId){
                    newCardInfo = cardInfo
                }
            })
            changingElements.forEach( (changingElement, index)=>{
                if(index % 2){
                    changingElement.innerHTML = `
                        <div class="card_type">
                            <img src="${newCardInfo.picture}"/>
                        </div>
                        <div class="card_number">${newCardInfo.number}</div>
                    `
                } else {
                    changingElement.innerHTML = `
                        <div class="card_type">
                            <img src="${newCardInfo.picture}"/>
                        </div>
                            <div>${newCardInfo.number}</div>
                `
                }
            })
        }
        cardModalWindow.classList.add("hide_element")
    }

    changeCardBtn.addEventListener("click" ,changeCard)
}

//Модальное окно для изменения адресса  и изменение адресса на странице, в зависимости от выбранного адресса

{
    const ourAdresses = document.getElementsByName("adress");
    const changeAdressBtn = document.querySelector("#adress_modal_btn")
    const openModalBtns = document.querySelectorAll(".change_adress")
    const closeModalBtn = document.querySelector("#close_adress_modal")
    const adressModalWindow = document.querySelector("#adress_modal_window")
    const changingElements = document.querySelectorAll(".changing_adress")


    openModalBtns.forEach(btn => {
        btn.addEventListener('click' , () => adressModalWindow.classList.remove("hide_element"))
    })
    closeModalBtn.addEventListener('click', () => adressModalWindow.classList.add("hide_element"))

    function changeCard(){
        let checkboxId = null
        let newAdressInfo 
        ourAdresses.forEach(card =>{
            if(card.checked){
                checkboxId = card.id
            }
        })

        if(checkboxId){
            adressRadioBtnData.forEach(adressInfo => {
                if(adressInfo.id === checkboxId){
                    newAdressInfo = adressInfo
                }
            })
            changingElements.forEach(changingElement=>{
                changingElement.innerHTML = `${newAdressInfo.adress}`
            })
        }
        adressModalWindow.classList.add("hide_element")
    }

    changeAdressBtn.addEventListener("click" ,changeCard)
}

//Изменение табов для кнопок в модальном окне 

const tabBtns = document.querySelectorAll(".tab_modal_adress_btn")

function changeTab() {
    tabBtns.forEach(btn =>{
        btn.classList.remove("tab_modal_adress_btn_active")
    })
    this.classList.add("tab_modal_adress_btn_active")
}

tabBtns.forEach( btn =>{
    btn.addEventListener("click" ,  changeTab)
})

// Логика для чекбокосв в продуктах

const productsCheckbox = document.querySelectorAll(".pick_product_checkbox")


function  chooseCheckbox(){
    data.forEach(product => {
        if(product.id === this.id || product.mobId.id === this.id){
            product.isChecked = this.checked
        }

    })
    showPrice()
}

productsCheckbox.forEach((element)=>{
    element.addEventListener("change", chooseCheckbox)
})

// Логика для чекбока "выбрать всё"

const pickAllProduct = document.querySelector("#pick_all")

function chooseAllProdcutCheckbox(){
    data.forEach(product => {
        product.isChecked = pickAllProduct.checked
        document.querySelector(`#${product.id}`).checked = pickAllProduct.checked
        document.querySelector(`#${product.mobId.id}`).checked = pickAllProduct.checked
    })
    showPrice()
}

pickAllProduct.addEventListener("change",chooseAllProdcutCheckbox )

// Замена цвета кнопки при изменени значения чекбокса

const changeColorCheckBox = document.querySelector(".change_bg_checkbox")
const changeableBgBtn = document.querySelector("#changeable_bg_element")

function changeBg(){
   changeableBgBtn.classList.toggle("buy_btn_purple")
}

changeColorCheckBox.addEventListener("change", changeBg)
