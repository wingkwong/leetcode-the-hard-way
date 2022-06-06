---
description: 'Author: @wingkwong | https://leetcode.com/problems/baseball-game/'
---

import Authors from '@site/src/components/Authors';

# 0682 - Baseball Game (Easy)

## Problem Link

https://leetcode.com/problems/baseball-game/

## Problem Statement

You are keeping score for a baseball game with strange rules. The game consists of several rounds, where the scores of past rounds may affect future rounds' scores.

At the beginning of the game, you start with an empty record. You are given a list of strings `ops`, where `ops[i]` is the `ith` operation you must apply to the record and is one of the following:

1. An integer `x` - Record a new score of `x`.
2. `"+"` - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
3. `"D"` - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
4. `"C"` - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.

Return _the sum of all the scores on the record_.

**Example 1:**

```
Input: ops = ["5","2","C","D","+"]
Output: 30
Explanation:
"5" - Add 5 to the record, record is now [5].
"2" - Add 2 to the record, record is now [5, 2].
"C" - Invalidate and remove the previous score, record is now [5].
"D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
"+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
The total sum is 5 + 10 + 15 = 30.
```

**Example 2:**

```
Input: ops = ["5","-2","4","C","D","9","+","+"]
Output: 27
Explanation:
"5" - Add 5 to the record, record is now [5].
"-2" - Add -2 to the record, record is now [5, -2].
"4" - Add 4 to the record, record is now [5, -2, 4].
"C" - Invalidate and remove the previous score, record is now [5, -2].
"D" - Add 2 * -2 = -4 to the record, record is now [5, -2, -4].
"9" - Add 9 to the record, record is now [5, -2, -4, 9].
"+" - Add -4 + 9 = 5 to the record, record is now [5, -2, -4, 9, 5].
"+" - Add 9 + 5 = 14 to the record, record is now [5, -2, -4, 9, 5, 14].
The total sum is 5 + -2 + -4 + 9 + 5 + 14 = 27.
```

**Example 3:**

```
Input: ops = ["1"]
Output: 1 
```

**Constraints:**

* `1 <= ops.length <= 1000`
* `ops[i]` is `"C"`, `"D"`, `"+"`, or a string representing an integer in the range `[-3 * 104, 3 * 104]`.
* For operation `"+"`, there will always be at least two previous scores on the record.
* For operations `"C"` and `"D"`, there will always be at least one previous score on the record.

## Approach 1: Simulation

Just do what it says.

<Authors names="@wingkwong"/>

```cpp
class Solution {
public:
    int calPoints(vector<string>& ops) {
        vector<int> s;
        for (auto op: ops) {
            int n = s.size();
            // Record a new score that is the sum of the previous two scores. 
            // It is guaranteed there will always be two previous scores.
            if (op == "+") s.push_back(s[n - 2] + s[n - 1]);
            // Record a new score that is double the previous score. 
            // It is guaranteed there will always be a previous score.
            else if (op == "D") s.push_back(2 * s[n - 1]);
            // Invalidate the previous score, removing it from the record. 
            // It is guaranteed there will always be a previous score.
            else if (op == "C") s.pop_back();
            // An integer x - Record a new score of x.
            else s.push_back(stoi(op));
        }
        // the sum of all the scores on the record
        return accumulate(s.begin(), s.end(), 0);
    }
};
```
