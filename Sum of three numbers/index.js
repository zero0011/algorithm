//哈希查找
//哈希其实是随机的一种优化,先进行分类,然后查找时按照这个对象的分类去找
//哈希通过一次计算大幅度缩小查找范围,自然比从全部数据里查找速度要快


//哈希函数
//哈希函数是一种映射关系,根据数据的关键字key,通过一定的函数关系,计算出该元素的存储位置
//表示为 : address = H(key)

var arrs= [2,5,9,13];

//for()循环
for(var i = 0;i<arrs.length;i++){
    if(arrs[i]===13){
        // console.log(arrs[i]);
    }
}


//哈希查找
var H= [];
for(var j=0;j<arrs.length;j++){
    H[arrs[j]]=arrs[j]%3;
}
console.log(H)

//address = key%3;
function find(number){
        var address = number%3;
        
}

