---
title: 'Count Primes'
description: 'Prime numbers are the numbers which can be divisble by only 2 numbers, 1 and the number itself'
hide_table_of_contents: true
keywords:
  - Leetcode
  - Tutorial
  - Prime numbers
  - Count primes
  - Sieve of Eratosthenes 
  - Algorithm
---

<TutorialAuthors names="@Akash-1gif"/>

## Overview:
+ Prime numbers are the numbers which can only be divisble by 1 and the number itself.
+ Our goals are:
    - Case 1: Count the number of prime numbers present between the numbers n1 and n2 (both inclusive, n1 < n2, n1 > 0).
    - Case 2: Count the number of prime numbers which are less than or equal to number n (n > 0).

## Explanation:
+ For case 1, consider n1 and n2 are given as inputs. We have to find the number of prime numbers between n1 and n2.
+ For case 2, consider n as the input. We have to find the number of prime numbers between 1 to n.
### Example:
+ For case 1: If n1=10 and n2=20, then the prime numbers between 10 and 20 are: 11,13,17 and 19. So the output will be 4.
+ For case 2: If n=15, then the prime numbers between 1 to 15 are 2,3,5,7,11 and 13. So the output will be 6.

## Approach(Brute Force):
+ For case 1: we will iterate through the numbers starting from n1 till n2, and count all the prime numbers between n1 and n2, and return the following count as output.
+ For case 2: we will iterate from 2 till n-1, and count all the prime numbers between 2 to n, and return the following count as the output. 

## Algorithm:
### For case 1:
1. Declare a variable 'count' which keeps a count of all the prime numbers between n1 and n2. Initially count=0.
2. Initiate a loop from j=n1 to j=n2.
3. For every value of j, check whether j is prime or not. If it is prime then increment the variable count by 1.
4. After iterating from j=n1 to j=n2, we will get the final count value. Return/print the final count value.
### For case 2:
1. Declare a variable 'count' which keeps a count of all the prime numbers between 2 and n (1 is not a prime number, hence it is excluded).
2. Initiate a loop from j=2 to j=n.
3. For every value of j, check whether j is prime or not, if it is prime then increment the count variable by 1.
4. After iterating from j=2 to j=n, we will get the final count value. Return/print the final count value.

## Additional:
### Algorithm/Method to find whether a number is prime or not:
Consider that we have number k. Steps to check whether k is prime is given by:
1. Consider a flag variable, initially flag=0 (indicates that the number is prime, if flag=1 then the number is not prime)
2. Iterate a loop from p=2 to p=k-1 (for more efficiency, we iterate from 2 to sqrt(k)).
3. If the number k is divisible by p, then increment the flag value by 1.
4. After iterating from p=2 to p=k-1, if flag is equal to 0, then it is prime. Else k is a composite number.

### C++ Program:
+ For case 1:
``` C++
#include<bits/stdc++.h>
using namespace std;

//  function to check whether the number is prime or not:
int check_prime(int k){
    int flag=0;
    for(int j=2;j<=sqrt(k);j++){
        if(k%j==0){
            flag=1;
            break;
        }
    }
    return flag;
}

//  function to count the number of prime numbers between n1 to n2:
int count_prime(int n1,int n2){
    int count=0;
    for(int i=n1;i<=n2;i++){
        int p=check_prime(i);
        if(p==0){
            count++;
        }
    }
    return count;
}

//   driver function:
int main(){
    int n1=10,n2=20;
    cout<<count_prime(n1,n2)<<endl;
    return 0;
}
```
```
Output:
4
```


+ For case 2:
``` C++
#include<bits/stdc++.h>
using namespace std;

//  program to check whether the number is prime or not:
int check_prime(int k){
    int flag=0;
    for(int j=2;j<=sqrt(k);j++){
        if(k%j==0){
            flag=1;
            break;
        }
    }
    return flag;
}

//  program to count the number of prime numbers between 2 to n:
int count_prime(int n){
    int count=0;
    for(int i=2;i<n;i++){
        int p=check_prime(i);
        if(p==0){
            count++;
            cout<<i<<endl;
        }
    }
    return count;
}

//   driver program:
int main(){
    int n=15;
    cout<<count_prime(n)<<endl;
    return 0;
}
```
```
Output:
6
```
#### Time Complexity: 
In both the cases, we run a loop n times (to count the number of prime numbers) and another loop n^(1/2)times to check whether the number is prime or not. So the overall time complexity is O(n^(3/2)). 

## Approach(Optimal Method)
#### Sieve of Eratosthenes

### Algorithm
We start from 2, and on each encounter of a prime number, we mark its multiples as composite.
### Time Complexity: O(n(log(log(n))))
### Space Complexity: O(n)

## Implementation

``` C++ Program
#include<bits/stdc++.h>
using namespace std;

//Sieve of Eratosthenes
void soe(int n){
    vector<int> p(n+1,0);
    for(int i=2;i*i<=n;i++){
        if(p[i]==0){
            for(int j=i+i;j<=n;j=j+i){
                p[j]=1;
            }
        }
    }
    for(int i=2;i<p.size();i++){
        if(p[i]==0){
            cout<<i<<" ";
        }
    }
}
//  driver function
int main(){
    int n=15;
    cout<<soe(n)<<endl;
    return 0;
}
```
```
Output:
6
```

### Suggested Problems 
https://leetcode.com/problems/count-primes/

