---
description: 'Author: @wkw, @ColeB2 | https://leetcode.com/problems/permutation-in-string/'
tags: [Hash Table, Two Pointers, String, Sliding Window]
---

# 0567 - Permutation in String (Medium)

## Problem Link

https://leetcode.com/problems/permutation-in-string/

## Problem Statement

Given two strings `s1` and `s2`, return `true` _if_ `s2` _contains a permutation of_ `s1`_, or_ `false` _otherwise_.

In other words, return `true` if one of `s1`'s permutations is the substring of `s2`.

**Example 1:**

```
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
```

**Example 2:**

```
Input: s1 = "ab", s2 = "eidboaoo"
Output: false
```

**Constraints:**

- `1 <= s1.length, s2.length <= 10^4`
- `s1` and `s2` consist of lowercase English letters.

## Approach 1: Sliding Window

The solution is almost same as [0438 - Find All Anagrams in a String (Medium)](../0400-0499/find-all-anagrams-in-a-string-medium). The general idea is to count the character occurrences as the string order doesn't matter, and check if there is a window with the same length as $$s1$$ contains the same set of occurrences.

We first use a hash map $$target$$ count the occurrences for each character in $$s1$$. Then we apply sliding window. We use a pointer $$i$$ to track the window starting point and use a pointer $$j$$ to track the window ending point in $$s2$$. We increase the pointer $$j$$ to count the occurrences in $$s2$$ and put the result in another hash map $$now$$ until the window size $$j - i + 1$$ is equal to the length of $$s1$$. Then we compare if both hash maps are identical. If so, return the answer immediately. If not, then we need to remove the leftmost element within this window. Continue the same process until the pointer $$i$$ reaches the end of the string.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    bool checkInclusion(string s1, string s2) {
        // target for s1, now for s2
        vector<int> target(26), now(26);
        int n = (int) s1.size(), m = (int) s2.size(), j = 0;
        // count the occurrences for characters in s1
        for (auto x : s1) target[x - 'a']++;
        // apply sliding window. pointer i is the starting position
        for (int i = 0; i < m; i++) {
          // pointer j is the ending position
          // j - i + 1 = window size
          // we count the occurrences for characters in s2 within the window
          while (j < m && j - i + 1 <= n) now[s2[j++] - 'a']++;
          // check if both hash maps are same or not
          // if they are same, return true
          if (now == target) return true;
          // if they are not same, remove the leftmost element and move forward
          now[s2[i] - 'a']--;
      }
      // no permutation is the substring of s2. return false here
      return false;
    }
};
```

We can also do it without pointer $$j$$.

```cpp
class Solution {
public:
    bool checkInclusion(string s1, string s2) {
        // target for s1, now for s2
        vector<int> target(26), now(26);
        int n = (int) s1.size(), m = (int) s2.size();
        // count the occurrences for characters in s1
        for (auto x : s1) target[x - 'a']++;
        for (int i = 0; i < m; i++) {
            // count the occurrences for characters in s2
            now[s2[i] - 'a']++;
            // remove the leftmost element in the window
            if (i >= n) now[s2[i - n] - 'a']--;
            // check both hash maps are same
            if (now == target) {
                return true;
            }
        }
        // no permutation is the substring of s2. return false here
        return false;
    }
};
```

</TabItem>
</Tabs>

## Approach 2: Sliding Window - Track Matches

Similar to Approach 1 but with a slight improvement. We will still create a sliding window, and a hash map to count the characters in $$s1$$. But, instead of creating a second hash map to count the characters in $$s2$$, we will use the first hash map, and just decrement the count every time a character comes into our window, and increment a $$matches$$ variable when ever the counter's character count for that character reaches 0. (Must also then decrement $$matches$$ when the character count is no longer 0). Thus removing the need to do a worst case, $O(26)$ check of both counters on each iteration to check that they are equal.

Time Complexity: $O(n+m)$ where $$n$$ is the length of $$s2$$, and $$m$$ is the length of $$s1$$.

Space Complexity: $O(c)$ where $$c$$ is the unique number of characters in $$s1$$ to create our hash map.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        # We are going to create a counter to count the letters of s1, then
        # as we come accross them in s2, decrement them. If we ever reach
        # a point, where all out values in the counter reach 0, we know we
        # have a window with all the proper character in it and can return True.
        # 1. Build a hash map that contains count of all characters in s1.
        # Note: we could also use collections.Counter(s1) as a python built
        # in, both should take O(m) time, where m is the length of s1.
        counter = {}
        for ch in s1:
            if ch not in counter:
                counter[ch] = 0
            counter[ch] += 1
        # Initialize variables to track number of matches, that our window
        # has with s1, and window_size, length of s1.
        matches = 0
        window_size = len(s1)
        # Loop through all the letters in s2, tracking i, the index and ch
        # which is the character directly coming into our sliding window.
        for i, ch in enumerate(s2):
            # check that the incoming character is a character in our counter.
            if ch in counter:
                # decrement the counter, as it matches with our window.
                counter[ch] -= 1
                # if number of characters reaches 0, we know we have the same amount
                # of characters in s1, as we do our window sliding across s2.
                if counter[ch] == 0:
                    # So we increment matches.
                    matches += 1
            # Check that window we created is proper size to have letters start leaving window.
            if i >= window_size:
                # Set variable to left character, which is character leaving the window.
                left_ch = s2[i-window_size]
                # Check that the leaving character is in our counter, if not, we don't need to do anything.
                if left_ch in counter:
                    # Leaving character is in s1, so now we check if our count of characters is 0.
                    # If it is 0, we know that the leaving character caused our
                    # window to no longer have same number of ch as s1.
                    if counter[left_ch] == 0:
                        # So we decrement matches.
                        matches -= 1
                    # Increment counter, since the letter we needed, left the window.
                    counter[left_ch] += 1
            # check that the number of matches is equal to the size of our counter.
            # Note we use len(counter) as string "aabbcc" produce a counter of size 3.
            if matches == len(counter):
                return True
        # We made it through without triggering true, return False.
        return False
```

<SolutionAuthor name="@wkw"/>

```py
# idea:
# permutation -> same frequency of each character
# e.g. ab & ba - they both have 1 `a` and 1 `b`
# which implies we can count the frequency of s1
# and check if there is a substring of length of `n` (window)
# containing the same set of frequency of characters
# which implies we can use sliding window
class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        n, m = len(s1), len(s2)
        # if s1 got more characters,
        # then s2 can never contain a permutation of s1
        if n > m: return False
        # cnt_s1: frequency of character in s1
        # cnt_s2: frequency of character in s2
        cnt_s1, cnt_s2 = [0] * 26, [0] * 26
        # count the frequency of characters in s1 first
        for i in range(n):
            cnt_s1[ord(s1[i]) - ord('a')] += 1
        # for each character in s2
        for i in range(m):
            # we increase the frequency in cnt_s2
            cnt_s2[ord(s2[i]) - ord('a')] += 1
            # given the window size `n`,
            # if the current index >= n, it means we need to pop the leftmost element out
            # e.g. window size = 2 - now it includes `eid` - we need to pop `e` out
            if i >= n: cnt_s2[ord(s2[i - n]) - ord('a')] -= 1
            # check if both frequency count matches or not
            if cnt_s1 == cnt_s2: return True
        return False
```

</TabItem>
</Tabs>
