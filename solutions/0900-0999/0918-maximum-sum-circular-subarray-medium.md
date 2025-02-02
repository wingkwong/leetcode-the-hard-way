---
description: 'Author: @wkw | https://leetcode.com/problems/maximum-sum-circular-subarray/'
tags: [Array, Divide and Conquer, Dynamic Programming, Queue, Monotonic Queue]
---

# 0918 - Maximum Sum Circular Subarray (Medium)

## Problem Link

https://leetcode.com/problems/maximum-sum-circular-subarray/

## Problem Statement

Given a **circular integer array** `nums` of length `n`, return _the maximum possible sum of a non-empty **subarray** of_`nums`.

A **circular array** means the end of the array connects to the beginning of the array. Formally, the next element of `nums[i]` is `nums[(i + 1) % n]` and the previous element of `nums[i]` is `nums[(i - 1 + n) % n]`.

A **subarray** may only include each element of the fixed buffer `nums` at most once. Formally, for a subarray `nums[i], nums[i + 1], ..., nums[j]`, there does not exist `i <= k1`, `k2 <= j` with `k1 % n == k2 % n`.

**Example 1:**

```
Input: nums = [1,-2,3,-2]
Output: 3
Explanation: Subarray [3] has maximum sum 3.
```

**Example 2:**

```
Input: nums = [5,-3,5]
Output: 10
Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10.
```

**Example 3:**

```
Input: nums = [-3,-2,-3]
Output: -2
Explanation: Subarray [-2] has maximum sum -2.
```

**Constraints:**

- `n == nums.length`
- `1 <= n <= 3 * 10^4`
- `-3 * 10^4 <= nums[i] <= 3 * 10^4`

## Approach 1: Kadane's Algorithm

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    // kadane's algo
   int kadane(vector<int>& nums) {
        int local = nums[0], global = nums[0];
        for (int i = 1; i < nums.size(); i++) {
            local = max(nums[i], local + nums[i]);
            global = max(global, local);
        }
        return global;
    }

    // case 1: max subarray sum in [0 .. n - 1]
    // i.e. kadane's algo
    // case 2. circular subarray in [0 .. |  n - 1 .. | .. 2 * n - 1]
    // i.e. total sum - min subarray sum in [0 .. n - 1]
    int maxSubarraySumCircular(vector<int>& nums) {
        // use kadane's algo to find out max sub array sum (case 1)
        int maxSubArraySum = kadane(nums);
        // handle cases like [-3,-2,-3]
        if (maxSubArraySum < 0) return maxSubArraySum;
        // calculate the total sum
        int totalSum = accumulate(nums.begin(), nums.end(), 0);
        // in order to use the same kadane function, we flip the sign
        for (auto &x : nums) x *= -1;
        // use kadane's algo to find out min sub array sum
        int minSubArraySum = kadane(nums) * -1;
        // compare case 1 & case 2, take the max
        return max(maxSubArraySum, totalSum - minSubArraySum);
    }
};
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@wkw"/>

```java
class Solution {
    // kadane's algo
    public int kadane(int[] nums) {
        int local = nums[0];
        int global = nums[0];
        for (int i = 1; i < nums.length; i++) {
            local = Math.max(nums[i], local + nums[i]);
            global = Math.max(global, local);
        }
        return global;
    }

    // case 1: max subarray sum in [0 .. n - 1]
    // i.e. kadane's algo
    // case 2. circular subarray in [0 .. |  n - 1 .. | .. 2 * n - 1]
    // i.e. total sum - min subarray sum in [0 .. n - 1]
    public int maxSubarraySumCircular(int[] nums) {
        int n = nums.length;
        // use kadane's algo to find out max sub array sum (case 1)
        int maxSubArraySum = kadane(nums);
        // handle cases like [-3,-2,-3]
        if (maxSubArraySum < 0) return maxSubArraySum;
        // calculate the total sum
        int totalSum = 0;
        // in order to use the same kadane function, we flip the sign
        for (int i = 0; i < n; i++) {
            totalSum += nums[i];
            nums[i] = -nums[i];
        }
        // use kadane's algo to find out min sub array sum
        int minSubArraySum = kadane(nums);
        // compare case 1 & case 2, take the max
        return Math.max(maxSubArraySum, totalSum + minSubArraySum);
    }
}

```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def maxSubarraySumCircular(self, nums):
        # kadane's algo
        def kadane(nums):
            local_sum = nums[0]
            global_sum = nums[0]
            for i in range(1, len(nums)):
                local_sum = max(nums[i], local_sum + nums[i])
                global_sum = max(global_sum, local_sum)
            return global_sum
        # case 1: max subarray sum in [0 .. n - 1]
        # i.e. kadane's algo
        # case 2. circular subarray in [0 .. |  n - 1 .. | .. 2 * n - 1]
        # i.e. total sum - min subarray sum in [0 .. n - 1]
        n = len(nums)
        # use kadane's algo to find out max sub array sum (case 1)
        max_sub_array_sum = kadane(nums)
        # handle cases like [-3,-2,-3]
        if max_sub_array_sum < 0:
            return max_sub_array_sum
        # calculate the total sum
        total_sum = sum(nums)
        # in order to use the same kadane function, we flip the sign
        for i in range(n):
            nums[i] *= -1
        # use kadane's algo to find out min sub array sum
        min_sub_array_sum = kadane(nums) * -1
        # compare case 1 & case 2, take the max
        return max(max_sub_array_sum, total_sum - min_sub_array_sum)

```

</TabItem>

<TabItem value="rs" label="Rust">
<SolutionAuthor name="@wkw"/>

```rs
use std::cmp::max;

impl Solution {
    // kadane's algo
    fn kadane(nums: &Vec<i32>) -> i32 {
        let mut local = nums[0];
        let mut global = nums[0];
        for i in 1..nums.len() {
            local = max(nums[i], local + nums[i]);
            global = max(global, local);
        }
        return global;
    }

    // case 1: max subarray sum in [0 .. n - 1]
    // i.e. kadane's algo
    // case 2. circular subarray in [0 .. |  n - 1 .. | .. 2 * n - 1]
    // i.e. total sum - min subarray sum in [0 .. n - 1]
    fn max_subarray_sum_circular(nums: Vec<i32>) -> i32 {
        let n = nums.len();
        // use kadane's algo to find out max sub array sum (case 1)
        let max_sub_array_sum = Solution::kadane(&nums);
        // handle cases like [-3,-2,-3]
        if max_sub_array_sum < 0 {
            return max_sub_array_sum;
        }
        // calculate the total sum
        let total_sum: i32 = nums.iter().sum();
        let mut nums = nums.clone();
        for i in 0 .. n {
            nums[i] = -nums[i];
        }
        // use kadane's algo to find out min sub array sum
        let min_sub_array_sum = Solution::kadane(&nums);
        // compare case 1 & case 2, take the max
        return max(max_sub_array_sum, total_sum + min_sub_array_sum);
    }

}
```

</TabItem>
</Tabs>
