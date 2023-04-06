---
description: 'Author: @ColeB2 | https://leetcode.com/problems/word-break/'
tags: [Array, Hash Table, String, Dynamic Programming, Trie, Memoization]
---

# 0139 - Word Break (Medium)

## Problem Link

https://leetcode.com/problems/word-break/

## Problem Statement

Given a string `s` and a dictionary of strings `wordDict`, return `true` if `s` can be segmented into a space-separated sequence of one or more dictionary words.

**Note** that the same word in the dictionary may be reused multiple times in the segmentation.

**Example 1:**

```
Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
```

**Example 2:**

```
Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
```

**Example 3:**

```
Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false
```

**Constraints:**

- `1 <= s.length <= 300`
- `1 <= wordDict.length <= 1000`
- `1 <= wordDict[i].length <= 20`
- `s` and `wordDict[i]` consist of only lowercase English letters.
- All the strings of `wordDict` are unique.

## Approach 1: Dynamic Programming

We can use a bottom-up dp approach. We can initialize a dp array of $$s.length + 1$$ of all false values except the first one as true. Then we can iterate through all $$end$$ positions of the string, and inside that loop, iterate through $$start$$ positions moving back towards the start. If the dp array at the $$start$$ position is set to true, we can check if the word from $$start$$ to $$end + 1$$ is in the dictionary, and if it is, we can update the dp array at $$end + 1$$ to be true.

This process allows us to look for words in the dictionary only if we need to find them. For example 1 for instance, if $$wordDict$$ only contained the word $$code$$, we would never actually have to search for the word $$code$$ as its corresponding starting position in the dp array would be false, saving us time on searching for words we don't need.

Time Complexity: $$O(n^2)$$, we must iterate over all possible end and start positions of the string, where n is the length of the string.

Space Complexity: $$O(n)$$, we must keep track of how far into the string we can get using true and false values in our dp array of size n, where n is the length of the string.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        # convert wordDict to set for O(1) word access
        word_set = set(wordDict)
        # initialize dp array of all Falses
        dp = [False] * (len(s) + 1)
        # set first value True.
        dp[0] = True
        # loop through all possible end positions in the string, s
        for end in range(len(s)):
            # from the end position, look through all possible start
            # positions for which we can make a word in the string.
            for start in range(end, -1, -1):
                # if dp[start] is True, meaning we found a word that
                # reached that point in the string before, and the
                # word we can create is in our wordDict above.
                # Note python won't create the string s[start:end + 1]
                # unless dp[start] is true.
                if dp[start] and s[start: end + 1] in word_set:
                    # set the value at end+1 to true, and break as we
                    # know we found a word to cover this end point.
                    dp[end + 1] = True
                    break
        # return the last value in the dp array.
        return dp[-1]
```

</TabItem>
</Tabs>
