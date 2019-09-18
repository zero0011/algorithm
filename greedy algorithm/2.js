//实现 0-1背包问题算法
//

//实例 :  有一个背包, 最多承受C = 150的物品
/**
 * 最多能承载 C=150 的背包
 * 7个物品      编号 1-7
 * 重量分别为 [35,30,60,50,40,10,25]
 * 价值分别为  [10,40,30,50,35,40,30]
 * 
 * p/w 的数组   [10/35,40/30,.....]
 * 
 * 将7个物品放入背包  
 * 在小于C的情况下      
 * 所装入总价值最大
 * 
 * 
 * 递归
 */


 //基本数据结构  :  数组便够了
 //输入  物品的对象    输出   背包里的物品数组编号
 //逻辑实现





 //面向对象编程

 //删除数组中特定下标元素
    function detele(arr,el){
        for(m=0;m<arr.length;m++){
            if(el===arr[m]){
                arr[m] = arr[m+1]; 
               arr.length--; 
            }   
        }
        return arr;
    }
//找到数组中特定值返回下标
    function FindArray(arr,el){
        for(k=0;k<arr.length;k++){
            if(el === p_w[k])break;  
        }
        return k;
    }
    
//返回函数
    function conversion(things,p_w){
        let arr=new Array();
        for(var i=0;i<p_w.length;i++){
            for(j=0;j<things.length;j++){
                if(p_w[i]===(things[j].price)/(things[j].weight)){
                    arr.push(things[j]);
                }
            }
        }
        return arr;
    }
//返回最大值下标
function FindIndex(things){
    for(i=0;i<things.length;i++){
        if(things[i].status==1)continue;
        else if(things[i].price/things[i].weight>MAX){
            MAX=things[i].price/things[i].weight;
        }
    }
    for(j=0;j<things.length;j++){
        if(things[j].status==0)continue;
     else if(MAX === (things[j].price)/(things[j].weight)){
            break;
        }
    }
    return j;
}


 //物品的对象建立
    let C = 150;
    const weight = [35 ,30 ,60 ,50 ,40 ,10 ,25];
    const price = [10 ,40 ,30 ,50 ,35 ,40 ,30];
    //二维数组的写法

    var things = new Array(7);
    for(var i=0;i<things.length;i++){
        things[i] = new Object() ;
        things[i].num = i+1 ;//编号
        things[i].weight = weight[i];//重量
        things[i].price = price[i];//价值
        things[i].status = 0;// 0 : 未选择  1: 已经选择  2 : 不能再选择
    }

    // console.log(things)

//函数实现
        let nums = new Array();
        // let p_w = new Array(7);
        let MAX =0;
        let WeightSum = 0 ;
        // console.log(p_w)
// 1. 递归写法
    // function find(p_w){
    //     MAX = Math.max(...p_w);
    //     // k= FindArray(p_w,MAX);       
    //     // nums.push(k+1);
    //     // WeightSum += things[k].weight;
    //     // console.log(WeightSum)
    //     // console.log(things[k].weight)
    //      if(WeightSum<=C){
    //          p_w= detele(p_w,k);
    //          return  find(p_w)
    //      }
    //      console.log(p_w)
    // }

    // find(p_w);
    // console.log(nums);


    // function find(things){
    //     for(i=0;i<p_w.length;i++){
    //         p_w[i] = (things[i].price)/(things[i].weight);
    //     }
    //     MAX = Math.max(...p_w);
    //     for(var j=0;j<things.length;j++){
    //         if(MAX === things[j].price/things[j].weight){
    //             break;
    //         }
    //     }
    //     nums.push(things[j].num);
    //     WeightSum += things[j].weight;
    //     p_w= detele(p_w,MAX);
    //     //重点函数,返回对象数组
    //     let arr = conversion(things,p_w);
    //     if(WeightSum<=C){
    //         return find(arr);
    //     }
    // }

    
 
    function find(things){
        let j= FindIndex(things);
        // nums.push(things[j].num);
        // WeightSum += things[j].weight;
        // things[things[j].num-1].status = 1;
        // things[j]=things[j+1]
        // things.length--;
        console.log(things)
        if(WeightSum<=C){
            // console.log(WeightSum)
        //    return   find(things);
        }else{
            return ;
        }
    }

    

    find(things);
    console.log(nums);
