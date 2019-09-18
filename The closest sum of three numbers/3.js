/**
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.

与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 
 */


 //俩数之和
 //一遍哈希表
var twoSumplus = function (nums,target){
    let map={};
    for(let i = 0;i<nums.length;i++){
        map[nums[i]]=i;
        var num2= target-nums[i];
        if(map[num2]!==undefined&&map[num2]!==i){
            return nums[map[num2]]+nums[i];
        }
    }
}

//第一个参数要用的数组  ,  第二个参数  目标值


//对暴力法的改进   利用哈希表减少循环次数

var nums = [-1,2,1,-4] ; target =1;

var threeSumClosest = function(nums,target){
    for(var i = 0 ;i<nums.length-2 ;i++){
        let a = nums[i];let sum = target-a;
        let nums = nums.slice(i+1);
        let 
    }
}   


var arr= [1,2,3,4,5]
let  a= arr.slice(2)
console.log(a)