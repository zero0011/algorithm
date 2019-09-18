//最后一次

/**
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
 * 
 */


 //二数之和
 var twoSumplus = function (nums,target){
    let map={};
    for(let i = 0;i<nums.length;i++){
        map[nums[i]]=i;
        var num2= target-nums[i];
        if(map[num2]!==undefined&&map[num2]!==i){
            return [i,map[num2]];
        }
    }
}

//利用两数之和降低双指针的时间复杂度


 var nums =[-1, 0, 1, 2, -1, -4]

 
 var threeSum = function(nums) {
     var arr=[];
     var sum = nums.sort((a,b)=>a-b)
     console.log(sum)
     //哈希表,排除重复
     var map ={};
     for(var i = 0 ;i<sum.length-2 ; i++){
        map[sum[i]]=0;
     }
     //上面排序
    for(var i = 0 ;i<sum.length-2 ;i++){
        if(sum[i]>0) break;
        if(map[sum[i]]==1)continue;
        var target = 0 - sum[i];
        j=i+1;k=sum.length-1;
        while(j<k){
             if(sum[j]+sum[k]===target){
                if(sum[j]===sum[j-1]&&sum[k]===sum[k+1]){
                    j++;k--;
                   continue;
                }
                arr.push([sum[i],sum[j],sum[k]])
                map[sum[i]]=1;
                j++;k--;
            }
            else if(sum[j]+sum[k]<target){
                j++;
            }
            else if(sum[j]+sum[k]>target){
                k--;
            }
        }
    }
    return arr;
 }
console.log(threeSum(nums))



var x= new Map();
x.set(0,0);
console.log(x)
 