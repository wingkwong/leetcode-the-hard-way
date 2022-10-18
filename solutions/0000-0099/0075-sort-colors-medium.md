---
description: 'Author: @ganajayant| https://leetcode.com/problems/sort-colors/'
tags: [Array, Two Pointers, Sorting]
---

# 0075 - Sort Colors (Medium) 

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
    
## Approach 2: Bubble Sort

We want all integers together. One way of doing this is sorting the array so that we will get all 0 initially, then all 1 and 2. We can use bubble sort for sorting.
    
Time Complexity: $O(n^2)$, where $n$ - elements in array

Space complexity: $O(1)$

<Tabs>
<TabItem value="c++" label="C++">
<SolutionAuthor name="@RadhikaChhabra17"/>

```c++
class Solution {
    void sortColors(vector<int>& nums) {
        int n = nums.size();
        bool check = true;
        for(int i = 0; i < n - 1 && check; i++) {
            check = false;
            for(int j = 0; j < n - i - 1; j++) {
                if(nums[j] > nums[j + 1]) {
                    swap(nums[j], nums[j + 1]);
                    check = true;
                }
            }
        }
    }
}

```
</TabItem>
</Tabs>
