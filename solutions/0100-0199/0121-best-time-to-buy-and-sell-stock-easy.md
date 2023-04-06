---
description: "Author: @jeremiaaxel, @ColeB2, @radojicic23 | https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
---

# 0121 - Best Time to Buy and Sell Stock (Easy)

## Problem Link

https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

## Problem Statement

You are given an array `prices` where `prices[i]` is the price of a given stock on the $i^{th}$ day.

You want to maximize your profit by choosing a **single** day to buy one stock and choosing a **different day in the future** to sell that stock.

Return *the maximum profit you can achieve from this transaction*. If you cannot achieve any profit, return `0`.

**Example 1:**

```
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```

**Example 2:**

```
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
```

**Constraints:**

- `1 <= prices.length <= 10 ^ 5`
- `0 <= prices[i] <= 10 ^ 4`

## Approach 1 : Linear Iteration

We are going to iterate through the `prices` array.

In this example, we use $buyPrice$ variable to store the minimum price so far and $currentMaxProfit$ variable to store the maximum profit so far.

While finding the minimum value of price as the $buyPrice$. We are going to check on each day's profit and save the maximum profit as the $currentMaxProfit$. Since we could only sell after we buy the stock, we don't have to check back the previous days' profits.

Solving this in linear time is also known as **Kadane's algorithm.**

#### Time Complexity

The time complexity for this solution is $O(n)$, where $n$ is the length of the `prices` array.

#### Space Complexity

The space complexity is $O(1)$ since we only use a constant amount of space.

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@jeremiaaxel"/>

```java
class Solution {
    public int maxProfit(int[] prices) {
        /* Initialize buy price with the highest amount of value 
        and the current maximum profit with zero */
        int buyPrice = Integer.MAX_VALUE;
        int currentMaxProfit = 0;
        
        for (int price : prices) {
            /* if a price is smaller than the current buy price, update the buy price, 
            and continue to the next loop since it is obviously zero profit. */
            if (price < buyPrice) {
                buyPrice = price;
                continue;
            }
            /* check if the profit from current price is bigger than the current max profit, 
            and update accordingly. */
            int profit = price - buyPrice;
            if (profit > currentMaxProfit) {
                currentMaxProfit = profit;
            }
        }
        
        return currentMaxProfit;
    }
}
```

</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # initialize buy_price as first price in prices, and a max_profit of 0.
        buy_price = prices[0]
        max_profit = 0
        # iterate through all prices.
        # note we start at 1, as we already "bought" the first stock.
        for i in range(1, len(prices)):
            # get current price we are looking at.
            cur_price = prices[i]
            # calculate current profit, by subtracting our buy price from our current price.
            cur_profit = cur_price - buy_price
            # update our max profit, using max profit, and current profit we calculated.
            max_profit = max(max_profit, cur_profit)
            # update the price to be the minimum of the price we bought at, and current price.
            buy_price = min(buy_price, cur_price)
        # return our answer.
        return max_profit
```

</TabItem>

<TabItem value="js" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buyPrice = prices[0];
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        let currPrice = prices[i];
        let currProfit = currPrice - buyPrice;
        maxProfit = Math.max(maxProfit, currProfit);
        buyPrice = Math.min(buyPrice, currPrice);
    }
    return maxProfit;
};
```

</TabItem>
</Tabs>
