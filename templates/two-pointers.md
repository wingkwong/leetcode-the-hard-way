---
title: 'Two Pointers'
description: ''
hide_table_of_contents: false
keywords:
  - leetcode
  - template
  - two pointers
---

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
int f(vector<int>& v) {
    int ans = 0;
    int l = 0, r = (int) v.size() - 1;
    while (l < r) {
        // do some logic here
        if (/* condition */) {
            l += 1;
        } else {
            r -= 1;
        }
    }
    return ans;
}
```

</TabItem>
</Tabs>