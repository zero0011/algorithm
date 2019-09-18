/**
 * 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。

不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。
 */


var reverseString = function(s) {
    var n = s.length ; 
    var mid  = Math.ceil( n/2 -1) ;
    for ( var i = 0 ; i < mid ; i ++) {
        temp = s[i] ; 
        s[i] = s[n - i - 1] ; 
        s[n - i - 1] = temp ; 
    }
    return s;
};

let s = ' hello ' ;
var b = ["A"," ","m","a","n",","," ","a"," ","p","l","a","n",","," ","a"," ","c","a","n","a","l",":"," ","P","a","n","a","m","a"]
console.log(reverseString(b))