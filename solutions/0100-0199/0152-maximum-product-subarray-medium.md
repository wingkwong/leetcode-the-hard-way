---
description: 'Author: @ColeB2 | https://leetcode.com/problems/maximum-product-subarray/'
tags: [Array, Dynamic Programming]
---

# 0152 - Maximum Product Subarray (Medium)

## Problem Link

https://leetcode.com/problems/maximum-product-subarray/

## Problem Statement

Given an integer array `nums`, find a subarray that has the largest product, and return _the product_.

The test cases are generated so that the answer will fit in a **32-bit** integer.

**Example 1:**

```
Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
```

**Example 2:**

```
Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
```

**Constraints:**

- `1 <= nums.length <= 2 * 10^4`
- `-10 <= nums[i] <= 10`
- The product of any prefix or suffix of `nums` is **guaranteed** to fit in a **32-bit** integer.

## Approach 1: Dynamic Programming

We can solve this in a single pass using dynamic programming. While looping through the numbers, we just need to track both the $$min$$ and the $$max$$ values ending at $$i$$. Swap them if the current number at the position is negative (as that will make the $$min$$,$$max$$ switch), then calculate the new $$min$$,$$max$$ as either the $$min$$/$$max$$ of the current num or the current num times $$min$$/$$max$$. We can then update the global max product with the current max and the max ending at i.

Time Complexity: $$O(n)$$, where n is the length of nums. We are going to loop through each num in nums.

Space Complexity: $$O(1)$$, we only need constant space to track variables of our min/max ending at i, as well as our max product.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        # initialize max_product, and our min/max ending at i.
        # They can all initialize as the first value.
        max_product = nums[0]
        min_ending_at_i = nums[0]
        max_ending_at_i = nums[0]
        # start our loop at 1, since we already handled first value.
        for i in range(1, len(nums)):
            # track the current num
            num = nums[i]
            # if current num is negative:
            if num < 0:
                # swap min/max values as a negative number will make
                # the min our max and the max our min.
                min_ending_at_i, max_ending_at_i = max_ending_at_i, min_ending_at_i
            # solve the new max/min ending at i.
            max_ending_at_i = max(num, max_ending_at_i*num)
            min_ending_at_i = min(num, min_ending_at_i*num)
            # update our max product
            max_product = max(max_product, max_ending_at_i)
        # return our max product
        return max_product
```

</TabItem>
</Tabs>
