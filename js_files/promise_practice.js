function myPromiseFunction(name){
    var promise = new Promise(function(resolve,reject){
        if(name=="Ai"){
           resolve("Promise resolved");
        }esle
        {
            reject("Promise rejected");
        }
    }

    )
    return promise;
}    

function resolvepromise(data){
    console.log(data);
}

function rejectpromise(data){
    console.log(data);
}

myPromiseFunction("Ai").then(resolvepromise).catch(rejectpromise);

myPromiseFunction("Ai1").then(
    data=>console.log(data),
    error=>console.log(data)
    
);
