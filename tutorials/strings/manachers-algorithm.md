---
title: "Manacher's Algorithm"
description: "A famous algorithm and the fastest known technique to find palindromic substrings of even or odd length." 
hide_table_of_contents: false
draft: true
keywords:
  - leetcode
  - tutorial
  - manacher
  - algorithm
---

<TutorialAuthors names="@abhiramtilakiiit"/>

## Overview

Manacher's algorithm is a linear time algorithm for finding all palindromic sub-strings in a given string. It was proposed by Gary Manacher in 1975 and is based on the observation that the center of a palindrome can be either a single character or a gap between two characters.

Manacher's algorithm is usually used to find the longest palindromic substring in any given string
even though it can be used to find all possible palindromic substrings too.
Even though this usecase might seem very specific, This algorithm is lot faster than the brute force approach $\left( O(n^3) \rightarrow \text{almost } O(n) \right)$,
as it exploits the core property of a palindrome which is **Symmetry**, and cleverly uses a palindrome happening inside another palindrome.

**NOTE:** Manacher's algorithm was originally designed to find the palindromic substrings with odd lengths only, but we can apply a few modifications to the input array to make it work with even arrays too.

Before we start let's some terminology clear:

- **Substring** - a substring is a $contiguous$ sequence of characters within a string. For instance, "the best of" is a substring of "It was the best of times".
- **Palindromic Length** - Unlike the traditional definition of length of a string, in this tutorial the 'palindromic length'
  is simply the number characters in each wing of the palindrome from the center.

  Example, the palindromic string `"12321"`, has length 2, and `"abba"`, also has length 2.

- **Mirror Index** - A mirror index of any index in this tutorial, refers to the index which is symmetrically placed on the
  other side with respect to the center of a given palindrome.

  Mirror index depends on the center taken and on computing it comes out
  to be exactly $\boxed{mirror = 2*c - index}$, where `c` is the center index. It is applicable in both cases where index is left and right of the center.

  The final length to be returned is the normal length is simply $\boxed{2 \times pLength + center}$

Let's walk you through the algorithm along to better develop the intuition behind it, using a common example.

## Example #1: [5 - Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)

> Given a string s, return the longest palindromic substring in s.

Now as soon as you look at the problem you might try the naive approach.

### Naive Approach ( complexity $O(n^3)$ )

The most naive approach is to iterate through all the left and right indices possible to cover all possible
substrings $(O(n^2))$, and check if each of the substrings, they are a palindrome, $O(n)$.

For example: Given input `s = "cbbd"`. ( second sample testcase in leetcode )

You pass every possible substring:

```
{ c, cb, cbb, cbbd, b, bb, bbd, b, bd, d } - longest palindrome is 'bb' which is 2 in length
```

Check if each of it is a palindrome, through which best you can get is $O(n)$.

### Binary Search for the length ( complexity $O(n^2logn)$)

This method is a slight improvement to the previous case. This comes from the observation that
if a string is palindrome, removing two characters, one from left end and other from right, will also
give you a palindrome but of a lesser length ( $n-2$ to be precise ).

Similarly if a string is not a palindrome, you are sure that if you take two extra characters from left and right,
the resulting string won't be a palindrome.

Now, using the above idea, you try to binary search for the length of the substring, ( handling odd and even cases seperately).

This won't be covered in detail, because this isn't effective at all. You just minimized from checking all substrings to checking only the ones
which are desirable to give answer.

### Checking palindromes across centers ( complexity $O(n^2)$ )

This is where we are actually using some palindromic property. We know that the maxiumum length
of palindrome can't be more than the string length ( say $n$), and the minimum length can't be
less than 1.

Thus we symmetrically try to exapand in either direction starting from center, until its not a palindrome anymore.

Example: let the string `"babad"` (first sample testcase of leetcode question)

Consider all possible centers (even the non-character ones for even length palindromes).

```
b  |  a  |  b  |  a  |  d
.  .  .  .  .  .  .  .  .
c1 c2 c3 c4 c5 c6 c7 c8 c9
```

Now iterate through each and every center and expand outwards until its not symmetric.
For example, for $c_5$ as the center in the above example we expand it as:

