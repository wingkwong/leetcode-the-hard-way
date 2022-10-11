---
description: >-
  Author: @jessicaribeiroalves | https://leetcode.com/problems/roman-to-integer/
---

# 0013 - Roman to Integer (Easy)

## Problem Link

<https://leetcode.com/problems/roman-to-integer/>

## Problem Statement

Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.

```Python
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

For example, `2` is written as `II` in Roman numeral, just two ones added together. `12` is written as `XII`, which is simply `X + II`. The number `27` is written as `XXVII`, which is `XX + V + II`.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

- `I` can be placed before `V` (5) and `X` (10) to make 4 and 9.
- `X` can be placed before `L` (50) and `C` (100) to make 40 and 90.
- `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

**Example 1:**

```Python
Input: s = "III"
Output: 3
Explanation: III = 3.
```

**Example 2:**

```Python
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
```

**Example 3:**

```Python
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
```

**Constraints:**

- `1 <= s.length <= 15`
- `s` contains only the characters `('I', 'V', 'X', 'L', 'C', 'D', 'M')`.
- It is **guaranteed** that `s` is a valid roman numeral in the range `[1, 3999]`.

## Approach 1: Iterating over the string

The solution used was iterating over the string and executing a condition that meets the subtraction principles described above in the problem statement, in order to return the result corresponding to the final sum.

The condition says: if the current character is greater than the previous character then subtract the previous character value from the result, otherwise increment the value of the previous char to the result.

For example, if we consider the string `s = 'XIV'`, the first character `'X'` whose value is `10` will satisfy the condition, since the `previous_char` variable is initialized with `0`, then `result` still remains `0`.
The second character `'I'` whose value is `1` won't satisfy the condition once `1` isn't greater than `previous_char` which is now `10`. So `result` is incremented by `10` and `previous_char` is updated to `1`.
Finally, the third character `'V'` whose value is `5` will satisfy the condition because is greater than `previous_char`. So from the `result` is subtracted `1` and `previous_char` is updated to 5.
The code finishes the loop with `result = 9` and finally increments the value of `previous char` to the `result`. So our final result becomes `14`.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@jessicaribeiroalves"/>

```py
romanNumeralsDict = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

class Solution(object):    
    def romanToInt(self, s):
        result = 0
        previous_char = 0

        for char in s:
            if romanNumeralsDict[char] > previous_char:
                result -= previous_char
            else:
                result += previous_char

            previous_char = romanNumeralsDict[char]

        result += previous_char
        return result

```

</TabItem>
</Tabs>

**Time Complexity: $O(n)$**

This solution will be $O(n)$ as the time varies proportionally to the length of the string.

**Space Complexity: $O(1)$**

The space complexity for this solution is $O(1)$ as we only created variables for the counters and they're not related to the input size.
