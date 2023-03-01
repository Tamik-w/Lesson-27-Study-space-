// 2.0

// "use strict";

// function count(expression){
//     function getValues(expression) {
//         let values = [...expression]
//         return values;
//     }

//         let values = getValues(expression);
//         switch (values[1]) {
//             case '+':
//                 return showResult(sum(values));
//             case '-':
//                 return showResult(substruct(values));
//             case '*':
//                 return showResult(multiply(values));
//             case '/':
//                 return showResult(divide(values));
//         }
//         function showResult(value){
//             try{
//                 if(value === Infinity){
//                     throw new Error('Can\'t divide by zero')
//                 }else{
//                     return value
//                 }
//             }
//             catch(err){
//                 console.error('Error:', err.message)
//             }
//         }
// }

// console.log(count('5/0'))

// function sum(values){
//     return +values[0] + +values[2];
// }
// function substruct(values){
//     return values[0] - values[2];
// }
// function multiply(values){
//     return values[0] * values[2];
// }
// function divide(values){
//     return values[0] / values[2];
    
// }

//2.1

"use strict";

function count(expression){
    function getValues(expression) {
        let values = [...expression]
        return values;
    }

        let values = getValues(expression);
        switch (values[1]) {
            case '+':
                return showResult(sum(values));
            case '-':
                return showResult(substruct(values));
            case '*':
                return showResult(multiply(values));
            case '/':
                return showResult(divide(values));
        }
        function showResult(value){
            console.log(`count('${expression}')`)
            try{
                if(value === Infinity){
                    throw new Error('Can\'t divide by zero')
                }else{
                    return value
                }
                
            }
            catch(err){
                console.error('Error:', err.message)
                return 0
            }
            
        }
}

console.log(count('5/0'))

function sum(values){
    return +values[0] + +values[2];
}
function substruct(values){
    return values[0] - values[2];
}
function multiply(values){
    return values[0] * values[2];
}
function divide(values){
    return values[0] / values[2];
    
}