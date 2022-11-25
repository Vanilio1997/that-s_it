// Данные о товарах

const data = [ 
    {
        productName: "Футболка UZcotton мужская",
        productInfo: ["Цвет: белый" ,"Размер: 56"],
        marcetPlaceName:"Коледино WB",
        companyName: "ООО Вайлдберриз",
        inStoke:3,
        weHave:0,
        price: 1051,
        discountPrice: 522,
        currency: "com",
        id:1,
        picture: "./logos./Tshirt.png"
    },
    {
        productName: "Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",
        productInfo: ["Цвет: прозрачный"],
        marcetPlaceName:"Коледино WB",
        companyName: "OOO Мегапрофстиль",
        inStoke:500,
        weHave:0,
        price: 2100047,
        discountPrice: 2300047,
        currency: "com",
        id:2,
        picture: "./logos./Iphone_case.png",
    },
    {
        productName: `Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell `,
        productInfo: [],
        marcetPlaceName:"Коледино WB",
        companyName: "ООО Вайлдберриз",
        inStoke:3,
        weHave:0,
        price: 494,
        discountPrice: 950,
        currency: "com",
        id:3,
        picture: "./logos./Pencils.png",
    }
]



class Product {
    constructor(options){
        this.price = options.price
    }

    plusPrice(){
        this.price = this.price + 1;
        console.log(this.price);
    }
}


const product = new Product({
    price: 0,
})

// Данные для инпутов

const inputsData = [
    {
        placeholder:"Имя",
        warningText:"Используйте латинские буквы",
        id: "name_input",
        label: ''
    },
    {
        placeholder:"Фамилия",
        warningText:"Укажите фамилию",
        id: "second_name_input",
        label: ''
    },
    {
        placeholder:"Почта",
        warningText:"Проверьте адрес электронной почты",
        id: "name_input",
        label: ''
    },
    {
        placeholder:"Телефон",
        warningText:"Формат: +9 999 999 99 99",
        id: "phone_number_input",
        label: ''
    },
    {
        placeholder:"Инн",
        warningText:"Формат: 1234567",
        id: "index_input",
        label: ''   
    },
]

