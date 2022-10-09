---
description: 'Author: @wingkwong | https://leetcode.com/problems/counting-bits/'
---

# 0338 - Counting Bits (Easy)

## Problem Link

https://leetcode.com/problems/counting-bits/

## Problem Statement

Given an integer `n`, return _an array_ `ans` _of length_ `n + 1` _such that for each_ `i` __ (`0 <= i <= n`)_,_ `ans[i]` _is the **number of**_ `1`_**'s** in the binary representation of_ `i`.

**Example 1:**

```
Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10
```

**Example 2:**

```
Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101 
```

**Constraints:**

* `0 <= n <= 10^5`

**Follow up:**

* It is very easy to come up with a solution with a runtime of `O(n log n)`. Can you do it in linear time `O(n)` and possibly in a single pass?
* Can you do it without using any built-in function (i.e., like `__builtin_popcount` in C++)?

## Approach 1: (n + 1) hammingWeight

If you've solved [0191 - Number of 1 Bits (Easy)](../0100-0199/number-of-1-bits-easy), then you can use that solution in this problem. The time complexity is $$O(n logn)$$.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    // Check out 0191 - Number of 1 Bits (Easy) - Approach 3 
    // for detailed explanation
    int hammingWeight(int n) {
        int ans = 0;
        for (; n; n = n & (n - 1)) ans++;
        return ans;
    }
    
    vector<int> countBits(int n) {
        vector<int> ans;
        for (int i = 0; i <= n; i++) {
            ans.push_back(hammingWeight(i));
        }
        return ans;
    }
};
```

## Approach 2: One Pass

$i$ & $(i - 1)$ is a common trick to turn the rightmost set bit to $0$. For example, if $i = (1000100)_2$, then $i$ & $(i  - 1)$ would be $(1000000)_2$. We can iterate each number and calculate the number of 1s by adding 1 from the previous state.

The transition function is simply $ans[i] = ans[i$ & $(i - 1)] + 1$.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<int> countBits(int num) {
        vector<int> ans(num + 1, 0);
        for(int i = 1; i <= num; i++) {
            // no. of 1s in (1000100) = no. of 1s in (1000000) + 1
            ans[i] = ans[i & (i - 1)] + 1;
        }
        return ans; 
    }
};
```
