let regex1 = /([+-]?\d+)([\/\*+-])([+-]?\d+)?/g;
let regex2 = /([\*\/+-]?\d+)/g;

let userInput = "1+2";
let match1 = userInput.match(regex1);
let match2 = userInput.match(regex2);


function check(x){
    console.log(x[0])
    // number1 = Number(x);
    // number2 = Number(z);
    // if(y === '+') console.log(number1 + number2);
    // if(y === '-') console.log(number1 - number2);
    // if(y === '*') console.log(number1 * number2);
    // if(y === '/') console.log(number1 / number2);
}
check(match1);

function calculate(x){
    console.log(x)
    sum = 0;
    while(x.length){
        console.log("fv = ", x[0]);
        if(x[0].indexOf('+') > -1) sum += Number( x.shift());
        else if(x[0].indexOf('*') > -1) sum *= Number(x.shift().slice(1));
        else if(x[0].indexOf('/') > -1) sum /= Number(x.shift().slice(1));
        else sum += Number( x.shift());
        //console.log(sum);
    }
    return sum;
}

// function calculate(x){
//     console.log(x)
//     sum = 0;
//     for(let i=0;i<x.length;i++){
//         console.log("v = ", x[i]);
//         if(x[i].search(/\*\//) > -1 && (x[i-1].search(/[+-]/) > -1 || x[i-1].search(/[\*\/]/) > -1 )) {
//             if(* +){

//             }
//             else if(* -){

//             }
//             else if(/ +){

//             }
//             else if(/ -){
                
//             }
//             sum += Number(x[i])*Number(x[i-1].slice(1));
//         }
//         //else if(x[i].indexOf('-') > -1) sum += Number( x[i]);
        
//     }
//     return sum;
// }

console.log("sum = ", calculate(match2));


let input = "-12 - 2 * 3 *3*4-8"
function calculator(userInput){

    let numberRegex = /(\d+)/g;
    let signRegex = /[\*\/+-]/g;

    //Extracting numbers and signs from string
    let numbers = userInput.match(numberRegex);
    let signs = userInput.match(signRegex);
    console.log(numbers, signs);

    //if started with negative
    if(userInput[0] === '-'){
        console.log("started with negative")
        numbers[0] *= (-1);
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

console.log(calculator(input));        




// if((signs[i] == '*' || signs[i] == '/') && (signs[i-1] == '*' || signs[i-1] == '/')){
    //     numbers[i] = 0;
        //     numbers[i-1] = 0;
        // }



    // if(signs[i-1] === '-') {
    //     let j = i;
    //     while(true){
    //         if(numbers[j] !== 0){
    //             numbers[j] *= (-1);
    //             break;
    //         }
    //         j++;
    //     }
    //     }