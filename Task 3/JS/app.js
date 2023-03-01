"use strict";

function count(expression){
    function getValues(expression) {
        let values = [...expression]
        return values;
    }
    let values;
    try{
        let data = Values(expression);
        data = values
    }catch(error){
        console.log(error.name + ': ' + error.message)
        values = (0, '+', 0)
    }
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
            return value
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

