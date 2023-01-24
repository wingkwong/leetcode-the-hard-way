---
title: 'Euler Path'
description: ''
hide_table_of_contents: false
keywords:
  - leetcode
  - template
  - euler path
---

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
// Hierholzer's Algorithm
void euler(unordered_map<string, queue<string>>& g, string src, vector<string>& ans) {
    while(!g[src].empty()) {
        string nxt = g[src].front();
        g[src].pop();
        euler(g, nxt, ans);
    }
    ans.push_back(src);
}

// Example: 332. Reconstruct Itinerary
// https://leetcode.com/problems/reconstruct-itinerary/
vector<string> findItinerary(vector<vector<string>>& tickets) {
        vector<string> ans;
        sort(tickets.begin(), tickets.end(), [&](const vector<string>& x, const vector<string>& y) {
            return x[1] < y[1];
        });
        unordered_map<string, queue<string>> g;
        for(auto x : tickets) {
            g[x[0]].push(x[1]);
        }
        string src = "JFK";
        euler(g, src, ans);
        reverse(ans.begin(), ans.end());
        return ans;
    }
```

</TabItem>
</Tabs>