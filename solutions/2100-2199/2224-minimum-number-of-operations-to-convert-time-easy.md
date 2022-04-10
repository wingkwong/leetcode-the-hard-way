---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/
---

# 2224 - Minimum Number of Operations to Convert Time (Easy)

## Problem Statement:

You are given two strings `current` and `correct` representing two **24-hour times**.

24-hour times are formatted as `"HH:MM"`, where `HH` is between `00` and `23`, and `MM` is between `00` and `59`. The earliest 24-hour time is `00:00`, and the latest is `23:59`.

In one operation you can increase the time `current` by `1`, `5`, `15`, or `60` minutes. You can perform this operation **any** number of times.

Return _the **minimum number of operations** needed to convert_ `current` _to_ `correct`.

**Example 1:**

```
Input: current = "02:30", correct = "04:35"
Output: 3
Explanation:
We can convert current to correct in 3 operations as follows:
- Add 60 minutes to current. current becomes "03:30".
- Add 60 minutes to current. current becomes "04:30".
- Add 5 minutes to current. current becomes "04:35".
It can be proven that it is not possible to convert current to correct in fewer than 3 operations.
```

**Example 2:**

```
Input: current = "11:00", correct = "11:01"
Output: 1
Explanation: We only have to add one minute to current, so the minimum number of operations needed is 1.
```

**Constraints:**

* `current` and `correct` are in the format `"HH:MM"`
* `current <= correct`

## Approach 1: Greedy

Choosing $$60$$ 1 time is better than choosing $$15$$ 4 times. We choose from the largest number as many times as we could, then choose the second largest and etc. Since the operation is on minute, we need to convert the input to minute format first. Then we calculate the difference and try each operation to see how many times we could apply and update the difference after each operation.

```cpp
class Solution {
public:
    int getMinutes(string t) {
        int res = 0;
        // handle HH
        res += (t[0] - '0') * 10;
        res += (t[1] - '0');
        res *= 60;
        // handle MM
        res += (t[3] - '0') * 10;
        res += (t[4] - '0');
        return res;
    }
    
    int convertTime(string current, string correct) {
        // convert inputs to minute format
        int from = getMinutes(current), to = getMinutes(correct);
        // init ans & calculate the difference
        int ans = 0, d = to - from;
        // available operators - use largest one first
        vector<int> ops{ 60, 15, 5, 1 };
        // try each operation - take as many as possible
        // and update the difference
        for (auto x : ops) ans += d / x, d %= x;
        return ans;
    }
};
```
