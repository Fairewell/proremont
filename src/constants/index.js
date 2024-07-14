import { slider1, slider2, slider3, people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star } from "../assets";
import { FaVk, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';


export const advantages = [
  {
    id: 1,
    text: 'Нас рекомендуют! Первая и единственная в городе компания с безупречной репутацией.',
    path: facebook
  },
  {
    id: 2,
    text: 'От перепланировки и дизайн-проекта до мебели. Экономим ваше время и силы. Скидки у партнеров до 20%.',
    path: facebook
  },
  {
    id: 3,
    text: 'Уверены в безупречном качестве своих работ. Но, если у вас вдруг что-то сломается или отклеится, мы все исправим за 1 – 2 дня..',
    path: facebook
  },
  {
    id: 4,
    text: 'От перепланировки и дизайн-проекта до мебели. Экономим ваше время и силы. Скидки у партнеров до 20%.',
    path: facebook
  },
  {
    id: 5,
    text: 'Нас рекомендуют! Первая и единственная в городе компания с безупречной репутацией.',
    path: facebook
  },
  {
    id: 6,
    text: 'От перепланировки и дизайн-проекта до мебели. Экономим ваше время и силы. Скидки у партнеров до 20%.',
    path: facebook
  },
  // TODO:: добавить icons suda
]

export const services = [
  {
    id: 1,
    title: "Отделочные работы",
    name: "otdelka",
    greeting: "..text",
    desk: "text...",
    images_path: { slider1, slider2, slider3 }
  },
  {
    id: 2,
    title: "Электро-монтажные работы",
    name: "electrika",
    greeting: "..text",
    desk: "text...",
    images_path: { slider1, slider2, slider3 }
  },
  {
    id: 3,
    title: "Сварочные работы",
    name: "svarka",
    greeting: "..text",
    desk: "text...",
    images_path: { slider1, slider2, slider3 }
  },
  {
    id: 4,
    title: "Сантехнические работы",
    name: "santehnica",
    greeting: "..text",
    desk: "text...",
    images_path: { slider1, slider2, slider3 }
  },
  {
    id: 5,
    title: "Натяжные потолки",
    name: "potolki",
    greeting: "..text",
    desk: "text...",
    images_path: { slider1, slider2, slider3 }
  },
  {
    id: 6,
    title: "Строительство домов",
    name: "doma",
    greeting: "..text",
    desk: "text...",
    images_path: { slider1, slider2, slider3 }
  },
  {
    id: 7,
    title: "Благоустройство",
    name: "blagoutstroistvo",
    greeting: "..text",
    desk: "text...",
    images_path: { slider1, slider2, slider3 }
  },
];

export const btns = [
  {
    id: 1,
    title: "otdelka",
    text: "Отделочные работы",
    bg: "black",
    text_color: "white",
    hover_bg: "orange",
    hover_text: "black",
    isHovered: true,
  },
  {
    id: 2,
    title: "electrika",
    text: "Электро-монтажные работы",
    bg: "black",
    text_color: "white",
    hover_bg: "orange",
    hover_text: "black",
    isHovered: true,
  },
  {
    id: 3,
    title: "svarka",
    text: "Сварочные работы",
    bg: "black",
    text_color: "white",
    hover_bg: "orange",
    hover_text: "black",
    isHovered: true,
  },
  {
    id: 5,
    title: "santehnica",
    text: "Сантехнические работы",
    bg: "black",
    text_color: "white",
    hover_bg: "orange",
    hover_text: "black",
    isHovered: true,
  },
  {
    id: 6,
    title: "potolki",
    text: "Натяжные потолки",
    bg: "black",
    text_color: "white",
    hover_bg: "orange",
    hover_text: "black",
    isHovered: true,
  },
  {
    id: 7,
    title: "doma",
    text: "Строительство домов",
    bg: "black",
    text_color: "white",
    hover_bg: "orange",
    hover_text: "black",
    isHovered: true,
  },
  {
    id: 8,
    title: "blagoutstroistvo",
    text: "Благоустройство",
    bg: "black",
    text_color: "white",
    hover_bg: "orange",
    hover_text: "black",
    isHovered: true,
  },
  {
    id: 9,
    title: "svarka",
    text: "Сварочные работы",
    bg: "black",
    text_color: "white",
    hover_bg: "orange",
    hover_text: "black",
    isHovered: true,
  },
  {
    id: 10,
    title: "submit",
    text: "Оформить заявку",
    bg: "black",
    text_color: "white",
    hover_bg: "orange",
    hover_text: "black",
    isHovered: true,
  },

]

export const sliders_img = [
  {
    id: 1,
    path: slider1,
    alt: "slider-1",
  },
  {
    id: 2,
    path: slider2,
    alt: "slider-2",
  },
  {
    id: 3,
    path: slider3,
    alt: "slider-3",
  },
]

export const extLinks = [
  {
    id: "vk",
    "title": "VK - ProRemont",
    "icon": FaVk,
    "link": "https://vk.com/hornyh0le"
  },
  {
    id: "insta",
    "title": "Instagramm - ProRemont",
    "icon": FaInstagram,
    "link": "https://instagram.com/azumaq"
  },
  {
    id: "twitter",
    "title": "Twitter - ProRemont",
    "icon": FaTwitter,
    "link": "https://x.com/comrade_azu"
  },
  {
    id: "insta",
    "title": "Instagramm - ProRemont",
    "icon": FaFacebook,
    "link": "https://instagram.com/exxo"
  }
]

export const projects = [
  {
    id: 1,
    comms: "kryto!",
    stars: 4,
    floors: "2 этаж",
    price: "3 600 000",
    time: 24,
    person: "ivan, 1000 let",
    plowad: 102,
    kvadratura: "10.5м на 8м",
    path: slider1
  },
  {
    id: 2,
    comms: "kryto!",
    stars: 4,
    floors: "1 этаж",
    price: "3 600 000",
    time: "24 дня",
    person: "ivan, 1000 let",
    plowad: 102,
    kvadratura: "10.5м на 8м",
    path: slider1
  },
  {
    id: 3,
    comms: "kryto!",
    stars: 4,
    floors: "2 этажа",
    price: "3 600 000",
    time: "24 дня",
    person: "ivan, 1000 let",
    plowad: 102,
    kvadratura: "10.5м на 8м",
    path: slider1
  },
  {
    id: 4,
    comms: "kryto!",
    stars: 4,
    floors: 1,
    price: "3 600 000",
    time: 24,
    person: "ivan, 1000 let",
    plowad: 102,
    kvadratura: "10.5м на 8м",
    path: slider1
  },
]


export const navLinks = [
  {
    id: "main",
    title: "Главная",
    isSTR: true,
  },
  {
    id: "features",
    title: "Проекты",
    isSTR: false,
  },
  {
    id: "product",
    title: "Услуги",
    isSTR: true,
  },
  {
    id: "about",
    title: "Компания",
    isSTR: true,
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "ИИ в крестиках-ноликах жесть вообще!! Сложно блин. Сделай легче кусок пенопласта",
    name: "чел в коментах",
    title: "насчет Крестики-Нолики",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Нууу... 2048 это же база, сделай что-то другое.. Вот сделал бы РПГ на ДЖС, вот это да",
    name: "чел с общаги",
    title: "насчет 2048",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Крутой сайт, классный, ниче не понял, переделывай",
    name: "я надеюсь не вы",
    title: "я очень очень надеюсь пожалуйста",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Игр",
    value: "2+(2)",
  },
  {
    id: "stats-2",
    title: "Дней потрачено",
    value: "Много",
  },
  {
    id: "stats-3",
    title: "Пролито пота, мл",
    value: "230M+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

export const getstarted_bg = '../assets/get-started-bg.png'