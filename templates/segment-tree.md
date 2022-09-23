---
title: 'Segment Tree'
description: ''
hide_table_of_contents: false
keywords:
  - leetcode
  - template
  - segment tree
---

## Example: Range Sum

```cpp
struct segtree {
    vector<long long> sums;
    int size;
    
    void init(int n) {
        size = 1;
        while (size < n) size *= 2;
        sums.assign(size * 2, 0LL);
    }
    
    void set(int i, int v, int x, int lx, int rx) {
        if (rx - lx == 1) {
            sums[x] = v;
            return;
        }
        int m = (lx + rx) / 2;
        if (i < m) set(i, v, 2 * x + 1, lx, m);
        else set(i, v, 2 * x + 2, m, rx);
        sums[x] = sums[2 * x + 1] + sums[2 * x + 2];
    }
    
    void set(int i, int v) {
        set(i, v, 0, 0, size);
    }
    
    long long sum(int l, int r, int x, int lx, int rx) {
        if (lx >= r || l >= rx) return 0;
        if (lx >= l && rx <= r) return sums[x];
        int m = (lx + rx) / 2;
        return sum(l, r, 2 * x + 1, lx, m) + sum(l, r, 2 * x + 2, m, rx);
    }
    
    long long sum(int l, int r) {
        return sum(l, r, 0, 0, size);
    }
};
```

Sample Usage

```cpp
int n = nums.size();

st.init(n);
// ...
for (int i = 0; i < n; i++) st.set(i, nums[i]);
// ...
st.set(index, val);
// ...
st.sum(left, right + 1)
```


**Segment Tree : Sum Template** <br/>
### Operations:
1. Find sum in particular range.
2. Point Update.
3. Range Update.

```cpp
// Query : TC: O(logN) for single query & O(NlogN) for n Queries
// TC: O(NlogN);
// SC: (4*N) ~ O(N);
class Segment
{
    vector<int> segmentTree, lazy;
    int n;
public:
    Segment(vector<int> &arr) {
        this->n = arr.size();

        segmentTree.resize(4 * n + 1);
        lazy.resize(4 * n + 1, 0);
        buildSegmentTree(arr, 0, 0, n - 1);
    }

    void buildSegmentTree(vector<int> &arr, int ind, int left, int right) {
        if (left == right){
            segmentTree[ind] = arr[left];
            return;
        }

        int mid = left + (right - left) / 2;

        buildSegmentTree(arr, 2 * ind + 1, left, mid);
        buildSegmentTree(arr, 2 * ind + 2, mid + 1, right);

        segmentTree[ind] = segmentTree[2 * ind + 1] + segmentTree[2 * ind + 2];
    }
    
    int sumBro(int ind, int left, int right, int l, int r) {
        // Case 1 : IF current_segment comes under range...
        if (left >= l && right <= r) {
            return segmentTree[ind];
        }

        // Case 2 : If current_segement doesn't comes in range.... :then we return 0 as answer to not pick current segment
        if (r < left || right < l)
            return 0;

        // Case 3 : If current_segement comes partitally...
        int mid = left + (right - left) / 2;
        
        int leftSum = sumBro(2 * ind + 1, left, mid, l, r);
        int rightSum = sumBro(2 * ind + 2, mid + 1, right, l, r);

        return leftSum + rightSum;
    }
    int getSum(int l, int r) { return sumBro(0, 0, n-1, l, r); }

    
    void pointUpdate(int ind, int left, int right, int index, int value) {
        // Doing Actual update at leaf node.
        if (left == right){
            segmentTree[ind] += value;
            return ;
        }

        int mid = (left + right)/2;

        // If index comes into left part, then we will update only left part and update complete component after if-else & vice versa
        if (index <= mid) pointUpdate(2*ind+1, left, mid, index, value);
        else pointUpdate(2*ind+2, mid+1, right, index, value);

        segmentTree[ind] = segmentTree[2*ind+1] + segmentTree[2*ind+2];
    }
    void pointUpdateBro(int index, int value) { pointUpdate(0, 0, n-1, index, value); }

    void lazyUpdate(int ind, int left, int right, int l, int r, int value){
        // We always do : pending updates first, then actual update.
        if(lazy[ind] != 0){
            segmentTree[ind] += (right-left+1) * lazy[ind];

            // Propagating lazy updates if current node is having childrens...
            if(left != right) {
                lazy[2*ind+1] += lazy[ind];
                lazy[2*ind+2] += lazy[ind];
            } 

            // we done updating, so make current lazy_updates = 0
            lazy[ind] = 0;
        }

        // Case 1 : If current range comes outside...
        if (right < l || r < left) return ;

        // Case 2 : If current range comes inside... 
        if (left >= l && right <= r) {
            segmentTree[ind] += (right-left+1) * value;

            if(left != right){
                lazy[2 * ind + 1] += value;
                lazy[2 * ind + 2] += value;
            }
            return ;
        }

        // Case 3: Partial Overlap
        int mid = left + (right - left)/2;

        lazyUpdate(2 * ind + 1, left, mid, l, r, value);
        lazyUpdate(2 * ind + 2, mid+1, right, l, r, value);

        segmentTree[ind] = segmentTree[2 * ind + 1] + segmentTree[2 * ind + 2];
    }
    void lazyUpdateBro(int l, int r, int value) { lazyUpdate(0, 0, n-1, l, r, value); }

    int querySumLazy(int ind, int left, int right, int l, int r) {
        // Executing pending updates at first.
        if (lazy[ind]){
            segmentTree[ind] += (right - left + 1) * lazy[ind];
            
            // If current node is not leaf node, then we have to propagate updates to childrens.
            if (left != right){
                lazy[2*ind+1] += lazy[ind];
                lazy[2*ind+2] += lazy[ind];
            }
            
            // We, are done updating : )
            lazy[ind] = 0;
        }

        // Case 1: If range is completely outside...
        if (r < left || right < l || left > right) return 0;

        // Case 2: If range is completely inside...
        if (left >= l && right <= r) return segmentTree[ind];

        // Case 3: If range is partially inside or partially outside...
        int mid = (right + left)/2;
        
        int leftSide = querySumLazy(2*ind+1, left, mid, l, r);
        int rightSide = querySumLazy(2*ind+2, mid+1, right, l, r);
        
        return leftSide + rightSide;
    }
    int getSumLazy(int l, int r) { return querySumLazy(0, 0, n- 1, l, r); }

    void printSegmentTree() {
        for(int i : segmentTree) cout<<i<<" "; 
        cout<<endl;
    }

    int printSegmentTreeSum() {
        return segmentTree[0];
    }
};
```
Sample Usage

```cpp
vector<int> arr = {1, 2, 3, 4};

Segment sT(arr);

sT.pointUpdate(index, val);
sT.lazyUpdateBro(left, right, value);
sT.getSumLazy(left, right);
```
