---
description: 'Author: @wkw | https://leetcode.com/problems/minimum-operations-to-sort-a-permutation'
tags: ['Array']
---

# 3942 - Minimum Operations to Sort a Permutation (Medium)

## Problem Link

https://leetcode.com/problems/minimum-operations-to-sort-a-permutation

## Problem Statement

You are given an integer array `nums` of length `n`, where `nums` is a permutation of the integers from 0 to `n - 1`.

You may perform **only** the following operations:

- **Reverse** the entire array.
- **Rotate Left by One**: Move the first element to the end of the array, and rest elements to left by one position.

Return an integer denoting the **minimum** number of operations required to sort the array in **increasing** order. If it is **not possible** to sort the array using only the given operations, return -1.

**Example 1:**

**Input:** nums = [0,2,1]

**Output:** 2

**Explanation:**

- Rotate Left by one: `[2, 1, 0]`
- Reverse the array: `[0, 1, 2]`

The array becomes sorted in 2 operations, which is minimal

**Example 2:**

**Input:** nums = [1,0,2]

**Output:** 2

**Explanation:**

- Reverse the array: `[2, 0, 1]`
- Rotate Left by one: `[0, 1, 2]`

The array becomes sorted in 2 operations, which is minimal.

**Example 3:**

**Input:** nums = [2,0,1,3]

**Output:** -1

**Explanation:**

It is impossible to reach `[2, 0, 1, 3]`. Thus, the answer is -1.

**Constraints:**

- `1 <= n == nums.length <= 1e5`
- `0 <= nums[i] <= n - 1`
- `nums` is a permutation of integers from 0 to `n - 1`.

## Approach 1: Simulation

Think of the array as values placed around a circle. A left rotation only changes where we start reading the circle; it does not change the circular order of the elements. Reversing the array flips the direction in which the circle is read.

Because of this, the allowed operations can produce only two kinds of arrangements from the sorted array:

- A rotation of increasing order, such as $[2, 3, 0, 1]$.
- A rotation of decreasing order, such as $[2, 1, 0, 3]$.

Therefore, the array is sortable only when consecutive values differ by either $+1$ modulo $n$ everywhere or $-1$ modulo $n$ everywhere. Any other permutation has a different circular ordering, which rotations and reversals cannot fix.

Let $k$ be the index of $0$. If the array is cyclically increasing, rotating left $k$ times moves $0$ to index $0$ and sorts the array. Another option is to simulate rotation in the opposite direction using two reversals, giving a cost of $n - k + 2$. We take the minimum of these two possibilities.

If the array is cyclically decreasing, exactly one reversal is needed to change its direction to increasing. We can rotate either before or after this reversal. Rotating before reversal costs $(k + 1) % n$, while reversing first and then rotating costs $n - 1 - k$. Including the reversal, the minimum number of operations is:

$1 + min((k + 1) % n, n - 1 - k)$

If neither circular pattern is present, sorting is impossible, so the answer is $-1$.

The time complexity is $O(n)$, and the space complexity is $O(1)$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
# TC: O(n) where n is the length of nums
# SC: O(1)
class Solution:
    def minOperations(self, nums: List[int]) -> int:
        # n is the array length, and k is the current 0-based index of value 0
        n, k = len(nums), nums.index(0)
        # Checks that every value is one greater than the previous value modulo n
        # If true, rotate left k times or simulate rotating right k times using n - k left rotations and two reversals
        if all(nums[i] == (nums[i - 1] + 1) % n for i in range(1, n)): return min(k, n - k + 2)
        # Checks that every value is one less than the previous value modulo n
        # If true, add one reversal and choose the cheaper rotation count depending on whether rotation happens before or after reversal
        if all(nums[i] == (nums[i - 1] - 1) % n for i in range(1, n)): return 1 + min((k + 1) % n, n - 1 - k)
        # If nums is neither cyclically increasing nor cyclically decreasing
        # The allowed operations cannot sort it
        return -1
```

</TabItem>
</Tabs>