---
description: 'Author: @wkw | https://leetcode.com/problems/largest-palindromic-number/'
---

# 2384 - Largest Palindromic Number (Medium)

## Problem Statement

You are given a string `num` consisting of digits only.

Return _the **largest palindromic** integer (in the form of a string) that can be formed using digits taken from_`num`. It should not contain **leading zeroes**.

**Notes:**

- You do **not** need to use all the digits of `num`, but you must use **at least** one digit.
- The digits can be reordered.

**Example 1:**

```
Input: num = "444947137"
Output: "7449447"
Explanation:
Use the digits "4449477" from "444947137" to form the palindromic integer "7449447".
It can be shown that "7449447" is the largest palindromic integer that can be formed.
```

**Example 2:**

```
Input: num = "00009"
Output: "9"
Explanation:
It can be shown that "9" is the largest palindromic integer that can be formed.
Note that the integer returned should not contain leading zeroes.
```

**Constraints:**

- `1 <= num.length <= 1e5`
- `num` consists of digits.

## Approach 1: Counting and Building String

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    string largestPalindromic(string num) {
        string l, m, r;
        // count the frequency for each digit
        int cnt[10] = {0};
        for (auto &x : num) cnt[x - '0']++;
        // build the left part
        for (int i = 9; i >= 1; i--) {
            // we need at least a frequency of 2
            if (cnt[i] >= 2) {
                // we take half of it because it is only the left part
                l += string(cnt[i] / 2, i + '0');
            }
        }
        // we can put some zeros as well for cases like 0099 -> 9009
        if (cnt[0] >= 2) {
            // however, we only do it when we've used some digits
            // think of cases like 9
            if (l.size()) {
                l += string(cnt[0] / 2, '0');
            }
        }
        // build the middle part
        for (int i = 9; i >= 0; i--) {
            // we want to add the largest digit with odd count
            if (cnt[i] & 1) {
                m += i + '0';
                // since we just need one, we can break here
                break;
            }
        }
        // handle case like 0000000
        if (l.size() == 0 && m.size() == 0) {
            return "0";
        }
        // build the right part
        r = l;
        // which is the mirror of the left part
        reverse(r.begin(), r.end());
        // return the final string
        return l + m + r;
    }
};
```
