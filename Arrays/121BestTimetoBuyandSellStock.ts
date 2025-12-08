function maxProfit(prices: number[]): number {
    let min=prices[0];//7
    let profit =0//0
    for(let i=1 ;i<prices.length;i++){
        let currprofit=prices[i]-min
        profit = Math.max(profit,currprofit)
        min = Math.min(min,prices[i])
    }
    return profit
};