---
description: 'Author: @wkw | https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/'
tags: [Array, Hash Table, String, Greedy, Counting]
---

# 2131 - Longest Palindrome by Concatenating Two Letter Words (Medium)

## Problem Link

https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/

## Problem Statement

You are given an array of strings `words`. Each element of `words` consists of **two** lowercase English letters.

Create the **longest possible palindrome** by selecting some elements from `words` and concatenating them in **any order**. Each element can be selected **at most once**.

Return _the **length** of the longest palindrome that you can create_. If it is impossible to create any palindrome, return `0`.

A **palindrome** is a string that reads the same forward and backward.

**Example 1:**

```
Input: words = ["lc","cl","gg"]
Output: 6
Explanation: One longest palindrome is "lc" + "gg" + "cl" = "lcggcl", of length 6.
Note that "clgglc" is another longest palindrome that can be created.
```

**Example 2:**

```
Input: words = ["ab","ty","yt","lc","cl","ab"]
Output: 8
Explanation: One longest palindrome is "ty" + "lc" + "cl" + "yt" = "tylcclyt", of length 8.
Note that "lcyttycl" is another longest palindrome that can be created.
```

**Example 3:**

```
Input: words = ["cc","ll","xx"]
Output: 2
Explanation: One longest palindrome is "cc", of length 2.
Note that "ll" is another longest palindrome that can be created, and so is "xx".
```

**Constraints:**

- `1 <= words.length <= 105`
- `words[i].length == 2`
- `words[i]` consists of lowercase English letters.

## Approach 1: Hash Map

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
// a palindrome is a string that reads the same forward and backward
// e.g. "aa", "abba", "aaaa", "lcggcl", etc ...
// we can see that the left half part is the reversed version of the right half part
// e.g. "a | a", "ab | ba", "aa | aa", "lcg | gcl", etc ...
// for example, if we have "ab" and "ba", we can form "abba" which is a palindrome
// and if we have "lc" and "cl", we can form "lccl"
// and we can add it to the previous palindrome in the middle place to make it longer
// e.g. ab[lccl]ba -> ablcclba

// case 1: the word is not same as the reversed self, e.g. "ab" != "ba"
// in this case, we need its reveresd string, i.e. ba to form "abba" as a palindrome

// case 2: the word is same as the reversed self, e.g. "aa" == "aa"
// case 2.1: if it is even, we could place it in the middle or on the side
// e.g. [aa]abba[aa]
// case 2.2: if the frequency of "aa" is odd, we could only place it in the middle
// e.g. ab[aa]ba
// since even + 1 = odd, we can put all even "aa" on the side, and put one in the middle
// e.g. [aa]ab[aa]ba[aa]

class Solution {
public:
    // to reverse a string, there are multiple ways to do it
    // in this example, STL reverse will be used
    string reversed(string s) {
        string t = s;
        reverse(t.begin(), t.end());
        return t;
    }
    int longestPalindrome(vector<string>& words) {
        int ans = 0, middle = 0;
        // count the frequency of each word
        unordered_map<string, int> cnt;
        for (auto word : words) cnt[word]++;
        for (auto [s, f] : cnt) {
            // using rev(s) is just to generalise the solution
            // in this problem, we can just check if s[0] != s[1]
            string rev = reversed(s);
            if (s != rev) {
                // case 1: the word is not same as the reversed self, e.g. "ab" != "ba"
                // find the reversed self
                if (cnt.count(rev)) {
                    // if it can be found,
                    // then we can only include the min of their counts
                    // e.g. "ab", "ba", "ba", "ba"
                    // we can only form "abba" as we don't have enough "ab" for the rest of "ba"
                    // p.s `cnt[s]` is same as `f`
                    ans += min(cnt[s], cnt[rev]);
                }
                // Alternatively, you can use STL
                // auto it = cnt.find(rev);
                // if (it != cnt.end()) ans += min(f, it->second);

            } else {
                // case 2: both character are same, e.g. aa
                // we can put it on both side
                ans += f;
                // however, if the frequency is odd
                if (f & 1) {
                    // we can place one in the middle and others on the side
                    middle = 1;
                    ans -= 1;
                }
            }
        }
        ans += middle;
        // at the end, we need to multiply the answer by 2
        // e.g. if frequency of "aa" is 2, the longest palindrome is 4 ("aaaa")
        return 2 * ans;
    }
};
```

</TabItem>
</Tabs>
