---

title: 'Segment Tree'

description: 'Author: @Dhruvil-Lakhtaria'

hide_table_of_contents: true

---

<TutorialAuthors  names="@Dhruvil-Lakhtaria"/>  

### Introduction
  Segment Tree is a type of datastructure used in very specific kind of problems. Problems that deal with 2 types of operations namely point `update()` and `query()`(Some kind of queries like Max, Min, GCD, etc.) for a given array.

### Structure
It is basically a binary tree with 3 types of nodes - 

 1. `Root Node` - denotes the whole array.
 2. `Leaf Node` - denotes a single element of the array.
 3. `Internal Node` - denotes a sub-interval of the array.
 
### Representation
We can implement the above using an array representation.
Each Index denotes the answer to that interval with $$(2 * i + 1)th$$ index as its left child and $$(2 * i + 2)th$$ index as its right child.

### Array size required to build segment tree.
The first level of the tree contains a single node (the root), the second level will contain two vertices, in the third it will contain four vertices, until the number of vertices reaches . Thus the number of vertices in the worst case can be estimated by the sum.

$$1 + 2 + 4 + 8 + .... + 2^{\lfloor log_2 n\rfloor} <  4*n$$
Hence we always declare the array size to $$4*n$$ for the worst case.
It is worth noting that whenever  is not a power of two, not all levels of the Segment Tree will be completely filled.

The height of the Segment Tree is $$logN$$, because when going down from the root to the leaves the size of the segments decreases approximately by half.

