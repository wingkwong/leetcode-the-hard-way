---
description: >-
  Author: @heiheihang |
  https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
---

# 1431 - Kids With the Greatest Number of Candies (Easy)

## Problem Link

https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

## Problem Statement

There are `n` kids with candies. You are given an integer array `candies`, where each `candies[i]` represents the number of candies the `ith` kid has, and an integer `extraCandies`, denoting the number of extra candies that you have.

Return _a boolean array_ `result` _of length_ `n`_, where_ `result[i]` _is_ `true` _if, after giving the_ `ith` _kid all the_ `extraCandies`_, they will have the **greatest** number of candies among all the kids, or_ `false` _otherwise_.

Note that **multiple** kids can have the **greatest** number of candies.

**Example 1:**

```
Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true] 
Explanation: If you give all extraCandies to:
- Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
- Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
- Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
- Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
- Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
```

**Example 2:**

```
Input: candies = [4,2,1,1,2], extraCandies = 1
Output: [true,false,false,false,false] 
Explanation: There is only 1 extra candy.
Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.
```

**Example 3:**

```
Input: candies = [12,1,12], extraCandies = 10
Output: [true,false,true]
```

**Constraints:**

* `n == candies.length`
* `2 <= n <= 100`
* `1 <= candies[i] <= 100`
* `1 <= extraCandies <= 50`

## Approach 1: Iteration

We need to use `max` to find the largest number of candies among the kids. Then we need to iterate the list of candies, and check if the number of candies is greater than the largest number of candies after adding `extra_candies`. We put `True` to `result` if yes, put `False` to `result` otherwise.

<SolutionAuthor name="@heiheihang"/>

```python
def kidsWithCandies(self, candies: List[int], extra_candies: int) -> List[bool]:
        
        #find the greatest number of candies among the kids
        most_candies = max(candies)
        
        #initialize the result list
        result = []
        
        #iterate each kid
        for i in range(len(candies)):
            
            #declare a veriable for the number of candies of the ith kid
            kid = candies[i]
            
            #check if the kid can have more than or equal to the largest number of candies
            if(kid + extra_candies >= most_candies):
                #put TRUE to result if yes
                result.append(True)
            else:
                #put FALSE to result if no
                result.append(False)
        
        #return result list
        return result
```
