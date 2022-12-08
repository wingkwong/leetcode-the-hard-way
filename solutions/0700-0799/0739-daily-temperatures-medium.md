---
description: "Author: @ColeB2 | https://leetcode.com/problems/daily-temperatures/"
tags: [Array, Stack, Monotonic Stack]
---

# 0739 - Daily Temperatures

## Problem Link

https://leetcode.com/problems/daily-temperatures/

## Problem Statement

Given an array of integers `temperatures` represents the daily temperatures, _return an array_ `answer` _such that_ `answer[i]` _is the number of days you have to wait after the_ `ith` _day to get a warmer temperature_. If there is no future day for which this is possible, keep `answer[i] == 0` instead.

**Example 1:**

```
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
```

**Example 2:**

```
Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
```

**Example 3:**

```
Input: temperatures = [30,60,90]
Output: [1,1,0]
```

**Constraints:**

- `1 <= temperatures.length <= 10^5`
- `30 <= temperatures[i] <= 100`


## Approach 1: Monotonic Stack

To solve this problem, we will use a Monotonic Decreasing Stack. That is a stack, where all the values inside the stack, are ordered from largest, to smallest. Meaning, we only add to the stack when the stack is either:
1. Empty, or
2. If the incoming value is smaller or equal to the value on top of the stack. 


That means that if any incoming value is larger, we must pop values off the top of the stack, until it satisfies rules 1 or 2 before we can add it to our stack.

It is during the popping phase, that we will do the majority of our work in solving our problem. By also adding the indexes with the temperature to the stack, we know where they exist in our output array, and can also use the indexes to gauge the relative distance in terms of days from other temperatures. So while popping them, we can calculate the incoming index, `i` minus the popped items index, `i2` and overwrite the values in our output array at `i2` with the difference, that is `i-i2`.

Time Complexity: $$O(n)$$ where n is the length of the input, temperatures.

Space Complexity: $$O(n)$$ which will be the size of our output array, and our stack in the worst case.



<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        # Here we will utilize a monotonic decreasing stack, meaning everything
        # in the stack will be ordered from 'hottest' to 'coldest', and any 
        # incoming element, 'warmer' than the top of the stack, will force us
        # to remove the 'colder' days from the top of our stack, and calculate
        # the difference in how many days apart they were for our output array.
        # Initialize output array of 0's the size of temperatures array. We use
        # 0's as default, as if we don't find a warmer day going forward, we are
        # to return 0 in that position instead.
        output = [0] * len(temperatures)
        stack = []
        # Loop through temperatures, tracking index, i and temperature, temp.
        for i, temp in enumerate(temperatures):
            # While the incoming temperature is 'warmer' than the temperature on 
            # top of the stack: We can start popping.
            # Note our stack values are formatted with tuples in the form:
            # (index, temperature).
            while stack and stack[-1][1] < temp:
                # Pop temperature, tracking its index in temperatures, i2 and
                # the temperature itself.
                i2, temp2 = stack.pop()
                # Add to out output at the index of the popped value, the
                # difference of the current temperature index, minus popped
                # value difference. This will be the number of days in between
                # them.
                output[i2] = i-i2
            # Once the top of the stack is either empty or no longer has days
            # colder than the incoming temperature, we can add our temperature
            # to the stack.
            # Again note that we are tracking index, i, and temperature, temp
            # inside our stack.
            stack.append((i, temp))
        # return our output.
        return output
```

</TabItem>
</Tabs>