/**
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

示例 1:

nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0
示例 2:

nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5
 */


//合并2个有序数组,并求中位数

function MergeArray(nums1,nums2){
    let arrSum=new Array(nums1.length+nums2.length);
    let n=Math.floor(arrSum.length/2);
    nums1[nums1.length]=100000;
    nums2[nums2.length]=100000;
    let i=0,j=0,k=0;
    while(k<arrSum.length){
        if(nums1[i]>=nums2[j]){
            arrSum[k]=nums2[j];
            j++;
            if(j==nums2.length){
                j=j-1;
            }
        }
        else if(nums1[i]<=nums2[j]){
            arrSum[k]=nums1[i];
            i++;
            if(i==nums1.length){
                i=i-1;
            }
        }
        k++;
    }
    if(arrSum.length%2===0){
        return (arrSum[n]+arrSum[n-1])/2
    }else{
        return arrSum[n];
    }
}


//1,2,3,4,5,7,9,1000

const arr1=[2,4];arr1[2]=100000;
const arr2=[1,3];

// [1,2,3]
//1,2,3,4,5,6,7,8,9,10
//5.5
console.log(MergeArray(arr1,arr2));




// 执行用时 :
// 164 ms
// , 在所有 JavaScript 提交中击败了
// 94.29%
// 的用户
// 内存消耗 :
// 38.9 MB
// , 在所有 JavaScript 提交中击败了
// 91.62%
// 的用户







//折半查找
const 