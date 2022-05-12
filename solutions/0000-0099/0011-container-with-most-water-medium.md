---
description: 'Author: @wingkwong | https://leetcode.com/problems/container-with-most-water/'
---

# 0011 - Container With Most Water (Medium)

## Problem Statement

You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `ith` line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return _the maximum amount of water a container can store_.

**Notice** that you may not slant the container.

&#x20;

**Example 1:**

![](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question\_11.jpg)

```
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
```

**Example 2:**

```
Input: height = [1,1]
Output: 1
```

**Constraints:**

* `n == height.length`
* `2 <= n <= 10^5`
* `0 <= height[i] <= 10^4`

## Approach 1: Two Pointers

We know that the area is $$width * height$$. Given two lines with different heights, we should only take the minimum one and the width is simply their distance. We use two pointers to track the lines, every time we calculate the area and move either one line. If the left line is shorter, then move the left one because we want to keep the maximum one, and vice versa.

```cpp
class Solution {
public:
    int maxArea(vector<int>& height) {
        int ans = 0, l = 0, r = height.size() - 1;
        while (l < r) {
            // calculate the current area
            ans = max(ans, min(height[l], height[r]) * (r - l));
            // keep the max one and move the min one
            if (height[l] < height[r]) l++;
            else r--;
        }
        return ans;
    }
};
```
