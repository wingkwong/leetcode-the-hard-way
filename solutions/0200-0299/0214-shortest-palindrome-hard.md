---
description: 'Author: @wingkwong | https://leetcode.com/problems/shortest-palindrome/'
---

import Authors from '@site/src/components/Authors';

# 0214 - Shortest Palindrome (Hard)

## Problem Link

https://leetcode.com/problems/shortest-palindrome/

## Problem Statement

You are given a string `s`. You can convert `s` to a palindrome by adding characters in front of it.

Return _the shortest palindrome you can find by performing this transformation_.

**Example 1:**

```
Input: s = "aacecaaa"
Output: "aaacecaaa"
```

**Example 2:**

```
Input: s = "abcd"
Output: "dcbabcd"
```

**Constraints:**

* `0 <= s.length <= 5 * 10^4`
* `s` consists of lowercase English letters only.

## Approach 1: Z Algorithm

We first concatenate the search pattern and given string with a character that is not in either strings, says $$ $ $$. Hence, we have $$k = s + $ + t$$. Then We built $$Z$$ and iterate $$k$$. If there is a $$i$$ that can satisfy $$Z[i] == n - i$$, then the answer would be $$t'$$+ $$s$$ where $$t'$$ is the first $$n - i$$ characters of $$s$$.

<Authors names="@wingkwong"/>

```cpp
class Solution {
public:
    vector<int> z_function(string s) {
        int n = (int) s.length();
        vector<int> z(n);
        for (int i = 1, l = 0, r = 0; i < n; ++i) {
            if (i <= r)
                z[i] = min (r - i + 1, z[i - l]);
            while (i + z[i] < n && s[z[i]] == s[i + z[i]])
                ++z[i];
            if (i + z[i] - 1 > r)
                l = i, r = i + z[i] - 1;
        }
        return z;
    }
    
    string shortestPalindrome(string s) {
        string r(s);
        reverse(r.begin(), r.end());
        string k = s + "$" + r;
        vector<int> z = z_function(k);
        int n = k.size();
        for(int i = 0; i < n; i++) {
            if(z[i] == n - i) {
                string s2 = s.substr(n - i);
                reverse(s2.begin(), s2.end());
                return s2 + s;
            }
        }
        return "";
    }
};
```



