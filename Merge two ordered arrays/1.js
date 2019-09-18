/**
 * 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。

说明:

初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
示例:

输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]
 */
 
 var nums1 =  [1,3,10,0,0,0];
 var nums2 =  [2,5,6];


 
var merge = function(nums1, m, nums2, n){
    var nums3 = new Array();
    nums1.length = m;
    nums2.length = n;
    nums3.length = m+n;
    nums1[m] = nums2[n] = Infinity;
    var i = j = 0;
    for(var k = 0 ; k<nums3.length ; k++){
        if(nums1[i]<=nums2[j]){
            nums3[k] = nums1[i];
            i++;
        }else if(nums1[i]>nums2[j]){
            nums3[k] = nums2[j];
            j++;
        }
    }
    return nums3;
};

console.log(merge(nums1,3,nums2,3))


var a = [1,2,3]
b= a;
console.log(b[1])

