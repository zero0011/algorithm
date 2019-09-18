function uniquePaths(m,n){
    var arr = [];
    for(i=0;i<n;i++){
        arr[i]=[];
        
        for(j=0;j<m;j++){
            arr[i][j]=undefined;
        }
    }
    for(y=0;y<m;y++){
        arr[0][y]=1;
    }
    for(x=0;x<n;x++){
        arr[x][0]=1;
    }
    // console.log(arr)
    for(i=1;i<n;i++){
        for(j=1;j<m;j++){
            arr[i][j]=arr[i-1][j]+arr[i][j-1];
        }
    }
    // console.log(arr)
    return arr[n-1][m-1]
}
console.log(uniquePaths(10,3))