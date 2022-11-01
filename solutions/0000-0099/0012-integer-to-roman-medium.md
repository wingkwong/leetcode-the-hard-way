---
description: >-
  Author: @jessicaribeiroalves | https://leetcode.com/problems/integer-to-roman/
---

# 0012 - Integer to Roman (Medium)

## Problem Link

<https://leetcode.com/problems/integer-to-roman/>

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

Given an integer, convert it to a roman numeral.

**Example 1:**

```Python
Input: num = 3
Output: "III"
Explanation: 3 is represented as 3 ones.
```

**Example 2:**

```Python
Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
```

**Example 3:**

```Python
Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
```

**Constraints:**

- `1 <= num <= 3999`

## Approach 1: Iterating over a list

The solution used was iterating over a tuples list created to map the integers and their respective Roman numerals. So when iterating over the list, while the $remaining$ value is greater than or equal to the first tuple element (which is the integer value), append the corresponding character(s) (the second tuple element) to $result$ and subtract the value from $remaining$.

For example, if we consider the given integer $num = 17$, after starting the iteration over the list, the algorithm checks if the integer $17$ is greater than or equal to the first integer value from the first list element, which is $1000$. Since it's not, the code in the while loop is not executed and the next iteration starts checking if $17$ is greater than or equal to $900$ and so on until the iteration checks if $17$ is greater than or equal to $10$. In this iteration the code in the while loop is executed so that the $result$ variable is concatenated with the respective Roman numeral which is $'X'$ and $remaining$ becomes $7$. For the next iteration, $7$ is not greater than or equal to $9$ but on the next one, when it's greater than $5$, $result$ becomes $'XV'$ and $remaining$ becomes $2$. So keeping that logic, after the final iteration $result$ will be $'XVII'$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@jessicaribeiroalves"/>

```py
numbersDict = [
    (1000, 'M'),
    (900, 'CM'),
    (500, 'D'),
    (400, 'CD'),
    (100, 'C'),
    (90, 'XC'),
    (50, 'L'),
    (40, 'XL'),
    (10, 'X'),
    (9, 'IX'),
    (5, 'V'),
    (4, 'IV'),
    (1, 'I')
]

class Solution(object):
    def intToRoman(self, num):
        remaining = num
        result = ''
        for integerValue, romanNumeral in numbersDict:
            while remaining >= integerValue:
                result += romanNumeral
                remaining -= integerValue
        return result
```

</TabItem>

<TabItem value="js" label="JavaScript">
<SolutionAuthor name="@jessicaribeiroalves"/>

```js
const numbersDict = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
];

const intToRoman = (num) => {
    let remaining = num;
    let result = '';

    for (let [integerValue, romanNumeral] of numbersDict) {
        while (remaining >= integerValue) {
            result += romanNumeral;
            remaining -= integerValue;
        }
    }
    return result;
};
```

</TabItem>
</Tabs>

**Time Complexity: $O(1)$**

The time complexity for this solution is $O(1)$ as the algorithm execution time is independent of the size of the input.

**Space Complexity: $O(1)$**

The space complexity for this solution is also $O(1)$.
