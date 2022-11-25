

let products = '';
let notAvailableProducts = '';
let inputTop = '';
let inputBottom = '';


data.forEach(({productName, productInfo, marcetPlaceName, companyName, inStoke, weHave, price, discountPrice, currency,picture,id})=>{
    let isProductInfo = () => productInfo.length > 0 ? productInfo : ''
    let discountPrcieClass = () => String(discountPrice).length > 3 ? "long_discount_price" : "short_discpount_price" 
    let splitPrice = price.toLocaleString() 
    let splitDiscountPrice = discountPrice.toLocaleString()
    console.log(splitPrice, splitDiscountPrice);
    products += `<div class="product_container flex_row">
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
                                <div>-</div>    
                                <div>${weHave}</div>    
                                <div class="plus">+</div>    
                            </div>
                            <span class="product_inStoke">осталось ${inStoke} шт.</span>
                            <div class="flex_row delete_like_btns_container">
                                <button class="product_logo logo_btn"><img src="./logos/like.svg"/></button>   
                                <button class="product_logo logo_btn"><img src="./logos/delete.svg"/></button>           
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
                                        <div class="flex_row notAbailable_container_logos"> 
                                            <button class="product_logo logo_btn"><img src="./logos/like.svg"/></button>   
                                            <button class="product_logo logo_btn"><img src="./logos/delete.svg"/></button>
                                        </div>
                                    </div>
                                </div>
                            </div> `
})



for (let i = 0; i< inputsData.length; i++){
    let input = `
                <div class="flex_column gap_2 full_width color_gray">
                    <label class="height_16" for=${inputsData[i].id}>${inputsData[i].label}</label>
                    <div class="gap_4">
                        <input class="full_width recipient_input_text recipient_input_settings" type="text" placeholder=${inputsData[i].placeholder} id=${inputsData[i].id}></input>
                        <div class="height_14">${inputsData[i].warningText}</div>
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

const aaa = document.querySelector(".plus")


function getPrice(){
    console.log(this.price);
}

aaa.addEventListener("click" , getPrice )
