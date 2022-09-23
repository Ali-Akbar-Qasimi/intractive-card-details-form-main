let nameInput = document.querySelector('.name')
let cardNumberInput = document.querySelector('.card-number')
let monthInput = document.querySelector('.month')
let yearInput = document.querySelector('.year')
let cvcInput = document.querySelector('.cvc')

let cardName = document.querySelector('.card-holder-name')
let cardNumber = document.querySelector('.front-number')
let cardMonthDate = document.querySelector('.month-date')
let cardYearDate = document.querySelector('.year-date')
let cardcvcDate = document.querySelector('.back-cvc')

let dateError = document.querySelector('.date-error')
let nameError = document.querySelector('.name-error')
let numberError = document.querySelector('.number-error')
let cvcError = document.querySelector('.cvc-error')

let confirmButton = document.querySelector('.form-button')
let continueButton = document.querySelector('.continue')
let form = document.querySelector('.form')
let completeSection = document.querySelector('.complete-page')

nameInput.addEventListener('input',()=>{
    cardName.textContent = nameInput.value.toUpperCase()
    if(nameInput.value === null || nameInput.value === ''){
        nameInput.classList.add('bordered')
        nameError.textContent = 'can\'t be blank'
    }else{
        nameError.textContent = ''
        nameInput.classList.remove('bordered')
    }
})

cardNumberInput.addEventListener('input',()=>{
    cardNumber.textContent = cardNumberInput.value
    if(cardNumberInput.value === null || cardNumberInput.value === ''){
        cardNumberInput.classList.add('bordered')
        numberError.textContent = 'can\'t be blank'
     }
})
cardNumberInput.addEventListener('keypress',(e)=>{
    let x = e.which || e.keycode
    const letters = /[a-zA-Z]/g;
    const found = cardNumberInput.value.match(letters);
    if(found){
        numberError.textContent = 'Wrong format, numbers only'
        cardNumberInput.classList.add('bordered')
    }else{
        numberError.textContent = ''
        cardNumberInput.classList.remove('bordered')
    }
    if(x >= 48 && x <= 57){
        numberError.textContent = ''
        cardNumberInput.classList.remove('bordered')
        if(found){
            cardNumberInput.classList.add('bordered')
            numberError.textContent = 'Wrong format, numbers only'
        }
        return true
    }else if(!(x >= 48 && x <= 57)){
        cardNumberInput.classList.add('bordered')
        numberError.textContent = 'Wrong format, numbers only'
        if(x === 32 && !found ){
            numberError.textContent = ''
            cardNumberInput.classList.remove('bordered')
        }
        return false
    }else{
        numberError.textContent = ''
        cardNumberInput.classList.remove('bordered')
    }

})

monthInput.addEventListener('input',()=>{
    cardMonthDate.textContent = monthInput.value
    if(monthInput.value === null || monthInput.value === ''){
        monthInput.classList.add('bordered')
        dateError.textContent = 'Can\'t be blank'
    }else if(parseInt(monthInput.value) > 12){
        monthInput.classList.add('bordered')
        dateError.textContent = 'please enter a proper month or year'
    }else{
        dateError.textContent = ''
        monthInput.classList.remove('bordered')

    }
})

yearInput.addEventListener('input',()=>{
    cardYearDate.textContent = yearInput.value
    if(yearInput.value === null || yearInput.value === ''){
        yearInput.classList.add('bordered')
        dateError.textContent = 'Can\'t be blank'
    }else if(parseInt(yearInput.value) > 99){
        yearInput.classList.add('bordered')
        dateError.textContent = 'please enter a proper month or year'
    }else{
        dateError.textContent = ''
        yearInput.classList.remove('bordered')

    }
})

cvcInput.addEventListener('input',()=>{
    cardcvcDate.textContent = cvcInput.value
    if(cvcInput.value === null || cvcInput.value === ''){
        cvcInput.classList.add('bordered')
        cvcError.textContent = 'can\'t be blank'
    }else if(cvcInput.value.length > 3){
        cvcError.textContent = 'Enter a proper cvc'
        cvcInput.classList.add('bordered')
    }else{
        cvcError.textContent = ''
        cvcInput.classList.remove('bordered')
    }
})

confirmButton.addEventListener('click',()=>{
    form.style.display = 'none'
    completeSection.style.display = 'flex'
})

continueButton.addEventListener('click',()=>{
    form.style.display = 'block'
    completeSection.style.display = 'none'
    nameInput.value = ''
    cardNumberInput.value = ''
    cvcInput.value = ''
    monthInput.value = ''
    yearInput.value = ''
})