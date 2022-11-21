---
description: >-
  Author: @vigneshshiv, @radojicic23 |
  https://leetcode.com/problems/search-in-rotated-sorted-array/
---

# 0033 - Search in Rotated Sorted Array (Medium)

## Problem Link

https://leetcode.com/problems/search-in-rotated-sorted-array/

## Problem Statement

There is an integer array nums sorted in ascending order (with `distinct` values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index $k (1 <= k < nums.length)$ such that the resulting array is `[nums[k]$ nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]` (0-indexed). For example, `[0,1,2,4,5,6,7]` might be rotated at pivot index $3$ and become `[4,5,6,7,0,1,2]`.

Given the array `nums` **after** the possible rotation and an integer `target`, return the index of `target` if it is in `nums`, or $-1$ if it is not in `nums`.

You must write an algorithm with $O(log n)$ runtime complexity.

**Example 1:**

```
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
```

**Example 2:**

```
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
```

**Example 3:**

```
Input: nums = [1], target = 0
Output: -1
```

**Constraints:**

* `1 <= nums.length <= 5000`
* `-10^4 <= nums[i] <= 10^4`
* All values of `nums` are **unique**.
* `nums` is a non-decreasing array.
* `-10^4 <= target <= 10^4`

## Approach 1: Binary Search

Prerequisite: [Binary Search](../../tutorials/basic-topics/binary-search)

As a problem stated, the array is rotated, How do we apply a binary search?

Since the array is rotated in `Example #1` assume first half from index $0-3$ is in ascending order, the second half is decending order from the first half. 

With this approach we can solve the problem by finding the pivot index. Here, pivot is the maximum element in the array. 

If the given target is greater than the start index element, then the element must be with in the highest element. So reduce the space of the array to $0$ to $pivot-1$, otherwise search in $pivot+1$ to $nums.length - 1$.

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public int search(int[] nums, int target) {
        // Base case
        if (Objects.isNull(nums) || nums.length == 0) {
            return -1;
        }
        if (nums.length == 1) {
            return nums[0] == target ? 0 : -1;
        }
        int pivot = findPivot(nums);
        // If pivot not found, Do a normal binary search
        if (pivot == -1) {
            return binarySearch(nums, target, 0, nums.length - 1);
        }
        if (nums[pivot] == target) {
            return pivot;
        }
        if (target >= nums[0]) {
            return binarySearch(nums, target, 0, pivot - 1);
        }
        return binarySearch(nums, target, pivot + 1, nums.length - 1);
    }
    

    public int findPivot(int[] nums) {
        int low = 0, high = nums.length - 1;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            // 1. if middle element is greater than next element, which means middle element is the highest,
            // and next element starts in ascending order
            if (mid < high && nums[mid] > nums[mid + 1]) {
                return mid;
            }
            // 2. if middle element is smaller than the previous element, which means from middle element,
            // elements are placed in ascending order, and previous element is the highest
            if (mid > low && nums[mid] < nums[mid - 1]) {
                return mid - 1;
            }
            // 3. If middle element less than the start element, the highest element or arrays are the left side
            if (nums[mid] <= nums[low]) {
                high = mid - 1;
            } else {
                // 4. Search after middle element, to find the pivot which is the highest element
                low = mid + 1;
            }
        }
        return -1;
    }

    public int binarySearch(int[] nums, int target, int low, int high) {
        int mid = 0;
        while (low <= high) {
            mid = low + (high - low) / 2;
            if (target < nums[mid]) {
                high = mid - 1;
            } else if (target > nums[mid]) {
                low = mid + 1;
            } else {
                return mid;
            }
        }
        return -1;
    }
}
```
</TabItem>
</Tabs>


## Approach 2: Two Pointers

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@radojicic23"/>

```python
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l, r = 0, len(nums) - 1
    
        while l <= r:
            # mid value
            mid = (l + r) // 2  
            # if mid is target
            if target == nums[mid]: 
                return mid
            
            # left sorted portion
            if nums[mid] >= nums[l]:
                # are we in left sorted portion or right sorted portion
                if target > nums[mid] or target < nums[l]:
                    # search left
                    l = mid + 1
                else:
                    # search right
                    r = mid - 1 
            # right sorted portion
            else:
                if target < nums[mid] or target > nums[r]:
                    #search left
                    r = mid - 1
                else:
                    #search right
                    l = mid + 1 
            
        return -1
```

</TabItem>
</Tabs>
