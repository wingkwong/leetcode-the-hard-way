---
description: >-
  Author: @heiheihang |
  https://leetcode.com/problems/sort-even-and-odd-indices-independently/
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 2164 - Sort Even and Odd Indices Independently (Easy)

## Problem Link

https://leetcode.com/problems/sort-even-and-odd-indices-independently/

## Problem Statement

You are given a **0-indexed** integer array `nums`. Rearrange the values of `nums` according to the following rules:

1. Sort the values at **odd indices** of `nums` in **non-increasing** order.
   * For example, if `nums = [4,`**`1`**`,2,`**`3`**`]` before this step, it becomes `[4,`**`3`**`,2,`**`1`**`]` after. The values at odd indices `1` and `3` are sorted in non-increasing order.
2. Sort the values at **even indices** of `nums` in **non-decreasing** order.
   * For example, if `nums = [`**`4`**`,1,`**`2`**`,3]` before this step, it becomes `[`**`2`**`,1,`**`4`**`,3]` after. The values at even indices `0` and `2` are sorted in non-decreasing order.

Return _the array formed after rearranging the values of_ `nums`.

**Example 1:**

```
Input: nums = [4,1,2,3]
Output: [2,3,4,1]
Explanation: 
First, we sort the values present at odd indices (1 and 3) in non-increasing order.
So, nums changes from [4,1,2,3] to [4,3,2,1].
Next, we sort the values present at even indices (0 and 2) in non-decreasing order.
So, nums changes from [4,1,2,3] to [2,3,4,1].
Thus, the array formed after rearranging the values is [2,3,4,1].
```

**Example 2:**

```
Input: nums = [2,1]
Output: [2,1]
Explanation: 
Since there is exactly one odd index and one even index, no rearrangement of values takes place.
The resultant array formed is [2,1], which is the same as the initial array.  
```

**Constraints:**

* `1 <= nums.length <= 100`
* `1 <= nums[i] <= 100`

## Approach 1: Iteration

The simplest approach is to store odd-indexed numbers and even-indexed numbers separately, then sort them and merge them. One approach to store them separately is to check the parity (odd or even) of the iterating variable ( `i` in this example solution), and store them to their corresponding lists.

We then sort the two lists. We note that odd-indexed numbers need to be **non-increasing**, so we need to call `reverse`. Another approach to sort in reverse order is `odds.sort(reverse = True)`.

We then put the numbers back to `nums` using a similar method of retrieving the parity of the iterating variable.

<SolutionAuthor name="@heiheihang"/>

```python
def sortEvenOdd(self, nums: List[int]) -> List[int]:
        
        #initialize the two lists for odd-indexed numbers and even-indexed numbers
        odds = []
        evens = []
        
        #place the numbers into the two lists accordingly
        for i in range(len(nums)):
            if(i % 2 == 1):
                odds.append(nums[i])
            else:
                evens.append(nums[i])
                
        #sort the two lists        
        odds.sort()
        evens.sort()
        
        #as we want odd-indexed numbers to be non-increasing, we need to reverse it
        odds.reverse()
        
        #initialize result
        result = []
        
        #iterate all numbers
        for i in range(len(nums)):
            
            #put the numbers back 
            #we have i//2 because we take turns visiting odds and evens
            if(i % 2 == 1):
                result.append(odds[i//2])
            else:
                result.append(evens[i//2])
        
        #return result
        return result
```
