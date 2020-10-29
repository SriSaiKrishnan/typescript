class Student {
	
	 id : number;
	 name : string;

	display():void {
	console.log("Student ID is: "+this.id);
	console.log("Student Name is: "+this.name);

	}
	}

	let obj = new Student();
	obj.id = 1;
	obj.name = "Sai";

	obj.display();
