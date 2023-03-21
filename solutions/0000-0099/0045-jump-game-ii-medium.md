---
description: 'Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/jump-game-ii/'
tags: [Array, Dynamic Programming, Greedy]
---

# 0045 - Jump Game II (Medium) 

## Problem Link

https://leetcode.com/problems/jump-game-ii/

## Problem Statement

You are given a **0-indexed** array of integers `nums` of length `n`. You are initially positioned at `nums[0]`.

Each element `nums[i]` represents the maximum length of a forward jump from index `i`. In other words, if you are at `nums[i]`, you can jump to any `nums[i + j]` where:

- `0 <= j <= nums[i]` and
- `i + j < n`

Return *the minimum number of jumps to reach*`nums[n - 1]`. The test cases are generated such that you can reach `nums[n - 1]`.

**Example 1:**

```
Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
```

**Example 2:**

```
Input: nums = [2,3,0,1,4]
Output: 2
```

**Constraints:**

- `1 <= nums.length <= 10^4`
- `0 <= nums[i] <= 1000`

## Approach 1: BFS

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
// intuition:
// we can image the input as graph.
// in example 1, starting from the root, we can reach the 2nd node and 3rd node
// from the 2nd node, we can reach 3rd, 4th, and 5th
// from the 3rd node, we can reach 4th
// from the 4th node, we can reach 5th
// from the 5th node, it is the desination, we don't need to jump
// here we can put those on different level, i.e.
// lv1: 2 
// lv2: 1 3
// lv3: 1 4
// each level can be reachable from the previous level starting from 2nd level
// each level contains the possible length of jump
// the minimum number of jumps is the jump required to make from level 1

class Solution {
public:
    int jump(vector<int>& nums) {
        // cur_end: the ending index of the current level
        // nxt_end: the ending index of the next level
        int n = nums.size(), cur_end = 0, nxt_end = 0, steps = 0;
        for (int i = 0; i < n; i++) {
            // if the current index is out of the current level, 
            // we add 1 step because we are going to the next level
            if (i > cur_end) steps += 1, cur_end = nxt_end;
            // update nxt_end - take the max index
            nxt_end = max(nxt_end, i + nums[i]);
        }
        return steps;
    }
};
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@wingkwong"/>

```py
# intuition:
# we can image the input as graph.
# in example 1, starting from the root, we can reach the 2nd node and 3rd node
# from the 2nd node, we can reach 3rd, 4th, and 5th
# from the 3rd node, we can reach 4th
# from the 4th node, we can reach 5th
# from the 5th node, it is the desination, we don't need to jump
# here we can put those on different level, i.e.
# lv1: 2 
# lv2: 1 3
# lv3: 1 4
# each level can be reachable from the previous level starting from 2nd level
# each level contains the possible length of jump
# the minimum number of jumps is the jump required to make from level 1


class Solution:
    def jump(self, nums: List[int]) -> int:
        n = len(nums)
		# cur_end: the ending index of the current level
		# nxt_end: the ending index of the next level
        cur_end, nxt_end = 0, 0
        steps = 0
        for i in range(n):
			# if the current index is out of the current level, 
			# we add 1 step because we are going to the next level
            if i > cur_end:
                steps += 1
                cur_end = nxt_end
            # update nxt_end - take the max index
            nxt_end = max(nxt_end, i + nums[i])
        return steps
```

</TabItem>

<TabItem value="js" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let steps = 0;
    let currEnd = 0, maxEnd = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > currEnd) {
            steps++;
            currEnd = maxEnd;
        }
        maxEnd = Math.max(maxEnd, i + nums[i]);
    }
    return steps;
};
```

</TabItem>
</Tabs>
