---
description: 'Author: @wingkwong, @jit | https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/'
tags: [Array, Hash Table]
---

# 2610 - Convert an Array Into a 2D Array With Conditions (Medium) 

## Problem Link

https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/

## Problem Statement

You are given an integer array `nums`. You need to create a 2D array from `nums` satisfying the following conditions:

- The 2D array should contain **only** the elements of the array `nums`.
- Each row in the 2D array contains **distinct** integers.
- The number of rows in the 2D array should be **minimal**.

Return *the resulting array*. If there are multiple answers, return any of them.

**Note** that the 2D array can have a different number of elements on each row.

**Example 1:**

```
Input: nums = [1,3,4,1,2,3,1]
Output: [[1,3,4,2],[1,3],[1]]
Explanation: We can create a 2D array that contains the following rows:
- 1,3,4,2
- 1,3
- 1
All elements of nums were used, and each row of the 2D array contains distinct integers, so it is a valid answer.
It can be shown that we cannot have less than 3 rows in a valid array.
```

**Example 2:**

```
Input: nums = [1,2,3,4]
Output: [[4,3,2,1]]
Explanation: All elements of the array are distinct, so we can keep all of them in the first row of the 2D array.
```

**Constraints:**

- $1 <= nums.length <= 200$
- $1 <= nums[i] <= nums.length$

## Approach 1: Frequency Count

We can distribute the elements by frequency count. Taking $nums = [1,3,4,1,2,3,1]$ as an example, we can do the followings: 

- there are three 1s, we can put them into first three rows.
- there are one 2, we can put it into the first row.
- there are two 3s, we can put them into first two rows.
- there are one 4, we can put it into the first row.

As we can see, we need to distribute $K$ elements into first $K$ rows, which means we will need $max_freq$ rows in total. We can iterate $nums$ and check if the frequency count is greater than / equal to the target row or not. If so, we need to add a new row. Then we can push the element to the target row and increase the frequncy count.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<vector<int>> findMatrix(vector<int>& nums) {
        vector<vector<int>> ans;
        // or use vector<int> m(nums.size()) since we only need max_freq rows
        unordered_map<int, int> m;
        for (auto x : nums) {
            // we need a new row to store `x`
            if (m[x] >= ans.size()) ans.push_back({});
            // add `x` to the target row
            ans[m[x]].push_back(x);
            // increase its frequncy count
            m[x]++;
        }
        return ans;
    }
};
```

</TabItem>


<TabItem value="elixir" label="Elixir">
<SolutionAuthor name="@jit"/>

```elixir
@spec find_matrix(nums :: [integer]) :: [[integer]]
# Distribute elements by frequency count:
def find_matrix(nums) do
  cnts = nums |> Enum.frequencies() |> Enum.to_list()
  max_cnt = cnts |> Enum.map(&elem(&1, 1)) |> Enum.max()

  for cnt <- 1..max_cnt do
    cnts
    |> Enum.filter(fn {_elt, c} -> c >= cnt end)
    |> Enum.map(fn {elt, _c} -> elt end)
  end
end
```

</TabItem>
</Tabs>