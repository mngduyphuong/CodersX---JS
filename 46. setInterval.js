function countFrom (a,b){
    return new Promise(function (resolve, reject){
        var set = setInterval(function(){
            console.log(a);
            a++;
            if (a>b)
            {
                clearInterval(set);
                resolve();
            } 
        },100);
    });
}

countFrom(1,10)
    .then( ()=> console.log('Done'))
    .catch(() =>console.log('Error'));