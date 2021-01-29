let buttonsContainer = document.querySelector(".buttons");
let display = document.querySelector("#display");
let resultDisplay = document.querySelector("#result_display");
let userInput = "";

document.onload =  display.value = 0;

// for(let i=0;i<buttons.length;i++){
    // button = buttons[i]; 
    
    //Using event delegation
    let dotUsed = false;
    buttonsContainer.addEventListener("click", function(event){
        let n = event.target.value;
        
        if(n === '='){
            console.log(userInput);

            if(userInput == ''){
                display.value = 0;
            }
            else if(userInput[0].match(/[\d+-]/)){
                resultDisplay.innerText = calculator(userInput);
                userInput = '';
            }
            else{
                resultDisplay.innerText = "Invalid input";
                userInput = '';
            }
            dotUsed = false;
        }
        
        else if(n === 'backSpace'){
            let x = userInput.slice(0, -1);
            userInput = x;
            display.value = userInput;
        }
        else if(n === 'π'){
            userInput += '*'+n;
            display.value = userInput;
        }
        else if(event.target.classList[0] === "btn"){
            if(n === '.' && !dotUsed){
                userInput += n;
                display.value = userInput;
                dotUsed = true;
            }
            if(event.target.classList[1] === 'btnSymbol'){
                dotUsed = false;
            }
            if(n !== '.'){
                userInput += n;
                display.value = userInput;
            }
        }
    });
// }

//press and hold backspace to clear
window.addEventListener('mousedown', function(event) {
  setTimeout(function() {
    if(event.target.value === 'backSpace'){
        userInput = 0;
        display.value = userInput;
    }
  }, 800);

});



function calculator(userInput){

    let numberRegex = /(\d+(\.\d+)?)/g;
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