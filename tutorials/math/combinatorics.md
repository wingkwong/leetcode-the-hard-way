---
title: 'Combinatorics'
description: 'nCr and its applications'
hide_table_of_contents: false
draft: true
keywords:
  - leetcode
  - tutorial
  - combinatorics
---

<TutorialAuthors names="@BlackPanther112358"/>

## Overview

Combinatorics is primarily involved with art of counting. This includes counting no. of ways for a certain position to occur, to arrange some objects according to given rules or choosing some objects from a collection. Quite often, the required number takes a very large value, thus it is a very common practice to return the answer by taking modulo with some prime number $p$ (which is $1e9 + 7$ quite often, and quite recently $998244353$ also has become prominent). You can read more about modulo [here](../../tutorials/basic-topics/mod.md)

## Finding $n \choose r$

Pronounced "n choose r", this is the mathematical notation to represent number of ways to choose r objects out of a collection of n objects. The analytical formula can be written as $n \choose r$ $=$ $\frac{n!}{r!\,(n - r)!}$.

This leads to a neat recurrence relation :-  $n \choose r$ $=$ $n - 1 \choose r$ + $n - 1 \choose r - 1$ $\\$
We can precompute all the required values using the above formula in $O(n^2)$ and then perform lookup in $O(1)$ time. The resulting values also form [Pascal's Triangle](https://en.wikipedia.org/wiki/Pascal%27s_triangle).

### Example #1 [2221 - Find Triangular Sum of an Array](https://leetcode.com/problems/find-triangular-sum-of-an-array/)

The important insight here is that the figure provided is nothing but an inverted Pascal's Triangle and contribution of each cell in the final sum is $value\,of\,cell$ $*$ $binomial\,coefficient\,at\,the\,particular\,position\,in\,Pascal's\,Triangle$

Thus for the cell at $i^{th}$ index in the topmost row, it's value is multiplied by $n - 1 \choose i$ and added to the final sum $modulo\,10$.

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
class Solution {
public:
    int triangularSum(vector<int>& nums) {
        int n = nums.size();
        vector<int> pascalTriangleRow = {1};
        // Calculate the ith row using (i - 1)th row
        for(int i = 0; i < n; i++){
            vector<int> nextRow = {1};
            for(int j = 1; j < i; j++){
                nextRow.push_back((pascalTriangleRow[j] + pascalTriangleRow[j - 1])%10);
            }
            nextRow.push_back(1);
            pascalTriangleRow = nextRow;
        }
        // Calculate the final answer as discussed above
        int ans = 0;
        for(int i = 0; i < n; i++){
            ans += (nums[i]*pascalTriangleRow[i])%10;
        }
        return ans%10;
    }
};
```

</TabItem>
</Tabs>

Sometimes it is not possible to calculate the entirety of Pascal's Triangle due to larger values of $n$. In this case, we begin by precomputing $x!$   $\forall$ $x \in [{0, n}]$. Similarly, we will also [precompute](https://cp-algorithms.com/algebra/module-inverse.html#mod-inv-all-num) the modular inverses. This can be achieved in $O(n)$ time. Thus we can now compute $n \choose r$ using the analytical equation presented earlier. You can read about modular inverses [here](../../tutorials/basic-topics/mod.md)

For further reading, you can visit [cp-algorithms](https://cp-algorithms.com/combinatorics/binomial-coefficients.html).

## Finding the $n^{th}$ catalan number

This is a very famous sequence of natural numbers and has a variety of applications.
- Number of ways to make balanced bracket sequences using $n$ left and $n$ right brackets.
- [Number of ways to make binary trees](https://leetcode.com/problems/unique-binary-search-trees/description/)
- Number of ways to form a mountain range with $n$ upstrokes and downstrokes. $\\$

[Here](https://en.wikipedia.org/wiki/Catalan_number#Applications_in_combinatorics) is a more exhastive list.

The $n^{th}$ Catalan number can be found using the formula:
$C_n$ $=$ $\frac{1}{n + 1}$$2n \choose n$

### Example #2 [1863 - Sum of All Subset XOR Totals](https://leetcode.com/problems/sum-of-all-subset-xor-totals/description/)

This is an example of a very tricky problem which heavily simplifies after using some Combinatorics and [Bit Manipulation](../../tutorials/math/bit-manipulation.md)

Here we will consider the $i^{th}$ bit from the right. Let's say that the $i^{th}$ bit is set in $k$ out of $n$ numbers in some given subset. If $k$ is odd, then $i^{th}$ bit is set in the XOR of all numbers of the subset, otherwise, it is not set.

Hence if there are $m$ numbers out of $n$ with $i^{th}$ bit set, then the contribution of the bit is $Place\,value\,of\,the\,bit$ $*$ $number\,of\,ways\,to\,get\,odd\,k$ 

Thus we can find $\sum_{k = 1}^{k <= m}$ $m \choose k$ for all odd values of $k$, which comes out to $2^{m - 1}$. Furthermore, we can choose the remaining elements in the subset in $2^{n - m}$ ways by similar logic. Hence total ways to get odd values of $k$ are $2^{n - 1}$, which is independent of both $m$ and $k$.

Hence all we need to do is find bits which are set atleast once (by computing OR) and then multiply the final answer with $2^{n - 1}$.

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
class Solution {
public:
    int subsetXORSum(vector<int>& nums) {
        int arrayOR = 0;
        for(int num:nums) arrayOR |= num;
        return arrayOR*(1<<(nums.size() - 1));
    }
};
```

</TabItem>
</Tabs>

export const suggestedProblems = [
  {
    "problemName": "920 - Number of Music Playlists",
    "difficulty": "Hard",
    "leetCodeLink": "https://leetcode.com/problems/number-of-music-playlists/",
    "solutionLink": ""
  },
  {
    "problemName": "1916 - Count Ways to Build Rooms in an Ant Colony",
    "difficulty": "Hard",
    "leetCodeLink": "https://leetcode.com/problems/count-ways-to-build-rooms-in-an-ant-colony/",
    "solutionLink": ""
  },
  {
    "problemName": "1467 - Probability of a Two Boxes Having The Same Number of Distinct Balls",
    "difficulty": "Hard",
    "leetCodeLink": "https://leetcode.com/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/",
    "solutionLink": ""
  },
]

<Table title="Suggested Problems" data={suggestedProblems} />