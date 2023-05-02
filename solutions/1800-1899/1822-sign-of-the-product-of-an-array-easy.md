---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/sign-of-the-product-of-an-array/
---

# 1822 - Sign of the Product of an Array (Easy)

## Problem Link

https://leetcode.com/problems/sign-of-the-product-of-an-array/

## Problem Statement

There is a function `signFunc(x)` that returns:

* `1` if `x` is positive.
* `-1` if `x` is negative.
* `0` if `x` is equal to `0`.

You are given an integer array `nums`. Let `product` be the product of all values in the array `nums`.

Return `signFunc(product)`.

**Example 1:**

```
Input: nums = [-1,-2,-3,-4,3,2,1]
Output: 1
Explanation: The product of all values in the array is 144, and signFunc(144) = 1
```

**Example 2:**

```
Input: nums = [1,5,0,2,-3]
Output: 0
Explanation: The product of all values in the array is 0, and signFunc(0) = 0
```

**Example 3:**

```
Input: nums = [-1,1,-1,1,-1]
Output: -1
Explanation: The product of all values in the array is -1, and signFunc(-1) = -1
```

**Constraints:**

* `1 <= nums.length <= 1000`
* `-100 <= nums[i] <= 100`

## Approach 1: Check the sign

The first thought probably is just to simulate it by calculating the product of nums and check the sign like what problem statement says. However, We don't need to do that since we are not interested in the value but the sign. Therefore, we can just check the sign only. If we meet a zero, we can exit early since the final sign must be 0 anyway.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int arraySign(vector<int>& nums) {
        int ans = 1;
        for (auto x : nums) {
            if (x > 0) ans *= 1;
            else if (x < 0) ans *= -1;
            else {
                ans = 0;
                break;
            }
        }
        // You may notice that when the number is positive, basically it won't change the sign. 
        // Hence, we can just focus on negative numbers and flip the sign when we meet one. 
        // Zero case remain unchanged.
        // ----
        // for (auto x : nums) {
        //     if (x == 0) return 0;
        //     if (x < 0) ans = -ans;
        // }
        return ans;
    }
};
```

</TabItem>

<TabItem value="rs" label="Rust">
<SolutionAuthor name="@wingkwong"/>

```rs
impl Solution {
    pub fn array_sign(nums: Vec<i32>) -> i32 {
        let mut ans = 1;
        for x in nums.into_iter() {
            if x == 0 {
                return 0;
            } 
            ans *= x.signum();
        }
        ans
    }
}
```

</TabItem>
</Tabs>
