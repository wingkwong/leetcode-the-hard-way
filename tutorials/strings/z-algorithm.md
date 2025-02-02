---
title: "Z Algorithm"
description: "Z Algorithm is a string matching algorithm with O(n) complexity"
keywords:
  - leetcode
  - tutorial
  - z algorithm
  - algorithm
---

<TutorialCredits authors="@wingkwong, @Cyber-Machine"/>

## Overview

In $O(n)$ time complexity, the Z-array makes it possible for a quick string pattern search by eliminating all but the prefix substring lengths that repeat inside the string, with the help of the Z-algorithm that preprocesses the string. This is useful when it requires fast and reliable string searching.

### How it works

1. **Initialization**:

   - Let $S$ be the string for which we want to compute the Z-values.
   - Let $n$ be the length of $S$.
   - Initialize an array $Z$ of the same length $n$ where each value is 0.
   - Set the boundaries of the initial comparison window, $l = 0$ and $r = 0$.

2. **Iterate over $S$ from the second character to the end**:

   - For each index $i$, determine the Z-value as follows:
     - If $i > r$, you do not have any previous information about the substrings that start from $i$, so compare $S[i]$ onwards with the beginning of $S$ until you encounter a mismatch. Update $Z[i]$ and adjust $l$ and $r$ accordingly.
     - If $i \leq r$, then $i$ is within the bounds of a previously computed substring. Use previously computed Z-values to potentially skip some comparisons:
     - Compute $k = i - l$.
     - If $Z[k] < r - i + 1$, then $Z[i] = Z[k]$

3. **Using the Z-array**:
   - The Z-array can be used directly to solve various string matching problems, such as finding a pattern within a text.

### Dry Run

We'll take the string $S = "abacabad"$ to demonstrate how Z-values are computed step-by-step. Our goal is to compute the Z-array for $S$. The Z-array, $Z$, will store the length of the longest substring starting from $S[i]$ that matches a prefix of $S$.

#### Iteration #1

- $ i = 1 $ is greater than $ r $, so we need to compare from $S[1]$ onwards.
- We compare $S[1]$ with $S[0]$ and find no match (because 'b' ≠ 'a').
- Thus, $ Z[1] = 0 $, and $ l $ and $ r $ remain unchanged.

#### Iteration #2

- $ i = 2 $ is greater than $ r $.
- We start comparing from $S[2]$ onwards. $S[2]$ matches $S[0]$, $S[3]$ matches $S[1]$, but $S[4]$ does not match $S[2]$.
- So, $ Z[2] = 2 $, $ l = 2 $, and $ r = 3 $.

#### Iteration #3

- $ i = 3 $ is equal to $ r $. Here, $ k = i - l = 3 - 2 = 1 $.
- Since $ Z[1] = 0 $, $ Z[3] = 0 $. No need to adjust $ l $ and $ r $.

#### Iteration #4

- $ i = 4 $ is greater than $ r $.
- Compare $S[4]$ onwards. $S[4]$ matches $S[0]$, but $S[5]$ does not match $S[1]$.
- So, $ Z[4] = 1 $, $ l = 4 $, and $ r = 4 $.

#### Iteration #5

- $ i = 5 $ is greater than $ r $.
- Compare $S[5]$ onwards. $S[5]$ matches $S[0]$, $S[6]$ matches $S[1]$, $S[7]$ matches $S[2]$, but the string ends there.
- So, $ Z[5] = 3 $, $ l = 5 $, and $ r = 7 $.

#### Iteration #6

- $ i = 6 $ is within the bounds of $ l $ and $ r $. Here, $ k = i - l = 6 - 5 = 1 $.
- $ Z[6] = Z[1] = 0 $ because $ Z[1] < r - i + 1 $.

#### Iteration #7

- $ i = 7 $ is also within the bounds. Here, $ k = i - l = 7 - 5 = 2 $.
- $ Z[7] = Z[2] = 2 $ because $ Z[2] < r - i + 1 $.

The final Z-array is $[0, 0, 2, 0, 1, 3, 0, 2]$.

- **Z[2] = 2**: "ab" at index 2 matches the prefix "ab".
- **Z[4] = 1**: "a" at index 4 matches the prefix "a".
- **Z[5] = 3**: "aba" at index 5 matches the prefix "aba".
- **Z[7] = 2**: "ad" at index 7 does not match any prefix since it's at the string's end, but shows the character match count.

### Complexity Analysis

The Z-algorithm has the following complexities:

Time Complexity: $O(n)$, where $n$ is the length of the string. This linear time complexity is achieved as the algorithm scans the string from left to right, calculating the Z-values in a single pass.

Space Complexity: $O(n)$, due to the storage of the Z-array which contains an entry for each position in the string, matching the string's length.

## Example #1: [796. Rotate String](https://leetcode.com/problems/rotate-string/)

> Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
>
> A shift on s consists of moving the leftmost character of s to the rightmost position.
>
> For example, if s = "abcde", then it will be "bcdea" after one shift.

Since the string has been cyclically shifted we have to basically check if goal appears when we concat our initial string two times. One way to check the occurance of this is to run two loops and check the occurance of goal in the
concatenation of inital string. Using z-algorithm we can minimize our time complexity to solve this problem in linear time.

