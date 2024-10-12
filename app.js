var screenDiv = document.getElementsByClassName('screen')[0]
function getValue(value){
    switch(value){
        case '=':
            var res = eval(screenDiv.innerText);
            screenDiv.innerText = res;
            break;
        case '':
            screenDiv.innerText = '';
            break; 
        case 'back':
                screenDiv.innerText = screenDiv.innerText.slice(0,screenDiv.innerText.length-1);
                break;
        default:
            screenDiv.innerText += value;
  
    }

}

var num = 100;
console.log(`the result is: ${num+100} and the 
an
a

`) //template literals

// var btn = `<button><i>submit</i></button>`
// console.log(btn);
// screenDiv.innerHTML = btn;



var array = [0,1,2,3,4]
var array2 = [0,1,2,3,4]
var array3 = [...array, ...array2] //spread operators
 array3 = [100, ...array3]


console.log(array3);























// const buttons = document.querySelectorAll('button');
// const display = document.getElementById('result');
// let currentInput = '';

// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         const value = button.textContent;

//         if (value === '=') {
//             try {
//                 currentInput = eval(currentInput).toString();
//             } catch {
//                 currentInput = 'Error';
//             }
//         } else if (value === 'C') {
//             currentInput = '';
//         } else {
//             currentInput += value;
//         }

//         display.value = currentInput;
//     });
// });
