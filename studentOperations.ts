import fetchStudentProfile from "./fetchStudentProfile.js";
import studentProfiles from "./studentProfiles.js";
import Student from "./student.js";
import inquirer from "inquirer";
import chalk from "chalk";

export default async function userOperations(): Promise<void> {
  let quitStudentManagementSystem: boolean = false;
  do {
    const menu = await inquirer.prompt([
      {
        type: "list",
        name: "menuList",
        message: "Which operation you want to perform?",
        choices: [
          "Student Enrollment",
          "Enroll Courses",
          "Pay Tuition Fees",
          "Add Balance",
          "View Balance",
          "Show Status",
          "Quit Student Management System",
        ],
      },
    ]);

    switch (menu.menuList) {
      case "Student Enrollment":
        const studentEnrollment = await inquirer.prompt([
          {
            type: "input",
            name: "studentName",
            message: "Student Name: ",
            validate(studentname: any): string | boolean {
              if (studentname.trim().length === 0) {
                return chalk.redBright("Please, Enter the Student Name!!!");
              } else if (!isNaN(studentname)) {
                return chalk.redBright("Please, Enter valid Student Name!!!");
              } else {
                return true;
              }
            },
          },
          {
            type: "input",
            name: "studentPhone",
            message: "Student Phone Number: ",
            validate(studentPhone: any): string | boolean {
              if (studentPhone.trim().length === 0) {
                return chalk.redBright(
                  "Please, Enter the Student Phone Number!!!"
                );
              } else if (isNaN(studentPhone) || studentPhone.length !== 13) {
                return chalk.redBright(
                  "Please, Enter valid Student Phone Number!!!"
                );
              } else {
                return true;
              }
            },
          },
          {
            type: "input",
            name: "studentEmail",
            message: "Student Email: ",
            validate(studentEmail: any): string | boolean {
              if (studentEmail.trim().length === 0) {
                return chalk.redBright("Please, Enter the Student Email!!!");
              } else if (!isNaN(studentEmail)) {
                return chalk.redBright("Please, Enter valid Student Email!!!");
              } else {
                return true;
              }
            },
          },
          {
            type: "input",
            name: "studentbalance",
            message: "Student Balance: ",
            validate(studentbalance: any): string | boolean {
              if (studentbalance.trim().length === 0 || isNaN(studentbalance)) {
                return chalk.redBright(
                  "Please, Enter the Student Balance(in Numbers)!!!"
                );
              } else if (studentbalance.length < 5) {
                return chalk.redBright(
                  "Minimum Student Balance required is 10000!!!"
                );
              } else {
                return true;
              }
            },
          },
        ]);

        const student: Student = new Student(
          studentEnrollment.studentName,
          studentEnrollment.studentPhone,
          studentEnrollment.studentEmail,
          +studentEnrollment.studentbalance
        );
        studentProfiles.push(student);
        break;

      case "Enroll Courses":
        const studentChooseCourse = await fetchStudentProfile();
        const enrollCourses = await inquirer.prompt([
          {
            type: "checkbox",
            name: "courses",
            message: "Select Course: ",
            choices: [
              "Blockchain",
              "Cloud Native",
              "Artificial Intelligence",
              "5G and Network Programming",
              "Gnomics and Bioinformatics",
              "Web 3.0 and Metaverse Development",
            ],
            validate(courses: string[]): string | boolean {
              if (courses.length === 0) {
                return chalk.redBright("Please Select the Course!!!");
              } else {
                return true;
              }
            },
          },
        ]);

        studentChooseCourse.course = enrollCourses.courses;
        break;

      case "Pay Tuition Fees":
        const studentTuitionFee = await fetchStudentProfile();
        studentTuitionFee.payCoursesFee();
        break;

      case "Add Balance":
        const studentData = await fetchStudentProfile();
        await inquirer
          .prompt([
            {
              type: "input",
              name: "addBalance",
              message: "Enter the Amount: ",
              validate(addBalance: any): string | boolean {
                if (addBalance.trim().length === 0 || isNaN(addBalance)) {
                  return chalk.redBright(
                    "Please, Enter the Amount(in Numbers)!!!"
                  );
                } else if (addBalance.length < 5) {
                  return chalk.redBright(
                    "Minimum Amount you can add is 10000!!!"
                  );
                } else {
                  return true;
                }
              },
            },
          ])
          .then((balance) => {
            studentData.addBalance(+balance.addBalance);
          });
        break;

      case "View Balance":
        const viewStudentBalance = await fetchStudentProfile();
        viewStudentBalance.viewBalance();
        break;

      case "Show Status":
        const viewStudentData = await fetchStudentProfile();
        console.log(viewStudentData.studentDetails());
        break;

      case "Quit Student Management System":
        quitStudentManagementSystem = true;
        break;

      default:
        console.log(chalk.bold.italic.red("Something went wrong..."));
        break;
    }
    console.log("\n");
  } while (quitStudentManagementSystem === false);
}