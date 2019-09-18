var nums1 = [1,3,10,0,0,0];
 var nums2 =  [2,5,6];



 var merge = function(nums1, m, nums2, n){
     var k = 0 ; var  j  =0;
     for(var i =0 ; i<m+n ; i ++ ){
        if(k<=m-1){
          nums1[i]=nums1[k];
          k++;  
        } 
        else{
           nums1[i] = nums2[j];
        j++; 
        }
     };
     nums1.sort((a,b)=>a-b);
      console.log(nums1)
 }
 merge(nums1,3,nums2,3)