---
description: >-
  Author: @vigneshshiv, @radojicic23 |
  https://leetcode.com/problems/letter-combinations-of-a-phone-number/
---

# 0017 - Letter Combinations of a Phone Number (Hard)

## Problem Link

https://leetcode.com/problems/letter-combinations-of-a-phone-number/

## Problem Statement

Given a string containing digits from `2-9` inclusive, return all possible letter combinations that the number could represent. Return the answer in **any order**.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that $1$ does not map to any letters.

<img src="https://assets.leetcode.com/uploads/2022/03/15/1200px-telephone-keypad2svg.png" width="300" height="243" />

**Example 1:**

```
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

```

**Example 2:**

```
Input: digits = ""
Output: []

```

**Example 3:**

```
Input: digits = ""
Output: ["a","b","c"]

```

**Constraints:**

* `0 <= digits.length <= 4`
* `digits[i]` is a digit in the range `['2', '9']`.

## Approach 1: Recursion with Subsets

Simple and naive approach to solve this problem by having map of key and values same as Phone key pad. 

Iterative over the input digit by digit and for each digit look for the combinations of key characters. Initialize prefix string which holds an key combination in the recursive call stack. 

As per example 1, digits is $23$, for the first digit $2$, the program iterates over `"abc"` characters, and for each char, the program is recursively called to get the next digit combination associated with current character `'a'`. 

Maximum possibilities for each character is $4$, So each of recursive call, adds the char to the prefix string and add it to the result list, it does $O(n)$ time, and $O(4^n)$ recursive call stack for each character, where $n$ is the length of the string.

Time complexity: $O(n ^ n)$ or $O(n * 4^n)$

Space complexity: $O(n^n)$ or $O(4 ^ n)$

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    
    private Map<Character, String> digitToChar = Map.of(
            '2', "abc",
            '3', "def",
            '4', "ghi",
            '5', "jkl",
            '6', "mno",
            '7', "pqrs",
            '8', "tuv",
            '9', "wxyz"
    );
    
    public List<String> letterCombinations(String digits) {
        if (digits.length() == 0) {
            return new ArrayList<>();
        }
        List<String> result = new ArrayList();
        backtrack(digits, result, "", 0);
        return result;
    }
    
    public void backtrack(String digits, List<String> result, String prefix, int index) {
        if (prefix.length() == digits.length()) {
            result.add(prefix);
            return;
        } else if (index >= digits.length()) {
            return;
        } else {
            String digit = digitToChar.get(digits.charAt(index));
            for (char c : digit.toCharArray()) {
                backtrack(digits, result, prefix + c, index + 1);
            }
        }
    }
}
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@radojicic23"/>

```py
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        res = []
        hashmap = {'2': 'abc', 
                   '3': 'def', 
                   '4': 'ghi', 
                   '5': 'jkl', 
                   '6': 'mno', 
                   '7': 'pqrs', 
                   '8': 'tuv', 
                   '9': 'wxyz'}
                   
        def backtrack(i, curr_str):
            if len(curr_str) == len(digits):
                res.append(curr_str)
                return 
            for c in hashmap[digits[i]]:
                backtrack(i + 1, curr_str + c)
        if digits:
            backtrack(0, "")
        return res 
```

</TabItem>

<TabItem value="js" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```js
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let res = [];
    const hashmap = {'2': 'abc', 
               '3': 'def', 
               '4': 'ghi', 
               '5': 'jkl', 
               '6': 'mno', 
               '7': 'pqrs', 
               '8': 'tuv', 
               '9': 'wxyz'};
    
    function backtrack(i, curr_str) {
        if (curr_str.length == digits.length) {
            res.push(curr_str);
            return;
        }
        for (c of hashmap[digits[i]]) {
            backtrack(i + 1, curr_str + c);
        }
    }
    if (digits) {
        backtrack(0, "");
    }
    return res;
};
```

</TabItem>
</Tabs>


## Approach 2: Recursion with ASCII

Instead of having a map of characters for each digits, try to solve the problem only with numbers. 

Try to map every digits to ASCII combinations like $2$ is mapped `"abc"`, How to get this from the number. 

Based on the input, we need to have a **start and end range** for each digit. To form `'a'` from $2$, which number we can add to get `'a'`, if we add $0$ with char `'a'` then we will get the same char `'a'`, like wise we need to form the range for other digits as well. 

For $7$ and $9$ key pads has 4 chars, so apply the logic by bit different as mentioned below in the program. 

Time and Space complexity is same as above.

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    
    public List<String> letterCombinations(String digits) {
        if (digits.isEmpty()) {
            return new ArrayList<>();
        }
        return letterCombinations("", digits);
    }
    
    public List<String> letterCombinations(String prefix, String digits) {
        List<String> result = new ArrayList<>();
        if (digits.isEmpty()) {
            result.add(prefix);
            return result;
        }
        // Transform char to number by subtracting '0' char (ASCII)
        int digit = (int) digits.charAt(0) - '0';
        // ASCII start range for the current digit
        int start = digit > 7 ? (digit - 1) * 3 - 2 : (digit - 2) * 3;
        // End range
        int end = digit == 9 ? (digit * 3) - 1 : digit > 6 ? (digit * 3) - 2 : (digit - 1) * 3;
        for (int i = start; i < end; i++) {
            char ch = (char) ('a' + i);
            result.addAll(letterCombinations(prefix + ch, digits.substring(1)));
        }
        return result;
    }
}
```

</TabItem>
</Tabs>