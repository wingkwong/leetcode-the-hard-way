---
description: 'Author: @wkw | https://leetcode.com/problems/contains-duplicate-ii/'
tags: ['Sliding Window']
---

# 0219 - Contains Duplicate II (Easy)

## Problem Link

https://leetcode.com/problems/contains-duplicate-ii/

## Problem Statement

Given an integer array `nums` and an integer `k`, return `true` if there are two **distinct indices** `i` and `j` in the array such that `nums[i] == nums[j]` and `abs(i - j) <= k`.

**Example 1:**

```
Input: nums = [1,2,3,1], k = 3
Output: true
```

**Example 2:**

```
Input: nums = [1,0,1,1], k = 1
Output: true
```

**Example 3:**

```
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
```

**Constraints:**

- `1 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`
- `0 <= k <= 10^5`

## Approach 1: Sliding Window

Since $k$ is provided, we can use a fixed-length sliding window approach. As we need to check if a variable exists before, we use a hash map to store the occurrence of each number.

We can do the following steps.

1. We push first $min(n, k)$ elements to the hash map. If it exists before, then return true. By specifying $min(n, k)$, we can guarantee that the condition $abs(i - j) <= k$ is always true.
2. For $[k .. n)$, if we the element exists in hash map, then return false. Otherwise, we remove $nums[i - k]$ from the hash map and include $nums[i]$ to the hash map, i.e. sliding the window to the right.

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    bool containsNearbyDuplicate(vector<int>& nums, int k) {
        if (k == 0) return false;
        unordered_map<int, int> m;
        int n = nums.size();
        // include elements in the initial fixed-length sliding window
        for (int i = 0; i < min(n, k); i++) {
            // if nums[i] exists in the hash map -> then return true
            if (m[nums[i]]) return true;
            // push nums[i] to hash map
            m[nums[i]]++;
        }
        // now shifting the window to the right one by one
        for (int i = k; i < n; i++) {
            // if nums[i] exists in the hash map -> then return true
            if (m[nums[i]]) return true;
            // remove nums[i - k] from the hash map (i.e the leftmost one in the window)
            m[nums[i - k]]--;
            // add nums[i] to the hash map (i.e. the rightmost one in the window)
            m[nums[i]]++;
        }
        return false;
    }
};
```

Once you get the idea, we can combine both into a single for loop.

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    bool containsNearbyDuplicate(vector<int>& nums, int k) {
        unordered_map<int, int> m;
        for (int i = 0; i < nums.size(); i++) {
            // if nums[i] exists in the hash map -> then return true
            if (m[nums[i]]) return true;
            // remove nums[i - k] from the hash map (i.e the leftmost one in the window)
            if (i >= k) m[nums[i - k]]--;
            // add nums[i] to the hash map (i.e. the rightmost one in the window)
            m[nums[i]]++;
        }
        return false;
    }
};
```
