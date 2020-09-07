function displayName(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return greeting + ' ' + name + '!';
}
console.log(displayName('JavaTpoint')); //Returns "Hello JavaTpoint!"  
console.log(displayName('JavaTpoint', 'Hi')); //Returns "Hi JavaTpoint!".  
console.log(displayName('Sachin')); //Returns "Hello Sachin!"  
