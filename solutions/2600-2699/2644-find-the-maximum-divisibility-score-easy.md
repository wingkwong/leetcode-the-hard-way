---
description: 'Author: @wingkwong | https://leetcode.com/problems/find-the-maximum-divisibility-score/'
---

# 2644 - Find the Maximum Divisibility Score (Easy) 

## Problem Link

https://leetcode.com/problems/find-the-maximum-divisibility-score/

## Problem Statement

You are given two **0-indexed** integer arrays `nums` and `divisors`.

The **divisibility score** of `divisors[i]` is the number of indices `j` such that `nums[j]` is divisible by `divisors[i]`.

Return *the integer* `divisors[i]` *with the maximum divisibility score*. If there is more than one integer with the maximum score, return the minimum of them.

**Example 1:**

```
Input: nums = [4,7,9,3,9], divisors = [5,2,3]
Output: 3
Explanation: The divisibility score for every element in divisors is:
The divisibility score of divisors[0] is 0 since no number in nums is divisible by 5.
The divisibility score of divisors[1] is 1 since nums[0] is divisible by 2.
The divisibility score of divisors[2] is 3 since nums[2], nums[3], and nums[4] are divisible by 3.
Since divisors[2] has the maximum divisibility score, we return it.
```

**Example 2:**

```
Input: nums = [20,14,21,10], divisors = [5,7,5]
Output: 5
Explanation: The divisibility score for every element in divisors is:
The divisibility score of divisors[0] is 2 since nums[0] and nums[3] are divisible by 5.
The divisibility score of divisors[1] is 2 since nums[1] and nums[2] are divisible by 7.
The divisibility score of divisors[2] is 2 since nums[0] and nums[3] are divisible by 5.
Since divisors[0], divisors[1], and divisors[2] all have the maximum divisibility score, we return the minimum of them (i.e., divisors[2]).
```

**Example 3:**

```
Input: nums = [12], divisors = [10,16]
Output: 10
Explanation: The divisibility score for every element in divisors is:
The divisibility score of divisors[0] is 0 since no number in nums is divisible by 10.
The divisibility score of divisors[1] is 0 since no number in nums is divisible by 16.
Since divisors[0] and divisors[1] both have the maximum divisibility score, we return the minimum of them (i.e., divisors[0]).
```

**Constraints:**

- `1 <= nums.length, divisors.length <= 1000`
- `1 <= nums[i], divisors[i] <= 10^9`

## Approach 1: TBC

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int maxDivScore(vector<int>& nums, vector<int>& divisors) {
        int ans = -1, mx_cnt = -1;
        // for each divisor
        for (auto d : divisors) {
            int cnt = 0;
            // we check each number `x`
            for (auto x : nums) {
                // to see if `x` can be divisible by `d`
                if (x % d == 0) {
                    // if so, increase the counter by 1
                    cnt += 1;
                }
            }
            // if the counter is greater than the current max
            if (cnt > mx_cnt) {
                // then update hte current max
                mx_cnt = cnt;
                // `d` will be the possible answer
                ans = d;
            } else if (cnt == mx_cnt) {
                // however, it the counter is same as the current max
                // then we need to take the min one
                ans = min(ans, d);
            }
        }
        return ans;
    }
};
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@wingkwong"/>

```py
class Solution:
    def maxDivScore(self, nums: List[int], divisors: List[int]) -> int:
        res = -1
        mx_cnt = -1
        # for each divisor
        for d in divisors:
            cnt = 0
            # we check each number `x`
            for x in nums:
                # to see if `x` can be divisible by `d`
                if x % d == 0:
                    # if so, increase the counter by 1
                    cnt += 1
            # if the counter is greater than the current max
            if cnt > mx_cnt:
                # then update hte current max
                mx_cnt = cnt
                # `d` will be the possible answer
                res = d
            elif cnt == mx_cnt:
                # however, it the counter is same as the current max
                # then we need to take the min one
                res = min(res, d)
        return res
```

</TabItem>
</Tabs>