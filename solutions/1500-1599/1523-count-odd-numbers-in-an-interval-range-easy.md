---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/
---

# 1523 - Count Odd Numbers in an Interval Range (Easy)

## Problem Statement

Given two non-negative integers `low` and `high`. Return the _count of odd numbers between_ `low` _and_ `high` _(inclusive)_.

**Example 1:**

```
Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].
```

**Example 2:**

```
Input: low = 8, high = 10
Output: 1
Explanation: The odd numbers between 8 and 10 are [9].
```

**Constraints:**

* `0 <= low <= high <= 10^9`

## Approach 1: Brute Force

Iterate from $$low$$ to $$high$$ and check if $$i$$ is odd.

```go
func countOdds(low int, high int) int {
    ans := 0
    for i := low; i <= high; i += 1 {
        ans += i & 1
    }
    return ans
}
```

## Approach 2: Math

Numbers of odd numbers in $$[low, high]$$ is same as $$[1, high] - [1 , low - 1]$$. Therefore, we just find out those two numbers to get the answer. There are $$(high + 1) / 2$$ odd numbers in $$[1, high]$$ and $$low/2$$ odd numbers in $$[1, low - 1]$$.

```go
func countOdds(low int, high int) int {
    return (high + 1) / 2 - (low / 2);
}
```
