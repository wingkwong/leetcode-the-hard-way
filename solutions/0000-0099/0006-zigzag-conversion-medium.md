---
description: 'Author: @wkw | https://leetcode.com/problems/zigzag-conversion/'
tags: [String]
---

# 0006 - Zigzag Conversion (Medium)

## Problem Link

https://leetcode.com/problems/zigzag-conversion/

## Problem Statement

The string `"PAYPALISHIRING"` is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

```
P   A   H   N
A P L S I I G
Y   I   R
```

And then read line by line: `"PAHNAPLSIIGYIR"`

Write the code that will take a string and make this conversion given a number of rows:

```
string convert(string s, int numRows);
```

**Example 1:**

```
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
```

**Example 2:**

```
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
```

**Example 3:**

```
Input: s = "A", numRows = 1
Output: "A"
```

**Constraints:**

- `1 <= s.length <= 1000`
- `s` consists of English letters (lower-case and upper-case), `','` and `'.'`.
- `1 <= numRows <= 1000`

## Approach 1: Simulation

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
// simulate and add each character to the corresponding row
// go down -> reach bottom -> go up -> reach top -> go down ...
class Solution {
public:
    string convert(string s, int n) {
        // edge case
        if (n == 1) return s;
        vector<string> rows(n);
        // j is the index to track which rows a character should be added to
        // d is the direction: -1 means go up, 1 means go down
        int j = 0, d = 1;
        for (int i = 0; i < s.size(); i++) {
            // add the current character to corresponding row
            rows[j] += s[i];
            // if it reaches to the last row, we need to go up
            if(j == n - 1) d = -1;
            // if it reaches to the first row, we need to go down
            else if(j == 0) d = 1;
            // move j pointer
            j += d;
        }
        // rows would look like below in the first example
        // ['PAHN', 'APLSIIG', 'YIR']
        // we use `accumulate` to build the final answer (in C++ 20, it takes O(n) only)
        return accumulate(rows.begin(), rows.end(), string{});
    }
};
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
# simulate and add each character to the corresponding row
# go down -> reach bottom -> go up -> reach top -> go down ...
class Solution:
    def convert(self, s: str, n: int) -> str:
        # edge case
        if n == 1: return s
        rows = ['' for _ in range(n)]
        # j is the index to track which rows a character should be added to
        # d is the direction: -1 means go up, 1 means go down
        j, d = 0, 1
        for i in range(len(s)):
            # add the current character to corresponding row
            rows[j] += s[i]
            # if it reaches to the last row, we need to go up
            if j == n - 1: d = -1
            # if it reaches to the first row, we need to go down
            elif j == 0: d = 1
            # move j pointer
            j += d;
        # rows would look like below in the first example
        # ['PAHN', 'APLSIIG', 'YIR']
        # we use join to build the final answer
        return ''.join(rows)
```

</TabItem>
</Tabs>
