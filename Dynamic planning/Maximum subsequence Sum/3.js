var maxSubArray = function(nums) {
    let ans = nums[0] ;
    let sum = 0 ;
    for(const num of nums) {
        if(sum > 0) {
            sum += num ;
        } else {
            sum = num ;
        }
        ans = Math.max(ans,sum) ;
    }
    return ans ;
}

var nums = [-2,1,-3,4,-1,2] ;
console.log(maxSubArray(nums))