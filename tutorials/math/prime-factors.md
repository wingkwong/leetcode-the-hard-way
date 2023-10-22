---
title: 'Prime Factors'
description: 'Factor of a given number which is a prime number.'
hide_table_of_contents: true
draft: true
keywords:
  - leetcode
  - tutorial
  - prime factors
---

<TutorialAuthors names="@wingkwong, @Ishwarendra"/>

## Overview

A prime factor is a factor of a number that is also a prime number. For example, the prime factors of $12$ are $2$ and $3$, as $12 = 2 * 2 * 3$. Prime factorization is the process of finding the prime factors of a number. This can be done by repeatedly dividing the number by prime numbers until the remaining number is also a prime number. The prime factorization of a number is unique, meaning that there is only one combination of prime numbers that multiply together to equal that number. The prime factorization of a number can be useful in solving mathematical problems such as finding the greatest common divisor (GCD) of two numbers or the least common multiple (LCM) of two numbers.

## Implementation

We know that every composite number $N$ has a prime factor less than $N$. Thus, we can iterate over numbers from $2$ to $N$ and whenever we find number that divides $N$ we divide $N$ by it until it no longer divides $N$. 

<details>
<summary>But wouldn't we accidently divide N by a non-prime number this way?</summary>

No, we won't because every composite number has a prime factor less than $N$ so as we iterate over $2$ to $N$ we will cancel out all prime factors of any non-prime numbers from $N$ making it indivisible by that non-prime number.

</details>


We can further speed up our algorithm by using the fact that a number can have atmost $1$ prime factor greater than $\sqrt(n)$. This can be easily proved by assuming that a number contains two prime factors greater than $\sqrt{n}$, let's call them $P$ and $Q$. 

Since $P > \sqrt n$ and $Q > \sqrt n$ $\implies$ $P \cdot Q > \sqrt n  \cdot \sqrt n (= n^2)$. This is not possible as $P$ and $Q$ are prime factor of $N$ so their product must be less than or equal to $N$.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@Ishwarendra"/>


```cpp
vector<int> getPrimeFactors(int n) {
  vector<int> prime_factors;

  // i * i <= n or i <= sqrt(n) both work.
  for (int i = 2; i * i <= n; i++) { 
    while (n % i == 0) {
      prime_factors.emplace_back(i);
      n /= i;
    }
  }

  if (n > 1) prime_factors.emplace_back(n);
  return prime_factors;
}
```

</TabItem>
</Tabs>

- **Time Complexity:** $O(\sqrt{n})$

Before moving further, it's important to recognise that a number $N$ cannot have more than $log(N)$ prime factors. Since the smallest prime factor a number can have is $2$ and $2^{log(n)} \geq n$. If the number has a prime factor bigger than $2$ than it will have even lesser prime factors. The pre-requisite for this method is knowing [Sieve of Eratosthenes](../math/number-theory/sieve-of-eratosthenes.md).

We can infact, optimise our code to find prime factors of a number $N$ in $O(log(N))$ time. But to do so, we need to do pre computation which takes $O(MAX)$ time, where $MAX$ is the biggest number upto which we can answer the query. Thus the final time complexity is $O(MAX + log(N))$. This is helpful only if we have to find prime factor of multiple numbers less than or equal to $MAX$.

Since the pre computation takes $O(MAX)$ time so we cannot find prime factors of very large numbers (due to constraints on time) using this method. The pre computation process is a modification of [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes). For each number from $2$ to $MAX$ we find it's smallest prime factor and store it in an array, let's call it `min_prime`. We will see how to find `min_prime` array later, first let us see how to calculate prime factor of a number $N$ if we already have the `min_prime` array.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@Ishwarendra"/>


```cpp
// For sake of simplicity let us assume min_prime is a global vector.
vector<int> getPrimeFactorsInLogn(int n) {
  vector<int> prime_factors;

  while (n > 1) {
    int smallest_prime_factor_of_n = min_prime[n];
    prime_factors.push_back(smallest_prime_factor_of_n);
    n /= smallest_prime_factor_of_n;
  }
  return prime_factors;
}
```

