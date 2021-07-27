var fs = require('fs');
var text = fs.readFileSync('30. Node built-in modules/text.txt',{encoding:'utf8'});
console.log(text);

//Checking the working directory of file
// console.log(process.cwd())

fs.writeFileSync('30. Node built-in modules/text2.txt', 'Testing write to file');