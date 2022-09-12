---
description: >-
  Authors: @heiheihang, @wingkwong |
  https://leetcode.com/problems/minimum-time-to-remove-all-cars-containing-illegal-goods/
---

# 2167 - Minimum Time to Remove All Cars Containing Illegal Goods (Hard)

## Problem Link

https://leetcode.com/problems/minimum-time-to-remove-all-cars-containing-illegal-goods/

## Problem Statement

You are given a **0-indexed** binary string `s` which represents a sequence of train cars. `s[i] = '0'` denotes that the `ith` car does **not** contain illegal goods and `s[i] = '1'` denotes that the `ith` car does contain illegal goods.

As the train conductor, you would like to get rid of all the cars containing illegal goods. You can do any of the following three operations **any** number of times:

1. Remove a train car from the **left** end (i.e., remove `s[0]`) which takes 1 unit of time.
2. Remove a train car from the **right** end (i.e., remove `s[s.length - 1]`) which takes 1 unit of time.
3. Remove a train car from **anywhere** in the sequence which takes 2 units of time.

Return _the **minimum** time to remove all the cars containing illegal goods_.

Note that an empty sequence of cars is considered to have no cars containing illegal goods.

**Example 1:**

```
Input: s = "1100101"
Output: 5
Explanation: 
One way to remove all the cars containing illegal goods from the sequence is to
- remove a car from the left end 2 times. Time taken is 2 * 1 = 2.
- remove a car from the right end. Time taken is 1.
- remove the car containing illegal goods found in the middle. Time taken is 2.
This obtains a total time of 2 + 1 + 2 = 5. 

An alternative way is to
- remove a car from the left end 2 times. Time taken is 2 * 1 = 2.
- remove a car from the right end 3 times. Time taken is 3 * 1 = 3.
This also obtains a total time of 2 + 3 = 5.

5 is the minimum time taken to remove all the cars containing illegal goods. 
There are no other ways to remove them with less time.
```

**Example 2:**

```
Input: s = "0010"
Output: 2
Explanation:
One way to remove all the cars containing illegal goods from the sequence is to
- remove a car from the left end 3 times. Time taken is 3 * 1 = 3.
This obtains a total time of 3.

Another way to remove all the cars containing illegal goods from the sequence is to
- remove the car containing illegal goods found in the middle. Time taken is 2.
This obtains a total time of 2.

Another way to remove all the cars containing illegal goods from the sequence is to 
- remove a car from the right end 2 times. Time taken is 2 * 1 = 2. 
This obtains a total time of 2.

2 is the minimum time taken to remove all the cars containing illegal goods. 
There are no other ways to remove them with less time.
```

**Constraints:**

* `1 <= s.length <= 2 * 10^5`
* `s[i]` is either `'0'` or `'1'`.

## Approach 1: Minimum Sum of Subarray

We note that our goal is to **minimize** the following:

_totalCost = left + right + mid(1) \* 2_

Where _mid(1)_ denotes the number of 1s in the middle part, and _mid(0)_ denotes the number of 0s in the middle part.

We can calculate _mid(1)_ in the following way:

_mid - mid(0)_

So our new equation becomes:

_totalCost = left + right + 2 \* (mid - mid(0)) = left + right + mid + (mid - mid(0)) - mid(0)_

_totalCost = all + mid(1) - mid(0)_

As all is a constant, we need to **minimize** _mid(1) - mid(0)_

This becomes a minimum sum of subarray problem when we substitute -1 to 0 in the original input.

The rest of the problem becomes a classic subarray sum problem.

```python
def minimumTime(self, s: str) -> int:
        
        #initialize currentValue and smallest
        currentValue = 0
        smallest = 0
        
        #iterate all characters
        for c in s:
            
            #separate the cases of 0 and 1
            if(c == "0"):
                
                #-1 if it is 0
                currentValue -= 1
                
                #update smallest subarray sum including current value
                currentValue = min(-1, currentValue)
                
                #update smallest
                smallest = min(smallest, currentValue)
            else:
                
                #add 1 if it is 1
                currentValue += 1
        
        #return result based on formula
        return len(s) + smallest
```

## Approach 2: Dynamic Programming

Let $$dp1[i]$$ be the time you need to take from the left to to index $$i$$ and $$dp2[j]$$ be the time you need to take from the right to to index $$j$$.

For each index, we have three options.

1. remove from the left and contribute $$i$$ time
2. remove from the middle and contribute $$dp1[i - 1] + 2$$ or $$dp2[i + 1] + 2$$ time if applicable.
3. remove from the right and contribute $$n - i$$ time

Let's think about the case from the left to right, the transition is 

* if the character is 0, it doesn't contribute anything, so we take the previous state. $$dp1[i] := dp1[i - 1]$$
* if the character is 1, we can either take $$i$$ or $$dp1[i - 1] + 2$$.

For $$dp2$$, we need to do it in reverse order. We can reverse the string and perform the same logic. At the end, the answer is to find the minimum value from $$dp1[i] + dp2[n - i]$$.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int minimumTime(string s) {
        int n = s.size(), ans = 1e9;
        // dp1: min time to take from left to right
        // dp2: min time to take from right to left
        vector<int> dp1(n + 1), dp2(n + 1);
        for (int i = 1; i <= n; i++) {
            // if it is 0, then take the previous state
            // if not, remove from the left or remove from the middle directly
            if (s[i - 1] == '0') dp1[i] = dp1[i - 1];
            else dp1[i] = min(i, dp1[i - 1] + 2);
        }
        // reverse the string and apply the same logic on dp2
        reverse(s.begin(), s.end());
        for (int i = 1; i <= n; i++) {
            if (s[i - 1] == '0') dp2[i] = dp2[i - 1];
            else dp2[i] = min(i, dp2[i - 1] + 2);
        }
        for (int i = 0; i <= n; i++) {
            // dp1 + dp2: cover those three options
            ans = min(ans, dp1[i] + dp2[n - i]);
        }
        return ans;
    }
};
```
