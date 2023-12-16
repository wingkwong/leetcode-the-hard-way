---
description: 'Author: @wingkwong, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/valid-anagram/'
tags: [Hash Table, String, Sorting]
---

# 0242 - Valid Anagram (Easy)

## Problem Link

https://leetcode.com/problems/valid-anagram/

## Problem Statement

Given two strings `s` and `t`, return `true` _if_ `t` _is an anagram of_ `s`_, and_ `false` _otherwise_.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example 1:**

```
Input: s = "anagram", t = "nagaram"
Output: true
```

**Example 2:**

```
Input: s = "rat", t = "car"
Output: false
```

**Constraints:**

* `1 <= s.length, t.length <= 5 * 10^4`
* `s` and `t` consist of lowercase English letters.

**Follow up:** What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

## Approach 1: Sort

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    bool isAnagram(string s, string t) {
        // s and t are anagrams
        // if they are same after being sorted
        sort(begin(s), end(s));
        sort(begin(t), end(t));
        return s == t;
    }
};
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public boolean isAnagram(String s, String t) {
        char[] s_chars = s.toCharArray();
        char[] t_chars = t.toCharArray();
        // Sorting with char array
        Arrays.sort(s_chars);
        Arrays.sort(t_chars);
        // Convert to string
        s = new String(s_chars);
        t = new String(t_chars);
        return s.equals(t);
    }
}
```

</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@radojicic23"/>

```python
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # if they are same after sorting they are anagrams
        return sorted(t) == sorted(s)
```

</TabItem>

<TabItem value="javascript" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // sort strings 
    const sorted_s = s.split('').sort().join('');
    const sorted_t = t.split('').sort().join('');
    // if they are same after sorting they are anagrams
    return sorted_s == sorted_t;
};
```

</TabItem>
</Tabs>

## Approach 2: Counting

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    bool isAnagram(string s, string t) {
        // if s and t are anagram, 
        // then the frequency of each character would be same
        int cnt[26] = {0};
        for (auto x : s) cnt[x - 'a']++;
        for (auto x : t) cnt[x - 'a']--;
        for (int i = 0; i < 26; i++) {
            if (cnt[i]) {
                return false;
            }
        }
        return true;
    }
};
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public boolean isAnagram(String s, String t) {
        int[] chars = new int[26];
        for (char c : s.toCharArray()) {
            chars[c - 'a']++;
        }
        for (char c : t.toCharArray()) {
            chars[c - 'a']--;
            // If any char is occurred more than "s string" char, then immediately return false. 
            if (chars[c - 'a'] < 0) return false;
        }
        for (int num : chars) {
            if (num != 0) return false;
        }
        return true;
    }
}
```

</TabItem>


<TabItem value="go" label="Go">
<SolutionAuthor name="@wingkwong"/>

```go
// if s and t are anagram, 
// then the frequency of each character would be same
func isAnagram(s string, t string) bool {
    cnt := [26]int{}
	for _, x := range s { cnt[x -'a']++ }
    for _, x := range t { cnt[x -'a']-- }
	for _, c := range cnt {
		if c != 0 {
			return false
		}
	}
	return true
}
```

</TabItem>
</Tabs>