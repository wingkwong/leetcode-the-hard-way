---
description: "Author: @Dhanu084 | https://leetcode.com/problems/online-stock-span/"
tags: [Array, Stack]
---

# 901 - Online Stock Span (Medium)

## Problem Link

https://leetcode.com/problems/online-stock-span/

## Problem Statement

Design an algorithm that collects daily price quotes for some stock and returns the span of that stock's price for the current day.

The span of the stock's price today is defined as the maximum number of consecutive days (starting from today and going backward) for which the stock price was less than or equal to today's price.

For example, if the price of a stock over the next 7 days were [100,80,60,70,60,75,85], then the stock spans would be [1,1,1,2,1,4,6].
Implement the StockSpanner class:

StockSpanner() Initializes the object of the class.
int next(int price) Returns the span of the stock's price given that today's price is price.

**Example 1:**

```
Input
["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
[[], [100], [80], [60], [70], [60], [75], [85]]
Output
[null, 1, 1, 1, 2, 1, 4, 6]

Explanation
StockSpanner stockSpanner = new StockSpanner();
stockSpanner.next(100); // return 1
stockSpanner.next(80);  // return 1
stockSpanner.next(60);  // return 1
stockSpanner.next(70);  // return 2
stockSpanner.next(60);  // return 1
stockSpanner.next(75);  // return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
stockSpanner.next(85);  // return 6
```

**Constraints:**

- 1 <= price <= 105
- At most 104 calls will be made to next.

## Approach 1: Monotonic Stack

Monotonic stack stores the elements in a sorted order either increasing or decreasing. In this question we will be using a monotonously increasing stack

Time complexity: $$O(1)$$, if one call to next takes $$O(n)$$ times then the subsequent calls will take constant time

Space complexity: $$O(n)$$ when all price have span of 1

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@dhanu084"/>

```py
class StockSpanner:

    def __init__(self):
        self.span = []

    def next(self, price: int) -> int:
        '''
            * if current price is lesser than the last element at
              stack then it can't expand its span so just return 1
            * Return 1 as minimum span as each price is greater
              for current day
                * eg if span is [(100,1), (80,1)] and current price is 60
                  then the span will change to [(100,1), (80,1), (60,1)]
                  and return 1
                * in tuple (100,1) 100 represents price
                  and 1 represents its span
        '''
        current_span = 1
        if not self.span or self.span[-1][0] > price:
            # adding tuples to the span array eg [(75,1),(60,1)]
            self.span.append((price, 1))
            return current_span

        '''
            * Keep popping the stack if current price is greater
              than or equal to the top of the span stack
            * while popping always add the span of the popped item and not 1
            * Once popped keep in mind to add the (price, current_span) of
            the current price
                * eg when span is [(100,1), (80,1), (60,1)]
                  and current price is 70 then span of 70 will be 1 + span
                  of the top of stack which is 1from 60 so the span
                  will be [(100,1), (80,1), (70,2)]
        '''

        while self.span and self.span[-1][0] <= price:
            current_span += self.span.pop()[1]
        self.span.append((price, current_span))

        return current_span
```

</TabItem>
</Tabs>
