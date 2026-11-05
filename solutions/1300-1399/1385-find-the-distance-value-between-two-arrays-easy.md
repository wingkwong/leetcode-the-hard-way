---
description: 'Author: @wkw | https://leetcode.com/problems/find-the-distance-value-between-two-arrays'
tags: ['Array', 'Two Pointers', 'Binary Search', 'Sorting']
---

# 1385 - Find the Distance Value Between Two Arrays (Easy)

## Problem Link

https://leetcode.com/problems/find-the-distance-value-between-two-arrays

## Problem Statement

Given two integer arrays `arr1` and `arr2`, and the integer `d`, *return the distance value between the two arrays*.

The distance value is defined as the number of elements `arr1[i]` such that there is not any element `arr2[j]` where `|arr1[i]-arr2[j]| <= d`.

**Example 1:**

```
Input: arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2
Output: 2
Explanation: 
For arr1[0]=4 we have: 
|4-10|=6 > d=2 
|4-9|=5 > d=2 
|4-1|=3 > d=2 
|4-8|=4 > d=2 
For arr1[1]=5 we have: 
|5-10|=5 > d=2 
|5-9|=4 > d=2 
|5-1|=4 > d=2 
|5-8|=3 > d=2
For arr1[2]=8 we have:
|8-10|=2 <= d=2
|8-9|=1 <= d=2
|8-1|=7 > d=2
|8-8|=0 <= d=2
```

**Example 2:**

```
Input: arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3
Output: 2
```

**Example 3:**

```
Input: arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6
Output: 1
```

**Constraints:**

- `1 <= arr1.length, arr2.length <= 500`
- `-1000 <= arr1[i], arr2[j] <= 1000`
- `0 <= d <= 100`

## Approach 1: Simulation

The most direct way is to check every pair $(arr1[i], arr2[j])$. For each value in $arr1$, we test whether all values in $arr2$ are farther than $d$ away from it. If that condition holds, then this value contributes $1$ to the final answer.

The time complexity is $O(n * m)$, which is still acceptable because both arrays have length at most $500$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def findTheDistanceValue(self, arr1: list[int], arr2: list[int], d: int) -> int:
        return sum(
            all(abs(v1 - v2) > d for v2 in arr2)
            for v1 in arr1
        )
```

</TabItem>
</Tabs>


## Approach 2: Binary Search

We only care whether there exists a value in $arr2$ within the interval $[x - d, x + d]$ for each $x$ in $arr1$. After sorting $arr2$, we can use binary search to quickly locate the first candidate that is at least $x - d$.

Let $i = bisect_left(arr2, x - d)$. This gives the first index whose value is not smaller than $x - d$. If $i$ is already out of bounds, then no such value exists. Otherwise, we only need to check $arr2[i]$: if $arr2[i] > x + d$, then even the first possible candidate is still too large, so there is no value in $arr2$ within distance $d$ from $x$.

Sorting costs $O(m log m)$, and each query costs $O(log m)$, so the total time complexity is $O(m log m + n log m)$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
from bisect import bisect_left

class Solution:
    def findTheDistanceValue(self, arr1: list[int], arr2: list[int], d: int) -> int:
        arr2.sort()
        return sum((i := bisect_left(arr2, x - d)) == len(arr2) or arr2[i] > x + d for x in arr1)
```

</TabItem>
</Tabs>

## Approach 3: Two Pointers

We can do even better after sorting both arrays. Suppose we process $arr1$ from left to right. For a current value $x$, any value in $arr2$ smaller than $x - d$ can never help this $x$ or any later value, so we move pointer $j$ forward until $arr2[j]$ is the first value that is not too small.

After that, there are only two possibilities:

- $j$ reaches the end of $arr2$, so no candidate remains
- or $arr2[j]$ is the first possible candidate, and if it is still greater than $x + d$, then no value in $arr2$ lies inside $[x - d, x + d]$

Because both arrays are sorted, pointer $j$ never moves backward. This makes the scanning part linear, so the overall complexity is $O(n log n + m log m)$ due to sorting, followed by an $O(n + m)$ sweep.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def findTheDistanceValue(self, arr1: list[int], arr2: list[int], d: int) -> int:
        arr1.sort()
        arr2.sort()
        res = j = 0
        for x in arr1:
            while j < len(arr2) and arr2[j] < x - d: j += 1
            if j == len(arr2) or arr2[j] > x + d: res += 1
        return res
```

</TabItem>
</Tabs>