---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/
---

# 2160 - Minimum Sum of Four Digit Number After Splitting Digits (Easy)

## Problem Link

https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/

## Problem Statement

You are given a **positive** integer `num` consisting of exactly four digits. Split `num` into two new integers `new1` and `new2` by using the **digits** found in `num`. **Leading zeros** are allowed in `new1` and `new2`, and **all** the digits found in `num` must be used.

For example, given `num = 2932`, you have the following digits: two `2`'s, one `9` and one `3`. Some of the possible pairs `[new1, new2]` are `[22, 93]`, `[23, 92]`, `[223, 9]` and `[2, 329]`.

Return _the **minimum** possible sum of_ `new1` _and_ `new2`.

**Example 1:**

```
Input: num = 2932
Output: 52
Explanation: Some possible pairs [new1, new2] are [29, 23], [223, 9], etc.
The minimum sum can be obtained by the pair [29, 23]: 29 + 23 = 52.
```

**Example 2:**

```
Input: num = 4009
Output: 13
Explanation: Some possible pairs [new1, new2] are [0, 49], [490, 0], etc. 
The minimum sum can be obtained by the pair [4, 9]: 4 + 9 = 13.
```

**Constraints:**

* `1000 <= num <= 9999`

## Approach 1: Sorting & Greedy

We can sort those 4 digits in an increasing order. Let's say $$abcd$$ where $$a <= b <= c <= d$$. We put those two smallest digits to be decimal's place, and those two largest ones in one's place. The answer is simply $$ac + bd$$.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int minimumSum(int num) {
        string s = to_string(num);
        vector<int> d;
        while (num > 0) {
            d.push_back(num % 10);
            num /= 10;
        }
        sort(d.begin(), d.end());
        return d[0] * 10 + d[3] + d[1] * 10 + d[2];
    }
};
```
