---
description: >-
  Author: @vigneshshiv |
  https://leetcode.com/problems/valid-parentheses/
---

# 0020 - Valid Parentheses (Easy)

## Problem Link

https://leetcode.com/problems/valid-parentheses/

## Problem Statement

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

**Example 1:**

```
Input: s = "()"
Output: true
```

**Example 2:**

```
Input: s = "()[]{}"
Output: true
```

**Example 3:**

```
Input: s = "(]"
Output: false
```

**Constraints:**

* `1 <= s.length <= 10^4`
* `s` consists of parentheses only `'()[]{}'`.

## Approach 1: Stack

Stack is widely known as `LIFO (last-in, first-out)` data structure. 

It's commonly used in `undo mechanisms in text editors` and `compiler syntax checking for matching brackets and braces`.

Parentheses/braces can be in this order `'()()'` or `'(())'`, since the last open `'('` brace next sequence could be either `')'` or `'('` another open brace to nested open braces. 

If the input has any of the open `'('` or `'{'` or `'['` we can push onto a stack. If any close braces/parentheses comes then validate with last inserted character which is on the stack pop, should match corresponding open braces/paranetheses. 

Time Complexity: $O(n)$, where $n$ - # of characters in the string

Space complexity: $O(n)$

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public boolean isValid(String s) {
        if (Objects.isNull(s) || s.isEmpty() || s.length() < 2) {
            return false;
        }
        Stack<Character> stack = new Stack<>();
        for (char c : s.toCharArray()) {
            if (Objects.equals(c, '(') || Objects.equals(c, '[') || Objects.equals(c, '{')) {
                stack.push(c);
            } else {
                if (stack.isEmpty()) {
                    return false;
                }
                char last = stack.pop();
                if (Objects.equals(c, ')') && !Objects.equals(last, '(')) {
                    return false;
                }
                if (Objects.equals(c, ']') && !Objects.equals(last, '[')) {
                    return false;
                }
                if (Objects.equals(c, '}') && !Objects.equals(last, '{')) {
                    return false;
                }
            }
        }
        return stack.isEmpty();
    }
}
```
</TabItem>
<TabItem value="python" label="Python">
<SolutionAuthor name="@vale-c"/>

```python
class Solution:
    def isValid(self, s: str) -> bool:
        if not s or len(s) < 2: # if string is empty or has only one character
            return False
        stack = []
        for c in s: # iterate over the string
            if c in ['(', '[', '{']: # if the character is an opening bracket
                stack.append(c) # push it to the stack
            else:
                if not stack: # if the stack is empty there is no opening bracket to match
                    return False
                last = stack.pop() 
                if c == ')' and last != '(': # if the character is a closing bracket and the last element in the stack is not the corresponding opening bracket
                    return False
                if c == ']' and last != '[':
                    return False
                if c == '}' and last != '{':
                    return False
        return not stack # if the stack is empty it means that all the brackets were matched
```
</TabItem>
<TabItem value="javascript" label="JavaScript">
<SolutionAuthor name="@vale-c"/>

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (!s || s.length < 2) { // if string is empty or has only one character
        return false;
    }
    let stack = [];
    for (let c of s) { // iterate over the string
        if (c === '(' || c === '[' || c === '{') { // if the character is an opening bracket
            stack.push(c); // push it to the stack
        } else {
            if (!stack.length) { // if the stack is empty there is no opening bracket to match
                return false;
            }
            let last = stack.pop();
            if (c === ')' && last !== '(') { // if the character is a closing bracket and the last element in the stack is not the corresponding opening bracket
                return false;
            }
            if (c === ']' && last !== '[') {
                return false;
            }
            if (c === '}' && last !== '{') {
                return false;
            }
        }
    }
    return !stack.length; // if the stack is empty it means that all the brackets were matched
};
```
</TabItem>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@vale-c"/>

```cpp
class Solution {
public:
    bool isValid(string s) {
        if (s.empty() || s.length() < 2) { // if string is empty or has only one character
            return false;
        }
        stack<char> stack;
        for (char c : s) { // iterate over the string
            if (c == '(' || c == '[' || c == '{') { // if the character is an opening bracket
                stack.push(c); // push it to the stack
            } else {
                if (stack.empty()) { // if the stack is empty there is no opening bracket to match
                    return false;
                }
                char last = stack.top();
                stack.pop();
                if (c == ')' && last != '(') { // if the character is a closing bracket and the last element in the stack is not the corresponding opening bracket
                    return false;
                }
                if (c == ']' && last != '[') {
                    return false;
                }
                if (c == '}' && last != '{') {
                    return false;
                }
            }
        }
        return stack.empty(); // if the stack is empty it means that all the brackets were matched
    }
};
```
</TabItem>
</Tabs>