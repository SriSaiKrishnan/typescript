function displayName(name: string, greeting: string = "Hello") : string {  
    return greeting + ' ' + name + '!';  
}  
console.log(displayName('JavaTpoint'));   //Returns "Hello JavaTpoint!"  
console.log(displayName('JavaTpoint', 'Hi'));   //Returns "Hi JavaTpoint!".  
console.log(displayName('Sachin'));    //Returns "Hello Sachin!"  