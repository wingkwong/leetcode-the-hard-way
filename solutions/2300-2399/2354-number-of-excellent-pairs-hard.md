---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/number-of-excellent-pairs/
---

# 2354 - Number of Excellent Pairs (Hard)

## Problem Link

https://leetcode.com/problems/number-of-excellent-pairs/

## Problem Statement

You are given a **0-indexed** positive integer array `nums` and a positive integer `k`.

A pair of numbers `(num1, num2)` is called **excellent** if the following conditions are satisfied:

* **Both** the numbers `num1` and `num2` exist in the array `nums`.
* The sum of the number of set bits in `num1 OR num2` and `num1 AND num2` is greater than or equal to `k`, where `OR` is the bitwise **OR** operation and `AND` is the bitwise **AND** operation.

Return _the number of **distinct** excellent pairs_.

Two pairs `(a, b)` and `(c, d)` are considered distinct if either `a != c` or `b != d`. For example, `(1, 2)` and `(2, 1)` are distinct.

**Note** that a pair `(num1, num2)` such that `num1 == num2` can also be excellent if you have at least **one** occurrence of `num1` in the array.&#x20;

**Example 1:**

```
Input: nums = [1,2,3,1], k = 3
Output: 5
Explanation: The excellent pairs are the following:
- (3, 3). (3 AND 3) and (3 OR 3) are both equal to (11) in binary. The total number of set bits is 2 + 2 = 4, which is greater than or equal to k = 3.
- (2, 3) and (3, 2). (2 AND 3) is equal to (10) in binary, and (2 OR 3) is equal to (11) in binary. The total number of set bits is 1 + 2 = 3.
- (1, 3) and (3, 1). (1 AND 3) is equal to (01) in binary, and (1 OR 3) is equal to (11) in binary. The total number of set bits is 1 + 2 = 3.
So the number of excellent pairs is 5.
```

**Example 2:**

```
Input: nums = [5,1,1], k = 10
Output: 0
Explanation: There are no excellent pairs for this array.
```

**Constraints:**

* `1 <= nums.length <= 10^5`
* `1 <= nums[i] <= 10^9`
* `1 <= k <= 60`

## Approach: Bit Manipulation

For num1 OR num2, it is equal to the number of set bits of num1. For num1 AND num2, it is equal to the number of set bits of num2. Therefore, the sum of the number of set bits in (num1 OR num2) and (num1 AND num2) is equal to the sum of the number of set bits in num1 and num2. 

We can iterate each number and count the frequency of the set bits $m[bits]$. Then we can try all combinations to check if the sum of the number of set bits in num1 and num2 is greater than or equal to $k$. If so, the number of pairs would be $m[i] * m[j]$.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    long long countExcellentPairs(vector<int>& nums, int k) {
        long long ans = 0;
        // remove duplicate numbers
        set<int> s(nums.begin(), nums.end());
        nums.assign(s.begin(), s.end());
        // hash map to store the frequency of a given set bit count
        unordered_map<int, int> m;
        // iterate each number to calculate the set bits
        for (auto& x : nums) {
            // count each set bit
            int cnt = 0;
            for (int i = 0 ; i < 32; i++) {
                if ((1 << i) & x) {
                    cnt += 1;
                }
            }
            m[cnt] += 1;
            // alternative, we can use __builtin_popcount
            // i.e. m[__builtin_popcount(x)]++;
        }
        // try all possible pairs
        for (int i = 0; i < 32; i++) {
            for (int j = 0; j < 32; j++) {
                if (i + j >= k) {
                    // if second condition is satisfied, 
                    // then the number of pairs would be m[i] * m[j]
                    ans += m[i] * m[j] * 1LL;
                }
            }
        }
        return ans;
    }
};
```