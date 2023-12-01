---
description: "Author: @dhanu084 | https://leetcode.com/problems/bulls-and-cows/"
tags: [Hashmap]
---

# 0299 - Bulls and Cows (Medium)

## Problem Link

https://leetcode.com/problems/bulls-and-cows/

## Problem Statement

You are playing the Bulls and Cows game with your friend.

You write down a secret number and ask your friend to guess what the number is. When your friend makes a guess, you provide a hint with the following info:

The number of "bulls", which are digits in the guess that are in the correct position.
The number of "cows", which are digits in the guess that are in your secret number but are located in the wrong position. Specifically, the non-bull digits in the guess that could be rearranged such that they become bulls.
Given the secret number secret and your friend's guess guess, return the hint for your friend's guess.

The hint should be formatted as "xAyB", where x is the number of bulls and y is the number of cows. Note that both secret and guess may contain duplicate digits.

**Example 1:**:

```
Input: secret = "1807", guess = "7810"
Output: "1A3B"
Explanation: Bulls are connected with a '|' and cows are underlined:
"1807"
  |
"7810"
```

**Example 2:**

```
Input: secret = "1123", guess = "0111"
Output: "1A1B"
Explanation: Bulls are connected with a '|' and cows are underlined:
"1123"        "1123"
  |      or     |
"0111"        "0111"
Note that only one of the two unmatched 1s is counted as a cow since the non-bull digits can only be rearranged to allow one 1 to be a bull.
```

**Constraints:**

- $1 <= secret.length, guess.length <= 1000$
- secret.length == guess.length
- secret and guess consist of digits only.

## Approach 1: Hashmap

Time Complexity: $$O(n)$$

Space Complexity: $$O(n)$$

<Tabs>
<TabItem value="py" label="Python">

<SolutionAuthor name="@dhanu084" />

```python
class Solution:
    def getHint(self, secret: str, guess: str) -> str:
        '''
             Counter is an unordered collection where
             elements are stored as Dict keys and their
             count as dict value
        '''
        secret_freq = Counter(secret)
        bulls = cows = 0
        n = len(secret)

        for i in range(n):
            '''
                if letter and position matches with secret increase
                the bulls count and decrease the frequency of the
                matched number to handle duplicates
            '''
            if secret[i] == guess[i]:
                bulls += 1
                secret_freq[secret[i]] -= 1

        for i in range(n):
            '''
                if guessed letter is present in guess
                with frequency greater than 0 and if itsn't a bull
                only then increase cows count
            '''
            if guess[i] in secret_freq and secret_freq[guess[i]] > 0 and guess[i] != secret[i]:
                cows += 1
                secret_freq[guess[i]] -= 1

        return f'{bulls}A{cows}B'
```

</TabItem>
</Tabs>
