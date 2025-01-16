// let result = 12<6
// if (result) {
//     console.log("условие выполнена");
// }else{
//     console.log("условие не выполнена");
// }


// let userName = prompt("Введите имя студента")
// let userAge = Number(prompt("Какой возрост"))

// let userStudent = confirm("Эпользователь студент ?")

// if(userStudent){
//     console.log("Пользователь студент");
// }
// else{
//     console.log("Пользователь не студент");
// }


//Создаёт текстовое поле
function getInput(placeholder, type, className){
    let input = document.createElement('input')
    input.placeholder = placeholder
    input.type = type
    input.classList.add(className)
    

    return input 
}
let modalWindow = document.createElement('div')
modalWindow.classList.add('modalWindow')

let h2 = document.createElement('h2')
h2.classList.add("modalTitle")
h2.textContent = "Спасибо за вашу регистрацию!"

let thenkBtn = document.createElement('button')
thenkBtn.textContent = "обращайся"
thenkBtn.classList.add('regBtn')

thenkBtn.onclick = function(){
    modalWindow.classList.remove('modalWindowShow')
    box.style.cssText = 'opacity:1' 
}


//Создаёт блок для тектсовых полей
let box = document.createElement('div')
box.classList.add("box")

//Создаёт заголовок
let title = document.createElement('h1')
title.classList.add('regTitle')
title.textContent = "Регистрация"

// Текстовые поля
let surNameWrap = document.createElement("div")
surNameWrap.classList.add("fill-wrap")
let surNameInp =  getInput("Фамилия", "text","text-fiels")
let surNameErrLabel = document.createElement('label')
surNameErrLabel.classList.add('err')

////////////////////////////////////////////////////

let NameWrap = document.createElement("div")
NameWrap.classList.add("fill-wrap")
let nameInp =  getInput("Имя", "text","text-fiels")
let NameErrLabel = document.createElement('label')
NameErrLabel.classList.add('err')

////////////////////////////////////////////////////

let ageWrap = document.createElement("div")
ageWrap.classList.add("fill-wrap")
let ageInp =  getInput("Возраст", "number","text-fiels")
let ageErrLabel = document.createElement('label')
ageErrLabel.classList.add('err')

//////////////////////////////////////////////////

let emaiWrap = document.createElement("div")
emaiWrap.classList.add("fill-wrap")
let emailInp =  getInput("Email", "email","text-fiels")
let emailErrLabel = document.createElement('label')
emailErrLabel.classList.add('err')

/////////////////////////////////////////////////


let passWrap = document.createElement("div")
passWrap.classList.add("fill-wrap")
let passInp =  getInput("Пароль", "password","text-fiels")
let passErrLabel = document.createElement('label')
passErrLabel.classList.add('err')

//////////////////////////////////////////////////




//создание согласия
let conditionWrap = document.createElement("div")
conditionWrap.classList.add("fill-wrap")
let conditionLabel = document.createElement("label")
conditionLabel.classList.add("conditionLabel")
let conditionInput = document.createElement('input')
conditionInput.type='checkbox'
let conditionSpan = document.createElement('span')
conditionSpan.textContent = "Согласны с условием"

let conditionErrLabel = document.createElement('label')
conditionErrLabel.classList.add('err')


conditionLabel.append(conditionInput,conditionSpan)
conditionWrap.append(conditionLabel,conditionErrLabel)

passWrap.append(passInp,passErrLabel)
emaiWrap.append(emailInp, emailErrLabel)
ageWrap.append(ageInp,ageErrLabel)
surNameWrap.append(surNameInp,surNameErrLabel)
NameWrap.append(nameInp,NameErrLabel)

// создание конпки
let regBtn = document.createElement("button")
regBtn.textContent = "Регистрация"
regBtn.classList.add('regBtn')

regBtn.onclick = function () {
    //получаем значения из инпутов с помощью клика
    let nameValue = nameInp.value
    let surNameValue = surNameInp.value
    let ageValue =  Number(ageInp.value)
    let emailValue = emailInp.value
    let passValue = passInp.value
    let conditionValue = conditionInput.checked

    let validationFlag = false
// проверка ввода двнных
    NameErrLabel.textContent =""
    if (nameValue.length <= 1) {
        NameErrLabel.textContent = 'не вверно ввели имя'
        validationFlag = true
    }
    
    if (nameValue === "") {
        NameErrLabel.textContent = 'Введите имя'
        validationFlag = true
    }

    ///////////////////////////////////
    surNameErrLabel.textContent = ""
    if (surNameValue.length <= 1) {
        surNameErrLabel.textContent = "не вверно ввели фамилию"
        validationFlag = true
    }
    
    if (surNameValue === "") {
        surNameErrLabel.textContent = "Введите фамилию"
        validationFlag = true
    }

    ///////////////////////////////////
    ageErrLabel.textContent = ""
    if (ageValue < 15) {
        ageErrLabel.textContent = "Нельзя, маленький"
        validationFlag = true
    }
    
    if (ageValue === 0) {
        ageErrLabel.textContent = "Введите возраст"
        validationFlag = true
    }

    ///////////////////////////////////
    emailErrLabel.textContent = ""
    if (emailValue.length <= 6) {
        emailErrLabel.textContent = "не вверно ввели электронный адрес"
        validationFlag = true
    }
    
    if (emailValue === "") {
        emailErrLabel.textContent = "Введите электронный адрес"
        validationFlag = true
    }

    ///////////////////////////////////
    passErrLabel.textContent = ""
    if
    (passValue.includes("_")===false){
        passErrLabel.textContent = 'слабый пароль добавь "_"'
        validationFlag = true
    }
    if (passValue.length <= 8) {
        passErrLabel.textContent = "слабый пароль"
        validationFlag = true
    }
    
    if (passValue === "") {
        passErrLabel.textContent = "Введите пароль"
        validationFlag = true
    }


    ///////////////////////////////////
    conditionErrLabel.textContent = ""
    if (conditionValue === false) {
        conditionErrLabel.textContent = "вы не согласились с пользовательским соглашением"
        validationFlag = true
    }

    if(validationFlag){
        return
    }


    box.style.cssText = 'opacity:0' 
    modalWindow.classList.add('modalWindowShow')
    nameValue =""
    surNameValue =""
    ageValue =""
    emailValue =""
    passValue =""
    conditionValue =""
  }
//Создаём поле для имени
box.append(
    title,
    NameWrap,
    surNameWrap,
    ageWrap,
    emaiWrap,
    passWrap, 
    conditionWrap,
    regBtn
   
)

modalWindow.append(h2,thenkBtn)
document.body.append(box,modalWindow)