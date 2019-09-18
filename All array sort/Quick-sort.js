//快速排序  Quick sort

var arr = [3,5,8,6,4,2,9]



//递归  实现快速排序

var quickSort = function(arr){
    if(arr.length <= 1) return arr;
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex,1)[0];
    //必须把基准  从数组中去除
    // var pivot = arr[pivotIndex];
    var left = [];
    var right = [];
    for(var i = 0 ; i < arr.length  ;i++){
        if (arr[i] < pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([pivot],quickSort(right));
}


console.time('q_1')
console.log(quickSort(arr))
console.timeEnd('q_1')

// splice  的用法

var a = [ 1,2,3,4,5]  //  4/2 =2
  var c= a[2]
  var b =   a.splice(2,1)[0]

// console.log(b,c)
// console.log(a)

var arr = [49,38,65,97,76,13,27,49] ;

//快速排序的    递归版本2

function quickSort_2(array){
    if(array.length < 2){
        return array;
    }
    const target = array[0];
    const left = [];
    const right = [];
    for(let i = 1 ; i<array.length ; i++){
        if(array[i] < target){
            left.push(array[i])
        } else {
            right.push(array[i])
        }
    }
    return quickSort_2(left).concat([target] ,quickSort_2(right))
}

console.time('q_2')
console.log(quickSort_2(arr))
console.timeEnd('q_2')
// console.log(arr)
//快速排序的    递归版本3   最终版本
function quickSort_3(array , start , end){
    if(end - start < 1){
        return 1;
    }
    const target = array[start];
    let l = start ;
    let r = end ; 
    while(l < r){
        while(l < r && array[r] >= target){
            r--;
        }
        array[l] = array[r];
        while(l < r && array[l] < target) {
            l++;
        }
        array[r] = array[l]; 
    }
    array[l] = target;
    quickSort_3(array , start , l-1);
    quickSort_3(array , l + 1, end);
    return array;
}
console.time('sort')
console.log(quickSort_3(arr,0,arr.length-1))
console.timeEnd('sort')
