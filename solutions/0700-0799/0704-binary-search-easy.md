---
description: 'Author: @wkw, @ColeB2, @radojicic23 | https://leetcode.com/problems/binary-search/'
---

# 0704 - Binary Search (Easy)

## Problem Link

https://leetcode.com/problems/binary-search/

## Problem Statement

Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.

You must write an algorithm with `O(log n)` runtime complexity.

**Example 1:**

```
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
```

**Example 2:**

```
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
```

**Constraints:**

- `1 <= nums.length <= 10^4`
- `-10^4 < nums[i], target < 10^4`
- All the integers in `nums` are **unique**.
- `nums` is sorted in ascending order.

## Approach 1: Brute Force/Linear Search

The questions asks for an $$O(log n)$$ time answer. But what if we can't find that. We can always start with the brute force solution first to gain insight. Obviously we can imagine, that if we scan through the numbers, we can return it if we find it, and if we reach the end of the array without finding it, we can return -1.

We also know the array is sorted, so if we ever pass the target before the end, we can return early. That is our insight right there.

Time Complexity $$O(n)$$ to scan each number in the array.

Space Complexity $$O(1)$$

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        # scan all numbers, tracking index, i and number, num.
        for i, num in enumerate(nums):
            # if num == target, we found num, return index, i
            if num == target:
                return i
            # num > target, we passed it, we can return -1 early
            elif num > target:
                return -1
        # if we couldn't find it and couldn't return early, return -1.
        return -1
```

</TabItem>
</Tabs>

Note we found our insight above that the array is sorted. Since the array is sorted, and we know if the number we are looking at is larger or smaller than our target, then can we eliminate the need to look at all the numbers? Can we look directly in the middle, and eliminate half of all numbers in one go? We can. That is our intuition for binary search below.

## Approach 2: Binary Search

:::info Prerequisite

- [Binary Search](../../tutorials/basic-topics/binary-search)

:::

We set the boundary from the first index to the last index of the array. In each round, we try the middle one $$m = l + (r - l + 1) / 2$$. The reason we add $$1$$ here is that we need to take the upper one if there are even number of elements. If the target is less than $$nums[m]$$, then move the right pointer to $$m - 1$$, else move the left pointer to $$m$$. At the end, if the target is found, the index would be $$l$$.

<Tabs>
<TabItem value="c++" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int search(vector<int>& nums, int target) {
        // init possible boundary
        int n = nums.size(), l = 0, r = n - 1;
        while (l < r) {
            // get the middle one
            // for even number of elements, take the upper one
            int m = l + (r - l + 1) / 2;
            // exclude m
            if (target < nums[m]) r = m - 1;
            // include m
            else l = m;
        }
        return nums[l] == target ? l : -1;
    }
};
```

</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        # initialize left, l and right, r boundaries
        l, r = 0, len(nums)-1
        # l passes r, we are done.
        while l < r:
            # get our middle number, right one if even number elements.
            # note: do it this way to prevent int overflow, don't have
            # issue in Pythonn, but it is good practice for languages that do.
            m = l + (r-l+1) // 2
            # target smaller than we are looking at.
            if nums[m] > target:
                # set boundary m-1 to keep scanning left half
                r = m - 1
            else:
                # set boundary to m to keep scanning right half
                l = m
        # if we found the item, it will be @ index l, else -1.
        return l if nums[l] == target else -1
```

</TabItem>

<TabItem value="javascript" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // initialize left and right boundary
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    // find mid value
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] == target) return mid;
    // if mid value is greater than target
    // search left
    else if (nums[mid] > target) r = mid - 1;
    // if mid value is less than target
    // search right
    else l = mid + 1;
  }
  return -1;
};
```

</TabItem>
</Tabs>

> How about taking the lower element if the number of elements is even?

Similarly, we set the boundary from the first index to the last index of the array. In each round, we try the middle one $$m = l + (r - l) / 2$$. If there are even number of elements, we take the lower one. If the target is greater than $$nums[m]$$, then move the left pointer to $$m + 1$$, else move the right pointer to $$m$$. At the end, if the target is found, the index would be $$l$$.

<Tabs>
<TabItem value="c++" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
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
};
```

</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        # initialize left, l and right, r boundaries
        l, r = 0, len(nums)-1
        # l passes r, we are done.
        while l < r:
            # get our middle number, left one if even number elements.
            # note: do it this way to prevent int overflow, we don't have the
            # issue in Python, but it is good practice for languages that do.
            m = l + (r-l) // 2
            # target larger than num we are looking at.
            if nums[m] < target:
                # set boundary m-1 to keep scanning right half
                l = m + 1
            else:
                # set boundary to m to keep scanning left half
                r = m
        # if we found the item, it will be @ index l, else -1.
        return l if nums[l] == target else -1
```

</TabItem>

<TabItem value="javascript" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // initialize left and right boundary
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    // find mid value
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] == target) return mid;
    // if mid value is less than target
    // search right
    else if (nums[mid] < target) l = mid + 1;
    // if mid value is greater than target
    // search left
    else r = mid - 1;
  }
  return -1;
};
```

</TabItem>
</Tabs>
