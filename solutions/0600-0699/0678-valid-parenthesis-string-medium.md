---
description: 'Author: @ColeB2 | https://leetcode.com/problems/valid-parenthesis-string/'
tags: [String, Dynamic Programming, Stack, Greedy]
---

# 0678 - Valid Parenthesis String (Medium)

## Problem Link

https://leetcode.com/problems/valid-parenthesis-string/

## Problem Statement

Given a string `s` containing only three types of characters: `'('`, `')'` and `'*'`, return `true` _if_ `s` _is **valid**_.

The following rules define a valid string:

- Any left parenthesis `'('` must have a corresponding right parenthesis `')'`.
- Any right parenthesis `')'` must have a corresponding left parenthesis `'('`.
- Left parenthesis `'('` must go before the corresponding right parenthesis `')'`.
- `'*'` could be treated as a single right parenthesis `')'` or a single left parenthesis `'('` or an empty string `""`.

**Example 1:**

```
Input: s = "()"
Output: true
```

**Example 2:**

```
Input: s = "(*)"
Output: true
```

**Example 3:**

```
Input: s = "(*))"
Output: true
```

**Constraints:**

- `1 <= s.length <= 100`
- `s[i]` is `'('`, `')'` or `'*'`.

## Approach 1: Greedy

If there were no $$'*'$$ characters, we could easily do this, using an integer, and just tracking $$'('$$ chars as a $$+1$$ and $$')'$$ as a $$-1$$. Returning False, if the result ever goes negative, and True if the final result is $$0$$.

The $$'*'$$ throws a little wrench, so instead we can track two integers. Both a min balance and a max balance. That is for the min balance we can do the same thing and treat all $$'*'$$ characters as $$')'$$ but reset to zero if the result ever goes negative. This would be us converting a $$'*'$$ to something else.

Then for the max balance, we can do the same, but treat all $$'*'$$ as $$'('$$. Then we know if the max balance ever reaches negative, that we absolutely can't create a valid string, as we don't have enough $$'*'$$, and as long as our max balance is positive, we can reset our min balance to 0 to convert our $$'*'$$ into something else.

If in the end, our min balance is 0, then we can create a balanced string.

Time Complexity: $$O(n)$$, we just need to iterate through each character once.

Space Complexity: $$O(1)$$, we can do this in constant time just tracking our max and min balances.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    # track 2 values, min_balance and max_balance which represent
    # the balance of parenthesis. Positive means, we have more '('
    # negative means we have more ')'.
    # The min_balance value will represent the lowest balance of
    # parenthesis. This means we always convert a '*' to a ')',
    # without going negative. This means we can reconvert a '*'
    # if the value ever does go negative.
    # The max_balance value will represent the highest balance of
    # parenthesis. Meaning we will always convert a '*' into a '('
    # If the max_balance ever hits negative, it means we have way
    # too many ')' to create a balanced parenthesis string.
    # So as long as max_balance is positive, we can always reset
    # min_balance to 0, as we can convert a '*' into something else.
    def checkValidString(self, s: str) -> bool:
        # initialize min and max balances
        min_balance, max_balance = 0, 0
        # iterate through each character in the string
        for ch in s:
            if ch == '(':
                # Open parenthesis always adjust our balance positive
                min_balance += 1
                max_balance += 1
            elif ch == ')':
                # close parenthesis lowers both balances, but if
                # If the min reaches negative, reset it to 0.
                min_balance = max(0, min_balance - 1)
                max_balance -= 1
            elif ch == '*':
                # For min balance consider the '*' a ')', if we
                # reach negative, convert it to something else.
                min_balance = max(0, min_balance - 1)
                # add it as open '(' parenthesis.
                max_balance += 1
            # max ever reaches 0, since we are always converting '*'
            # into '(', it means we have way too many ')'.
            if max_balance < 0:
                return False
        # if our min_balance reached 0, it means we have an even number
        # of parenthesis, so then it returns True. If not, then it will
        # return False.
        return min_balance == 0
```

</TabItem>
</Tabs>
