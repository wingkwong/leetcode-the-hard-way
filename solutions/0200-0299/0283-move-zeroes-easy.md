---
description: >-
  Author: @heiheihang, @vigneshshiv |
  https://leetcode.com/problems/move-zeroes/
---

# 0283 - Move Zeroes (Easy)

## Problem Link

https://leetcode.com/problems/move-zeroes/

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

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@heiheihang"/>

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

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public void moveZeroes(int[] nums) {
        if (nums.length == 1) return;
        int idx = 0;
        for (int num : nums) {
            if (num != 0) {
                nums[idx++] = num;
            }
        }
        while (idx < nums.length) {
            nums[idx++] = 0;
        }
    }
}
```

</TabItem>
</Tabs>

## Approach 2: Two pointers Optimal

Iterate through numbers and count the $0$ occurances, while doing so, if any non-zero number present and if the zero's count more than $0$, shift the current number to current $index - count0$ count index. This solves the problem in linear time and optimally.  

For example, the given input is $[1, 3, 0, 0, 12]$, right now $12$ has to be placed in first $0$ th position. While iterating, we have count $2$ zero's and we are at the last index. Shift $12$ present in current index $4$ to index $2$, apply $nums[i - count0] = nums[i]$ and set $0$ in the current index. 

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public void moveZeroes(int[] nums) {
        if (nums.length == 1) return;
        int count0 = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == 0) {
                count0 += 1;
            } else if (count0 > 0) {
                nums[i - count0] = nums[i];
                nums[i] = 0;
            }
        }
    }
}
```

</TabItem>
</Tabs>