```
b  |  a  |  b  |  a  |  d  -- current palindromic length 0
            .
            c5
b  |  a  |  b  |  a  |  d  -- current palindromic length 1
         ^--.--^
            c5
b  |  a  |  b  |  a  |  d  -- current palindromic length 2
      ^-----.-----^
            c5
b  |  a  |  b  |  a  |  d  -- current palindromic length 3
   ^--------.--------^
            c5
```

But when we try to exand even more, we find that the symmetry is lost thus break it here, and move to another center.

```
b  |  a  |  b  |  a  |  d  -- not a palindrome
^-----------.-----------^
            c5
```

If we do this for all centers (there will be 2n+1 such ), and each check can go upto maximum $n$ length thus complexity is $O(n)$, with total complexity $O(n^2)$.

### Intuition for Manacher's algorithm

Using the above algorithm, we have successfully cut down time complexity to $O(n^2)$, and
surprisingly the given leetcode problem, doesn't return a TLE (Time limit exceeded) and is a pretty submittable solution, and if implemented correctly, it turns out to be the most memory efficient solution.

But the question is can we do better? atleast in time.

**Note:** All the above solutions have $O(1)$ or constant space complexity (given input/output string is in memory), and only thing being stored is the maximum

An experienced coder, familiar with dynamic programming may notice that, what's actually hurting us here is the
fact that we are having to calculate the longest palindrome for each center, without storing any information from
previous iterations.

- Is there a way to exploit the symmetry of a palindrome even more to our advantage?
- Is it possible to compromise on space complexity, to optimize time?

### Manacher's Algorithm (Complexity $O(n)$)

Finally, we get to the fastest known way to solve this problem.

What Manacher's algorithm does is keep track of the palindromic length of each index, and use symmetry to predict that
the palindromic length of the mirror with respect to the center of another palindrome is same.

This is true, unless the former palindrome is 'outside the bounds' of the latter palindrome.
In such a case we take the palindromic length of the mirror to be upto the 'bounds'.

Thus,

```
pLength[index] = min ( bound - index ,pLength[mirror])
```

Sometimes the palindrome after mirroring may exist out of the bounds as well, (opposite to above case).
Thus we try to expand beyond the mirrored palindrome to 'explore' more.

```
while string[index -pLength[index]] == string[index +pLength[index]]:
    pLength[i] += 1
```

**Note:** Before we proceed further, to cope with the limitation of manacher's algorithm being applicable for
only odd length strings, every string will be scaled to become odd by adding dummy characters,
say '#' in between. Thus the new length of the string is $2n-1$.

Example: string `"abba"`, will become `"a#b#b#a"`.

Let's walk through the testcases for the problem to better describe the procedure.

**INPUT:** `s = "babad"`

- You start by converting this string to a longer version of it.

```
string = "b#a#b#a#d"
```

- As described above you keep track of three things, the center ($c$), the current index ($i$), and the 'bound' ($L,R$).
- You also store the palindromic lengths in an array say `pLengths`, which you will be using in the algorithm.

**NOTE:** In practicality we would always be moving from left to right starting from case where both center and index is 0, thus
when calculating the mirror index, it will always lie on the right side of the center and we don't need to have
seperate Left and Right bound, just keeping track of right bound should be enough.

- Start from $center = 0$ and try to compute palindromic length (`pL`) like mentioned in previous method because
  the mirror doesn't exist yet (index is exactly on the bound R). Update the length in `pLengths`

```
 _                   pLengths[i] = 0
 b # a # b # a # d          pLengths = "0 0 0 0 0 0 0 0 0"
 ^                   c = 0
 ^                   i = 0
 ^                   R = 0
```

- In the above case, the palindrome centered at given center is within the bounds
  ( $i + pL > R$ is not satisfied ) thus we don't update the center. So there's nothing to do but move to the next index.

```
   _                 pLengths[i] = 0
 b # a # b # a # d          pLengths = "0 0 0 0 0 0 0 0 0"
 ^                   c = 0
   ^                 i = 1
 ^                   R = 0
```

- Again the same as previous case, index is out of bounds, center is within bounds. There is nothing
  to do except update the `pLengths`, and move to next index.

