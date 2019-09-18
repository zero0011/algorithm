/**
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

问总共有多少条不同的路径
 */

//二维数组

function TwoArr(m,n){
    var b = []
    for(let i=0;i<n;i++){
        b[i] = [];
        for(let j=0;j<m;j++){
            b[i][j]=1;
        }
    }
    return b;
}

//   console.log(TwoArr(7,3))


    var twoarr= TwoArr(7,3);


//  let i=0
 function uniquePaths(m,n){
    //  i++;
    // twoarr[1][1]=9;
//    console.log(twoarr);
    if(m===0||n===0){
        return 0;
    }
    if(m===1&&n===1){
        return 1;
    }
    if(m>=2||n>=2){
        if(twoarr[m][n]) return twoarr[m][n];
        let sum = uniquePaths(m-1,n)+uniquePaths(m,n-1);
        twoarr[m][n] = sum;
        return  sum;
    }
 }


console.log(twoarr)
console.log(uniquePaths(7,3))












var a ={
    1.2:1,
    2.1:3
}
a[3.1]=10
// console.log(a["1.2"])
// console.log((a[3.1]))

if(0==false){
    // console.log(666)
}



var a  = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
// console.log(a[1][0])

