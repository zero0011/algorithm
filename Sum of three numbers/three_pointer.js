/**
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
 */

 // -4  -1 -1 0 1 2 
 //  a   a    b   c


 var nums = [-1,0,1,2,-1,-4] , target = 0;


var threeSum = function(nums) {
    var target = 0;
    if(nums.length<3)return -1;
    var nums = nums.sort((a,b)=>a-b);
    console.log(nums)
    var arr = new Array();
    var i = 0,j = nums.length-1;
    var k = Math.floor((i+j)/2);
    var flag = Math.floor((i+j)/2);
    var a = nums[i];
    var c = nums[j];
    var b = nums[k];
    while(i<flag){
        while(1){
            if(i==k||j==k)break;
            if(a+b+c<target){
                k++;
            }else if(a+b+c>target){
                k--;
            }else if(a+b+c===target){
                arr.push([a,b,c])
                i++;j--;
            }
        }
        if(a+b+c<0)i++;
        if(a+b+c>0)j--;
        var k = Math.floor((i+j)/2);
    }
    return arr;
};


console.log(threeSum(nums))




