---
description: 'Author: @heder, @jit, @jaffar | https://leetcode.com/problems/sort-characters-by-frequency/'
tags:
  [Hash Table, String, Sorting, Heap (Priority Queue), Bucket Sort, Counting]
---

# 0451 - Sort Characters By Frequency (Medium)

## Problem Link

https://leetcode.com/problems/sort-characters-by-frequency/

## Problem Statement

Given a string `s`, sort it in **decreasing order** based on the **frequency** of the characters. The **frequency** of a character is the number of times it appears in the string.

Return _the sorted string_. If there are multiple answers, return _any of them_.

**Example 1:**

```
Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
```

**Example 2:**

```
Input: s = "cccaaa"
Output: "aaaccc"
Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
Note that "cacaca" is incorrect, as the same characters must be together.
```

**Example 3:**

```
Input: s = "Aabb"
Output: "bbAa"
Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
```

**Constraints:**

- `1 <= s.length <= 5 * 10^5`
- `s` consists of uppercase and lowercase English letters and digits.

## Approach 1: Frequency Counting

We do the frequency count first and then use this count for a custom sort function.

Let $n$ the length of the input string then the

- Time complexity is $$O(n \log n)$$ for the sorting, and the
- Space complexity is $$O(1)$$ as we are rewriting the input.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
static string frequencySort(string& s) noexcept {
    array<int, 128> cnt = {};
    for (char ch : s) ++cnt[ch];
    sort(begin(s), end(s), [&](char a, char b) {
        if (cnt[a] == cnt[b]) return a < b;
        return cnt[a] > cnt[b];
    });
    return s;
}
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@jaffar"/>

```py
from collections import Counter

class Solution:
    def frequencySort(self, s: str) -> str:
        counter, res = Counter(s), []
        for char, count in counter.most_common():
            res.append(char * count)
        return ''.join(res)
```

</TabItem>

<TabItem value="scala" label="scala">
<SolutionAuthor name="@jit"/>

```scala
object Solution {
  // A lazy frequency counting solution:
  def frequencySort(s: String): String = {
    val grps = s.groupBy(identity).values.toSeq
    grps.sortBy(-_.length).mkString
  }
}
```

</TabItem>
</Tabs>

## Approach 2: Count, Sort, Reconstruct

This approach first does a frequency count, sorts the frequency count descending, and finally reconstructs the answer from the sorted frequency count.

Let $$n$$ the length of the input string then the

- Time complexity is $$O(n)$$, because while sorting is $$O(n \log n)$$ in general we only sort a limited size frequency count vector. Doing the frequency count and reconstructing the string is $$O(n)$$, and the
- Space complexity is $$O(n)$$ for the output (or $$O(1)$$ when we rewrite the input).

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
static string frequencySort(const string& s) noexcept {
    array<int, 128> counts = {};
    for (char ch : s) ++counts[ch];
    vector<pair<int, char>> sc;
    sc.reserve(128);
    for (int i = 0; i < size(counts); ++i)
        if (counts[i]) sc.push_back({counts[i], i});
    sort(begin(sc), end(sc), greater<>());
    string ans;
    ans.reserve(size(s));
    for (auto [count, ch] : sc)
        ans += string(count, ch);
    return ans;
}
```

</TabItem>
</Tabs>

If we are willing to rewrite the input, then we could do something like this:

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
static string frequencySort(string& s) noexcept {
    array<int, 128> counts = {};
    for (char ch : s) ++counts[ch];
    vector<pair<int, char>> sc;
    sc.reserve(128);
    for (int i = 0; i < size(counts); ++i)
        if (counts[i]) sc.push_back({counts[i], i});
    sort(begin(sc), end(sc), greater<>());
    s.resize(0);
    for (auto [count, ch] : sc)
        s += string(count, ch);
    return s;
}
```

</TabItem>
</Tabs>
