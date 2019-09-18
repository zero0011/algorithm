//合并俩个有序数组
//归并排序的基本实现
function Marray(arr1, arr2) {
    var i = 0,
    j = 0;
    let res = [];
    while (i < arr1.length && j < arr2.length) {
      while(i < arr1.length && arr1[i] <= arr2[j]) {
        res.push(arr1[i])
        i ++;
      }
      while (j < arr2.length && arr2[j] < arr1[i]) {
        res.push(arr2[j])
        j ++;
      }
    }
    // arr1 全走完了
    if (i === arr1.length) {
      res.push(...arr2.slice(j))
    }
    // arr2 全走完了
    if (j === arr2.length) {
      res.push(...arr1.slice(i))
    }
    return res;
  }
  var a = [0]
  var b = [2]
  // console.time('m')
  // console.log(Marray(a, b));
  // console.timeEnd('m')

  //优化一下
  function Marray_1(arr1,arr2) {
    var m = 0 ;var n = 0 ;//m , n 分别指向arr1 和 arr2 的开头
    let arrSum = new Array(arr1.length+arr2.length) ;
    arr1[arr1.length] = arr2[arr2.length] = Infinity ;
    // console.log(arr1,arr2,arrSum)
    for ( var i = 0 ; i < arrSum.length ; i ++ ) {
      if(arr1[m] <= arr2[n]){
        arrSum[i] =  arr1[m] ;
        m ++;
      } else {
        arrSum[i] = arr2[n] ;
        n ++ ;
      }
    } 
    return arrSum ;
  }
// console.time('m1')
// console.log(Marray_1(a,b))
// console.timeEnd('m1')

//归并排序算法

//合并
function Merge(array,low,mid ,high) {
  var i = low ; //i是第一段序列的下标
  var j = mid + 1 ; //j 是第二段序列的下标
  var k = 0 ; //k是临时存放合并序列的下标
  var array2 = new Array(array.length) ; //array2 是临时合并序列

  //扫描第一段和第二段序列 , 直到有一个扫描有一个扫描结束
  while(i <= mid && j <= high) {
    //判断第一段和第二段取出的数哪个更小 , 将其存入合并序列 , 并继续向下扫描
    if(array[i] <= array[j]) {
      array2[k] = array[i] ;
      i++ ;
      k++ ;
    } else {
      array2[k] = array[j] ;
      j++ ;
      k++ ;
    }
  }

  //如果第一段序列还没有扫描完 , 将其全部复制到合并序列
  while(i <= mid) {
    array2[k] = array[i] ;
    i++ ;
    k++ ;
  }
  
  //如果第二段序列还没有扫描完 , 将其全部复制到合并序列
  while( j >= high) {
    array2[k] = array[j] ;
    j++ ;
    k++ ;
  }

  //将合并序列复制到原始序列中
  // for(k = 0 , i = low ; i <= high ; i++ ,k++) {
  //   array[i] = array2[k]
  // }
  return array2;
}

//测试
var a = [1,5,7,2,4]
// console.log(Merge(a,0,(Math.floor((a.length-1)/2)),a.length-1))


//分解
function MergePass(array,gap , length) {

  //归并gap 长度的俩个相邻子表
  for( i = 0 ; i + 2 * gap -1 < length ; i = i + 2 * gap) {
    Merge(array,i,i+gap - 1 , i + 2 * gap - 1) ;
  } 

  //余下俩个子表 , 后者长度小于gap 
  if(i + gap - 1 < length) {
    Merge(array , i , i + gap -1 , length -1) ;
  }
}

function sort(list) {
  for ( var gap = 1 ; gap < list.length ; gap = 2 * gap) {
    MergePass(list , gap , list.length) ;

  }
  return list ;
}
var arr = [3,1,4,6,3,6,8,0,3]
// console.log(sort(arr))

