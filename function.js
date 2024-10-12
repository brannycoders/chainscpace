// function sum1(){
//     const a = 10;
//     const b = 5;

//     const sum = a + b;

//     console.log(sum);


// }

// function sum2(){
//     const a = 10;
//     const b = 5;
//     const sum = a + b;

//     return sum:
// }

// //call the function

// sum1();
// const result = sum2();
// console.log(result);


// //Function Expression

// const multiply = function(a, b){
//     return a + b
// };

// multiply(5, 5);

// //Arrow Function
// //const sub = (a, b) => a - b;

// const sub = (a, b) => {
//     return a + b;
// };
// console.log(sum(50, 10)); 


function sum1() {
    const a = 10;
    const b = 5;
    const sum = a + b;
    console.log(sum); // This logs the sum of a and b, which is 15
}

function sum2() {
    const a = 10;
    const b = 5;
    const sum = a + b;
    return sum; // Return statement ends with a semicolon, not a colon
}


// sum1(); // Calls sum1() and logs the sum (15)

// const result = sum2(); // Calls sum2(), which returns the sum
// console.log(result);   // Logs the returned value (15)


// const multiply = function(a, b) {
//     return a * b; // This now multiplies a and b instead of adding
// };

// console.log(multiply(5, 5)); // Logs 25



// const sub = (a, b) => {
//     return a - b; // Corrected to perform subtraction
// };

// console.log(sub(50, 10)); // Logs 40




function sum1() {
    const a = 10;
    const b = 5;
    const sum = a + b;
    console.log(sum); // Logs 15
}

function sum2() {
    const a = 10;
    const b = 5;
    const sum = a + b;
    return sum; // Returns 15
}

sum1(); // Logs 15
const result = sum2(); // Returns 15
console.log(result);   // Logs 15

// Function Expression
const multiply = function(a, b) {
    return a * b; // Multiplying instead of adding
};

console.log(multiply(5, 5)); // Logs 25

// Arrow Function
const sub = (a, b) => {
    return a - b; // Subtracting a from b
};

console.log(sub(50, 10)); // Logs 40

