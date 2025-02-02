---
description: 'Author: @wkw, @ganajayant, @skoden, @radojicic23 | https://leetcode.com/problems/two-sum/'
tags: [Array, Two Pointer, Hash Table]
---

# 0001 - Two Sum (Easy)

## Problem Link

https://leetcode.com/problems/two-sum/

## Problem Statement

Given an array of integers `nums` and an integer `target`, return _indices of the two numbers such that they add up to `target`_.

You may assume that each input would have _**exactly**_** one solution**, and you may not use the _same_ element twice.

You can return the answer in any order.

**Example 1:**

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

**Example 2:**

```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

**Example 3:**

```
Input: nums = [3,3], target = 6
Output: [0,1]
```

**Constraints:**

- `2 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- **Only one valid answer exists.**

**Follow-up:** Can you come up with an algorithm that is less than `O(n^2)` time complexity?

## Approach 1: Brute Force

Tthe goal is to find two numbers in an array that add up to a given target number. Since this is an easy problem, most of the time brute force solutions would work due to the loose constraints. However, this brute force solution gives $O(n^2)$ time complexity and $O(1)$ space complexity since it involves checking all possible pairs of numbers in the array and seeing if they add up to the target.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int n = (int) nums.size();
        for (int i = 0; i < n - 1; i++) {
            for (int j = i + 1; j < n; j++) {
                if (nums[i] + nums[j] == target) {
                    return {i, j};
                }
            }
        }
        return {-1, -1};
    }
};
```

</TabItem>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        n = len(nums)
        for i in range(n):
            for j in range(i + 1, n):
                if nums[i] + nums[j] == target:
                    return [i, j]
        return [-1, -1]
```

</TabItem>
<TabItem value="go" label="Go">
<SolutionAuthor name="@wkw"/>

```go
func twoSum(nums []int, target int) []int {
    n := len(nums)
    for i := 0; i < n; i++ {
        for j := i + 1; j < n; j++ {
            if nums[i] + nums[j] == target {
                return []int{i, j}
            }
        }
    }
    return []int{-1, -1}
}
```

</TabItem>
<TabItem value="java" label="Java">
<SolutionAuthor name="@ganajayant"/>

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++) {
            for (int j = 0; j < nums.length; j++) {
                if (i != j && nums[i] + nums[j] == target) {
                    return new int[]{i, j}
                }
            }
        }
        return new int[]{-1, -1};
    }
}
```

</TabItem>

<TabItem value="js" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
};
```

</TabItem>
</Tabs>

## Approach 2: Sorting and Two Pointer

Make a vector of pairs of the original vector elements and the indices of the elements in the original vector. Sort this new formed vector. Using two pointer approach, find the sum of the elements pointed by the left and right pointers. If this sum is less than the target increment the left pointer by one, if the sum is greater than the target decrement the right pointer by one, and if the sum is equal to the target return the positions of the elements in the original array. This solution gives $O(nlogn)$ time complexity and $O(n)$ space complexity.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@skoden" />

```cpp
class Solution {
public:
  vector<int> twoSum(vector<int>& nums, int target) {
    int n = (int)(nums.size());
    vector<pair<int, int>> pairs;
    for (int i = 0; i < n; i++) {
      pairs.push_back({nums[i], i});
    }
    sort(pairs.begin(), pairs.end());
    int left = 0, right = n - 1;
    vector<int> ans;
    while (left < right) {
      int sum = pairs[left].first + pairs[right].first;
      if (sum == target) {
        ans.push_back(pairs[left].second);
        ans.push_back(pairs[right].second);
        break;
      } else if (sum < target)
        left++;
      else
        right--;
    }
    return ans;
  }
};
```

</TabItem>
</Tabs>

## Approach 3: Hash Table

A better way to do it is using one-pass hash table approach. We iterate each element and insert it into the hash table. We also check if the complement already exists in the hash table or not. If so, we can return the answer immediately. This solution gives $O(n)$ time complexity and $O(n)$ space complexity.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int n = (int) nums.size();
        unordered_map<int, int> m;
        for (int i = 0; i < n; i++) {
            int complement = target - nums[i];
            if (m.count(complement)) {
                return {i, m[complement]};
            }
            m[nums[i]] = i;
        }
        return {-1, -1};
    }
};
```

</TabItem>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        n = len(nums)
        d = {}
        for i in range(n):
            complement = target - nums[i]
            if complement in d:
                return [i, d[complement]]
            d[nums[i]] = i
        return [-1, -1]
```

</TabItem>
<TabItem value="go" label="Go">
<SolutionAuthor name="@wkw"/>

```go
func twoSum(nums []int, target int) []int {
    n := len(nums)
    m := make(map[int]int)
    for i := 0; i < n; i++ {
        if j, ok := m[target - nums[i]]; ok {
            return []int{i, j}
        }
        m[nums[i]] = i
    }
    return []int{-1, -1}
}
```

</TabItem>
<TabItem value="java" label="Java">
<SolutionAuthor name="@ganajayant"/>

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            if (map.containsKey(target - nums[i])) {
                return new int[] { map.get(target - nums[i]), i };
            }
            map.put(nums[i], i);
        }
        return new int[]{-1, -1};
    }
}
```

</TabItem>

<TabItem value="javascript" label="JavaScript">
<SolutionAuthor name="@MithunPrabhu777"/>

```javascript
var twoSum = function (nums, target) {
  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];

    if (hashMap[difference] >= 0) return [hashMap[difference], i];

    hashMap[nums[i]] = i;
  }
};
```

</TabItem>

<TabItem value="rs" label="Rust">
<SolutionAuthor name="@wkw"/>

```rs
use std::collections::HashMap;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut m: HashMap<&i32, usize> = HashMap::new();
        let mut ans: Vec<i32> = vec![0;2];
        for (i, v) in nums.iter().enumerate() {
            if (m.contains_key(&(target - v))) {
                ans[0] = m[&(target - v)] as i32;
                ans[1] = i as i32;
                return ans;
            } else {
                m.insert(v, i);
            }
        }
        vec![]
    }
}
```

</TabItem>
</Tabs>
