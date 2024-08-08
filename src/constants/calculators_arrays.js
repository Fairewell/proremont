export const calc_arrays = [
    {
        id: 1,
        title: "Отделочные работы",
        steps: [
            {
                id: 1,
                name: "names",
                title: "Как назвать вашу задачу?",
                desk: "Название поможет быстрее понять, что нужно сделать",
                default_: "Отделка ",
                isSwitch: false,
                titles: [
                    { id: 1, title: "пола", price: 0 }, { id: 2, title: "стен", price: 0 }, { id: 3, title: "в доме", price: 0 }, { id: 4, title: "под ключ", price: 0 },
                ],
                'prices': [{ price: 0 }, { price: 0 }, { price: 0 }, { price: 0 }]
            },
            {
                id: 2,
                name: "vidu",
                title: "Выберите вид работы",
                desk: "Выберите один или несколько вариантов",
                default_: "",
                isSwitch: true,
                titles: [
                    { id: 1, title: "Отделка всего помещения под ключ", price: 31000 },
                    { id: 2, title: "Малярные работы", price: 12000 },
                    { id: 3, title: "Штукатурные работы", price: 21000 },
                ],
                'prices': [{ price: 31000 }, { price: 12000 }, { price: 21000 }]
            },
        ]
    },
    {
        'id': 2, 'title': 'Электро-монтажные работы',
        'steps': [
            {
                'id': 1,
                'name':
                    'plans',
                'title': 'Планирование схемы электропроводки',
                'desk': 'Разработка схемы распределения электрических сетей в помещении',
                'default_': 'Стандартная электропроводка', 'isSwitch': false,
                'titles': [{ 'id': 1, 'title': 'Прокладка электропроводка', 'price': 5000 },
                { 'id': 2, 'title': 'Установка розеток, выключателей', 'price': 5000 }],
                'prices': [{ price: 5000 }, { price: 5000 }]
            },
            {
                'id': 2,
                'name': 'install',
                'title': 'Монтаж электрических щитов',
                'desk': 'Установка распределительных щитов и автоматических выключателей',
                'default_': '',
                'isSwitch': 'true',
                'titles': [{ 'id': 1, 'title': 'Монтаж щитов', 'price': 12000 },
                { 'id': 2, 'title': 'Подключение электроприборов', 'price': 5000 }],
                'prices': [{ price: 12000 }, { price: 5000 }]
            }, {
                'id': 3,
                'name': 'check',
                'title': 'Проверка электробезопасности',
                'desk': 'Проведение испытаний на соответствие нормам электробезопасности',
                'default_': '', 'isSwitch': 'true',
                'titles': [{ 'id': 1, 'title': 'Проведение замеров', 'price': 2000 }, { 'id': 2, 'title': 'Настройка оборудования', 'price': 2000 }],
                'prices': [{ price: 2000 }, { price: 2000 }]
            },
            {
                'id': 4,
                'name': 'dopi',
                'title': 'Дополнительные услуги',
                'desk': 'Выберите один или несколько вариантов',
                'default_': '',
                'isSwitch': true,
                'titles': [{ 'id': 1, 'title': 'hehe', 'price': 100000 }],
                'prices': [{ price: 10000 }]
            }]
    },
    {
        id: 3, title: 'Сварочные работы',
        "steps": [
            {
                "id": 3,
                "name": "svarka",
                "title": "Сварка",
                "desk": "Металлоконструкций, Художественная сварка, Строительных конструкций",
                "default_": "",
                "isSwitch": true,
                "titles": [
                    { "id": 1, "title": "Металлоконструкций", "price": 10000 },
                    { "id": 2, "title": "Художественная сварка", "price": 15000 },
                    { "id": 3, "title": "Строительных конструкций", "price": 12000 },
                    { "id": 4, "title": "Востановление металлоизделий", "price": 20000 },
                    { "id": 5, "title": "Сварка автомобильных запчастей", "price": 8000 }
                ],
                "prices": [
                    { "price": 10000 },
                    { "price": 15000 },
                    { "price": 12000 },
                    { "price": 20000 },
                    { "price": 8000 }
                ]
            }
        ]
    },
    {
        id: 4, "title": "Сантехнические работы",
        "steps": [
            {
                "id": 1,
                "name": "names",
                "title": "Как назвать вашу задачу?",
                "desk": "Название поможет быстрее понять, что нужно сделать",
                "default_": "Потолок ",
                "isSwitch": false,
                "titles": [
                    { "id": 1, "title": "установка", "price": 0 },
                    { "id": 2, "title": "ремонт", "price": 0 },
                    { "id": 3, "title": "декор", "price": 0 }
                ],
                "prices": [{ "price": 0 }, { "price": 0 }, { "price": 0 }]
            },
            {
                "id": 2,
                "name": "vidu",
                "title": "Выберите вид работы",
                "desk": "Выберите один или несколько вариантов",
                "default_": "",
                "isSwitch": true,
                "titles": [
                    { "id": 1, "title": "Подвесной потолок", "price": 15000 },
                    { "id": 2, "title": "Натяжной потолок", "price": 20000 },
                    { "id": 3, "title": "Ремонт потолка", "price": 10000 },
                    { "id": 4, "title": "Декорирование потолка", "price": 8000 }
                ],
                "prices": [
                    { "price": 15000 },
                    { "price": 20000 },
                    { "price": 10000 },
                    { "price": 8000 }
                ]
            },
            {
                "id": 3,
                "name": "material",
                "title": "Выберите материал",
                "desk": "Укажите, какие материалы будут использоваться",
                "default_": "",
                "isSwitch": true,
                "titles": [
                    { "id": 1, "title": "Гипсокартон", "price": 0 },
                    { "id": 2, "title": "ПВХ пленка", "price": 0 },
                    { "id": 3, "title": "Дерево", "price": 0 }
                ],
                "prices": [
                    { "price": 0 },
                    { "price": 0 },
                    { "price": 0 }
                ]
            },
            {
                "id": 4,
                "name": "finish",
                "title": "Выберите способ отделки",
                "desk": "Какой вид отделки вы предпочитаете?",
                "default_": "",
                "isSwitch": true,
                "titles": [
                    { "id": 1, "title": "Покраска", "price": 5000 },
                    { "id": 2, "title": "Обои", "price": 7000 },
                    { "id": 3, "title": "Панели", "price": 6000 }
                ],
                "prices": [
                    { "price": 5000 },
                    { "price": 7000 },
                    { "price": 6000 }
                ]
            }
        ]
    },
    {
        id: 6, "title": "Строительство домов",
        "steps": [
            {
                "id": 1,
                "name": "names",
                "title": "Как назвать ваш проект?",
                "desk": "Название поможет быстрее понять, что нужно сделать",
                "default_": "Строительство дома ",
                "isSwitch": false,
                "titles": [
                    { "id": 1, "title": "индивидуальный", "price": 0 },
                    { "id": 2, "title": "типовой", "price": 0 }
                ],
                "prices": [{ "price": 0 }, { "price": 0 }]
            },
            {
                "id": 2,
                "name": "type",
                "title": "Выберите тип строительства",
                "desk": "Какой тип дома вы хотите построить?",
                "default_": "",
                "isSwitch": true,
                "titles": [
                    { "id": 1, "title": "Кирпичный", "price": 300000 },
                    { "id": 2, "title": "Деревянный", "price": 250000 },
                    { "id": 3, "title": "Каркасный", "price": 200000 },
                    { "id": 4, "title": "Монолитный", "price": 350000 }
                ],
                "prices": [
                    { "price": 300000 },
                    { "price": 250000 },
                    { "price": 200000 },
                    { "price": 350000 }
                ]
            },
            {
                "id": 4,
                "name": "floors",
                "title": "Количество этажей",
                "desk": "Сколько этажей будет в вашем доме?",
                "default_": "",
                "isSwitch": true,
                "titles": [
                    { "id": 1, "title": "1 этаж", "price": 0 },
                    { "id": 2, "title": "2 этажа", "price": 50000 },
                    { "id": 3, "title": "3 этажа", "price": 100000 }
                ],
                "prices": [
                    { "price": 0 },
                    { "price": 50000 },
                    { "price": 100000 }
                ]
            },
            {
                "id": 5,
                "name": "style",
                "title": "Выберите стиль дома",
                "desk": "Какой стиль вы предпочитаете?",
                "default_": "",
                "isSwitch": true,
                "titles": [
                    { "id": 1, "title": "Современный", "price": 0 },
                    { "id": 2, "title": "Классический", "price": 0 },
                    { "id": 3, "title": "Минимализм", "price": 0 },
                    { "id": 4, "title": "Эко-стиль", "price": 0 }
                ],
                "prices": [
                    { "price": 0 },
                    { "price": 0 },
                    { "price": 0 },
                    { "price": 0 }
                ]
            },
            {
                "id": 6,
                "name": "finish",
                "title": "Выберите отделку",
                "desk": "Какой вид отделки вы предпочитаете?",
                "default_": "",
                "isSwitch": true,
                "titles": [
                    { "id": 1, "title": "Под ключ", "price": 150000 },
                    { "id": 2, "title": "Черновая отделка", "price": 80000 },
                    { "id": 3, "title": "Без отделки", "price": 0 }
                ],
                "prices": [
                    { "price": 150000 },
                    { "price": 80000 },
                    { "price": 0 }
                ]
            }
        ]
    },
];

