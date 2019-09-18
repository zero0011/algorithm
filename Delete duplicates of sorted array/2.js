// var a=1,b=2;
// console.log(a,b)
// a = [b,b=a][0];

// console.log(a,b)



function a(){
 var a = 1, b =2;
console.log(a,b)
a = a^b;
b = a^b;
a = a^b;
console.log(a,b)   
}

var a = 1,b=2;
var arr=[b,b=a]
console.log(arr)
a = arr[0]
console.log(a,b)