var numbers = [
    'Tom','Bill','Kim'
];


var result = numbers.reduce(function(currentTotal,name){
    return currentTotal+'<'+name+'>';
},'');


result;