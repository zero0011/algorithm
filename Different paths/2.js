var b=[]
 for(i=0;i<5;i++){
     b[i]=[];
     for(j=0;j<10;j++){
         b[i][j]=1
     }
 }
//  console.log(b)


 //二维数组的函数

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
console.log(TwoArr(7,3))

let arr = TwoArr(7,3);
arr[2][2]=9
console.log(arr)