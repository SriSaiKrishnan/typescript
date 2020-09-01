let empName : string = "Sai Krishnan";
let empComp : string = "Blackboard Inc";

//Pre ES6

let empDetail1 : string = empName + " " +  empComp;

//Post ES6

let empDetail2 : string = `${empName} ${empComp}`;

console.log(empDetail1);
console.log(empDetail2);
