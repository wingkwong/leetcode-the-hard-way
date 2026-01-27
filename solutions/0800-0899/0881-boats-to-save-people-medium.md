---
description: 'Author: @wkw, @radojicic23 | https://leetcode.com/problems/boats-to-save-people/'
---

# 0881 - Boats to Save People (Medium)

## Problem Link

https://leetcode.com/problems/boats-to-save-people/

## Problem Statement

You are given an array `people` where `people[i]` is the weight of the `ith` person, and an **infinite number of boats** where each boat can carry a maximum weight of `limit`. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most `limit`.

Return _the minimum number of boats to carry every given person_.

**Example 1:**

```
Input: people = [1,2], limit = 3
Output: 1
Explanation: 1 boat (1, 2)
```

**Example 2:**

```
Input: people = [3,2,2,1], limit = 3
Output: 3
Explanation: 3 boats (1, 2), (2) and (3)
```

**Example 3:**

```
Input: people = [3,5,3,4], limit = 5
Output: 4
Explanation: 4 boats (3), (3), (4), (5)
```

**Constraints:**

- `1 <= people.length <= 5 * 10^4`
- `1 <= people[i] <= limit <= 3 * 10^4`

## Approach 1: Greedy

Let's sort the input. We know that the maximum weight is at most $$limit$$. The best way to choose the maximum weight first. Then we check if we could include one more (the minimum one). We can use two pointers to track the minimum one and the maximum one.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int numRescueBoats(vector<int>& people, int limit) {
        // sort the input so that we can use two pointers from both side
        sort(people.begin(), people.end());
        // init variables
        int n = people.size(), ans = 0, i = 0, j = n - 1;
        // do the following logic until both pointer meets each other
        while (i <= j) {
            // first we pick the maximum none
            int pick = people[j];
            // we check the remaining capacity
            int left = limit - pick;
            // if we can include the minimum one, then take it as well
            if (people[i] <= left) {
                // need one boat for i-th person and j-th person
                ans++;
                // increase both pointer
                i++, j--;
            } else {
                // need one boat for the j-th person
                ans++;
                // move the max pointer
                j--;
            }
        }
        return ans;
    }
};
```

Once we get the idea, we can further refactor the solution.

```cpp
class Solution {
public:
    int numRescueBoats(vector<int>& people, int limit) {
        sort(people.begin(), people.end());
        int n = people.size(), ans = 0, i = 0, j = n - 1;
        while (i <= j) {
            // move the min pointer only i-th person is included
            i += people[j] + people[i] <= limit;
            // need one boat for each round
            // move the max pointer as it is always chosen
            ans++, j--;
        }
        return ans;
    }
};
```

</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@radojicic23"/>

```python
class Solution:
    def numRescueBoats(self, people: List[int], limit: int) -> int:
        people.sort()
        l, r = 0, len(people) - 1
        res = 0

        while l <= r:
            if people[l] + people[r] <= limit:
                res += 1
                l += 1
                r -= 1
            else:
                res += 1
                r -= 1
        return res
```

</TabItem>

<TabItem value="javascript" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```javascript
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  people.sort(function (a, b) {
    return a - b;
  });
  let l = 0;
  let r = people.length - 1;
  let res = 0;
  while (l <= r) {
    if (people[l] + people[r] <= limit) {
      res += 1;
      l += 1;
      r -= 1;
    } else {
      res += 1;
      r -= 1;
    }
  }
  return res;
};
```

</TabItem>
</Tabs>
