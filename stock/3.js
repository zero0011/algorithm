//三维数组

// 3x3x3

var dp_3d = new Array();

for(var i = 0 ;i<3;i++){
    dp_3d[i] = new Array();
    for(var j = 0 ;j<3;j++){
        dp_3d[i][j] = new Array();
        for(var k = 0 ;k<3 ; k++){
            dp_3d[i][j][k] = 0;
        }
    }
}

console.log(dp_3d)