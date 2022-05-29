---
description: 'Author: @heiheihang | https://leetcode.com/problems/move-zeroes/'
---

# 0283 - Move Zeroes (Easy)

## Problem Statement

Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

**Note** that you must do this in-place without making a copy of the array.

**Example 1:**

```
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
```

**Example 2:**

```
Input: nums = [0]
Output: [0]
```

**Constraints:**

* `1 <= nums.length <= 104`
* `-2^31 <= nums[i] <= 2^31 - 1`

**Follow up:** Could you minimize the total number of operations done?

## Approach 1: Two pointers

We need to set two pointers for this problem. The first pointer identifies the current number it is looking at. The second pointer identifies the next un-updated slot for moving the non-zero numbers in.

When we see a non-zero element, we put it in the slot pointed by `left_pointer`, and then increment `left_pointer`. When we see a zero, we just skip.

At the end, we need to set all the unused slots of `nums` to zero.

```python
def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        
        #initialize left pointer to keep track of spaces for non-zero elements
        left_pointer = 0
        
        #iterate all numbers in nums
        for i in range(len(nums)):
            
            #we skip if we see a 0
            if(nums[i] == 0):
                continue
            else:
                
                #we put the current number to the empty space if its non-zero
                nums[left_pointer] = nums[i]
                
                #as the current position is filled, move to the next one
                left_pointer += 1
        
        #we put zeros to the remaining spots in nums
        for i in range(left_pointer, len(nums)):
            nums[i] = 0
            
```
