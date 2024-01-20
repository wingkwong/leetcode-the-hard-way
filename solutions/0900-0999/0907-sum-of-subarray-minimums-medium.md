---
description: 'Author: @wingkwong | https://leetcode.com/problems/sum-of-subarray-minimums/'
tags: [Array, Dynamic Programming, Stack, Monotonic Stack]
---

# 0907 - Sum of Subarray Minimums (Medium) 

## Problem Link

https://leetcode.com/problems/sum-of-subarray-minimums/

## Problem Statement

Given an array of integers arr, find the sum of `min(b)`, where `b` ranges over every (contiguous) subarray of `arr`. Since the answer may be large, return the answer **modulo** `109 + 7`.

**Example 1:**

```
Input: arr = [3,1,2,4]
Output: 17
Explanation: 
Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. 
Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
Sum is 17.
```

**Example 2:**

```
Input: arr = [11,81,94,43,3]
Output: 444
```

**Constraints:**

- $1 <= arr.length <= 3 * 10^4$
- $1 <= arr[i] <= 3 * 10^4$

## Approach 1: Stack

If we brute force the solution, it would take $O(n ^ 2)$. We can improve it by using a stack.

We can use a monotonically increasing stack to store the indices of $arr$, which means the elements in a stack are always increasing. When the stack is not empty, we need to pop all elements from the top until $i$ reaches $n$ or $s[-1] <= arr[i]$. Let's say the popped item is $j$, the next smaller one is $k, we can have the range in where $j$ is the minimum. If the stack is empty, we use $-1$. Therefore, we got the following contribution

$$
arr[j] * (i - j) * (j - k)
$$

- Time complexity: $O(n)$
- Space complexity: $O(n)$

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wingkwong"/>

```py
class Solution:
    def sumSubarrayMins(self, arr: List[int]) -> int:
        res, n, M = 0, len(arr), 10 ** 9 + 7
        s = [-1]
        for i in range(n + 1):
            while s[-1] != -1 and (i == n or arr[i] <= arr[s[-1]]): 
                j = s[-1]
                s.pop()
                k = s[-1]
                res += arr[j] * (i - j) * (j - k)
                res %= M
            s.append(i)
        return res
```

</TabItem>
</Tabs>