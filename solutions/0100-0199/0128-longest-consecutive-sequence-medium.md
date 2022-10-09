---
description: 'Author: @tandrimasingha | https://leetcode.com/problems/longest-consecutive-sequence/'
---

<h2><a href="https://leetcode.com/problems/longest-consecutive-sequence/">128. Longest Consecutive Sequence</a></h2><h3>Medium</h3><hr><div><p>Given an unsorted array of integers <code>nums</code>, return <em>the length of the longest consecutive elements sequence.</em></p>

<p>You must write an algorithm that runs in&nbsp;<code>O(n)</code>&nbsp;time.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [100,4,200,1,3,2]
<strong>Output:</strong> 4
<strong>Explanation:</strong> The longest consecutive elements sequence is <code>[1, 2, 3, 4]</code>. Therefore its length is 4.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [0,3,7,2,5,8,4,6,0,1]
<strong>Output:</strong> 9
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>
</div>

**Follow up:** Could you solve it both recursively and iteratively?

## Approach 1: Sorting

We can simply sort the given array and compare consecutive elements. Following cases exists:

- nums[i-1]+1==nums[i]: This means the current element is consecutive to previous.
- nums[i-1]==nums[i]: We have found the same element as previous. Skip it, and see if we can still extend the sequence with next elements.
- None of above : We can't extend the sequence any further. Update longest to store longest formed streak till now and reset count.
<Tabs>
<TabItem value="c++" label="C++">
<SolutionAuthor name="@tandrimasingha"/>

```cpp
class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        if(nums.size()==0) return 0;
        sort(nums.begin(),nums.end());
        int count=1;
        int mx=0;
        for(int i=1;i<nums.size();i++)
        {
            if(nums[i-1]==nums[i]) continue;
            else if(nums[i-1]+1==nums[i])
                c++;
           else{
               mx=max(count,mx);
               count=1;
           }
        }
      
        return max(count,mx);
    }
};
```

Time Complexity : O(NlogN), where N is the number of elements in nums
                                       
Time Complexity : O(1), ignoring the space required by sorting algorithm
</Tabs>

## Approach 2: Using Hashset
	
Once we have inserted all the elements, we can just iterate over the hashset to find longest consecutive sequence involving the current element under iteration. This can simply be done by iterating over elements that are consecutive to num till we keep finding them in the set. Each time we will also delete those elements from set to ensure we only visit them once.

<Tabs>
<TabItem value="c++" label="c++">
<SolutionAuthor name="@tandrimasingha"/>

```cpp
int longestConsecutive(vector<int>& nums) {
	unordered_set<int> s(begin(nums), end(nums)); // inserting all elements into hashset
	int longest = 0;
	for(auto& num : s) {
		int cur_longest = 1;
		// find consecutive elements in the backward and forward direction from num
		for(int j = 1; s.count(num - j); j++) s.erase(num - j), cur_longest++;
		for(int j = 1; s.count(num + j); j++) s.erase(num + j), cur_longest++;
		longest = max(longest, cur_longest);  // update longest to hold longest consecutive sequence till now
	}
	return longest;
};
```
</TabItem>
</Tabs>
  
Time Complexity : O(N)
  
Space Complexity : O(N)
