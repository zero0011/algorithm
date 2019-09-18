//有一个数  n  每秒 有  1/2的概率 会变成他原来的 2 倍

function change(n){
    var random = Math.random()*100;
    if(n===0) return 1;
    else {
        //概率
        if(random>0&&random<=50){
            return change(n-1)*2;
        }
        else if(random>50&&random<100){
            return change(n-1);
        }
    }
}

function Average(){
    var sum = 0 ;
    for(var i = 0 ;i<10000 ; i++){
        sum  = sum + change(4);
    }
    return sum/10000
}


console.log(Average())