In z-algorithm we create an initial array known as _z-array_ which stores the length of longest prefix substring that occurs in our string.

The Z array, at each index, stores the length of the longest substring starting the string till the index, matching the prefix (starting characters) of the string.

The Z algorithm uses previous values from certain intervals to match with prefix string, to speed up its execution, and these values are used based on the current window. We check whether it is possible to have a string greater than the maximum length inside the current window. If it is not possible, we skip the calculation for the remaining values inside the window.

By doing this we basically have to check the occurance of goal in our concatenation of given string. We also add a character in the beginning of string which are not present in the string (usually `#` or `$`) to distinguish between the string to be searched and the given string. For Example,

$$String$$ = $$abcde$$

$$Pattern = bcdea$$

$$New String$$ = $$abcde\$bcdeabcdea$$

$$\text{Z-array} = 0000000000400001$$

As we know what the goal's length is, and it's in our z-array, therefore we've found the pattern.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@Cyber-Machine"/>

```py
class Solution:
    def rotateString(self, s, goal):
        l = len(s)
        # Concatenation of our initial string with itself
        s = s + s
        # Making a new pattern
        pattern = goal+'$'+s
        def z_function(s):
            n = len(s)
            # Initializing Z - array
            z = [0] * n
            # We need to create an interval to store prefix substing
            l, r = 0, 0
            for i in range(1, n):
                # If we have some substring that matches in this interval then we know that
                # we have matched S[i.. ] matches S[k..] for atleast r - i + 1 characters
                if i <= r: z[i] = min(r - i + 1, z[i - l])
                # Checking the prefix length of current character
                while i + z[i] < n and s[z[i]] == s[i + z[i]]: z[i] += 1
                # It is possible to match S[i..] to S[0..] for more than R - i + 1
                # characters in this case we calculate new interval.
                if i + z[i] - 1 > r: l, r = i, i + z[i] - 1
            return z
        # Checking if our string exist in our pattern
        return len(goal) in z_function(pattern) and len(goal) == l
```

</TabItem>
</Tabs>

## Example #2: [459. Repeated Substring Pattern](https://leetcode.com/problems/repeated-substring-pattern/)

> Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

As in the previous question, here we must put our special characters in a different position and determine whether we can construct our string by repeated additions of the prefix string.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@Cyber-Machine"/>

```py
class Solution(object):
    def repeatedSubstringPattern(self, s):
        def z_function(s):
            n = len(s)
            # Initializing Z - array
            z = [0] * n
            # We need to create an interval to store prefix substing
            l, r = 0, 0
            for i in range(1, n):
                # If we have some substring that matches in this interval then we know that
                # we have matched S[i.. ] matches S[k..] for atleast r - i + 1 characters
                if i <= r: z[i] = min(r - i + 1, z[i - l])
                # Checking the prefix length of current character
                while i + z[i] < n and s[z[i]] == s[i + z[i]]: z[i] += 1
                # It is possible to match S[i..] to S[0..] for more than R - i + 1
                # characters in this case we calculate new interval.
                if i + z[i] - 1 > r: l, r = i, i + z[i] - 1
            return z
        for i in range(len(s) // 2):
            if(len(s) % (i + 1) == 0):
                z = z_function(s[:i + 1]+"$" + s[i + 1:])
                count = 0
                for j in z:
                    if (j == (i + 1)):
                        count += 1
                if(count == len(s) // (i + 1) - 1):
                    return True
        return False
```

</TabItem>
</Tabs>

## Example #3: [2223. Sum of Scores of Built Strings](https://leetcode.com/problems/sum-of-scores-of-built-strings/)

> You are building a string s of length n one character at a time, prepending each new character to the front of the string. The strings are labeled from 1 to n, where the string with length i is labeled si.
>
> For example, for s = "abaca", s1 == "a", s2 == "ca", s3 == "aca", etc.
> The score of si is the length of the longest common prefix between si and sn (Note that s == sn).
>
> Given the final string s, return the sum of the score of every si.

Here we have to find the longest prefix sum of all substring present in our string, which is basically sum of all values present in our z-array and add overall length of string in our answer as prefix of whole string is our original string.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@Cyber-Machine"/>

```py
class Solution:
    def sumScores(self, s):
        def z_function(s):
            n = len(s)
            # Initializing Z - array
            z = [0] * n
            # We need to create an interval to store prefix substing
            l, r = 0, 0
            for i in range(1, n):
                # If we have some substring that matches in this interval then we know that
                # we have matched S[i.. ] matches S[k..] for atleast r - i + 1 characters
                if i <= r:
                    z[i] = min(r - i + 1, z[i - l])
                # Checking the prefix length of current character
                while i + z[i] < n and s[z[i]] == s[i + z[i]]:
                    z[i] += 1
                # It is possible to match S[i..] to S[0..] for more than R - i + 1
                # characters in this case we calculate new interval.
                if i + z[i] - 1 > r:
                    l, r = i, i + z[i] - 1
            return z
        return sum(z_function(s)) + len(s)
```

</TabItem>
</Tabs>
