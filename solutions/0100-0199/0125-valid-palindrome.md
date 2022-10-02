---
description: "Author: @vale-c | https://leetcode.com/problems/valid-palindrome/"
---

# 0125 - Valid Palindrome (Easy)

## Problem Link

https://leetcode.com/problems/valid-palindrome/

## Problem Statement

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.

**Constraints:**

- `1 <= s.length <= 2 * 10 ^ 5`
- `s` consists only of printable ASCII characters.

## Approach: Two Pointers

We can use two pointers to check if the string is a palindrome. We start from the beginning and the end of the string and move progressively towards the middle of the string.

We use a variable `alpha` to perform the following operations:

- Converting all uppercase letters to lowercase

- Ignoring all non-alphanumeric characters

If the characters at the two pointers are _not_ the same, we return _false_.

If we reach the middle of the string, we return _true_.

#### Time Complexity

The time complexity for this solution is $O(n)$, where $n$ is the length of the string.

#### Space Complexity

The space complexity is $O(1)$ since we only use a constant amount of space.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@vale-c"/>

```py
class Solution:
    def isPalindrome(self, s: str) -> bool:
        # discard all non-alphanumeric characters and 
        # convert all uppercase letters to lowercase
        alpha = ''.join(char for char in s.lower() if char.isalnum()) 

        # start pointer from the beginning
        # end pointer from the end
        start, end = 0, len(alpha) - 1

        while (start < end):
            if alpha[start] != alpha[end]:
                return False
            else:
                # move start pointer to the right
                start += 1
                # move end pointer to the left
                end -= 1
        return True
```

</TabItem>
</Tabs>
