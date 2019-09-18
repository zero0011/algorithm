//Bubble Sort 冒泡排序  第1版

var arr = [1,2,3,4,5,6,7,8,9,10]
function bubbleSort(arr){
    //外部循环控制所有的回合
    for(var i = 0 ; i < arr.length-1 ; i++){
        //内部循环代表每一轮处理
        for(var j = 0 ; j < arr.length - i -1 ; j++){
            //当前一个数比后一个数大时, 交换俩个数
            //可以不使用中间变量
            if(arr[j]>arr[j+1]){
                temp = arr[j+1] ;
                arr[j+1] = arr[j] ; 
                arr[j] = temp ;
            }
        }
        // console.log(arr)
    }
    return arr;
}
console.time("sort")
console.log(bubbleSort(arr))
console.timeEnd('sort')

//冒泡排序优化 Bubble Sort 第2版
function bubbleSort_U(arr){
    for(var i = 0 ; i < arr.length ; i++){
        var bool = true;
        for(var j = 0 ; j < arr.length - i -1 ; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j] ;
                arr[j] = arr[j+1];
                arr[j+1] = temp ;
                //有元素交换  , 所以表示表示有序 , 标记变为 false
                bool = false;
            }
        }
        if(bool){
            break;
        }
    }
    return arr;
}
console.time("sort_u")
console.log(bubbleSort_U(arr))
console.timeEnd("sort_u")

//冒泡排序优化    第3版

function bubbleSort_3(arr){
    //记录最后一次交换的位置
    var temp = 0 ;
    //无序数组的边界 , 每次比较只需要比到这里为止
    var lastExchangeIndex = 0 ;
    var sortBoder = arr.length - 1;
    for(var i = 0 ; i < arr.length ; i++){
        //有序标记 , 每一轮的初始是true
        var bool = true ;
        for(var j = 0 ; j < sortBoder ; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j] ; 
                arr[j] = arr[j+1] ;
                arr[j+1] = temp ; 
                //有元素交换 , 所以不是有序 , 标记变为 false
                bool = false ; 
                //把无序数列的边界更新为最后一次交换的位置
                lastExchangeIndex = j ;
            }
        }
        sortBoder = lastExchangeIndex ;//下次比较到记录位置即可
        if(bool){
            break ; 
        }
    }
    return arr;
}

console.time("sort_3")
console.log(bubbleSort_3(arr));
console.timeEnd("sort_3")

//双向冒泡排序
//正反交替扫描 , 正向找到最大值 , 反向找到最小值
function bubbleSort_twoWays(nums) {
    var i = 0 ; 
    var j = 0 ;
    var n = 0 ;//同时找最大值和最小值需要2个下标遍历
    var flag = 0;
    var pos = 0;//用来记录最后一次交换的位置
    var index = 0;
    var k = nums.length - 1 ;
    for(i = n ; i < k ; i++){
        pos = 0 ;
        flag = 0 ;
        //正向寻找最大值
        for(j = n ; j < k ; j++){
            if(nums[j] > nums[j + 1]){
                //交换
                temp = nums[j] ;
                nums[j] = nums[j+ 1]; 
                nums[j+1] = temp ; 
                flag  =1 ;//加入标记
                pos = j ; //交换元素 , 记录最后一次交换的位置
            }
        }
        if(flag === 0 ){//如果没有交换过元素 , 则已经有序 , 直接结束
           return nums ; 
        }
        k = pos ; //下次比较到记录位置即可
        //反向寻找最小值
        for(j = k ; j > n ; j--) {
            if(nums[j] < nums[j-1]){
            temp = nums[j] ; 
            nums[j] = nums[j - 1];
            nums[j - 1] = temp ; 
            flag = 1 ;
            index = j ;//记录最后一次交换
            }
        }
        n = index ;
        if(flag === 0){
            return nums;
        }
    }
    return nums ; 
}

console.time("sort_two")
console.log(bubbleSort_twoWays(arr))
console.timeEnd("sort_two")
