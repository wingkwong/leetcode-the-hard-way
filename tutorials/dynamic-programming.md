---
title: "Dynamic Programming"
description: "Dynamic Programming is used to minimize the cost associated with repetitive computations."
hide_table_of_contents: true
draft: true
keywords:
  - leetcode
  - tutorial
  - dynamic programming
  - algorithm
---

<TutorialCredits authors="@Cyber-Machine"/>

## Overview

If we want to generate all possible solutions to a particular problem we can use recursion or brute force, but this is often not efficient for solving problems with larger input size.

If the problem can be broken down into **overlapping and independent subproblems**, then we can use Dynamic Programming to minimize the cost associated with repetitive computations when compared to brute force algorithms by **solving and storing sub-problems** and using it to solve the original problem.

Let's take a look at Leetcode problem [70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/).

> You are climbing a staircase. It takes **n steps** to reach the top.
>
> Each time you can either **climb 1 or 2 steps**. In how many **distinct** ways can you climb to the top?

#### Solution-1 : Recursion

We can count number of ways to reach end stairs using recursion, in order to reach nth step we have two options either take $$(n - 1)^{th}$$ stair or $$(n - 2)^{th}$$ stair. i.e.

$$stair(n) = stair(n - 1) + stair(n - 2)$$

<Tabs>
<TabItem value="py" label="Python">

```py
class Solution:
    def climbStairs(self, n):
        #only one step option is availble
        if n == 1:
            return 1
        # two options are possible : to take two 1-stpes or to only take one 2-steps
        if n == 2:
            return 2
        return climb(n - 1) + climb(n - 2)
```

</TabItem>
</Tabs>

Time complexity for this approach is $$O(2 ^ n)$$ which is not good for large input size, let's look into this problem at more depth.

For reaching

- $$stair(5)$$ we need to calculate $$stair(4)$$ and $$stair(3)$$
- $$stair(4)$$ we need to calculate $$stair(3)$$ and $$stair(2)$$
- ...
- $$stair(n)$$ we need to calculate $$stair(n - 1)$$ and $$stair(n - 2)$$

As we can see for generating $$stair(5)$$ value of $$stair(3)$$ is generated twice.

#### Solution-2 : Memorization Technique

If we can store overlapping sub-problem and use it, we can save our computational resources as well as time.
We use a hash-table to look-up values of $$climb(n)$$ if we have computed it before then we simply call it, instead of recalculating the value all over again.

<Tabs>
<TabItem value="py" label="Python">

```py
class Solution :
def climbStairs(self, n):
    def climb(n):
        if n == 1 or n == 2:
            return n
        dp = [-1] * (n + 1)           # To accomodate for 0-based indexing
        dp[1], dp[2] = 1, 2           # Initialize values for first two stairs
        for i in range(3, n + 1):
            dp[i] = dp[i - 1] + dp[i - 2]
        return dp[n]
    return climb(n)

```

</TabItem>
</Tabs>

Time complexity for this approach is $$O(n)$$ since we are storing and using value for every recursion.

This method of using look-up table to calculate cost is also known as **Top-down** approach.

#### Solution-3 : Iterative approach

According to our recurrence relation, the number of ways to climb $$n$$ stairs is dependent on $$n - 1$$ and $$n - 2$$ stairs. Rather than recursively computing these values, we do it bottom-up, starting with the base cases and building on them until we get to $$n$$.

We use a dp array where $$dp[n]$$ will give us the no of ways to reach step $$n$$ and successively build up each index from the previous two.

<Tabs>
<TabItem value="py" label="Python">

```py
class Solution :
  def climb(self, n: int) -> int:
    if n == 1 or n == 2:
        return n
    dp = [-1] * (n + 1)           # To accomodate for 0-based indexing
    dp[1], dp[2] = 1, 2           # Initialize values for first two stairs
    for i in range(3, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    return dp[n]
```

</TabItem>
</Tabs>

Time complexity for this approach is $$O(n)$$ since we are storing and using value for iteration.

This method of building solution from base case to original problem is known as **Bottom-up** solution.

Let's look at another problem [338. Counting Bits](https://leetcode.com/problems/counting-bits/)

> Given an integer n, return an array ans of length n + 1 such that for each i ($0 <= i <= n$), $ans[i]$ is the number of 1's in the binary representation of i.

#### Solution-1 : Recursion Approach

Number of 1's of any decimal number is given by recurrence relation

$$f(x)$$ = $$(x/2)$$ + $$(x \& 1)$$

<Tabs>
<TabItem value="py" label="Python">

```py
class Solution:
    def countBits(self, num):
        setBits = [0] * (num+1)

        # Function to calculate setbits in a number
        def count(i):
            return count(i/2) + (i & 1) if(i > 1) else i

        for i in range(1 ,num+1):
            setBits[i] = count(i)
        return setBits


```

</TabItem>
</Tabs>

The Time complexity of this approach is $$O(nlogn)$$ since it takes $$O(logn)$$ time for calculating total number of set bits in a number.

#### Solution-2 : Using Dynamic Programming

It's clear that our recursion on $$n^{th}$$ element depends on $$n/2^{th}$$, so we could further decrease Time Complexity by using the stored value of $$n/2^{th}$$ element.

<Tabs>
<TabItem value="py" label="Python">

```py
class Solution:
    def countBits(self, num):
        dp = [0] * (num + 1)
        for i in range(1 ,num + 1):
            dp[i] = dp[i / 2] + (i & 1)
        return dp
```

</TabItem>
</Tabs>

The time complexity of this approach is $$O(n)$$.

## Tips

1. _Identify recurrence relationship_, and complete the recurrence relation including the base case.
2. Try to _reduce state-space_ of the recursion by looking for valid arguments to pass in function.
3. _Backtrack_ the recurrance relation for a small test case and find overlapping subproblems.
4. Use a hashmap or an array to _store_ the solved sub-problem.
5. Getting familiar with dynamic programming concepts is best done by _practicing_.

You can find a nice explanation [here](https://qr.ae/pGcv9h) on how to use these tips.

export const suggestedProblems = [
{
"problemName": "0072 - Edit Distance",
"difficulty": "Hard",
"leetCodeLink": "https://leetcode.com/problems/edit-distance/",
"solutionLink": "../solutions/0000-0099/edit-distance-hard"
},
{
"problemName": "0877 - Stone Game",
"difficulty": "Medium",
"leetCodeLink": "https://leetcode.com/problems/stone-game/",
"solutionLink": "../solutions/0800-0899/stone-game-medium"
},
{
"problemName": "1510 - Stone Game IV",
"difficulty": "Hard",
"leetCodeLink": "https://leetcode.com/problems/stone-game-iv",
"solutionLink": "../solutions/1500-1599/stone-game-iv-hard"
},
{
"problemName": "1692 - Count Ways to Distribute Candies",
"difficulty": "Hard",
"leetCodeLink": "https://leetcode.com/problems/count-ways-to-distribute-candies/",
"solutionLink": "../solutions/1600-1699/count-ways-to-distribute-candies-hard"
},
{
"problemName": "2110 - Number of Smooth Descent Periods of a Stock",
"difficulty": "Medium",
"leetCodeLink": "https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/",
"solutionLink": "../solutions/2100-2199/number-of-smooth-descent-periods-of-a-stock-medium"
},
]

<Table title="Suggested Problems" data={suggestedProblems} />
