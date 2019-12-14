// Анимация нажатия кнопок
let btn = document.querySelectorAll('.calculator-content span'); 
btn.forEach( (item, index) => { 
    item.addEventListener('mousedown', () => { 
        item.classList.add('click-animation');
        item.addEventListener('mouseout', () => { 
            item.classList.remove('click-animation');
        })
    })
    item.addEventListener('mouseup', () => { 
        item.classList.remove('click-animation');
    })
})
// Анимация нажатия кнопок


let inputMain = document.querySelector('.input-main');
let inputResult = document.querySelector('.input-result');
let numberFirst = 0; // переменная , хранящая значение первого вводимого числа
let numberSecond = 0;  // (нужна ли?) переменная , хранящая значение второго вводимого числа
let result = 0 ;  // переменная , хранящая результат для вывода

// numder7 - элемент обрабатывающий клик по кнопке 7
// number7prop - переменная , хранящяя значение элемента number7
let number7 = document.querySelector('#num7')
let number7prop = document.querySelector('#num7').textContent;
number7prop = parseInt(number7prop); 

number7.addEventListener('click', (item) => { 
    // console.log(number7prop)
    inputMain.innerHTML += number7prop;
})



// sum  - элемент обрабатывающий клик по кнопке +
// вместо переменной операция сложения будет в функции по умолчанию 
let sum = document.querySelector('#sum')
sum.addEventListener('click', (item) => { 
    numberFirst = inputMain.textContent;
    numberFirst = parseInt(numberFirst);
    console.log(numberFirst);
    inputMain.innerHTML = '';
    inputResult.innerText = numberFirst + ' + ' 
})


let equal = document.querySelector('#equal')
equal.addEventListener('click', () => { 
    numberSecond= inputMain.textContent;
    numberSecond = parseInt(numberSecond);
    result = numberFirst + numberSecond; 
    inputMain.innerHTML =  result;
    inputResult.innerText = '' ;
    console.log(result);
})

let clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click' , () => { 
    inputMain.innerHTML = '';
})