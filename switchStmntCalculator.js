
// lets create a simple calculator using switch statement
let result;

// Take inputs from the User!
let firstNumber = +prompt(`Enter first number :`);
let lastNumber = +prompt(`Enter last number :`);

// Take operator input from the User!
let operator = prompt(`Enter an operator (either +, -, * or /): `);

// Apply switch operation to make it smart!
switch(operator) {
    
    // first Case!
    case '+':
        result = firstNumber + lastNumber;
        alert(`${firstNumber} ${operator} ${lastNumber} = ${result}`);
        alert(`You done a great job. BOOM!!`);
        // break point || to terminate the function
        break;
        // second Case!
    case '-':
        result = (firstNumber - lastNumber);
        alert(`${firstNumber} ${operator} ${lastNumber} = ${result}`);
        alert(`You done a great job. BOOM!!`)
        // break point || to terminate the function
        break; 
        // third Case!
    case '*':
        result = firstNumber * lastNumber;
        alert(`${firstNumber} ${operator} ${lastNumber} = ${result}`);
        alert(`You done a great job. BOOM!!`)
        // break point || to terminate the function
        break;
        // forth Case!
    case '/':
        result = firstNumber / lastNumber;
        alert(`${firstNumber} ${operator} ${lastNumber} = ${result}`);
        alert(`You done a great job. BOOM!!`)
        // break point || to terminate the function
        break;

    // default
    default:
        alert(`Invalid value`);
        // break point || to terminate the function
        break;
    
};
// You done a great job.!! BOOM..!!!
// ------------------------------------------ //
