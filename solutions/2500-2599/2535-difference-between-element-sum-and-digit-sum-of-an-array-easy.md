---
description: 'Author: @wingkwong | https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/'
---

# 2535 - Difference Between Element Sum and Digit Sum of an Array (Easy) 

## Problem Link

https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/

## Problem Statement

You are given a positive integer array `nums`.

- The **element sum** is the sum of all the elements in `nums`.
- The **digit sum** is the sum of all the digits (not necessarily distinct) that appear in `nums`.

Return *the **absolute** difference between the **element sum** and **digit sum** of*`nums`.

**Note** that the absolute difference between two integers `x` and `y` is defined as `|x - y|`.

**Example 1:**

```
Input: nums = [1,15,6,3]
Output: 9
Explanation: 
The element sum of nums is 1 + 15 + 6 + 3 = 25.
The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
The absolute difference between the element sum and digit sum is |25 - 16| = 9.
```

**Example 2:**

```
Input: nums = [1,2,3,4]
Output: 0
Explanation:
The element sum of nums is 1 + 2 + 3 + 4 = 10.
The digit sum of nums is 1 + 2 + 3 + 4 = 10.
The absolute difference between the element sum and digit sum is |10 - 10| = 0.
```

**Constraints:**

- `1 <= nums.length <= 2000`
- `1 <= nums[i] <= 2000`

## Approach 1: Straight Forward

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int f(int x) {
        int res = 0;
        while (x) {
            // get the last digit
            res += x % 10;
            // divide by 10 to remove the last digit
            x /= 10;
        }
        return res;
    }
    int differenceOfSum(vector<int>& nums) {
        int es = 0, ds = 0;
        for (auto x : nums) {
            // calculate element sum
            es += x;
            // calculate digit sum
            ds += f(x);
        }
        // return the absolute difference between the element sum and digit sum of nums.
        return abs(es - ds);
    }
};
```

</TabItem>
</Tabs>