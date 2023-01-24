---
title: 'Ordered Set and GNU C++ PBDS'
description: 'a policy based data structure in g++ that keeps the unique elements in sorted order'
hide_table_of_contents: false
keywords:
  - leetcode
  - template
  - ordered set
  - gnu c++ pbds
---


<Tabs>
<TabItem value="cpp" label="C++">


```cpp
#include <ext/pb_ds/assoc_container.hpp>
#include <ext/pb_ds/tree_policy.hpp>
using namespace __gnu_pbds;

tree<int, null_type, less<int>, rb_tree_tag, tree_order_statistics_node_update> x;
tree<int, null_type, greater<int>, rb_tree_tag, tree_order_statistics_node_update> y;
tree<int, null_type, less_equal<int>, rb_tree_tag, tree_order_statistics_node_update> p;
tree<int, null_type, greater_equal<int>, rb_tree_tag, tree_order_statistics_node_update> q;


void solve() {
	int k = 5;
	x.insert(k);
	// Number of items strictly smaller than k
	x.order_of_key(k);
	// K-th element in a set (counting from zero)
	x.find_by_order(k);
}
```

</TabItem>
</Tabs>