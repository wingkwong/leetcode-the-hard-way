---
description: https://leetcode.com/problems/a-number-after-a-double-reversal/
---

# 2119 - A Number After a Double Reversal (Easy)

## Problem Statement

**Reversing** an integer means to reverse all its digits.

* For example, reversing `2021` gives `1202`. Reversing `12300` gives `321` as the **leading zeros are not retained**.

Given an integer `num`, **reverse** `num` to get `reversed1`, **then reverse** `reversed1` to get `reversed2`. Return `true` _if_ `reversed2` _equals_ `num`. Otherwise return `false`.

**Example 1:**

```
Input: num = 526
Output: true
Explanation: Reverse num to get 625, then reverse 625 to get 526, which equals num.
```

**Example 2:**

```
Input: num = 1800
Output: false
Explanation: Reverse num to get 81, then reverse 81 to get 18, which does not equal num.
```

**Example 3:**

```
Input: num = 0
Output: true
Explanation: Reverse num to get 0, then reverse 0 to get 0, which equals num.
```

**Constraints:**

* `0 <= num <= 106`

## Approach 1:&#x20;

If you just do what it says, here's the code.

### C++

```cpp
class Solution {
public:
    bool isSameAfterReversals(int num) {
        if (num == 0) return 1;
        string s = to_string(num);
        int n = s.size(), j = 0;
        while (s[n - 1 - j] == '0') j++;
        string t = s.substr(0, n - j);
        return s == t;
    }
};
```

## Approach 2:&#x20;

However, a better way to solve this is to check if there is any trailing zero. No matter how many zeros at the end, after removing them all, it won't be same if you reverse it. The only exceptional case is $$num=0$$.

### C++

```cpp
class Solution {
public:
    bool isSameAfterReversals(int num) {
        return num == 0 || num % 10;
    }
};
```

Time Complexity : O(1)\
Space Complexity: O(1)
