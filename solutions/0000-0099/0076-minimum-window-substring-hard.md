---
description: >-
  Author: @vigneshshiv |
  https://leetcode.com/problems/minimum-window-substring/
---

# 0076 - Minimum Window Substring (Hard)

## Problem Link

https://leetcode.com/problems/minimum-window-substring/

## Problem Statement

Given two strings `s` and `t` of lengths `m` and `n` respectively, return **minimum window substring** of `s` such that every character in `t` (**including duplicates**) is included in the window. If there is no such substring, return the empty string `""`.

The testcases will be generated such that the answer is **unique**.

A **substring** is a contiguous sequence of characters within the string.

**Example 1:**

```
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
```

**Example 2:**

```
Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
```

**Example 3:**

```
Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
```

**Constraints:**

* `m == s.length`
* `n == t.length`
* `1 <= m, n <= 10^5`
* `s` and `t` consist of uppercase and lowercase English letters.


**Follow up:** Could you find an algorithm that runs in `O(m + n)` time?

## Approach 1: Sliding Window with HashMap

Finding all of T's characters in S, irrespective of order and other characters in a linear time requires two pointer approach. 

One of the base case is, T should be smaller than S, Otherwise if T's larger than S then return "". But if both strings are equal then T is our answer. 

Apart from above mentioned base cases, Here are the simple steps to solve this problem,

- Build a HashMap of T's characters and it's count.
- Iterate through S and move forward with one pointer, and look for each char in map and it's count, If matches then we found one of the matching character.
- Repeat the process until of all T's characters found in S, Once found, that's our minimum window.
- Remove S's unnecessary characters in HashMap starting from first, and find the minimum window. 
- Repeat the 3rd & 4th step until you find the minimum window substring

Time Complexity: $O(m + n)$, where $m$ - # of characters in s and $n$ - # of characters in t.

Space complexity: $O(n)$

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public String minWindow(String s, String t) {
        String empty = "";
        int m = s.length(), n = t.length();
        // If String T length is greater than S, then all of T chars can't fit in S, so return ""
        if (n > m) return empty;
        // If S & T equals, then that's the min
        if (m == n && s.equals(t)) return t;
        // Build T character hashmap and counts
        Map<Character, Integer> map = new HashMap<>();
        for (char c : t.toCharArray()) {
            map.put(c, map.getOrDefault(c, 0) + 1);
        }
        // i - refers start position usually left
        int i = 0, start = -1, matched = 0, min = s.length() + 1;
        for (int j = 0; j < m; j++) {
            char c = s.charAt(j);
            if (map.containsKey(c)) {
                map.merge(c, -1, Integer::sum);
                // If map character matches 0, then found valid char, increase matched by 1
                if (map.get(c) == 0) {
                    matched += 1;
                }
            }
            // If matched equals all of T's character, then find minimum window
            while (matched == map.size()) {
                if (min > j - i + 1) {
                    min = j - i + 1;
                    start = i;
                }
                char del = s.charAt(i++);
                if (map.containsKey(del)) {
                    // If we are seeing one of T's del char then increase count by 1
                    // If the char count is 0, then decrement matched by 1 (reason count will be increment by 1)
                    if (map.get(del) == 0) {
                        matched -= 1;
                    }
                    map.merge(del, 1, Integer::sum);
                }
            }
        }
        return start == -1 ? empty : s.substring(start, start + min);
    }
}
```

</TabItem>
</Tabs>


## Approach 2: Sliding Window with ASCII

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public String minWindow(String s, String t) {
        String empty = "";
        int m = s.length(), n = t.length();
        // If String T length is greater than S, then all of T chars can't fit in S, so return ""
        if (n > m) return empty;
        // If S & T equals, then that's the min
        if (m == n && s.equals(t)) return t;
        // Build T character hashmap and counts
        int[] map = new int[128];
        for (char c : t.toCharArray()) {
            map[c] += 1;
        }
        // i - refers start position usually left
        int i = 0, start = -1, matched = 0, min = s.length() + 1;
        for (int j = 0; j < m; j++) {
            char c = s.charAt(j);
            if (map[c]-- > 0) {
                matched += 1;
            }
            while (matched == n) {
                if (min > j - i + 1) {
                    min = j - i + 1;
                    start = i;
                }
                char del = s.charAt(i++);
                if (map[del]++ >= 0) {
                    matched -= 1;
                }
            }
        }
        return start == -1 ? empty : s.substring(start, start + min);
    }
}
```

</TabItem>
</Tabs>
