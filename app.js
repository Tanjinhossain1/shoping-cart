
function richNumber(isTrue,input,prices){
    const phonInput = document.getElementById(input+'-input');
    const phoneInputValue = phonInput.value;
    const chekNumber = parseInt(phoneInputValue)
    const price = document.getElementById(input+'-price');
    if(isTrue == true){
        phonInput.value = chekNumber + 1;
        const totalPrice =   phonInput.value  * prices
        price.innerText = totalPrice;
    }
    if(phoneInputValue > 0){
        if(isTrue == false){
        phonInput.value = chekNumber - 1;
        const totalPrice =   phonInput.value * prices
        price.innerText = totalPrice;
    }
}
    const subTotal = document.getElementById('sub-total');
    const phoneTotalPrice = document.getElementById('phone-price');
    const caseTotalPrice = document.getElementById('case-price');
    const totalSub = parseInt(phoneTotalPrice.innerText) + parseInt(caseTotalPrice.innerText);
    subTotal.innerText = totalSub;

    // tax section 
    const totalTax = document.getElementById('total-tax');
    const taxTotal = subTotal.innerText / 10;
    totalTax.innerText = taxTotal;
    // not total money
    const totalPrice = document.getElementById('total-price');
    const totalPriceValue = parseInt( subTotal.innerText) + parseInt(totalTax.innerText);
    totalPrice.innerText = totalPriceValue;
  }