</TabItem>
</Tabs>

- **Time Complexity:** $O(log(n))$, since each time the number $n$ is divided by a number greater than equal to $2$, so it will take only $log(n)$ operation for $n$ to reach $1$.

<details>
<summary> How to find min_prime array? </summary>

```cpp
vector<int> minPrime(int MAX) {
  vector<int> min_prime(MAX + 1);

  // Set min_prime[i] = i
  iota(std::begin(min_prime), std::end(min_prime), 0);

  for (int i = 2; i * i <= MAX; i++) { 
      if (min_prime[i] != i) continue;

      // if min_prime[i] = i then i must be a prime number.
      // Any multiple of i less than i * i (i.e., i * 2, i * 3, ... i * (i - 1)) has a smaller prime factor than i.
      for (int j = i * i; j <= MAX; j += i) min_prime[j] = std::min(min_prime[j], i);
  }

  return min_prime;
}
```
</details>

Now, that we are aware the techniques used to find prime factors let us solve some problem to get a better grip over the topic.

## [Example #1: 2521. Distinct Prime Factors Product of Array](https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/description/)

Let us take two numbers $A = {p_1} ^ {a_1} \times {p_2} ^ {a_2} \times \cdots \times {p_k} ^ {a_k}$ and $B= {p_1} ^ {b_1} \times {p_2} ^ {b_2} \times \cdots \times {p_k} ^ {b_k}$, where $p_i$ is a prime numbers and $a_i, b_i \geq 0$.

What is $A \times B$?

We know $a^b \times a^c = a^{b + c}$. Using this property we can say that $A \times B = ({p_1}^{a_1 + b_1}) \times ({p_2} ^ {a_2 + b_2}) \times \cdots \times ({p_k}^{a_k + b_k}).$ Thus, we can find prime factor of individual numbers and just add up the power of primes. Function `getPrimeFactors(n)` is same as coded in the start. To get distinct elements we use `set` to store all prime factors of all numbers.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@Ishwarendra"/>

```cpp
int distinctPrimeFactors(vector<int>& nums) {
  set<int> distinct_pf;
  for (auto num : nums) {
    auto pf = getPrimeFactors(num);
    for (auto prime : pf) distinct_pf.emplace(prime);
  }

  return distinct_pf.size();
}
```

</TabItem>
</Tabs>

- **Time Complexity:** $O(n \cdot \sqrt MAX)$, where $MAX$ is the max number present in `nums` and $n$ is length of `nums`.
- **Space Complexity:** $O(\text{number of prime from 2 to MAX})$.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@Ishwarendra"/>

```cpp
class Solution {
  vector<int> minPrime(int MAX) {
    vector<int> min_prime(MAX + 1);
    iota(std::begin(min_prime), std::end(min_prime), 0);

    for (int i = 2; i * i <= MAX; i++) { 
        if (min_prime[i] != i) continue;
        for (int j = i * i; j <= MAX; j += i) min_prime[j] = std::min(min_prime[j], i);
    }

    return min_prime;
  }

  // We need to pass the min_prime vector to use inside the function.
  vector<int> getPrimeFactorsInLogn(int n, std::vector<int> &min_prime) {
    vector<int> prime_factors;

    while (n > 1) {
      int smallest_prime_factor_of_n = min_prime[n];
      prime_factors.push_back(smallest_prime_factor_of_n);
      n /= smallest_prime_factor_of_n;
    } 

    return prime_factors;
  }
public:
  int distinctPrimeFactors(vector<int>& nums) {
    set<int> distinct_pf;

    // Finding the limit upto which we should run sieve.
    const int max = *max_element(begin(nums), end(nums));
    auto min_prime = minPrime(max + 1);

    for (auto num : nums) {
      // Get prime factors of each number in log(n) time.
      auto pf = getPrimeFactorsInLogn(num, min_prime);
      for (auto prime : pf) distinct_pf.emplace(prime);
    }

    return distinct_pf.size();
  }
};
```

</TabItem>
</Tabs>

