---
description: >-
  Author: @wkw | https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/
---

# 2259 - Remove Digit From Number to Maximize Result (Easy)

## Problem Link

https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/

## Problem Statement

You are given a string `number` representing a **positive integer** and a character `digit`.

Return _the resulting string after removing **exactly one occurrence** of_ `digit` _from_ `number` _such that the value of the resulting string in **decimal** form is **maximized**_. The test cases are generated such that `digit` occurs at least once in `number`.

**Example 1:**

```
Input: number = "123", digit = "3"
Output: "12"
Explanation: There is only one '3' in "123". After removing '3', the result is "12".
```

**Example 2:**

```
Input: number = "1231", digit = "1"
Output: "231"
Explanation: We can remove the first '1' to get "231" or remove the second '1' to get "123".
Since 231 > 123, we return "231".
```

**Example 3:**

```
Input: number = "551", digit = "5"
Output: "51"
Explanation: We can remove either the first or second '5' from "551".
Both result in the string "51".
```

**Constraints:**

- `2 <= number.length <= 100`
- `number` consists of digits from `'1'` to `'9'`.
- `digit` is a digit from `'1'` to `'9'`.
- `digit` occurs at least once in `number`.

## Approach 1: Brute Force

Iterate from the right, check each possible answer.

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    string removeDigit(string number, char digit) {
        int n = number.size();
        string ans;
        // iterate from the right
        for (int i = n - 1; i >= 0; i--) {
            // if it matches the digit
            if (number[i] == digit) {
                // build the string without the i-th character
                ans = max(ans, number.substr(0, i) + number.substr(i + 1));
            }
        }
        return ans;
    }
};
```
