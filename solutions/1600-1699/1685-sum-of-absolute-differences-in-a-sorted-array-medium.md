---
description: 'Author: @jit, @heder | https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/'
tags: [Array, Math, Prefix Sum]
---

# 1685 - Sum of Absolute Differences in a Sorted Array (Medium) 

## Problem Link

https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/

## Problem Statement

You are given an integer array `nums` sorted in **non-decreasing** order.

Build and return *an integer array*`result`*with the same length as*`nums`*such that*`result[i]`*is equal to the **summation of absolute differences** between*`nums[i]`*and all the other elements in the array.*

In other words, `result[i]` is equal to `sum(|nums[i]-nums[j]|)` where `0 <= j < nums.length` and `j != i` (**0-indexed**).

**Example 1:**

```
Input: nums = [2,3,5]
Output: [4,3,5]
Explanation: Assuming the arrays are 0-indexed, then
result[0] = |2-2| + |2-3| + |2-5| = 0 + 1 + 3 = 4,
result[1] = |3-2| + |3-3| + |3-5| = 1 + 0 + 2 = 3,
result[2] = |5-2| + |5-3| + |5-5| = 3 + 2 + 0 = 5.
```

**Example 2:**

```
Input: nums = [1,4,6,8,10]
Output: [24,15,13,15,21]
```

**Constraints:**

- `2 <= nums.length <= 10 ^ 5`
- `1 <= nums[i] <= nums[i + 1] <= 10 ^ 4`

## Approach 1: Prefix and Suffix Sum

<Tabs>
<TabItem value="scala" label="Scala">
<SolutionAuthor name="@jit"/>

```scala
// Prefix and suffix sum:
def getSumAbsoluteDifferences(nums: Array[Int]): Array[Int] = {
  val n = nums.length
  val pref = nums.scanLeft(0)(_ + _).tail
  val suff = nums.scanRight(0)(_ + _).init
  Array.tabulate(n)(i =>
    suff(i) - pref(i) + nums(i) * (2 * i + 1 - n))
}
```

</TabItem>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
static int fast_io = []() { std::ios::sync_with_stdio(false); cin.tie(nullptr); cout.tie(nullptr); return 0; }();

class Solution {
public:
    __attribute__((no_sanitize("address")))
    static vector<int> getSumAbsoluteDifferences(vector<int>& nums) {
        const int total = accumulate(begin(nums), end(nums), 0);
        for (int i = 0, ps = 0; i < size(nums); ++i) {
            const int num = nums[i];
            const int before = num * (i - 1) - ps;
            const int after = total - ps - num * (size(nums) - i - 1);
            nums[i] = before + after;
            ps += num;
        }
        return nums;
    }
};
```

</TabItem>
</Tabs>