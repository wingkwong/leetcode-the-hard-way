---
title: 'Matrix Exponentiation'
description: 'Binary Exponentiation but it involves matrices.'
hide_table_of_contents: true
draft: true
keywords:
  - leetcode
  - tutorial
  - matrix exponentiation
---

<TutorialAuthors names="@Ishwarendra"/>

## Overview

First and foremost, it is **highly recommended** to go through [Binary Exponentiation](./number-theory/binary-exponentiation.md), if you are not acquainted with it or don't remember it clearly. It is expected that reader knows Multiplication of two matrices.

Matrix exponentiation is very useful in solving problems that involve finding $n^{th}$ term of a [linear recurrence with constant coefficients](https://en.wikipedia.org/wiki/Linear_recurrence_with_constant_coefficients) in order of $log(n)$. 

Matrix exponentiation is all about finding a matrix $T$ such that $T \cdot A = B$ where $A$ and $B$ are two matrices of appropriate order. Before we delve deeper let's us recall two things:
1. Matrix Multiplication is **associative** $i.e.$, $A \cdot (B \cdot C) = (A \cdot B) \cdot C$ 
2. A matrix $A$ of order $(n \times m)$ can be multiplied with another matrix of order $(m \times p)$ **only**. 

$Q.1.$ Before we go any further, let us solve a problem. Find a matrix $T$ such that $T \cdot A$ = $B$, where

$$$
A = \begin{bmatrix}
a \\
b \\
c
\end{bmatrix}

;

B = \begin{bmatrix}
2 a + 3 b \\
a + 2 b + 4 c
\end{bmatrix}
$$$

<details>

<summary> Answer </summary>

$$$
T = \begin{bmatrix}
2 & 3 & 0 \\
1 & 2 & 2
\end{bmatrix}
$$$

Verify the following yourself: 

$$$ 
\begin{bmatrix}
2 & 3 & 0 \\
1 & 2 & 2
\end{bmatrix} \cdot
\begin{bmatrix}
a \\
b \\
c
\end{bmatrix}
= 
\begin{bmatrix}
2 a + 3 b \\
a + 2 b + 4 c
\end{bmatrix}
$$$

If you are struggling with matrix multiplication remember that $B_{i, j}$ comes from sum and product of $i^{th}$ **row** of $A$ and $j^{th}$ **column** of $B$.

</details>

$Q.2.$ Find a matrix $T$ such that $T \cdot A = B$, where

$$$A = \begin{bmatrix}
a \\
b \\
c
\end{bmatrix}

B = \begin{bmatrix}
a + 3b \\
2b + 3c \\
5a + 3b + 7c \\
6a
\end{bmatrix}
$$$

<details>

<summary> Answer </summary>

$$$
T = \begin{bmatrix}
1 & 3 & 0 \\
0 & 2 & 3 \\
5 & 3 & 7 \\
6 & 0 & 0
\end{bmatrix}
$$$ 
Verify it yourself!

</details>

Let us now see a concrete problem that can be solved using Matrix Exponentiation.

### [1. Fibonacci Number](https://leetcode.com/problems/fibonacci-number/description/)

We can solve the problem using top-down dynamic programming or by bottom-up dynamic programming, but let us see how we can solve it using Matrix Exponentiation first. The recurrence for fibonacci series is:
$$$
f(x) = 
    \begin{cases}
        f(x - 1) + f(x - 2), & x \geq 2\\
        x, & 0 \leq x \leq 1 \\
    \end{cases}
$$$

Let us try to find a matrix $T$ such that 

$$$
T \cdot

\begin{bmatrix}
f(x) \\
f(x - 1)
\end{bmatrix}

=

\begin{bmatrix}
f(x + 1) \\
f(x)
\end{bmatrix}
$$$

<details>

<summary> Finding T </summary>

We can rewrite the above equation as:

$$$
T \cdot

\begin{bmatrix}
f(x) \\
f(x - 1)
\end{bmatrix}

=
 \begin{bmatrix}
f(x) + f(x - 1) \\
f(x)
\end{bmatrix}
$$$

or even simpler by putting $a = f(x)$ and $b = f(x - 1)$
$$$
T \cdot

\begin{bmatrix}
a \\
b
\end{bmatrix}

=
 \begin{bmatrix}
a + b \\
a
\end{bmatrix}
$$$

It is now easy to see that $T = \begin{bmatrix} 
1 & 1 \\
1 & 0
\end{bmatrix}.$
</details>

$$$
\begin{equation}
   \begin{bmatrix} 
      1 & 1 \\
      1 & 0
   \end{bmatrix} \cdot
   \begin{bmatrix}
      f(1) \\
      f(0)
   \end{bmatrix} = 
   \begin{bmatrix}
      f(2) \\
      f(1)
   \end{bmatrix}
\end{equation}
$$$
$$$
\begin{equation}
   \begin{bmatrix} 
      1 & 1 \\
      1 & 0
   \end{bmatrix} \cdot
   \begin{bmatrix}
      f(2) \\
      f(1)
   \end{bmatrix} = 
   \begin{bmatrix}
      f(3) \\
      f(2)
   \end{bmatrix}
\end{equation}
$$$

Using equation $(1)$ and $(2)$ we get,
$$$
T
\cdot
\begin{pmatrix}
   T
   \cdot 
   \begin{bmatrix}
      f(1) \\
      f(0)
   \end{bmatrix}
\end{pmatrix}
   =
 \begin{bmatrix}
    f(3) \\
    f(2)
 \end{bmatrix}

\implies 

(T \cdot T) \cdot

\begin{bmatrix}
f(1)\\
f(0)
\end{bmatrix}
=
\begin{bmatrix}
f(3)\\
f(2)
\end{bmatrix}

\text{(}\because \text{ Matrix multiplication is associative.)}
$$$

$$$
\implies

T^2 \cdot 
\begin{bmatrix}
f(1) \\
f(0)
\end{bmatrix}
= 
\begin{bmatrix}
f(3) \\
f(2)
\end{bmatrix}
= 
\begin{bmatrix}
f(1 + 2) \\
f(0 + 2)
\end{bmatrix}
$$$

From above pattern, we can conclude that,
$$$
(T)^n \cdot 
\begin{bmatrix}
f(1)\\
f(0)
\end{bmatrix}
=
\begin{bmatrix}
f(1 + n)\\
f(0 + n)
\end{bmatrix}
$$$

But this solution is not better than dynamic programming solution which runs in $O(n)$ time, infact our matrix exponentiation runs in $O(n \cdot 2^3)$ time. The extra factor of $2^3$ comes from matrix multiplication **(Matrix multiplication of two $(n \times n)$ matrix takes $O(n^3)$ time).** To optimise our solution further we can use binary exponentiation to calculate $T^n$ in $O(log(n) \cdot k^3)$ time, where $k$ is the dimension of matrix. In this case $k = 2$.

Let us see the code for the above idea. Our code can be divided into three broad functions:

| S.No. | Function Name    | Parameter Description            | What does the function do?                         |
| ----- | ---------------- | -------------------------------- | -------------------------------------------------- |
| 1.    | `multiply(A, B)` | $A, B:$ Matrix (2D array/list)   | Returns a new matrix $C = A \cdot B$               |
| 2.    | `power(A, exp)`    | $A:$ A Square Matrix (2D array/list), $exp:$ integer | Returns a new matrix $C = A^{exp}$ in $O(log(exp)) \cdot k^3$ time, where $k$ is order of matrix |
| 3.    | `fib(n)`   | $n:$ integer                     | Returns $n^{th}$ term of fibonacci series          |

Let us implement them one by one. First one is `multiply(A, B)`.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@Ishwarendra"/>

```cpp
std::vector<std::vector<int>> multiply(const std::vector<std::vector<int>> A, 
    const std::vector<std::vector<int>> B) 
{
    int n1 = std::size(A), m1 = std::size(A[0]);
    int n2 = std::size(B), m2 = std::size(B[0]);
    assert(m1 == n2); // If m1 != n2, program will give runtime error

    std::vector<std::vector<int>> C(n1, std::vector<int>(m2));
    for (int i = 0; i < n1; i++)
    {
        for (int j = 0; j < m2; j++)
        {
            for (int k = 0; k < m1; k++)
                C[i][j] += A[i][k] * B[k][j];
        }
    }

    return C;
}
```

</TabItem>
</Tabs>

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@Ishwarendra"/>

```cpp
std::vector<std::vector<int>> power(std::vector<std::vector<int>> A, int exp) 
{
    int n = std::size(A), m = std::size(A[0]);
    assert(n == m);

    // We need to start with identity matrix because (A^0 = Identity Matrix)
    std::vector res(n, std::vector<int>(n));
    for (int i = 0; i < n; i++)
        res[i][i] = 1;

    while (exp > 0) 
    {
        if (exp & 1) 
            res = multiply(res, A);

        A = multiply(A, A);
        exp >>= 1;
    }

    return res;
}
```

</TabItem>
</Tabs>

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@Ishwarendra"/>

```cpp
int fib(int n)
{
    std::vector<std::vector<int>> T {{1, 1}, {1, 0}};
    std::vector<std::vector<int>> A {{1}, {0}};

    /*  
        T^n * A = B = {{F(1 + n)},
                       {F(0 + n)}}
    */
    auto B = multiply(power(T, n), A);
    return B[1][0];
}
```

</TabItem>
</Tabs>

In the given problem it was guaranteed that answer would fit in signed integer range. But if instead of exact number, the problem asked for $fib(n) \mod P,$ where $P = 1e9 + 7$ then we will have to modify our `multiply` function so it performs modulo operation while multiplying the numbers. 

The only change is in the block inside innermost $\textbf{for-loop}$. The following line:
```cpp
C[i][j] += A[i][k] * B[k][j];
```

changes to
```cpp
// Multiplying A[i][k] with 1LL converts it into long long type, 
// which prevents overflow during multiplication. 
// Max Value of A[i][k] = P - 1 and max value of B[k][j] = P - 1. Both of them fit in integer range
// But there product doesn't fit in the integer range before we perform modulo operation. 
C[i][j] += (1LL * A[i][k] * B[k][j]) % P; 
C[i][j] %= P;
```

- **Time Complexity:** $O(log(n))$
- **Space Complexity:** $O(1)$ as we only made matrices of constant dimension.

### [2. Count Vowels Permutation](https://leetcode.com/problems/count-vowels-permutation/description/)

Let us try to solve this problem using dynamic programming. 

$f(len, j) = \text{Number of ways to make a string of length len such that it ends with character j,}$, here $j \in \{a, e, i, o, u\}.$

If we know the current character then we know which characters can come after it. For example, if our string ends at character $\text{'a'}$ then we know that the next character is bound to be $\text{'e'}$. Simiarly, if our string ends at character $\text{'o'}$ then the next character must be either $\text{'i'}$  or $\text{'u'}.$

We try to see the constraints in reverse, i.e., if we want our string of length $n$ to have $j$ as its ending character then what all possible string of length $(n - 1)$ are there which can be extended. Our final answer will be $\sum^{i \in \text{\{a, e, i, o, u\}}} f(n, i)$.

Time Complexity of above solution is $O(n)$, which can be reduced to $O(log(n))$ by using matrix exponentiation. Let us see how we can do so. First let us form the recurrence.

$$$
f(len, j) = 
    \begin{cases}
        f(len - 1,\ e) + f(len,\ i) + f(i,\ u)\ & j = a\\
        f(len - 1,\ a) + f(len - 1,\ i)\ & j = e\\
        f(len - 1,\ e) + f(len - 1,\ o)\ & j = i\\
        f(len - 1,\ i)\ & j = o\\
        f(len - 1,\ i) + f(len - 1,\ o)\ & j = u
    \end{cases}
$$$

One can easily verify the recurrence. For example, if we want our string of length $n$ to end at character $\text{'i'}$ then we can only extend strings which ended at character $\text{'e'}$ or $\text{'o'}$ and which have length $(n - 1)$. 

Now, we have a linear recurrence. For Let us try to find the matrix $T$ such that 
$$$
T \cdot
\begin{bmatrix}
  f(len - 1, a) \\
  f(len - 1, e) \\
  f(len - 1, i) \\
  f(len - 1, o) \\
  f(len - 1, u) 
\end{bmatrix}
= 
\begin{bmatrix}
  f(len, a) \\
  f(len, e) \\
  f(len, i) \\
  f(len, o) \\
  f(len, u) 
\end{bmatrix}
= 
\begin{bmatrix}
  \begin{array}{l}
    f(len - 1, e) + f(len - 1, i) + f(len - 1, u)\\
    f(len - 1, a) + f(len - 1, i)\\
    f(len - 1, e) + f(len - 1, o)\\
    f(len - 1, i) \\
    f(len - 1, i) + f(len - 1, o)
  \end{array}
\end{bmatrix}
$$$

<details>

<summary> Finding T </summary>

$$$
T = 
\begin{bmatrix}
0 & 1 & 1 & 0 & 1 & \\ 
1 & 0 & 1 & 0 & 0 & \\ 
0 & 1 & 0 & 1 & 0 & \\ 
0 & 0 & 1 & 0 & 0 & \\ 
0 & 0 & 1 & 1 & 0 & 
\end{bmatrix}
$$$

If you are unable to see how we came up with matrix $T$, then for simplicity let us write $f(len - 1, ch)$ as only $ch$. Now $T \cdot A = B$ looks as shown below:

$$$
T \cdot \begin{bmatrix}
a \\
e \\
i \\
o \\ 
u
\end{bmatrix} 
= 
\begin{bmatrix}
    e + i + u \\
    a + i \\
    e + o \\
    i \\
    i + o
\end{bmatrix}
$$$

</details>

Our `multiply` function has one change that was mentioned at the end of last problem (taking modulo at each operation) and the `power` function remains unchanged.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@Ishwarendra"/>

```cpp
int countVowelPermutation(int n) 
{
    std::vector T(5, std::vector<int>(5, 0));
    T[0][1] = T[0][2] = T[0][4] = 1;
    T[1][0] = T[1][2] = 1;
    T[2][1] = T[2][3] = 1;
    T[3][2] = 1;
    T[4][2] = T[4][3] = 1;

    std::vector A(5, std::vector(1, 1)); // There is 1 way to make string of length-1 whose ending character is fixed.
    
    // Since our base case is string of length-1 so we need T^(n - 1) only to get answer for string of length n = (1 + (n - 1))
    auto B = multiply(power(T, n - 1), A); 
    
    int ans = 0;
    for (int i = 0; i < std::size(B); i++)
        ans = (ans + B[i][0]) % MOD;

    return ans;
}
```

</TabItem>
</Tabs>

- **Time Complexity:** $O(log(n)$
- **Space Complexity:** $O(1)$ as we have created 2D vector of constant dimension only.

#### General Advice:
- You can use matrix exponentiation only if the recurrence is linear and has constant coefficients.
- Matrix exponentiation can often be used as an optimisation for dynamic programming solutions. Again check if the recurrence formed is **linear with constant coefficients or not!.**

export const suggestedProblems = [
  {
    "problemName": "1137. N-th Tribonacci Number",
    "difficulty": "Easy",
    "leetCodeLink": "https://leetcode.com/problems/n-th-tribonacci-number/description/",
    "solutionLink": "../../../solutions/1100-1199/1137-n-th-tribonacci-number-easy.md"
  },
]

<Table title="Suggested Problems" data={suggestedProblems} />