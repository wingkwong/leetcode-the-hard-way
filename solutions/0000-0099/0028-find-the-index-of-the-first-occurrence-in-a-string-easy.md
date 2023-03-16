---
description: 'Author: @la-la-Cute, @ganajayant, @radojicic23 | https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/'
---

# 0028 - Find the Index of the First Occurrence in a String (Easy)

## Problem Link

https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

## Problem Statement

Implement [strStr()](http://www.cplusplus.com/reference/cstring/strstr/).

Return the index of the first occurrence of needle in haystack, or `-1` if `needle` is not part of `haystack`.

**Clarification:**

What should we return when `needle` is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when `needle` is an empty string. This is consistent to C's [strstr()](http://www.cplusplus.com/reference/cstring/strstr/) and Java's [indexOf()](https://docs.oracle.com/javase/7/docs/api/java/lang/String.html#indexOf\(java.lang.String\)).

**Example 1:**

```
Input: haystack = "hello", needle = "ll"
Output: 2
```

**Example 2:**

```
Input: haystack = "aaaaa", needle = "bba"
Output: -1
```

**Example 3:**

```
Input: haystack = "", needle = ""
Output: 0
```

**Constraints:**

* `0 <= haystack.length, needle.length <= 5 * 10^4`
* `haystack` and `needle` consist of only lower-case English characters.

## Approach 1: Rolling Hash


<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@la-la-Cute"/>

```python
class Solution:
    """Searching for substring in a string - using Rolling hash (the Rabin-Karp algorithm)"""

    def strStr(self, s: str, pattern: str) -> int:
        # Before anything else, check if `pattern` is an empty string, in which case we return 0 as required by the problem.
        if not pattern:
            return 0
        # Choose a prime number for the base and a modulus, denoted by d and q respectively.
        PRIME, MOD = 100007, 500000
        # For better readability, here we assign the lengths of `s` and `pattern` to the variables n and m respectively.
        n, m = len(s), len(pattern)
        # Precompute d ^ (m - 1) mod q, where d is the base chosen, m is len(pattern) and q is the modulus chosen.
        #   Note: it is important this value be computed efficiently. One way is to use the built-in pow.
        h = pow(PRIME, m - 1, MOD)
        # Compute the hash value of `pattern`. This can be done by simply applying the formula.
        hash_val = sum(ord(c) * pow(PRIME, m - 1 - i, MOD) for i, c in enumerate(pattern)) % MOD
        # Initialize a dictionary which maps indices to the hash values of their respective substrings.
        #   Specifically, t[i] is the hash value of s[i: i + m] (i.e., an m-sized substring of `s` starting at index `i`)
        t = {}

        # Calculate the hash value of all substrings of `s`, the number of which is n - m.
        for idx in range(n - m + 1):
            # If idx == 0, compute the hash value of the first substring. Just like the way we do it for `pattern` above.
            if idx == 0:
                t[0] = sum(ord(s[j]) * pow(PRIME, m - 1 - j, MOD) for j in range(m)) % MOD
            else:
                # For i > 0, here comes the essence of "rolling hash", 
                #   whereby we manage to compute t[i - 1] with little work.
                #
                # EXPLANATION:
                #   The formula for t[i] is given by:
                #       (the sum of s_k * d ^ (m + i - 1 - k) for i <= k < i + m) mod q
                #       where s_k is the numerical value for the s[k] (here we use the ASCII value).
                #   Then, observe that, for two successive substrings of length m,
                #       or using Python's slicing syntax, s[i: i + m] and s[i + 1: i + m + 1],
                #       one can say they differ by 
                #           i) the previously leftmost character, which is now dropped, and,
                #           ii) the currently rightmost character, which is new part of the substring.
                #   In other words, the other m - 1 characters are basically unaffected 
                #       except that their positions are shifted leftward by one index.
                #       These charachers, alongside the differing ones, make up of both t[i - 1] and t[i], 
                #       with the only difference of the power that is increased by 1.
                #   To compute t[i] from t[i - 1],
                #       firstly, find s_k * d ^ (m + i - 1 - k) for the leftmost character to be dropped,
                #           that is, to multiply ord(s[i - 1]) by d ^ (m - 1) = h (precomputed),
                #           and take that amount off t[i - 1];
                #       secondly, multiply the result by d, adjusting for the power of d having increased by one 
                #           (with respect to each characher).
                #       thirdly, add the last part of t[i], that of the character on the right end, 
                #           given by ord(s[i + m - 1]), to the sum.
                #       finally, don't forget the modulo operation.
                t[idx] = (PRIME * (t[idx - 1] - ord(s[idx - 1]) * h) + ord(s[idx + m - 1])) % MOD
            # If two strings are identical, they must have the same hash value.
            # However, beware of "spurious hits", where two different strings happen to share the same hash value.
            # As such, we compare the substring against `pattern` to verify the result.
            if t[idx] == hash_val and s[idx : idx + m] == pattern:
                return idx
        return -1
```
</TabItem>
</Tabs>


## Approach 2: Index Of 

using method in string indexOf gives the first index of needle if it appeared in haystack

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@ganajayant"/>

```java
class Solution {
    public int strStr(String haystack, String needle) {
        if (needle.isEmpty()) {
            return 0;
        }
        return haystack.indexOf(needle);
    }
}
```
</TabItem>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@radojicic23"/>

```cpp
class Solution {
public:
    int strStr(string haystack, string needle) {
        if (needle.empty()) {
            return 0;
        }
        return haystack.find(needle);
    }
};
```
</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@radojicic23"/>

```py
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if len(needle) == 0:
            return 0
        return haystack.find(needle)
```
</TabItem>

<TabItem value="js" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```js
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length == 0) {
        return 0;
    }
    return haystack.indexOf(needle);
};
```
</TabItem>
</Tabs>
