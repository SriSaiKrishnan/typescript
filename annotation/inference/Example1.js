var x = 3;
var x = 10;
var y = "Hello";
x = y; // Compile-time Error: Type 'number' is not assignable to type 'string'  
function sum(x, y) {
    return x + y;
}
var Addition = sum(10, 20); // Correct  
var str = sum(10, 20); // Compiler Error   
