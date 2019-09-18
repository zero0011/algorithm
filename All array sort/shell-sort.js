/**
 * 1959年Shell发明； 第一个突破O(n^2)的排序算法；是简单插入排序的改进版；它与插入排序的不同之处在于，它会优先比较距离较远的元素。希尔排序又叫缩小增量排序
 */

function ShellSort (array) {
    var gap = array.length ;
    var n = array.length ;
    while(gap > 1){
        gap = gap /2 ;
        flag = 0 ;
        while(flag!=0) {
            for(var i = 0 ; i < n -gap ; i++) {
                j = i + gap ;
                if(array[i] > array[j]) {
                    temp = array[i] ;
                    array[i] = array[j] ;
                    array[j] = temp ;
                    flag = 1 ;
                }
            }
        }
    }
    return array ;
}




//shell 排序  又称缩小增量排序
function SHELLSORT(nums) {
    var len = nums.length ;
    var gap = nums.length  ;
    while(gap > 1) {
        gap = Math.ceil(gap/2) ;
        do{
            flag = 0 ;//说明对各子序列排序时是否有元素交换的动作
            for(var i = 0 ; i < len - gap ; i++) {
                if(nums[i] > nums[i+gap]) {
                    temp = nums[i] ;
                    nums[i] = nums[i+gap] ;
                    nums[i+gap] = temp ;
                    flag = 1 ;
                }
            }
        }while(flag!==0)
    }
    return nums ;
}
var arr = [49,38,65,97,76,13,27,49]
console.time('a')
console.log(SHELLSORT(arr))
console.timeEnd('a')


//自己思考的shell 排序

function shell(nums) {
    var len = nums.length ;
    var gap = len ; //增量
    var flag = 1//是否有交换, 假设有交换 , 无序 
    while(gap > 1) {
        while(flag!==0) {
            flag = 0;//先改为有序, 如果真有序 , 退出
            gap = Math.ceil(gap / 2) ;
        for(var i = 0 ; i < len - gap ; i ++) {
            if(nums[i] > nums[i+gap]) {
                temp = nums[i + gap] ;
                nums[i+gap] = nums[i] ;
                nums[i] = temp ;
                flag = 1 ;//有交换
            }
        }
      }
     if(flag==1) break; 
    }
    return nums;
}
var arr = [49,38,65,97,76,13,27,49]
console.time('ab')
console.log(shell(arr))
console.timeEnd('ab')
 