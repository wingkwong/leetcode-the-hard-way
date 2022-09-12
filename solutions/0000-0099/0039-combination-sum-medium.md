---
description: 'Author: @wingkwong | https://leetcode.com/problems/combination-sum/'
---

# 0039 - Combination Sum (Medium)

## Problem Link

https://leetcode.com/problems/combination-sum/

## Problem Statement

Given an array of **distinct** integers `candidates` and a target integer `target`, return _a list of all **unique combinations** of_ `candidates` _where the chosen numbers sum to_ `target`_._ You may return the combinations in **any order**.

The **same** number may be chosen from `candidates` an **unlimited number of times**. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

It is **guaranteed** that the number of unique combinations that sum up to `target` is less than `150` combinations for the given input.

**Example 1:**

```
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
```

**Example 2:**

```
Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
```

**Example 3:**

```
Input: candidates = [2], target = 1
Output: [] 
```

**Constraints:**

* `1 <= candidates.length <= 30`
* `1 <= candidates[i] <= 200`
* All elements of `candidates` are **distinct**.
* `1 <= target <= 500`

## Approach 1: Backtracking

We can apply backtracking in this problem.

First, we sort the array and build our candidates incrementally. We iterate from starting point and  push each candidate to `tmp` and call `backtrack()` with the updated  $$target_{new} = target_{old} - candidates[i]$$.

If we have a valid solution, we push `tmp` to answer and abandon a candidate.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    void backtrack(vector<int>& candidates, int target, vector<vector<int>>& ans, vector<int>& tmp, int start) {
        if(target == 0) {
            ans.push_back(tmp);
            return;
        }
        for(int i = start; i < candidates.size() && target >= candidates[i]; i++){
            tmp.push_back(candidates[i]);
            backtrack(candidates, target - candidates[i], ans, tmp, i);
            tmp.pop_back();
        }
    }
    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
        sort(candidates.begin(), candidates.end());
        vector<vector<int>> ans;
        vector<int> tmp;
        backtrack(candidates, target, ans, tmp, 0);
        return ans;
    }
};
```
