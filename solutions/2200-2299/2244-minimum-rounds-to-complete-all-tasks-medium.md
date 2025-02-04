---
description: >-
  Author: @wkw | https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/
---

# 2244 - Minimum Rounds to Complete All Tasks (Medium)

## Problem Link

https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/

## Problem Statement

You are given a **0-indexed** integer array `tasks`, where `tasks[i]` represents the difficulty level of a task. In each round, you can complete either 2 or 3 tasks of the **same difficulty level**.

Return _the **minimum** rounds required to complete all the tasks, or_ `-1` _if it is not possible to complete all the tasks._

**Example 1:**

```
Input: tasks = [2,2,3,3,2,4,4,4,4,4]
Output: 4
Explanation: To complete all the tasks, a possible plan is:
- In the first round, you complete 3 tasks of difficulty level 2.
- In the second round, you complete 2 tasks of difficulty level 3.
- In the third round, you complete 3 tasks of difficulty level 4.
- In the fourth round, you complete 2 tasks of difficulty level 4.
It can be shown that all the tasks cannot be completed in fewer than 4 rounds, so the answer is 4.
```

**Example 2:**

```
Input: tasks = [2,3,3]
Output: -1
Explanation: There is only 1 task of difficulty level 2, but in each round, you can only complete either 2 or 3 tasks of the same difficulty level. Hence, you cannot complete all the tasks, and the answer is -1.
```

**Constraints:**

- `1 <= tasks.length <= 10^5`
- `1 <= tasks[i] <= 10^9`

## Approach 1: Math

Count the frequency of each level. If the frequency is $$1$$, then return $$-1$$. Otherwise, we must complete them in some rounds. We first finish $$3$$ tasks multiple times and $$2$$ tasks at most $$2$$ times. Either way, we could finish it in $$ceil(freq / 3)$$ rounds.

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int minimumRounds(vector<int>& tasks) {
        unordered_map<int, int> m;
        int ans = 0;
        for (auto x : tasks) m[x]++;
        for (auto x : m) {
            if (x.second == 1) return -1;
            // ceil(a / b) = (a + b - 1) / b
            ans += (x.second + 2) / 3;
            // or
            // ans += (x.second / 3) + ((x.second % 3) != 0);
            // ans += ceil(x.second / 3.0);
        }
        return ans;
    }
};
```
