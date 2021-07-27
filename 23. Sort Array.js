var numbers = [
    {name:'A', quantity:2, price:10},
    {name:'B', quantity:5, price:20},
    {name:'C', quantity:4, price:30}
];


var sortPrice = numbers.sort(function(a,b)
{
    return b.price-a.price;
});
var sortQuantity = numbers.sort(function(a,b)
{
    return a.quantity-b.quantity;
});


console.log('====')
console.log(sortQuantity);
console.log(sortPrice);