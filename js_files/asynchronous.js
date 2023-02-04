// var getTodo= function(){
//     setTimeout(function(){
//         console.log("Server Response");
//     }
//         ,2000);
//     console.log("after setTimeout");    
// }
// getTodo();

// var getTodo1= function(){
//     //simulating server respinse delay using setTimeOut

//     setTimeout(function(){
//         return
//            { text:'Server response'};
        
//     },1000)
// }
// var data=getTodo1();
// console.log(data.text);

//with callback
var getTodo2=function(callback){
    setTimeout(function(){
        callback({text:'Server Response',name:'Ai'});
    },1000)

};

function printData(data){
    console.log(data.text);
    console.log(data.name);
}


getTodo2(printData);

//JSON - Javascript Object Notification


//[{name:"Ai",empId:101,dept:"IT"},
//{name:Ha,empId:102,dept:"Finance"}   
//]

//CSV:
//"Ai",101,"IT"

//XMLDocument:
//<name>Ai</name>
//<empId>101</empId>
//<dept>IT</dept>