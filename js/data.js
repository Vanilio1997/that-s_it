// Данные о товарах

const data = [ 
    {
        productName: "Футболка UZcotton мужская",
        productInfo: ["Цвет: белый" ,"Размер: 56"],
        marketPlaceName:"Коледино WB",
        companyInfo:{
            name: "ООО Вайлдберриз",
            ogrn: 5423542352234,
            adress: "129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34",
            id: "company_id_1",
        },
        discountInfo:{
            id: "discount_id_1",
            discount: [
                {type:"Скидка 55%" , price: "−300 сом"},
                {type:"Скидка покупателя 10%" , price: "−30 сом"}
            ]
        },
        inStoke:3,
        inStokeId: "InStoke_id_1",
        weHave:0,
        weHaveId:"weHave_id_1" , 
        price: 1051,
        discountPrice: 522,
        currency: "com",
        id:1,
        picture: "./logos./Tshirt.png",
        plus_id: "plus_id_1",
        minus_id: "minus_id_1",
        infoLogoId: "infoLogo_id_1",
        discountPriceId: "discountPrice_Id_1",
        arrival_logo_id: "arrival_id_1",
        plus(){
            if(this.inStoke){
            this.weHave++
            this.inStoke--
            }
        },
        minus(){
            if(this.weHave){
                this.weHave--
                this.inStoke++
            }
        }
    },
    {
        productName: "Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",
        productInfo: ["Цвет: прозрачный"],
        marketPlaceName:"Коледино WB",
        companyInfo:{
            name: "OOO Мегапрофстиль",
            ogrn: 5423542352234,
            adress: "129337, Самара, улица Синяя Сосна, 2, корпус 2, стр. 3, помещение 54, офис 14",
            id: "company_id_2",
        },
        discountInfo:{
            id: "discount_id_2",
            discount: [
                {type:"Скидка 55%" , price: "−300 сом"},
                {type:"Скидка покупателя 10%" , price: "−30 сом"}
            ]
        },
        inStoke:500,
        inStokeId: "InStoke_id_2",
        weHave:0,
        weHaveId:"weHave_id_2" , 
        price: 2300047,
        discountPrice: 2100047,
        currency: "com",
        id:2,
        picture: "./logos./Iphone_case.png",
        plus_id: "plus_id_2",
        minus_id: "minus_id_2",
        infoLogoId: "infoLogo_id_2",
        discountPriceId: "discountPrice_Id_2",
        arrival_logo_id: "arrival_id_1",
        plus(){
            if(this.inStoke){
            this.weHave++
            this.inStoke--
            }
        },
        minus(){
            if(this.weHave){
                this.weHave--
                this.inStoke++
            }
        }
    },
    {
        productName: `Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell `,
        productInfo: [],
        marketPlaceName:"Коледино WB",
        companyInfo:{
            name: "ООО Вайлдберриз",
            ogrn: 5423542352234,
            adress: "129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34",
            id: "company_id_3",
        },
        discountInfo:{
            id: "discount_id_3",
             discount: [
                {type:"Скидка 55%" , price: "−300 сом"},
                {type:"Скидка покупателя 10%" , price: "−30 сом"}
            ]
        },
        inStoke:3,
        inStokeId: "InStoke_id_3",
        weHave:0,
        weHaveId:"weHave_id_3",
        price: 950,
        discountPrice: 494,
        currency: "com",
        id:3,
        picture: "./logos./Pencils.png",
        plus_id: "plus_id_3",
        minus_id: "minus_id_3",
        infoLogoId: "infoLogo_id_3",
        discountPriceId: "discountPrice_Id_3",
        arrival_logo_id: "arrival_id_1",
        plus(){
            if(this.inStoke){
            this.weHave++
            this.inStoke--
            }
        },
        minus(){
            if(this.weHave){
                this.weHave--
                this.inStoke++
            }
        }
    }
]

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

const cardRadioBtnData = [
    {
        id:"radio_btn_1",
        picture: "./logos/mir.svg",
        number: "1234 56•• •••• 1234",
    },
    {
        id:"radio_btn_2",
        picture: "./logos/visa.svg",
        number: "1234 56•• •••• 1234",
    },
    {
        id:"radio_btn_3",
        picture: "./logos/mastercard.svg",
        number: "1234 56•• •••• 1234",
    },
    {
        id:"radio_btn_4",
        picture: "./logos/maestro.svg",
        number: "1234 56•• •••• 1234",
    },
]


const adressRadioBtnData = [
    {
        id:"adress_btn_1",
        adress: "Бишкек, улица Табышалиева, 57"
    },
    {
        id:"adress_btn_2",
        adress: "Бишкек, улица Жукеева-Пудовкина, 77/1"
    },
    {
        id:"adress_btn_3",
        adress: "Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1"
    },
]
