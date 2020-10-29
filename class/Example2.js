var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.display = function () {
        console.log("Student ID is: " + this.id);
        console.log("Student Name is: " + this.name);
    };
    return Student;
}());
var obj = new Student();
obj.id = 1;
obj.name = "Sai";
obj.display();
