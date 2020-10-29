var Student = /** @class */ (function () {
    function Student(code, name) {
        this.studCode = code;
        this.studName = name;
    }
    Student.prototype.getGrader = function () {
        return "A+";
    };
    return Student;
}());
