//有序数组的中位数
//1,2,3,4
//1,2,3,4,5
//4

function find(arr){
    let n=Math.floor(arr.length/2);
    if(arr.length%2===0){
        return (arr[n]+arr[n-1])/2;
    }else{
        return arr[n];
    }
}

const arr=[1,2,3,4,5,6]
console.log(find(arr))