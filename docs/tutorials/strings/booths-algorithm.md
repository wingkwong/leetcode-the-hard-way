---
description: 'Author: @wingkwong'
---

# Booth's Algorithm

#### _Tutorial: Coming Soon!_

#### Determine the lexicographically minimal rotation of a string

```cpp
int booth_function(string s) {
  s = s + s;
  int n = SIZE(s);
  // failure function
  vi f(n, -1);
  // least roation of string found so far
  int k = 0;
  FOR(j, 1, n) {
    char sj = s[j];
    int i = f[j - k - 1];
    while (i != -1 && sj != s[k + i + 1]) {
      if (sj < s[k + i + 1]) k = j - i - 1;
      i = f[i];
    }
    if (sj != s[k + i + 1]) {
      // i == -1
      if (sj < s[k]) k = j;
      f[j - k] = -1;
    } else {
      f[j - k] = i + 1;
    }
  }
  return k;
}
```

#### Example

```cpp
void solve() {
  string s;
  cin >> s;
  int n = SIZE(s);
  int k = booth_function(s);
  s = s + s;
  cout << s.substr(k, n) << endl;
}
```
