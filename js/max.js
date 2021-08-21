function memory(getValue, getInputValueName) {
    const extraMemory = document.getElementById(getInputValueName)
    extraMemory.innerText = parseInt(getValue)
    const memory = document.getElementById('extra-memory-cost').innerText
    const storage = document.getElementById('extra-storage-cost').innerText
    const delivery = document.getElementById('delivery-cost').innerText
    const base = document.getElementById('base-cost').innerText
    const sum = parseInt(memory) + parseInt(storage) + parseInt(delivery) + parseInt(base)

    document.getElementById('total-price').innerText = sum
    document.getElementById('final-amount').innerText = sum
}

// promoCode 
function promoCode() {
    const total = document.getElementById('total-price').innerText
    const discount = document.getElementById('discount').value
    if (discount == 'stevekaku') {
        document.getElementById('discount').value = total / 20
        document.getElementById('final-amount').innerText = total - document.getElementById('discount').value
        document.getElementById('discount').value = ''

    }
}



document.getElementById('16gb-memory').addEventListener('click', function () {
    memory(180, 'extra-memory-cost')

})
document.getElementById('8gb-memory').addEventListener('click', function () {
    memory(0, 'extra-memory-cost')

})
document.getElementById('256GB SSD').addEventListener('click', function () {
    memory(0, 'extra-storage-cost')

})
document.getElementById('512GB SSD').addEventListener('click', function () {
    memory(100, 'extra-storage-cost')

})
document.getElementById('1TB SSD').addEventListener('click', function () {
    memory(180, 'extra-storage-cost')

})
document.getElementById('free-delivery').addEventListener('click', function () {
    memory(0, 'delivery-cost')

})
document.getElementById('cost-delivery').addEventListener('click', function () {
    memory(20, 'delivery-cost')

})

document.getElementById('pomo-code').addEventListener('click', function () {
    promoCode()
})