var obj = {};
let i=0
function f(m,n){
    i++;
    if(m===0||n===0)
    return 0;
    if(m===1&&n===1)
    return 1;
    if(m>=2||n>=2){
        if(obj[(m).n])return obj[(m).n]
        else{
            p = f(m-1,n)+f(m,n-1);
            obj[(m-1).n]=f(m-1,n);
            obj[(m).n-1]=f(m,n-1);
            return p;
        }
    }
}


console.log(i)
console.log(f(7,3),obj)