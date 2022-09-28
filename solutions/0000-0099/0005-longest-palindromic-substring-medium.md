---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/longest-palindromic-substring/
tags: [String, Dynamic Programming]
---

# 0005 - Longest Palindromic Substring (Medium)

## Problem Link

https://leetcode.com/problems/longest-palindromic-substring/

## Problem Statement

Given a string `s`, return _the longest palindromic substring_ in `s`.

**Example 1:**

```
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
```

**Example 2:**

```
Input: s = "cbbd"
Output: "bb"
```

**Constraints:**

* `1 <= s.length <= 1000`
* `s` consist of only digits and English letters.

## Approach 1: Manacher's Algorithm

The most efficient solution is using Manacher's Algorithm to solve it in O(n). It is faster than other solutions because it exploits when a palindrome happens inside another palindrome.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    string manacher(string s) {
      int n = (int) s.size();
      // d1[i]: the number of palindromes accordingly with odd lengths with centers in the position i.
      // d2[i]: the number of palindromes accordingly with even lengths with centers in the position i. 
      vector<int> d1(n), d2(n);
      int l1 = 0, r1 = -1, l2 = 0, r2 = -1, mx_len = 0, start = 0;
      for (int i = 0; i < n; i++) {
          // ----------------------
          // calculate d1[i]
          // ----------------------
          int k = (i > r1) ? 1 : min(d1[l1 + r1 - i], r1 - i + 1);
          while (0 <= i - k && i + k < n && s[i - k] == s[i + k]) k++;
          d1[i] = k--;
          if (i + k > r1) l1 = i - k, r1 = i + k;
          if(d1[i] * 2 > mx_len) start = i - k, mx_len = d1[i] * 2 - 1;
          // ----------------------
          // calculate d2[i] 
          // ----------------------
          k = (i > r2) ? 0 : min(d2[l2 + r2 - i + 1], r2 - i + 1);
          while (0 <= i - k - 1 && i + k < n && s[i - k - 1] == s[i + k]) k++;
          d2[i] = k--;
          if (i + k > r2) l2 = i - k - 1, r2 = i + k;
          if(d2[i] * 2 > mx_len) start = i - k - 1, mx_len = d2[i] * 2;
      }
      // return the longest palindrome
      return s.substr(start, mx_len);
    }
    
    string longestPalindrome(string s) {
        // Using Manacher's algorithm 
        return manacher(s);
    }
};
```
</TabItem>
</Tabs>

## Approach 2: Character Set

With the help of HashSet, add every character while iterating and if the character is found already in the Set, count those characters (+2), and remove the char from the Set. Finally if the Set is not empty, then we can add 1 more character to be in the middle to form a palindrome, so count 1 and return it. 

Time complexity: O(n), where n - # of characters, All HashSet operation are O(1) constant time
Space complexity: O(n), Maintaining n/2 characters in the Set, Constants are ignored, so its O(n) extra space

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
public int longestPalindrome(String s) {
    if (s.length() == 1) return 1;
    int count = 0;
    Set<Character> seen = new HashSet<>();
    for (char c : s.toCharArray()) {
        if (!seen.add(c)) {
            count += 2;
            seen.remove(c);
        }
    }
    return !seen.isEmpty() ? count + 1 : count;
}
```
</TabItem>
</Tabs>

## Approach 3: ASCII Character Array (Optimal Solution)

As the problems states, constraints are `a-zA-Z`, So optimally we can maintain a char array of size 52. 

Time complexity: O(n), where n - # of characters
Space complexity: O(1), Maintaining O(52) chars in the array, which is considered O(1) extra space

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
public int longestPalindrome(String s) {
    if (s.length() == 1) return 1;
    int count = 0;
    int[] chars = new int[52];
    for (char c : s.toCharArray()) {
        if (c >= 97) chars[c - 'a' + 26]++;
        else chars[c - 'A']++;
    }
    for (int num : chars) {
        count += (num / 2) * 2;
    }
    return count == s.length() ? count : count + 1;
}
```
</TabItem>
</Tabs>