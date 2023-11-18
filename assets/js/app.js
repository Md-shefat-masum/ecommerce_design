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