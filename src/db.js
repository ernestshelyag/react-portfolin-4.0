import image1 from './assets/img1.jpg'
import image2 from './assets/img2.jpg'
import image3 from './assets/img3.jpg'
import image4 from './assets/img4.jpg'
import image5 from './assets/img5.jpg'
import image6 from './assets/img6.jpg'
import image7 from './assets/img7.jpg'

const images = [image1, image2, image3, image4, image5, image6, image7];

export default [
  {
    'num' : '#1',
    'title': 'Apetta',
    'text': 'Мой первый большой сайт. Федеральная сеть химчисток Apetta. Сайт делался очень давно, много раз дорабатывался, поэтому исходники могут не совпадать с оригиналом.',
    'link' : 'http://apetta.ru/',
    'github' : 'https://github.com/ernestshelyag/apetta',
    'img' : images[0]
  },
  {
    'num' : '#2',
    'title': 'Строительные экосистемы',
    'text': 'Сайт компании по установке септиков. Сайт достаточно большой, поэтому делал этот сайт совместно с другим фронтенд разработчиком (наставником). Здесь я впервые начал применять БЭМ.',
    'link' : 'https://stroekos.ru/',
    'github' : 'https://github.com/ernestshelyag/stroekos',
    'img' : images[1]
  },
  {
    'num' : '#3',
    'title': 'Рем-Тех',
    'text': 'Сайт компании по ремонту различных устройств. Мобильных телефонов, ноутбуков и прочего. Для этого сайта я разработал свой собственный Gulp шаблон, который потом использовал на многих других проектах.',
    'link' : 'http://remtechspb.ru/',
    'github' : 'https://github.com/ernestshelyag/remtech',
    'img' : images[2]
  },
  {
    'num' : '#4',
    'title': 'Rusforprof',
    'text': 'Веб-ресурс для обучению русскому языку представителей иностранных компаний. Здесь я поставил рекорд скорости, сделав весь фронтенд самостоятельно за 4 дня, т.к. горели сроки (нужно было срочно помочь другому верстальщику).',
    'link' : 'http://rusforprof.org/',
    'github' : 'https://github.com/ernestshelyag/rusforprof',
    'img' : images[3]
  },
  {
    'num' : '#5',
    'title': 'Проспект-Такси',
    'text': 'Небольщой, но красивый одностраничный сайт для компании по аренде такси бизнес класса. На этом сайте я добавил множество анимаций, которые придумал сам.',
    'link' : 'http://prospekt-taxi.ru/',
    'github' : 'https://github.com/ernestshelyag/prospect-taxi',
    'img' : images[4]
  },
  {
    'num' : '#6',
    'title': 'CisCoinLab',
    'text': 'Сайт для компании по страхованию биткоинов. Здесь я впервые использовал различные 3D анимаций. Пока не готов (в работе над оптимизацией и бекендом). Но его можно посмотреть перейдя по ссылке (в идеале на chrome и большом мониторе - 1920px).',
    'link' : 'https://ernestshelyag.github.io/coin/index.html',
    'github' : 'https://github.com/ernestshelyag/CisCoinLab',
    'img' : images[5]
  },
  {
    'num' : '#7',
    'title': 'Seafood',
    'text': 'Универсальный каталог для сайта по продаже морепродуктов. В настоящее время сайт, не активен, но макет и исходники можно посмотреть перейдя по ссылкам.',
    'link' : 'https://ernestshelyag.github.io/seafood/index.html',
    'github' : 'https://github.com/ernestshelyag/seafood',
    'img' : images[6]
  }
]
