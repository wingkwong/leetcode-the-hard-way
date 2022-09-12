---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/
---

# 2190 - Most Frequent Number Following Key In an Array (Easy)

## Problem Link

https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/

## Problem Statement

You are given a **0-indexed** integer array `nums`. **** You are also given an integer `key`, which is present in `nums`.

For every unique integer `target` in `nums`, **count** the number of times `target` immediately follows an occurrence of `key` in `nums`. In other words, count the number of indices `i` such that:

* `0 <= i <= n - 2`,
* `nums[i] == key` and,
* `nums[i + 1] == target`.

Return _the_ `target` _with the **maximum** count_. The test cases will be generated such that the `target` with maximum count is unique.

**Example 1:**

```
Input: nums = [1,100,200,1,100], key = 1
Output: 100
Explanation: For target = 100, there are 2 occurrences at indices 1 and 4 which follow an occurrence of key.
No other integers follow an occurrence of key, so we return 100.
```

**Example 2:**

```
Input: nums = [2,2,2,2,3], key = 2
Output: 2
Explanation: For target = 2, there are 3 occurrences at indices 1, 2, and 3 which follow an occurrence of key.
For target = 3, there is only one occurrence at index 4 which follows an occurrence of key.
target = 2 has the maximum number of occurrences following an occurrence of key, so we return 2.
```

**Constraints:**

* `2 <= nums.length <= 1000`
* `1 <= nums[i] <= 1000`
* The test cases will be generated such that the answer is unique.

## Approach 1: Counting

We iterate the input to find the possible $$target$$ and store its occurrence. Return the maximum one.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int mostFrequent(vector<int>& nums, int key) {
        int n = nums.size(), ans = 0;
        // use hash map to store the occurrence of a possible target
        unordered_map<int, int> m;
        for (int i = 1; i < n; i++) {
            // the previous one is key
            // nums[i] is target
            if (nums[i - 1] == key) {
                // count occurrence
                m[nums[i]]++;
            }
        }
        int mx = 0;
        for (auto x : m) {
            // check if it is greater than the current max count
            if (x.second > mx) {
                // store the number
                ans = x.first;
                // update the max count
                mx = x.second;
            }
        }
        return ans;
    }
};
```

Once we get the idea, we can further optimise the above solution a bit. We only set answer if the current number is $$target$$ and its occurrence is greater than the current max count.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int mostFrequent(vector<int>& nums, int key) {
        int n = nums.size(), ans = 0;
        unordered_map<int, int> m;
        for (int i = 1; i < n; i++) {
            if (nums[i - 1] == key && ++m[nums[i]] > m[ans]) {
                ans = nums[i];
            }
        }
        return ans;
    }
};
```
