let buttonsContainer = document.querySelector(".buttons");
let display = document.querySelector("#display");
let resultDisplay = document.querySelector("#result_display");
let userInput = "";


document.onload =  display.value = 'Hi!';

// for(let i=0;i<buttons.length;i++){
    // button = buttons[i]; 
    let PreviousResult = 0;
    //Using event delegation
    buttonsContainer.addEventListener("click", function(event){
        let n = event.target.value;
        resultDisplay.innerText = 0;
        //For equal key
        if(n === '='){
            console.log(userInput);

            if(userInput == ''){
                display.value = 'Hi!';
            }
            else if(!isError(userInput)){
                let result = calculator(userInput);
                resultDisplay.innerText = result;
                PreviousResult = result;
                userInput = '';
            }
            else{
                resultDisplay.innerText = "You're bad at math😑";
            }
        }

        //For backspace key
        else if(n === 'backSpace'){
            let x = userInput.slice(0, -1);
            userInput = x;
            display.value = userInput;
        }
        //For pi
        else if(n === 'π'){
            // userInput += '*'+n;
            // display.value = userInput;
        }

        //for numbers, dot and symbols
        else if(event.target.classList[0] === "btn"){
            //dot

            //symbols
            //if(event.target.classList[1] === 'btnSymbol'){
                if(userInput === '' && /[\*\/+-]/.test(n)){
                    if(display.value === ''){
                        userInput += n;
                        display.value = userInput;
                    }
                    else{
                        userInput = PreviousResult + n;
                        display.value = userInput;
                    }
                    
                }
                // else{
                //     userInput += n;
                //     display.value = userInput;
                // }
            //}
            //Numbers
            else{
                userInput += n;
                display.value = userInput;
            }
        }
    });
// }

//press and hold backspace to clear
// window.addEventListener('mousedown', function(event) {
//   setTimeout(function() {
//     if(event.target.value === 'backSpace'){
//         userInput = 0;
//         display.value = userInput;
//     }
//   }, 800);

// });



function calculator(userInput){

    let numberRegex = /(\d+!?(\.\d+)?)/g;
    let signRegex = /[\*\/+-]/g;

    //Extracting numbers and signs from string
    let numbers = userInput.match(numberRegex);
    let signs = userInput.match(signRegex);
    console.log(numbers, signs);

    //if started with negative
    if(userInput[0] === '-'){
        numbers[0] *= (-1);
        signs.shift();
    }
    else if(userInput[0] === '+'){
        signs.shift();
    }
    else if(signs === null){
        signs = ['+'];
    }
    
    //First calculate factorials. (----CAN'T UNDERSTAND----this calculation is not inside the next for loop because then incase of -5!(suppose) it will multiply -1 first even if I do the factorial first!!)
    for(let i = 0; i < numbers.length; i++){
        //Factorial
        console.log(numbers[i])
        if(/!/.test(numbers[i])){
            const x = numbers[i].slice(0, -1);
            numbers[i] = x;
            console.log(Number(numbers[i])+'!');
            numbers[i] = factorial(numbers[i]);
            console.log(numbers, signs);
        }
    }

    //First calculate the multiplies and divisions
    for(let i=0;i<numbers.length;i++){
        
        //if a number is negative
        if(signs[i] === '-'){
            numbers[i+1] *= (-1);
        }

        if(signs[i] === '/'){
            numbers[i+1] = Number(numbers[i]) / Number(numbers[i+1]);
            numbers[i] = 0;
        }
        else if(signs[i] === '*'){
            numbers[i+1] = Number(numbers[i]) * Number(numbers[i+1]);
            numbers[i] = 0;
        }

    }
    console.log(numbers);

    //Add all the numbers
    sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += Number(numbers[i]);
    }
    return sum;
    
}


function factorial(n){
    n = Number(n);

    let fact = 1;
    for(let i = 1; i <= n; i++){
        fact *= i;
    }
    console.log(fact);
    return fact;
}


'2.'
'2...'

'*2'
'2*'
'**/'

'!2'
'*! !!'
'2.1!'
function isError(userInput){
    const e1 = /\.$/;
    const e2 = /\.(\d+)?\./;

    const e3 = /^[\*\/]/;
    const e4 = /[\*\/+-]$/;
    const e5 = /[\*\/+-]{2,}/;

    const e6 = /^!/;
    const e7 = /[\*\/!+-]!/;
    const e8 = /\.(\d+)?!/;

    const errors = [e1, e2, e3, e4, e5, e6, e7, e8];

    for(let i = 0; i < errors.length; i++){
        error = errors[i];
        if(error.test(userInput)) {
            console.log(error);    
            return true;
        }
    }
    return false;

}