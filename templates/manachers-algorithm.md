---
title: "Manacher's Algorithm"
description: 'A famous algorithm and the fastest known technique to find palindromic substrings of even or odd length.'
hide_table_of_contents: false
keywords:
  - leetcode
  - template
  - manachers
---

Please refer the [tutorial](../tutorials/strings/manachers-algorithm) guide for more details.

The function takes input of a string and returns all possible palindromic strings at each center, possible in the string.

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
vector<string> palindromicSubstrings(string s) {
    if (s.empty()) return {};

    // Convert odd/even strings to odd
    string str = "";
    for (int i = 0; i < s.length() - 1; i++) {
        str += s[i];
        str += "#";
    }
    str += s[s.length() - 1];

    // Initializing variables
    int len = str.length();
    vector<int> pLengths(len, 0);
    int c = 0;
    int R = 0;

    for (int i = 0; i < len; i++) {
        // Mirroring the palindromic length
        if (i < R) {
            int mirror = 2 * c - i;
            pLengths[i] = min(R - i, pLengths[mirror]);
        }

        // Exploring beyond bounds
        while (i - pLengths[i] - 1 >= 0 && i + pLengths[i] + 1 < len &&
               str[i + pLengths[i] + 1] == str[i - pLengths[i] - 1]) {
            pLengths[i]++;
        }

        // Update center and bound
        if (pLengths[i] + i > R) {
            c = i;
            R = i + pLengths[i];
        }
    }

    // Return all possible palindromic strings
    vector<string> strings;
    for (int i = 0; i < len; i++) {
        string palindrome = str.substr(i - pLengths[i], 2 * pLengths[i] + 1);
        string result = "";
        for (char ch : palindrome) {
            if (ch != '#') {
                result += ch;
            }
        }
        strings.push_back(result);
    }

    return strings;
}

```

</TabItem>

<TabItem value="java" label="Java">

```java
public List<String> palindromicSubstrings(String s) {
    if (s.length() == 0) return new ArrayList<>();

    // Convert odd/even strings to odd
    StringBuilder str = new StringBuilder();
    for (int i = 0; i < s.length() - 1; i++) {
        str.append(s.charAt(i));
        str.append("#");
    }
    str.append(s.charAt(s.length() - 1));

    // Initializing variables
    int len = str.length();
    int[] pLengths = new int[len];
    int c = 0;
    int R = 0;

    for (int i = 0; i < len; i++) {
        // Mirroring the palindromic length
        if (i < R) {
            int mirror = 2 * c - i;
            pLengths[i] = Math.min(R - i, pLengths[mirror]);
        }

        // Exploring beyond bounds
        while (i - pLengths[i] - 1 >= 0 && i + pLengths[i] + 1 < len &&
               str.charAt(i + pLengths[i] + 1) == str.charAt(i - pLengths[i] - 1)) {
            pLengths[i]++;
        }

        // Update center and bound
        if (pLengths[i] + i > R) {
            c = i;
            R = i + pLengths[i];
        }
    }

    // Return all possible palindromic strings
    List<String> strings = new ArrayList<>();
    for (int i = 0; i < len; i++) {
        String palindrome = str.substring(i - pLengths[i], i + pLengths[i] + 1).replace("#", "");
        if (!palindrome.isEmpty()) {
            strings.add(palindrome);
        }
    }

    return strings;
}

```

</TabItem>

<TabItem value="python" label="Python">

```python
def palindromicSubstrings(self, s: str) -> list[str]:
    if len(s) == 0:
        return []

    # Convert odd/even strings to odd
    string = ""
    for i in range(len(s) - 1):
        string += s[i] + "#"
    string += s[len(s) - 1]

    # Initializing variables
    pLengths = [0] * len(string)
    c = 0
    R = 0

    for i in range(len(string)):
        # Mirroring the palindromic length
        if i < R:
            mirror = 2 * c - i
            pLengths[i] = min(R - i, pLengths[mirror])

        # Exploring beyond bounds
        while (i - pLengths[i] - 1 >= 0 and i + pLengths[i] + 1 < len(string)
               and string[i + pLengths[i] + 1] == string[i - pLengths[i] - 1]):
            pLengths[i] += 1

        # Update center and bound
        if pLengths[i] + i > R:
            c = i
            R = i + pLengths[i]

    # Return all possible palindromic strings
    strings = []
    for i in range(len(pLengths)):
        strings.append(string[i - pLengths[i]:i + pLengths[i] + 1].replace("#", ""))
    while "" in strings:
        strings.remove("")  # Remove empty palindromes
    return strings

```

</TabItem>
</Tabs>
