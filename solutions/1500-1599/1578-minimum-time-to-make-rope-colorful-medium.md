---
description: 'Author: @wingkwong | https://leetcode.com/problems/minimum-time-to-make-rope-colorful/'
tags: [Array, String, Dynamic Programming, Greedy]
---

# 1578 - Minimum Time to Make Rope Colorful (Medium) 

## Problem Link

https://leetcode.com/problems/minimum-time-to-make-rope-colorful/

## Problem Statement

Alice has `n` balloons arranged on a rope. You are given a **0-indexed** string `colors` where `colors[i]` is the color of the `ith` balloon.

Alice wants the rope to be **colorful**. She does not want **two consecutive balloons** to be of the same color, so she asks Bob for help. Bob can remove some balloons from the rope to make it **colorful**. You are given a **0-indexed** integer array `neededTime` where `neededTime[i]` is the time (in seconds) that Bob needs to remove the `ith` balloon from the rope.

Return *the **minimum time** Bob needs to make the rope **colorful***.

**Example 1:**

```
Input: colors = "abaac", neededTime = [1,2,3,4,5]
Output: 3
Explanation: In the above image, 'a' is blue, 'b' is red, and 'c' is green.
Bob can remove the blue balloon at index 2. This takes 3 seconds.
There are no longer two consecutive balloons of the same color. Total time = 3.
```

**Example 2:**

```
Input: colors = "abc", neededTime = [1,2,3]
Output: 0
Explanation: The rope is already colorful. Bob does not need to remove any balloons from the rope.
```

**Example 3:**

```
Input: colors = "aabaa", neededTime = [1,2,3,4,1]
Output: 2
Explanation: Bob will remove the ballons at indices 0 and 4. Each ballon takes 1 second to remove.
There are no longer two consecutive balloons of the same color. Total time = 1 + 1 = 2.
```

**Constraints:**

- `n == colors.length == neededTime.length`
- `1 <= n <= 10^5`
- `1 <= neededTime[i] <= 10^4`
- `colors` contains only lowercase English letters.

## Approach 1: Greedy

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
// Time Complexity: O(n)
// Space Complexity: O(1)
class Solution {
public:
    // intuition: 
    // ---------------
    // if there are consecutive balloons with the same color, 
    // we want to keep the one with maximum neededTime and remove others 
    
    // if there are 2 balloons with different colors, ans = 0 as it is colorful
    // if there are 2 balloons with same color, ans = min(neededTime[0], neededTime[1])
    // if there are 3 consecutive balloons with same color, ans = sum(neededTime[0 .. 2]) - max(neededTime[0 .. 2])
    // if there are N consecutive balloons with same color, ans = sum(neededTime[0 .. n - 1]) - max(neededTime[0 .. n - 1])
    // we don't need to calculate the sum and subtract the max though. instead, we can either
    // 1. update neededTime in place to the max of neededTime[i] and neededTime[i - 1] (shown in below solution) or 
    // 2. store the current max time in a variable
    // why? let's say colors = "aaa" and neededTime = [1,2,1]
    // we first compare neededTime[0] and neededTime[1] and decide to remove the first balloon (neededTime[0] < neededTime[1])
    // now colors = "_aa" and neededTime = [_,2,1] and the current max time is 2
    // then compare neededTime[1] and neededTime[2] and decide to remove the last balloon, (neededTime[2] < neededTime[1])
    // now colors = "_a_" and neededTime = [_,2,_]. we remove all balloons but the one with maximum neededTime
    int minCost(string colors, vector<int>& neededTime) {
        int ans = 0, n = colors.size();
        for (int i = 1; i < n; i++) {
            // if the i-th balloon has the same color as (i - 1)th one
            // e.g. aba[a]c and i = 3 (0-based)
            if (colors[i] == colors[i - 1]) {
                // then we remove the one with less time
                // e.g. in above example, we remove the balloon at index 2 
                // with neededTime[2] since neededTime[2] < neededTime[3] 
                ans += min(neededTime[i], neededTime[i - 1]);
                // update the max neededTime inplace 
                // or alternatively you can store it in a variable
                neededTime[i] = max(neededTime[i], neededTime[i - 1]);
            }
        }
        return ans;
    }
};
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@wingkwong"/>

