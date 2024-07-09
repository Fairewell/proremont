import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star } from "../assets";
import { FaVk, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

//bg-${button.isHovered ? button.hover_bg : button.bg}  text-${button.isHovered ? button.hover_text : button.text_color}
export const btns = [
  {
    id: 1,
    title: "hehe",
    text: "Оформить заявку",
    bg: "black",
    text_color: "white",
    hover_bg: "orange", 
    hover_text: "black",
    isHovered: true,
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

export const navLinks = [
  {
    id: "home",
    title: "Главная",
  },
  {
    id: "features",
    title: "Проекты",
  },
  {
    id: "product",
    title: "Услуги",
  },
  {
    id: "clients",
    title: "Компания",
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