---
title: 'Count Primes'
description: 'Prime numbers are numbers that have only 2 factors: 1 and themselves.'
hide_table_of_contents: true
keywords:
  - leetcode
  - tutorial
  - count primes
  - Sieve of Eratosthenes 
  - algorithm
---

<TutorialAuthors names="@M-Rahul1"/>

## Overview
 Prime-counting function is the function counting the number of prime numbers less than or equal to some real number x. The integer is constrained to be non-negative.

### Explanation
Primes less than 10 are 2, 3, 5 and 7. So, the count is 4.

## Approach(Brute Force)
The general approach is to check for every integer less than N and increment the result if they are prime. For example, consider N = 10. Now, we can run a check from 2 to N – 1 to find how many primes lie in this range. But, this approach requires a prime check on the whole range, [2, N – 1].  Therefore, this is slow.

We can do some optimizations like:

1. Every prime number other than 2 is an odd integer. So, after 2, we can check for odd integers only.
2. We can check if a number is prime in O( √N) time to improve the algorithm.
However, we still have a better approach, discussed later in this article.

### Algorithm
1. If the number is less than 3, return 1, as 2 is the smallest prime
2. Run a loop checking all numbers, starting from 3
3. A number, N is prime if:
  - It has 0 prime factors between 2 and √N
4. If the number is prime, increment result
5. Print the result

### Implementation
### C++ Program
``` C++ Program

#include <bits/stdc++.h>
using namespace std;

//Function to check whether number is prime or not

bool isPrime(int N)
{
    for(int i = 2 ; i * i <= N ; i++)
        if(N % i == 0)
            return false;
    return true;
}

//Function to count number of primes upto N

int countPrimes(int N)
{
    if(N < 3)
        return 0;
    int cnt = 1;
    for(int i = 3 ; i < N ; i += 2)//since number is atleast 3, 2 is a prime less than N
        //If the number is prime, increment result
        if(isPrime(i))
            cnt++;

    //Print the result
    return cnt;
}


int main()
{
    int N = 10;
    cout << countPrimes(N) << '\n';
}
```
### Java Program

```java
class count_primes
{
    //Function to check whether number is prime or not

    static boolean isPrime(int N)
    {
        for(int i = 2 ; i * i <= N ; i++)
            if(N % i == 0)
                return false;

        return true;
    }
    //Function to count number of primes upto N

    static int countPrimes(int N)
    {
        if(N < 3)
            return 0;
        int cnt = 1;//since number is atleast 3, 2 is a prime less than N
        for(int i = 3 ; i < N ; i += 2)
            //If the number is prime, increment result
            if(isPrime(i))
                cnt++;
    //Print the result
        return cnt;
    }

    public static void main(String args[])
    {
        int N = 10;
        System.out.println(countPrimes(N));
    }
}
```
```
4
```

## Approach(Optimal Method)

In mathematics, the sieve of Eratosthenes is an ancient algorithm for finding all prime numbers up to any given limit.

It does so by iteratively marking as composite (i.e., not prime) the multiples of each prime, starting with the first prime number, 2. The multiples of a given prime are generated as a sequence of numbers starting from that prime, with constant difference between them that is equal to that prime. This is the sieve's key distinction from using trial division to sequentially test each candidate number for divisibility by each prime. Once all the multiples of each discovered prime have been marked as composites, the remaining unmarked numbers are primes.

### Algorithm
1. Maintain a boolean array prime of size equal to N – 1
2. prime[] is used to mark composites and checking primes at the end
3. Initialise prime of every integer as true. The algorithm sets false to every non-prime number
4. Run a loop of consecutive integers, starting from 2 until the first multiple of the integer is less than N:
  - For every integer x, if it has prime[x] as true, mark all its multiple as false
  - The multiple of every integer here starts from x * x as all other multiples of x will already be unmarked.
5. Finally check how many numbers in the range [2, N – 1] have true in the prime table
6. Print the result

### Implementation

``` C++ Program
#include <bits/stdc++.h>
using namespace std;

int sieve(int N)
{
    if(N < 3)
        return 0;

    int cnt = 0;
    bool prime[N];
    for(int i = 2 ; i < N ; i++)
        prime[i] = true;

    for(int i = 2 ; i * i < N ; i++)
    {
        if(prime[i])
            for(int j = i * i ; j < N ; j += i)
                prime[j] = false;
    }

    for(int i = 2 ; i < N ; i++)
        if(prime[i])
            cnt++;

    return cnt;
}

int countPrimes(int N)
{
    if(N < 3)
        return 0;
    return sieve(N);
}


int main()
{
    int N = 10;
    cout << countPrimes(N) << '\n';
}
```
```java
class count_primes
{
    static int sieve(int N)
    {
        if(N < 3)
            return 0;

        int cnt = 0;
        boolean[] prime= new boolean[N];
        for(int i = 2 ; i < N ; i++)
            prime[i] = true;

        for(int i = 2 ; i * i < N ; i++)
        {
            if(prime[i])
                for(int j = i * i ; j < N ; j += i)
                    prime[j] = false;
        }

        for(int i = 2 ; i < N ; i++)
            if(prime[i])
                cnt++;

        return cnt;
    }

    static int countPrimes(int N)
    {
        if(N < 3)
            return 0;
        return sieve(N);
    }

    public static void main(String args[])
    {
        int N = 10;
        System.out.println(countPrimes(N));
    }
}
```
```
4
```
#### Time Complexity: O(Nlog(logN))

#### Auxiliary Space: O(N)

### Suggested Problems 
https://leetcode.com/problems/count-primes/

### References
https://www.youtube.com/watch?v=fI6kv_GtKlM
