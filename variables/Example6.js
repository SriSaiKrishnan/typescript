function a() {
    var VAR = 10;
    console.log(VAR);
}
function constTest() {
    var VAR = 10;
    console.log("Output: " + VAR); // Output: 10  
    var VAR = 10;
    console.log("Output: " + VAR); //Uncaught TypeError: Assignment to constant variable  
}
constTest();
a();
