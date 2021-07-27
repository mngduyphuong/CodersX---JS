function Mouse(objColor,objName){
    this.dead = false;
    this.color = objColor;
    this.name = objName;
}
Mouse.prototype.die = function(){
    this.dead = true;
};
Mouse.prototype.sleep = function(){
    this.sleep = 'Sleeping';
};
module.exports = Mouse;