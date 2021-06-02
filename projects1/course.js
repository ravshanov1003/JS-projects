class Course {
    constructor(courseName, students, numberOfStudents) {
        this.courseName = courseName;
        this.students = students;
        this.numberOfStudents = numberOfStudents;
    }
    getCourseName() {
        return this.courseName;
    }
    getStudents() {
        return this.students
    }
    addStudent(studentName) {
        this.students.push(studentName);
        this.numberOfStudents++;
    }
    dropStudent(studentName) {
        // for (let i = 0; i <= this.numberOfStudents; i++) {
        //     if (this.students[i] === studentName) {
        //         delete this.students[i]
        //     }
        // }
        this.students = this.students.filter((student) => student !== studentName)
        this.numberOfStudents--;
    }
    findStudent(studentName) {
        // let found
        // for (let i = 0; i <= this.numberOfStudents; i++) {
        //     if (this.students[i] === studentName) {
        //         found = this.students[i]
        //     }
        // }
        // if (found) {
        //     return found
        // } else return "Student not found"

        let index = this.students.indexOf(studentName);
        if (index !== -1) {
            return this, this.students[index];
        } else return "Student not found"
    }
}
const course = new Course("MERN", [], 0)
console.log(course.getCourseName())
course.addStudent("Jasur");
course.addStudent("Jamshid");
course.addStudent("Bekhruz");
console.log(course.getStudents())
console.log(course.findStudent("Jasur"))