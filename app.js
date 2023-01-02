


function getMinimumCost(k, c) 
{
    let toBuy = c.length;
    let groupSize = k;
    let prices = c;
    let totalCost = 0;
   
    let i = 0
    while(i!=toBuy)
    {
        for(let j=0;j<groupSize;j++)
        {
            let max = Math.max(...prices);
            if(max === 0)
            {
                return totalCost;
            }
            let maxIndex = prices.indexOf(max);
            prices[maxIndex] = 0; 
            totalCost += max * (1+i);
        
        }
        i++;
    }
    
}
