import { slider1, slider2, slider3 } from "../assets"
/*
                                    Тип помещения       Тип материала  //titles нажимаешь и меняются меню подпунктов и остальное
                                   Офис    Дом   Помещение     Магазин  //pucnkts 
                                   Офис приветствие       Офис описание  //greetings    desckriptions
                                           *слайдер картинок*
*/
export const services_info = [
    {
      id: 1,
      name: "otdelka",
      titles: {                                                        //Типы(Помещения/Материала)
        title1:"Типы помещения", 
        title2:"Типы материала"
      }, 
      punckts: {                                                       //Пункты подменю
        title1:{                                                       //Офис   Дом   Помещение   Магазин
          punckt1:"Офис",                                              //
          punckt2:"Дом",
          punckt3:"Квартира",
          punckt4:"Магазин"
        }, 
        title2:{
          punckt1:"Арболит",
          punckt2:"Айболит",
          punckt3:"Хуйболит",
        }
      },
      greetings: {
        title1:{                                                       //Офис   Дом   Помещение   Магазин
          punckt1:"Офис приветствие",                                              
          punckt2:"Дом приветствие",
          punckt3:"Помещение приветствие",
          punckt4:"Магазин приветствие"
        }, 
        title2:{
          punckt1:"Арболит приветствие",
          punckt2:"Айболит приветствие",
          punckt3:"Хуйболит приветствие",
        }
      },
      desckriptions: {
        title1:{                                                       //Офис   Дом   Помещение   Магазин
          punckt1:"Офис описание",                                              
          punckt2:"Дом описание",
          punckt3:"Помещение описание",
          punckt4:"Магазин описание"
        }, 
        title2:{
          punckt1:"Арболит описание",
          punckt2:"Айболит описание",
          punckt3:"Хуйболит описание",
        }
      },
      photos:{
        title1:{
          punckt1:  {
            sliders_img: [
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
          },
          punckt2:{
            sliders_img: [
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
            ]
          },
          punckt3:{
            sliders_img: [
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
          },
          punckt4:{
            sliders_img: [
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
          },
        },
        title2:{
          punckt1:  {
            sliders_img: [
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
          },
          punckt2:{
            sliders_img: [
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
          },
          punckt3:{
            sliders_img: [
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
          },
        }
      }
    },
    {
        id: 2,
        name: "elektrika",
        titles: {                                                        //Типы(Помещения/Материала)
          title1:"Типы помещения", 
          title2:"Типы материала"
        }, 
        punckts: {                                                       //Пункты подменю
          title1:{                                                       //Офис   Дом   Помещение   Магазин
            punckt1:"Офис",                                              //
            punckt2:"Дом",
            punckt3:"Помещение",
            punckt4:"Магазин"
          }, 
          title2:{
            punckt1:"Арболит",
            punckt2:"Айболит",
            punckt3:"Хуйболит",
          }
        },
        greetings: {
          title1:{                                                       //Офис   Дом   Помещение   Магазин
            punckt1:"Офис приветствие",                                              
            punckt2:"Дом приветствие",
            punckt3:"Помещение приветствие",
            punckt4:"Магазин приветствие"
          }, 
          title2:{
            punckt1:"Арболит приветствие",
            punckt2:"Айболит приветствие",
            punckt3:"Хуйболит приветствие",
          }
        },
        desckriptions: {
          title1:{                                                       //Офис   Дом   Помещение   Магазин
            punckt1:"Офис описание",                                              
            punckt2:"Дом описание",
            punckt3:"Помещение описание",
            punckt4:"Магазин описание"
          }, 
          title2:{
            punckt1:"Арболит описание",
            punckt2:"Айболит описание",
            punckt3:"Хуйболит описание",
          }
        },
        photos:{
          title1:{
            punckt1:  {
              sliders_img: [
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
            },
            punckt2:{
              sliders_img: [
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
              ]
            },
            punckt3:{
              sliders_img: [
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
            },
            punckt4:{
              sliders_img: [
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
            },
          },
          title2:{
            punckt1:  {
              sliders_img: [
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
            },
            punckt2:{
              sliders_img: [
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
            },
            punckt3:{
              sliders_img: [
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
            },
          }
        }
    } 
  ]