---
description: 'Author: @AnshikaAnand222 | https://leetcode.com/problems/burst-balloons/'
tags: [Dynamic Programming, Recursion]
---

# 0312 - Burst Balloons - (Hard) 

## Problem Link

https://leetcode.com/problems/burst-balloons/

## Problem Statement

You are given `n` balloons, indexed from `0` to `n - 1`. Each balloon is painted with a number on it represented by an array `nums`. You are asked to burst all the balloons.
If you burst the ith balloon, you will get `nums[i - 1] * nums[i] * nums[i + 1]` coins. If `i - 1` or `i + 1` goes out of bounds of the array, then treat it as if there is a balloon with a 1 painted on it.

*Return the maximum coins you can collect by bursting the balloons wisely.*


**Example 1:**

```
Input: nums = [3,1,5,8]
Output: 167

Explanation:
nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167

```

**Example 2:**

```
Input: nums = [1,5]
Output: 10
```


**Constraints:**

```
n == nums.length
1 <= n <= 300
0 <= nums[i] <= 100
```
## Approach 1: Brute Force Recursion

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@AnshikaAnand222"/>

```python
  
class Solution:
    def maxCoins(self, nums: List[int]) -> int:
        nums = [1] + nums + [1]
        return self.recurse(nums, 0, len(nums)-1)
    
    def recurse(self, nums, left, right):
        
        res = 0
        for i in range(left+1, right):
            coins = nums[left] * nums[i] * nums[right]
            leftRes = self.recurse(nums, left, i)
            rightRes = self.recurse(nums, i, right)
            res = max(res, coins + leftRes + rightRes)
        
        return res
  
```
				     

</TabItem>
</Tabs>


## Approach 2: Brute Better Memoization

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@AnshikaAnand222"/>

```python
class Solution:
    def maxCoins(self, nums: List[int]) -> int:
        nums = [1] + nums + [1]
        self.dp = [[-1 for _ in range(len(nums))] for _ in range(len(nums))]
        return self.recurse(nums, 0, len(nums)-1)
    
    def recurse(self, nums, left, right):
        
        if self.dp[left][right] != -1:
            return self.dp[left][right]
        
        res = 0
        for i in range(left+1, right):
            coins = nums[left] * nums[i] * nums[right]
            leftRes = self.recurse(nums, left, i)
            rightRes = self.recurse(nums, i, right)
            res = max(res, coins + leftRes + rightRes)
        
        self.dp[left][right] = res
        return res
```

</TabItem>
</Tabs>


## Approach 3: Dynamic Programming

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@AnshikaAnand222"/>

```python
  
class Solution(object):
    def maxCoins(self, nums):
        @cache
        def search(nums):
            return 0 if len(nums) < 3 else max([search(nums[:i + 1]) + search(nums[i:]) 
			        + nums[0] * nums[i] * nums[-1] for i in range(1, len(nums) - 1)])
        return search(tuple([1] + nums + [1]))
  
```
				     

</TabItem>
</Tabs>
