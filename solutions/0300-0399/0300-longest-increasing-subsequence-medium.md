---
description: 'Author: @ColeB2, @wkw | https://leetcode.com/problems/longest-increasing-subsequence/'
tags: [Array, Binary Search, Dynamic Programming]
---

# 0300 - Longest Increasing Subsequence (Medium)

## Problem Link

https://leetcode.com/problems/longest-increasing-subsequence/

## Problem Statement

Given an integer array `nums`, return _the length of the longest **strictly increasing subsequence**_.

**Example 1:**

```
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
```

**Example 2:**

```
Input: nums = [0,1,0,3,2,3]
Output: 4
```

**Example 3:**

```
Input: nums = [7,7,7,7,7,7,7]
Output: 1
```

**Constraints:**

- $1 <= nums.length <= 2500$
- $-10^4 <= nums[i] <= 10^4$

**Follow up**: Can you come up with an algorithm that runs in `O(n log(n))` time complexity?

## Approach 1: Dynamic Programming

We can solve this using a dynamic programming approach. We can initialize a $$dp$$ array of size $$nums$$. The array represensts the longest subsequence up to and including that number. So then we can iterate through the $$nums$$ array and for each num in the array, check if it's greater than each num before it, and if it is update our $$dp$$ array based on the longest subsequence that the position of the number we checked it against.

Time Complexity: $$O(n^2)$$, Where n is the length of $$nums$$. We are going to loop through each num, then for each num, loop through each num before it.

Space Complexity: $$O(n)$$, our dp array, will be the same size as our $$nums$$ array.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        # initialize dp array.
        # dp[i] represents length of longest subsequence up to i.
        dp = [0] * len(nums)
        # iterate over the nums array
        for i, num in enumerate(nums):
            # iterate over each num from 0 to the current num.
            for j in range(0, i + 1):
                # current num, num > nums[j] it creates
                # a stricly increasing subsequence.
                if num > nums[j]:
                    # update length of longest subsequence.
                    # dp[j] + 1 represents length of subsequence ending
                    # at j, updated including current value, dp[i], will
                    # be the current subsequence, which may be updated
                    # in previous loops, and 1 represents the subsequence
                    # if a single number.
                    dp[i] = max(dp[j] + 1, dp[i], 1)
                # num not greater:
                else:
                    # update it to be either 1, or previous value.
                    dp[i] = max(dp[i], 1)
        # return largest subsequence.
        return max(dp)
```

</TabItem>
</Tabs>

## Approach 2: Binary Search

Our follow-up asks for a $$O(nlogn)$$ solution, which we can achieve using binary search. The method is called Patience Sorting and involves creating $$piles$$ of numbers to stack our numbers on top. This $$piles$$ array is what we will binary search over.

For each number in $$nums$$ we can run a binary search on our $$piles$$ array to find where we can place the number. We are looking for the best position in the $$piles$$ array where we can "place" our number on top. If the number is greater than all numbers, we create a new pile and append the number to $$piles$$, if not, binary search will find us a number to place it on top of. Meaning we overwrite the number with the current number.

By "placing" the number on top of the pile in which the number is less than, we create an array in which the "top" number of each pile is in increasing order which allows us to binary search. This also means that the length of $$piles$$ array represents our longest increasing subsequence.

Time Complexity: $$O(nlogn)$$, where n is the length of $$nums$$. For each number in $$nums$$ we are going to do a binary search over our $$piles$$ array, which in the worst case may be size n.

Space Complexity: $$O(n)$$, our $$piles$$ array may be of size $$n$$ in the worst case.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        # initialize piles array
        piles = []
        # iterate through all the numbers in nums
        for num in nums:
            #binary search piles
            l, r = 0, len(piles)
            while l < r:
                m = l + (r - l) // 2
                if num > piles[m]:
                    l = m + 1
                else:
                    r = m
            # if our left pointer isn't larger than piles array
            # it means we found a place to put our number
            if l < len(piles):
                # overwrite piles[l] with the current num
                piles[l] = num
            # l > length of piles array, it means there is no
            # pile with a large enough number to put this number
            # on top of
            else:
                # create a new pile, by appending current number to end.
                piles.append(num)
        # return length of piles.
        return len(piles)
```

</TabItem>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        int n = (int) nums.size();
        vector<int> lis;
        for(int i = 0; i < n; i++) {
            auto it = lower_bound(lis.begin(), lis.end(), nums[i]);
            if(it == lis.end()) lis.push_back(nums[i]);
            else *it = nums[i];
        }
        return (int) lis.size();
    }
};
```

</TabItem>
</Tabs>
