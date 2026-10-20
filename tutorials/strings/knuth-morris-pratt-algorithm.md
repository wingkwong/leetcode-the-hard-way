---
title: 'Knuth-Morris-Pratt Algorithm'
description: 'Learn how KMP uses the longest proper prefix-suffix array to find a pattern in linear time.'
keywords:
  - leetcode
  - tutorial
  - kmp
  - knuth morris pratt
  - algorithm
---

<TutorialCredits authors="@wkw" />

## Overview

The **Knuth-Morris-Pratt (KMP) algorithm** finds a pattern inside a text in $O(n + m)$ time, where $n$ is the length of the text and $m$ is the length of the pattern.

For example, in [28 - Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/), the text is $\text{haystack}$ and the pattern is $\text{needle}$. We return the starting index of the first match, or $-1$ if no match exists.

A brute force solution tries every possible starting position in the text. Each attempt can compare up to $m$ characters, giving $O(nm)$ time in the worst case. This repeats a lot of work when the strings contain repeated characters, such as a long text of `A`s and a pattern ending in `B`.

KMP preprocesses the **pattern** so that, after a mismatch, it can reuse characters that have already matched. The text pointer never moves backward.

Throughout this tutorial, indices are zero-based and slices such as $\text{pattern}[:j]$ include the start but exclude the end.

## Intuition: Reuse the Matched Prefix

Suppose the text is `ABABABACA` and the pattern is `ABABACA`.

```text
text:     A B A B A B A C A
pattern:  A B A B A C A
                    ^
                 mismatch
```

The first five characters, `ABABA`, match. At text index $5$, however, we find `B` instead of the expected `C`.

The matched part `ABABA` has a suffix `ABA` that is also a prefix of the pattern. We already know that the last three matched characters can start another match, so we keep those three characters and compare the current text character with pattern index $3$.

```text
text:     A B A B A B A C A
pattern:      A B A B A C A
                    ^
              compare again
```

The remaining characters now match, giving a match starting at index $2$.

The key question is: **after a mismatch, how many matched characters can we keep?** The LPS array answers this without rescanning the text.

## The Longest Proper Prefix-Suffix Array

A **prefix** starts at the beginning of a string, and a **suffix** ends at its end. A **proper prefix** is shorter than the whole string. A prefix that is also a suffix is sometimes called a **border**.

$\text{lps}[i]$ is the length of the longest proper prefix of $\text{pattern}[:i + 1]$ that is also a suffix of that same substring. If none is nonempty, the value is $0$.

The prefix must be proper; otherwise, the entire substring would always match itself. Prefixes and suffixes are allowed to overlap.

For $\text{pattern} = \texttt{ABABACA}$:

| Index $i$ | Character | Substring $\text{pattern}[:i + 1]$ | Longest proper prefix that is also a suffix | $\text{lps}[i]$ |
| --- | --- | --- | --- | --- |
| 0 | A | A | Empty | 0 |
| 1 | B | AB | Empty | 0 |
| 2 | A | ABA | A | 1 |
| 3 | B | ABAB | AB | 2 |
| 4 | A | ABABA | ABA | 3 |
| 5 | C | ABABAC | Empty | 0 |
| 6 | A | ABABACA | A | 1 |

Thus, $\text{lps} = [0, 0, 1, 2, 3, 0, 1]$. This array is also commonly called the **prefix function** and written as $\pi$.

### Building LPS

Initialize all entries to $0$. Start at index $i = 1$, since a single character has no nonempty proper prefix.

Let $j$ be the length of the current candidate border. At the start of each iteration, it equals $\text{lps}[i - 1]$. Try to extend that border with $\text{pattern}[i]$:

1. While $j > 0$ and $\text{pattern}[i] \ne \text{pattern}[j]$, set $j = \text{lps}[j - 1]$ to try the next shorter border.
2. If $\text{pattern}[i] = \text{pattern}[j]$, increment $j$.
3. Store $\text{lps}[i] = j$ and move to the next index.

Why use $\text{lps}[j - 1]$? If a border of length $j$ cannot be extended, a shorter candidate must itself be both a prefix and a suffix of that border. Its longest such border is already stored at $\text{lps}[j - 1]$. Repeating this step tries all viable candidates from longest to shortest.

For the example above, computing $\text{lps}[5]$ demonstrates multiple fallbacks:

- The previous border is `ABA`, so $j = 3$. Compare `C` with $\text{pattern}[3] = \texttt{B}$: mismatch.
- Fall back to $j = \text{lps}[2] = 1$. Compare `C` with $\text{pattern}[1] = \texttt{B}$: mismatch.
- Fall back to $j = \text{lps}[0] = 0$. Compare `C` with $\text{pattern}[0] = \texttt{A}$: mismatch.
- No border can be extended, so $\text{lps}[5] = 0$.

