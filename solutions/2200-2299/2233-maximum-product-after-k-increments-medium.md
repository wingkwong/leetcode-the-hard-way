---
description: >-
  Author: @wkw | https://leetcode.com/problems/maximum-product-after-k-increments/
---

# 2233 - Maximum Product After K Increments (Medium)

## Problem Link

https://leetcode.com/problems/maximum-product-after-k-increments/

## Problem Statement

You are given an array of non-negative integers `nums` and an integer `k`. In one operation, you may choose **any** element from `nums` and **increment** it by `1`.

Return _the **maximum** **product** of_ `nums` _after **at most** _ `k` _operations._ Since the answer may be very large, return it **modulo** `109 + 7`.

**Example 1:**

```
Input: nums = [0,4], k = 5
Output: 20
Explanation: Increment the first number 5 times.
Now nums = [5, 4], with a product of 5 * 4 = 20.
It can be shown that 20 is maximum product possible, so we return 20.
Note that there may be other ways to increment nums to have the maximum product.
```

**Example 2:**

```
Input: nums = [6,3,3,2], k = 2
Output: 216
Explanation: Increment the second number 1 time and increment the fourth number 1 time.
Now nums = [6, 4, 3, 3], with a product of 6 * 4 * 3 * 3 = 216.
It can be shown that 216 is maximum product possible, so we return 216.
Note that there may be other ways to increment nums to have the maximum product.
```

**Constraints:**

- `1 <= nums.length, k <= 10^5`
- `0 <= nums[i] <= 10^6`

## Approach 1: Priority Queue

We should increase the smallest element every time.

> Let's say $$x > y$$. If we add it to the larger value $$x$$, we got $$(x + 1) * y = x * y + y$$. If we add it to the smaller value $$y$$, then we got $$x * (y + 1) = x*y+x$$. We can see that both got $$x * y$$ and we conclude that $$x * y + x > x  * y + y$$.

However, we cannot sort it every time after the increment as it takes too much time. Instead, we can use priority queue to maintain the order.

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int maximumProduct(vector<int>& nums, int k) {
        int M = 1e9 + 7;
        priority_queue<int, vector<int>, greater<int>> pq(nums.begin(), nums.end());
        while (k--) {
            int mi = pq.top(); pq.pop();
            pq.push(mi + 1);
        }
        long long p = 1;
        for (auto x : nums) p = (p * x) % M;
        return p;
    }
};
```
