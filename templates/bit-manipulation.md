---
title: 'Bit Manipulation'
description: 'Bit Manipulation utilises different bitwise operations to manipulate bits'
hide_table_of_contents: false
keywords:
  - leetcode
  - template
  - bit manipulation
---

### Sum of Submask

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
template<typename T_out, typename T_in>
vector<T_out> submask_sums(int n, const vector<T_in> &values) {
    assert(int(values.size()) == 1 << n);
    vector<T_out> dp(values.begin(), values.end());
    for (int i = 0; i < n; i++)
        for (int base = 0; base < 1 << n; base += 1 << (i + 1))
            for (int mask = base; mask < base + (1 << i); mask++)
                dp[mask + (1 << i)] += dp[mask];
    return dp;
}
```

</TabItem>
</Tabs>

### Sum of Super Mask

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
template<typename T_out, typename T_in>
vector<T_out> supermask_sums(int n, vector<T_in> values) {
    reverse(values.begin(), values.end());
    vector<T_out> result = submask_sums<T_out>(n, values);
    reverse(result.begin(), result.end());
    return result;
}
```

</TabItem>
</Tabs>

### Largest Bit Set

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
int largest_bit(int x) {
    return x == 0 ? -1 : 31 - __builtin_clz(x);
}
```

</TabItem>
</Tabs>

### Lowest Bit Set

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
int lowest_bit(int x) {
    return x & (-x);
}
```

</TabItem>
</Tabs>

### Index of Lowest Bit Set

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
int lowest_bit_index(int x) {
    // 1 based
    // __builtin_ffs(10) = 2 (10[1]0)
    return __builtin_ffs(x);
}
```

</TabItem>
</Tabs>

### Enumerating all submasks of a given mask

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
for (int s = m; s; s = (s - 1) & m) {
    // use s
}
```

 </TabItem>
</Tabs>
