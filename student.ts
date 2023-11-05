

import Student_Master_Head from "./student_Master_Head.js";

export default class Student extends Student_Master_Head {
  constructor(studentName: string, phoneNumber: string, email: string, balance: number) {
    super(studentName, phoneNumber, email, balance);
  }
}