Notice that $i$ stays at $5$ throughout these fallbacks.

## Searching the Text

After building LPS, scan the text from left to right. Let $i$ be the current text index and $j$ be the number of pattern characters already matched.

Before comparing $\text{text}[i]$, the previous $j$ text characters equal $\text{pattern}[:j]$. This is the invariant that lets us reuse earlier comparisons.

1. While $j > 0$ and $\text{text}[i] \ne \text{pattern}[j]$, set $j = \text{lps}[j - 1]$. Keep $i$ fixed while trying shorter borders.
2. If $\text{text}[i] = \text{pattern}[j]$, increment $j$.
3. If $j = m$, the whole pattern matches. Its starting index is $i - m + 1$.
4. Otherwise, move to the next text character. If the comparison failed even at $j = 0$, this simply skips the current text character.

On a mismatch, any overlapping match must begin with a suffix of the characters we already matched. That suffix must also be a prefix of the pattern, so the LPS fallback preserves the longest possible candidate without skipping a valid match.

### Search Dry Run

For $\text{text} = \texttt{ABABABACA}$ and $\text{pattern} = \texttt{ABABACA}$, use $\text{lps} = [0, 0, 1, 2, 3, 0, 1]$:

| Text index $i$ | $\text{text}[i]$ | $j$ before comparison | Action | $j$ after |
| --- | --- | --- | --- | --- |
| 0 | A | 0 | Match $\text{pattern}[0]$ | 1 |
| 1 | B | 1 | Match $\text{pattern}[1]$ | 2 |
| 2 | A | 2 | Match $\text{pattern}[2]$ | 3 |
| 3 | B | 3 | Match $\text{pattern}[3]$ | 4 |
| 4 | A | 4 | Match $\text{pattern}[4]$ | 5 |
| 5 | B | 5 | Mismatch with `C`; fall back to $3$, then match `B` | 4 |
| 6 | A | 4 | Match $\text{pattern}[4]$ | 5 |
| 7 | C | 5 | Match $\text{pattern}[5]$ | 6 |
| 8 | A | 6 | Match $\text{pattern}[6]$; the whole pattern has matched | 7 |

The answer is $8 - 7 + 1 = 2$.

## Implementation

These reusable functions return the first match or $-1$. We define an empty pattern to match at index $0$, including in an empty text, and handle it before indexing the pattern.

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
vector<int> buildLPS(const string& pattern) {
    // Allocate one border length for each pattern position.
    int m = pattern.size();
    vector<int> lps(m, 0);
    // Track the length of the border we are trying to extend.
    int j = 0;
    // A single character has no nonempty proper border, so lps[0] is 0.
    for (int i = 1; i < m; i++) {
        // Try shorter borders until we can extend one.
        // The next candidate is the longest border of the current border.
        while (j > 0 && pattern[i] != pattern[j]) j = lps[j - 1];
        // A matching character extends the candidate border by one.
        if (pattern[i] == pattern[j]) j++;
        // Store the longest border for the prefix ending at i.
        lps[i] = j;
    }
    return lps;
}

int kmpSearch(const string& text, const string& pattern) {
    // An empty pattern matches at the beginning of any text.
    if (pattern.empty()) return 0;
    int n = text.size(), m = pattern.size();
    // Preprocess the pattern to reuse matches after a mismatch.
    vector<int> lps = buildLPS(pattern);
    // Track how many pattern characters have already matched.
    int j = 0;
    // Scan the text without ever moving i backward.
    for (int i = 0; i < n; i++) {
        // Retry this text character with a shorter matched prefix.
        // Keep the longest border of the matched prefix.
        while (j > 0 && text[i] != pattern[j]) j = lps[j - 1];
        // Extend the match if the current characters are equal.
        if (text[i] == pattern[j]) j++;
        // A complete match ends at i; convert it to its starting index.
        if (j == m) return i - m + 1;
    }
    // The scan ended without matching the whole pattern.
    return -1;
}
```

</TabItem>
<TabItem value="py" label="Python">

```py
def build_lps(pattern: str) -> list[int]:
    # Allocate one border length for each pattern position.
    lps = [0] * len(pattern)
    # Track the length of the border we are trying to extend.
    j = 0
    # A single character has no nonempty proper border, so lps[0] is 0.
    for i in range(1, len(pattern)):
        # Try shorter borders until we can extend one.
        # The next candidate is the longest border of the current border.
        while j > 0 and pattern[i] != pattern[j]: j = lps[j - 1]
        # A matching character extends the candidate border by one.
        if pattern[i] == pattern[j]: j += 1
        # Store the longest border for the prefix ending at i.
        lps[i] = j
    return lps