```py
# Time Complexity: O(n)
# Space Complexity: O(1)
class Solution:
    # intuition: 
    # ---------------
    # if there are consecutive balloons with the same color, 
    # we want to keep the one with maximum neededTime and remove others 
    
    # if there are 2 balloons with different colors, ans = 0 as it is colorful
    # if there are 2 balloons with same color, ans = min(neededTime[0], neededTime[1])
    # if there are 3 consecutive balloons with same color, ans = sum(neededTime[0 .. 2]) - max(neededTime[0 .. 2])
    # if there are N consecutive balloons with same color, ans = sum(neededTime[0 .. n - 1]) - max(neededTime[0 .. n - 1])
    # we don't need to calculate the sum and subtract the max though. instead, we can either
    # 1. update neededTime in place to the max of neededTime[i] and neededTime[i - 1] (shown in below solution) or 
    # 2. store the current max time in a variable
    # why? let's say colors = "aaa" and neededTime = [1,2,1]
    # we first compare neededTime[0] and neededTime[1] and decide to remove the first balloon (neededTime[0] < neededTime[1])
    # now colors = "_aa" and neededTime = [_,2,1] and the current max time is 2
    # then compare neededTime[1] and neededTime[2] and decide to remove the last balloon, (neededTime[2] < neededTime[1])
    # now colors = "_a_" and neededTime = [_,2,_]. we remove all balloons but the one with maximum neededTime
    def minCost(self, colors: str, neededTime: List[int]) -> int:
        ans = 0
        for i in range(1, len(colors)):
            # if the i-th balloon has the same color as (i - 1)th one
            # e.g. aba[a]c and i = 3 (0-based)
            if colors[i] == colors[i - 1]:
                # then we remove the one with less time
                # e.g. in above example, we remove the balloon at index 2 
                # with neededTime[2] since neededTime[2] < neededTime[3] 
                ans += min(neededTime[i], neededTime[i - 1])
                # update the max neededTime inplace 
                # or alternatively you can store it in a variable
                neededTime[i] = max(neededTime[i], neededTime[i - 1])
        return ans
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@wingkwong"/>

```java
// Time Complexity: O(n)
// Space Complexity: O(1)
class Solution {
    // intuition: 
    // ---------------
    // if there are consecutive balloons with the same color, 
    // we want to keep the one with maximum neededTime and remove others 
    
    // if there are 2 balloons with different colors, ans = 0 as it is colorful
    // if there are 2 balloons with same color, ans = min(neededTime[0], neededTime[1])
    // if there are 3 consecutive balloons with same color, ans = sum(neededTime[0 .. 2]) - max(neededTime[0 .. 2])
    // if there are N consecutive balloons with same color, ans = sum(neededTime[0 .. n - 1]) - max(neededTime[0 .. n - 1])
    // we don't need to calculate the sum and subtract the max though. instead, we can either
    // 1. update neededTime in place to the max of neededTime[i] and neededTime[i - 1] (shown in below solution) or 
    // 2. store the current max time in a variable
    // why? let's say colors = "aaa" and neededTime = [1,2,1]
    // we first compare neededTime[0] and neededTime[1] and decide to remove the first balloon (neededTime[0] < neededTime[1])
    // now colors = "_aa" and neededTime = [_,2,1] and the current max time is 2
    // then compare neededTime[1] and neededTime[2] and decide to remove the last balloon, (neededTime[2] < neededTime[1])
    // now colors = "_a_" and neededTime = [_,2,_]. we remove all balloons but the one with maximum neededTime
    public int minCost(String colors, int[] neededTime) {
        int ans = 0, n = colors.length();
        for (int i = 1; i < n; i++) {
            // if the i-th balloon has the same color as (i - 1)th one
            // e.g. aba[a]c and i = 3 (0-based)
            if (colors.charAt(i) == colors.charAt(i - 1)) {
                // then we remove the one with less time
                // e.g. in above example, we remove the balloon at index 2 
                // with neededTime[2] since neededTime[2] < neededTime[3] 
                ans += Math.min(neededTime[i], neededTime[i - 1]);
                // update the max neededTime inplace 
                // or alternatively you can store it in a variable
                neededTime[i] = Math.max(neededTime[i], neededTime[i - 1]);
            }
        }
        return ans;
    }
}
```

</TabItem>
</Tabs>