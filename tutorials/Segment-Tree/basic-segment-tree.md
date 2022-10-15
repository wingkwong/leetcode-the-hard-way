---

title: 'Segment Tree'

description: 'Author: @Dhruvil-Lakhtaria'

hide_table_of_contents: true

---

<TutorialAuthors  names="@Dhruvil-Lakhtaria"/>  

### Introduction
  Segment Tree is a type of datastructure used in very specific kind of problems. Problems that deal with 2 types of operations namely Point Update and Query(l,r)(Some kind of queries like max,min,GCD ) for arr[l to r] on given array.

### Structure
It is basically a binary tree with 3 types of nodes - 

 1. Root Node - denotes the whole array.
 2. Leaf Node - denotes a single element of the array.
 3. Internal Node - denotes a sub-interval of the array.
 
### Representation
We can implement the above using an array representation.
Each Index denotes the answer to that interval with (2*i+1)th index as its left child and (2i+2)th index as its right child.

![Segment-Tree](https://miro.medium.com/max/1100/1*9V1l8_weUfmT4jHg21EE5w.png)



### Segment Tree Implementation for Range Min Query.

Lets look at [307. Range Sum Query - Mutable](https://leetcode.com/problems/range-sum-query-mutable/) .
> You are given an array with n values. You have to answer two type of operations on it.
>
> 1. Get sum of values in range [L-R].
> 2. Update ith element to newValue. 

<Tabs>
<TabItem value="CPP" label="CPP">

```CPP
class Solution:
    class  SegmentTree{
    
    vector<int>v;
    SegmentTree(vector<int>&arr,int  n)
    {
	    v = vector<int>(4*n);
	    buildTree(arr,0,n-1,0);
    }          
    
    void  buildTree(vector<int>&arr,int  l,int  r,int  loc) 
    {    
	    // we have reached the leaf node
	    if(l == r)
	    {
		    v[loc] = arr[l];
		    return;
	    } 
	    
	    int  mid = l + (r-l)/2;
	    
	    // build for left child
	    buildTree(arr,l,mid,2*loc+1);
	    //build for right child
	    buildTree(arr,mid+1,r,2*loc+2);
 
	    //use above result for getting current answer.  
	    v[loc] = v[2*loc+1] + v[2*loc+2];
    
    } 
      
    int  query(int  loc,int  l,int  r,int  query_l,int  query_r)
    {
    
	    //case-1: requested query interval within l-r 
	    if(query_l <= l && query_r >= r)
		    return  v[loc];      
	    // case-2: requested query interval is outside l-r
	    else  if(query_l > r || query_r < l)
		    return  INT_MAX;
	    // case-3: requested query is intersecting its child.
	    int  mid = l + (r-l)/2;
	    int  left = query(2*loc+1,l,mid,query_l, query_r);
	    int  right = query(2*loc+2,mid+1,r,query_l, query_r);
	    return  left+right;
    }
    
    void  update(int  loc, int  l, int  r, int  update_at, int  value)
    {
	    if(l == r)
	    {
		    //Update leaf node
		    v[loc] = value;
		    return ;
	    }
	    int  mid = (l+r)/2;
	   
	    //if index lies in the left child call update() for left child
	    if(update_at <= mid)
		    update(2*loc+1,l,mid,update_at,value);
	    
		//else index would lie in the right child, call update() for the right child 
	    else
		    update(2*loc+2, mid+1,r,update_at, value);
	    
	    //after updating the children,update the current node as smallest of its children
	    v[loc] = v[2*loc + 1]  + v[2*loc+2];
	 	return;  
    }
};
```

</TabItem>
</Tabs>

### Sample Usage

```cpp

vector<int>nums = {3,1,3,4,212,4,21};
int n = nums.size();

SegmentTree st = SegementTree(arr,n);
// operation - 1 sum of 0-3
st.query(0,0,n-1,0,3);
// operation - 2 update i = 4 to 21.
st.update(0,0,n-1,4,21);
// operation - 3 sum of 3-6
st.query(0,0,n-1,3,6);

```


### Time Complexity and Space Complexity Analysis 

#### Time Complexity 
Segement Tree consists of three functions, namely `buildTree()`, `update()` and `query()` :- 

1. `buildTree()`: we recursively build the segment tree for left and right child of ith index and then use it to fill in the ith index.
The breaking point of recursive call is the leaf node denoting the single element of array itself.
>Time Complexity - $$O(4*N)$$ = $$O(N)$$;

2. `update(i,val)`: Here we go recursively to the segment holding ith element and update it. On the way back (backtracking) we update all the node accordingly.
> Time Complexity = $$O(logN)$$ as height of the tree is logN.

3. `query()`: We are given an range [L-R]. We basically find sub-segments that add up to required segment. We need to travel across the height atmax once to get our answer.
> Time Complexity = $$O(logN)$$. as height of the tree is logN.

#### Space Complexity 

We are using a single array of size $$4*n$$ to implement the data structure and hence the space complexity is $$O(4*N)$$ = $$O(N)$$.


export const suggestedProblems = [
  {
    "problemName": "2080. Range Frequency Queries",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/range-frequency-queries/",
    "solutionLink": "../solutions/0800-0899/stone-game-medium"
  },
]

<Table title="Suggested Problems" data={suggestedProblems} />