```
 _________             pLengths[i] = 2
 b # a # b # a # d          pLengths = "0 0 2 0 0 0 0 0 0"
 ^                   c = 0
     ^               i = 2
 ^                   R = 0
```

- Again index is out of bounds, mirror doesn't exist, but this, time the palindromic length is 2.
  Finally $i + pL > R$, the palindrome goes beyond the bounds hence the center $(c = i)$, and bound $(R = i+pL)$
  should be updated.

```
       _               pLengths[i] = 0
 b # a # b # a # d          pLengths = "0 0 2 0 0 0 0 0 0"
     ^               c = 2
       ^             i = 3
         ^           R = 4
```

- Here, for the first time mirror exists, thus we take the `pL` from the mirror which is 0. When you try to
  expand beyond you don't find any palindrome, thus $pL = 0$ will be final for this iteration. This palindrome is
  within bounds and doesn't require updating center.

```
   -------------       pLengths[i] = 3
 b # a # b # a # d          pLengths = "0 0 2 0 3 0 0 0 0"
     ^               c = 2
         ^           i = 4
         ^           R = 4
```

- Mirror doesn't exist. `pL` comes out to be 3. Palindrome goes out of bounds and
  requires center to be updated.
- Since this is getting repitative I will skip to the case that has something interesting.

```
           -          pLengths[i] = 0
 b # a # b # a # d          pLengths = "0 0 2 0 3 0 0 0 0"
         ^           c = 4
           ^         i = 5
               ^     R = 7
```

```
           -----       pLengths[i] = 1
 b # a # b # a # d          pLengths = "0 0 2 0 3 0 1 0 0"
         ^           c = 4
             ^       i = 6
               ^     R = 7
```

- Mirror exists but the length of mirror is larger than the bounds ($R - i = 1$), thus we rathar take
  `pL=1` and try to explore more but don't find any palindrome.
- Either way we will skip through all iterations.

```
               _      pLengths[i] = 0
 b # a # b # a # d          pLengths = "0 0 2 0 3 0 1 0 0"
         ^           c = 4
               ^     i = 7
               ^     R = 7
```

```
                 _    pLengths[i] = 0
 b # a # b # a # d          pLengths = "0 0 2 0 3 0 1 0 0"
         ^           c = 4
                 ^   i = 8
               ^     R = 7
```

Finally the answer will be the max of all `pLengths`. right?

We initially assumed palindromic lengths to be number of characters matching on each side, and the input string
was converted into an odd string by adding dummy characters ('#'). Now what we need to compare is the
length of palindrome at each center.

This number is mostly same as pLength except in some cases.

**Example:**

- "x#b#y" has `pLength = 1` at center b, but it is not true because "#b#" is not a valid palindromic sequence of length 3.
- similarly, "#x#x#" has `pLength = 2` at center '#' ( `index = 2` ). But #x#x# is not a valid palindromic sequence of
  length 5.

Thus inorder to mitiagate that, we decrement the `pLength` at odd values (when center is not '#'), and at even
values (when center is at '#').

Finally the code for the problem:

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@abhiramtilakiiit"/>

```py
class Solution:
    def longestPalindrome(self, s: str) -> str:
		if s is "": return ""

        string = ""
        # convert odd/even strings to odd
        for i in range(len(s)-1):
            string += s[i] + "#"
        string += s[len(s)-1]

        # initializing variables
        pLengths = [0]* len(string)
        c = 0
        R = 0

        for i in range(len(string)):

            # mirroring the palindromic length
            if i < R:
                mirror = 2*c - i
                pLengths[i] = min(R-i, pLengths[mirror])

            # exploring beyond bounds
            while ( i - pLengths[i] - 1 >= 0 and i + pLengths[i] + 1 < len(string)
            and string[i + pLengths[i] + 1] == string[i - pLengths[i] - 1] ):
                pLengths[i] += 1

            # update center and bound
            if pLengths[i] + i > R:
                c = i
                R = i + pLengths[i]

        # fix: some indices having extra pLength
        for i in range(int(len(pLengths)/2)):
            if pLengths[2*i] % 2:
                pLengths[2*i] -= 1
            if pLengths[2*i+1] != 0 and not pLengths[2*i+1] % 2:
                pLengths[2*i+1] -= 1

        # return the longest substring
        longest_pL = pLengths.index(max(pLengths))
        start = longest_pL - max(pLengths)
        end = longest_pL + max(pLengths)
        return string[start:end+1].replace("#","")
```

