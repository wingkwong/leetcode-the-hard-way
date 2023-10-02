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

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
// Convert odd/even strings to odd
string str = "";
for (int i = 0; i < s.length() - 1; i++) {
    str += s[i];
    str += "#";
}
str += s[s.length() - 1];

// Initializing variables
vector<int> pLengths(str.length(), 0);
int c = 0;
int R = 0;

for (int i = 0; i < str.length(); i++) {
    // Mirroring the palindromic length
    if (i < R) {
        int mirror = 2 * c - i;
        pLengths[i] = min(R - i, pLengths[mirror]);
    }

    // Exploring beyond bounds
    while (i - pLengths[i] - 1 >= 0 && i + pLengths[i] + 1 < str.length() &&
           str[i + pLengths[i] + 1] == str[i - pLengths[i] - 1]) {
        pLengths[i]++;
    }

    // Update center and bound
    if (pLengths[i] + i > R) {
        c = i;
        R = i + pLengths[i];
    }
}

```
</TabItem>

<TabItem value="java" label="Java">

```java
// create string with hashes using string builder
StringBuilder stringBuilder = new StringBuilder();
for (int i = 0; i < s.length() - 1; i++) {
    stringBuilder.append(s.charAt(i));
    stringBuilder.append("#");
}
stringBuilder.append(input.charAt(input.length() - 1));
String string = stringBuilder.toString();


// initializing variables
int[] pLengths = new int[string.length];
int c = 0;
int R = 0;

for ( int i = 0; i < string.length-1; i++){
    int mirror = 2*C - i

    // mirroring the palindromic length
    if (i<R) 
        pLengths[i] = Math.min(R-i, pLengths[mirror])

    // exploring beyond bounds
    while ( i - pLengths[i] - 1 >= 0 && i + pLengths[i] + 1 < len(string) &&
        string[i + 1 + pLengths[i]] == string[i - 1 - pLengths[i]] )
        pLengths[i]++;

    // update center and bound
    if (i + pLengths[i] > R){
        c = i;
        R = i + pLengthsp[i];
    }
}

```
</TabItem>

<TabItem value="python" label="Python">

```python
string = ""
# convert odd/even strings to odd
for i in range(len(s)-1):
    string += s[i] + "#"
string += s[len(s)-1]

# initializing variables
pLengths = [0]* len(string)
c = 0
R = 0 

for i in range(len(string)):

    # mirroring the palindromic length
    if i < R:
        mirror = 2*c - i
        pLengths[i] = min(R-i, pLengths[mirror])
    
    # exploring beyond bounds
    while ( i - pLengths[i] - 1 >= 0 and i + pLengths[i] + 1 < len(string)
    and string[i + pLengths[i] + 1] == string[i - pLengths[i] - 1] ): 
        pLengths[i] += 1
    
    # update center and bound
    if pLengths[i] + i > R:
        c = i
        R = i + pLengths[i]

```
</TabItem>
</Tabs>
