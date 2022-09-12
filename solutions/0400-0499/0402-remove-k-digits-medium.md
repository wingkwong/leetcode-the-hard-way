---
description: 'Author: @DoubleSpicy | https://leetcode.com/problems/remove-k-digits/'
---

# 0402 - Remove K Digits (Medium)

## Problem Link

https://leetcode.com/problems/remove-k-digits/

## Problem Statement

Given string num representing a non-negative integer `num`, and an integer `k`, return _the smallest possible integer after removing_ `k` _digits from_ `num`.

**Example 1:**

```
Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
```

**Example 2:**

```
Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
```

**Example 3:**

```
Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.
```

**Constraints:**

* `1 <= k <= num.length <= 10^5`
* `num` consists of only digits.
* `num` does not have any leading zeros except for the zero itself.

## Approach 1: Monotonic Stack

Only a (local) monotonically increasing stack is allowed. i.e. $$num[i] \geq num[j]$$ for any $$i > j$$.

For example: `142`, `k = 1`, smallest value possible is 12 because 12 is the smallest among 42, 12 and 14 (removing 1st, 2nd and 3rd digit respectively).

Explanation: we only care for the local monotonicity because when we have a number split into two part, ab $$\rArr$$ a, b, when each of digit inside a and b is monotonically increasing, ab is also smallest. This is true no matter is the input number ab itself is monotonic or not.

After that, if k > 0, i.e. some more digits need to be removed, we remove the trailing k digits. This is true because in such case the remaining digits must be monotonically increasing. Remove the least significant digits gives the smallest value.

The time and space complexity is $$O(N)$$.

p.s. `vector<char>` is used instead of `stack<char>` because we can get iterator `vector<char>::begin()` and `vector<char>::end()` while stack doesn't have iterators. One line conversion to string could be done by `string ansStr(ans.begin()+idx, ans.end());`.

<SolutionAuthor name="@DoubleSpicy"/>

```cpp
class Solution {
public:
    string removeKdigits(string num, int k) {
        vector<char> ans = {num[0]};
        // do the monotoically increasing thing
        for (int i = 1; i < num.length(); i++){
            while(k > 0 && ans.size() > 0 && num[i] < ans.back()){
                ans.pop_back();
                k--;
            }
            ans.push_back(num[i]);
        }

        // if there are still some more digits that need to be removed, 
        // remove k more trailing digits
        while(k--){
            ans.pop_back();
        }

        // remove leading zeroes
        int idx = 0;
        while(idx < ans.size()){
            if (ans[idx] == '0'){
                idx++;
            }
            else{
                break;
            }
        }

        string ansStr(ans.begin()+idx, ans.end());
        
        if (ansStr.length() == 0){
          // if everything is popped, give it back a 0.
          // e.g. 12, k = 2
            ansStr += '0';
        }
        return ansStr;
    }
};
```
