---
description: >-
  Author: @jessicaribeiroalves | https://leetcode.com/problems/determine-if-two-strings-are-close/
---

# 1657 - Determine If Two Strings Are Close (Medium)

## Problem Link

https://leetcode.com/problems/determine-if-two-strings-are-close/

## Problem Statement

Two strings are considered close if you can attain one from the other using the following operations:

- Operation 1: Swap any two existing characters.
For example, `abcde -> aecdb`.
- Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, `aacabb -> bbcbaa` (all `a's` turn into `b's`, and all `b's` turn into `a's`)
You can use the operations on either string as many times as necessary.

Given two strings, `word1` and `word2`, return `true` if `word1` and `word2` are close, and `false` otherwise.

**Example 1:**

```Python
Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"
```

**Example 2:**

```Python
Input: word1 = "a", word2 = "aa"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
```

**Example 3:**

```Python
Input: word1 = "cabbba", word2 = "abbccc"
Output: true
Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: "cabbba" -> "caabbb"
Apply Operation 2: "caabbb" -> "baaccc"
Apply Operation 2: "baaccc" -> "abbccc"
```

**Constraints:**

- `1 <= word1.length, word2.length <= 105`
- `word1` and `word2` contain only lowercase English letters.

## Approach 1: Comparing the strings: length, characters frequency and existing characters

A possible solution is based on three main checks:

1. Making sure both strings $word1$ and $word2$ have the same length as neither operation would work correctly if they had different lengths.

2. Checking if the occurrences of each characters frequency are the same for both strings. For example, $word1 = 'aabbcccc'$ and $word2 = 'aabcbcaa'$ have the same number of occurrences in their character frequencies or, in other words, the same frequency of frequencies. So we would have the characters frequency of $word1$ as ${'c': 4, 'a': 2, 'b': 2}$ and the frequency of its frequencies would be ${2: 2, 4: 1}$. For $word2$ the characters frequency would be ${'a': 4, 'b': 2, 'c': 2}$ and its frequency of frequencies would be the same as $word1$, ${2: 2, 4: 1}$.

3. The last one is checking if all existing characters in one string also exist in the other string. For example, $word1 = 'aabbzzzz'$ and $word2 = 'aabcbcaa'$ attend the second check related to the characters frequency. However the strings are not composed of the same characters ('z' doesn't exist in $word2$ just as 'c' doesn't exist in $word1$) and this is something that none of the operations described in the problem statement can solve.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@jessicaribeiroalves"/>

```py
from collections import Counter

class Solution:
    def closeStrings(self, word1: str, word2: str) -> bool:        
        return (
            len(word1) == len(word2) and
            Counter(Counter(word1).values()) == Counter(Counter(word2).values()) and
            set([*word1]) == set([*word2])
        )
```

</TabItem>
</Tabs>

**Time Complexity: $O(n)$**

The time complexity for this solution is $O(n)$ as the algorithm execution time increases or decreases according to the strings length.

**Space Complexity: $O(n)$**

The space complexity for this solution is also $O(n)$.
