function myAsyncFunction(name){
    var promise = new Promise(function(resolve,reject){
        if(name=="Ai")
            resolve("Promise resolved");
        else
            reject("Promise rejected");    
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
    // //first way
    // myAsyncFunction("Ai1").then(resolvepromise).catch(rejectpromise);

    // //second way
    // myAsyncFunction("Ai").then(function(data){
    //     console.log(data);
    // }
    // ).catch(function(data){
    //     console.log(data);
    // }
    // )

    // with arrow function
    myAsyncFunction("Ai1").then(data=>
    console.log(data)).catch(data=>console.log(data));