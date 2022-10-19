---
title: "Lazy Propagation"

description: "Author: @Dhruvil-Lakhtaria"

hide_table_of_contents: true
---

<TutorialAuthors  names="@Dhruvil-Lakhtaria"/>

### Introduction

Lazy Propagation comes into picture with Segment Tree when the operation is no longer point update.Instead we want to do a range update. That is instead of updating a single value we are updating a $$range(L - R)$$ with a value.

If we use our standard Segment Tree we can do the update operation for each element in $$[L - R]$$.
But this will make the time complexity of range update as $$O(NlogN)$$.

### Idea behind Lazy Propagation

The idea behind the algorithm is don’t not update a node until needed which will avoid the repeated sharing.

Updating the interval represented by a node is similar to update the subtree of that node in segment tree. Suppose we have to update subtree of **Node X**, instead of updating all the values at that instant we will only update that node and mark its children that their subtree has to be updated and for maintaining this record we will use **Lazy array**. Size of Lazy array would be same as the size of segment tree. We will initialize the Lazy array with **0** which indicates there is no pending updates. While processing a node, let say **u**, if **Lazy[u] is non-zero**, it implies there is a pending update so before doing any further operation we will first update node u and if its children exist make them lazy.


<Tabs>
<TabItem value="CPP" label="CPP">
<SolutionAuthor name="@DhruvilLakhtaria"/>

```CPP
class Solution:
    class SegmentTree {

    vector<int> v, Lazy;
    SegmentTree(vector<int>& arr, int n) {
	    v = vector<int>(4*n);
        Lazy = vector<int>(4*n, 0);
	    buildTree(arr, 0, n - 1, 0);
    }

    void buildTree(vector<int>& arr, int l, int r, int node) {
	    // we have reached the leaf node
	    if (l == r) {
		    v[node] = arr[l];
		    return;
	    }

	    int  mid = l + (r - l) / 2;

	    // build for left child
	    buildTree(arr, l, mid, 2*node + 1);
	    // build for right child
	    buildTree(arr, mid + 1, r, 2*node + 2);

	    // use above result for getting current answer.
	    v[node] = v[2*node + 1] + v[2*node + 2];
    }
    void RangeUpdate(int node, int st, int end, int query_l, int query_r, int val) {
        // if node is lazy then update it
        if (Lazy[node] != 0) {
            v[node] += (r - l + 1)*Lazy[node];

            // if its children exist then mark them lazy
            if (l != r) {
                Lazy[2*node + 1] += Lazy[node];
                Lazy[2*node + 2] += Lazy[node];
            }
            // No longer lazy
            Lazy[node] = 0;
        }
        // if current range doesn't lie inside query range.
        if ( (r < query_l) || (l > query_r) )
            return;

        // if current range lies completely inside query range.
        if (l >= query_l && r <= query_r) {
            v[node] += (r - l + 1)*val;
            if(l != r)
            {
                // mark its children lazy
                Lazy[2*node + 1] += val;
                Lazy[2*node + 2] += val;
            }
            return;
        }
        // now current range partially overlaps with given range
        int mid = (l + r) / 2;

        // update left child
        RangeUpdate(2*node + 1, l, mid, query_l, query_r, val);
        
        // update right child
        RangeUpdate(2*node + 2, mid + 1, r, query_l, query_r, val);

        // change the current node value
        v[node] = (v[2*node + 1] + v[2*node + 2]);
        return;
    }
    int query(int node, int l, int r, int query_l, int query_r) {
        //Before processing the current node we need to check if its lazy and relax it
        // if node is lazy, update it
	    if (Lazy[node] != 0) {
		    v[node] += (r - l + 1)*Lazy[node];
            // check if the children exist
		    if (l != r) {
                //mark child lazy
			    Lazy[2*node + 1] += Lazy[node];
			    Lazy[2*node + 2] += Lazy[node];
		    }
            // no longer lazy
		    Lazy[node] = 0;
	    }

	    // case-1: requested query interval within l-r
	    if (query_l <= l && query_r >= r)
		    return v[node];
	    // case-2: requested query interval is outside l-r
	    else if (query_l > r || query_r < l)
		    return INT_MAX;

	    // case-3: requested query is intersecting its child.
	    int mid = l + (r - l)/2;

	    int left = query(2*node + 1, l, mid, query_l, query_r);
	    int right = query(2*node + 2, mid + 1, r, query_l, query_r);
	    return  left + right;
    }

    void update(int node, int l, int r, int update_at, int value) {
	    if (l == r) {
		    // update leaf node
		    v[node] = value;
		    return;
	    }

	    int  mid = (l + r)/2;
	    // if index lies in the left child call update() for left child
	    if (update_at <= mid)
		    update(2*node + 1, l, mid, update_at, value);
		// else index would lie in the right child, call update() for the right child
	    else
		    update(2*node + 2, mid + 1,r,update_at, value);

	    // after updating the children,update the current node as smallest of its children
	    v[node] = v[2*node + 1]  + v[2*node+2];
	 	return;
    }
};
```

</TabItem>
</Tabs>

### Analysis

We have added `rangeUpdate()` and modified the `query()` methods as compared to the standard segment tree.

1. `rangeUpdate()`: While updating a given range following cases may arise:

   - If the segment represented by a node is completely outside the given query range then terminate the function call.

   - If the segment represented by a node lies completely inside the query range then update the current node and if its children exist mark them lazy.

   - If the segment represented by a node lies partially inside and partially outside the given query range, call the update function for both the children and change the value stored at that node by sum of value stored at its children.

   > Time Complexity - $$O(logN)$$

###

2. `query()`:

   - Since we have changed the update function and the tree has become lazy, so we need to change the query function as well. The only change we have to do is check if there is any pending update on the current node. If found, then update the value stored at that node and if its children exist then make them lazy. Rest is same as previous query function.

   > Time Complexity - $$O(logN)$$

### Space Complexity

We are using a two arrays of size $$4*n$$ to implement the data structure and hence the space complexity is $$O(4*N)$$ = $$O(N)$$.

export const suggestedProblems = [
{
"problemName": "1838. Frequency of the Most Frequent Element",
"difficulty": "Medium",
"leetCodeLink": "https://leetcode.com/problems/frequency-of-the-most-frequent-element/",
"solutionLink": "../../solutions/1800-1899/frequency-of-the-most-frequent-element-medium/"
},
]

<Table title="Suggested Problems" data={suggestedProblems} />

<!-- https://leetcode.com/problems/frequency-of-the-most-frequent-element/solutions/1175611/segment-tree-with-lazy-propagation/ -->
