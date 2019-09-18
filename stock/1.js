/**
 * @param {number[]} prices
 * @return {number}
 */
let arr=[7,1,5,3,6,4];
let max=0;
var maxProfit = function(prices) {
    for(i=0;i<prices.length-1;i++){
        for(j=i+1;j<prices.length;j++){
            if(max<prices[j]-prices[i])
            max = prices[j]-prices[i]
        }
    }
    return max;
};

console.log(maxProfit(arr))

var a=[1,2,true,"a"];
delete a[0]

// console.log(a,a.length)