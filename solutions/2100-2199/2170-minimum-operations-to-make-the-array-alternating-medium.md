---
description: >-
  Author: @TBC |
  https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/
---

# 2170 - Minimum Operations to Make the Array Alternating (Medium)

## Problem Statement

You are given a **0-indexed** array `nums` consisting of `n` positive integers.

The array `nums` is called **alternating** if:

* `nums[i - 2] == nums[i]`, where `2 <= i <= n - 1`.
* `nums[i - 1] != nums[i]`, where `1 <= i <= n - 1`.

In one **operation**, you can choose an index `i` and **change** `nums[i]` into **any** positive integer.

Return _the **minimum number of operations** required to make the array alternating_.

**Example 1:**

```
Input: nums = [3,1,3,2,4,3]
Output: 3
Explanation:
One way to make the array alternating is by converting it to [3,1,3,1,3,1].
The number of operations required in this case is 3.
It can be proven that it is not possible to make the array alternating in less than 3 operations. 
```

**Example 2:**

```
Input: nums = [1,2,2,2,2]
Output: 2
Explanation:
One way to make the array alternating is by converting it to [1,2,1,2,1].
The number of operations required in this case is 2.
Note that the array cannot be converted to [2,2,2,2,2] because in this case nums[0] == nums[1] which violates the conditions of an alternating array.
```

**Constraints:**

* `1 <= nums.length <= 10^5`
* `1 <= nums[i] <= 10^5`

## Approach 1: Frequency Table

First, we need to separate the numbers at odd positions (`odd`) and even positions (`even`).

We are only interested in the top 2 most frequent elements in `odd` and `even`. We have the following cases:

1. The most frequent element from `odd` and `even` are different
2. The most frequent element from `odd` and `even` are the same

Case 1 is simple, we just change all other elements from the original list to those 2 elements.

Case 2 is trickier, because we have two possibilities now. As we cannot pick the two top 1 frequent elements from `odd` and `even`, we need to inspect the second most frequent element as well. We then have the following two combination:

1. mostFrequentOdd + secondMostFrequentEven
2. mostFrequentEven + secondMostFrequentOdd

We pick the larger of the two, and change all other elements to those numbers.

```python
def minimumOperations(self, nums: List[int]) -> int:
    if(len(nums) == 1):
        return 0
    
    #create frequency table for odd and even
    odd = defaultdict(int)
    even = defaultdict(int)
        
    #populate the frequency tables
    for i in range(len(nums)):
        if(i % 2 == 0):
            even[nums[i]] += 1
        else:
            odd[nums[i]] += 1
    
    #store the [frequency, value] pair to the lists
    evens = []
    odds = []
    for k in odd:
        odds.append([odd[k], k])
    for k in even:
        evens.append([even[k] , k])
        
    #reverse to access the largest elements        
    odds.sort(reverse = True)
    evens.sort(reverse = True)
    
    #case 1: most frequent elements are not equal, then take both
    if(odds[0][1] != evens[0][1]):
        return len(nums) - odds[0][0] - evens[0][0]
    else:
    
        #case 2: find second most frequent element
        odd_second = 0
        even_second = 0
        if(len(odds) > 1):
            odd_second = odds[1][0]
        if(len(evens) > 1):
            even_second = evens[1][0]
            
        #return the larger result
        return min(len(nums) - odds[0][0] - even_second, len(nums) - evens[0][0] - odd_second)
```
