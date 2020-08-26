let a = false;
let b = true;
console.log(a&&b);      /false
console.log(b&&true);   //true
console.log(b&&10);     //10 which is also 'true'
console.log(a&&'10');  //false

let a = false;
let b = true;
console.log(a||b);      //true
console.log(b||true);   //true
console.log(b||10);     //true
console.log(a||'10');   //'10' which is also 'true'

let a = 20;
let b = 30;
console.log(!true);    //false
console.log(!false);   //true
console.log(!a);       //false
console.log(!b);       /false
console.log(!null);    //true