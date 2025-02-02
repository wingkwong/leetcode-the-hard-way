---
description: 'Author: @wkw | https://leetcode.com/problems/reverse-vowels-of-a-string/'
tags: [Two Pointers, String]
---

# 0345 - Reverse Vowels of a String (Easy)

## Problem Link

https://leetcode.com/problems/reverse-vowels-of-a-string/

## Problem Statement

Given a string `s`, reverse only all the vowels in the string and return it.

The vowels are `'a'`, `'e'`, `'i'`, `'o'`, and `'u'`, and they can appear in both lower and upper cases, more than once.

**Example 1:**

```
Input: s = "hello"
Output: "holle"
```

**Example 2:**

```
Input: s = "leetcode"
Output: "leotcede"
```

**Constraints:**

- `1 <= s.length <= 3 * 105`
- `s` consist of **printable ASCII** characters.

## Approach 1: Two Pointers

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
// Time Complexity: O(N)
// Space Complexity: O(1)
class Solution {
public:
    // fun fact:
    // `Y` and `y` can be a vowel as well.
    // glad the problem statement defines it well
    bool isVowel(char c) {
        // alternatively, we can just check
        // return c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U' ||
        //        c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u'
        c = tolower(c);
        return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
    }

    string reverseVowels(string s) {
        // `l` is the left pointer to track the vowel character
        // `r` is the right pointer to track the vowel character
        int n = s.size(), l = 0, r = n - 1;
        while (l < r) {
            // find the index of the first vowel in the given range
            // alternatively, we can use STL library `find_first_of` in c++
            while (l < r && !isVowel(s[l])) l++;
            // find the index of last vowel in the given range
            // alternatively, we can use STL library `find_last_of` in c++
            while (r > l && !isVowel(s[r])) r--;
            // we can swap two vowels only when l < r
            swap(s[l], s[r]);
            // since we've processed the character s[l],
            // we move the left pointer to the right
            l += 1;
            // since we've processed the character s[r],
            // we move the right pointer to the left
            r -= 1;
        }
        return s;
    }
};
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
# Time Complexity: O(N)
# Space Complexity: O(N)
class Solution:
    # fun fact:
    # `Y` and `y` can be a vowel as well.
    # glad the problem statement defines it well
    def reverseVowels(self, s: str) -> str:
        n = len(s)
        l, r = 0, n - 1
        s = list(s)
        vowels = list("aeiouAEIOU")
        # `l` is the left pointer to track the vowel character
        # `r` is the right pointer to track the vowel character
        while l < r:
            # find the index of the first vowel in the given range
            while l < r and s[l] not in vowels:
                l += 1
            # find the index of last vowel in the given range
            while r > l and s[r] not in vowels:
                r -= 1
            # swap s[l] and s[r]
            s[l], s[r] = s[r], s[l]
            # since we've processed the character s[l],
            # we move the left pointer to the right
            l += 1
            # since we've processed the character s[r],
            # we move the right pointer to the left
            r -= 1

        return "".join(s)
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@wkw"/>

```java
// Time Complexity: O(N)
// Space Complexity: O(N) due to s.toCharArray()
class Solution {
    // fun fact:
    // `Y` and `y` can be a vowel as well.
    // glad the problem statement defines it well
    boolean isVowel(char c) {
        // alternatively, we can just check
        // return c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U' ||
        //        c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u'
        c = Character.toLowerCase(c);
        return switch (c) {
            case 'a', 'e', 'i', 'o', 'u' -> true;
            default -> false;
        };
    }

    public String reverseVowels(String s) {
        // `l` is the left pointer to track the vowel character
        // `r` is the right pointer to track the vowel character
        int n = s.length(), l = 0, r = n - 1;
        char[] ca = s.toCharArray();
        while (l < r) {
            // find the index of the first vowel in the given range
            while (l < r && !isVowel(ca[l])) l++;
            // find the index of last vowel in the given range
            while (r > l && !isVowel(ca[r])) r--;
            // swap ca[l] and ca[r]
            {
                char tmp = ca[l];
                ca[l] = ca[r];
                ca[r] = tmp;
            }
            // since we've processed the character s[l],
            // we move the left pointer to the right
            l += 1;
            // since we've processed the character s[r],
            // we move the right pointer to the left
            r -= 1;
        }
        return new String(ca);
    }
}
```

</TabItem>

<TabItem value="go" label="Go">
<SolutionAuthor name="@wkw"/>

```go
// Time Complexity: O(N)
// Space Complexity: O(N)

// fun fact:
// `Y` and `y` can be a vowel as well sometimes.
// glad the problem statement defines it well
func isVowel(c rune) bool {
    // alternatively, we can just check
    // return c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U' ||
    //        c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u'
    c = unicode.ToLower(c)
	return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u'
}

func reverseVowels(s string) string {
    ss := []rune(s)
    n := len(ss)
    l, r := 0, n - 1
    for l < r {
        // find the index of the first vowel in the given range
        for l < r && !isVowel(ss[l]) {
            l += 1
        }
        // find the index of last vowel in the given range
        for r > l && !isVowel(ss[r]) {
            r -= 1
        }
        // swap ss[l] and ss[r]
        ss[l], ss[r] = ss[r], ss[l]
        // since we've processed the character ss[l],
        // we move the left pointer to the right
        l += 1
        // since we've processed the character ss[r],
        // we move the right pointer to the left
        r -= 1
    }
    return string(ss)
}
```

</TabItem>
</Tabs>
