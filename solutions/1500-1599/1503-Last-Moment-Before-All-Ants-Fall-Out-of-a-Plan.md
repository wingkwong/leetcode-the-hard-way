---
description: 'Author: @wingkwong | https://leetcode.com/problems/last-moment-before-all-ants-fall-out-of-a-plank/'
---

# 1503 - Last Moment Before All Ants Fall Out of a Plank (Medium)

## Problem Link

https://leetcode.com/problems/last-moment-before-all-ants-fall-out-of-a-plank/

## Problem Statement

We have a wooden plank of the length n units. Some ants are walking on the plank, each ant moves with a speed of 1 unit per second. Some of the ants move to the left, the other move to the right.

When two ants moving in two different directions meet at some point, they change their directions and continue moving again. Assume changing directions does not take any additional time.

When an ant reaches one end of the plank at a time t, it falls out of the plank immediately.

Given an integer n and two integer arrays left and right, the positions of the ants moving to the left and the right, return the moment when the last ant(s) fall out of the plank.

**Example 1:**

```
https://assets.leetcode.com/uploads/2020/06/17/ants.jpg

Input: n = 4, left = [4,3], right = [0,1]
Output: 4
Explanation: In the image above:
-The ant at index 0 is named A and going to the right.
-The ant at index 1 is named B and going to the right.
-The ant at index 3 is named C and going to the left.
-The ant at index 4 is named D and going to the left.
The last moment when an ant was on the plank is t = 4 seconds. After that, it falls immediately out of the plank. (i.e., We can say that at t = 4.0000000001, there are no ants on the plank).
```

**Example 2:**

```
https://assets.leetcode.com/uploads/2020/06/17/ants2.jpg

Input: n = 7, left = [], right = [0,1,2,3,4,5,6,7]
Output: 7
Explanation: All ants are going to the right, the ant at index 0 needs 7 seconds to fall.
```

**Example 3:**

```
https://assets.leetcode.com/uploads/2020/06/17/ants3.jpg

Input: n = 7, left = [0,1,2,3,4,5,6,7], right = []
Output: 7
Explanation: All ants are going to the left, the ant at index 7 needs 7 seconds to fall.
```

**Constraints:**

* 1 <= n <= 104
* 0 <= left.length <= n + 1
* 0 <= left[i] <= n
* 0 <= right.length <= n + 1
* 0 <= right[i] <= n
* 1 <= left.length + right.length <= n + 1
* All values of left and right are unique, and each value can appear **only in one** of the two arrays.

## Approach 1: <One-liner>

// Your explanation goes here or you can add it to your code

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@WaqarTabish2807"/>

```cpp
class Solution {
public:
    int getLastMoment(int n, vector<int>& l, vector<int>& r) {
	return max(l.empty() ? 0 : *max_element(l.begin(), l.end()),
			   r.empty() ? 0 : n - *min_element(r.begin(), r.end()));
    }
};
```

</TabItem>
<TabItem value="py" label="Python">
<SolutionAuthor name="@WaqarTabish2807"/>

```py
class Solution:
    def getLastMoment(self, n: int, left: List[int], right: List[int]) -> int:
        return max(max(left, default=0), n - min(right, default=n))
```

</TabItem>
<TabItem value="go" label="Go">
<SolutionAuthor name="@wingkwong"/>

```go
func getLastMoment(n int, left []int, right []int) int {
    var res int
    
    for _, l := range left {
        res = max(res, l)
    }
    
    for _, r := range right {
        res = max(res, n - r)
    }
    
    return res
}


func max(a, b int) int {
    if a > b {
        return a
    }
    
    return b
}

```

</TabItem>
</Tabs>

## Approach 2: 

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@WaqarTabish2807"/>

```cpp
class Solution {
public:
int getLastMoment(int n, vector& left, vector& right) {

    if(left.size()==0)
        return (n-*min_element(right.begin(),right.end()));
    else if(right.size()==0)
        return *max_element(left.begin(),left.end());
    else
        return max(n-*min_element(right.begin(),right.end()),*max_element(left.begin(),left.end()));
    }
};
```

</TabItem>
<TabItem value="py" label="Python">
<SolutionAuthor name="@WaqarTabish2807"/>

```py
class Solution:
    def getLastMoment(self, n: int, left: List[int], right: List[int]) -> int:
		# make sure left and right are not empty without changing the answer
        left.append(0)
        right.append(n)        
        
        return max(max(left), n - min(right))
```

</TabItem>
</Tabs>
