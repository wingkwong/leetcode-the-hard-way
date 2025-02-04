---
description: 'Author: @wkw | https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/'
tags: [Array, Bit Manipulation]
---

# 2859 - Sum of Values at Indices With K Set Bits (Easy)

## Problem Link

https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/

## Problem Statement

You are given a **0-indexed** integer array `nums` and an integer `k`.

Return _an integer that denotes the **sum** of elements in_`nums`\*whose corresponding **indices** have **exactly\***`k`_set bits in their binary representation._

The **set bits** in an integer are the `1`'s present when it is written in binary.

- For example, the binary representation of `21` is `10101`, which has `3` set bits.

**Example 1:**

```
Input: nums = [5,10,1,5,2], k = 1
Output: 13
Explanation: The binary representation of the indices are:
0 = 0002
1 = 0012
2 = 0102
3 = 0112
4 = 1002
Indices 1, 2, and 4 have k = 1 set bits in their binary representation.
Hence, the answer is nums[1] + nums[2] + nums[4] = 13.
```

**Example 2:**

```
Input: nums = [4,3,2,1], k = 2
Output: 1
Explanation: The binary representation of the indices are:
0 = 002
1 = 012
2 = 102
3 = 112
Only index 3 has k = 2 set bits in its binary representation.
Hence, the answer is nums[3] = 1.
```

**Constraints:**

- $1 <= nums.length <= 1000$
- $1 <= nums[i] <= 10^5$
- $0 <= k <= 10$

## Approach 1: Counting bits

For each index, we count the number of bits by using standard library `__builtin_popcount`. If the count is same as $k$, then add $nums[i]$ to the answer.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int sumIndicesWithKSetBits(vector<int>& nums, int k) {
        int ans = 0;
        for (int i = 0; i < nums.size(); i++) {
            if (__builtin_popcount(i) == k) {
                ans += nums[i];
            }
        }
        return ans;
    }
};
```

</TabItem>
</Tabs>
