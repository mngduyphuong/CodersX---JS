var Mouse = require('./mouse');
var Cat = require('./cat');
var mouse1 = new Mouse('white','teo');
var mouse2 = new Mouse('yellow','ti');
mouse1.sleep();
console.log(mouse1);
console.log(mouse2);
var Tom = new Cat;
Tom.eat(mouse1);