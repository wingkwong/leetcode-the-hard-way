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

In z-algorithm we create an initial array known as *z-array* which stores the length of longest prefix substring that occurs in our string. 

The Z array, at each index, stores the length of the longest substring starting the string till the index, matching the prefix(starting characters) of the string.

The Z algorithm uses previous values from certain intervals to match with prefix string, to speed up its execution, and these values are used based on the current window. We check whether it is possible to have a string greater than the maximum length inside the current window. If it is not possible, we skip the calculation for the remaining values inside the window.

By doing this we basically have to check the occurance of goal in our concatenation of given string. We also add a character in the beginning of string which are not present in the string (usually `#` or `$`) to distinguish between the string to be searched and the given string.

For Example :

$$String$$     = $$abcde$$


$$Pattern    = bcdea$$


$$New String$$ = abcde$bcdeabcdea


$$Z-array$$    = $$0000000000400001$$

As we know what the goal's length is, and it's in our z-array, therefore we've found the pattern. 
### Implementation
<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@Cyber-Machine"/>

```py
class Solution:
    def rotateString(self, s, goal):
        l = len(s)
        #Concatenation of our initial string with itself
        s = s+s 
        #Making a new pattern
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
        #Checking if our string exist in our pattern
        return len(goal) in z_function(pattern) and len(goal) == l
```

</TabItem>
</Tabs>


Let's take another example [459. Repeated Substring Pattern](https://leetcode.com/problems/repeated-substring-pattern/)

> Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

As in the previous question, here we must put our special characters in a different position and determine whether we can construct our string by repeated additions of the prefix string.

### Implementation
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
        for i in range(len(s)//2):
            if(len(s) % (i+1) == 0):
                z = z_function(s[:i+1]+"$"+s[i+1:])
           
                count = 0
                for j in z:
                    if(j == (i+1)):
                        count += 1
                if(count   == len(s) // (i+1) - 1):
                    return True

        return False
  
        
```

</TabItem>
</Tabs>


Let's look into another problem [2223. Sum of Scores of Built Strings](https://leetcode.com/problems/sum-of-scores-of-built-strings/)

>You are building a string s of length n one character at a time, prepending each new character to the front of the string. The strings are labeled from 1 to n, where the string with length i is labeled si.
>
>For example, for s = "abaca", s1 == "a", s2 == "ca", s3 == "aca", etc.
>The score of si is the length of the longest common prefix between si and sn (Note that s == sn).
>
>Given the final string s, return the sum of the score of every si.

Here we have to find the longest prefix sum of all substring present in our string, which is basically sum of all values present in our z-array and add overall length of string in our answer as prefix of whole string is our original string.

### Implementation
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

#### Time Complexity 
Since we are searching building our z-array of $$m$$ sized pattern in one iteration by comparing and updating it  with $$n$$ sized prefix it takes $$O(m+n)$$ time.

For a detailed explanation [Click here](https://www.scaler.com/topics/data-structures/z-algorithm/)