![Segment-Tree](https://he-s3.s3.amazonaws.com/media/uploads/eec15d3.jpg)

### Segment Tree Implementation for Range Sum Query.

Lets look at [307. Range Sum Query - Mutable](https://leetcode.com/problems/range-sum-query-mutable/) .
> You are given an array with n values. You have to answer two type of operations on it.
>
> 1. Get sum of values in range $$[L-R]$$.
> 2. Update ith element to new value. 

### Approach Using Segment Tree.
The question asks us to do 2 operations with the query operation having the logic to get sum of that operation. Seeing this only we can decide to use a segment tree data structure to solve the problem.

### Building Segment tree for this question. 
We start from the root denoting the entire array. The root denotes entire range $$(0 - n)$$. We divide this range in 2 equal parts, of $$(0 - mid)$$ and $$(mid + 1 - n)$$, each denoted by left and right child of the current node, and build tree recursively for them.
so we recursively call them. We know left child is equivalent to $$2 * i + 1$$ array index and right child is $$2 * i + 2$$.
This recursive call stop when we reach a leaf denoting the single element. So we just update the array value to the elements value and backtrack.

### Querying sum for a range.
We are given a range $$[L - R]$$ and we need to find sum for that range. We start from root node and search for that given range. There are few cases we deal at each step of searching.
1. Required range is completely within range of current node. We return the current nodes values as we have already reached required interval.
2. Required range is completely outside the nodes range. We return a INT_MAX.
3. Required range is intersecting withn the current nodes range. WE call query for children and try to find the required range.

### Point updating the value.
The logic for point update is pretty much the same involving recursive calls and backtracking. We reach till a leaf node where we need to update the value and while backtracking all the nodes that come into path needs to be checked for updation.

For example, Analyse the image below.
![Point Update](https://cdn.codespeedy.com/wp-content/uploads/2019/12/Node-or-Point-updates.png)

<p align='center'>Image by <a href='https://www.hackerearth.com/'>[hackerearth]</a></p>

Here we are update 2nd index and adding 3 to it.So all the nodes on the path back to root from it must also be updated.

<Tabs>
<TabItem value="cpp" label="c++">
<SolutionAuthor name="@DhruvilLakhtaria"/>

```CPP
class NumArray {
	public:
    vector<int> segment;
    int n;
    NumArray(vector<int>& nums) {
        n = nums.size(); 
        segment = vector<int> (4*n,0);
        int sum = buildSegTree(nums, 0, 0, n - 1);

    }
    int buildSegTree(vector<int> &nums, int idx, int l, int r)
    {
		// we have reached the leaf node
        if (l == r) {
            segment[idx] = nums[l]; 
            return segment[idx];
        }
        int mid = l + (r - l) / 2;

		// build for left child and right child.
        int left = buildSegTree(nums, 2 * idx + 1, l, mid);
        int right = buildSegTree(nums, 2 * idx + 2, mid + 1, r);

		// use above result for getting current answer. 
        segment[idx] = left + right;
        return segment[idx];
    }
    int changeNode(int index, int idx, int l, int r, int val)
    {
        if (l == r && l == index) {
			// update leaf node
            int diff = val - segment[idx];
            segment[idx] = val;
            return diff;
        }
        int mid = l + (r - l) / 2;
        int diff;
		// if index lies in the left child call update() for left child
        if (index >= l && index <= mid)
            diff = changeNode(index, 2 * idx + 1, l, mid, val);
		// else index would lie in the right child, call update() for the right child 
        else
            diff = changeNode(index, 2 * idx + 2, mid + 1, r, val);
			
        segment[idx] += diff;
        return diff;
    }
    void update(int index, int val) {
        int change = changeNode(index,0,0,n-1,val);
    }
    int getSum(int idx,int l,int r,int ll,int rr)
    {
        if (ll == l && rr == r)
            return segment[idx];

        int mid = l + (r - l) / 2;

        if(ll >= l && rr <= mid)
            return getSum(2 * idx + 1, l, mid, ll, rr);
        else if (ll > mid && rr <= r)
            return getSum(2 * idx + 2, mid + 1, r, ll, rr);
        else
            return getSum(2 * idx + 1, l, mid, ll, mid) + getSum(2 * idx + 2, mid + 1, r, mid + 1, rr);
    }
    int sumRange(int left, int right) {
        return getSum(0, 0, n - 1, left, right);
    }
};
```

</TabItem>
</Tabs>

### Sample Usage
The leetcode question demands to just fill the functions but we can also analyse our code by sample usage. 

<Tabs>
<TabItem value="cpp" label="c++">
<SolutionAuthor name="@DhruvilLakhtaria"/>

```cpp
vector<int> nums = {3, 1, 3, 4, 212, 4, 21};
int n = nums.size();

SegmentTree st = SegementTree(arr, n);
// operation - 1 sum of 0-3
st.query(0, 0, n - 1, 0, 3);
// operation - 2 update i = 4 to 21.
st.update(0, 0, n - 1, 4, 21);
// operation - 3 sum of 3-6
st.query(0, 0, n - 1, 3, 6);

```
</TabItem>
</Tabs>

### Complexity Analysis 

#### Time Complexity 
Segement Tree consists of three functions, namely `buildTree()`, `update()` and `query()` :- 

1. `buildTree()`: we recursively build the segment tree for left and right child of ith index and then use it to fill in the ith index.
The breaking point of recursive call is the leaf node denoting the single element of array itself.
>Time Complexity - $$O(4*N)$$ = $$O(N)$$;

2. `update(i,val)`: Here we go recursively to the segment holding ith element and update it. On the way back (backtracking) we update all the node accordingly.
> Time Complexity = $$O(logN)$$ as height of the tree is $$logN$$.

3. `query()`: We are given an range [L-R]. We basically find sub-segments that add up to required segment. We need to travel across the height atmax once to get our answer.
> Time Complexity = $$O(logN)$$. as height of the tree is $$logN$$	.

#### Space Complexity 

We are using a single array of size $$4*n$$ to implement the data structure and hence the space complexity is $$O(4*N)$$ = $$O(N)$$.

### Guidelines for different segemnt tree questions.
We have discussed about range sum problem. There can be different types of questions like range min query, or range GCD query where we need to find minimum or GCD of the asked range.
For such question we need to change the logic of combining two child node in the parent node.See the snippets below.

$$v[loc] = v[2 * loc + 1] + v[2 * loc + 2];$$

This was used in the `buildTree()` function.

Here instead of adding we can do -
1. $$v[loc] = min(v[2 * loc + 1],v[2 * loc + 2])$$ for getting minimum.
2. $$v[loc] = gcd(v[2 * loc + 1],v[2 * loc + 2])$$ for getting GCD.

export const suggestedProblems = [
  {
    "problemName": "2080. Range Frequency Queries",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/range-frequency-queries/",
    "solutionLink": "../../solutions/2000-2099/range-frequency-queries-medium"
  },
]

<Table title="Suggested Problems" data={suggestedProblems} />

