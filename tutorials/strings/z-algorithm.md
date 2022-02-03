---
description: 'Author: @wingkwong'
---

# Z Algorithm

Z-Algorithm is an algorithm for searching a pattern in a string in linear time complexity $$O(m + n)$$ where $$m$$ is the length of the string $$t$$ and $$n$$ is the length of the pattern $$s$$ to be searched.

To apply z-algorithm, we need an auxiliary array called $$Z$$ to store the length of the prefix matching the starting characters. In other words, $$Z[i]$$ means the length of the longest string that is a prefix of $$s$$ and at the same time a suffix of $$s$$ starting at $$i$$.

### Implementation in C++

```cpp
template <typename T>
vector<int> z_function(int n, const T &s) {
  vector<int> z(n, n);
  int l = 0, r = 0;
  for (int i = 1; i < n; i++) {
    z[i] = (i > r ? 0 : min(r - i + 1, z[i - l]));
    while (i + z[i] < n && s[z[i]] == s[i + z[i]]) {
      z[i]++;
    }
    if (i + z[i] - 1 > r) {
      l = i;
      r = i + z[i] - 1;
    }
  }
  return z;
}

template <typename T>
vector<int> z_function(const T &s) {
  return z_function((int)s.size(), s);
}
```

### Suggested Problems:

* [0214 - Shortest Palindrome (Hard)](../../solutions/0200-0299/0214-shortest-palindrome-hard.md)
