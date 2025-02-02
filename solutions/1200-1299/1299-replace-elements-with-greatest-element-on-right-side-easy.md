---
description: 'Author: @ColeB2 | https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/'
tags: [Array]
---

# 1299 - Replace Elements with Greatest Element on Right Side

## Problem Link

https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/

## Problem Statement

Given an array `arr`, replace every element in that array with the greatest element among the elements to its right, and replace the last element with `-1`.

After doing so, return the array.

**Example 1:**

```
Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
Explanation:
- index 0 --> the greatest element to the right of index 0 is index 1 (18).
- index 1 --> the greatest element to the right of index 1 is index 4 (6).
- index 2 --> the greatest element to the right of index 2 is index 4 (6).
- index 3 --> the greatest element to the right of index 3 is index 4 (6).
- index 4 --> the greatest element to the right of index 4 is index 5 (1).
- index 5 --> there are no elements to the right of index 5, so we put -1.
```

**Example 2:**

```
Input: arr = [400]
Output: [-1]
Explanation: There are no elements to the right of index 0.
```

**Constraints:**

- `1 <= arr.length <= 10^4`
- `1 <= arr[i] <= 10^5`

## Approach 1: Iterate Backwards

By initializing a $$greatest$$ variable, which tracks the greatest number found so far, we can iterate backwards, and store the current number in a $$temp$$ variable. From there all we need to do is update the current position in the array with the value from our $$greatest$$ variable, update the greatest variable with the larger of $$greatest$$ and $$temp$$ and continue.

Time Complexity: $$O(n)$$. Where $$n$$ is the number of numbers in $$arr$$. We perform a single pass, backwards.

Space Complexity: $$O(1)$$, we only need to track variables throughout the algorithm.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        # initialize a greatest variable, to track greatest number found so far.
        greatest = -1
        # iterate the array, arr, backwards.
        for i in range(len(arr) - 1, -1, -1):
            # set the temp variable, to the current value of the arr[i].
            # set current value of the arr, arr[i] to the greatest.
            temp, arr[i] = arr[i], greatest
            # update our greatest variable.
            greatest = max(greatest, temp)
        return arr
```

</TabItem>
</Tabs>
