---
description: >-
  Author: @DhruvilLakhtaria |
  https://leetcode.com/problems/frequency-of-the-most-frequent-element/
---

# 1838 - Frequency of the Most Frequent Element (Medium)

## Problem Link

https://leetcode.com/problems/frequency-of-the-most-frequent-element/

## Problem Statement
The **frequency** of an element is the number of times it occurs in an array.

You are given an integer array `nums` and an integer `k`. In one operation, you can choose an index of `nums` and increment the element at that index by `1`.

Return the **maximum possible frequency** of an element after performing **at most** `k` operations.

**Example 1:**

```
Input
Input: nums = [1,2,4], k = 5
Output: 3
Explanation: Increment the first element three times and the second element two times to make nums = [4,4,4].
4 has a frequency of 3
```

**Example 2:**

```
Input: nums = [1,4,8,13], k = 5
Output: 2
Explanation: There are multiple optimal solutions:
- Increment the first element three times to make nums = [4,4,8,13]. 4 has a frequency of 2.
- Increment the second element four times to make nums = [1,8,8,13]. 8 has a frequency of 2.
- Increment the third element five times to make nums = [1,4,13,13]. 13 has a frequency of 2.
```

**Example 3:**

```
Input: nums = [3,9,6], k = 2
Output: 1
```

**Constraints:**

* $$1 <= nums.length <= 10^5$$.
* $$1 <= nums[i] <= 10^5$$.
* $$1 <= k <= 10^5$$

## Approach 1: Using Lazy Propagation and Segment Tree.
We are using a standard segement tree with each node consisting of a map which store frequency of the elements in the interval corresponding to that node.

<SolutionAuthor name="@DhruvilLakhtaria"/>

```cpp
#define ll long long int
class tree{
    public:
    ll sum, start, end, lazy;
    tree* left;
    tree* right;
    tree(ll i, ll j){
        start = i, end = j, lazy = 0;
        left = NULL, right = NULL;
    }
};
 
class Solution {
public:
    #define f(i,n) for(int i = 0 ; i < n;  i++)
    #define F first
    #define S second
    #define vi vector<int>
    #define vvi vector<vector<int>>
    #define all(s) s.begin(), s.end()
    #define u_s unordered_set
    #define u_m unordered_map
    #define ll long long int
    #define vll vector<ll>
    #define pb push_back
    #define parr(arr) for(auto x: arr)cout<<x<<" ";cout<<endl

    tree* build(vll &v, ll i, ll j){
        tree* node = new tree(i, j);
        if(i == j) {
          node->sum = v[i];
          return node;
        }
        ll mid = (i+j)/2;
        node->left = build(v, i, mid);
        node->right = build(v, mid + 1, j);
        node->sum = node->left->sum + node->right->sum;
        return node;
    }

    ll pgate(tree *&node){
        node->sum += (node->lazy)*((node->end - node->start) + 1);
        if(!node->right) {
            node->lazy = 0;
            return node->sum;
        }
        node->left->lazy += node->lazy;
        node->right->lazy += node->lazy;
        node->lazy = 0;
        return node->sum;
    }

    ll update(tree* &node, ll i, ll j, ll val){
        if(node->start>j || node->end < i) return node->sum;
        if(node->lazy){
            pgate(node);    
        }
        if(node->start >= i and node->end <= j) {
            node->lazy = val;
            return pgate(node);
        }
        return node->sum = update(node->left, i, j, val) + update(node->right, i, j, val);
    }


    pair<ll,ll> query(tree* &node, ll i, ll j, ll k){
        if(node->start>j || node->end < i || k<0) return {0, 0};
        if(node->lazy){
            pgate(node);
        }
        if(node->start >= i and node->end <= j) {
            if(node->start == node->end){
                if(node->sum > k) return {INT_MAX,0};
                return {node->sum, 1};
            }
            if(node->sum <= k) return {node->sum,(node->end-node->start) + 1};
        } 
        pair<ll,ll> right = query(node->right, i, j, k);
        if(right.F == INT_MAX) return right;
        pair<ll,ll> left = query(node->left, i, j, k - right.F);
        return {min((ll)INT_MAX, left.F + right.F), left.S + right.S};
    }

    int maxFrequency(vector<int>& nums, int k) {
        sort(all(nums));
        vll v(nums.size());
        tree* root = build(v,0,nums.size()-1);
        ll maxi = 1;
        for(int i = 1; i < nums.size(); i++){
            update(root, 0, i - 1, nums[i] - nums[i - 1]); 
            
            //update the range 0, i-1 with nums[i]-nums[i-1]
            ll temp = 1 + query(root, 0, i-1, k).S;
            // find the largest subarray to the left of i with sum <= k
            maxi = max(temp, maxi);
        }
        return maxi;
    }
};
```