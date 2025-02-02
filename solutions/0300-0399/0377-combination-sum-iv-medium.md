---
description: >-
  Author: @wkw | https://leetcode.com/problems/combination-sum-iv/
---

# 0377 - Combination Sum IV (Medium)

## Problem Link

https://leetcode.com/problems/combination-sum-iv/

## Problem Statement

Given an array of **distinct** integers `nums` and a target integer `target`, return _the number of possible combinations that add up to_ `target`.

The test cases are generated so that the answer can fit in a **32-bit** integer.

**Example 1:**

```
Input: nums = [1,2,3], target = 4
Output: 7
Explanation:
The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)
Note that different sequences are counted as different combinations.
```

**Example 2:**

```
Input: nums = [9], target = 3
Output: 0
```

**Constraints:**

- `1 <= nums.length <= 200`
- `1 <= nums[i] <= 1000`
- All the elements of `nums` are **unique**.
- `1 <= target <= 1000`

**Follow up:** What if negative numbers are allowed in the given array? How does it change the problem? What limitation we need to add to the question to allow negative numbers?

## Approach: Dynamic Programming

This problem is very similar to [0518 - Coin Change 2](https://leetcode.com/problems/coin-change-2/). The only difference is the order of loops. The reason is that `(1, 1, 2)` and `(2, 1, 1)` are considered different in this problem.

We can derive the following transition if $target$ is greater or equal to $nums[i]$ where $dp[i]$ represents the number of combinations that sum up to the $target$.

$$
dp(target)=\sum_{i=0}^n dp(target - nums[i])
$$

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int combinationSum4(vector<int>& nums, int target) {
        // use uint to avoid overflow
        // let dp[i] be the number of combinations that sum up to the target
        vector<uint> dp(target + 1);
        // base case
        dp[0] = 1;
        // iterate target first - as (1, 1, 2) and (2, 1, 1) are considered different
        for(int i = 1; i <= target; i++) {
            // iterate each number in nums
            for (auto x : nums) {
                // since we need dp[i - x],
                // we need to make sure i - x is greater or equal to 0
                if(i - x >= 0) {
                    // add the previous result
                    dp[i] += dp[i - x];
                }
            }
        }
        // return answer dp[target]
        return dp.back();
    }
};
```

</TabItem>

<TabItem value="kotlin" label="Kotlin">
<SolutionAuthor name="@wkw"/>

```kt
class Solution {
    fun combinationSum4(nums: IntArray, target: Int): Int {
        // let dp[i] be the number of combinations that sum up to the target
        val dp = IntArray(target + 1)
        // base case
        dp[0] = 1
        // iterate target first - as (1, 1, 2) and (2, 1, 1) are considered different
        for (i in 1..target) {
            // iterate each number in nums
            for (x in nums) {
                // since we need dp[i - x],
                // we need to make sure i - x is greater or equal to 0
                if (i - x >= 0) {
                    // add the previous result
                    dp[i] += dp[i - x]
                }
            }
        }
        return dp.last()
    }
}
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@wkw"/>

```java
class Solution {
    public int combinationSum4(int[] nums, int target) {
        // let dp[i] be the number of combinations that sum up to the target
        int[] dp = new int[target + 1];
        // base case
        dp[0] = 1;
        // iterate target first - as (1, 1, 2) and (2, 1, 1) are considered different
        for (int i = 1; i <= target; i++) {
            // iterate each number in nums
            for (int x : nums) {
                // since we need dp[i - x],
                // we need to make sure i - x is greater or equal to 0
                if (i - x >= 0) {
                    // add the previous result
                    dp[i] += dp[i - x];
                }
            }
        }
        return dp[target];
    }
}
```

</TabItem>
</Tabs>
