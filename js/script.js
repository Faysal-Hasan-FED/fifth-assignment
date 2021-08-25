// get price of different elements  using function

function getPrice(element, price) {
    const elementPrice = document.getElementById(element + '-price');
    const elementPriceText = elementPrice.innerText;
    elementPrice.innerText = price;
}

// total calculation function without promo code 

function calculateTotal() {
    const bestPrice = document.getElementById("best-price").innerText;
    const memoryPrice = document.getElementById("memory-price").innerText;
    const storagePrice = document.getElementById("storage-price").innerText;
    const deliveryPrice = document.getElementById("delivery-price").innerText;
    const price = parseInt(bestPrice) + parseInt(memoryPrice) + parseInt(storagePrice) + parseInt(deliveryPrice);
    const totalPrice = document.getElementById("total-price");
    const totalPriceText = totalPrice.innerText;
    totalPrice.innerText = price;
    const grandTotal = document.getElementById("grand-total");
    const grandTotalText = grandTotal.innerText;
    grandTotal.innerText = price;
}

//calculation after promo code 

document.getElementById("apply-button").addEventListener('click', function () {
    const promoCodeField = document.getElementById("promo-code-field");
    const promoCodeFieldText = promoCodeField.value;
    const discountCode = 'stevekaku';
    const grandTotal = document.getElementById("grand-total");
    const grandTotalText = grandTotal.innerText;
    const totalPrice = document.getElementById("total-price");
    const totalPriceText = totalPrice.innerText;
    const totalPriceAmount = parseInt(totalPriceText);
    // promo code checking 
    if (promoCodeFieldText == discountCode) {
        const grandTotalAmount = totalPriceAmount - (totalPriceAmount * (20 / 100));
        grandTotal.innerText = grandTotalAmount;
    }
    // clearing the input field
    promoCodeField.value = '';
})


// memory buttons event 

document.getElementById("primary-memory").addEventListener('click', function () {
    const primaryMemoryPrice = getPrice('memory', 0);
    calculateTotal();

})

document.getElementById("extra-memory").addEventListener('click', function () {
    const extraMemoryPrice = getPrice('memory', 180);
    calculateTotal();
})

// storage buttons event

document.getElementById("primary-storage").addEventListener('click', function () {
    const primaryStoragePrice = getPrice('storage', 0);
    calculateTotal();
})

document.getElementById("secondary-storage").addEventListener('click', function () {
    const secondaryStoragePrice = getPrice('storage', 100);
    calculateTotal();
})

document.getElementById("tertiary-storage").addEventListener('click', function () {
    const tertiaryStoragePrice = getPrice('storage', 180);
    calculateTotal();
})


// delivery option buttons event 

document.getElementById("delay-delivery").addEventListener('click', function () {
    const delayDeliveryPrice = getPrice('delivery', 0);
    calculateTotal();
})

document.getElementById("prime-delivery").addEventListener('click', function () {
    const primeDeliveryPrice = getPrice('delivery', 20);
    calculateTotal();
})
