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
In this we are given an integer, N. The goal is to count how numbers less than N, are primes. The integer is constrained to be non-negative.

## Explanation
Primes less than 10 are 2, 3, 5 and 7. So, the count is 4.

## Approach(Brute Force)
The general approach is to check for every integer less than N and increment the result if they are prime. For example, consider N = 10. Now, we can run a check from 2 to N – 1 to find how many primes lie in this range.

### Algorithm
We can check if each number is a prime or not. To check if the number 'i' is prime we will traverse all the numbers till[2,sqrt(i)] can check if they divide N or not.
Similarly, we do this for all the N numbers.

### C++ Program
``` C++

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
void primeSieve(int N){
    int count=0;
    for(int i=2;i<=n;i++){
        if(isPrime(i)){
            count++;
        }
    }
    return count;
}

int main()
{
    int N = 10;
    cout << primeSieve(N) << '\n';
}
```
```
Output:
4
```
#### Time Complexity: 
We run a loop for N/2 times. In every check, a time of complexity O(N / 2) (taking average as N / 2) is spent. So, the time complexity of this algorithm is O(N√N).

#### Auxiliary Space: 
O(1), Only constant space is used for constant variables.

## Approach(Optimal Method)
#### Sieve of Eratosthenes

### Algorithm
We start from 2, and on each encounter of a prime number, we mark its multiples as composite.
### Time Complexity: O(n log log n)
### Space Complexity: O(n)

## Implementation

``` C++ Program
#include <bits/stdc++.h>
using namespace std;

int primeSieve(int N)
{
    int count = 0;
    int prime[N]={0};
    for(int i = 2 ; i <= N ; i++)
    {
        if(prime[i]==0)
            for(int j = i * i ; j < N ; j += i)
                prime[j] = 1;
    }

    for(int i = 2 ; i <= N ; i++)
        if(prime[i]==0)
            count++;

    return count;
}

int main()
{
    int N = 10;
    cout << primeSieve(N) ;
}
```
```
Output:
4
```

### Suggested Problems 
https://leetcode.com/problems/count-primes/