- **Time Complexity:** $O(MAX + n \cdot log(MAX))$, where $MAX$ is the max element of `nums` and $n$ is the length of `nums`.
- **Space Complexity:** $O(MAX)$, since we need the `min_prime` vector. Other vector are of size $log(MAX)$ only.

## [Example #2: 2507. Smallest Value After Replacing with Sum of Prime Factors](https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors/description/)

In this problem, we have keep replacing $n$ with sum of it's prime factors. We need to stop the process once $n$ becomes prime as a prime number has only $2$ factors $1$ and itself. Since $1$ is not a prime number so it doesn't change. Once our process stops, we will have the minimum number, because sum of prime factor of any number is always less than itself.

<details>
<summary> Sum of prime factor of any number is always less than itself. Why? </summary>

If we take a composite number then it can be written as product of atleast $2$ different numbers. Let $N$ be a composite number such that $N = A \cdot B$, where $A, B > 1$.

We know that 

$$$
\begin{equation}
  A \cdot B \geq 2 \cdot A
\end{equation}
$$$ 

$$$
\begin{equation}
  A \cdot B \geq 2 \cdot B
\end{equation}
$$$ 

Adding $(1)$ and $(2)$ we get, $2 \cdot (A \cdot B) \geq 2 \cdot (A + B) \implies A \cdot B \geq A + B.$ 
</details>

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@Ishwarendra" />

```cpp
int smallestValue(int n) {
  while (true)
  {
    auto pf = getPrimeFactors(n);
    int sum = accumulate(begin(pf), end(pf), 0);

    if (sum == n) break;
    n = sum;
  }

  return n;
}
```

</TabItem>
</Tabs>

