// var readlineSync = require('readline-sync');
// // Wait for user's response.
// var userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');

var studentList = [];
var student = {};
var cont = true;
var fs = require("fs");
var readLineSync = require("readline-sync");

while (cont) {
  var questions =
    "Your question: \n 1. Show all students \n 2. Create a new Student \n 3. Save & exit";
  console.log(questions);
  var answer = parseInt(readLineSync.question("Choose your question: "));
  var students = fs.readFileSync('data.json', {encoding:'utf8'});
  //studentList = JSON.parse(students);
  console.log(studentList);
  switch (answer) {
    case 1:
      var read = fs.readFileSync("data.json", "utf-8");
      read = JSON.parse(read);
      console.log(read);
      break;

    case 2:
      student.userName = readLineSync.question("Student name? ");
      student.userAge = readLineSync.question("Student age? ");
      studentList.push(student);
      break;

    case 3:
      cont = false;
      var saveValue = JSON.stringify(studentList);
      fs.writeFileSync("data.json", saveValue);
      break;

    default:
      console.log("Please choose 1,2,3");
  }
}
