---
description: 'Author: @wkw | https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/'
---

# 2616 - Minimize the Maximum Difference of Pairs (Medium)

## Problem Link

https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/

## Problem Statement

You are given a **0-indexed** integer array `nums` and an integer `p`. Find `p` pairs of indices of `nums` such that the **maximum** difference amongst all the pairs is **minimized**. Also, ensure no index appears more than once amongst the `p` pairs.

Note that for a pair of elements at the index `i` and `j`, the difference of this pair is `|nums[i] - nums[j]|`, where `|x|` represents the **absolute** **value** of `x`.

Return _the **minimum** **maximum** difference among all_`p` _pairs._

**Example 1:**

```
Input: nums = [10,1,2,7,1,3], p = 2
Output: 1
Explanation: The first pair is formed from the indices 1 and 4, and the second pair is formed from the indices 2 and 5.
The maximum difference is max(|nums[1] - nums[4]|, |nums[2] - nums[5]|) = max(0, 1) = 1. Therefore, we return 1.
```

**Example 2:**

```
Input: nums = [4,2,1,2], p = 1
Output: 0
Explanation: Let the indices 1 and 3 form a pair. The difference of that pair is |2 - 2| = 0, which is the minimum we can attain.
```

**Constraints:**

- `1 <= nums.length <= 10^5`
- `0 <= nums[i] <= 10^9`
- `0 <= p <= (nums.length)/2`

## Approach 1: Binary Search

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    // min max -> think of binary search
    int minimizeMax(vector<int>& nums, int p) {
        // sort the input first
        sort(nums.begin(), nums.end());
        // the possible difference ranges from 0 to the largest value - the smallest value
        int n = nums.size(), l = 0 , r = nums.back() - nums.front();
        // binary search the min max diff
        while (l < r) {
            int m = l + (r - l) / 2, cnt = 0;
            for (int i = 1; i < n; i++) {
                // we can make a pair
                if (nums[i] - nums[i - 1] <= m) {
                    // increase the number of pairs
                    cnt += 1;
                    // increase i by 1
                    // since it is included in the pair already
                    i += 1;
                }
            }
            // not enough pairs, move l pointer excluding m
            if (cnt < p) l = m + 1;
            // too many pairs, move r to m
            else r = m;
        }
        return l;
    }
};
```

</TabItem>
</Tabs>
