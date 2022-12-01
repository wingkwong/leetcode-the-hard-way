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

<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    # We are going to create a counter to count the characters of t, then as 
    # we come across them in s, decrement the count in our counter. If count
    # for that character is <= 0, we have more than enough characters in our
    # window to equal t. so we can increment a matches variable to track that.
    # Knowing that our goal is to:
    # 1. add characters to our window, and then update the counter, and matches.
    # remembering that matches increments when the count of the characters in our
    # window reaches 0.
    # 2. Check to see if our window has all characters we need.
    # If so, we set our window to the current window, and start shrinking it to see
    # if it still remains true while shrinking. While shrinking, if the count of
    # the characters ever goes back positive, we know that we no longer have enough
    # characters inside our window to match t, so we can decrement matches, and stop
    # shrinking the window.
    # Repeat the above process until our window's right side expands to larger than s.
    def minWindow(self, s: str, t: str) -> str:
        # Early Return if t is larger than s, we obviously can't find t in s.
        if len(t) > len(s): return ""
        #Create counter to count all characters in t. O(n) time where n length of t.
        counter = {}
        for ch in t:
            if ch not in counter:
                counter[ch] = 0
            counter[ch] += 1
        # Initialize variables create out sliding window. l to track left
        # side of our window starting at 0, matches to track the characters
        # we have enough of inside our window to match t, and an initial variable
        # to where our window will start, and how large it is. We use -1 to show
        # we don't have a window started that is valid yet, and len(s) + 1 as a 
        # window that will be large enough than any window we find, if we find one
        # will be smaller than it, and therefore trigger our update condition.
        l = 0
        matches = 0
        window_start = -1
        window_size = len(s) + 1
        # Expand our window tracking r, right side window, and incoming character, ch.
        # O(m) time to look through the string s. Where m is length of s.
        for r, ch in enumerate(s):
            # Check expanded window incoming character is in counter so we can add it.
            if ch in counter:
                counter[ch] -= 1
                # If count for ch reaches 0, we have more than enough character to match it.
                if counter[ch] == 0:
                    matches += 1
            # Check that the window has all the characters it needs, while it does,
            # shrink the window until it doesn't have all characters it needs.
            while len(counter) == matches:
                # get current window size
                current_window_size = (r-l) + 1
                # check current window < smallest window found.
                if current_window_size < window_size:
                    # update size of smallest window we found.
                    window_size = current_window_size
                    # update start of window we found.
                    window_start = l
                # start the removal of the left character, ie moving window forward.
                left_ch = s[l]
                # if left ch is a character we need to match t, 
                if left_ch in counter:
                    # check to see if we have 0 for a count of that character.
                    # if we do, we know by removing it, we will no longer have enough
                    # characters to match to t.
                    if counter[left_ch] == 0:
                        matches -= 1
                    # remove ch from window, by incrementing its count.
                    counter[left_ch] += 1
                # move the window forward.
                l += 1
        # return the answer by slicing. string from our start point to start point + size
        # only do this if we found a valid window. Note slicing in python takes O(n)
        # where n is length of s, to copy the string, then slice it properly.
        return s[window_start: window_start + window_size] if window_start != -1 else ""
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
