---
title: 'Combinatorics'
description: 'Combinatorics is the branch of mathematics dealing with counting and enumerating the possibilities for a certain event to occur. It is heavily used as it enables us to find very short and concise answers to many problems.'
hide_table_of_contents: false
keywords:
  - leetcode
  - tutorial
  - combinatorics
---

<TutorialAuthors names="@BlackPanther112358"/>

## Overview

Combinatorics is primarily involved with art of counting. This includes counting number of ways for a certain position to occur, to arrange some objects according to given rules or choosing some objects from a collection. Quite often, the required number takes a very large value, thus it is a very common practice to return the answer by taking modulo with some prime number $p$ (which is $1e9 + 7$ quite often, and quite recently $998244353$ also has become prominent). You can read more about modulo [here](../../tutorials/basic-topics/mod.md).

## Finding $n \choose r$

Pronounced "n choose r", this is the mathematical notation to represent number of ways to choose r objects out of a collection of n objects. The analytical formula can be written as $n \choose r$ $=$ $\frac{n!}{r!\,(n - r)!}$.

This leads to a neat recurrence relation: $n \choose r$ $=$ $n - 1 \choose r$ + $n - 1 \choose r - 1$ $\\$

We can precompute all the required values using the above formula in $O(n^2)$ and then perform lookup in $O(1)$ time. The resulting values also form [Pascal's Triangle](https://en.wikipedia.org/wiki/Pascal%27s_triangle).

### Example #1: [2221 - Find Triangular Sum of an Array](https://leetcode.com/problems/find-triangular-sum-of-an-array/)

The important insight here is that the figure provided is nothing but an inverted Pascal's Triangle and contribution of each cell in the final sum is the value of cell multiplied by the binomial coefficient at the particular position in Pascal's Triangle.

Thus for the cell at $i^{th}$ index in the topmost row, it's value is multiplied by $n - 1 \choose i$ and added to the final sum $modulo\,10$.
Time Complexity of the program is $O(n^2)$ for computing the binomial coefficient and $O(n)$ Space complexity.

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
class Solution {
public:
    int triangularSum(vector<int>& nums) {
        int n = nums.size();
        vector<int> pascalTriangleRow = {1};
        // calculate the ith row using (i - 1)th row
        for (int i = 0; i < n; i++) {
            vector<int> nextRow = {1};
            for(int j = 1; j < i; j++){
                nextRow.push_back((pascalTriangleRow[j] + pascalTriangleRow[j - 1]) % 10);
            }
            nextRow.push_back(1);
            pascalTriangleRow = nextRow;
        }
        // calculate the final answer as discussed above
        int ans = 0;
        for (int i = 0; i < n; i++) {
            ans += (nums[i] * pascalTriangleRow[i]) % 10;
        }
        return ans%10;
    }
};
```

</TabItem>
</Tabs>

Sometimes it is not possible to calculate the entirety of Pascal's Triangle due to larger values of $n$. In this case, we begin by precomputing
$x!$$\,$ $\forall$$\,$$x \in [{0, n}]$. Similarly, we will also [precompute](https://cp-algorithms.com/algebra/module-inverse.html#mod-inv-all-num) the modular inverses.  This can be achieved in $O(n)$ time. Thus we can now compute $n \choose r$ using the analytical equation presented earlier. You can read about modular inverses [here](../../tutorials/basic-topics/mod.md)

The implementation of above can be as follows:

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
struct comb{
    int mod;
    // make arrays to store the factorial and inverse factorial modulo m
    vector<long long int> factorial;
    vector<long long int> inverse_factorial;

    // N is the maximum value possible of input
    comb (int N, int mod_in = 1e9 + 7) {
        // calculate values for factorial
        mod = mod_in;
        factorial.push_back(1);
        for(int i = 1; i <= N; i++) factorial.push_back((factorial.back() * i) % mod);

        // calculate values for inverse factorial
        vector<long long int> inverse;
        inverse.push_back(1);
        inverse.push_back(1);
        inverse_factorial.push_back(1);
        inverse_factorial.push_back(1);
        for (int i = 2; i <= N; i++) {
            inverse.push_back((mod - ((mod/i) * inverse[mod%i]) % mod) % mod);
            inverse_factorial.push_back((inverse_factorial[i - 1] * inverse[i]) % mod);
        }
    }

    // function to calculate nCr(n, r)
    long long int nCr(int n, int r){
        if ((r < 0) || (r > n)) return 0;
        return ((factorial[n] * inverse_factorial[r]) % mod * inverse_factorial[n - r]) % mod;
    }
};
```

</TabItem>
</Tabs>

For further reading, you can visit [cp-algorithms](https://cp-algorithms.com/combinatorics/binomial-coefficients.html).

## Finding the $n^{th}$ catalan number

This is a very famous sequence of natural numbers and has a variety of applications.
- Number of ways to make balanced bracket sequences using $n$ left and $n$ right brackets.
- [Number of ways to make binary trees](https://leetcode.com/problems/unique-binary-search-trees/description/)
- Number of ways to form a mountain range with $n$ upstrokes and downstrokes. $\\$

[Here](https://en.wikipedia.org/wiki/Catalan_number#Applications_in_combinatorics) is a more exhastive list.

The $n^{th}$ Catalan number can be found using the formula:

$$
C_n = \frac{1}{n + 1} {2n \choose n}
$$

### Example #2: [1863 - Sum of All Subset XOR Totals](https://leetcode.com/problems/sum-of-all-subset-xor-totals/description/)

This is an example of a very tricky problem which heavily simplifies after using some Combinatorics and [Bit Manipulation](../../tutorials/math/bit-manipulation.md)

Here we will consider the $i^{th}$ bit from the right. Let's say that the $i^{th}$ bit is set in $k$ out of $n$ numbers in some given subset. If $k$ is odd, then $i^{th}$ bit is set in the XOR of all numbers of the subset, otherwise, it is not set.

Hence if there are $m$ numbers out of $n$ with $i^{th}$ bit set, then the contribution of the bit is $Place\,value\,of\,the\,bit$ $*$ $number\,of\,ways\,to\,get\,odd\,k$ 

Thus we can find $\sum_{k = 1}^{k <= m}$ $m \choose k$ for all odd values of $k$, which comes out to $2^{m - 1}$. Furthermore, we can choose the remaining elements in the subset in $2^{n - m}$ ways by similar logic. Hence total ways to get odd values of $k$ are $2^{n - 1}$, which is independent of both $m$ and $k$.

Hence all we need to do is find bits which are set atleast once (by computing OR) and then multiply the final answer with $2^{n - 1}$.
Time Complexity of the program is $O(n)$ with $O(1)$ Space Complexity.

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
class Solution {
public:
    int subsetXORSum(vector<int>& nums) {
        int arrayOR = 0;
        // do OR of whole array to obtain bits which are set atleast once
        for (int num : nums) arrayOR |= num;
        // compute the final answer using the formula discussed
        return arrayOR * (1 << (nums.size() - 1));
    }
};
```

</TabItem>
</Tabs>

### Example #3: [0062 - Unique Paths](https://leetcode.com/problems/unique-paths/)

Here our robot always goes either down or right. We know that we have to go down $m - 1$ times and go left $n - 1$ times. Thus we need to find the number of ways to arrange these. One way to visualize this is if we have $m + n - 2$ blank spaces, and we have to fill $n - 1$ of them using $R$ (representing going right) and remaining using $D$ (representing going down). Then we can just choose the number of spaces to fill with $L$ from total number of spaces. The the final solution is simply $m + n - 2 \choose n - 1$.

Notice that we are not required to return the value after taking modulo and the constraints allow for a $O(n^2)$ precomputation. Thus, we will
simply construct the entire Pascal's Triangle and query it everytime to calculate the answer.

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
class Solution {
public:
    int uniquePaths(int m, int n) {
        // the upper limit is m + n - 2 = 198
        vector<vector<long long int>> PascalTriangle(199, vector<long long int> ());
        PascalTriangle[0] = {1};
        // calculating every row of the triangle
        for (int i = 1; i <= 198; i++) {
            PascalTriangle[i].push_back(1);
            // using the recurrence relation.
            for (int j = 1; j < i; j++) {
                // take mod with INT_MAX as otherwise some values may overflow.
                PascalTriangle[i].push_back((PascalTriangle[i - 1][j] + PascalTriangle[i - 1][j - 1]) % INT_MAX);
            }
            PascalTriangle[i].push_back(1);
        }
        // query the final answer
        return PascalTriangle[m + n - 2][n - 1];
    }
};
```

</TabItem>
</Tabs>

NOTE: Since every testcase only asks us to find $n \choose r$ for particular values of $n$ and $r$, we can instead of precomputing the entire
Pascal's Triangle, just compute the paricular value of $n \choose r$ using the recurrence relation and memoization. This will lead to less time
and space complexity, as we only calculate the values we need. Also, then we no longer need to take modulo with INT_MAX as all the values will
fit in the "int" type as mentioned in the question.

You can check the complete solution for this problem [here](../../solutions/0000-0099/unique-paths-medium)

### Example #4: [2400 - Number of Ways to Reach a Position After Exactly k Steps](https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/)

Let's represent going left as $-1$ and going right as $+1$. Thus, following the same idea as before, we have $k$ blanks to fill with $+1$ and
$-1$ such that there sum is equal to $endPos - startPos$.

Here we can immediately see that such will be impossible in only 2 cases:
- The parity of $k$ and $endPos - startPos$ is different.
- The magnitude of $k$ is less than magnitude of $endPos - startPos$.

After checking for above 2 cases, we know for sure that there exists a solution. Now we can just find the number of $1's$ and $-1's$ required
to sum to $endPos - startPos$. Expressing this as an equation:

$(1) * a + (-1) * b = endPos - startPos$, such that $a + b = k$

Here $a$ represents the number of $1$, i.e., the right steps and similarly $b$ represents number of $-1$, i.e., the number of left steps. We
are now interested in finding the number of possible values of $a$ and $b$ such that the above equations are satisfied.

Adding both equations, 

$2a$ $=$ $endPos - startPos + k$

Thus, 

$a$ $=$ $\frac{k \, + \, endPos \, - \, startPos}{2}$

Similarly, by subtracting the equations and simplifying,

$b$ $=$ $\frac{k \, - \, endPos \, + \, startPos}{2}$


Then the solution is $k \choose a$ $=$ $k \choose b$ as we need to find number of ways to choose $a$ or $b$ moves, out of $k$ moves.

Thus, we need to find $nCr$ $(k, \frac{k - endPos + startPos}{2})$.

To implement this, you can both precompute the entire Pascal's Triangle, or use concept of mudular inverses to find the required value.

You can check the complete solution for this problem [here](../../solutions/2400-2499/number-of-ways-to-reach-a-position-after-exactly-k-steps-medium)

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
    "solutionLink": "../../solutions/1900-1999/count-ways-to-build-rooms-in-an-ant-colony"
  },
  {
    "problemName": "1467 - Probability of a Two Boxes Having The Same Number of Distinct Balls",
    "difficulty": "Hard",
    "leetCodeLink": "https://leetcode.com/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/",
    "solutionLink": ""
  },
]

<Table title="Suggested Problems" data={suggestedProblems} />

## References
1. [cp-algorithms](https://cp-algorithms.com/) 