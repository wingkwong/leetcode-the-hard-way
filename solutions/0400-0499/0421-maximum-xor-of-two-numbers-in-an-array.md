---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/
---

# 0421 - Maximum XOR of Two Numbers in an Array

## Problem Statement

Given an integer array `nums`, return _the maximum result of_ `nums[i] XOR nums[j]`, where `0 <= i <= j < n`.

**Example 1:**

```
Input: nums = [3,10,5,25,2,8]
Output: 28
Explanation: The maximum result is 5 XOR 25 = 28.
```

**Example 2:**

```
Input: nums = [14,70,53,83,49,91,36,80,92,51,66,70]
Output: 127 
```

**Constraints:**

* `1 <= nums.length <= 2 * 10^5`
* `0 <= nums[i] <= 2^31 - 1`

## Approach 1: Bit Masking + Set + Two Sum Idea

In order to maximise the answer, we can construct the max XOR from the leftmost bit. The best answer is always all bits set. Hence, we can check bit by bit. We need to find two numbers such that its XOR starts with `1000...000`, then find `1100..000,` then `1110...000`, `1111...000` and till `1111...111`. We build each mask to extract the prefix of length `(L - i)` in binary representation of each number by using `num & mask`. Then apply Two Sum idea, if the complement exists in the set, then we can update answer.

```cpp
class Solution {
public:
    int findMaximumXOR(vector<int>& nums) {
        int ans = 0, mask = 0;
        for(int i = 31; i >= 0; i--){
           unordered_set<int> s;
            mask |= (1 << i);
            for (auto x : nums) s.insert(mask & x);
            int best = ans | (1 << i);
            for(auto pref : s){
                if(s.find(pref ^ best) != s.end()){
                    ans = best;
                    break;
                }
            }
        }
        return ans;
    }
};
```
