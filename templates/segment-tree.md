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