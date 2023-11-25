var product_amount = 10;
var header_cart_products = [
    {
        image_no: 1,
        name: `MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch`,
        price: `400`,
    },
    {
        image_no: 7,
        name: 'Inateck 12.3-13 Inch MacBook Case Sleeve ',
        price: `230`,
    },
    {
        image_no: 14,
        name: `Laptop Privacy Screen for 13 inch  MacBook Pro & MacBook Air`,
        price: `580`,
    },
];

var jumbo_menu_products = [
    {
        image: `./assets/images/dummy_product/1.jpg`,
        name: `MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch`,
        price: `400`,
    },
    {
        image: `./assets/images/dummy_product/3.jpg`,
        name: 'Inateck 12.3-13 Inch MacBook Case Sleeve ',
        price: `230`,
    },
    {
        image: `./assets/images/dummy_product/8.jpg`,
        name: `Laptop Privacy Screen for 13 inch  MacBook Pro & MacBook Air`,
        price: `580`,
    },
    {
        image: `./assets/images/dummy_product/14.jpg`,
        name: `Case Sleeve Screen `,
        price: `700`,
    },
];

var product_categories = [
    {
        icon: `./assets/images/icons/bag.svg`,
        name: `Mobile Phones`,
    },
    {
        icon: `./assets/images/icons/mobile.svg`,
        name: `Mobile Phones`,
    },
    {
        icon: `./assets/images/icons/van.svg`,
        name: `Laptops & Computers`,
    },
    {
        icon: `./assets/images/icons/badge.svg`,
        name: `Tablets & E-reader`,
    },
]

function increment_cart(price_target){
    event.preventDefault();
    let input = event.currentTarget.previousElementSibling;
    input.value = parseInt(input.value) + 1;
    
    let price = document.getElementById(price_target);
    price.innerText = parseFloat(price.dataset.price) * input.value
}

function decrement_cart(price_target){
    event.preventDefault();
    let input = event.currentTarget.nextElementSibling;
    input.value = parseInt(input.value) - 1;

    let price = document.getElementById(price_target);
    price.innerText = parseFloat(price.dataset.price) * input.value
}