---
description: 'Author: @TBC | https://leetcode.com/problems/count-array-pairs-divisible-by-k/'
---

# 2183 -  Count Array Pairs Divisible by K (Hard)

## Problem Link

https://leetcode.com/problems/count-array-pairs-divisible-by-k/

## Problem Statement

Given a **0-indexed** integer array `nums` of length `n` and an integer `k`, return _the **number of pairs**_ `(i, j)` _such that:_

* `0 <= i < j <= n - 1` _and_
* `nums[i] * nums[j]` _is divisible by_ `k`.

**Example 1:**

```
Input: nums = [1,2,3,4,5], k = 2
Output: 7
Explanation: 
The 7 pairs of indices whose corresponding products are divisible by 2 are
(0, 1), (0, 3), (1, 2), (1, 3), (1, 4), (2, 3), and (3, 4).
Their products are 2, 4, 6, 8, 10, 12, and 20 respectively.
Other pairs such as (0, 2) and (2, 4) have products 3 and 15 respectively, which are not divisible by 2.    
```

**Example 2:**

```
Input: nums = [1,2,3,4], k = 5
Output: 0
Explanation: There does not exist any pair of indices whose corresponding product is divisible by 5.
```

**Constraints:**

* `1 <= nums.length <= 10^5`
* `1 <= nums[i], k <= 10^5`

## Approach 1: TBC
