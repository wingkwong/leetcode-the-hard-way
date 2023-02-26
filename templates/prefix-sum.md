---
title: 'Prefix Sum'
description: ''
hide_table_of_contents: false
keywords:
  - leetcode
  - template
  - prefix sum
---

### Prefix Sum - Starting with first element

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
vector<int> pref(n);
pref[0] = a[0];
for (int i = 1; i < n; i++) {
    pref[i] = pref[i - 1] + a[i];
}
```

</TabItem>
</Tabs>

### Prefix Sum - Starting with 0

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
vector<int> pref(n + 1);
for (int i = 0; i < n; i++) {
	pref[i + 1] = pref[i] + a[i];
}
```

</TabItem>
</Tabs>


### Suffix Sum - Starting with last element

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
vector<int> suff(n);
suff[n - 1] = a[n - 1];
for (int i = n - 2; i >= 0; i--) {
	suff[i] = suff[i + 1] + a[i];
}
```

</TabItem>
</Tabs>

### Suffix Sum - Starting with 0

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
vector<int> suff(n + 1);
for (int i = n - 1; i >= 0; i--) {
	suff[i - 1] = suff[i] + a[i];
}
```

</TabItem>
</Tabs>