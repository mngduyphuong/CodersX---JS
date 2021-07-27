function Cat(objColor,objName){
    this.stomach =[];
}
Cat.prototype.eat = function(mouse){
    this.stomach.push(mouse);
    mouse.die;
};

module.exports = Cat;