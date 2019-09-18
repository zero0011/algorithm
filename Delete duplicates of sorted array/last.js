
var nums = [0,0,1,1,1,2]

var removeDuplicates = function(nums) {
    for(var i = 0 ;i<nums.length ; i++){
        if(nums[i]===nums[i-1]){
            
        }
        else
            nums[i] = nums[i]
    }
    return nums;
}
console.log(removeDuplicates(nums))