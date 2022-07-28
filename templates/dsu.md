---
title: 'Disjoint Set Union (DSU)'
description: 'Disjoint Set Union is a data structure that allows us to combine any two sets into one.'
hide_table_of_contents: false
keywords:
  - leetcode
  - template
  - disjoint set union
  - dsu
  - algorithm
---

```cpp
class dsu {
 public:
  vector<int> root, rank;
  int n;
  int cnt;

  dsu(int _n) : n(_n) {
    root.resize(n);
    rank.resize(n);
    for(int i = 0; i < n; i++) {
        root[i] = i;
        rank[i] = 1;
    }
    cnt = n;
  }

  inline int getCount() { return cnt; }

  inline int get(int x) { return (x == root[x] ? x : (root[x] = get(root[x]))); }

  inline bool unite(int x, int y) {
    x = get(x);
    y = get(y);
    if (x != y) {
        if (rank[x] > rank[y]) {
            root[y] = x;
        } else if (rank[x] < rank[y]) {
            root[x] = y;
        } else {
            root[y] = x;
            rank[x] += 1;
        }
        cnt--;
      return true;
    }
    return false;
  }
};


// int main() {
// 	dsu d = dsu(n);
// 	d.unite(a, b);
// 	return 0;
// }
```