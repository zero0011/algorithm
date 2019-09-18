//自己的思路
function maxSubArray(nums) {
    var max = 0 ;
    var sum = 0 ;
    for(var i = 0 ; i< nums.length ; i++) {
        if(nums[i] < nums[i+1])  continue ;
        else {
            for(var j = i ; j < nums.length ; j++) {
                sum = sum + nums[j] ;
                
            }
        }

    }
}

var nums = [-2,1,-3,4,-1,2]
console.log(maxSubArray(nums))