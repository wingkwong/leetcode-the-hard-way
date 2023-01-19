---
description: >-
  Author: @vigneshshiv, @radojicic23 |
  https://leetcode.com/problems/longest-common-prefix/
---

# 0014 - Longest Common Prefix (Easy)

## Problem Link

https://leetcode.com/problems/longest-common-prefix/

## Problem Statement

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

**Example 1:**

```
Input: strs = ["flower","flow","flight"]
Output: "fl"
```

**Example 2:**

```
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```

**Constraints:**

* `1 <= strs.length <= 200`
* `0 <= strs[i].length <= 200`
* `strs[i]` consists of only lowercase English letters.

<br />

## Approach 1: Sorting

Sorting becomes handy to solve this problem, after sorting strings ordered in lexicographic order. 

Since we need to find the longest common prefix of the all words, The first char of **each word in the array**, should be same. Following that the 2nd char and 3rd char and it continues till last char. 

In the example 1, all of first char starts with `'f'` and then `'l'`, but next char `'o'` match with 2 words, not with `flight`. The same goes to example 2, the very first character of each word is not matching, so there is no common prefix found. 

Instead of comparing every word with other words in the array, starting from first, which makes algorithm to run $O(n^2)$ time. We can do better by comparing first and last word in the array to find the common prefix. 

Since strings are ordered, the least common prefix we can find with first and last word in the array. 

Time Complexity: $O(n log(n))$, where $n$ - # of words in the array

Space complexity: $O(1)$

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public String longestCommonPrefix(String[] strs) {
        int n = strs.length;
        if (n == 0) return "";
        // Sorting provides lexicographic order of strings.
        Arrays.sort(strs);
        String first = strs[0], last = strs[n - 1];
        int i = 0;
        while (i < first.length()) {
            if (first.charAt(i) == last.charAt(i)) {
                i += 1;
            } else {
                break;
            }
        }
        return i == 0 ? "" : first.substring(0, i);
    }
}
```

</TabItem>

<TabItem value="js" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length == 0) return "";
    strs.sort();
    let first = strs[0];
    let last = strs[strs.length - 1];
    let i = 0;
    while (i < first.length) {
        if (first.charAt(i) == last.charAt(i)) {
            i += 1;
        } else {
            break;
        }
    }
    return i == 0 ? "" : first.slice(0, i);
};
```

</TabItem>
</Tabs>

<br />

## Approach 2: Linear Search

Compare any two words, find the common prefix and keep moving forward with the next word in the array, at the end we have found the common prefix. 

In the middle, if we find a common prefix is `""` then break the loop and return it.  

Time complexity: $O(n * s)$, where n - # of elements in the array, s - length of the substring

Space complexity: $O(1)$

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs.length == 0) return "";
        String word = strs[0];
        for (int i = 1; i < strs.length; i++) {
            // Keep minimize the prefix word (previous) which match starting position with the current word.
            while (!strs[i].startsWith(word)) {
                word = word.substring(0, word.length() - 1);
            }
            // If word has no matching prefix with the current word, then there is no common prefix,
            // which implies there won't be any common prefix in the subsequent non-processed words.
            if ("".equals(word)) {
                return "";
            }
        }
        return word;
    }
}
```

</TabItem>
</Tabs>