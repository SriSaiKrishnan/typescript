var Student = /** @class */ (function () {
    function Student(_empname, _rollNo) {
        this.EmpName = _empname;
        this.RollNo = _rollNo;
    }
    Student.prototype.showDetails = function () {
        console.log(this.RollNo + " : " + this.EmpName);
    };
    return Student;
}());
var obj = new Student("Sai", 001);
obj.showDetails();
