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

Promise.all([
    readPromise('test.txt'),
    readPromise('test.txt'),
])
    .then(function(value)
    {
        console.log(value);
    })
    .catch(function(err){
        console.log(err);
    })