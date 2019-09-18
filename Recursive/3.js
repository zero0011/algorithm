/**
 * f(10)=f(9)+1
 * f(9)=f(8)+1
 * f(8)=f(7)+1
 * f(7)=f(6)+1
 * f(6)=f(5)+1
 * f(5)=f(4)+1
 * f(4)=f(3)+1
 * f(3)=f(2)+1
 * 
 * f(2)=f(1)+1
 * 
 * f(0)=0
 * f(1)=1
 * 
 * f(n)
 *  
 * n>=2
 *  f(n-1)+1
 *  f(n-2)+2
 */


 /**
  * f(3)=f(2)+1
  *     =f(1)+f(1)+f(1)
  *     f(1)+2
  */

  // function climb(n){
  //   if(n==0)
  //       return 0
  //   else if(n==1)
  //       return 1
  //   else if(n>=2){
  //     return (climb(n-Math.ceil(Math.random()*10)%3)+Math.ceil(Math.random()*10)%3)
  //   }
  // }
// console.log(climb(3))




//n为正整数
let obj =new Object();
function ClimbingStairs(n){
  // console.log(i++)
    if(n<1){
      return 0;
    }
    if(n==1){
      return 1;
    }
    if(n>=2){
      if(obj[n])return obj[n]
      else{
        obj[n] = ClimbingStairs(n-1)+ClimbingStairs(n-2);
        let res = obj[n];
        return res;
      }
    }
}
// console.log(ClimbingStairs(10))//=>2

//备忘录   用对象可能会更快

let objClimb = new Array();
function ObjectClimbing(n){
  objClimb[-1]=0;
  objClimb[0]=1;
    for(i=1;i<=n;i++){
      objClimb[i]=objClimb[i-1]+objClimb[i-2];
      // console.log(objClimb[n])
    }
    // console.log(n)
    return  objClimb[n]
}
// console.log(ObjectClimbing(10))



//经过分析发现,不需要一个数组也可以   空间复杂度  O(1)

function climb(n){
  var first = 0;
  var second = 1;
  for(i=1;i<=n;i++){
    third = first + second ; 
    if(i==n)break;
    second  =third 
    first = second 
  }
  return third;
}

console.log(climb(3))

const map = new Map();
