---
description: 'Author: @wingkwong | https://leetcode.com/problems/permutations/'
---

# 0046 - Permutations (Medium)

## Problem Link

https://leetcode.com/problems/permutations/

## Problem Statement

Given an array `nums` of distinct integers, return _all the possible permutations_. You can return the answer in **any order**.

**Example 1:**

```
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

**Example 2:**

```
Input: nums = [0,1]
Output: [[0,1],[1,0]]
```

**Example 3:**

```
Input: nums = [1]
Output: [[1]] 
```

**Constraints:**

* `1 <= nums.length <= 6`
* `-10 <= nums[i] <= 10`
* All the integers of `nums` are **unique**.

## Approach 1: STL

Use C++ STL `next_permutation` to generate all possible permutations.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<vector<int>> permute(vector<int>& nums) {
        vector<vector<int>> ans;
        sort(nums.begin(), nums.end());
        do {
            ans.push_back(nums);
        } while(next_permutation(nums.begin(), nums.end()));
        return ans;
    }
};
```

## Approach 2: Backtracking

Check out [Backtracking](../../tutorials/basic-topics/backtracking) section for the detailed explanation.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    void backtrack(vector<int>& nums, vector<vector<int>>& ans, vector<int>& tmp) {
        if ((int) tmp.size() == (int) nums.size()) {
            ans.push_back(tmp);
            return;
        }
        for (auto x : nums) {
            if (find(tmp.begin(), tmp.end(), x) != tmp.end()) continue;
            tmp.push_back(x);
            backtrack(nums, ans, tmp);
            tmp.pop_back();   
        }
    }
    
    vector<vector<int>> permute(vector<int>& nums) {
        // sort(nums.begin(), nums.end());
        vector<vector<int>> ans;
        vector<int> tmp;
        backtrack(nums, ans, tmp);
        return ans;
    }
};
```
