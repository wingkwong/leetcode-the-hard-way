---
description: 'Author: @wingkwong | https://leetcode.com/problems/combinations/'
tags: [Backtracking]
---

# 0077 - Combinations (Medium) 

## Problem Link

https://leetcode.com/problems/combinations/

## Problem Statement

Given two integers `n` and `k`, return *all possible combinations of* `k` *numbers chosen from the range* `[1, n]`.

You may return the answer in **any order**.

**Example 1:**

```
Input: n = 4, k = 2
Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
Explanation: There are 4 choose 2 = 6 total combinations.
Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.
```

**Example 2:**

```
Input: n = 1, k = 1
Output: [[1]]
Explanation: There is 1 choose 1 = 1 total combination.
```

**Constraints:**

- `1 <= n <= 20`
- `1 <= k <= n`

## Approach 1: Backtracking

This question can be solved by standard backtracking. Check out [Backtracking](../../tutorials/basic-topics/backtracking) section for the detailed explanation.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<vector<int>> combine(int n, int k) {
        vector<int> chosen;
        vector<vector<int>> ans;
        function<void(int)> backtrack = [&](int start) {
            if (chosen.size() == k) {
                ans.push_back(chosen);
                return;
            }
            for (int i = start; i <= n; i++) {
                chosen.push_back(i);
                backtrack(i + 1);
                chosen.pop_back();
            } 
        };
        backtrack(1);
        return ans;
    }
};
```

</TabItem>
</Tabs>