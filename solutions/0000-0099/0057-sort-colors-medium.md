---
description: 'Author: @ganajayant| https://leetcode.com/problems/sort-colors/'
tags: [Array, Two Pointers, Sorting]
---

# 007 - Sort Colors (Medium) 

## Problem Link

https://leetcode.com/problems/sort-colors/

## Problem Statement

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

**Example 1:**

```
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
```

**Example 2:**

```
Input: nums = [2,0,1]
Output: [0,1,2]
```

**Constraints:**

- `n == nums.length`
- `1 <= n <= 300`
- `1 <= m, n <= 100`
- `nums[i] is either 0, 1, or 2`

## Approach 1: Counting
Count number of 0's 1's and 2's and add those numbers in array
<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@ganajayant"/>

```java
class Solution {
    public void sortColors(int[] nums) {
        int q[] = { 0, 0, 0 };
        for (int i : nums) {
            if (i == 0) {
                q[0]++;
            } else if (i == 1) {
                q[1]++;
            } else {
                q[2]++;
            }
        }
        for (int i = 0; i < q[0]; i++) {
            nums[i] = 0;
        }
        for (int i = q[0]; i < q[0] + q[1]; i++) {
            nums[i] = 1;
        }
        for (int i = q[1] + q[0]; i < q[0] + q[1] + q[2]; i++) {
            nums[i] = 2;
        }
    }
}
```
</TabItem>
</Tabs>