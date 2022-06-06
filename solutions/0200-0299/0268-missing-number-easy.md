---
description: 'Author: @wingkwong | https://leetcode.com/problems/missing-number/'
tags: ['Array', 'Hash Table', 'Math', 'Bit Manupulation', 'Sorting']
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 0268 - Missing Number (Easy)

## Problem Link

https://leetcode.com/problems/missing-number/

## Problem Statement

Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return _the only number in the range that is missing from the array._

**Example 1:**

```
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
```

**Example 2:**

```
Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
```

**Example 3:**

```
Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
```

**Constraints:**

* `n == nums.length`
* `1 <= n <= 10^4`
* `0 <= nums[i] <= n`
* All the numbers of `nums` are **unique**.

## Approach 1: Sorting

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int missingNumber(vector<int>& nums) {
        int n = nums.size();
        sort(nums.begin(), nums.end());
        // check the first element
        if (nums.front() != 0) return 0;
        // check [1, n)
        for (int i = 1; i < n; i++) {
            // after sorting, the difference is expected to be 1
            // e.g. 1 - 2 - 3 - 4
            // if not, then it means the current index is the missing number
            // e.g. 1 - 2 - 4 (the diff is 2 here)
            if (nums[i] - nums[i - 1] != 1) {
                return i;
            }
        }
        // check the last element
        return n;
    }
};
```

## Approach 2: Bit Manupulation

```cpp
class Solution {
public:
    int missingNumber(vector<int>& nums) {
        // we can utilise the properties of XOR:
        // a ^ a = 0
        // a ^ 0 = a
        // a ^ b ^ c = a ^ c ^ b
        int n = (int) nums.size();
        int ans = n;
        // we can see that the elements in nums would cancel out with their indices
        // except the one which is missing
        for(int i = 0; i < n; i++) {
            ans ^= (i ^ nums[i]);
        }
        return ans;
    }
};
```

## Approach 3: Math

To calculate the sum of first n element, we can use Gauss' Formula - $n * (n + 1) / 2$. The missing number would be the expected sum minus the sum of $nums$.

```cpp
class Solution {
public:
    int missingNumber(vector<int>& nums) {
        int sum = 0;
        for(int x : nums) sum += x;
        return (n * (n + 1) / 2) - sum; 
    }
};
```