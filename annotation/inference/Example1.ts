let x = 3;

var x = 10;
var y = "Hello"

x = y  // Compile-time Error: Type 'number' is not assignable to type 'string'  

function sum(x: number, y: number )  
{  
    return x + y;      
}  
let Addition: number = sum(10,20); // Correct  
let str: string = sum(10,20); // Compiler Error   