var numbers = [
    {name:'A', quantity:2,price:10},
    {name:'B', quantity:3,price:20},
    {name:'C', quantity:4,price:30}
];


var result = numbers.reduce(function(currentTotal,product){
    return currentTotal + product.quantity*product.price;
},0);

