---
description: >-
  Author: @vigneshshiv, @MithunPrabhu777, @AnshikaAnand222, @radojicic23 |
  https://leetcode.com/problems/longest-substring-without-repeating-characters/
tags: [Hash Table, String, Sliding Window]
---

# 0003 - Longest Substring Without Repeating Characters (Medium)

## Problem Link

https://leetcode.com/problems/longest-substring-without-repeating-characters/

## Problem Statement

Given a string `s`, find the length of the **longest substring** without repeating characters.

**Example 1:**

```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

**Example 2:**

```
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

**Example 3:**

```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

**Constraints:**

* `0 <= s.length <= 5 * 10^4`
* `s` consists of English letters, digits, symbols and spaces.

## Approach 1: HashSet with One Iteration

Two pointer _i_ and _j_, initially at the start of the string. Move right (j++) till distinct characters and store them in set.
If repeated character occurs then move left (i++) until that repeated character is occured in left, and also remove all characters that occur before that character including character itself from set. This helps to maintain Set with longest substring. 

Time complexity: $O(n)$, where $n$ - # of characters in the string

Space complexity: $O(s)$, where $s$ is the longest substring

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public int lengthOfLongestSubstring(String s) {
        if (s == null || s.length() == 0) return 0;
        int i = 0, j = 0, max = 0;
        Set<Character> seen = new HashSet<>();
        while (j < s.length()) {
            if (seen.add(s.charAt(j))) {
                max = Math.max(max, seen.size());
                j += 1;
            } else {
                seen.remove(s.charAt(i++));
            }
        }
        return max;
    }
}
```
</TabItem>

<TabItem value="javascript" label="JavaScript">
<SolutionAuthor name="@MithunPrabhu777"/>

```javascript
var lengthOfLongestSubstring = function (s) {
    const letterCountMap = new Map();

    // Destructuring assignment syntax is a JavaScript expression that pulls out values from array
    // Here we are assigning initial values to variables
    let [left, right, max] = [0, 0, 0];

    while (right < s.length) {
        const currentValue = s[right];
        const canSlide = letterCountMap.has(currentValue);

        // We can slide left pointer only when we find duplicate number from map
        if (canSlide) {
            const rightSlide = letterCountMap.get(currentValue) + 1;
            left = Math.max(left, rightSlide);
        }

        // We are finding window from left to right of non repeating characters
        const window = (right - left) + 1;
        max = Math.max(window, max);
        letterCountMap.set(currentValue, right);
        right++;
    }

    return max;
};
```
</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        # initiate variables, left pointer of our window, right pointer of 
        # our window, and longest to track longest length of our window.
        l, r, longest = 0,0,0
        # create a hash set for O(1) access of letters inside our window.
        window = set()
        # While loop to expand right side of our sliding window.
        while r < len(s):
            # character @ right isn't in window, add it to the window.
            if s[r] not in window:
                # add character to the window set.
                window.add(s[r])
                # update our longest 
                # note: we add 1 as a window of size 1, will share indexes,
                # ex. 0-0 = 0.
                longest = max(longest, (r-l)+1)
                # slide right side of our window forward.
                r += 1
            # else handles the condition of the character is in our window set.
            # so we remove the left character and slide left side pointer forward.
            # If the left isn't the repeating digit, it will be handled by this condition
            # as the if statement will be false again, so we will return here to continually
            # pop left character until we have a non-duplicate unique character set.
            else:
                # remove left character of window
                window.remove(s[l])
                # move left side of window forward.
                l += 1
        # return answer.
        return longest
```
</TabItem>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@radojicic23"/>

```cpp
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        // initialize hashSet
        unordered_set<int> hashSet;
        // left and right pointer at position 0
        // ans - track max length of window (substring)
        int l = 0, r = 0, ans = 0;
        // right pointer going through every character
        while (r < s.length()) {
            // if character is not in hashSet
            if (!hashSet.count(s[r])) {
                // add it 
                hashSet.insert(s[r]);
                // update window size 
                ans = max(ans, r - l + 1);
                // shift right pointer
                r++;
            } else {
                // delete character at left pointer position
                hashSet.erase(s[l]);
                //shift left pointer
                l++;
            }
        }
        // return result
        return ans;
    }    
};
```
</TabItem>
</Tabs>


## Approach 2: Sliding Window with ASCII

We can solve this problem with Sliding Window and Two pointers _i_ and _j_. Iterate over the string, keep moving the 2nd pointer _j_ forward until the character is not matched with _i_ th character. 

Since the input, may contain `English letters, digits, symbols and spaces`, so maintain the [ASCII](https://bluesock.org/~willg/dev/ascii.html) char array of size 128. 

If any of the character occur more than once, then break the loop and find the difference of _j_ and _i_ and that's the longest substring length. 

Time complexity: $O(n)$, where $n$ - # of characters in the string. Since both _i_ and _j_ moving in one direction and it's total is $O(2n)$, constants are ignored, so it's $O(n)$.

Space complexity: $O(1)$ extra space, size of 128 ASCII chars for each iteration, considered as constant space.

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public int lengthOfLongestSubstring(String s) {
        if (s == null || s.length() == 0) return 0;
        if (s.length() == 1) return 1;
        int max = 0;
        for (int idx = 0; idx < s.length() - 1; idx++) {
            int[] seen = new int[128];
            int i = idx, j = idx + 1;
            while (j < s.length() && s.charAt(i) != s.charAt(j)) {
                if (seen[s.charAt(j)] > 0) break;
                seen[s.charAt(j)]++;
                j++;
            }
            max = Math.max(max, j - i);
        }
        return max;
    }
}
```

</TabItem>
<TabItem value="javascript" label="JavaScript">
<SolutionAuthor name="@AnshikaAnand222"/>

```javascript
var lengthOfLongestSubstring = function(s) {
  const set = new Set();
  let start = 0;
  let maxSize = 0;
  for (let i=0; i < s.length; i++) {
    const c = s.charAt(i);
    // keep remove character not in the non-repetitive substring
    while (set.has(c)) {
      set.delete(s.charAt(start))
      start += 1;
    }
    maxSize = Math.max(maxSize, i - start + 1);    
    set.add(c);     
  }  
  return maxSize;
};
```
</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@radojicic23"/>

```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        # HashSet
        char_set = set()
        # left pointer at position zero
        l = 0  
        res = 0
        # Right pointer is going through every char
        for r in range(len(s)):
            # If we get to a duplicate
            while s[r] in char_set:
                # Remove left most
                char_set.remove(s[l])
                # Shift left pointer by one
                l += 1  
            char_set.add(s[r])
            # If the current window size is greater than what it's now
            # Update
            res = max(res, r - l + 1)
        return res
```

</TabItem>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@radojicic23"/>

```cpp
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        // initialize hashSet
        unordered_set<char> hashSet;
        int ans = 0;
        // left pointer at position 0
        int l = 0;
        // right pointer going through every char
        for (int r = 0; r < s.length(); r++) {
            // if we get to a duplicate
            while (hashSet.count(s[r])) {
                // remove left most
                hashSet.erase(s[l]);
                l++;
            }
            hashSet.insert(s[r]);
            // update window size  
            ans = max(ans, r - l + 1);
        }
        return ans;
    }    
};
```

</TabItem>
</Tabs>
