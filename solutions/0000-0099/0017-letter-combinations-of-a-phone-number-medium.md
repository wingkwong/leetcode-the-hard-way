---
description: >-
  Author: @vigneshshiv, @radojicic23, @ColeB2 | https://leetcode.com/problems/letter-combinations-of-a-phone-number/


tags: [Hash Table, String, Backtracking]
---

# 0017 - Letter Combinations of a Phone Number (Medium)

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

- `0 <= digits.length <= 4`
- `digits[i]` is a digit in the range `['2', '9']`.

## Approach 1: Recursive Backtracking with Subsets

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
var letterCombinations = function (digits) {
  let res = [];
  const hashmap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

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
    backtrack(0, '');
  }
  return res;
};
```

</TabItem>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@radojicic23"/>

```cpp
class Solution {
public:
    vector<string> letterCombinations(string digits) {
        vector<string> ans;
        string currStr = "";
        map<char, string> hashMap = {
                {'2', "abc"},
                {'3', "def"},
                {'4', "ghi"},
                {'5', "jkl"},
                {'6', "mno"},
                {'7', "pqrs"},
                {'8', "tuv"},
                {'9', "wxyz"}
        };
        if (digits == "") return ans;
        backtrack(digits, hashMap, ans, currStr, 0);
        return ans;
    }
    void backtrack(string& digits, map<char, string>& hashMap, vector<string>& ans, string& currStr, int i) {
        if (digits.size() == currStr.size()) {
            ans.push_back(currStr);
            return;
        }
        for (char c : hashMap[digits[i]]) {
            currStr.push_back(c);
            backtrack(digits, hashMap, ans, currStr, i + 1);
            currStr.pop_back();
        }
    }
};
```

</TabItem>
</Tabs>

## Approach 2: Recursive Backtracking with ASCII

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

## Approach 3: Iterative Backtracking

We can utilize the same pricinple as above, just maintaining our own stack. At each step of our backtracking, we add to our stack, our current string plus 1 of the mapped letters and we do that for all mapped letters. When we run out of digits we can add to our return array the completed string.

Time Complexity: $$O(n * 4^n)$$ Where n is the length of the input string. In the worst case, (all 7s or 9s) we will have 4 choices of letters to choose from and for each output string we create will be of size $$n$$ and therefore take $$O(n)$$ time to create the string.

Space Complexity: $$O(4^n)$$. We will end up creating $$4^n$$ output strings to add to our return array.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        # base case, given empty input string, return early.
        if not digits:
            return []
        # initialize our digit to letter map.
        letter_map = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz"
        }
        # intiailize our return list, and stack.
        letter_combos = []
        # stack is formatted as (int, str)
        # where the int is our index inside the digits string.
        # and the str is the current string created so far.
        stack = [(0, "")]

        while stack:
            # pop off the current index, and the current string.
            idx, string = stack.pop()
            # if we reached the end of the digits string.
            if idx == len(digits):
                # add to our return list, the string we created and continue.
                letter_combos.append(string)
                continue
            # for each character that the current digit maps to:
            for ch in letter_map[digits[idx]]:
                # add to our backtracking stack
                # the new index, which is idx + 1, and the new current
                # string, which is the string + the character we mapped to.
                stack.append((idx + 1, string + ch))
        return letter_combos
```

</TabItem>
</Tabs>
