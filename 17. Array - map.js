var rectangles = [
    {width:10 , height:5},
    {width:10 , height:20},
    {width:4 , height:16},
];
   var result = rectangles.map(function(x){
        var value = x.width*x.height;
        return value;
   });
result;