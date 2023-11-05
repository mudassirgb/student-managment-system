import Student_Master_Head from "./student_Master_Head.js";
export default class Student extends Student_Master_Head {
    constructor(studentName, phoneNumber, email, balance) {
        super(studentName, phoneNumber, email, balance);
    }
}
