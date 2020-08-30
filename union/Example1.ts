function display (value : number|string){
	if( typeof(value) == "number" ){
		console.log( "The given Numeric Value is " + value);
	}else if( typeof(value == "string")){
	console.log( "The given String value is " + value)
	}
}

display(123);
display("Hello");