---
description: 'Author: @wkw | https://leetcode.com/problems/make-number-of-distinct-characters-equal/'
---

# 2531 - Make Number of Distinct Characters Equal (Medium)

## Problem Link

https://leetcode.com/problems/make-number-of-distinct-characters-equal/

## Problem Statement

You are given two **0-indexed** strings `word1` and `word2`.

A **move** consists of choosing two indices `i` and `j` such that `0 <= i < word1.length` and `0 <= j < word2.length` and swapping `word1[i]` with `word2[j]`.

Return `true` _if it is possible to get the number of distinct characters in_ `word1` _and_ `word2` *to be equal with **exactly one** move.*Return `false` _otherwise_.

**Example 1:**

```
Input: word1 = "ac", word2 = "b"
Output: false
Explanation: Any pair of swaps would yield two distinct characters in the first string, and one in the second string.
```

**Example 2:**

```
Input: word1 = "abcc", word2 = "aab"
Output: true
Explanation: We swap index 2 of the first string with index 0 of the second string. The resulting strings are word1 = "abac" and word2 = "cab", which both have 3 distinct characters.
```

**Example 3:**

```
Input: word1 = "abcde", word2 = "fghij"
Output: true
Explanation: Both resulting strings will have 5 distinct characters, regardless of which indices we swap.
```

**Constraints:**

- `1 <= word1.length, word2.length <= 105`
- `word1` and `word2` consist of only lowercase English letters.

## Approach 1: Hashmap

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    bool isItPossible(string word1, string word2) {
        unordered_map<char, int> m1, m2;
        // count the frequency of each character in word1
        for (char c : word1) m1[c]++;
        // count the frequency of each character in word2
        for (char c : word2) m2[c]++;
        // simulate the swap
        for (int i = 0; i < 26; i++) {
            for (int j = 0; j < 26; j++) {
                char x = i + 'a';
                char y = j + 'a';
                // if we need to swap x and y,
                // we need to make sure x is in word1 and y is in word2
                if (m1[x] > 0 && m2[y] > 0) {
                    // swap x in word1 and y in word2
                    m1[x]--; m2[x]++;
                    m1[y]++; m2[y]--;
                    // check if the number of distinct characters are equal
                    int cnt1 = 0, cnt2 = 0;
                    for (int k = 0; k < 26; k++) {
                        cnt1 += m1[k + 'a'] > 0;
                        cnt2 += m2[k + 'a'] > 0;
                    }
                    // if so, then return true
                    if (cnt1 == cnt2) return true;
                    // undo the swap so that we can perform a new swap
                    m1[x]++; m2[x]--;
                    m1[y]--; m2[y]++;
                }
            }
        }
        return false;
    }
};
```

</TabItem>
</Tabs>
