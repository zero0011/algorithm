//归并排序 Merge-sort
/**
 * 归并排序是建立在归并操作上的一种有效的排序算法 , 该算法是采用了分治法的一个非常典型的案例 ,
 * 将已有序的子序列合并 , 得到完全有序的序列 , 即 : 先使得每个字序列有序 , 再使子序列间有序 ,
 * 如果将俩个有序表合并成一个有序表 , 称为二路归并
 */


 //归并排序的递归写法
function Merge(arr1, arr2) {
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

  function MergeSort(arr) {
      const length = arr.length ; 
      if(length ===1 ) {
          return arr ; 
      }

      const mid  = parseInt(length/2) ;

      const left = arr.slice(0,mid) ;//  0   -    mid-1
      const right = arr.slice(mid , length) ;  //  mid   length -1
      return Merge(MergeSort(left),MergeSort(right)) ;
  }

  var arr = [49,38,65,97,76,13,27,49]//9,8,7,6,5,4,3,2,1
  console.time('M')
  console.log(MergeSort(arr))
  console.timeEnd('M')


  //非递归写法  归并排序(有点难  算了)

  function merge(arr,low,mid,high) {
    var temp = new Array(high - low + 1) ;
    var i = low ;
    var j = mid + 1 ;
    var k = 0 ;
    while( i <= mid && j <=high) {
      if(arr[i] < arr[j]) {
        temp[k] = arr[i] ;
        i++ ;
        k++ ;
      } else {
        temp[k] = arr[j] ;
        k++ ;
        j++ ;
      }
    }
    while(i <= mid) {
      temp[k] = arr[i] ;
      i++ ; k++ ;
    }
    while(j <= high) {
      temp[k] = arr[j] ;
      j++ ; k ++ ;
    }
    arr = temp.concat() ;
    
  }

  function main(arr) {
   var kidLength = 1 ; //每次合并的俩个子序列的长度
   var length = arr.length ; //父数组长度
   while( kidLength < length) {
     var i = 0 ;

     //此while作用就是依次合并两个相邻j长的序列
     while( i + 2 * kidLength -1 < length -1 ) {
       if(i + 2 * kidLength - 1 < length - 1) {
         temp = i + 2 * kidLength - 1 ;
       } else {
         temp = length - 1 ;
       }
       console.log(arr)
       merge(arr,i,i + kidLength - 1 , temp) ;
     }
     j *=2 ;
   }
   return arr ;
  }

  
  console.log(main(arr))
  