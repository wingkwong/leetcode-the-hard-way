---
title: 'Greedy'
description: 'Designing greedy algorithms to find a greedy strategy that produces an optimal solution to the problem.'
# hide_table_of_contents: true
draft: true
keywords:
  - leetcode
  - tutorial
  - greedy
  - algorithm
---

<TutorialAuthors names="@abhishek-sultaniya"/>

## Overview

Greedy is a strategy to solve various problems optimally.A greedy algorithm constructs a solution to the problem by always making a
choice that looks the best at the moment. A greedy algorithm never takes back
its choices, but directly constructs the final solution. For this reason, greedy
algorithms are usually very efficient.

Rules:

1)Always pick the best choice at any step

2)Works on the assumption that by picking a local optimum solution at each step we will reach a global optimum

3)The greedy algorithm never reconsiders its choices

```
Example 1: You have coins of denomination Rs 10, Rs 5, and Rs 1.Find the minimum number of coins to get a total of 17 Rs.

Solution: 4 coins: 10+5+1+1

Example 2: You have coins of denomination Rs 10, Rs 7, and Rs 1.Find the minimum number of coins to get a total of 16 Rs.
Solution: 4 coins: 7+7+1+1
Solution if greedy was used : 7 coins: 10+1+1+1+1+1+1
```
## JOB Scheduling
Given a set of n jobs along with profits earned if the job is completed by its deadline, order the jobs in such a way that there is maximum profit.
| JOB        | a | b | c | d |e                                                                                                                                                                                                                          |
| -----------|---|---|----|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Deadline | 2 | 1 | 3 | 2 |1                                                                                                                                    |
| Profit           | 60  | 100 | 20|40|20                                                                                                                               |

Solution: Sort the jobs according to their profit in descending order
| JOB        | b | a | d | c |e                                                                                                                                                                                                                          |
| -----------|---|---|----|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Deadline | 1 | 2 | 2 | 3 |1                                                                                                                                    |
| Profit           | 100  | 60 | 40|20|20                                                                                                                               |

```
void printJobScheduling (Job arr[], int n)
{
sort (arr, arr+n, comparison);

int result[n]; // To store result (Sequence of jobs) 
bool slot[n]; // To keep track of free time slots

// Initialize all slots to be free 
for (int i=0; i<n; i++) 
    slot[i]= false;

// Iterate through all given jobs 
for (int i=0; i<n; i++)
{
// Find a free slot for this job (Note that we start from the last possible slot) 
  for (int j=min(n, arr[i].dead)-1; j=0; j--)
  {
    // Free slot found
    if (slot[j]==false)
    {
      result[j] i;  // Add this job to result 
      slot[j] true; // Make this slot occupied 
      break;
    }
  }
}

// Print the result 
for (int i=0; i<n; i++){
  if (slot[i]) 
    cout<<<<< arr[result[i]].id << " ";
}
```

Time complexity: O(n^2)

export const suggestedProblems = [
  {
    "problemName": "455- Assign Cookies",
    "difficulty": "Easy",
    "leetCodeLink": "https://leetcode.com/problems/assign-cookies/",
    "solutionLink": ""
  },
  {
    "problemName": "860 - Lemonade Change",
    "difficulty": "Easy",
    "leetCodeLink": "https://leetcode.com/problems/lemonade-change/",
    "solutionLink": ""  
  },
  {
    "problemName": "1005- Maximize Sum Of Array After K Negations",
    "difficulty": "Easy",
    "leetCodeLink": "https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/",
    "solutionLink": ""
  },
  {
    "problemName": "45- Jump Game II",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/jump-game-ii/",
    "solutionLink": ""
  },
  {
    "problemName": "402- Remove K Digits",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/remove-k-digits/",
    "solutionLink": ""
  },
]

<Table title="Suggested Problems" data={suggestedProblems} />
