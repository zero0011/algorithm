// Insertion-sort   插入排序是一种简单直观的排序算法
//将左侧序列看成一个有序序列，每次将一个数字插入该有序序列。插入时，从有序序列最右侧开始比较，若比较的数较大，后移一位。

Array.prototype.Insertion_sort = function(){
    for(var  i  = 1;i<this.length;i++){
        var key = this[i];
        var j = i-1;
        while(j>=0&&this[j]>key){
            this[j+1] = this[j];
            j--;
        }
        this[j+1] = key;
    }
    return this;
}

var arr=[3,5,8,6,4,2,9,10]

// console.log(arr.Insertion_sort())


//尝试写   插入排序算法

function Insertion(array){
    for (let i = 1 ; i < array.length ; i++){
        let target = array[i]
        var j = i - 1;
        while(j>=0&&array[j]>target){
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = target;
    }
    return array;
}

// console.log(Insertion(arr))


//Binary insertion sort 
//二分插入排序
//大概思想是将待排序记录放在数组R[0..N]中，R[0]是有序区，
//R[1..N]为无序区，无序区从R[1]开始按照大小插入到有序区中。
//以记录R[n]={7,6,2,4,3,0}为例，进行选择排序(升序)。
function Binary_insertion_sort(array){
    for(var i = 1 ; i < array.length ; i++){
        var key = array[i] ;
        let left = 0 ,right = i-1;
        while(left <= right){
            var mid = Math.floor((right-left)/2+left);
            if(array[mid] > key){
                right = mid - 1 ; 
            } else {
                left = mid + 1;
            }
        }
        for(var j = i-1 ; j >= left ; j--){
            array[j+1] = array[j];
        }
        array[left] = key;
    }
    return array;
}
console.log(Binary_insertion_sort(arr))

