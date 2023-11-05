
import chalk from "chalk";
import { Course } from "./course.js";

export default abstract class Student_Master_Head {
  private _studentID: number;
  private _studentName: string;
  private _phoneNumber: string;
  private _email: string;
  private _balance: number = 0;
  private _course: string[] = [];
  private _payTutionFee: boolean = false;
  static studentIDGenerator: number = 70077000;

  constructor(
    studentName: string,
    phoneNumber: string,
    email: string,
    balance: number
  ) {
    this._studentID = Student_Master_Head.studentIDGenerator++;
    this._studentName = studentName;
    this._phoneNumber = phoneNumber;
    this._email = email;
    this._balance = balance;
  }

  set course(givenCourse: string[]) {
    givenCourse.forEach((element) => {
      this._course.push(element);
    });
  }

  get course(): string[] {
    return this._course;
  }

  get studentID(): number {
    return this._studentID;
  }

  payCoursesFee(): void {
    let fee: number = 0;
    console.log("Selected Courses: ");
    this._course.forEach((element) => {
      console.log(`${element}: ${Course[element]}`);
      fee += Course[element];
    });
    console.log(`Total Bill: ${fee}`);
    if (fee > this._balance) {
      console.log(
        `
      \n${chalk.redBright("Insufficient Balance in your Account!!!")}
      Current Balance: ${chalk.yellowBright(this._balance)}
      Course Fee: ${chalk.yellowBright(fee)}
      Required Amount: ${chalk.cyanBright(fee - this._balance)}
      `
      );
    } else {
      console.log(
        chalk.greenBright("\nEnrolled in given courses successfully!!!")
      );
      this._balance -= fee;
      this._payTutionFee = true;
    }
  }

  addBalance(amount: number): void {
    this._balance += amount;
  }

  viewBalance(): void {
    console.log(`Current Balnce: ${chalk.greenBright(this._balance)}`);
  }

  studentDetails(): string {
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