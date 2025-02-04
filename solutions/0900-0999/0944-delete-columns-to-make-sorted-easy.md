---
description: 'Author: @wkw | https://leetcode.com/problems/delete-columns-to-make-sorted/'
tags: [Array, String]
---

# 0944 - Delete Columns to Make Sorted (Easy)

## Problem Link

https://leetcode.com/problems/delete-columns-to-make-sorted/

## Problem Statement

You are given an array of `n` strings `strs`, all of the same length.

The strings can be arranged such that there is one on each line, making a grid. For example, `strs = ["abc", "bce", "cae"]` can be arranged as:

```
abc
bce
cae
```

You want to **delete** the columns that are **not sorted lexicographically**. In the above example (0-indexed), columns 0 (`'a'`, `'b'`, `'c'`) and 2 (`'c'`, `'e'`, `'e'`) are sorted while column 1 (`'b'`, `'c'`, `'a'`) is not, so you would delete column 1.

Return _the number of columns that you will delete_.

**Example 1:**

```
Input: strs = ["cba","daf","ghi"]
Output: 1
Explanation: The grid looks as follows:
  cba
  daf
  ghi
Columns 0 and 2 are sorted, but column 1 is not, so you only need to delete 1 column.
```

**Example 2:**

```
Input: strs = ["a","b"]
Output: 0
Explanation: The grid looks as follows:
  a
  b
Column 0 is the only column and is sorted, so you will not delete any columns.
```

**Example 3:**

```
Input: strs = ["zyx","wvu","tsr"]
Output: 3
Explanation: The grid looks as follows:
  zyx
  wvu
  tsr
All 3 columns are not sorted, so you will delete all 3.
```

**Constraints:**

- `n == strs.length`
- `1 <= n <= 100`
- `1 <= strs[i].length <= 1000`
- `strs[i]` consists of lowercase English letters.

## Approach 1: Matrix Traversing

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int minDeletionSize(vector<string>& s) {
        int ans = 0;
        // iterate cols
        for (int col = 0; col < s[0].size(); col++) {
            // iterate rows
            for (int row = 1; row < s.size(); row++) {
                // if the character in the previous row is greater than the character in the current row
                // then we can delete this column
                if (s[row - 1][col] > s[row][col]) {
                    ans += 1;
                    break;
                }
            }
        }
        return ans;
    }
};
```

</TabItem>

<TabItem value="rs" label="Rust">
<SolutionAuthor name="@wkw"/>

```rs
impl Solution {
    pub fn min_deletion_size(strs: Vec<String>) -> i32 {
        let mut ans = 0;
        // iterate cols
        for col in 0 .. strs[0].as_bytes().len() {
            // iterate rows
            for row in 1 .. strs.len() {
                // if the character in the previous row is greater than the character in the current row
                // then we can delete this column
                if strs[row - 1].as_bytes()[col] > strs[row].as_bytes()[col] {
                    ans += 1;
                    break;
                }
            }
        }
        ans
    }
}
```

</TabItem>
</Tabs>
