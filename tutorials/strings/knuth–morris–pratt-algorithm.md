---
title: 'Knuth–Morris–Pratt Algorithm'
description: 'KMP is a algorithm to search the occurrences of a word within a string'
draft: true
keywords:
  - leetcode
  - tutorial
  - kmp
  - knuth morris pratt
  - algorithm
---

<TutorialCredits authors="@wkw"/>

## Overview

If we look at the problem [0028 - Implement strStr()](https://leetcode.com/problems/implement-strstr/), we want to return the index of the first occurrence of `needle` in `haystack`. A brute force solution would take $O(n * m)$ where $n$ is the length of the `needle` and $m$ is the length of `haystack` as we try to start at each character in `haystack` and check the character one by one to see if they match `needle`.

KMP could give $O(n + m)$ in the worst case. The idea of KMP is to cut out some repeated words by doing some preprocessing. Let's take `AAABAAAB` as a haystack and `AAAA` as a needle and we start at index 0. We can see that the first three character match but the forth character is `B` which doesn't match that in the needle. If we start at index 1, we would face the same problem as `AABA` doesn't match with `AAAA`. However, if the prefix of the haystack matches that in the needle, we can start our pointer at the position where the mismatch is, in this case `B` at index 3.

@wkw: WIP ...
