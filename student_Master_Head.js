import chalk from "chalk";
import { Course } from "./course.js";
class Student_Master_Head {
    constructor(studentName, phoneNumber, email, balance) {
        this._balance = 0;
        this._course = [];
        this._payTutionFee = false;
        this._studentID = Student_Master_Head.studentIDGenerator++;
        this._studentName = studentName;
        this._phoneNumber = phoneNumber;
        this._email = email;
        this._balance = balance;
    }
    set course(givenCourse) {
        givenCourse.forEach((element) => {
            this._course.push(element);
        });
    }
    get course() {
        return this._course;
    }
    get studentID() {
        return this._studentID;
    }
    payCoursesFee() {
        let fee = 0;
        console.log("Selected Courses: ");
        this._course.forEach((element) => {
            console.log(`${element}: ${Course[element]}`);
            fee += Course[element];
        });
        console.log(`Total Bill: ${fee}`);
        if (fee > this._balance) {
            console.log(`
      \n${chalk.redBright("Insufficient Balance in your Account!!!")}
      Current Balance: ${chalk.yellowBright(this._balance)}
      Course Fee: ${chalk.yellowBright(fee)}
      Required Amount: ${chalk.cyanBright(fee - this._balance)}
      `);
        }
        else {
            console.log(chalk.greenBright("\nEnrolled in given courses successfully!!!"));
            this._balance -= fee;
            this._payTutionFee = true;
        }
    }
    addBalance(amount) {
        this._balance += amount;
    }
    viewBalance() {
        console.log(`Current Balnce: ${chalk.greenBright(this._balance)}`);
    }
    studentDetails() {
        return `
      ID: ${chalk.greenBright(this._studentID)}
      Name: ${chalk.greenBright(this._studentName)}
      Phone : ${chalk.greenBright(this._phoneNumber)}
      Email : ${chalk.greenBright(this._email)}
      Balance : ${chalk.greenBright(this._balance)}
      Courses : ${chalk.greenBright(this._course)}
      Paid Tuition Fee : ${chalk.greenBright(this._payTutionFee)}
      
      `;
    }
}
Student_Master_Head.studentIDGenerator = 70077000;
export default Student_Master_Head;
