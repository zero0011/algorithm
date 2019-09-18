n=0,m=0;
function plus(n){
    m++;
    if(m==100){
        return 1;
    }
    n = n+m;
     plus(n);
}
// plus(n);
// console.log(n)
sum=0
for(i=0;i<=100;i++){
    sum = sum+i;
}
// console.log(sum)

function fact(n){
    if(n==0||n==1){
        return 1;
    }else{
        return fact(n-1)*n
    }
}
// console.log(fact(10))

function fibo(num){
    if(num==0){
        return 0
    }
    if(num==1||num==2){
        return 1
    }else{
        return fibo(num-1)+fibo(num-2)
    }
}
// console.log(fibo(3))

let l=0,p=0;
function a(){
    l++;
    p+=l;
    if(l<100){
        return a()
    }
    else{
        return ;
    }
}
a()
console.log(l,p)