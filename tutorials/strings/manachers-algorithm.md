# Manacher's Algorithm

### Find the longest palindrome substring

```cpp
string manacher(string s) {
  int n = (int)s.size();
  // d1[i]: the number of palindromes accordingly with odd lengths with centers in the position i.
  // d2[i]: the number of palindromes accordingly with even lengths with centers in the position i.
  vector<int> d1(n), d2(n);
  int l1 = 0, r1 = -1, l2 = 0, r2 = -1, mx_len = 0, start = 0;
  for (int i = 0; i < n; i++) {
    // ----------------------
    // calculate d1[i]
    // ----------------------
    int k = (i > r1) ? 1 : min(d1[l1 + r1 - i], r1 - i + 1);
    while (0 <= i - k && i + k < n && s[i - k] == s[i + k]) k++;
    d1[i] = k--;
    if (i + k > r1) l1 = i - k, r1 = i + k;
    if (d1[i] * 2 > mx_len) start = i - k, mx_len = d1[i] * 2 - 1;
    // ----------------------
    // calculate d2[i]
    // ----------------------
    k = (i > r2) ? 0 : min(d2[l2 + r2 - i + 1], r2 - i + 1);
    while (0 <= i - k - 1 && i + k < n && s[i - k - 1] == s[i + k]) k++;
    d2[i] = k--;
    if (i + k > r2) l2 = i - k - 1, r2 = i + k;
    if (d2[i] * 2 > mx_len) start = i - k - 1, mx_len = d2[i] * 2;
  }
  // return the longest palindrome
  return s.substr(start, mx_len);
}
```

### Find numbers of palindromic substrings in the given string

```cpp
int manacher(string s) {
  int n = (int) s.size();
  // d1[i]: the number of palindromes accordingly with odd lengths with centers in the position i.
  // d2[i]: the number of palindromes accordingly with even lengths with centers in the position i. 
  vector<int> d1(n), d2(n);
  int l1 = 0, r1 = -1, l2 = 0, r2 = -1, mx_len = 0, start = 0;
  for (int i = 0; i < n; i++) {
    // ----------------------
    // calculate d1[i]
    // ----------------------
    int k = (i > r1) ? 1 : min(d1[l1 + r1 - i], r1 - i + 1);
    while (0 <= i - k && i + k < n && s[i - k] == s[i + k]) k++;
    d1[i] = k--;
    if (i + k > r1) l1 = i - k, r1 = i + k;
    if (d1[i] * 2 > mx_len) start = i - k, mx_len = d1[i] * 2 - 1;
    // ----------------------
    // calculate d2[i]
    // ----------------------
    k = (i > r2) ? 0 : min(d2[l2 + r2 - i + 1], r2 - i + 1);
    while (0 <= i - k - 1 && i + k < n && s[i - k - 1] == s[i + k]) k++;
    d2[i] = k--;
    if (i + k > r2) l2 = i - k - 1, r2 = i + k;
    if (d2[i] * 2 > mx_len) start = i - k - 1, mx_len = d2[i] * 2;
  }
  // count how many palindromic substrings in the given string
  int cnt = 0;
  for (int i = 0; i < n; i++) cnt += d1[i] + d2[i];
  return cnt;
}
```
