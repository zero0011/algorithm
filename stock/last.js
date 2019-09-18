var prices = [7,1,5,3,6,4];

var i = prices.length;
var obj = {
    buy :0,
    sell:0,
    rest:0
};
var   maxProfit = function(prices){
    var dp = new Array();
    for(var m = 0;m<i;m++){
        dp[m] = new Array();
        for(var j = 0;j<2;j++){
            dp[m][j] = 0;
        }
    }
    
    dp[0][0] = 0; dp[0][1] = -Infinity;
    console.log(dp)
}

maxProfit(prices)