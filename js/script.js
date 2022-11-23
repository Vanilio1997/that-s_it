

let products = '';




data.forEach(({productName, productInfo, marcetPlaceName, companyName, inStoke, weHave, price, discountPrice, currency,picture,id})=>{
    let isProductInfo = () => productInfo.length > 0 ? productInfo : ''
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
                    <div class="quantity_price_container">
                        <div class="quantity_container"> 
                            <div class="counter_container"> 
                                <div>-</div>    
                                <div>${weHave}</div>    
                                <div>+</div>    
                            </div>
                            <span>осталось ${inStoke} шт.</span>
                            <div>
                                <button class="product_logo logo_btn><img src="./logos/like.svg"/></button>   
                                <button class="product_logo logo_btn><img src="./logos/delete.svg"/></button>           
                            </div>    
                        </div>
                        <div class="product_price_info_container"> 
                            <div class="discountPrice_price">${discountPrice} ${currency}</div>
                            <div class="prodcut_price">${price} ${currency}</div>
                        </div>
                    </div>
                 </div>`;
})


document.querySelector(".products_list_container").innerHTML = products

