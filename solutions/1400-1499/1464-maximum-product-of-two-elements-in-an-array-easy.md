---
description: 'Author: @wkw, @jaffar, @jit | https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/'
tags: [Array, Sorting, Heap (Priority Queue)]
---

# 1464 - Maximum Product of Two Elements in an Array (Easy)

## Problem Link

https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/

## Problem Statement

Given the array of integers `nums`, you will choose two different indices `i` and `j` of that array. _Return the maximum value of_ `(nums[i]-1)*(nums[j]-1)`.

**Example 1:**

```
Input: nums = [3,4,5,2]
Output: 12
Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12.
```

**Example 2:**

```
Input: nums = [1,5,4,5]
Output: 16
Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.
```

**Example 3:**

```
Input: nums = [3,7]
Output: 12
```

**Constraints:**

- $2 <= nums.length <= 500$
- $1 <= nums[i] <= 10^3$

## Approach 1: Sorting

We can just choose the two largest values to maximum the product.

<Tabs>

<TabItem value="py" label="Python">
<SolutionAuthor name="@jaffar"/>

```py
class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        sorted_nums = sorted(nums, reverse=True)
        first_max = sorted_nums[0] - 1
        second_max = sorted_nums[1] - 1
        return first_max * second_max
```

</TabItem>

<TabItem value="erlang" label="Erlang">
<SolutionAuthor name="@jit"/>

```cpp
%% Lazy but whatever
max_product(Nums) ->
  [A, B | _] = lists:sort(fun erlang:'>='/2, Nums),
  (A - 1) * (B - 1).
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@wkw"/>

```java
class Solution {
    public int maxProduct(int[] nums) {
        Arrays.sort(nums);
        int n = nums.length;
        return (nums[n - 1] - 1) * (nums[n - 2] - 1);
    }
}
```

</TabItem>
</Tabs>
