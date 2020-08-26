function a(){
	console.log(a);
	var a = "Hello";
}

function b(){
	console.log(a);
	let a = "Hello"; // ReferenceError: b is not defined  
}

a();
b();

