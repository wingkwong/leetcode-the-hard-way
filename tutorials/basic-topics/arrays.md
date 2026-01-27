---
title: 'Arrays'
description: 'An array is a data structure consisting of a collection of elements.'
hide_table_of_contents: true
keywords:
  - leetcode
  - tutorial
  - arrays
  - data structure
---

<TutorialCredits authors="@heiheihang, @wkw"/>

## Overview

Arrays are a common data structure used in many programming languages such as Python, C++, Java, and Javascript. They are used to store a collection of items and can be one-dimensional or multi-dimensional.

In the context of LeetCode, the term "array" can refer to different data structures in different languages, such as a List in Python, Array or Vector in C++, Array or ArrayList in Java, and Array in Javascript.

Let's take a look at some examples of array:

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@heiheihang"/>

```py
scores_of_students = [86, 76, 67, 98, 95]

boys_and_girls_of_classes = [[10,23], [20,20], [15,12], [13,16]]

basketball_matches = [[0, 76, 86, 100],
                       [56, 0, 87, 65],
                       [65, 34, 0, 86],
                       [72, 65, 78, 0]]
```

</TabItem>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
vector<int> scores_of_students = {86, 76, 67, 98, 95};
vector<vector<int>> boys_and_girls_of_classes = {{10,23}, {20,20}, {15,12}, {13,16}};
vector<vector<int>> basketball_matches = {{0, 76, 86, 100},
                                          {56, 0, 87, 65},
                                          {65, 34, 0, 86},
                                          {72, 65, 78, 0}};
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@wkw"/>

```java
int[] scores_of_students = {86, 76, 67, 98, 95};
int[][] boys_and_girls_of_classes = {{10,23}, {20,20}, {15,12}, {13,16}};
int[][] basketball_matches = {{0, 76, 86, 100},
                              {56, 0, 87, 65},
                              {65, 34, 0, 86},
                              {72, 65, 78, 0}};
```

</TabItem>
</Tabs>

We have 3 types of arrays.

> The syntax that we are using is Python, please refer to your own language of preference if needed.

`scores_of_students`: This array is an 1-d array containing the scores of each student. We can perform the following operations to obtain different information of the scores:

- `max(scores_of_students)`: returns the highest score in the array, which is 98 in this case
- `min(scores_of_students)`: returns the lowest score in the array, which is 67 in this case
- `sum(scores_of_students)`: returns the sum of score in the array, which is 422 in this case
- `scores_of_students.sort()`: sort the scores in order, which is `[67, 76, 86, 95, 98`] in this case. Note that it is preferred to use the pre-built sorting function when you are solving a problem NOT TARGETED to teach you sorting. It will speed up your learning.

`boys_and_girls_of_classes`: This array is a 2-d array containing the number of boys and girls of each class. For example, the first class has 10 boys and 23 girls. We can access the number of girls in the 3rd class with `boys_and_girls_of_classes[2][1]` . This is useful to obtain specific information. Let's take a look at several operations on this 2-d array:

- `boys_and_girls_of_classes.sort()`: We have two elements in each entry this time. In `python` the pre-built `sort()` sorts by the first element, then the second element, then the third (if it exists) etc...
- `boys_and_girls_of_classes.sort(key = lambda Class : Class[1])`: We can use the `key` parameter to change the `sort()` behaviour. We declare that we want to look at the number of girls **FIRST** in each `Class` in this case. There are more advanced application of `sort`, and we will learn them in harder problems.
- `list(map(lambda Class: Class[0] + Class[1], boys_and_girls_of_classes))`: This returns the list of the class size of each size. It is useful if we want to know the total number of students in each class.

`basketball_matches` : This array is a 2-d array, but it is special that its dimension is `n x n` . These arrays (or better, matrices) usually have a special meaning. In this case, we have the scores of each team competing with each other. For example, team 1 vs team 2 has the score of `76 - 56` . We will use for-loops to iterate these arrays.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@heiheihang"/>

```py
for i in range(len(basketball_matches)):
    for j in range(len(basketball_matches[0])):
        print("Team " + str(i) + " " + basketball_matches[i][j])
        print("Against")
        print("Team " + str(j) + " " + basketball_matches[j][i])
```

</TabItem>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
for (int i = 0; i < basketball_matches.size(); i++) {
    for (int j = 0; j < basketball_matches[0].size(); j++) {
        cout << "Team " << i << " " << basketball_matches[i][j] << endl;
        cout << "Against" << endl;
        cout << "Team " << j << " " << basketball_matches[j][i] << endl;
    }
}
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@wkw"/>

```java
for (int i = 0; i < basketball_matches.length; i++) {
    for (int j = 0; j < basketball_matches[0].length; j++) {
        System.out.println("Team " + i + " " + basketball_matches[i][j]);
        System.out.println("Against");
        System.out.println("Team " + j + " " + basketball_matches[j][i]);
    }
}
```

</TabItem>
</Tabs>

### Complexity

| Operation | Complexity | Explanation |
| --- | --- | --- |
| Look-up (Access) | $$O(1)$$ | When we do `array[1]`, the program can instantly find the value stored at the first location. |
| Add | $$O(1)$$ | More accurately this is amortised O(1). When we add to the end of the array, it only takes constant time. |
| Pop | $$O(1)$$ | When we remove the last element of the array, it takes constant time. |
| Insert | $$O(N)$$ | When we insert an element to the middle of the array, it takes O(N) time. The whole array needs to be restructured to accommodate the new element. |
| Remove | $$O(N)$$ | When we remove an element in the middle of the array, it takes O(N) time. The whole array needs to be restructured to replace the missing gap of the replaced element. |
| Len | $$O(1)$$ | This may seem like to be O(N) as we have to go through the whole array to check its length. However, checking the length of an array in many languages should be pre-computed in their data structures, so it only takes constant time. |

export const suggestedProblems = [ { "problemName": "1480 - Running Sum of 1d Array", "difficulty": "Easy", "leetCodeLink": "https://leetcode.com/problems/running-sum-of-1d-array/", "solutionLink": "../../solutions/1400-1499/running-sum-of-1d-array-easy" }, { "problemName": "1929 - Concatenation of Array", "difficulty": "Easy", "leetCodeLink": "https://leetcode.com/problems/concatenation-of-array/", "solutionLink": "../../solutions/1900-1999/concatenation-of-array-easy" }, { "problemName": "1431 - Kids With the Greatest Number of Candies", "difficulty": "Easy", "leetCodeLink": "https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/", "solutionLink": "../../solutions/1400-1499/kids-with-the-greatest-number-of-candies-easy" }, { "problemName": "1572 - Matrix Diagonal Sum", "difficulty": "Easy", "leetCodeLink": "https://leetcode.com/problems/matrix-diagonal-sum/", "solutionLink": "../../solutions/1500-1599/matrix-diagonal-sum-easy" }, { "problemName": "0036 - Valid Sudoku", "difficulty": "Medium", "leetCodeLink": "https://leetcode.com/problems/valid-sudoku/", "solutionLink": "" }, ]

<Table title="Suggested Problems" data={suggestedProblems} />
