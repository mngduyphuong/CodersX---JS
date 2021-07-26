var numbers = [1,2,3,4];
var result = numbers.find(function(x){
    return x%2===0;
});

//different to filter, will break when find the corret value, not running all the array