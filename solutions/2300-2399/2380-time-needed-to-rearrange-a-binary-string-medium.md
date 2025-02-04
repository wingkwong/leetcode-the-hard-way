---
description: 'Author: @wkw | https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/'
tags: [String, Dynamic Programming, Simulation]
---

# 2380 - Time Needed to Rearrange a Binary String (Medium)

## Problem Statement

You are given a binary string `s`. In one second, **all** occurrences of `"01"` are **simultaneously** replaced with `"10"`. This process **repeats** until no occurrences of `"01"` exist.

Return*the number of seconds needed to complete this process.*

**Example 1:**

```
Input: s = "0110101"
Output: 4
Explanation:
After one second, s becomes "1011010".
After another second, s becomes "1101100".
After the third second, s becomes "1110100".
After the fourth second, s becomes "1111000".
No occurrence of "01" exists any longer, and the process needed 4 seconds to complete,
so we return 4.
```

**Example 2:**

```
Input: s = "11100"
Output: 0
Explanation:
No occurrence of "01" exists in s, and the processes needed 0 seconds to complete,
so we return 0.
```

**Constraints:**

- `1 <= s.length <= 1000`
- `s[i]` is either `'0'` or `'1'`.

**Follow up:**

Can you solve this problem in O(n) time complexity?

## Approach 1: Brute Force

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int secondsToRemoveOccurrences(string s) {
        int n = s.size(), need = 1, ans = 0;
        // bruce force approach as n <= 1000
        while (need) {
            // unset need
            need = 0;
            // iterate the string
            for (int i = 1; i < n; i++) {
                // check if there is 01
                if (s[i - 1] == '0' && s[i] == '1') {
                    // if so, swap them to become 10
                    swap(s[i], s[i - 1]);
                    // skip this character
                    i += 1;
                    // after swapping, it could possibly produce another 01
                    // hence set it to 1
                    need = 1;
                }
            }
            // if we swapped it, then we need 1 second for the action
            ans += need;
        }
        return ans;
    }
};
```
