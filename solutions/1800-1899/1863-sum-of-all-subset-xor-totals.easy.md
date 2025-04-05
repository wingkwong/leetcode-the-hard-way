---
description: 'Author: @wkw | https://leetcode.com/problems/sum-of-all-subset-xor-totals/'
---

# 1863 - Sum of All Subset XOR Totals (Easy)

## Problem Link

https://leetcode.com/problems/sum-of-all-subset-xor-totals/

## Problem Statement

The XOR total of an array is defined as the bitwise XOR of all its elements, or 0 if the array is empty.

For example, the XOR total of [2,5,6] is 2 XOR 5 XOR 6 = 1. Given an array nums, return the sum of all XOR totals for every subset of nums.

Note: Subsets with the same elements should be counted multiple times.

An array a is a subset of an array b if a can be obtained from b by deleting some (possibly zero or all) elements of b.

**Example 1:**

**Input:** nums = [1,3]

**Output:** 6

**Explanation:**

The subsets of [1,3] are:

- [] (the empty subset), which has an XOR total of 0.
- [1], which has an XOR total of 1.
- [3], which has an XOR total of 3.
- [1,3], which has an XOR total of 1 XOR 3 = 2. 0 + 1 + 3 + 2 = 6

**Example 2:**

**Input:** nums = [5,1,6]

**Output:** 28

**Explanation:**

The subsets of [5,1,6] are:

- [] (the empty subset), which has an XOR total of 0.
- [5], which has an XOR total of 5.
- [1], which has an XOR total of 1.
- [6], which has an XOR total of 6.
- [5,1], which has an XOR total of 5 XOR 1 = 4.
- [5,6], which has an XOR total of 5 XOR 6 = 3.
- [1,6], which has an XOR total of 1 XOR 6 = 7.
- [5,1,6], which has an XOR total of 5 XOR 1 XOR 6 = 2. 0 + 5 + 1 + 6 + 4 + 3 + 7 + 2 = 28

**Example 3:**

**Input:** nums = [3,4,5,6,7,8]

**Output:** 480

**Explanation:**

The sum of all XOR totals for every subset is 480.

**Constraints:**

- `1 <= nums.length <= 12`
- `0 <= nums[i] <= 20`

## Approach 1: Brute Force

Since it is a easy question, we can think about a brute force solution first. Basically just do what it asks, for each subset, calcualte the XOR value and sum them up.

Time Complexity: $O(n * 2^n)$

Space Complexity: $O(1)$

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def subsetXORSum(self, nums: List[int]) -> int:
        n = len(nums)
        res = 0
        for i in range(1 << n):
            x = 0
            for j in range(n):
                if (1 << j) & i:
                    x ^= nums[j]
            res += x
        return res
```

</TabItem>
</Tabs>

## Approach 2: Bit Manipulation

This above solution will not work if $n$ gets larger, we need another way to solve it. The key observation is that for any given bit position, if that bit is set, at the end it will contribute to the overall sum because of XOR property. The total contribution of that bit equals to that bit value \* $2 ^{(n - 1)}$. Hence, we can take bitwise OR of all numbers $x$ in $nums$, then multiply it by $2 ^{(n - 1)}$. In python, we can shift it to the left by $n - 1$.

Time Complexity: $O(n)$

Space Complexity: $O(1)$

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def subsetXORSum(self, nums: List[int]) -> int:
        n, res = len(nums), 0
        for x in nums: res |= x
        return res << (n - 1)

        # or one-liner
        # return reduce(lambda x, y: x | y, nums) << (len(nums) - 1)

        # or another one-liner
        #return reduce(ior, nums) << (len(nums) - 1)
```

</TabItem>
</Tabs>
