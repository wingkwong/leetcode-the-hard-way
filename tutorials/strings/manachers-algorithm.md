---
title: "Manacher's Algorithm"
description: 'Helps in finding longest palindromic substring in linear time'
draft: true
keywords:
  - leetcode
  - tutorial
  - manacher
  - algorithm
---

<TutorialAuthors names="@wizeewig"/>

# Manacher's Algorithm

There are many ways to find the `longest palindromic substring`. One can find it in $O(N ^ 3)$ and also in $O(N ^ 2)$ time complexity. But using `Manacher's Algorithm` we do it in `O(N) time`. This algorithm was discovered by `Glenn K. Manacher` in 1975.

First of all we need to understand that what is a substring. So, a substring is basically contiguous part of any array or string. For example: "square" is a substring of string "abigsquare"

And secondly what is a palindrome. So, a palindrome is any word or phrase that reads the same backwards as forwards. For example: "madam", "a nut for a jar of tuna" etc.

Given a string, find the longest substring which is palindrome. 

* if the given string is “iplayracecar”, the output should be “racecar”
* if the given string is “acacacb”, the output should be “acacacb”
* if the given string is “abababa”, the output should be “abababa”
* if the given string is “findnishi”, the output should be “indni”

* ## Brute force Approach $O(N ^ 3)$ time

```Cpp
void longestPalindromicSubstring(string str){

    // Getting length of the input string
    int L = str.size();

    // All substrings of length 1 are palindromes, hence the maxLength is assigned to be 1
    int maxLength = 1;
    
    int start = 0;

    // Checking all the substrings
    for (int i = 0; i < L; i++){
        for (int j = i; j < L; j++){
            bool flag = true;

            // Checking for a palindromic subtring
            for (int k = 0; k < (j - i + 1) / 2; k++)
                if (str[i + k] != str[j - k])
                    flag = false;

            // If substring is palindromic
            if (flag && (j - i + 1) > maxLength){
                start = i;
                maxLength = j - i + 1;
            }
        }
    }

    // Printing the longest Palindromic substring
    cout << "The Longest Palindromic Substring is: ";
    for (int i = start; i <= start+maxLength-1; i++)
        cout << str[i];
}
```
### Input: 
ppasaippuakivikauppiaska

### Output: 
The Longest Palindromic Substring is: saippuakivikauppias

> `saippuakivikauppias` is the longest known palindromic word (19 letters)

### Time complexity 
$O(N ^ 3)$

Since, three nested loops are used here so the time complexity of finding longest palindromic substring will be $O(N ^ 3)$.

### Space complexity
O(1)

No extra space is needed in this approach, so the space complexity will be O(1).

## Manacher's Algorithm
 
`Manacher's Algorithm` is way faster than the brute force approach to find the longest substring, because it uses the precomputed data. Hence, making the algorithm run in linear time. 

One important point that we need to keep in mind is that using Manacher's Algorithm we can find the palindromic substrings of odd length string or array only. To find palindromic substrings of even length string or array, we need to do a slight change in the given input i.e. in the given input string we insert "#" character at the beginning and also at each alternate position(changing "level" to "#l#e#v#e#l").

In the case of an odd length palindrome, we will surround the middle character of the string with "#"

Example: string = abbba -> ab#b#ba

In the case of an even length palindrome, the middle character will be a "#" character.

Example: string = aaccccaa -> #a#a#c#c#c#c#a#a# . Here, we can see that the middle character will come out to be a "#"

#### Steps of the `Manacher's algorithm` are as follows:

1. Create an array arr of length sLen which is 2∗n+3 (n being the length of the given string s), to modify the given string.
2. Prepend "@" and append "$" in the string s. This is done to avoid the bounds checking.
3. Now fill up arr be alternate "#" and characters of the given string s.
4. We will declare some variables-
* To store the maximum length of palindrome declare a variable maxLength
* Declare S=0, R=0 and C=0 which stores the starting, ending and center position of the palindrome found.
5. We create an array Plen to store the length of each palindrome found. The length is stored in the array about their centre i.e C.
6. Create a for loop iterating from i=1 to sLen−1.
7. Inside the for loop, check if i < R, if yes, then assign minimum of R-i and Plen[2*C-i] to Plen[i].
8. After the if condition nest a while loop, to count width along the center, condition being, arr[i+Plen[i]+1] is equal to arr[i-Plen[i]-1], if yes, increment Plen[i] by 1. Here we try to expand the palindrome centered at i.
9. Now if palindrome centered at i expands past right, we will adjust center(C) based on expanded palindrome. That means, check if i+Plen[i] is greater than R, if yes, assign C to be 1, and R to be i+Plen[i].
10. Check if Plen[i] comes out to be greater than maxLength, then the starting point S is assigned (i-Plen[i]-1)/2, and maxLength is assigned Plen[i].
11. End the for loop and return the substring of s starting from S and ending at S+maxLength-1.

#### Implementation -

```cpp

#include <bits/stdc++.h>
using namespace std;

string longestPalindromicSubstring(string s){

    int sLen = 2 * s.length() + 3;
    /* The length is 2*s.length()+3 because we inserting one "@", one "$" and n+1 "#" */
    
    char* arr= new char[sLen];
   
    arr[0] = '@';
    arr[sLen - 1] = '$';
    
    /* @ and $ are prepended and appended to each end to avoid bounds checking:
        "level" -> @ # l # e # v # e # l # $
        "car" -> @ # c # a # r # $
     */
    int temp = 1;

    for (char ch : s){
        arr[temp++] = '#';
        arr[temp++] = ch;
    }
    arr[temp] = '#';

    int maxLength = 0;
    int S = 0;
    int R = 0;
    int C = 0;
    int* Plen = new int[sLen]; // i's radius, which doesn't include i

    for(int i = 1; i < sLen - 1; i++){
        if (i < R){
            Plen[i] = min(R-i, Plen[2 *C-i]);
        }

        // Expanding along the center
        while (arr[i+Plen[i]+1] == arr[i-Plen[i]-1]){
            Plen[i]++;
        }

        // Updating center and its bound
        if (i+Plen[i]>R){
            C = i;
            R = i+Plen[i];
        }

        // Updating ans
        if (Plen[i]>maxLength){
            S = (i-Plen[i]-1)/2;
            maxLength = Plen[i];
        }
    }
    return s.substr(S, S+maxLength-1);
}

int main(){

   string str = "upthelevel";
   
    // Printing the longest palindromic substring
    cout << "The Longest Palindromic Substring is: " << longestPalindromicSubstring(str);
    
    return 0;
}
```
### Input: 
upthelevel

### Output: 
The Longest Palindromic Substring is: level

### Time Complexity Analysis of Manacher's Algorithm
O(N)

At first one might think that the algorithm has $O(N ^ 2)$ time complexity because there is a for loop inside which a while loop is nested. But on seeing clearly we can observe that as we move ahead doing the comparisons the R always increases by one, it never decreases.  

Other parts of Manacher's Algorithm run in O(N) time. So, overall complexity is O(N).

### Space Complexity
O(N)

O(N) because we just need an extra array Plen to store the length of longest Palindromic substring found.
