---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/largest-3-same-digit-number-in-string/
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 2264 - Largest 3-Same-Digit Number in String (Easy)

## Problem Link

https://leetcode.com/problems/largest-3-same-digit-number-in-string/

## Problem Statement

You are given a string `num` representing a large integer. An integer is **good** if it meets the following conditions:

* It is a **substring** of `num` with length `3`.
* It consists of only one unique digit.

Return _the **maximum good** integer as a **string** or an empty string_ `""` _if no such integer exists_.

Note:

* A **substring** is a contiguous sequence of characters within a string.
* There may be **leading zeroes** in `num` or a good integer.

**Example 1:**

```
Input: num = "6777133339"
Output: "777"
Explanation: There are two distinct good integers: "777" and "333".
"777" is the largest, so we return "777".
```

**Example 2:**

```
Input: num = "2300019"
Output: "000"
Explanation: "000" is the only good integer.
```

**Example 3:**

```
Input: num = "42352338"
Output: ""
Explanation: No substring of length 3 consists of only one unique digit. Therefore, there are no good integers.
```

**Constraints:**

* `3 <= num.length <= 1000`
* `num` only consists of digits.

## Approach 1: Check the max digit

Iterate num and check if the current character is same as the previous two. If so, store the maximum digit and render at the end.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    string largestGoodInteger(string num) {
        int mx = -1;
        for (int i = 2; i < num.size(); i++) {
            // check if has one unique digit
            if (num[i] == num[i - 1] && num[i - 1] == num[i - 2]) {
                // if so, record the max digit
                mx = max(mx, num[i] - '0');
            }
        }
        // if mx is -1, then no such substring exists
        // otherwise, render the ans with the max digit
        return mx == -1 ? "" : string(3, mx + '0');
    }
};
```
