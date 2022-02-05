---
description: 'Author: @heiheihang | https://leetcode.com/problems/running-sum-of-1d-array/'
---

# 1480 - Running Sum of 1d Array (Easy)

## Problem Statement

Given an array `nums`. We define a running sum of an array as `runningSum[i] = sum(nums[0]…nums[i])`.

Return the running sum of `nums`.

**Example 1:**

```
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
```

**Example 2:**

```
Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
```

**Example 3:**

```
Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17] 
```

**Constraints:**

* `1 <= nums.length <= 1000`
* `-10^6 <= nums[i] <= 10^6`

## Approach 1: Iteration

We need to define an accumulator (`running_sum` in this problem) to save the sum of all numbers in `nums`. After calculating the latest `running_sum`, we put that number to our result list.

The trick here is that we need to add the number from `nums` to `running_sum` first before adding `running_sum` to `result`. This is because the `ith` position from `result` should include the `ith` number in `nums` .&#x20;

```python
def runningSum(self, nums: List[int]) -> List[int]:
        
        #initialize the running_sum
        running_sum = 0
        
        #initialize the result list
        result = []
        
        #we iterage each number in nums
        for i in range(len(nums)):
            
            #the current number is defined by nums[i]
            current_number = nums[i]
            
            #add the current_number to running_sum
            running_sum += current_number
            
            #add the running_sum to the result list
            result.append(running_sum)
        
        #return result
        return result
```
