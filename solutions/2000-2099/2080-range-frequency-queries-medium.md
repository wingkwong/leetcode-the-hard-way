---
description: >-
  Author: @DhruvilLakhtaria |
  https://leetcode.com/problems/range-frequency-queries/
---

# 2080 - Range Frequency Queries (Medium)

## Problem Link

https://leetcode.com/problems/range-frequency-queries/

## Problem Statement
Design a data structure to find the **frequency** of a given value in a given subarray.

The **frequency** of a value in a subarray is the number of occurrences of that value in the subarray.

Implement the `RangeFreqQuery` class:

* `RangeFreqQuery(int[] arr)` Constructs an instance of the class with the given `0-indexed` integer array `arr`.
* `int query(int left, int right, int value)` Returns the frequency of value in the subarray `arr[left...right]`.

A **subarray** is a contiguous sequence of elements within an array. `arr[left...right]` denotes the subarray that contains the elements of `nums` between indices `left` and `right`**(inclusive)**.

**Example 1:**

```
Input
["RangeFreqQuery", "query", "query"]
[[[12, 33, 4, 56, 22, 2, 34, 33, 22, 12, 34, 56]], [1, 2, 4], [0, 11, 33]]
Output
[null, 1, 2]

Explanation
RangeFreqQuery rangeFreqQuery = new RangeFreqQuery([12, 33, 4, 56, 22, 2, 34, 33, 22, 12, 34, 56]);
rangeFreqQuery.query(1, 2, 4); // return 1. The value 4 occurs 1 time in the subarray [33, 4]
rangeFreqQuery.query(0, 11, 33); // return 2. The value 33 occurs 2 times in the whole array.
```

**Constraints:**

* $$1 <= arr.length <= 10^5$$.
* $$1 <= arr[i], value <= 10^4$$.
* $$0 <= left <= right < arr.length$$
* At most $$10^5$$ calls will be made to `query`

## Approach 1: Using Segment Tree.
We are using a standard segement tree with each node consisting of a map which store frequency of the elements in the interval corresponding to that node.

<SolutionAuthor name="@DhruvilLakhtaria"/>

```cpp
class RangeFreqQuery {
public:
    int n;
    // Every node is segment tree keeps a hashmap of count of array items for the given range.
    unordered_map<int,int> *seg;
    RangeFreqQuery(vector<int>& arr) {
        n = arr.size(); 
        seg = new unordered_map<int,int>[4*n]; // Because max nodes or indexes in segment tree can be 4*n [There is a proof for that].
        build(0, 0, n - 1, arr);
    }
    
    void build(int ind,int low,int high,vector<int>& arr) {
        if(low == high){
            seg[ind][arr[low]]++;
            return;
        }

        int mid = (low + high)/2;
        
        // Recursively build for left and right subtree.
        build(2*ind + 1, low, mid, arr);
        build(2*ind + 2, mid + 1, high, arr);
        
        unordered_map<int,int> map;
        
        for(auto it = seg[2*ind + 1].begin(); it != seg[2*ind + 1].end(); it++){
            map[it->first] += it->second;
        }
        
        for(auto it = seg[2*ind + 2].begin(); it != seg[2*ind + 2].end(); it++){
            map[it->first] += it->second;
        }
        // Merging the right and left subtree solutions.
        seg[ind] = map;
    } 
    
    int queryH(int ind, int low, int high, int l, int r, int value) {
        // No overlap
        // [l r] [low high] or [low high] [l r]
        if(r < low || high < l) {
            return 0;
        }

        // Complete overlap
        // [l low high r]
        if(l <= low && high <= r) {
            return seg[ind][value];
        }

        // Partial overlap
        int mid = (low + high)/2;

        // Querying the answer from left and right subtree.
        int left = queryH(2*ind + 1, low, mid, l, r, value);
        int right = queryH(2*ind + 2, mid + 1, high, l, r, value);    
        return left + right;
    }

    int query(int left, int right, int value) {
        return queryH(0, 0, n - 1, left, right, value);
    }
};
```