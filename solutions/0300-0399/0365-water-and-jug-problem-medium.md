---
description: 'Author: @wingkwong | https://leetcode.com/problems/water-and-jug-problem'
---

# 0365 - Water and Jug Problem (Medium)

## Problem Link

https://leetcode.com/problems/water-and-jug-problem

## Problem Statement

You are given two jugs with capacities `jug1Capacity` and `jug2Capacity` liters. There is an infinite amount of water supply available. Determine whether it is possible to measure exactly `targetCapacity` liters using these two jugs.

If `targetCapacity` liters of water are measurable, you must have `targetCapacity` liters of water contained **within one or both buckets** by the end.

Operations allowed:

* Fill any of the jugs with water.
* Empty any of the jugs.
* Pour water from one jug into another till the other jug is completely full, or the first jug itself is empty.

**Example 1:**

```
Input: jug1Capacity = 3, jug2Capacity = 5, targetCapacity = 4
Output: true
Explanation: The famous Die Hard example 
```

**Example 2:**

```
Input: jug1Capacity = 2, jug2Capacity = 6, targetCapacity = 5
Output: false
```

**Example 3:**

```
Input: jug1Capacity = 1, jug2Capacity = 2, targetCapacity = 3
Output: true 
```

**Constraints:**

* `1 <= jug1Capacity, jug2Capacity, targetCapacity <= 10^6`

## Approach 1: Bézout's identity

It's obvious that it is impossible to measure if the target capacity $$z$$ is greater than the total capacity of jug $$x$$ and jug $$y$$. Otherwise, we can express it as a linear combination of $$x$$ and $$y$$ and check if $$z$$ is a linear combination of $$x$$ and $$y$$. In order to do so, $$z$$ has to be a multiple of the gcd of $$x$$ and $$y$$.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    bool canMeasureWater(int x, int y, int z) {
        // impossible case
        if (x + y < z) return false;
        // check if z is a multiple of GCD(x, y) 
        return z % gcd(x, y) == 0;
    }
};
```
