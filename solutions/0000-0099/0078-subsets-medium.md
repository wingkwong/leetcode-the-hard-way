---
description: 'Author: @wingkwong | https://leetcode.com/problems/subsets/'
---

# 0078 - Subsets (Medium)

## Problem Link

https://leetcode.com/problems/subsets/

## Problem Statement

Given an integer array `nums` of **unique** elements, return _all possible subsets (the power set)_.

The solution set **must not** contain duplicate subsets. Return the solution in **any order**.

**Example 1:**

```
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
```

**Example 2:**

```
Input: nums = [0]
Output: [[],[0]] 
```

**Constraints:**

* `1 <= nums.length <= 10`
* `-10 <= nums[i] <= 10`
* All the numbers of `nums` are **unique**.

## Approach 1: Bit  Manipulation

We can try all the possible combinations of the numbers. For each number there are only two options - you either take the number or not. If the bit is set as 1, then it means this number needs to be taken. If the bit is set as 0, we don't take this number.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<vector<int>> subsets(vector<int>& nums) {
        int n = nums.size();
        // number of subsets for n elements would be 2 ^ n
        // because for each element, you can choose to take it or not
        // if take = 1, don't take = 0, then we can use bit manipulation 
        int p = 1 << n; // 1 * 2 ^ n
        vector<vector<int>> ans;
        for(int i = 0; i < p; i++){
            vector<int> t; 
            for(int j = 0; j < n; j++){
               if((1 << j) & i) t.emplace_back(nums[j]); 
            }
            ans.emplace_back(t);
        }
        return ans;
    }
};
```

## Approach 2: Backtracking

Standard [Backtracking](../../tutorials/basic-topics/backtracking) problem.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    void backtrack(vector<vector<int>>& ans, vector<int>& tmp, vector<int>& nums, int start) {
        ans.push_back(tmp);    
        for(int i = start; i < nums.size(); i++) {
            tmp.push_back(nums[i]);
            backtrack(ans, tmp, nums, i + 1);
            tmp.pop_back();
        }
    }
    
    vector<vector<int>> subsets(vector<int>& nums) {
        vector<vector<int>> ans;
        vector<int> tmp;
        sort(nums.begin(), nums.end());
        backtrack(ans, tmp, nums,  0);
        return ans;
    }
};
```
