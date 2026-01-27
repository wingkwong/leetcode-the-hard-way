---
description: 'Author: @heder, @wkw, @jit | https://leetcode.com/problems/first-unique-character-in-a-string/'
tags: [Hash Table, String, Queue, Counting]
---

# 0387 - First Unique Character in a String (Easy)

## Problem Link

https://leetcode.com/problems/first-unique-character-in-a-string/

## Problem Statement

Given a string `s`, _find the first non-repeating character in it and return its index_. If it does not exist, return `-1`.

**Example 1:**

```
Input: s = "leetcode"
Output: 0
```

**Example 2:**

```
Input: s = "loveleetcode"
Output: 2
```

**Example 3:**

```
Input: s = "aabb"
Output: -1
```

**Constraints:**

- `1 <= s.length <= 10^5`
- `s` consists of only lowercase English letters.

## Approach 1: Frequency Count

We can solve this problem in a linear time. We iterate the string and count the frequency of each character. This would takes $O(n)$. Then we go through the string again and check the frequency. If the frequency is $1$, that means it is unique. We can return the result at the first occurrence or return $-1$ if there is no such case.

- Time Complexity: $O(n)$
- Space Complexity: $O(1)$

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
class Solution {
public:
    __attribute__((no_sanitize("address")))
    static int firstUniqChar(const string& s) {
        array<int, 32> counts = {};
        for (char ch : s) ++counts[ch & 0x1f];
        for (int i = 0; i < s.size(); ++i) {
            if (counts[s[i] & 0x1f] == 1) return i;
        }
        return -1;
    }
};
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def firstUniqChar(self, s: str) -> int:
        cnt = Counter(s)
        for i, c in enumerate(s):
            if cnt[c] == 1:
                return i
        return -1
```

</TabItem>

<TabItem value="elixir" label="Elixir">
<SolutionAuthor name="@jit"/>

```elixir
defmodule Solution do
  @spec first_uniq_char(s :: String.t) :: integer
  # Frequency counting:
  def first_uniq_char(s) do
    str = to_charlist(s)
    frq = Enum.frequencies(str)
    Enum.find_index(str, &(frq[&1] == 1)) || -1
  end
end
```

</TabItem>
</Tabs>
