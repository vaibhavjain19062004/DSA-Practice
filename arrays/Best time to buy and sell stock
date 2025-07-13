/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let length=prices.length;
    let min=prices[0];
    let maxProfit=0;
    for(let i=1;i<length;i++){
        if(min>prices[i]){
            min=prices[i];
        }
        if(maxProfit<prices[i]-min){
            maxProfit=prices[i]-min;
        }
    }
    return maxProfit;

    
};
