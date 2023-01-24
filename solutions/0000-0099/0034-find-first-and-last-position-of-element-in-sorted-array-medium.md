---
description: >-
  Author: @wingkwong, @ganajayant, @vigneshshiv |
  https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
---

# 0034 - Find First and Last Position of Element in Sorted Array (Medium)

## Problem Link

https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

## Problem Statement

Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value.

If `target` is not found in the array, return `[-1, -1]`.

You must write an algorithm with `O(log n)` runtime complexity.

**Example 1:**

```
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
```

**Example 2:**

```
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
```

**Example 3:**

```
Input: nums = [], target = 0
Output: [-1,-1]
```

**Constraints:**

* `0 <= nums.length <= 10^5`
* `-109 <= nums[i] <= 10^9`
* `nums` is a non-decreasing array.
* `-109 <= target <= 10^9`

## Approach 1: Binary Search

:::info Prerequisite

- [Binary Search](../../tutorials/basic-topics/binary-search)

:::

<Tabs>
<TabItem value="c++" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int getFirstPosition(vector<int>& nums, int target) {
        int n = nums.size(), l = 0, r = n - 1;
        while (l < r) {
            int m = l + (r - l) / 2;
            if (target > nums[m]) l = m + 1;
            else r = m;
        }
        return nums[l] == target ? l : -1;
    }
    
    int getLastPosition(vector<int>& nums, int target) {
        int n = nums.size(), l = 0, r = n - 1;
        while (l < r) {
            int m = l + (r - l + 1) / 2;
            if (target < nums[m]) r = m - 1;
            else l = m;
        }
        return nums[l] == target ? l : -1;
    }
    
    vector<int> searchRange(vector<int>& nums, int target) {
        int n = nums.size();
        // handle edge case
        vector<int> ans = {-1, -1};
        if (n == 0) return ans;
        // return the lower bound and upper bound - 1
        return vector<int> {
            // if the first position is -1, we can return ans directly
            getFirstPosition(nums, target), 
            getLastPosition(nums, target)
        };
    }
};
```
</TabItem>


<TabItem value="java" label="Java">
<SolutionAuthor name="@ganajayant"/>

```java
class Solution {
    public int[] searchRange(int[] nums, int target) {
        int start = 0, end = nums.length - 1, firstelement = -1;
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (nums[mid] == target) {
                firstelement = mid;
                end = mid - 1;
            } else if (nums[mid] > target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        start = 0;
        end = nums.length - 1;
        int endelement = -1;
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (nums[mid] == target) {
                endelement = mid;
                start = mid + 1;
            } else if (nums[mid] > target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return new int[] { firstelement, endelement };
    }
}
```
</TabItem>
</Tabs>


## Approach 2: Binary Search Optimal

To find the start and end indices, try to find the start index first, if it doesn't exist then the array not having the given element. So added a condition to check if the first index is not found then skip the end index block. 

Instead of having two loops for both cases, have a flag that differentiates between the start and end index search space. 

Time complexity: $O(log n)$

Space complexity: $O(1)$

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public int[] searchRange(int[] nums, int target) {
        int[] result = {-1, -1};
        result[0] = searchIndex(nums, target, true);
        if (result[0] != -1) {
            result[1] = searchIndex(nums, target, false);
        }
        return result;
    }
    
    private int searchIndex(int[] nums, int target, boolean startIndex) {
        int low = 0, high = nums.length - 1;
        int index = -1;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (target < nums[mid]) {
                high = mid - 1;
            } else if (target > nums[mid]) {
                low = mid + 1;
            } else {
                index = mid;
                if (startIndex) {
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            }
        }
        return index;
    }
}
```
</TabItem>
</Tabs>


