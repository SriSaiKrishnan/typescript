var currencySymbol = '$'

function showAmount(amount){
	var currencySymbol = '€' //Shadowing
	console.log(currencySymbol + " " + amount)
}

showAmount(50);