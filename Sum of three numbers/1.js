/*给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/


//1.暴力查找 使用3次 for 循环
//时间复杂度 O(N^3)   空间复杂度

var nums = [-1,0,1,2,-1,-4];
//[-1,0,1]    [-1,1,2]
var target = 0;  

function addthreeSum(nums){
  var arrs=[];
  for(var i =0;i<nums.length-2;i++){
      for(var j=i+1;j<nums.length-1;j++){
        for(var k = j+1;k<nums.length;k++){
          if((nums[i]+nums[j]+nums[k])===0){
            arrs.push([nums[i],nums[j],nums[k]]);
          }
        }
      }
    }
    return arrs;
}

console.log(addthreeSum(nums));

//2.借助哈希表 
//在获得俩个数后 , 找哈希表是否有目标值
//时间复杂度 O(N^2)   空间复杂度 O(N)
var threeSumplus = function(nums){
    let res=[];
    let hash={};
    for(let i=0;i<nums.length-2;i++){
      for(let j=i+1;j<nums.length-1;j++){
        let mark = 0 - (nums[i]+nums[j]);
        if(hash[mark]!==undefined){
          res.push([nums[i],nums[j],hash[mark]]);
          hash[mark]=undefined;
        }
        else{
          hash[mark] = 0- (nums[i]+nums[j]);
        }
      }
    }
    // console.log(hash)
    
    return res;
}






var threeSum = addthreeSum(nums,target);//返回对象

//实现功能 : 对象去重
function deleteRepeat(arr){
    for(var i=0;i<arr.length;i++){
      var sum = arr[i];
      
    }
}

    
   