- **Time Complexity:** $O(n \cdot sqrt{n} \cdot log(n)$.
- **Space Complexity:** $O(log(n))$, since there cannot be more than $log(n)$ prime factor of a number $n$.

The above code is bound to come out of `while` loop in atmost $log(n)$ steps. In the worst case, $n = 2 \cdot P$ where $P = \frac{n}{2}$ is a prime number. In this case $n$ decrease from $n$ to $\frac{n}{2} + 2$ which is approximately $\frac{n}{2}$. Thus at each step $n$ decrease by a factor of $2$. If it has bigger prime factors then it will take even less steps to terminate the `while` loop.

## [Example #3: 952. Largest Component Size by Common Factor](https://leetcode.com/problems/largest-component-size-by-common-factor/description/)

This problem requires basic knowledge of graph traversal. The two popular traversals are [Depth First Search](../graph-theory/depth-first-search.md) and [Breadth First Search](../graph-theory/breadth-first-search.md). 

First let us see how to build the graph. Naive way of building graph would be to iterate over all $(i, j)$ pairs and check if $\gcd(nums_i, nums_j) > 1$. If it is then add an edge bweten them, else not. But this approch will take $O(n^2)$ operations in worst case, which will not pass.

A different way to build graph could be to add edge between $p$ and $nums_i$ if $p$ is a prime factor of $nums_i$. Since any number $n$ has atmost $log(n)$ prime factors so we will have atmost $n \cdot log(n)$ edges in the graph. But while counting component we need to make sure that the node is present in `nums`. If it isn't then it can serve as a bridge connecting two numbers from `nums`, but it should not included in count of nodes in connected component.

<details>
<summary> An Example </summary>

**For Example:** `nums = [6, 8]`. In this case $2$ which is a prime factor of $6$ and $8$ acts as a bridge connecting $6$ to $8$ but total connected component should be $2$ only.

Graph for above example looks as shown below. Although total node in the connected component is $4$ but we do not count $2$ and $3$ when reporting answer as it isn't present in `nums`. Image generated using [CS Academy Graph Editor](https://csacademy.com/app/graph_editor/).

![graph when nums=[2, 6]](https://github.com/wingkwong/leetcode-the-hard-way/assets/75680424/3ba892d6-92c2-4a76-a1fc-280433b0cc54)

</details>

Now, as the graph is built we need three main functions:
1. `getPrimeFactorsInLogn(n)`: Gives us prime factor of a number $n$. Since $\max(nums)$ is only $10^5$ so we prefer this function over the one which does the same thing in $\sqrt n$ time.
2. `getComponentCount(src)`: Starting from node $\text{src}$ how many nodes (that are present in `nums`) can be reached from it.
3. `largestComponentSize(nums)`: The main function that builds graph and use other $2$ functions.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@Ishwarendra" />

```cpp
class Solution {
  // isPresent[i] = 1 if i is present in nums, else 0
  // g = graph using which we can find maximum connected component size
  vector<int> isPresent; 
  vector<vector<int>> g;

  vector<int> minPrime(int MAX) {
    vector<int> min_prime(MAX + 1);
    iota(std::begin(min_prime), std::end(min_prime), 0);

    for (int i = 2; i * i <= MAX; i++) { 
        if (min_prime[i] != i) continue;
        for (int j = i * i; j <= MAX; j += i) min_prime[j] = std::min(min_prime[j], i);
    }

    return min_prime;
  }

  vector<int> getPrimeFactorsInLogn(int n, std::vector<int> &min_prime) {
    vector<int> prime_factors;

    while (n > 1) {
      int smallest_prime_factor_of_n = min_prime[n];

      // Since we only need unique prime factors so we won't push same number again and again
      if (n % smallest_prime_factor_of_n == 0) prime_factors.push_back(smallest_prime_factor_of_n);

      // Remove the prime factor completely from n
      while (n % smallest_prime_factor_of_n == 0) n /= smallest_prime_factor_of_n;
    } 

    return prime_factors;
  }

  int getComponentSize(int src, std::vector<bool> &vis) {
    queue<int> q;
    q.emplace(src);
    vis[src] = true;
    int count = isPresent[src];

    while (!q.empty()) {
      int node = q.front();
      q.pop();

      for (int child : g[node]) {
        if (!vis[child]) {
          q.emplace(child);
          vis[child] = true;
          
          // Increase component size only if the number is present in nums.
          count += isPresent[child];
        }
      }
    }

    return count;
  }  
public:
  int largestComponentSize(vector<int>& nums) {
    int max_elem = *max_element(begin(nums), end(nums));
    auto min_prime = minPrime(max_elem + 1);

    isPresent.resize(max_elem + 1);
    g.resize(max_elem + 1);
    vector<bool> vis(max_elem + 1);

    for (int num : nums) {
      isPresent[num] = 1;
      auto pf = getPrimeFactorsInLogn(num, min_prime);

      for (auto prime : pf) {
        if (prime == num) continue;

        // num and prime has gcd > 1
        g[prime].emplace_back(num);
        g[num].emplace_back(prime);
      }
    } 

    int ans = isPresent[1];
    for (int src = 2; src <= max_elem; src++) {
      ans = max(ans, getComponentSize(src, vis));
    }

    return ans;
  }
};
```

</TabItem>
</Tabs>

- **Time Complexity:** $O(MAX + n \cdot log(n))$, where $MAX$ is the max element of `nums` and $n$ is length of `nums`.
- **Space Complexity:** $O(MAX + n \cdot log(n))$, as we are building a graph of $n \cdot log(n)$ edges and $(MAX + 1)$ nodes.

The process of finding connected components can be done using a data structure [Disjoint Set Union](../graph-theory/disjoint-set-union.md) as well.

export const suggestedProblems = [
  {
    "problemName": "263. Ugly Number",
    "difficulty": "Easy",
    "leetCodeLink": "https://leetcode.com/problems/ugly-number/description/",
    "solutionLink": ""
  },
  {
    "problemName": "650. 2 Keys Keyboard",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/2-keys-keyboard/description/",
    "solutionLink": ""
  },
  {
    "problemName": "1627. Graph Connectivity with threshold",
    "difficulty": "Hard",
    "leetCodeLink": "https://leetcode.com/problems/graph-connectivity-with-threshold/description/",
    "solutionLink": ""
  },
  {
    "problemName": "2709. Greatest Common Divisor Traversal",
    "difficulty": "Hard",
    "leetCodeLink": "https://leetcode.com/problems/greatest-common-divisor-traversal/description/",
    "solutionLink": ""
  },
]

<Table title="Suggested Problems" data={suggestedProblems} />