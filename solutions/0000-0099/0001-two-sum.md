---
description: https://leetcode.com/problems/two-sum/
---

# 0001 - Two Sum

## Problem Statement

Given an array of integers `nums` and an integer `target`, return _indices of the two numbers such that they add up to `target`_.

You may assume that each input would have _**exactly**_** one solution**, and you may not use the _same_ element twice.

You can return the answer in any order.

## Approach 1: Brute Force

Since this is an easy problem, most of the time brute force solutions would work due to the loose constraints. However, this solution gives O(n^2) time complexity and O(1) space complexity.

```cpp
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int n = (int) nums.size();
        for (int i = 0; i < n - 1; i++) {
            for (int j = i + 1; j < n; j++) {
                if (nums[i] + nums[j] == target) {
                    return {i, j};
                }
            }
        }
        return {-1, -1};
    }
};
```

## Approach 2: Hash Table

A better way to do it is using one-pass hash table approach. We iterate each element and insert it into the hash table. We also check if the complement already exists in the hash table or not. If so, we can return the answer immediately. This solution gives O(n) time complexity and O(n) space complexity.\


```cpp
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int n = (int) nums.size();
        unordered_map<int, int> m;
        for (int i = 0; i < n; i++) {
            int complement = target - nums[i];
            if (m.count(complement)) {
                return {i, m[complement]};
            }
            m[nums[i]] = i;
        }
        return {-1, -1};
    }
};
```
