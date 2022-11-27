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
        picture: "./logos./Tshirt.png",
        plus(){
        }
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
        plus(){
            console.log(this);
        }
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
        plus(){
            console.log(this);
        }
    }
]



class Product {
    constructor(options){
        this.price = options.price
    }

    plusPrice(){
        this.price = this.price + 1;
    }
}


const product = new Product({
    price: 0,
})

// Данные для инпутов



const inputsData = [
    {
        placeholder:"Имя",
        warningText:"Укажите имя",
        id: "name_input",
        label: '',
        isWarning: false,
        isChange: false,
        regex: /^[а-яА-ЯЁё]+$/,
    },
    {
        placeholder:"Фамилия",
        warningText:"Укажите фамилию",
        id: "second_name_input",
        label: '',
        isWarning: false,
        isChange: false,
        regex: /^[а-яА-ЯЁё]+$/,
    },
    {
        placeholder:"Почта",
        warningText:"Проверьте адрес электронной почты",
        id: "email_input",
        label: '',
        isWarning: false,
        isChange: false,
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
    {
        placeholder:"Телефон",
        warningText:"Формат: +9 999 999 99 99",
        id: "phone_number_input",
        label: '',
        isWarning: false,
        isChange: false,
        regex: /((\+7|7|8)+([0-9]){10})$/,
    },
    {
        placeholder:"Инн",
        warningText:"Формат: 1234567",
        id: "index_input",
        label: '',
        isWarning: false,
        isChange: false,
        regex:  /^[0-9]{10}$/,
    },
]

