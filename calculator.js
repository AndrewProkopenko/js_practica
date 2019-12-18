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
let labelCalc = document.querySelector('#label-calc'); 
let clearBtn = document.querySelector('#clear-btn');

let numberFirst = 0; // переменная хранящая значение первого вводимого числа
let numberSecond = 0;  // (нужна ли?) переменная хранящая значение второго вводимого числа
let result = 0; // переменная хранящая результат для вывода
 
let rewriteNumber = 0 ; // флаг очищения строки при новом вводимом символе
let reOperation = 0; // флаг повторной операции

let numbers = document.querySelectorAll('.numbers'); 
let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let times = document.querySelector('#times');
let divided = document.querySelector('#divided');
let equal = document.querySelector('#equal');


let operation = { 
    1: ' + ',
    2: ' - ', 
    3: ' * ',  
    4: ' / '
};
let operationCode; 

// перебор кнопок-цифр
numbers.forEach( (item, index) => { 
    let numbersProp = []; 
    numbersProp[index] = numbers[index].textContent;
    numbersProp[index] = parseInt(numbersProp[index])

    numbers[index].addEventListener('click', () => { 
        labelCalc.classList.add('label-calc-none');
        if(rewriteNumber == 0) { 
            inputMain.innerHTML += numbersProp[index];
        }
        else {
            inputMain.innerHTML = numbersProp[index];
        }
        rewriteNumber = 0;
    });
})
// перебор кнопок-цифр

function operationFunc(operationCode) { 
    
    if(reOperation == 0) { 
        numberFirst = inputMain.textContent;
        numberFirst = parseInt(numberFirst);
        inputMain.innerHTML = '';
        inputResult.innerText = numberFirst + operationCode 
    }
    else {
        numberSecond = inputMain.textContent;
        numberSecond = parseInt(numberSecond);

        switch(operationCode) {
        case ' + ':  result = numberFirst + numberSecond; break; 
        case ' - ':  result = numberFirst - numberSecond; break; 
        case ' * ':  result = numberFirst * numberSecond; break; 
        case ' / ':  result = numberFirst / numberSecond; break; 
        }
        numberFirst = result; 
        inputMain.innerHTML =  '';
        inputResult.innerText =  result + " + " ;
    }

        reOperation = 1; // флаг для повторного нажатия на кнопку операции 
}; 


// обработчики событий нажатия на кнопки операций + - * / =
plus.addEventListener('click', () => { 
    operationCode = operation[1];
    operationFunc (operationCode);         
});
minus.addEventListener('click', () => { 
    operationCode = operation[2];
    operationFunc (operationCode);          
});
times.addEventListener('click', () => { 
    operationCode = operation[3];
    operationFunc (operationCode);         
});
divided.addEventListener('click', () => { 
    operationCode = operation[4];
    operationFunc (operationCode);        
});
equal.addEventListener('click', equalFunction);
// обработчики событий нажатия на кнопки операций + - * / =




// функция при нажатии на кнопку = 
function equalFunction() {
  
    numberSecond= inputMain.textContent;
    numberSecond = parseInt(numberSecond);
    switch(operationCode) { 
        case ' + ':  result = numberFirst + numberSecond; break; 
        case ' - ':  result = numberFirst - numberSecond; break; 
        case ' * ':  result = numberFirst * numberSecond; break; 
        case ' / ' :  result = numberFirst / numberSecond; break; 
    }
    inputMain.innerHTML =  result;
    inputResult.innerText = '' ;
    rewriteNumber = 1;
    numberFirst = 0;
    numberFirst = 0; 
    reOperation = 0; 
}
// функция при нажатии на кнопку = 



// Clear
clearBtn.addEventListener('click' , () => { 
    inputMain.innerHTML = '';
    inputResult.innerHTML = '';
    result = 0
    operationCode = 0;
    reOperation = 0; 
    labelCalc.classList.remove('label-calc-none')
})