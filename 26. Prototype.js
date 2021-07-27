function Mouse(objColor,objName){
    this.type = 'mouse';
    this.color = objColor;
    this.name = objName;
}
Mouse.prototype.sleep = function(){
    this.sleep = 'Sleeping';
};
var mouse1 = new Mouse('white','teo');
var mouse2 = new Mouse('yellow','ti');
mouse1.sleep();
console.log(mouse1);
console.log(mouse2);