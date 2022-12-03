---
description: "Author: @aryankashyap7, @radojicic23 | https://leetcode.com/problems/climbing-stairs/"
tags: [Math, Dynamic Programming, Memoization]
---

# 0070 - Climbing Stairs (Easy)

## Problem Link

https://leetcode.com/problems/climbing-stairs/

## Problem Statement

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

**Example 1:**

```
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
```

**Example 2:**

```
Input: x = 8
Output: 2
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
```

**Constraints:**

- `1 <= n <= 45`

## Approach 1: Fibonacci Series

We can apply the concept of Fibonacci Numbers to solve this problem. The number of ways to reach the $n^{th}$ step is equal to the sum of ways of reaching $(n-1)^{th}$ step and ways of reaching $(n-2)^{th}$ step. The base cases for this problem are $n = 1$ and $n = 2$.

We can see that for $n = 1$, the number of ways to reach the $1^{st}$ step is $1$ and for $n = 2$, the number of ways to reach the $2^{nd}$ step is $2$. Similarly, for $n = 3$, the number of ways to reach the $3^{rd}$ step is $3$ and for $n = 4$, the number of ways to reach the $4^{th}$ step is $5$. This follows the Fibonacci Series(1, 2, 3, 5, 8, 13, ...).

Time Complexity: $O(n)$, where $n$ is the number of steps to reach the top.

Space complexity: $O(1)$

<Tabs>
<TabItem value="cpp" label="C++">

<SolutionAuthor name="@aryankashyap7"/>

```cpp
class Solution {
public:
    int climbStairs(int n){
        // base cases
        if (n < 4) return n;
        // apply Fibonacci Series where a and b are the previous two numbers
        int a = 2, b = 3;
        int res = 0;
        // calculate the number of ways to reach the n^{th} step
        for (int i = 4; i <= n; i++) {
            res = a + b;
            // Updating the values of a and b
            if (i % 2 == 0) a = res;
            else b = res;
        }
        // return the number of ways possible
        return res;
    }
};
```

</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@radojicic23"/>

```python
class Solution:
    def climbStairs(self, n: int) -> int:
        # base case 
        if n < 4: 
            return n
        # apply Fibonacci Series where a and b are the previous two numbers
        a, b = 2, 3
        res = 0
        # calculate the number of ways to reach the n^{th} step
        for i in range(4, n+1):
            res = a + b
            # updating the values of a and b
            if (i % 2 == 0):
                a = res 
            else:
                b = res 
        return res 
```

</TabItem>
</Tabs>
