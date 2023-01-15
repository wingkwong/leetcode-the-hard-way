---
title: 'Palindrome'
description: 'A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward.'
hide_table_of_contents: true
keywords:
  - leetcode
  - tutorial
  - palindrome
---

<TutorialAuthors names="@wingkwong"/>

## Overview

A palindrome reads the same forward and backward. `amanaplanacanalpanama` and `10101` are the examples of palindrome. 

There are multiple ways to check if a string is a palindrome or not. 

### Iteration 

As we know it reads the same forward and backward, which means $s[0]$ is same as $s[n - 1]$, $s[1]$ is same as $s[n - 2]$ and so on. Therefore, we can iterate $n / 2$ times to check if the left side is same as the right side.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
bool isPalindrome(const string& s) {
    for (int i = 0; i < s.size() / 2; i++) {
        if (s[i] != s[s.size() - i - 1]) {
            return false;
        }
    }
    return true;
}
```

</TabItem>
</Tabs>

### Built-in Functions

We can directly use built-in function to reverse a string and check if it is same as the target one.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
bool isPalindrome(const string& s) {
    string t = s;
    reverse(t.begin(), t.end());
    return s == t;
}
```

</TabItem>
</Tabs>

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
bool isPalindrome(const string& s) {
    return s == string(s.rbegin(), s.rend());
}
```

</TabItem>
</Tabs>


<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
bool isPalindrome(const string &s) {
    return equal(s.begin(), s.begin() + s.size() / 2, s.rbegin());
}
```
</TabItem>
</Tabs>

### Palindrome with Range

For a given range, we can follow the same idea to use two pointers to check if a sub-string is a palindrome .

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
bool palindromeWithRange(string s, int i, int j) {
    while (i < j) {
        if (s[i] != s[j]) return false;
        i++, j--;
    }
    return true;
}
```
</TabItem>
</Tabs>