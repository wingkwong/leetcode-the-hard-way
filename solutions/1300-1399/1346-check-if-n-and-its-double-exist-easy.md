---
description: >-
  Author: @wkw | https://leetcode.com/problems/check-if-n-and-its-double-exist/
---

# 1346 - Check If N and Its Double Exist (Easy)

## Problem Link

https://leetcode.com/problems/check-if-n-and-its-double-exist/

## Problem Statement

Given an array `arr` of integers, check if there exists two integers `N` and `M` such that `N` is the double of `M` ( i.e. `N = 2 * M`).

More formally check if there exists two indices `i` and `j` such that :

- `i != j`
- `0 <= i, j < arr.length`
- `arr[i] == 2 * arr[j]`

**Example 1:**

```
Input: arr = [10,2,5,3]
Output: true
Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.
```

**Example 2:**

```
Input: arr = [7,1,14,11]
Output: true
Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.
```

**Example 3:**

```
Input: arr = [3,1,7,11]
Output: false
Explanation: In this case does not exist N and M, such that N = 2 * M.
```

**Constraints:**

- `2 <= arr.length <= 500`
- `-10^3 <= arr[i] <= 10^3`

## Approach 1: Binary Search

:::info Prerequisite

- [Binary Search](../../tutorials/basic-topics/binary-search)

:::

First we sort the input, and we iterate each element and look for its double using binary search. For the binary search function, we can use the same solution as [0704 - Binary Search (Easy)](../0700-0799/binary-search-easy).

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    // 0704 - Binary Search (Easy)
    int search(vector<int>& nums, int target) {
        // init possible boundary
        int n = nums.size(), l = 0, r = n - 1;
        while (l < r) {
            // get the middle one
            // for even number of elements, take the lower one
            int m = l + (r - l) / 2;
            // exclude m
            if (target > nums[m]) l = m + 1;
            // include m
            else r = m;
        }
        return nums[l] == target ? l : -1;
    }

    bool checkIfExist(vector<int>& arr) {
        sort(arr.begin(), arr.end());
        for (int i = 0; i < arr.size(); i++) {
            int res = search(arr, arr[i] * 2);
            if (res != -1 && res != i) {
                return true;
            }
        }
        return false;
    }
};
```
