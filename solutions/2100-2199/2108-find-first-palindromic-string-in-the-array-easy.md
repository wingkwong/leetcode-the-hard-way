---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/find-first-palindromic-string-in-the-array/
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 2108 - Find First Palindromic String in the Array (Easy)

## Problem Link

https://leetcode.com/problems/find-first-palindromic-string-in-the-array/

## Problem Statement

Given an array of strings `words`, return _the first **palindromic** string in the array_. If there is no such string, return _an **empty string** _ `""`.

A string is **palindromic** if it reads the same forward and backward.

**Example 1:**

```
Input: words = ["abc","car","ada","racecar","cool"]
Output: "ada"
Explanation: The first string that is palindromic is "ada".
Note that "racecar" is also palindromic, but it is not the first.
```

**Example 2:**

```
Input: words = ["notapalindrome","racecar"]
Output: "racecar"
Explanation: The first and only string that is palindromic is "racecar".
```

**Example 3:**

```
Input: words = ["def","ghi"]
Output: ""
Explanation: There are no palindromic strings, so the empty string is returned.
```

**Constraints:**

* `1 <= words.length <= 100`
* `1 <= words[i].length <= 100`
* `words[i]` consists only of lowercase English letters.

## Approach 1: Check each word

There are several ways to check if a string is a palindrome or not.

#### Long and Efficient <a href="#longandefficient" id="longandefficient"></a>

```cpp
bool isPalindrome(const string& s) {
    for (int i = 0; i < s.size() / 2; i++) {
        if (s[i] != s[s.size() - i - 1])
            return false;
    }
    return true;
}
```

#### Shorter but not efficient <a href="#shorterbutnotefficient" id="shorterbutnotefficient"></a>

```cpp
bool isPalindrome(const string& s) {
    string t = s;
    reverse(t.begin(), t.end());
    return s == t;
}
```

#### Shortest but not efficient <a href="#shortestbutnotefficient" id="shortestbutnotefficient"></a>

```cpp
bool isPalindrome(const string& s) {
    return s == string(s.rbegin(), s.rend());
}
```

#### Shortest but efficient <a href="#shortestbutefficient" id="shortestbutefficient"></a>

```cpp
bool isPalindrome(const string &s) {
    return equal(s.begin(), s.begin() + s.size() / 2, s.rbegin());
}
```

We just need to iterate each string and check if the target $$s$$s is a palindrome, return the string if so.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    bool isPalindrome(const string& s) {
        return equal(s.begin(), s.begin() + s.size() / 2, s.rbegin());
    }
    
    string firstPalindrome(vector<string>& words) {
        for (auto s : words) {
            if (isPalindrome(s)) {
                return s;
            }
        }
        return "";
    }
};
```

