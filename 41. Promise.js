var fs = require('fs');

//Promise is used to avoid callback hell, below is a simple promise function
function readPromise (path){
    return new Promise(function(resolve,reject){
        fs.readFile(path, {encoding :'utf8'},function(err,data){
            if (err)
                reject(err);
            else
                resolve(data);
        });
    });
}

readPromise('test.txt')
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
        console.log(err);
    });