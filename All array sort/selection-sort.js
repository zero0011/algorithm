//selection-sort    选择排序

//每次循环选取一个最小的数字放到前面的有序序列中(交换)


function selectionSort_1(array){
    for(let i = 0 ; i < array.length ; i++){
        let minIndex = i ; 
        for(let j = i + 1 ; j < array.length ; j++){
            if(array[j] < array[minIndex]){
                minIndex = j ;
            }
        }
        if(minIndex !== i ){
            temp = array[minIndex];
            array[minIndex] = array[i] ;
            array[i] = temp;
        }
    }
    return array;
}
var b = [4,7,4,2,2,8]

// console.time("selection")
// console.log(selectionSort_1(a))
// console.timeEnd("selection")


//优化算法

//如果在每一次查找最小值的时候，也可以找到一个最大值，然后将两者分别放在它们应该出现的位置，这样遍历的次数就比较少了，下边
//给出代码实现：

function selectionSort_upgrade(array){
    var len  = array.length;
   var left = 0 ; var  right = len-1;
   var min = left ; var max = left ; //存储最小值和最大值的下标
   while(left <= right){
    min  = left ; 
    max = right ; 
     for( var i = left ; i < right ; i++){
         if(array[i] < array[min]){
             min = i;
         }
         if(array[i] > array[max]){
             max = i;
         }
     }
     temp = array[left];
     array[left] = array[min];
     array[min] =temp;
     if(left === max){
         max = min;
     }
     temp = array[right] ;
     array[right] = array [max];
     array[max] = temp;
     ++left;
     --right;
   }
   return array;
}
var a = [3,5,8,6,4,2,9,10]
// console.time("selection_u")
// console.log(selectionSort_upgrade(a))
// console.timeEnd("selection_u")

var a = 1 ;
var b = 2 ; 
// console.log(a,b)
a = [b , b = a][0];
// console.log(a,b)


//选择排序优化算法
//寻找最小值时 , 寻找最大值
//二分选择排序
function  SelectSort(array){
    var left = 0 ; 
    var right = array.length - 1 ;
    while(left < right){
        var max = left ;//假设最大值下标
        var min = left ; //假设最小值下标
        for(var i = left  ; i <= right ; i++){
            if(array[max] < array[i]){
                max = i ;
            }
            if(array[min] > array[i]){
                min = i ; 
            }
        }
        // console.log(max,min)
        //交换最小值元素
        temp = array[left] ; 
        array[left] = array[min] ; 
        array[min] = temp ; 
        //
        if(left === max){
            max = min;
        }
        //交换最大值元素
        temp = array[right] ; 
        array[right] = array[max] ; 
        array[max] = temp ; 
        //left right 改变
        ++left ;
        --right ;
    }
    return array;
}   
var b = [4,7,4,2,2,8];
// console.time("b")
console.log(b)
console.log(SelectSort(b))
// console.timeEnd("b")