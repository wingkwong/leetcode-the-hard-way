---
description: >-
  Author: @wkw, @radojicic23, @vigneshshiv | https://leetcode.com/problems/increasing-triplet-subsequence/
---

# 0334 - Increasing Triplet Subsequence (Medium)

## Problem Link

https://leetcode.com/problems/increasing-triplet-subsequence/

## Problem Statement

Given an integer array `nums`, return `true` _if there exists a triple of indices_ `(i, j, k)` _such that_ `i < j < k` _and_ `nums[i] < nums[j] < nums[k]`. If no such indices exists, return `false`.

**Example 1:**

```
Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.
```

**Example 2:**

```
Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.
```

**Example 3:**

```
Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
```

**Constraints:**

- `1 <= nums.length <= 5 * 10^5`
- `-2^31 <= nums[i] <= 2^31 - 1`

**Follow up:** Could you implement a solution that runs in `O(n)` time complexity and `O(1)` space complexity?

## Approach 1: Greedy

Find the first two smallest numbers. If there is a number greater than them, then we can return true. Otherwise, return false at the end.

<Tabs>
<TabItem value="c++" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    bool increasingTriplet(vector<int>& nums) {
        int first = INT_MAX, second = INT_MAX;
        for (auto x : nums) {
            // update the first smallest number
            if (x <= first) first = x;
            // update the second smallest number
            else if (x <= second) second = x;
            // x > first && x > second -> found the answer
            else return true;
        }
        return false;
    }
};
```

</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@radojicic23"/>

```python
class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        threshold1 = threshold2 = float("inf")
        for num in nums:
            # update the first smallest threshold
            if num <= threshold1:
                threshold1 = num
            # update the second smallest threshold
            elif num <= threshold2:
                threshold2 = num
            # if it's greater than both thresholds
            else:
                return True
        return False
```

</TabItem>

<TabItem value="javascript" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let threshold1 = Infinity;
  let threshold2 = Infinity;
  for (n of nums) {
    // update the first smallest threshold
    if (n <= threshold1) threshold1 = n;
    // update the second smallest threshold
    else if (n <= threshold2) threshold2 = n;
    // if it's greater than both tresholds
    else return true;
  }
  return false;
};
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public boolean increasingTriplet(int[] nums) {
        int first = Integer.MAX_VALUE, second = Integer.MAX_VALUE;
        for (int x : nums) {
            // update the first smallest number
            if (x <= first) first = x;
            // update the second smallest number
            else if (x <= second) second = x;
            // if x > first && x > second, then found the answer
            else return true;
        }
        return false;
    }
}
```

</TabItem>
</Tabs>
