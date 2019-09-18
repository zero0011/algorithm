function Marray(nums1, nums2) {
    var i = 0,
    j = 0;
    let res = [];
    while (i < nums1.length && j < nums2.length) {
      while(i < nums1.length && nums1[i] <= nums2[j]) {
        res.push(nums1[i])
        i ++;
      }
      while (j < nums2.length && nums2[j] < nums1[i]) {
        res.push(nums2[j])
        j ++;
      }
    }
    // arr1 全走完了
    if (i === nums1.length) {
      res.push(...nums2.slice(j))
    }
    // arr2 全走完了
    if (j === nums2.length) {
      res.push(...nums1.slice(i))
    }
    let n=Math.floor(res.length/2);
    if(res.length%2===0){
        return (res[n]+res[n-1])/2;
    }else{
        return res[n];
    }
}
  var a = [1,2]
  var b = [2,4,6]
  // 1 2 4 6 6 7 9 9 10
  //2.5
  console.log(Marray(a, b));


  function find(res){
    let n=Math.floor(res.length/2);
    if(res.length%2===0){
        return (res[n]+res[n-1])/2;
    }else{
        return res[n];
    }
}