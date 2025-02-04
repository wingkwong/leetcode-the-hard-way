---
description: 'Author: @ColeB2 | https://leetcode.com/problems/palindromic-substrings/'
tags: [String, Dynamic Programming]
---

# 0647 - Palindromic Substrings (Medium)

## Problem Link

https://leetcode.com/problems/palindromic-substrings/

## Problem Statement

Given a string `s`, return _the number of **palindromic substrings** in it_.

A string is a **palindrome** when it reads the same backward as forward.

A **substring** is a contiguous sequence of characters within the string.

**Example 1:**

```
Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
```

**Example 2:**

```
Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
```

**Constraints:**

- `1 <= s.length <= 1000`
- `s` consists of lowercase English letters.

## Approach 1: Manacher's Algorithm

We can modify Manacher's Algorithm, which finds the longest palindromic substring inside a string in linear time, to help us find all substrings and count them.

First, we can preprocess the string with characters in between letters to make it easier to handle even-length palindromes. Ie $$abc$$ will become $$@a@b@c@$$. Then we can see if we center our palindrome on a $$@$$ character, it will only consider it a palindrome if both sides of that character are the same. Similarly, every character will be considered a palindrome, as they as surrounded by $$@$$ characters.

Next Manacher's Algorithm will exploit the fact that palindromes can occur inside each other, and that for a palindrome to exist, the right side of our center must be the same as the palindromes to the left of our center. That is if we iterate from left to right, checking for palindromes by using our $$i$$ as the center and working outwards, we will know all palindromes to the left of the center from previous iterations, so we can reuse that knowledge for the right side, and then further expand that palindrome, based on the information from the left side to see if it expands further than the furthest right we have gone.

The final step is to count the number of palindromes centered at each $$i$$ index. We can do that at each iteration, $$i$$ by using $$(dp[i] + 1) // 2$$. This represents the number of odd-length palindromes centered at $$i$$ in the original string. Since we preprocessed with characters between letters, the odd-length palindromes of each $$@$$ character will represent the even-length palindromes.

Time Complexity: $$O(n)$$. We create a modified string and loop each character in the modified string, so the time complexity is linear to the length of the modified string, which will be in relation to the input string.

Space Complexity: $$O(n)$$ to track our $$dp$$ array, which tracks the length of each palindrome centered at $$dp[i]$$

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def manacher(self, s: str) -> str:
        # Preprocess the string. We use # and ! at the end to
        # prevent the need for boundary checking in the loop
        # below, as # != ! it won't ever count as a palindrome.
        s = '#@' + '@'.join(s) + '@!'
        # n is the length of our modified string.
        n = len(s)
        # create our dp array dp[i] is the length
        # of the longest palindrome centered at i
        dp = [0] * n
        # initialize center and right variables to 0.
        # c = center, r = right. Which are the center,
        # and right bound of the furthest right palindrome
        # found so far.
        c, r = 0, 0
        # Count of how many palindromes found.
        substring_count = 0
        # loop from 1 to n - 1 which is the length of our preprocessed
        # string. This also prevents the need for boundary checks.
        for i in range(1, n - 1):
            # check if i is withing the current palindrome centered at c.
            if i < r:
                # If it is, we can use symmetry to set dp[i], which is
                # the min of either formulas below.
                dp[i] = min(r - i, dp[2 * c - i])
            # Next we can update the length of the palindrome by checking
            # each side of the current character centered at i.
            # dp[i] handles if we already previously checked on the
            # left side, so as not to redo work we already found earlier.
            while s[i + dp[i] + 1] == s[i - dp[i] - 1]:
                dp[i] += 1
            # if palindrome centered at i extended beyond r,
            # update c, and r bounds to reflect that.
            if i + dp[i] > r:
                c, r = i, i + dp[i]
            # Count the number of palindromic substrings centered at i.
            substring_count += (dp[i] + 1) // 2
        return substring_count

    def countSubstrings(self, s: str) -> int:
        # call manacher and return value.
        return self.manacher(s)
```

</TabItem>
</Tabs>
