//1. 暴力法
// 利用3次for循环 ,但 时间复杂度太大,并且会产生重复的三元组


//思路  :
// 1. 建立一个哈希表  keys :index   value : target-nums[i]   nums[i]=a;
//  因为  target-nums[i] === b+c

//2. 求俩个数之和为哈希表中的值(依次)     符合条件 直接返回,不再循环 (防止重复)

function equal(e,map){
    for(var k of map.keys()){
        if(e ===map.get(k)){
            return true;
        }else{
            return false;
        }
    }
}


var nums = [-1 , 0 , 1 , 2 , -1 , -4 ] , target =0;

var threeSum = function(nums,target){
    var map = new Map();
    var map1 = {};
    let arr = new Array();
    for(var i = 0 ;i<nums.length ; i++){
        map.set(i,target-nums[i])
    }
    // console.log(map)
    for(var i = 0 ;i<nums.length;i++){
        for(var j = i+1 ; j<nums.length ; j++){
            if(equal(nums[i]+nums[j],map)){
                let el = [nums[i],nums[j],target-(nums[i]+nums[j])];
                arr.push(el);
            }
        }
    }

    //哈希表 寻找俩数之和
    // for(var i = 0 ;i<nums.length;i++){
    //     map1[i] = nums[i];
    // }
    // for(var i =0;i<nums.length;i++){
    //     var num1 = map1[i];
    //     var num2 = target-nums[i]-num1;
    //     if(map1[num2]!==undefined&&map[num2]!==i){
    //         let el =[num1,num2,target-(num1+num2)]
    //         arr.push(el)
    //     }
    // }


    // return arr;
    console.log(arr)
};




threeSum(nums,target);
