---
description: 'Author: @wingkwong | https://leetcode.com/problems/find-duplicate-file-in-system/'
tags: [Array, Hash Table, String]
---

# 0609 - Find Duplicate File in System (Medium) 

## Problem Link

https://leetcode.com/problems/find-duplicate-file-in-system/

## Problem Statement

Given a list `paths` of directory info, including the directory path, and all the files with contents in this directory, return *all the duplicate files in the file system in terms of their paths*. You may return the answer in **any order**.

A group of duplicate files consists of at least two files that have the same content.

A single directory info string in the input list has the following format:

- `"root/d1/d2/.../dm f1.txt(f1_content) f2.txt(f2_content) ... fn.txt(fn_content)"`

It means there are `n` files `(f1.txt, f2.txt ... fn.txt)` with content `(f1_content, f2_content ... fn_content)` respectively in the directory "`root/d1/d2/.../dm"`. Note that `n >= 1` and `m >= 0`. If `m = 0`, it means the directory is just the root directory.

The output is a list of groups of duplicate file paths. For each group, it contains all the file paths of the files that have the same content. A file path is a string that has the following format:

- `"directory_path/file_name.txt"`

**Example 1:**

```
Input: paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"]
Output: [["root/a/2.txt","root/c/d/4.txt","root/4.txt"],["root/a/1.txt","root/c/3.txt"]]
```

**Example 2:**

```
Input: paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)"]
Output: [["root/a/2.txt","root/c/d/4.txt"],["root/a/1.txt","root/c/3.txt"]]
```

**Constraints:**

- `1 <= paths.length <= 2 * 104`
- `1 <= paths[i].length <= 3000`
- `1 <= sum(paths[i].length) <= 5 * 105`
- `paths[i]` consist of English letters, digits, `'/'`, `'.'`, `'('`, `')'`, and `' '`.
- You may assume no files or directories share the same name in the same directory.
- You may assume each given directory info represents a unique directory. A single blank space separates the directory path and file info.

**Follow up:**

- Imagine you are given a real file system, how will you search files? DFS or BFS?
- If the file content is very large (GB level), how will you modify your solution?
- If you can only read the file by 1kb each time, how will you modify your solution?
- What is the time complexity of your modified solution? What is the most time-consuming part and memory-consuming part of it? How to optimize?
- How to make sure the duplicated files you find are not false positive?

## Approach 1: HashMap

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    // custom split template
    vector<string> split(string str, char delim) {
        string line;
        vector<string> res;
        stringstream ss(str);
        while (getline(ss, line, delim)) res.push_back(line);
        return res;
    }
    
    // steps
    // 1. for each path, split by the ' ', then get the directory path, file name and file content
    // 2. combine the directory path and file name
    // 3. group directoryPath/fileName by file content using hash map
    // 4. build the final ans 
    vector<vector<string>> findDuplicate(vector<string>& paths) {
        vector<vector<string>> ans;
        unordered_map<string, vector<string>> m;
        for (auto p : paths) {
            vector<string> path = split(p, ' ');
            string directoryPath;
            for (int i = 0; i < path.size(); i++) {
                if (i == 0) {
                    directoryPath = path[i];
                } else {
                    // e.g. 1.txt
                    string fileName = path[i].substr(0, path[i].find('('));
                    // e.g. abcd
                    string fileContent =  path[i].substr(path[i].find('(') + 1, path[i].find(')') - path[i].find('(') - 1);
                    // e.g. efgh: ["root/a/2.txt","root/c/d/4.txt","root/4.txt"]
                    m[fileContent].push_back(directoryPath + "/" + fileName);
                }
            }
        }
        // build the final answer
        for (auto x : m) {
            // check if there is duplicate
            // e.g. ["root/a 1.txt(abcd) 2.txt(efsfgh)","root/c 3.txt(abdfcd)","root/c/d 4.txt(efggdfh)"]
            if (x.second.size() > 1) {
                // x.second is already the full list of paths
                ans.push_back(x.second);    
            }
        }
        return ans;
    }
};
```

</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@wingkwong"/>

```py
class Solution:
    def findDuplicate(self, paths: List[str]) -> List[List[str]]:
        m = defaultdict(list)
        for p in paths:
            # 1. split the string by ' '
            path = p.split()
            # the first string is the directory path
            # the rest of them are just file names with content
            directoryPath, rest = path[0], path[1:]
            # for each file names with content
            for f in rest:
                # we retrieve the file name and the file content
                fileName, fileContent = f.split('(')[0], f.split('(')[1][:-1]
                # then group {directoryPath}/{fileName} by file content
                m[fileContent].append("{}/{}".format(directoryPath, fileName))
        # return the file list only when the size is greater than 1, meaning they are duplicate files
        return [m[k] for k in m.keys() if len(m[k]) > 1]
```

</TabItem>

</Tabs>