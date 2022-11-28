//normal function
var arr = [12,13,14,15,16];
var result =[];
function odd(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
           result.push(arr[i]);
        }
    }
    return result;
}
console.log(odd(arr));

//anonyomus function
var arr = [12,13,14,15,17,19,21]
var result =[];
var odd = function(arr){
     for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
           result.push(arr[i]);
        }
    }
    return result;
}

console.log(odd(arr));

//IIFE:
( function odd(arr){
  var result =[];
        for(var i=0;i<arr.length;i++){
            if(arr[i]%2!=0){
               result.push(arr[i]);
            }
        }
      console.log (result);
    }
   )([12,13,14,15,17,19,21])

//arrow functions: 
var odd = (arr)=>{
    var result =[];
        for(var i=0;i<arr.length;i++){
            if(arr[i]%2!=0){
               result.push(arr[i]);
            }
        }
        return result;
}
console.log(odd([12,13,14,15,17,19,21]))

//function without parameter
function greet(){
    console.log("welcome");
}
// greet();
//template literals
var a = 10;
var b= 20;
console.log(`the sum of a and b = ${a+b}`);
//spread operator : converts a string into character array
//synatx: ...
//example1
var arr=["guvi"]
console.log(...arr);
//example 2: 
var arr1=["bob","join","sofia"]
var arr2 = ["rupan" , "guvi"]
var arr3 = [...arr2 , ...arr1];
console.log(arr3)
//rest parameter : it is used inside the function
//to consider remaining values
function foo(...rest){
    var sum =0;
    for(var i=0;i<rest.length;i++){
     sum = sum+rest[i];
    }
    return sum;
}
console.log(foo(12,13,14,15,16,17))