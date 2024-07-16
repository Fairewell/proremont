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
                    { id: 1, title: "пола", price: 0 }, { id: 2, title: "стен", price: 0  }, { id: 3, title: "в доме", price: 0  }, { id: 4, title: "под ключ", price: 0  },
                ],
                'prices': [{price: 0}, {price: 0}, {price: 0}, {price: 0}]
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
                    { id: 2, title: "Малярные работы", price: 12000  },
                    { id: 3, title: "Штукатурные работы", price: 21000  },
                ],
                'prices': [{price: 31000}, {price: 12000}, {price: 21000}]
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
                'prices': [{price: 5000}, {price: 5000}]
            },
            {
                'id': 2,
                'name': 'install',
                'title': 'Монтаж электрических щитов',
                'desk': 'Установка распределительных щитов и автоматических выключателей',
                'default_': '',
                'isSwitch':'true', 
                'titles': [{ 'id': 1, 'title': 'Монтаж щитов', 'price': 12000 }, 
                        { 'id': 2, 'title': 'Подключение электроприборов', 'price': 5000 }],
                'prices': [{price: 12000}, {price: 5000}]
            }, {
                'id': 3,
                'name': 'check',
                'title': 'Проверка электробезопасности',
                'desk': 'Проведение испытаний на соответствие нормам электробезопасности',
                'default_': '', 'isSwitch': 'true',
                'titles': [{ 'id': 1, 'title': 'Проведение замеров','price': 2000 }, { 'id': 2, 'title': 'Настройка оборудования','price': 2000 }],
                'prices': [{price: 2000}, {price: 2000}]
            },
            {
                'id': 4,
                'name': 'dopi',
                'title': 'Дополнительные услуги',
                'desk': 'Выберите один или несколько вариантов',
                'default_': '',
                'isSwitch': true,
                'titles': [{ 'id': 1, 'title': 'hehe', 'price': 100000 }],
                'prices': [{price: 10000}]
            }]
    }
];

