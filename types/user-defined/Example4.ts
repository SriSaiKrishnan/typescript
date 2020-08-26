class Student {
	
	EmpName: string;
	RollNo: number;

	constructor(_empname : string, _rollNo : number)
	{
	this.EmpName = _empname;
	this.RollNo = _rollNo;
	}

	showDetails()  
    {  
        console.log(this.RollNo + " : " + this.EmpName);  
    } 
}

let obj = new Student("Sai" , 001); 
    obj.showDetails();