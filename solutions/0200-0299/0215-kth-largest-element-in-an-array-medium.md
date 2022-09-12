---
description: 'Author: @wingkwong | https://leetcode.com/problems/kth-largest-element-in-an-array/'
tags: ['Priority Queue']
---

# 0215 - Kth Largest Element in an Array (Medium)

## Problem Link

https://leetcode.com/problems/kth-largest-element-in-an-array/

## Problem Statement

Given an integer array `nums` and an integer `k`, return _the_ `kth` _largest element in the array_.

Note that it is the `kth` largest element in the sorted order, not the `kth` distinct element.

**Example 1:**

```
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
```

**Example 2:**

```
Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
```

**Constraints:**

* `1 <= k <= nums.length <= 10^4`
* `-10^4 <= nums[i] <= 10^4`

## Approach 1: Priority Queue

When we look for `k-th` elements, we can think of Priority Queue as it internally sorts the container. We can check if the size exceeds $k$. 

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        priority_queue<int> pq;
        // push elements to priority queue
        for (auto &x : nums) pq.push(x);
        // only keep k largest elements
        for (int i = 0; i < k - 1; i++) pq.pop();
        // return the top which is the k-th largest element
        return pq.top();
    }
};
```

## Approach 2: STL

The following STL functions can partially sort to solve the problem.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        partial_sort(nums.begin(), nums.begin() + k, nums.end(), greater<int>());
        return nums[k - 1];
    }
};
```

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        nth_element(nums.begin(), nums.begin() + k - 1, nums.end(), greater<int>());
        return nums[k - 1];
    }
};
```