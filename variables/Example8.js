function equal() {
    var a = 10;
    var b = 20;
    console.log(a == b);
    console.log(a == 10);
    console.log(10 == '10');
}
function typeEqual() {
    var a = 10;
    var b = 20;
    console.log(a === b);
    console.log(a === 10);
    console.log(10 === '10');
}
function notEqual() {
    var a = 10;
    var b = 20;
    console.log(a != b);
    console.log(a != 10);
    console.log(10 != '10');
}
function typeNotEqual() {
    var a = 10;
    var b = 20;
    console.log(a !== b);
    console.log(a !== 10);
    console.log(10 !== '10');
}
function greaterThan() {
    var a = 10;
    var b = 20;
    console.log(a > b);
    console.log(a > 10);
    console.log(10 > '10');
}
function greaterThanEqual() {
    var a = 10;
    var b = 20;
    console.log(a >= b);
    console.log(a >= 10);
    console.log(10 >= '10');
}
function lesserThan() {
    var a = 10;
    var b = 20;
    console.log(a < b);
    console.log(a < 10);
    console.log(10 < '10');
}
function lesserThanEqual() {
    var a = 10;
    var b = 20;
    console.log(a <= b);
    console.log(a <= 10);
    console.log(10 <= '10');
}
equal();
typeEqual();
notEqual();
typeNotEqual();
greaterThan();
greaterThanEqual();
lesserThan();
lesserThanEqual();
