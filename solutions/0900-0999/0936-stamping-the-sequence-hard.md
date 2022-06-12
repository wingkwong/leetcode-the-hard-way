---
description: 'Author: @wingkwong | https://leetcode.com/problems/stamping-the-sequence/'
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 0936 - Stamping The Sequence (Hard)

## Problem Link

https://leetcode.com/problems/stamping-the-sequence

## Problem Statement

You are given two strings `stamp` and `target`. Initially, there is a string `s` of length `target.length` with all `s[i] == '?'`.

In one turn, you can place `stamp` over `s` and replace every letter in the `s` with the corresponding letter from `stamp`.

*   For example, if `stamp = "abc"` and `target = "abcba"`, then `s` is `"?????"` initially. In one turn you can:

    * place `stamp` at index `0` of `s` to obtain `"abc??"`,
    * place `stamp` at index `1` of `s` to obtain `"?abc?"`, or
    * place `stamp` at index `2` of `s` to obtain `"??abc"`.

    Note that `stamp` must be fully contained in the boundaries of `s` in order to stamp (i.e., you cannot place `stamp` at index `3` of `s`).

We want to convert `s` to `target` using **at most** `10 * target.length` turns.

Return _an array of the index of the left-most letter being stamped at each turn_. If we cannot obtain `target` from `s` within `10 * target.length` turns, return an empty array.



**Example 1:**

```
Input: stamp = "abc", target = "ababc"
Output: [0,2]
Explanation: Initially s = "?????".
- Place stamp at index 0 to get "abc??".
- Place stamp at index 2 to get "ababc".
[1,0,2] would also be accepted as an answer, as well as some other answers.
```

**Example 2:**

```
Input: stamp = "abca", target = "aabcaca"
Output: [3,0,1]
Explanation: Initially s = "???????".
- Place stamp at index 3 to get "???abca".
- Place stamp at index 0 to get "abcabca".
- Place stamp at index 1 to get "aabcaca".
```

**Constraints:**

* `1 <= stamp.length <= target.length <= 1000`
* `stamp` and `target` consist of lowercase English letters.

## Approach 1: Greedy

We first try the first stamp and mark those characters to$$*$$. Then build some new stamps to check if they exist in target, if so mark them and repeat the process until all characters are stamped.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<int> movesToStamp(string stamp, string target) {
        int n = stamp.size(), total = 0, k = -1;
        vector<int> ans;
        // "abca"
        // "aabcaca"
        while (k) {
            k = 0;
            for (int j = n; j > 0; j--) {
                for (int i = 0; i <= n - j; i++) {
                    // build the new stamp
                    string new_stamp = string(i, '*') + stamp.substr(i, j) + string(n - j - i, '*');
                    // abca
                    // abc*
                    // *bca
                    // ab**
                    // *bc*
                    // **ca
                    // a***
                    // *b**
                    // **c*
                    // ***a
                    
                    // check if we can use this new_stamp to cover some characters
                    auto p = target.find(new_stamp);
                    while (p != string::npos) {
                        // if so, mark this position
                        ans.push_back(p);
                        // and replace those characters
                        // e.g.
                        // aabcaca
                        // a****ca
                        // a****ca
                        // a******
                        // a******
                        // *******
                        fill(target.begin() + p, target.begin() + p + n, '*');
                        // try to find if we can cover another set
                        p = target.find(new_stamp);
                        // j is how many characters we've covered
                        k += j;
                    }
                }
            }
            // update the total covered characters
            total += k;
        }
        reverse(ans.begin(), ans.end());
        return total == target.size() ? ans : vector<int>{};
    }
};
```
