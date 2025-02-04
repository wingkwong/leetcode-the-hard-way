---
description: 'Author: @wkw | https://leetcode.com/problems/largest-perimeter-triangle/'
---

# 0976 - Largest Perimeter Triangle (Easy)

## Problem Link

https://leetcode.com/problems/largest-perimeter-triangle/

## Problem Statement

Given an integer array `nums`, return _the largest perimeter of a triangle with a non-zero area, formed from three of these lengths_. If it is impossible to form any triangle of a non-zero area, return `0`.

**Example 1:**

```
Input: nums = [2,1,2]
Output: 5
```

**Example 2:**

```
Input: nums = [1,2,1]
Output: 0
```

**Constraints:**

- `3 <= nums.length <= 10^4`
- `1 <= nums[i] <= 10^6`

## Approach 1: Sort

In order to form a valid triangle, the side lengths of the triangle must satisfy $$a + b > c$$ where $$a \leq b \leq c$$. Therefore, we can sort the array and try each $$(a,b,c)$$ tuples to see if it is satisfied. If so, return the sum of three lengths. Else return 0 at the end.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int largestPerimeter(vector<int>& nums) {
        // sort it first
        sort(nums.begin(), nums.end());
        // try the largest one
        for (int i = nums.size() - 1; i >= 2; i--) {
            // check if a + b > c is satisfied
            if (nums[i - 2] + nums[i - 1] > nums[i]) {
                // valid! non-zero area
                return nums[i] + nums[i - 1] + nums[i - 2];
            }
        }
        return 0;
    }
};
```

</TabItem>

<TabItem value="rs" label="Rust">
<SolutionAuthor name="@wkw"/>

```rs
impl Solution {
    pub fn largest_perimeter(mut nums: Vec<i32>) -> i32 {
        nums.sort_unstable();
        for i in (2 .. nums.len()).rev() {
            if (nums[i - 2] + nums[i - 1] > nums[i]) {
                return nums[i - 2] + nums[i - 1] + nums[i];
            }
        }
        0
    }
}
```

<SolutionAuthor name="@wkw"/>

```rs
impl Solution {
    pub fn largest_perimeter(mut nums: Vec<i32>) -> i32 {
        nums.sort_unstable();
        for w in nums.windows(3).rev() {
            if (w[0] + w[1] > w[2]) {
                return w[0] + w[1] + w[2];
            }
        }
        0
    }
}
```

</TabItem>
</Tabs>
