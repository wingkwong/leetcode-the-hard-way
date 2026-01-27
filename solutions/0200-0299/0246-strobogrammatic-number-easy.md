---
description: 'Author: @wkw | https://leetcode.com/problems/strobogrammatic-number/'
tags: ['Hash Map']
---

# 0246 - Strobogrammatic Number (Easy)

Given a string `num` which represents an integer, return `true` _if_ `num` _is a **strobogrammatic number**_.

A **strobogrammatic number** is a number that looks the same when rotated `180` degrees (looked at upside down).

**Example 1:**

<pre><code>Input: num = "69"
<strong>Output:
</strong> true</code></pre>

**Example 2:**

<pre><code>Input: num = "88"
<strong>Output:
</strong> true</code></pre>

**Example 3:**

<pre><code>Input: num = "962"
<strong>Output:
</strong> false</code></pre>

**Constraints:**

- `1 <= num.length <= 50`
- `num` consists of only digits.
- `num` does not contain any leading zeros except for zero itself.

## Problem Link

https://leetcode.com/problems/strobogrammatic-number/

## Problem Statement

First we need to find out which numbers are still valid after rotated by 180 degrees. There are only three cases. First it becomes an invalid number, such as `2`, `3`, `4` and etc. The second case is the number remains the same, such as `0`, `1` and `8`. The third case is it becomes another number, such as `6 -> 9`.

Therefore, we can use two pointers from the left and right to check if the number can be rotatable. If so, would the rotated number be the same as the target number.

## Approach 1: Two Pointers

```cpp
class Solution {
public:
    bool isStrobogrammatic(string num) {
        // m[0] = 0
        // m[1] = 1
        // m[2] = -1
        // m[3] = -1
        // m[4] = -1
        // m[5] = -1
        // m[6] = 9
        // m[7] = -1
        // m[8] = 8
        // m[9] = 6
        vector<int> m = {0, 1, -1, -1, -1, -1, 9, -1, 8, 6};
        int n = num.size();
        // each time we check two characters (num[0], num[n - 1 - 1]), (num[1], num[n - i - 2]), ... and so on
        // it could be same character if the length of num is odd, i.e. num[n / 2]
        for (int i = 0; i < n + 1 / 2; i++) {
            if (m[num[i] - '0'] != num[n - 1 - i] - '0') {
                return false;
            }
        }
        return true;
    }
};
```
