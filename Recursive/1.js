var i=0;
function f1(){
    i++;
    f2();
}
function f2(){
    i++;
    if(i>100)return;
    console.log(i+'');
    f1();
}
// f1();

function f(n){
    if(n==1||n==0){
        return 1;
    }else{
        return f(n-1)*n
    }
}
console.log(f(5)) 