---
description: 'Author: @wingkwong, @jit, @jaffar | https://leetcode.com/problems/maximum-product-difference-between-two-pairs/'
tags: [Array, Sorting]
---

# 1913 - Maximum Product Difference Between Two Pairs (Easy) 

## Problem Link

https://leetcode.com/problems/maximum-product-difference-between-two-pairs/

## Problem Statement

The **product difference** between two pairs `(a, b)` and `(c, d)` is defined as `(a * b) - (c * d)`.

- For example, the product difference between `(5, 6)` and `(2, 7)` is `(5 * 6) - (2 * 7) = 16`.

Given an integer array `nums`, choose four **distinct** indices `w`, `x`, `y`, and `z` such that the **product difference** between pairs `(nums[w], nums[x])` and `(nums[y], nums[z])` is **maximized**.

Return *the **maximum** such product difference*.

**Example 1:**

```
Input: nums = [5,6,2,7,4]
Output: 34
Explanation: We can choose indices 1 and 3 for the first pair (6, 7) and indices 2 and 4 for the second pair (2, 4).
The product difference is (6 * 7) - (2 * 4) = 34.
```

**Example 2:**

```
Input: nums = [4,2,5,9,7,4,8]
Output: 64
Explanation: We can choose indices 3 and 6 for the first pair (9, 8) and indices 1 and 5 for the second pair (2, 4).
The product difference is (9 * 8) - (2 * 4) = 64.
```

**Constraints:**

- $4 <= nums.length <= 10^4$
- $1 <= nums[i] <= 10^4$

## Approach 1: Sorting

In order to maximize the value of $a * b - c * d$, we need to maximize $a * b$ and minimize $c * d$. Since all numbers are positive, we can simply choose the largest two elements for $a$ and $b$ and smallest two elemnts for $c$ and $d$.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int maxProductDifference(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int n = nums.size();
        return nums[n - 1] * nums[n - 2] - nums[0] * nums[1];
    }
};
```

</TabItem>

<TabItem value="racket" label="Racket">
<SolutionAuthor name="@jit"/>

```racket
(define (max-product-difference nums)
  (match (sort nums <)
    [(list a b _ ... c d) (- (* c d) (* a b))]))
```

</TabItem>
</Tabs>

## Approach 2: One Pass

Same idea as Approach but without sorting.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@jaffar"/>

```py
class Solution:
    def maxProductDifference(self, nums: List[int]) -> int:
        min1 = min2 = float('inf')
        max1 = max2 = float('-inf')
        for num in nums:
            if num <= min1:
                min2 = min1
                min1 = num
            elif num <= min2:
                min2 = num
            if num >= max1:
                max2 = max1
                max1 = num
            elif num >= max2:
                max2 = num
        return int(max1 * max2 - min1 * min2)
```

</TabItem>
</Tabs>