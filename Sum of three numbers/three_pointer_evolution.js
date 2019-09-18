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

var nums = [-1,0,1,2,-1,-4] , target = 0;

 //三指针   看看能不能做出来


 var threeSum = function(nums){
      var nums = nums.sort((a,b)=>a-b);
      var arr = [];
      var i = 0 ;
      var j = nums.length-1;
      var k = Math.floor((i+j)/2);
      while(i+2<=j){
        if(nums[i]+nums[j]+nums[k]<0){
            i++;
        }
        else if(nums[i]+nums[j]+nums[k]>0){
            j--;
        }
        k = Math.ceil((i+j)/2);
        while(1){
            if(nums[i]+nums[j]+nums[k]==target){
                arr.push([nums[i]+nums[j]+nums[k]]);
            }
            else if(nums[i]+nums[j]+nums[k]<0){
                if(k+1==j)break;
                k++;
            }else if(nums[i]+nums[j]+nums[k]>0){
                if(i+1==k)break;
                k--;
            }
          }
      }
    return arr;
 }

 console.log(threeSum(nums))

 //总结 :
 // 三指针  没有成功做出来
 //以后再想