---
description: 'Author: @wingkwong, @jit | https://leetcode.com/problems/largest-odd-number-in-string/'
tags: [Math, String, Greedy]
---

# 1903 - Largest Odd Number in String (Easy) 

## Problem Link

https://leetcode.com/problems/largest-odd-number-in-string/

## Problem Statement

You are given a string `num`, representing a large integer. Return *the **largest-valued odd** integer (as a string) that is a **non-empty substring** of*`num`*, or an empty string*`""`*if no odd integer exists*.

A **substring** is a contiguous sequence of characters within a string.

**Example 1:**

```
Input: num = "52"
Output: "5"
Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
```

**Example 2:**

```
Input: num = "4206"
Output: ""
Explanation: There are no odd numbers in "4206".
```

**Example 3:**

```
Input: num = "35427"
Output: "35427"
Explanation: "35427" is already an odd number.
```

**Constraints:**

- $1 <= num.length <= 10 ^ 5$
- `num` only consists of digits and does not contain any leading zeros.

## Approach 1: Retain from last odd number

A number is odd as long as the last digit is odd. Therefore, we can search the last odd digit in the string and build the substring.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wingkwong"/>

```py
class Solution:
    def largestOddNumber(self, num: str) -> str:
        last = -1
        for i in range(len(num)):
            if int(num[i]) & 1:
                last = i
        return num[:last + 1]
```

</TabItem>

<TabItem value="erlang" label="Erlang">
<SolutionAuthor name="@jit"/>

```erlang
-spec largest_odd_number(Num :: unicode:unicode_binary()) -> unicode:unicode_binary().
%% Retain from last odd number:
largest_odd_number(Num) ->
  {Leading, _} = string:take(Num, "13579", true, trailing),
  Leading.
```

</TabItem>
</Tabs>