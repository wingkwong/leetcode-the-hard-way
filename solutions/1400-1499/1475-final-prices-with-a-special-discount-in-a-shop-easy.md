---
description: >-
  Author: @heiheihang | https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/
---

# 1475 - Final Prices With a Special Discount in a Shop (Easy)

## Problem Link

https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/

## Problem Statement

Given the array `prices` where `prices[i]` is the price of the `ith` item in a shop. There is a special discount for items in the shop, if you buy the `ith` item, then you will receive a discount equivalent to `prices[j]` where `j` is the **minimum** index such that `j > i` and `prices[j] <= prices[i]`, otherwise, you will not receive any discount at all.

_Return an array where the `ith` element is the final price you will pay for the `ith` item of the shop considering the special discount._

**Example 1:**

```
Input: prices = [8,4,6,2,3]
Output: [4,2,4,2,3]
Explanation:
For item 0 with price[0]=8 you will receive a discount equivalent to prices[1]=4, therefore, the final price you will pay is 8 - 4 = 4.
For item 1 with price[1]=4 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 4 - 2 = 2.
For item 2 with price[2]=6 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 6 - 2 = 4.
For items 3 and 4 you will not receive any discount at all.
```

**Example 2:**

```
Input: prices = [1,2,3,4,5]
Output: [1,2,3,4,5]
Explanation: In this case, for all items, you will not receive any discount at all.
```

**Example 3:**

```
Input: prices = [10,1,1,6]
Output: [9,0,1,6]
```

**Constraints:**

- `1 <= prices.length <= 500`
- `1 <= prices[i] <= 10^3`

## Approach 1: Stack

We first initialize the `result` list to be a copy of `prices`. The reason of choosing to copy `prices` is that it is convenient to not change anything if an item does not have a discount.

Then we initalize a stack and iterate `prices`. If the last element of the stack if greater than or equal to the `current_price` , we have found a discount for the last element of the stack. We calculate the discounted price, and put it in the result array (its index is stored as the second element). We `pop` that element from the `stack`.

We then add the new item to the stack with its value and its index.

<SolutionAuthor name="@heiheihang"/>

```python
def finalPrices(self, prices: List[int]) -> List[int]:

        #initialize the result list to be a copy of prices
        result = prices.copy()

        #initialize stack
        stack = []

        #iterate prices
        for i in range(len(prices)):

            #declare current_price
            current_price = prices[i]

            #identify the prices that have not found a discount yet
            while(stack and stack[-1][0] >= current_price):

                #get the item's index
                item_index = stack[-1][1]

                #set its discounted price
                result[item_index] = stack[-1][0] - current_price

                #remove the item as it has found a discount
                stack.pop()

            #add the current item to the stack
            stack.append([current_price, i])

        #return result
        return result
```
