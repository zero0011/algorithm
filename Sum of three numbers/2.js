/*
1.暴力法  3层for 循环
*/ 

// 说明:为了使答案不存在相同的数组 ,必须先把数组去重
//为了把数组去重复,必须先写一个从数组删除元素的函数
//nums=[1,1,0]
//删除数组元素
function detele(nums,index){
    for(let i=index+1;i<nums.length;i++){
        nums[index]=nums[i];
        index++;
    }
    nums.length=nums.length-1;
    return nums;
}
//删除数组中相同元素
function deleteRepeat(nums){
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]===nums[j]){
                detele(nums,j);
            }
        }
    }
    return nums;
}
//找出数组中最大值的函数
function Max(arrs){
  var max=0;
  for(var i=0;i<arrs.length;i++){
    if(max<arrs[i]){
      max=arrs[i];
    }
  }
  return max;
}
function twosum(nums){

  function detele(nums,index){
    for(let i=index+1;i<nums.length;i++){
        nums[index]=nums[i];
        index++;
    }
    nums.length=nums.length-1;
    return nums;
}
  function Max(arrs){
    var max=0;
    for(var i=0;i<arrs.length;i++){
      if(max<arrs[i]){
        max=arrs[i];
      }
    }
    return max;
  }
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
    for(var m=0;m<arrs.length;m++){
      for(var n =m+1;n<arrs.length;n++){
        if(Max(arrs[m])===Max(arrs[n])){
          detele(arrs,n);
        }
      }
    }
    return arrs;
    // console.log(arrs);
}

const nums=[-1,0,1,2,-1,-4];
console.log(twosum(nums));


// console.log(Max(x));

//测试代码

// console.log(twosum(arrs));
// const goodArrs = deleteRepeat(arrs);
// console.log(goodArrs);

// console.log(twosum(arrs));
