import slide1front from './slide1front.png'
import slide2front from './slide2front.png'
import slide3front from './slide3front.webp'
import slide1back from './slide1back.jpg'
import slide2back from './slide1back.jpg'
import slide3back from './slide3back.webp'

// products imports
import dream1 from './dream1.webp'
import dream2 from './dream2.webp'
import dream3 from './dream3.webp'
import coll1 from './coll1.webp'
import coll2 from './coll2.webp'

export const reviews = [
    "u don't need a rate from anyone guys <br> ur designs are undoubtly 10 outta 10",
    "I've just received the order <br> Too fkn dooooope bro <br> Words can't describe anything about it anymore",
    "honestly <br> your brand is the only brand that's doing something new",
    "The order has just arrived it's so niceeee <br> and great job guys for this design and quality",
    "Order helwww awiiii bsrhaaa size we quality we design we qualify ahsan men tshirt we bardo hastni fe design fa continue we htksro dunia aktar we aktar",
    "The order has arrived and its so cool and comfy too when i take a photo with it ill mention thank u and keep going guys",
    "Estalmt.... <br>  Khaterr w el material perfect.. <br> el package haga tanya bgd.. abd3too",
]

export const slides = [
    {
        name: "DreamChase White",
        describtion: "Made from premium, breathable fabric, it offers a soft feel against your skin and allows for unrestricted movement. With its modern aesthetic and tailored fit",
        img: slide1front,
        backImg: slide1back
    },
    {
        name: "DreamChase Gray",
        describtion: "Made from premium, breathable fabric, it offers a soft feel against your skin and allows for unrestricted movement. With its modern aesthetic and tailored fit",
        img: slide2front,
        backImg: slide2back
    },
    {
        name: "DreamChase Black",
        describtion: "Made from premium, breathable fabric, it offers a soft feel against your skin and allows for unrestricted movement. With its modern aesthetic and tailored fit",
        img: slide3front,
        backImg: slide3back
    },
]

export const products = [
    {
        product_name: "DreamChase Black Hoodie",
        product_img: dream1,
        product_sale: 42,
        product_price1: 1200,
        product_price2: 699,
        product_tag: ["dream", "latest"],
        product_index: 0
    },
    {
        product_name: "DreamChase White Hoodie",
        product_img: dream2,
        product_sale: 42,
        product_price1: 1200,
        product_price2: 699,
        product_tag: ["dream"],
        product_index: 1
    },
    {
        product_name: "DreamChase Gray Hoodie",
        product_img: dream3,
        product_sale: 33,
        product_price1: 900,
        product_price2: 599,
        product_tag: ["dream", "latest"],
        product_index: 2
    },
    {
        product_name: "Zen White",
        product_img: coll1,
        product_sale: "out",
        product_price1: 0,
        product_price2: 599,
        product_tag: ["coll"],
        product_index: 3
    },
    {
        product_name: "Ink Noir",
        product_img: coll2,
        product_sale: "out",
        product_price1: 0,
        product_price2: 599,
        product_tag: ["coll"],
        product_index: 4
    },
]