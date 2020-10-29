class Student {
	
	id : number;
	name : string;

	constructor(id : number, name : string){
	this.id = id;
	this.name = name;
	}

	display():void {   
      console.log("Function displays Student ID is: "+this.id)   
      console.log("Function displays Student ID is: "+this.name)   
   }   
}

let obj = new Student(1, "Sai");
obj.display();