---
description: 'Author: @wkw | https://leetcode.com/problems/shifting-letters-ii/'
---

# 2381 - Shifting Letters II (Medium)

## Problem Statement

You are given a string `s` of lowercase English letters and a 2D integer array `shifts` where `shifts[i] = [starti, endi, directioni]`. For every `i`, **shift** the characters in `s` from the index `starti` to the index `endi` (**inclusive**) forward if `directioni = 1`, or shift the characters backward if `directioni = 0`.

Shifting a character **forward** means replacing it with the **next** letter in the alphabet (wrapping around so that `'z'` becomes `'a'`). Similarly, shifting a character **backward** means replacing it with the **previous** letter in the alphabet (wrapping around so that `'a'` becomes `'z'`).

Return _the final string after all such shifts to_`s`_are applied_.

**Example 1:**

```
Input: s = "abc", shifts = [[0,1,0],[1,2,1],[0,2,1]]
Output: "ace"
Explanation: Firstly, shift the characters from index 0 to index 1 backward. Now s = "zac".
Secondly, shift the characters from index 1 to index 2 forward. Now s = "zbd".
Finally, shift the characters from index 0 to index 2 forward. Now s = "ace".
```

**Example 2:**

```
Input: s = "dztz", shifts = [[0,0,0],[1,1,1]]
Output: "catz"
Explanation: Firstly, shift the characters from index 0 to index 0 backward. Now s = "cztz".
Finally, shift the characters from index 1 to index 1 forward. Now s = "catz".
```

**Constraints:**

- `1 <= s.length, shifts.length <= 5 * 10^4`
- `shifts[i].length == 3`
- `0 <= start_i <= end_i < s.length`
- `0 <= directioni <= 1`
- `s` consists of lowercase English letters.

## Approach 1: Line Sweep

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    string shiftingLetters(string s, vector<vector<int>>& shifts) {
        int n = s.size();
        vector<int> line(n + 1, 0);
        // standard line sweep
        for (auto& s : shifts) {
            int start = s[0],
                end   = s[1],
            direction = s[2];
            line[start] += direction ? 1 : -1;
            line[end + 1] += direction ? -1 : 1;
        }
        // calculate the prefix sum
        partial_sum(line.begin(), line.end(), line.begin());
        // for each character
        for (int i = 0; i < n; i++) {
            // we calculate the new index value
            int v = (s[i] - 'a' + line[i]) % 26;
            // v can be negative if it is shifting backward
            // in this case, we need to turn it back to positive
            if (v < 0) v = (v % 26 + 26) % 26;
            // in place update character at position i
            s[i] = 'a' + v;
        }
        return s;
    }
};
```
