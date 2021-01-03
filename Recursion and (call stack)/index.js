let num = +prompt(`Hey, I'll help you to find a factorial. Please enter a number`, 5);
const factorial = (num) => {    
    if( num === 1 ){
        return num;
    }else {
        return num * factorial( num - 1 );
    }
}

alert(factorial(num));