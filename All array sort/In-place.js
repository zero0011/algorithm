//再不用额外空间的情况下, 反转数组

var arr= [ 1,2,3,4,5]
// console.log(arr.Reverse())

var a = 1 , b = 2 ;
a = a ^ b ;
b = a ^ b ;
a = a ^ b ; 
// console.log(a,b)


//反转 双指针
Array.prototype.Reverse = function() {
    var start = 0 ;
    var end = this.length -1; 
    while(start < end) {
        temp = this[start] ; 
        this[start] = this[end] ;
        this[end] = this[start] ;
        end-- ;
        start++ ;
    }
    return this ;
}

var  char = 'hello world';
console.log([...char].Reverse())











