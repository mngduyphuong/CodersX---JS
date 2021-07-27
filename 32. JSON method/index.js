// var readlineSync = require('readline-sync');
// // Wait for user's response.
// var userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');
var fs = require("fs");
var readLineSync = require("readline-sync");
var students = fs.readFileSync('data.json', {encoding:'utf8'});
var studentList = JSON.parse(students);
var student = {};
var cont = true;


while (cont) {
  var questions =
    "Your question: \n 1. Show all students \n 2. Create a new Student \n 3. Save & exit";
  console.log(questions);
  var answer = parseInt(readLineSync.question("Choose your question: "));
  switch (answer) {
    case 1:
      var read = fs.readFileSync("data.json", "utf-8");
      read = JSON.parse(read);
      console.log(read);
      break;

    case 2:
      var name = readLineSync.question("Student name? ");
      var age = readLineSync.question("Student age? ");
      var student ={
          userName : name,
          userAge : age
      };
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
