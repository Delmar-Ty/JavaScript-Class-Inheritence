class Student { //First class aka the parent
        constructor(first, last, age, grade, school) {
            this.first = first;
            this.last = last;
            this.age = age;
            this.grade = grade;
            this.school = school;
        }

        displayInfo() {
            console.log(this.first);
            console.log(this.last);
            console.log(this.age);
            console.log(this.grade);
            console.log(this.school);
        };
};

//Making new Student Object
var s1 = new Student('Delmar', 'Schrock', 16, 11, 'Home');
s1.displayInfo();

//Second class aka the child
class Wm extends Student {
    constructor(first, last, age, grade, school, program, session) {
        super(first, last, age, grade, school);
        this.program = program;
        this.session = session;
    }
    displayStudent() {
        this.displayInfo();
        console.log(this.program);
        console.log(this.session);
    }
}

//Making a new object using the Wm class which inherited the Student class
var WmS = new Wm(s1.first, s1.last, s1.age, s1.grade, s1.school, 'Coding', 'Two');
WmS.displayStudent();