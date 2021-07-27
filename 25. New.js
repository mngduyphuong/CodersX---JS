function Mouse(objColor,objName){
    this.type = 'mouse';
    this.color = objColor;
    this.name = objName;
}
var mouse1 = new Mouse('white','teo');
var mouse2 = new Mouse('yellow','ti');
console.log(mouse1);
console.log(mouse2);