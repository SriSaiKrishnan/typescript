class Shape {
	Area : number

	constructor(area : number){
	this.Area = area;
	}
}

class Circle extends Shape {
	display() : void{
	console.log("Area of Circle" + this.Area);
	}
}

let obj = new Circle(12);
obj.display();