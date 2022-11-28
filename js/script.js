
let products = '';
let notAvailableProducts = '';
let arraivalPictures = '';
let inputTop = '';
let inputBottom = '';



data.forEach(({productName, productInfo, marcetPlaceName, companyName, inStoke, weHave, price, discountPrice, currency,picture, id , plus_id, minus_id, inStokeId,arrival_logo_id, weHaveId})=>{
    let isProductInfo = () => productInfo.length > 0 ? productInfo : ''
    let discountPrcieClass = () => String(discountPrice).length > 3 ? "long_discount_price" : "short_discpount_price" 
    let splitPrice = price.toLocaleString() 
    let splitDiscountPrice = discountPrice.toLocaleString()
    products += `<div class="product_container flex_row ">
                    <div class="product_type flex_row"> 
                        <div class="flex_row add_product_container "> 
                            <div class="checkbox_flex_container"> 
                                <input type="checkbox" class="custom_checkbox_pay" id="${id}" >
                                <label for="${id}"/>
                            </div>
                            <div class="prodcut_picture"> 
                                <img src="${picture}" alt="logo_place"/>
                            </div>
                        </div>
                        <div class="flex_column product_description">
                            <div class="product_name">${productName}</div>
                            <div class="product_info">${isProductInfo()}</div>
                            <div class="flex_column company_info_container">
                                <div class="marcetPlaceName"> ${marcetPlaceName}</div>
                                <div class="flex_row company_name_container">       
                                    <div class="product_company_name">${companyName}</div>
                                    <button class="logo_btn more_company_info_btn"><img src="./logos/more_company_info.svg"/> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex_row quantity_price_container">
                        <div class="flex_column quantity_container"> 
                            <div class="flex_row counter_container"> 
                                <div class='minus_btn' id=${minus_id}>-</div>    
                                <div id=${weHaveId}>${weHave}</div>    
                                <div class='plus_btn' id=${plus_id} >+</div>    
                            </div>
                            <span id=${inStokeId} class="product_inStoke hide_element">осталось ${inStoke} шт.</span>
                            <div class="flex_row delete_like_btns_container hide_element">
                                <button class="logo_btn"> 
                                    <svg width="20" height="16" viewBox="0 0 20 16" fill="black" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.03399 2.05857C2.26592 2.75224 1.76687 3.83284 1.99496 5.42928C2.22335 7.02783 3.26497 8.68522 4.80439 10.3478C6.25868 11.9184 8.10965 13.4437 9.99999 14.874C11.8903 13.4437 13.7413 11.9184 15.1956 10.3478C16.7351 8.68521 17.7767 7.02783 18.005 5.4293C18.2331 3.83285 17.734 2.75224 16.9659 2.05856C16.1767 1.34572 15.055 1 14 1C12.132 1 11.0924 2.08479 10.5177 2.68443C10.4581 2.7466 10.4035 2.80356 10.3535 2.85355C10.1583 3.04882 9.84169 3.04882 9.64643 2.85355C9.59644 2.80356 9.54185 2.7466 9.48227 2.68443C8.9076 2.08479 7.868 1 5.99999 1C4.94498 1 3.82328 1.34573 3.03399 2.05857ZM2.36374 1.31643C3.37372 0.404274 4.75205 0 5.99999 0C8.07126 0 9.34542 1.11257 9.99999 1.77862C10.6545 1.11257 11.9287 0 14 0C15.2479 0 16.6262 0.404275 17.6362 1.31644C18.6674 2.24776 19.2669 3.66715 18.995 5.5707C18.7233 7.47217 17.515 9.31479 15.9294 11.0272C14.3355 12.7486 12.3064 14.3952 10.3 15.9C10.1222 16.0333 9.87776 16.0333 9.69999 15.9C7.69356 14.3952 5.66446 12.7485 4.07063 11.0272C2.48506 9.31478 1.27668 7.47217 1.00501 5.57072C0.733043 3.66716 1.33253 2.24776 2.36374 1.31643Z" "/>
                                    </svg>
                                </button>   
                                <button class="logo_btn">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="black" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 3C0.5 2.72386 0.723858 2.5 1 2.5H15C15.2761 2.5 15.5 2.72386 15.5 3C15.5 3.27614 15.2761 3.5 15 3.5H1C0.723858 3.5 0.5 3.27614 0.5 3Z" "/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.4584 2.5H14.5059L13.6411 13.6926C13.5405 14.9947 12.4546 16 11.1486 16H4.84639C3.54299 16 2.45829 14.9986 2.35435 13.6994L1.4584 2.5ZM2.5416 3.5L3.35117 13.6196C3.41353 14.3992 4.06435 15 4.84639 15H11.1486C11.9322 15 12.5837 14.3968 12.6441 13.6155L13.4256 3.5H2.5416Z"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11 3.5H5V1.46875C5 0.657582 5.65758 0 6.46875 0H9.53125C10.3424 0 11 0.657582 11 1.46875V3.5ZM6.46875 1C6.20987 1 6 1.20987 6 1.46875V2.5H10V1.46875C10 1.20987 9.79013 1 9.53125 1H6.46875Z" "/>
                                    </svg>
                                </button>              
                            </div>    
                        </div>
                        <div class="product_price_info_container"> 
                            <div class="discountPrice_price"><span class=${discountPrcieClass()}> ${splitDiscountPrice} </span> <span class="product_currency">${currency} </span></div>
                            <div><span class="prodcut_price"> ${splitPrice} ${currency} </span></div>
                        </div>
                    </div>
                </div>`;
    notAvailableProducts += `<div class="flex_row notAvailable_product_container">
                                <div class="notAvailable_product_type flex_row">
                                    <div> <img class="filter_gray" src="${picture}" alt="logo_place"/></div>
                                    <div class="notAvailable_product_description flex_column"> 
                                        <div class="notAbailable_product_name">${productName}</div>
                                        <div class="notAbailable_product_info">${isProductInfo()}</div>
                                    </div>
                                </div>
                                <div class="notAbailable_right_block flex_row">
                                    <div class="flex_column notAbailable_block_logos"> 
                                        <div class="flex_row notAbailable_container_logos hide_element"> 
                                            <button class="notAbailable_logo logo_btn">
                                            <svg width="20" height="16" viewBox="0 0 20 16" fill="black" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.03399 2.05857C2.26592 2.75224 1.76687 3.83284 1.99496 5.42928C2.22335 7.02783 3.26497 8.68522 4.80439 10.3478C6.25868 11.9184 8.10965 13.4437 9.99999 14.874C11.8903 13.4437 13.7413 11.9184 15.1956 10.3478C16.7351 8.68521 17.7767 7.02783 18.005 5.4293C18.2331 3.83285 17.734 2.75224 16.9659 2.05856C16.1767 1.34572 15.055 1 14 1C12.132 1 11.0924 2.08479 10.5177 2.68443C10.4581 2.7466 10.4035 2.80356 10.3535 2.85355C10.1583 3.04882 9.84169 3.04882 9.64643 2.85355C9.59644 2.80356 9.54185 2.7466 9.48227 2.68443C8.9076 2.08479 7.868 1 5.99999 1C4.94498 1 3.82328 1.34573 3.03399 2.05857ZM2.36374 1.31643C3.37372 0.404274 4.75205 0 5.99999 0C8.07126 0 9.34542 1.11257 9.99999 1.77862C10.6545 1.11257 11.9287 0 14 0C15.2479 0 16.6262 0.404275 17.6362 1.31644C18.6674 2.24776 19.2669 3.66715 18.995 5.5707C18.7233 7.47217 17.515 9.31479 15.9294 11.0272C14.3355 12.7486 12.3064 14.3952 10.3 15.9C10.1222 16.0333 9.87776 16.0333 9.69999 15.9C7.69356 14.3952 5.66446 12.7485 4.07063 11.0272C2.48506 9.31478 1.27668 7.47217 1.00501 5.57072C0.733043 3.66716 1.33253 2.24776 2.36374 1.31643Z" "/>
                                            </svg>
                                            </button>   
                                            <button class="notAbailable_logo  logo_btn">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="black" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 3C0.5 2.72386 0.723858 2.5 1 2.5H15C15.2761 2.5 15.5 2.72386 15.5 3C15.5 3.27614 15.2761 3.5 15 3.5H1C0.723858 3.5 0.5 3.27614 0.5 3Z" "/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.4584 2.5H14.5059L13.6411 13.6926C13.5405 14.9947 12.4546 16 11.1486 16H4.84639C3.54299 16 2.45829 14.9986 2.35435 13.6994L1.4584 2.5ZM2.5416 3.5L3.35117 13.6196C3.41353 14.3992 4.06435 15 4.84639 15H11.1486C11.9322 15 12.5837 14.3968 12.6441 13.6155L13.4256 3.5H2.5416Z"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 3.5H5V1.46875C5 0.657582 5.65758 0 6.46875 0H9.53125C10.3424 0 11 0.657582 11 1.46875V3.5ZM6.46875 1C6.20987 1 6 1.20987 6 1.46875V2.5H10V1.46875C10 1.20987 9.79013 1 9.53125 1H6.46875Z" "/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div> `
    arraivalPictures += ` <div class="quantity_circle_container">
                            <img style="width: inherit" src=${picture} /> <div class="quantity_circle" id=${arrival_logo_id}><div>${weHave}  </div></div>
                        </div>
                        `
    
})



for (let i = 0; i< inputsData.length; i++){
    const maxLength = inputsData[i].id === "index_input" ? 10 : null 
    let input = `
                <div class="flex_column gap_2 full_width color_gray">
                    <label class="height_16" for=${inputsData[i].id}>${inputsData[i].label}</label>
                    <div class="gap_4 ${inputsData[i].class}">
                        <input  maxlength=${maxLength} class="full_width recipient_input_text recipient_input_settings" type="text" placeholder=${inputsData[i].placeholder} id=${inputsData[i].id}></input>
                    </div>
                </div> 
                `
    if(i<2){
        inputTop+= input
    } else {
        inputBottom += input
    }
}

document.querySelector(".products_list_container").innerHTML = products
document.querySelector(".not_available_list_container").innerHTML = notAvailableProducts
document.querySelector(".input_top_container").innerHTML = inputTop
document.querySelector(".input_bottom_container").innerHTML = inputBottom
document.querySelector(".arrival_date").innerHTML = arraivalPictures


window.addEventListener('resize' , ()=>{
    pageWidth = window.innerWidth
})
