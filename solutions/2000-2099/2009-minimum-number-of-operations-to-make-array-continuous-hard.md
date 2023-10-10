---
description: 'Author: @wingkwong | https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/'
tags: [Array, Binary Search]
---

# 2009 - Minimum Number of Operations to Make Array Continuous (Hard) 

## Problem Link

https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/

## Problem Statement

You are given an integer array `nums`. In one operation, you can replace **any** element in `nums` with **any** integer.

`nums` is considered **continuous** if both of the following conditions are fulfilled:

- All elements in `nums` are **unique**.
- The difference between the **maximum** element and the **minimum** element in `nums` equals `nums.length - 1`.

For example, `nums = [4, 2, 5, 3]` is **continuous**, but `nums = [1, 2, 3, 5, 6]` is **not continuous**.

Return *the **minimum** number of operations to make*`nums`**continuous**.

**Example 1:**

```
Input: nums = [4,2,5,3]
Output: 0
Explanation: nums is already continuous.
```

**Example 2:**

```
Input: nums = [1,2,3,5,6]
Output: 1
Explanation: One possible solution is to change the last element to 4.
The resulting array is [1,2,3,5,4], which is continuous.
```

**Example 3:**

```
Input: nums = [1,10,100,1000]
Output: 3
Explanation: One possible solution is to:
- Change the second element to 2.
- Change the third element to 3.
- Change the fourth element to 4.
The resulting array is [1,2,3,4], which is continuous.
```

**Constraints:**

- `1 <= nums.length <= 1e5`
- `1 <= nums[i] <= 1e9`

## Approach 1: Sliding Window

<Tabs>
<TabItem value="kotlin" label="Kotlin">
<SolutionAuthor name="@wingkwong"/>

```kt
class Solution {
    fun minOperations(nums: IntArray): Int {
        val n = nums.size
        val v = nums.toSortedSet().toIntArray()
        val m = v.size
        var ans = n
        var r = 0
        for (l in 0 until m) {
            // assuming v[l] is the min element in the continuous array
            // the maximum element v[r] would be v[r] - v[l] + 1 = n -> v[r] = v[l] + n - 1
            // find the target `r` / use binary search here
            while (r < m && v[r] <= v[l] + n - 1) r++
            // now we got r - l elements are within the range
            // the rest of the elements `n - (r - l)` will be replaced
            // i.e. replace all elements to v[l] in [0 .. l) and v[r] in [r .. m)
            ans = min(ans, n - (r - l))
        }        
        return ans
    }
}
```

</TabItem>
</Tabs>