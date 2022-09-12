---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/maximum-candies-allocated-to-k-children/
---

# 2226 - Maximum Candies Allocated to K Children (Medium)

## Problem Link

https://leetcode.com/problems/maximum-candies-allocated-to-k-children/

## Problem Statement

You are given a **0-indexed** integer array `candies`. Each element in the array denotes a pile of candies of size `candies[i]`. You can divide each pile into any number of **sub piles**, but you **cannot** merge two piles together.

You are also given an integer `k`. You should allocate piles of candies to `k` children such that each child gets the **same** number of candies. Each child can take **at most one** pile of candies and some piles of candies may go unused.

Return _the **maximum number of candies** each child can get._

**Example 1:**

```
Input: candies = [5,8,6], k = 3
Output: 5
Explanation: We can divide candies[1] into 2 piles of size 5 and 3, and candies[2] into 2 piles of size 5 and 1. We now have five piles of candies of sizes 5, 5, 3, 5, and 1. We can allocate the 3 piles of size 5 to 3 children. It can be proven that each child cannot receive more than 5 candies.
```

**Example 2:**

```
Input: candies = [2,5], k = 11
Output: 0
Explanation: There are 11 children but only 7 candies in total, so it is impossible to ensure each child receives at least one candy. Thus, each child gets no candy and the answer is 0.
```

**Constraints:**

* `1 <= candies.length <= 10^5`
* `1 <= candies[i] <= 10^7`
* `1 <= k <= 10^12`

## Approach 1: Binary Search

We can use binary search to find out the maximum number of candies in a single pile.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int maximumCandies(vector<int>& candies, long long k) {
        long long l = 0, r = 1e12;
        while (l < r) {
            // tips: + 1 here is required to find the max valid element
            long long m = l + (r - l + 1) / 2, cnt = 0;
            // if each child get m candies, 
            // is it possible to allocate to k children?
            for (auto x : candies) cnt += x / m;
            // m is too large
            if (cnt < k) r = m - 1;
            // m is too small
            else l = m;
        }
        return l;
    }
};
```

