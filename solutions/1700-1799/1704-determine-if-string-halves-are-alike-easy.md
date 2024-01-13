---
description: 'Author: @heder, @wingkwong | https://leetcode.com/problems/determine-if-string-halves-are-alike/'
tags: [String, Counting]
---

# 1704 - Determine if String Halves Are Alike (Easy) 

## Problem Link

https://leetcode.com/problems/determine-if-string-halves-are-alike/

## Problem Statement

You are given a string `s` of even length. Split this string into two halves of equal lengths, and let `a` be the first half and `b` be the second half.

Two strings are **alike** if they have the same number of vowels (`'a'`, `'e'`, `'i'`, `'o'`, `'u'`, `'A'`, `'E'`, `'I'`, `'O'`, `'U'`). Notice that `s` contains uppercase and lowercase letters.

Return `true`*if*`a`*and*`b`*are **alike***. Otherwise, return `false`.

**Example 1:**

```
Input: s = "book"
Output: true
Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.
```

**Example 2:**

```
Input: s = "textbook"
Output: false
Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
Notice that the vowel o is counted twice.
```

**Constraints:**

- `2 <= s.length <= 1000`
- `s.length` is even.
- `s` consists of **uppercase and lowercase** letters.

## Approach 1: Counting

Well, just count the vowels in each half and compare. Using string_view avoids make a copy of the input.

Clang seems to produce fairly efficient code for isVowel: https://godbolt.org/z/MWra5vb6G -- much shorter than I though it would be and branch-free. @jit posted a nice analysis about the generated code [here](https://leetcode.com/problems/determine-if-string-halves-are-alike/solutions/2865500/c-counting-vowels-and-looking-at-some-assembly/comments/1702118).

- Time complexity is $$O(n)$$ and the
- Space complexity is $$O(1)$$.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
static bool halvesAreAlike(const string_view s) noexcept {
    return vowelCount(s.substr(0, size(s) / 2)) == vowelCount(s.substr(size(s) / 2));
}

static int vowelCount(const string_view s) noexcept {
    return count_if(begin(s), end(s), isVowel);
}

static bool isVowel(char ch) noexcept {
    return
        ch == 'a' || ch == 'e' || ch == 'i'  || ch == 'o' || ch == 'u' ||
        ch == 'A' || ch == 'E' || ch == 'I'  || ch == 'O' || ch == 'U' ;
}
```

</TabItem>


<TabItem value="rs" label="Rust">
<SolutionAuthor name="@wingkwong"/>

```rs
impl Solution {
    pub fn halves_are_alike(s: String) -> bool {
        // count the number of vowels in the given string
        let go = |s: &str| s.chars().filter(|&c| "aeiouAEIOU".contains(c)).count();
        // check if the count of the first half is same as that of the second half
        go(&s[..s.len() / 2]) == go(&s[s.len() / 2..])
    }
}
```

</TabItem>
</Tabs>