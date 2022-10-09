---
title: 'Prefix Sum'
description: 'Prefix Sum is the sums of prefixes of the input sequence'
hide_table_of_contents: true
keywords:
  - leetcode
  - tutorial
  - prefix sum
---

<TutorialAuthors names="@wingkwong"/>

## Overview

Prefix Sum is the sums of prefixes of the input sequence. Let's say the input $a$ is $[1, 2, 3, 4, 5]$. The prefix sum array $pref$ would be $[1, 3, 6, 10, 15]$ which can be calculated as follows:

$$$
pref[0] = a[0] \\
pref[1] = a[0] + a[1] \\
pref[2] = a[0] + a[1] + a[2] \\
...
$$$

We can notice that $pref[i]$ is the previous value $pref[i - 1]$ plus the input $a[i]$ starting from $i = 1$, which can be illrustrated as follows:

$$$
pref[0] = a[0] \\
pref[1] = pref[0] + a[1] \\
pref[2] = pref[1] + a[2] \\
...
$$$

To generalise, we have 

$$$
  pref[i] =
\begin{cases}
a[0],  & \text{if $i$ is 0} \\
pref[i - 1] + a[i], & \text{if $i$ >= 1}
\end{cases}
$$$

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
vector<int> generatePrefixSum(vector<int>& a) {
    int n = a.size();
    vector<int> pref(n);
    pref[0] = a[0];
    for (int i = 1; i < n; i++) pref[i] = pref[i - 1] + a[i];
    return pref;
}
```
</TabItem>
</Tabs>


### Example : [1480 -Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array/)

```
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0] ... nums[i]).
Return the running sum of nums.

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4]
```

Let's start with a brute force solution, we iterate each element $a[i]$ and we iterate from $j = [0 .. i]$ to add $a[j]$ to $sum$. This solution is acceptable but it is slow as we have two for-loops here.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        int n = nums.size();
        vector<int> ans(n);
        for (int i = 0; i < n; i++) {
            int sum = 0;
            for (int j = 0; j <= i; j++) {
                sum += nums[j];
            }
            ans[i] = sum;
        }
        return ans;
    }
};
```
</TabItem>
</Tabs>

However, if we utilise the idea of Prefix sum, we know the result at some point has been calculated. Therefore, we can just do it in a $O(n)$ way.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<int> generatePrefixSum(vector<int>& a) {
        int n = a.size();
        vector<int> pref(n);
        pref[0] = a[0];
        for (int i = 1; i < n; i++) pref[i] = pref[i - 1] + a[i];
        return pref;
    }
    vector<int> runningSum(vector<int>& nums) {
        return generatePrefixSum(nums);
    }
};
```
</TabItem>
</Tabs>

As we don't actually need $pref$ for further process in this question, we can just write it inline instead.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        for (int i = 1; i < nums.size(); i++) {
            nums[i] += nums[i - 1];
        }
        return nums;
    }
};
```
</TabItem>
</Tabs>

Prefix Sum is useful when we want to find the sum of all elements in a given range or something related to subarray problems. Besides, it doesn't have to be sum. We can make it like product ($pref[i] = pref[i - 1] * a[i]$) or even XOR ($pref[i] = pref[i - 1] \oplus a[i]$). 

### Example: [0303 - Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/)

```
Given an integer array nums, handle multiple queries of the following type:

Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
Implement the NumArray class:

NumArray(int[] nums) Initializes the object with the integer array nums.
int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).

Input
["NumArray", "sumRange", "sumRange", "sumRange"]
[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
Output
[null, 1, -1, -3]

Explanation
NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
```

Sometimes we may pad a zero as the first element in prefix sum as we want to exclude the first element. For example, let's say we have an input $[1, 2, 3, 4, 5]$, the prefix sum array would be $[0, 1, 3, 6, 10, 15]$. In this case, we can write as follows:

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
vector<int> generatePrefixSum(vector<int>& a) {
    int n = a.size();
    vector<int> pref(n + 1);
    for (int i = 0; i < n; i++) pref[i + 1] = pref[i] + a[i];
    return pref;
}
```
</TabItem>
</Tabs>

Given $l$ and $r$, if we want to calculate the sum of the elements of $nums$ between $l$ and $r$ inclusive. The answer is simply $pref[r + 1] - pref[l]$. 

Let's say we have an input $[a,b,c,d]$ and $pref$ would be $[0, a, a+b, a+b+c, a+b+c+d]$. Supposing we want to calculate the sum for the last three elements (i.e. $l = 1, r = 3$), it is easy to see the answer is $b + c + d$. 

If we use $pref$ to calculate, that would be 

$$$
rangeSum(l, r) = pref[r + 1] - pref[l] \\
rangeSum(1, 3) = pref[4] - pref[1] \\
= (a + b + c + d) - (a) \\ 
= b + c + d
$$$

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class NumArray {
public:
    vector<int> pref;
    vector<int> generatePrefixSum(vector<int>& a) {
        int n = a.size();
        vector<int> pref(n + 1);
        for (int i = 0; i < n; i++) pref[i + 1] = pref[i] + a[i];
        return pref;
    }

    
    NumArray(vector<int>& nums) {
        pref.resize(nums.size() + 1);
        pref = generatePrefixSum(nums);
    }
    
    int sumRange(int left, int right) {
        return pref[right + 1] - pref[left];
    }
};
```

</TabItem>
</Tabs>

export const suggestedProblems = [
  {
    "problemName": "1480 - Running Sum of 1d Array",
    "difficulty": "Easy",
    "leetCodeLink": "https://leetcode.com/problems/running-sum-of-1d-array",
    "solutionLink": "../../solutions/1400-1499/running-sum-of-1d-array-easy"
  },
  {
    "problemName": "0303 - Range Sum Query - Immutable",
    "difficulty": "Easy",
    "leetCodeLink": "https://leetcode.com/problems/range-sum-query-immutable/",
    "solutionLink": ""
  },
  {
    "problemName": "1004 - Max Consecutive Ones III",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/max-consecutive-ones-iii/",
    "solutionLink": "../../solutions/1000-1099/max-consecutive-ones-iii-medium"
  },
  {
    "problemName": "0974 - Subarray Sums Divisible by K",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/subarray-sums-divisible-by-k/",
    "solutionLink": "../../solutions/0900-0999/subarray-sums-divisible-by-k-medium"
  },
]

<Table title="Suggested Problems" data={suggestedProblems} />