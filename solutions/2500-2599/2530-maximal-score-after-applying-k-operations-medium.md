---
description: "Author: @wingkwong | https://leetcode.com/problems/maximal-score-after-applying-k-operations/"
tags: [Array, Greedy, Heap (Priority Queue)]
---

# 2530 - Maximal Score After Applying K Operations (Medium)

## Problem Link

https://leetcode.com/problems/maximal-score-after-applying-k-operations/

## Problem Statement

You are given a **0-indexed** integer array `nums` and an integer `k`. You have a **starting score** of `0`.

In one **operation**:

1. choose an index `i` such that `0 <= i < nums.length`,
2. increase your **score** by `nums[i]`, and
3. replace `nums[i]` with `ceil(nums[i] / 3)`.

Return \*the maximum possible **score** you can attain after applying **exactly\*** `k` _operations_.

The ceiling function `ceil(val)` is the least integer greater than or equal to `val`.

**Example 1:**

```
Input: nums = [10,10,10,10,10], k = 5
Output: 50
Explanation: Apply the operation to each array element exactly once. The final score is 10 + 10 + 10 + 10 + 10 = 50.
```

**Example 2:**

```
Input: nums = [1,10,3,3,3], k = 3
Output: 17
Explanation: You can do the following operations:
Operation 1: Select i = 1, so nums becomes [1,4,3,3,3]. Your score increases by 10.
Operation 2: Select i = 1, so nums becomes [1,2,3,3,3]. Your score increases by 4.
Operation 3: Select i = 2, so nums becomes [1,1,1,3,3]. Your score increases by 3.
The final score is 10 + 4 + 3 = 17.
```

**Constraints:**

- `1 <= nums.length, k <= 10^5`
- `1 <= nums[i] <= 10^9`

## Approach 1: Priority Queue

When you see a question asking you to find something maximum / minimum after `K` operations. It's a hint that this could be solved by priority queue.

In this question, it is easy to see that we should apply the operation on the largest number each time (i.e. greedy approach). If we just write a brute force solution, after each operation, we need to iterate `nums` again to find out the largest number which costs $O(n)$ where $n$ is the number of elements in `nums` and this happens $K$ times, which is not efficient.

To optimise the solution, we can apply priority queue / heap (in python) so that we could find the largest number efficiently, which takes $O(1)$ for finding the max number.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    long long maxKelements(vector<int>& nums, int k) {
        long long ans = 0;
        // we want to take the max one in each round
        priority_queue<int> pq(nums.begin(), nums.end());
        // perform k rounds
        while (k--) {
            // get the max one
            int t = pq.top();
            // pop it out
            pq.pop();
            // add to answer
            ans += t;
            // add the ceil value
            // ceil(x / y) = (x + y - 1) / y
            // ceil(t / 3) = (t + 3 - 1) / 3 = (t + 2) / 3
            pq.push((t + 2) / 3);
        }
        return ans;
    }
};
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@wingkwong"/>

```py
class Solution:
    def maxKelements(self, nums: List[int], k: int) -> int:
        res = 0
        # we want to take the max one in each round
        # create a max heap by pushing negative values
        mx_heap = [-num for num in nums]
        heapq.heapify(mx_heap)
        # perform k rounds
        while k > 0:
            k -= 1
            # get the max one (negative because of max-heap simulation)
            t = -heapq.heappop(mx_heap)
            # add to answer
            res += t
            # push the ceil value of t / 3 back into the heap
            # ceil(x / y) = (x + y - 1) / y
            # ceil(t / 3) = (t + 3 - 1) / 3 = (t + 2) / 3
            heapq.heappush(mx_heap, -((t + 2) // 3))
        return res
```

</TabItem>

</Tabs>
