---
description: "Author: @ColeB2| https://leetcode.com/problems/largest-rectangle-in-histogram/"
tags: [Array, Stack, Monotonic Stack]
---

# 0084 - Largest Rectangle in Histogram (Hard)

## Problem Link

https://leetcode.com/problems/largest-rectangle-in-histogram/

## Problem Statement

Given an array of integers `heights` representing the histogram's bar height where the width of each bar is `1`, return _the area of the largest rectangle in the histogram_.

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/01/04/histogram.jpg)

```
Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2021/01/04/histogram-1.jpg)

```
Input: heights = [2,4]
Output: 4
```

**Constraints:**

- `1 <= heights.length <= 10^5`
- `0 <= heights[i] <= 10^4`


## Approach 1: Monotonic Stack

First let's get some intuition on the problem. With most array problems, we know we can brute force this by getting every sub-rectangle, this would happen in $$O(n^2)$$
time. Then we have to think, can we improve upon that? Instead of solving each rectangle possible, can we somehow remember values, so we can solve the area of the rectangle at the best possible time instead of each iteration? We know for a single rectangle the area is simple, and we know for rectangles using multiple elements, we will need to extend the current rectangle left, right, or both. To extend it, we know we need the values on either side to be taller or equal height, so if we can track the left boundary, and wait until a time when there is no longer a right boundary, we can then solve the area for that specific height in heights, and not every sub rectangle.

How can we track all that? Well to solve this problem, we will use a Monotonic Increasing Stack. That is a stack, where all the values inside the stack, are ordered from smallest to largest. Meaning we only add to the stack when the stack is either:
1. Empty, or
2. If the incoming value is greater than or equal to the value on top of the stack. If it is, it means we can continue to extend any smaller rectangle into it without a problem.

That means if any incoming value is smaller, we must pop values off the top of the stack until it satisfies rules 1 or 2.

During this popping phase, we will do the majority of our work in solving this problem. By adding tuples to our stack, we can track the left boundary of our rectangle, and the height of the rectangle. Knowing the left bound, and the height, as well as the right bound being the incoming element, we then have all the information we need. 

When the incoming element is smaller than top of the stack, it means the rectangle on top is too tall to extend further right to create a valid rectangle. So this is the best time to solve the area, by taking the width, which will be the position of incoming elements index, minus the index we have for the popped element: $$width = incoming\_index - popped\_index$$. Then we can get our height and calculate our area: $$area = width * popped\_height$$. We can then update our max global area if current area is larger.

One last trick we must remember is to know that just because we can't extend a rectangle further right, doesn't mean we can't also extend it further left. So since we know the incoming rectangle is shorter than the one we just popped off, we know it can extend left, so by tracking a left boundary, we can update the left boundary with the index of the popped rectangle, to track how far left we can extend the rectangle.

When we finally satisfy rules 1 or 2, we can add our incoming rectangle to the stack.
We make sure to add it as a tuple using our left bound we calculated above, which will either be incoming index, or index of the popped off element(s) if we had to pop, and the height. That is a tuple, ($$left\_bound, height$$). Now know that the element we added can't extend further left, as we are using an increasing stack so we know it is taller than element to the left, and will now only extend right if incoming elements are larger/equal in height.

Note when we reach the end of the array, we aren't done yet, as the stack may not yet be completely empty, we we will have to repeat the above popping process, this time calculating the width using the length of the array instead.

Time Complexity: $$O(n)$$ as we need to iterate on each item at most twice. Once to add it to the stack, and once to remove it from the stack.

Space Complexity: $$O(n)$$ for our stack.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        # Here we will utilize a monotonic increasing stack, meaning everything
        # in the stack will be ordered by height from shortest to tallest. Any
        # incoming element shorter than the top of the stack will start our process
        # of removing items from the stack, allowing us to calculate the max area 
        # using the rectangle we pop.
        # Initialize a variable, max_area to track max area, and an empty stack.
        max_area = 0
        # stack will be of tuples, (left_bound, height)
        stack = []
        # loop through heights tracking index, i and height, h
        for i, h in enumerate(heights):
            # track left bound of our possible rectangle.
            left_bound = i
            # incoming height is smaller than top of the stack height.
            while stack and stack[-1][-1] > h:
                # pop top rectangle, tracking its position and height.
                i2, h2 = stack.pop()
                # calculate width, which will be the position of the incoming rectangle
                # since we know we can't extend past it right, and the value we
                # stored earlier as it's left bound.
                width = i-i2
                # calculate area
                area = width*h2
                # update max area
                max_area = max(max_area, area)
                # remember to track left bound, since we know incoming rectangle
                # is shorter, we know we can extend it further left, so instead of
                # storing its position, i, we can update left_bound position to the
                # index of the popped rectangle.
                left_bound = i2
            # store rectangle inside the stack, note again (left_bound, height)
            stack.append((left_bound,h))
        # since the stack won't necessarily be empty, we have to repeat the above
        # popping process. This time since we know we can extend to the end of 
        # the array, as their is nothing shorter, we can use len(heights) as
        # the right boundary.
        while stack:
            # get position and height
            i, h = stack.pop()
            # calculate width of rectangle
            width = len(heights) - i
            # calculate area of rectangle
            area = width*h
            # update max area.
            max_area = max(max_area, area)
        # Finally done, return max area.
        return max_area
```

</TabItem>
</Tabs>