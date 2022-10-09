---
title: 'Binary Search'
description: 'Binary search is the searching strategy that reduces the search space by half every iteration until you have found the target.'
hide_table_of_contents: false
keywords:
  - leetcode
  - tutorial
  - binary search
  - algorithm
---

import TutorialAuthors from '@site/src/components/TutorialAuthors';

<TutorialAuthors names="@heiheihang, @wingkwong"/>

## Overview

We have all played a game to guess a number from 1 to 100. The optimal approach to this game is actually binary search. Binary search is the searching strategy that reduces the search space by half every iteration until you have found the target.

Let's look at the most basic form of binary search:

## Example: [0704. Binary Search](https://leetcode.com/problems/binary-search/)

> Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.
>
> You must write an algorithm with `O(log n)` runtime complexity.

For example, given the sorted input:

```python
nums = [-1,0,3,5,9,12], target = 9
```

The index of the element 9 is 4. We can use the following template to find the target

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@heiheihang"/>

```python
def binarySearch(nums, target):
    lp, rp = 0, len(nums) - 1
    while (lp <= rp):
        mid = (lp + rp) // 2
        if (nums[mid] == target):
            return mid
        elif (nums[mid] < target):
            lp = mid + 1
        else:
            rp = mid - 1
    return -1 
```
</TabItem>
</Tabs>

There can be very challenging questions using binary search, but we should focus on the basic application first.

## Tips

1. When the input is sorted, it's probably a hint to use binary search.
2. When you need to find the first / last index of something, then it may be another hint to use binary search (as index is sorted).
3. When initialising the boundary, we may think about the possible range (sometimes $r$ may not necessarily be the max of the constraint
4. In while condition, you may see some people write $while (l < r)$ , $while (r > l)$,  $while (l <= r)$ , or $while (l >= r)$.  either one works depending on how to write the logic - just personal preference. See [here](https://stackoverflow.com/questions/35613574/when-to-use-in-binary-search-condition) for more.
5. Think about the mid - if there are even elements, should we pick the left or the right mid? e.g. [1,2,3,4] like choosing $2$ or $3$?
6. Think about how to shrink - if $mid$ is never be the answer, then we can exclude it ($l = m + 1$ / $r = m - 1$).
7. If you are using C++, most people use $l + (r - l) / 2$ to avoid integer overflow problem. Let's say $l$ & $r$ are large enough like ~INT_MAX, when u sum them up, it causes overflow. 

    We know that $m$ is actually somewhere in between $l$ and $r$ so let $m = l + x$ where $x$ is an arbitrary value. Since we know that $m = (l + r) / 2$, we can substitute to have the following
    $$$
        l + x = (l + r) / 2 \\
        x = (l + r) / 2 - l \\
        x * 2 = (l + r) - 2 * l \\
        x * 2 = (r - l)  \\
        x = (r - l) / 2 \\
    $$$
    so putting x back to the first equation, we would have
    $$$
    m = l + x \\
    m = l + (r - l) / 2
    $$$


export const suggestedProblems = [
  {
    "problemName": "0704 - Binary Search",
    "difficulty": "Easy",
    "leetCodeLink": "https://leetcode.com/problems/binary-search/",
    "solutionLink": "../../solutions/0700-0799/binary-search-easy"
  },
  {
    "problemName": "0153 - Find Minimum in Rotated Sorted Array",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
    "solutionLink": ""
  },
  {
    "problemName": "0154 - Find Minimum in Rotated Sorted Array II",
    "difficulty": "Hard",
    "leetCodeLink": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/",
    "solutionLink": ""
  },
  {
    "problemName": "0162 - Find Peak Element",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/find-peak-element/",
    "solutionLink": ""
  }
]

<Table title="Suggested Problems" data={suggestedProblems} />