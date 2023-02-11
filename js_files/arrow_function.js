// const addTwonum= function(num1,num2){
//     return num1+num2;
// }



const addTwonum = (num1,num2)=>  num1+num2; // no need to add return

var result = addTwonum(2,3);
console.log(result);

const sqr =num =>num*num;

console.log(sqr(3));
const print =()=>"hi";

var obj ={
    id:20,
    counter: function(){
        setTimeout(function(){
            this.id++;
            console.log(this.id);
        }.bind(this),1000)
    }

}

obj.counter();

var obj1 ={
    id:20,
    counter: function(){
        setTimeout(()=>{this.id++;
        console.log(this.id);
    },1000)
}
}

obj1.counter();
