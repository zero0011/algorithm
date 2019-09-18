    nums = [-1, 0, 1, 2, -1, -4];

    Array.prototype.Deduplication = function(){
        for(var i = 0 ;i<this.length;i++){
            this[i]
        }
    }

    function addthreeSum(nums){
    var arrs=[];
    for(var i =0;i<nums.length-2;i++){
        for(var j=i+1;j<nums.length-1;j++){
            for(var k = j+1;k<nums.length;k++){
            if((nums[i]+nums[j]+nums[k])===0){
                arrs.push([nums[i],nums[j],nums[k]]);
                break;
            }
            }
        }
        }
    return  arrs;
    }
  function f(a,b){
      return (a-b)
  }
  var sum  = nums.sort(f)
  console.log(addthreeSum(sum));


  var obj1 = {
      0:[1,1,0],
      1:[1,1,0]
  }
  
  console.log(obj1[0]==obj1[1])
  


  
