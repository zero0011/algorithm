
//使用递归方法实现

//折半查找

//时间复杂度  O(log2n)   空间复杂度 O(log2n)

var nums = [ 1, 2 , 3];
var target = 2;

console.log(nums.length-1)

function half_find(nums,low,high,target){
    if(low>high){
        return -1;
    }else{
        var mid = Math.ceil((low+high)/2);
        if(nums[mid]==target){
            return  true;
        }
        if(nums[mid]<target){
            return half_find(nums,mid+1,high,target)
        }else if(nums[mid]>target){
            return half_find(nums,low,mid-1,target)
        }
    }
}


console.log(half_find(nums,0,2,2))