//二分查找的非递归方法

//循环

var nums = [ 1, 2 , 3 , 4]
var target = 100;

function half_find(nums){
    var i = 0;
    var j = nums.length-1;
    while(i<=j){
        var k = Math.ceil((i+j)/2);
        if(nums[k]==target){
            return k;
        }
        else if(nums[k]>target){
            j=k-1;
        }else if(nums[k]<target){
            i=k+1;
        }
    }
    console.log("not find it")
    return -1;
}

console.log(half_find(nums));