</TabItem>
</Tabs>

## Example #2: [214 - Shortest Palindrome](https://leetcode.com/problems/shortest-palindrome/)

Now, we are ready to take up a harder problem.

> You are given a string 's'. You can convert s to a palindrome by adding characters in front of it.
Return the shortest palindrome you can find by performing this transformation.

The first part of this problem is to find all the palindromic lengths so that we get to
calculate the most efficient 'center' for expansion.

**Example:**

- If string is `"a#b#a#a"`, `pLengths = 0 0 2 0 0 1 0`
  - The expanded palindromic string could be, "a#a#**b**#a#a" or "a#a#b#**a**#b#a#a" but shorter is the first.
- If string was `"a#a#b#a"`, `pLengths = 0 1 0 0 2 0 0`
  - The expanded palindromic string could be, "a#b#a**#**a#b#a" but not wrt center 'b' because the palindrome
    with 'b' as center doesn't "touch the left end".

Thus the condition for a valid palindrome reduces to $pLength[i] == i$.

In order to get to the largest possible palindrome, we go from right to left. Find the
prefix that needs to be added and finally append it. The code looks like following:

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@abhiramtilakiiit"/>

```py
class Solution:
    def longestPalindrome(self, s: str) -> str:
		if s is "": return ""

        string = ""
        # convert odd/even strings to odd
        for i in range(len(s)-1):
            string += s[i] + "#"
        string += s[len(s)-1]

        # initializing variables
        pLengths = [0]* len(string)
        c = 0
        R = 0

        for i in range(len(string)):

            # mirroring the palindromic length
            if i < R:
                mirror = 2*c - i
                pLengths[i] = min(R-i, pLengths[mirror])

            # exploring beyond bounds
            while ( i - pLengths[i] - 1 >= 0 and i + pLengths[i] + 1 < len(string)
            and string[i + pLengths[i] + 1] == string[i - pLengths[i] - 1] ):
                pLengths[i] += 1

            # update center and bound
            if pLengths[i] + i > R:
                c = i
                R = i + pLengths[i]

        # fix: some indices having extra pLength
        for i in range(int(len(pLengths)/2)):
            if pLengths[2*i] % 2:
                pLengths[2*i] -= 1
            if pLengths[2*i+1] != 0 and not pLengths[2*i+1] % 2:
                pLengths[2*i+1] -= 1

        # return the longest substring
        longest_pL = pLengths.index(max(pLengths))
        start = longest_pL - max(pLengths)
        end = longest_pL + max(pLengths)

        return string[start:end+1].replace("#","")
```

## Complexity analysis

- Time Complexity for this algorithm is about $O(n)$:

    We iterate through the string once and calculate the palindromic length at each center. But while
    doing so we also discover the lengths of other indexes which will be stored in memory. Thus instead
    of expanding everytime we can find out an indices's palindromic length in constant time.

- Space Complexity for this algorithm is also $O(n)$:

    Space complexity is $O(n)$ because we store an additional `pLengths` array to hold all the palindromic 
    lengths of the $2n-1$ centers.


Other than Palindromic Substrings, Manacher's Algorithm is not always the most efficient algorithm, but still
a good practice for implementation.

</TabItem>
</Tabs>

export const suggestedProblems = [
    {
        "problemName": "647 - Palindromic Substrings",
        "difficulty": "Medium",
        "leetCodeLink": "https://leetcode.com/problems/palindromic-substrings/description/",
        "solutionLink": "../../solutions/0600-0699/palindromic-substrings-medium"
    },
    {
        "problemName": "1960 - Maximum Product of Length of Two Palindromic Substrings",
        "difficulty": "Hard",
        "leetCodeLink": "https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-substrings/",
        "solutionLink": ""
    },
    {
        "problemName": "1745 - Palindrome Partitioning IV",
        "difficulty": "Hard",
        "leetCodeLink": "https://leetcode.com/problems/palindrome-partitioning-iv/description/",
        "solutionLink": ""
    },
]

<Table title = "Suggested problems" data = {suggestedProblems}/>
