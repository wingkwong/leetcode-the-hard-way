---
description: 'Author: @wkw | https://leetcode.com/problems/n-th-tribonacci-number/'
tags: [Math, Dynamic Programming, Memoization]
---

# 1137 - N-th Tribonacci Number (Easy)

## Problem Link

https://leetcode.com/problems/n-th-tribonacci-number/

## Problem Statement

The Tribonacci sequence Tn is defined as follows:

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given `n`, return the value of Tn.

**Example 1:**

```
Input: n = 4
Output: 4
Explanation:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
```

**Example 2:**

```
Input: n = 25
Output: 1389537
```

**Constraints:**

- `0 <= n <= 37`
- The answer is guaranteed to fit within a 32-bit integer, ie. `answer <= 2^31 - 1`.

## Approach 1: Dynamic Programming

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
// TC: O(N)
// SC: O(N)
class Solution {
public:
    // since first three numbers are given,
    // let dp[i] be the value of T_n
    // we can build the dp[i] based on dp[i - 1] + dp[i - 2] + dp[i - 3]
    int tribonacci(int n) {
        // first three numbers are known
        if (n == 0) return 0;
        if (n == 1 || n == 2) return 1;
        // dp[i]: the value of T_n
        vector<int> dp(n + 1);
        // base case
        dp[0] = 0;
        dp[1] = dp[2] = 1;
        // dp[i] is the sum of the previous three values
        for(int i = 3; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
        return dp[n];
    }
};
```

</TabItem>
</Tabs>

## Approach 2: Dynamic Programming (Space Optimized)

In the above DP solution, we can further optimize the space to constant space since we just need to know the previous three values.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
// TC: O(N)
// SC: O(1)
class Solution {
public:
    int tribonacci(int n) {
        if (n == 0) return 0;
        if (n == 1 || n == 2) return 1;
        // vector<int> dp(n + 1);
        // dp[0] = 0;
        // dp[1] = dp[2] = 1;
        int a = 0, b = 1, c = 1, t;
        for(int i = 3; i <= n; i++) {
            // dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
            t = a + b + c;
            a = b;
            b = c;
            c = t;
        }
        // return dp[n];
        return c;
    }
};
```

</TabItem>
</Tabs>

## Approach 3: Hardcode

Here's the hardcoded solution. In case someone is interested, you may take a look at the tribonacci sequence A000073 at OEIS.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    vector<int> lol = { 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768, 10609, 19513, 35890, 66012, 121415, 223317, 410744, 755476, 1389537, 2555757, 4700770, 8646064, 15902591, 29249425, 53798080, 98950096, 181997601, 334745777, 615693474, 1132436852, 2082876103 };
    int tribonacci(int n) {
        return lol[n];
    }
};
```

</TabItem>
</Tabs>
