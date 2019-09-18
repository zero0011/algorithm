//折半查找

var arr = [1,3,4,5,6,7]
var target=7
function Half_find(arr,left,right,target){
    console.log(6)
    var mid  = Math.floor((left+right)/2);
    if(arr[mid]===target){
        console.log('find it')
    }else if(arr[mid]<target){
        return Half_find(mid+1,right,target)
    }else if(arr[mid]>target){
        return Half_find(left,mid-1,target)
    }
    // console.log("miss")
}

// Half_find(arr,0,arr.length-1,target);

//折半查找的非递归形式
function find(arr,target){
    var len = arr.length;
    var i = 0 ; 
    var j = len-1;
    while(i<=j){
        var  mid = Math.floor((i+j)/2);
        if(arr[mid]===target){
            console.log("find it");
            return ;
        }
        if(arr[mid]<target){
            i = mid+1;
        }
        if(arr[mid]>target){
            j = mid-1;
        }
    }
    console.log("not find it")
}

find(arr,target)