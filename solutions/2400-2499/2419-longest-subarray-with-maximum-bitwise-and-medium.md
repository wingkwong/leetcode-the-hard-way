---
description: 'Author: @wkw, @ganajayant | https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/'
---

# 2419 - Longest Subarray With Maximum Bitwise AND (Medium)

## Problem Link

https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/

## Problem Statement

You are given an integer array `nums` of size `n`.

Consider a **non-empty** subarray from `nums` that has the **maximum** possible **bitwise AND**.

- In other words, let `k` be the maximum value of the bitwise AND of **any** subarray of `nums`. Then, only subarrays with a bitwise AND equal to `k` should be considered.

Return _the length of the **longest** such subarray_.

The bitwise AND of an array is the bitwise AND of all the numbers in it.

A **subarray** is a contiguous sequence of elements within an array.

**Example 1:**

```
Input: nums = [1,2,3,3,2,2]
Output: 2
Explanation:
The maximum possible bitwise AND of a subarray is 3.
The longest subarray with that value is [3,3], so we return 2.
```

**Example 2:**

```
Input: nums = [1,2,3,4]
Output: 1
Explanation:
The maximum possible bitwise AND of a subarray is 4.
The longest subarray with that value is [4], so we return 1.
```

**Constraints:**

- `1 <= nums.length <= 105`
- `1 <= nums[i] <= 10^6`

## Approach 1: Consecutive Max Element

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int longestSubarray(vector<int>& nums) {
        // the bitwise AND of two different numbers will always be strictly less than the maximum of those two numbers
        // so the longest subarray with max bitwise AND would be the subarray containing only the max numbers
        int mx = *max_element(nums.begin(), nums.end());
        int ans, cnt = 0;
        for (auto &x : nums) {
            // increase the count by 1 if it is same as the max number
            if (x == mx) cnt += 1;
            // else reset it
            else cnt = 0;
            // update ans
            ans = max(ans, cnt);
        }
        return ans;
    }
};
```

</TabItem>
<TabItem value="java" label="Java">
<SolutionAuthor name="@ganajayant"/>

```cpp
class Solution {
    public int longestSubarray(int[] nums) {
        int max = 0, longest = 1, current = 0;
        for (int num : nums) {
            max = Math.max(max, num);
        }
        for (int num : nums) {
            if (num == max) {
                longest = Math.max(longest, ++current);
            } else {
                current = 0;
            }
        }
        return longest;
    }
}
```

</TabItem>
</Tabs>
