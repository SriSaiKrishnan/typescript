var Student = /** @class */ (function () {
    function Student(id, name) {
        this.id = id;
        this.name = name;
    }
    Student.prototype.display = function () {
        console.log("Function displays Student ID is: " + this.id);
        console.log("Function displays Student ID is: " + this.name);
    };
    return Student;
}());
var obj = new Student(1, "Sai");
obj.display();
