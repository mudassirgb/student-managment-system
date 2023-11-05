import studentProfiles from "./studentProfiles.js";
import Student from "./student.js";
import inquirer from "inquirer";
import chalk from "chalk";

export default async function fetchStudentProfile(): Promise<Student> {
  let studentProfileObject: Student | undefined;
  do {
    const studentProfile = await inquirer
      .prompt([
        {
          type: "input",
          name: "userStudent",
          message: "Student ID: ",
          validate(userStudent) {
            if (userStudent.trim().length === 0) {
              return chalk.redBright("Please, Enter Student ID!!!");
            } else if (isNaN(userStudent) || userStudent.length !== 8) {
              return chalk.redBright("Please, Enter Student ID!!!");
            } else {
              return true;
            }
          },
        },
      ])
      .then((student) => {
        studentProfileObject = studentProfiles.find(
          (element) => element.studentID === Number(student.userStudent)
        );
      });

    if (studentProfileObject === undefined) {
      console.log(chalk.redBright("\nAlert! Invalid Student ID\n"));
    }
  } while (studentProfileObject === undefined);
  return studentProfileObject;
}