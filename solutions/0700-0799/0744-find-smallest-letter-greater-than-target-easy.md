---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/find-smallest-letter-greater-than-target
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 0744 - Find Smallest Letter Greater Than Target (Easy)

## Problem Link

https://leetcode.com/problems/find-smallest-letter-greater-than-target

## Problem Statement

Given a characters array `letters` that is sorted in **non-decreasing** order and a character `target`, return _the smallest character in the array that is larger than_ `target`.

**Note** that the letters wrap around.

* For example, if `target == 'z'` and `letters == ['a', 'b']`, the answer is `'a'`.

**Example 1:**

```
Input: letters = ["c","f","j"], target = "a"
Output: "c"
```

**Example 2:**

```
Input: letters = ["c","f","j"], target = "c"
Output: "f"
```

**Example 3:**

```
Input: letters = ["c","f","j"], target = "d"
Output: "f"
```

**Constraints:**

* `2 <= letters.length <= 10^4`
* `letters[i]` is a lowercase English letter.
* `letters` is sorted in **non-decreasing** order.
* `letters` contains at least two different characters.
* `target` is a lowercase English letter.

## Approach 1: Binary Search

Prerequisite: [Binary Search](../../tutorials/basic-topics/binary-search)

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    char nextGreatestLetter(vector<char>& letters, char target) {
        // init possible range
        int l = 0, r = letters.size() - 1;
        while (l < r) {
            int m = l + (r - l) / 2;
            // exclude m
            if (target >= letters[m]) l = m + 1;
            // include m
            else r = m;
        }
        // handle letter wrap case
        return letters[l] > target ? letters[l] : letters[0];
    }
};
```
