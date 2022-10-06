---
description: 'Author: @wingkwong, @vigneshshiv | https://leetcode.com/problems/subsets/'
---

# 0078 - Subsets (Medium)

## Problem Link

https://leetcode.com/problems/subsets/

## Problem Statement

Given an integer array `nums` of **unique** elements, return _all possible subsets (the power set)_.

The solution set **must not** contain duplicate subsets. Return the solution in **any order**.

**Example 1:**

```
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
```

**Example 2:**

```
Input: nums = [0]
Output: [[],[0]] 
```

**Constraints:**

* `1 <= nums.length <= 10`
* `-10 <= nums[i] <= 10`
* All the numbers of `nums` are **unique**.

## Approach 1: Bit  Manipulation

We can try all the possible combinations of the numbers. For each number there are only two options - you either take the number or not. If the bit is set as 1, then it means this number needs to be taken. If the bit is set as 0, we don't take this number.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<vector<int>> subsets(vector<int>& nums) {
        int n = nums.size();
        // number of subsets for n elements would be 2 ^ n
        // because for each element, you can choose to take it or not
        // if take = 1, don't take = 0, then we can use bit manipulation 
        int p = 1 << n; // 1 * 2 ^ n
        vector<vector<int>> ans;
        for(int i = 0; i < p; i++){
            vector<int> t; 
            for(int j = 0; j < n; j++){
               if((1 << j) & i) t.emplace_back(nums[j]); 
            }
            ans.emplace_back(t);
        }
        return ans;
    }
};
```
</TabItem>
</Tabs>

## Approach 2: Backtracking

Standard [Backtracking](../../tutorials/basic-topics/backtracking) problem.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    void backtrack(vector<vector<int>>& ans, vector<int>& tmp, vector<int>& nums, int start) {
        ans.push_back(tmp);    
        for(int i = start; i < nums.size(); i++) {
            tmp.push_back(nums[i]);
            backtrack(ans, tmp, nums, i + 1);
            tmp.pop_back();
        }
    }
    
    vector<vector<int>> subsets(vector<int>& nums) {
        vector<vector<int>> ans;
        vector<int> tmp;
        sort(nums.begin(), nums.end());
        backtrack(ans, tmp, nums,  0);
        return ans;
    }
};
```
</TabItem>

<TabItem value="java" label="java">
<SolutionAuthor name="@vigneshshiv"/>

```java
// n - # of subsets
// Time complexity: O(n * 2^n)
// Space complexity: O(n * 2^n), where n is space taken by each subset, 2^n is the total subset
class Solution {
    
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> subsets = new ArrayList<>();
        subsetsBacktrack(subsets, new ArrayList<>(), nums, 0);
        return subsets;
    }
    
    // Input: nums - [1, 2], idx 0
    private void subsetsBacktrack(List<List<Integer>> subsets, List<Integer> sets, int[] nums, int idx) {
        // index 0, [] added to result { [] }
        // index 1, { [], [1] }
        // index 2, { [], [1], [1, 2] } - index 2 is out of range, so it won't enter into loop
        subsets.add(new ArrayList<>(sets));
        for (int i = idx; i < nums.length; i++) {
            // index 0, sets add [1]
            // index 1, sets add, [1, 2]
            /* 
             * index 1, (actually index 0 call stack), so it's add [2] in sets
             * So, it calls subsets again and it to result set
             * Finally, result set is like - { [], [1], [1, 2], [2] }
             */
            sets.add(nums[i]);
            // index 0 - calling subsets - { [] }, sets - [1], index - 1
            // index 1 - calling subsets - { [], [1] }, sets - [1, 2], index 2
            subsetsBacktrack(subsets, sets, nums, i + 1);
            // index 1, sets removed it's last element 2, so sets [1], for loops end with 1
            // index 0, sets removed it's last element 1, so sets [], it can continue with index 1
            sets.remove(sets.size() - 1);
        }
    }
}
```
</TabItem>
</Tabs>

## Approach 3: Iterative

<Tabs>
<TabItem value="java" label="java">
<SolutionAuthor name="@vigneshshiv"/>

```java
// n - # of subsets
// Time complexity: O(n * 2^n)
// Space complexity: O(n * 2^n), where n is space taken by each subset, 2^n is the total subset
class Solution {
    
    // Input: nums - [1, 2]
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> subsets = new ArrayList<>();
        List<Integer> sets = new ArrayList<>();
        // Initial - { [] }
        subsets.add(sets);
        for (int num : nums) {
            // num - 1 & n is 1 ( subsets - { [] } )
            // num - 2 & n is 2 ( subsets - { [], [1] } )
            int n = subsets.size();
            for (int i = 0; i < n; i++) {
                // num - 1 & i = 0, []
                // num - 2 & i = 0, []
                // num - 2 & i = 1, [1]
                List<Integer> item = new ArrayList<>(subsets.get(i));
                item.add(num);
                // num - 1 & i = 0, { [], [1] }
                // num - 2 & i = 0, { [], [1], [2] }
                // num - 2 & i = 1, { [], [1], [2], [1, 2] } -- Final Result
                subsets.add(item);
            }
        }
        return subsets;
    }
}
```
</TabItem>
</Tabs>

## Approach 4: Recursion

Not required to pass result list OR temp list as a argument, just build the result sets from the previous returned values.

Implemented using Java 8 functional-programming style. 

<Tabs>
<TabItem value="java" label="java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    
    // Just a supplier function, provides the result
    Supplier<List<List<Integer>>> empty2DList = () -> {
        List<List<Integer>> sets = new ArrayList<>();
        sets.add(new ArrayList<>());
        return sets;
    };

    // Takes, subsets (2D List) and item as an input and provides output as 2D List
    BiFunction<List<List<Integer>>, Integer, List<List<Integer>>> combiner = (subsets, item) -> {
        List<List<Integer>> result = new ArrayList<>();
        // Java Stream API to traverse list elements and keep generating new list and add it to the result
        result.addAll(subsets.stream().map(ArrayList::new).collect(Collectors.toList()));
        // Add item to each result set
        result.forEach(set -> set.add(0, item));
        return result;
    };

    public List<List<Integer>> subsets(int[] nums) {
        return getSubsets(nums, 0);
    }

    public List<List<Integer>> getSubsets(int[] nums, int index) {
        if (nums.length == index) {
            return empty2DList.get();
        }
        List<List<Integer>> result = getSubsets(nums, index + 1);
        result.addAll(combiner.apply(result, nums[index]));
        return result;
    }
}
```
</TabItem>
</Tabs>