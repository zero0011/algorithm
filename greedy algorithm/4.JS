function memoizer(fundamental,cache){
    cache = cache ||{};
    var shell =function(arg){
        if(!(arg in cache)){
            cache[arg]=fundamental(shell,arg);
        }
        return cache[arg];
    };
    return shell;
}


function f(n){
    if(n==1||n==2){
        return 1;
    }else{
        return f(n-1)+f(n-2)
    }
}
var fibonacci =memoizer(
    function(f,n){
        return f(n-1)+f(n-2);
    },
    {
        "0":0,
        "1":1
    }
);

console.log(fibonacci(40))