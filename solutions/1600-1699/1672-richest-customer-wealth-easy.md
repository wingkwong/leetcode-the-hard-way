---
description: 'Author: @wingkwong | https://leetcode.com/problems/richest-customer-wealth/'
tags: [Array, Matrix]
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 1672 - Richest Customer Wealth (Easy)

## Problem Link

https://leetcode.com/problems/richest-customer-wealth

## Problem Statement

You are given an `m x n` integer grid `accounts` where `accounts[i][j]` is the amount of money the `i-th` customer has in the `j-th` bank. Return _the **wealth** that the richest customer has._

A customer's **wealth** is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum **wealth**.

**Example 1:**

```
Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.
```

**Example 2:**

```
Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation: 
1st customer has wealth = 6
2nd customer has wealth = 10 
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.
```

**Example 3:**

```
Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
Output: 17
```

**Constraints:**

* `m == accounts.length`
* `n == accounts[i].length`
* `1 <= m, n <= 50`
* `1 <= accounts[i][j] <= 100`

## Approach 1: Max Row Sum

Given a `m x n` grid, we need to find the maximum row sum. We iterate each row and define `wealth = 0`, then iterate each column, add each `accounts[i][j]` to `wealth`. After that, update the answer if the wealth for the current row is greater than the current maximum sum.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int maximumWealth(vector<vector<int>>& accounts) {
        int ans = 0, n = accounts.size(), m = accounts[0].size();
        for (int i = 0; i < n; i++) {
            int wealth = 0;
            for (int j = 0; j < m; j++) {
                wealth += accounts[i][j];
            }
            ans = max(ans, wealth);
        }
        return ans;
    }
};
```

Actually we don't need to define `n`, `m`, `i` and `j` if we write in the following style.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int maximumWealth(vector<vector<int>>& accounts) {
        int ans = 0;
        for (auto x : accounts) {
            int wealth = 0;
            for (auto y : x) wealth += y;
            ans = max(ans, wealth);
        }
        return ans;
    }
};
```

## Approach 2: Max Row Sum (STL)

Same idea as approach 1 but it is using STL.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int maximumWealth(vector<vector<int>>& accounts) {
        int ans = 0;
        for (auto x : accounts) {
            ans = max(ans, accumulate(x.begin(), x.end(), 0));
        }
        return ans;
    }
}
```
