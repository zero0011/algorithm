/**
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.

与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 
 */


 //暴力法   枚举

var nums = [-4,-1,1,2];  target = 1;

var threeSumClosest = function(nums, target) {
    let sum = 0;
    let map = {};
     for(var i = 0 ; i<nums.length-2 ; i++){
        for(var j = i+1 ; j<nums.length-1 ; j++){
            for(var k = j+1 ; k<nums.length ; k++){
                let SumNums = nums[i]+nums[j]+nums[k];
                if(SumNums>target||SumNums<target){
                    let diff = Math.abs(SumNums-target);
                    map[diff]= [nums[i],nums[j],nums[k]];
                }else if(SumNums===target){
                    return SumNums;
                }
            }
        }
     }
     let arr=[];
     console.log(map)
    for(var k in map){
        arr.push(k)
    } 
    console.log(arr)
    let mindiff = Math.min(...arr);
    console.log(mindiff)
    let minarr = map[mindiff];
    console.log(minarr)
    for(var i = 0; i<minarr.length ; i++){
        sum += minarr[i];
    }
    return sum;
    
};

console.log(threeSumClosest(nums,target))




