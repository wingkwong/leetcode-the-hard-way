---
title: 'Disjoint Set Union (DSU)'
description: 'Disjoint Set Union is a data structure that allows us to combine any two sets into one.'
hide_table_of_contents: true
keywords:
  - leetcode
  - tutorial
  - disjoint set union
  - dsu
  - algorithm
---

import TutorialAuthors from '@site/src/components/TutorialAuthors';

<TutorialAuthors names="@wingkwong"/>

## Overview

A set is a collection of elements. If two sets have no common elements, then they are called disjoint sets. For example, {1, 2} and {3, 4} are disjoint sets while {1, 2} and {1, 3} are not because they have a common element $1$.

Disjoint Set Union (or DSU or Union Find) is a data structure that allows us to combine any two sets into one. Let's say we have $10$ elements and we initialise an array $root$ with a size of $10$. Here we have $10$ sets and each individual element in the set is the parent.

```cpp
vector<int> root(10);
for(int i = 0; i < 10; i++) root[i] = i;
```

If we join the first element $1$ and $2$ together, we first check if they belong to the same parent. If they do, it means they have already in the same set. Otherwises, we can point one to another and update $root$ like $root[2] = 1$ which means the root of element $2$ is $1$. We can make it more flexible to check if they are already in the same set or not simply by returning a boolean value.

```cpp
bool unite(int x, int y) {
    x = get(x);
    y = get(y);
    if (x != y) {
       root[y] = x;
      return true;
    }
    return false;
  }
```

If we need to check whether two elements have the same parent, then we need a function $get$ to check it. To implement that, we simply check if the target element $x$ is $root[x]$, otherwise we can call the same function recursively until we have the root. In other word, the parent would be 

```cpp
int get(int x) {
    return x == root[x] ? x : get(root[x]);
}
```

However, the above implementation is not efficient as each call depends on $n$ while we need to optimize it nearly constant time. 

One way to optimize it is compress the path. For example, if the root element is $1$ and we have the chain like $1$ -> $2$ -> $3$ -> $4$. If we write it vertically, element $1$ is on the top level, element $2$ is on the second level, element $3$ is on the third level and so on. We can compress these into the same level, i.e. element $2$, $3$ and $4$ would be on the second level only so that we don't need to talk all the nodes between the root and the source. This would achieve $O(log n)$ per call on average.

```cpp
int get(int x) {
    return (x == root[x] ? x : (root[x] = get(root[x])));
}
```

We can futher optimize using union by rank. In the previous implementation, we always join the second one to the first one. However, we can choose the best side to make it faster. We can base on the depth of the trees to determine which side we would like to attach.

```cpp
bool unite(int x, int y) {
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
```

Here's the final templatized version.

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
```

Here's some basic usages.

```cpp
int main() {
    int n = 10;
    // init
	dsu d = dsu(n);
    // unite
	d.unite(1, 2);
	d.unite(3, 4);
	d.unite(1, 4);
    // get the parent
    int p = d.get(1);
	return 0;
}
```

