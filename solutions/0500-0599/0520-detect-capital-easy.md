---
description: 'Author: @wingkwong | https://leetcode.com/problems/detect-capital/'
---

# 0520 - Detect Capital (Easy)

## Problem Link

https://leetcode.com/problems/detect-capital/

## Problem Statement

We define the usage of capitals in a word to be right when one of the following cases holds:

* All letters in this word are capitals, like `"USA"`.
* All letters in this word are not capitals, like `"leetcode"`.
* Only the first letter in this word is capital, like `"Google"`.

Given a string `word`, return `true` if the usage of capitals in it is right.

**Example 1:**

```
Input: word = "USA"
Output: true
```

**Example 2:**

```
Input: word = "FlaG"
Output: false
```

**Constraints:**

* `1 <= word.length <= 100`
* `word` consists of lowercase and uppercase English letters.

## Approach 1: One Pass

Just check if it is invalid the conditions. If so, return false immediately.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    bool detectCapitalUse(string word) {
        for(int i = 1; i < word.size(); i++){
            if(isupper(word[1]) != isupper(word[i]) || 
               islower(word[0]) && isupper(word[i])) return false;
        }        
        return true;
    }
};
```

</TabItem>

</Tabs>


## Approach 2: Case By Case 

Count the number of characters with upper case and try those 3 cases.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    bool detectCapitalUse(string word) {
        int upper = 0;
		// count number of characters with upper case
        for (auto x : word) upper += isupper(x) ? 1 : 0;
            // case 1: All letters in this word are capitals, like "USA".
        return upper == word.size() ||
            // case 2: All letters in this word are not capitals, like "leetcode".
               upper == 0 ||
            // case 3: Only the first letter in this word is capital, like "Google".
               (upper == 1 && isupper(word.front()));
    }
};
```

</TabItem>

</Tabs>
