---
description: >-
  Author: @heiheihang |
  https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/
---

# 2193 - Minimum Number of Moves to Make Palindrome (Hard)

## Problem Statement

You are given a string `s` consisting only of lowercase English letters.

In one **move**, you can select any two **adjacent** characters of `s` and swap them.

Return _the **minimum number of moves** needed to make_ `s` _a palindrome_.

**Note** that the input will be generated such that `s` can always be converted to a palindrome.

**Example 1:**

```
Input: s = "aabb"
Output: 2
Explanation:
We can obtain two palindromes from s, "abba" and "baab". 
- We can obtain "abba" from s in 2 moves: "aabb" -> "abab" -> "abba".
- We can obtain "baab" from s in 2 moves: "aabb" -> "abab" -> "baab".
Thus, the minimum number of moves needed to make s a palindrome is 2.
```

**Example 2:**

```
Input: s = "letelt"
Output: 2
Explanation:
One of the palindromes we can obtain from s in 2 moves is "lettel".
One of the ways we can obtain it is "letelt" -> "letetl" -> "lettel".
Other palindromes such as "tleelt" can also be obtained in 2 moves.
It can be shown that it is not possible to obtain a palindrome in less than 2 moves.
```

**Constraints:**

* `1 <= s.length <= 2000`
* `s` consists only of lowercase English letters.
* `s` can be converted to a palindrome using a finite number of moves.

## Approach 1: Brute Force

The first solution solves it in $$O(N^2)$$ time brute force. The general logic is the following:

1. Count the number of occurrences of each character
2. Start iterating rightward from the left character, skip if it does not have an available matching character
3. Start iterating leftward from the right-most unmatched character, and find the first matching character
4. When found, swap the characters in between to its appropriate position
5. If we have skipped the odd character, we need to add its disposition from the middle position to the result

This greedy approach is hard to justify that it produces the smallest amount of move, perhaps a harder analysis is needed.

```python
def minMovesToMakePalindrome(self, s: str) -> int:
        
        #initialize the number of counts
        res = 0
        
        #keep track of the right pointer of unused character
        rp = len(s) - 1
        
        #count the frequency of characters
        d = defaultdict(int)
        
        #change the string to a list for swapping
        s = list(s)
        
        #calculate the frequency of characters
        for i in range(len(s)):
            c = s[i]
            d[c] += 1
            
        #initialize the position of the odd character (middle)
        odd_position = -1
        
        #we only need to look up to the middle of the palindrome form left side
        for i in range((len(s)+1)//2):
            
            left_character = s[i]
            
            #we skip if the character is the odd one
            if(d[left_character] == 1):
                odd_position = i
                continue
                
            #we find the matching 
            for j in range(rp, -1, -1):
                
                #stop when we find a matching character
                if(s[j] == left_character):
                    
                    #swap the characters until the target position
                    for k in range(j, rp):
                        s[k] = s[k+1]
                    #set the character at the target position
                    s[rp] = left_character
                    
                    #add the distance travelled for the target character
                    res += rp - j
                    break
            #decrease the count of that character by 2
            d[left_character] -= 2
            
            #decrease right pointer by 1
            rp -= 1
            # print(s, res, i)
            
        #if there is an odd character
        if(odd_position != -1):
            
            #add its distance to the center position
            res += (len(s)) // 2 - left_over
            
        return res
```