def kmp_search(text: str, pattern: str) -> int:
    # An empty pattern matches at the beginning of any text.
    if not pattern: return 0
    # Preprocess the pattern to reuse matches after a mismatch.
    lps = build_lps(pattern)
    # Track how many pattern characters have already matched.
    j = 0
    # Scan the text without ever moving i backward.
    for i, char in enumerate(text):
        # Retry this text character with a shorter matched prefix.
        # Keep the longest border of the matched prefix.
        while j > 0 and char != pattern[j]: j = lps[j - 1]
        # Extend the match if the current characters are equal.
        if char == pattern[j]: j += 1
        # A complete match ends at i; convert it to its starting index.
        if j == len(pattern): return i - len(pattern) + 1
    # The scan ended without matching the whole pattern.
    return -1
```

</TabItem>
</Tabs>

To solve LeetCode 28, keep the helpers above and call `kmpSearch(haystack, needle)` or `kmp_search(haystack, needle)` from `Solution.strStr`.

Some useful cases to check:

| Text        | Pattern   | First match | Reason                           |
| ----------- | --------- | ----------- | -------------------------------- |
| `ABABABACA` | `ABABACA` | $2$         | Reuses a border after a mismatch |
| `AAAAA`     | `AAA`     | $0$         | Returns the earliest occurrence  |
| `ABC`       | `D`       | $-1$        | No match                         |
| `AB`        | `ABC`     | $-1$        | Pattern is longer than the text  |
| Empty       | `A`       | $-1$        | No characters to match           |
| `ABC`       | Empty     | $0$         | Empty-pattern convention         |
| Empty       | Empty     | $0$         | Empty-pattern convention         |

## Finding All Occurrences

To find every match, record $i - m + 1$ instead of returning immediately. Then set $j = \text{lps}[m - 1]$ and continue to the next text character. This keeps the longest border of the completed match, allowing **overlapping matches**.

For example, $\text{text} = \texttt{AAAAA}$ and $\text{pattern} = \texttt{AAA}$ have matches at indices $[0, 1, 2]$. After matching the first `AAA`, retain $j = \text{lps}[2] = 2$. The next `A` completes another match. Resetting $j$ to $0$ would lose these overlapping occurrences.

The following Python function reuses `build_lps` from above. For an empty pattern, it returns every boundary of the text, from $0$ through $n$.

```py
def kmp_find_all(text: str, pattern: str) -> list[int]:
    # An empty pattern matches at every boundary, including after the text.
    if not pattern: return list(range(len(text) + 1))
    # Preprocess the pattern to reuse matches after a mismatch.
    lps = build_lps(pattern)
    # Collect the starting index of every occurrence.
    matches = []
    # Track how many pattern characters have already matched.
    j = 0
    # Scan each text character, continuing after complete matches.
    for i, char in enumerate(text):
        # Retry this character with shorter borders of the matched prefix.
        while j > 0 and char != pattern[j]: j = lps[j - 1]
        # Extend the match if the current characters are equal.
        if char == pattern[j]: j += 1
        # Record the starting index when the whole pattern matches.
        if j == len(pattern):
            matches.append(i - len(pattern) + 1)
            # Preserve a possible overlapping match.
            j = lps[j - 1]
    return matches
```

## Complexity Analysis

- **LPS construction: $O(m)$ time.** The outer loop advances $i$ through the pattern. Each successful extension increases $j$ by one, while every fallback strictly decreases it. Since $j$ never becomes negative, the total number of fallbacks cannot exceed the total number of increases.
- **Searching: $O(n)$ time.** The text index advances once per outer iteration. As with LPS construction, $j$ increases at most once per text character, so there can be only $O(n)$ fallback steps across the entire scan.
- **Total: $O(n + m)$ time and $O(m)$ auxiliary space** for the LPS array. The nested `while` loops do not make the algorithm quadratic.

Finding all occurrences takes $O(n + m + k)$ time and $O(m + k)$ space when storing $k$ results. For a nonempty pattern, $k$ is at most $n$, so the time remains $O(n + m)$.

## Common Mistakes

- **Falling back to $\text{lps}[j]$ instead of $\text{lps}[j - 1]$.** If $j$ characters matched, the matched prefix ends at index $j - 1$.
- **Using only one fallback.** A shorter border may also fail, so use `while`, not just `if`.
- **Advancing the text index during a fallback.** Retry the current character against the shorter prefix before moving on.
- **Keeping $j = m$ while continuing the search.** After recording a full match, fall back before the next comparison to avoid indexing past the pattern.
- **Confusing a length with an index.** $j$ counts matched characters; a complete match ending at $i$ starts at $i - m + 1$.
