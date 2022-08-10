---
description: 'Author: @wingkwong | https://leetcode.com/problems/count-of-range-sum/'
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 0327 - Count of Range Sum (Hard)

## Problem Link

https://leetcode.com/problems/count-of-range-sum/

## Problem Statement

Given an integer array `nums` and two integers `lower` and `upper`, return _the number of range sums that lie in_ `[lower, upper]` _inclusive_.

Range sum `S(i, j)` is defined as the sum of the elements in `nums` between indices `i` and `j` inclusive, where `i <= j`.

**Example 1:**

```
Input: nums = [-2,5,-1], lower = -2, upper = 2
Output: 3
Explanation: The three ranges are: [0,0], [2,2], and [0,2] and their respective sums are: -2, -1, 2.
```

**Example 2:**

```
Input: nums = [0], lower = 0, upper = 0
Output: 1
```

**Constraints:**

* `1 <= nums.length <= 10^5`
* `-2^31 <= nums[i] <= 2^31 - 1`
* `-10^5 <= lower <= upper <= 10^5`
* The answer is **guaranteed** to fit in a **32-bit** integer.

## Approach 1: Ordered Set

<SolutionAuthor name="@wingkwong"/>

```cpp
#include <ext/pb_ds/assoc_container.hpp>
#include <ext/pb_ds/tree_policy.hpp>
using namespace __gnu_pbds;

class Solution {
public:
    tree<long long, null_type, less_equal<long long>, rb_tree_tag, tree_order_statistics_node_update> T;
    
    // lower <= sum[j] - sum[i] <= upper
    // sum[j] - sum[i] >= lower
    // sum[j] - sum[i] <= upper
    // where i < j
    
    // given sum[j], find the number of i such that 
    // 1. i < j 
    // 2. sum[j] - upper <= sum[i] <= sum[j] - lower
    
    int countRangeSum(vector<int>& nums, int lower, int upper) {
        long long sum = 0, ans = 0;
        // normalise as lower <= sum[j] - 0 <= upper
        T.insert(0);
        for (auto x : nums) {
            // prefix sum
            sum += x;
            // count the range
            ans += T.order_of_key(sum - lower + 1) - T.order_of_key(sum - upper);
            // update T
            T.insert(sum);
        }
        return ans;
    }
};
```
