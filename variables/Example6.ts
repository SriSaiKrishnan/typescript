function a(){
	const VAR = 10;
	console.log(VAR);
}

function constTest(){  
  const VAR = 10;  
  console.log("Output: " +VAR);  // Output: 10  
  const VAR = 10;  
  console.log("Output: " +VAR);  //Uncaught TypeError: Assignment to constant variable  
}  
constTest();  

a();