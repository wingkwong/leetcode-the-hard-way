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


# Manacher's Algorithm

There are many ways to find the `longest palindromic substring`. One can find it in O(N³) and also in O(N²) time complexity. But using `Manacher's Algorithm` we do it in `O(N) time`. This algorithm was discovered by `Glenn K. Manacher` in 1975.

Given a string, find the longest substring which is palindrome. 

* if the given string is “abaaba”, the output should be “abaaba”
* if the given string is “abababa”, the output should be “abababa”
* if the given string is “abcbabcbabcba”, the output should be “abcbabcbabcba”

* ## Brute force Approach O(N³) time

```C++
void longestPalSubstring(string str){
    // Getting length of the input string
    int n = str.size();

    // All substrings of length 1 are palindromes
    int maxLength = 1;
    
    int start = 0;

    // Checking all the substrings
    for (int i = 0; i < n; i++){
        for (int j = i; j < n; j++){
            int flag = 1;

            // Checking for a palindromic subtring
            for (int k = 0; k < (j - i + 1) / 2; k++)
                if (str[i + k] != str[j - k])
                    flag = 0;

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
daabddfddbegtd
### Output: 
The Longest Palindromic Substring is: bddfddb
### Time complexity O(N³)
O(N³)
In the brute force approach, three nested loops are used to find the longest palindromic substring, so the time complexity will be O(N³).
### Space complexity O(1)
No extra space is needed in this approach, so the space complexity will be O(1).

* ## Manacher's Algorithm
This algorithm is faster than the brute force approach, as it exploits the idea of a palindrome happening inside another palindrome.

Manacher's algorithm is designed to find the palindromic substrings with odd lengths only. To use it for even lengths also, we tweak the input string by inserting the character "#" at the beginning and each alternate position after that (changing "abcaac" to "#a#b#c#a#a#c#").

In the case of an odd length palindrome, the middle character will be a character of the original string, surrounded by "#".

<img width="299" alt="MA1" src="https://user-images.githubusercontent.com/89184573/193343997-fa706deb-975d-4cac-933b-832822a3ea08.png">

In the case of an even length palindrome, the middle character will be a "#" character.

<img width="295" alt="MA2" src="https://user-images.githubusercontent.com/89184573/193344022-033e76fe-5242-4ac1-878c-40eece33092a.png">

#### Steps of the `Manacher's algorithm` are as follows:

1. Create an array or a list (sChars) of length strLen which is 2∗n+3 (n being the length of the given string), to modify the given string.
2. Assign the first and last element of sChars to be "@" and "$", respectively.
3. Fill the blank spaces in sChars by characters of the given string and "#" alternatively.
4. Declare variables
* Implicating maximum detected length of palindrome substring maxLen = 0.
* Position from where to start searching start=0.
* Highest position of the extreme right character of all detected palindromes maxRight=0.
* Center of the detected palindrome center=0.
5. Create an array or a list p to record the width of each palindrome about their center, center being the corresponding characters in sChars.
6. Create a for loop iterating from 1 to strLen−1, with i incrementing in each iteration.
7. In each iteration, check if i < maxRight, if yes, then assign minimum of maxRight-i and p[2*center-i] to p[i].
8. Nest a while loop inside the for loop, to count with width along the center, condition being, sChars[i+p[i]+1] is equal to sChars[i-p[i]-1], if yes, increment p[i] by 1.
9. To update center, check if i+p[i] is greater than maxRight, if yes, assign center to be 1, and maxRight to be i+p[i].
10. For updating the Maximum length detected, check if p[i] is greater than maxLen, if yes, then assign start to be (i-p[i]-1)/2, and maxLen to be p[i].
11. Come out of the for loop, and print the substring in the given string, starting from start and ending at start+maxLen-1.

#### Implementation -

```c++
void longestPalSubstring(string s){
    /*
        If length of given string is n then its length after
        inserting n+1 "#", one "@", and one "$" will be
        (n) + (n+1) + (1) + (1) = 2n+3
    */
    int strLen = 2 * s.length() + 3;
    char* sChars = new char[strLen];

    /*
        Inserting special characters to ignore special cases
        at the beginning and end of the array
        "abc" -> @ # a # b # c # $
        "" -> @#$
        "a" -> @ # a # $
    */
    sChars[0] = '@';
    sChars[strLen - 1] = '$';
    int t = 1;

    for (char c : s){
        sChars[t++] = '#';
        sChars[t++] = c;
    }
    sChars[t] = '#';

    int maxLen = 0;
    int start = 0;
    int maxRight = 0;
    int center = 0;
    int* p = new int[strLen]; // i's radius, which doesn't include i

    for(int i = 1; i < strLen - 1; i++){
        if (i < maxRight){
            p[i] = min(maxRight - i, p[2 * center - i]);
        }

        // Expanding along the center
        while (sChars[i + p[i] + 1] == sChars[i - p[i] - 1]){
            p[i]++;
        }

        // Updating center and its bound
        if (i + p[i] > maxRight){
            center = i;
            maxRight = i + p[i];
        }

        // Updating ans
        if (p[i] > maxLen){
            start = (i - p[i] - 1) / 2;
            maxLen = p[i];
        }
    }

    // Printing the longest palindromic substring
    cout << "The Longest Palindromic Substring is: ";
    for (int i = start; i <= start+maxLength-1; i++)
        cout << str[i];
}
```
### Input: 
daabddfddbegtd
### Output: 
The Longest Palindromic Substring is: bddfddb
### Time Complexity Analysis of Manacher's Algorithm
O(N)

At the first glance, it may seem that the algorithm has a O(N²) time complexity due to nested loops, but that's not the case, a more careful analysis shows that the algorithm is linear and amortized.

Each successful comparison results in maxRight moving one step forward, and it never reduces, therefore, the inner while loop gets executed at most n times. Hence, the time complexity of Manacher's algorithm will be O(N).

### Space Complexity
O(N)

We need O(n) space to create and form p (palindrome width).
# Author

- [@wizeewig](https://www.github.com/wizeewig)

