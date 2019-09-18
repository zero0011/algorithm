//斐波那契数列（Fibonacci sequence），又称黄金分割数列、因数学家列昂纳多·斐波那契（Leonardoda Fibonacci）以兔子繁殖为例子而引入，故又称为“兔子数列”
i=0
function f(n){
    console.log(i++)
    if(n==1||n==2)
    return 1;
    else{
        return f(n-1)+f(n-2)
    }
}
// console.log(f(40))
// 1 1 2 3 5 8 13

//算法简单明了,但是执行速度太慢了       

/**
 * f(6)=f(5)+f(4)       2
 *      =f(4)+f(3)+f(3)+f(2)    4
 *       =f(3)+f(2)+f(2)+f(1)+f(2)+f(1)+f(2)    9
 *       =f(2)+f(1)+f(2)+f(2)+f(1)+f(2)+f(1)+f(2)   
 * 15
 *      f(5)=f(4)+f(3)  2
 *          =f(3)+f(2)+f(2)+f(1)    5
 *          =f(2)+f(1)+f(2)+f(2)+f(1)   
 *  */

// let arr=new Array();
let cache = {};
let a =new Object()
 function fibo(n){
    console.log(i++)
    if(n==1||n==2){
        return 1
    }
    else{
        if (cache[n]) return cache[n]
        let res =  fibo(n-1)+fibo(n-2)
        cache[n] = res
        return res;
    }
    
 }
 console.log(fibo(5));

 
//  var a=[1,2,3,4,5]
//  var sum = a.reduce((pre,next)=>{
//     return pre*next;
//  },1)
 //如果有第二个参数   pre  第一次为第二个参数
//  console.log(sum)
    
//黄金分割数列  最终解法
    
    function fibonacci(n){
        let j=0
        let table = new Array(n);
        table[0]=0;
        table[1]=table[2]=1;
        for(var i=3;i<=n;i++){
            console.log(j++)
            table[i] = table[i-1] + table[i-2]
        }
        return table[n];
    }
   console.log(fibonacci(999)) 