---
title: "Z Algorithm"
description: 'TBC'
draft: true
keywords:
  - leetcode
  - tutorial
  - z algorithm
  - algorithm
---
<TutorialAuthors names="@Cyber-Machine"/>

## Overview 
Z-algorithm is used in pattern matching in string.

Let's take a look at Leetcode problem [796. Rotate String](https://leetcode.com/problems/rotate-string/).


>Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
>
>A shift on s consists of moving the leftmost character of s to the rightmost position.
>
>For example, if s = "abcde", then it will be "bcdea" after one shift.

Since the string has been cyclically shifted we have to basically check if goal appears when we concat our initial string two times. One way to check the occurance of this is to run two loops and check the occurance of goal in the 
concatenation of inital string. Using z-algorithm we can minimize our time complexity to solve this problem in linear time.

In z-algorithm we create an initial array known as *z-array* which stores the length of longest prefix substring that occurs in our string. By doing this we basically have to check the occurance of goal in our concatenation of given string. We also add a character in the beginning of string which are not present in the string (usually `#` or `$`) to distinguish between the string to be searched and the given string.

String     = abcde


Pattern    = bcdea


New String = abcde$bcdeabcdea


Z-array    = 0000000000400001

As we know what the goal's length is, and it's in our z-array, therefore we've found the pattern. 
### Implementation
<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@Cyber-Machine"/>

```py
class Solution:
  def rotateString(self, s, goal):
    s = s+s #Concatenation of our initial string with itself
    pattern = goal+'$'+s #Making a new pattern
    freq = 0
    i = 0
    j = 1
    z = []
    while(j < len(pattern)):
        
        if(pattern[i] == pattern[j]):#Comparing each element with every other element
            freq += 1
            j += 1
            i += 1
            continue
        else:
            z.append(freq)
            freq = 0
            j -= i
            i = 0
            
        j += 1
    if(pattern[j - len(pat):] == pat):#Checking for the last substring of size of pattern
        z.append(len(pat))
    for i in range(len(z)):
        if(z[i] == len(pat)):
            return True
    return False
```

</TabItem>
</Tabs>

#### Time Complexity 
Since we are searching building our z-array of $$m$$ sized pattern in one iteration by comparing and updating it  with $$n$$ sized prefix it takes $$O(m+n)$$ time.

For a detailed explanation [Click here](https://www.scaler.com/topics/data-structures/z-algorithm/)