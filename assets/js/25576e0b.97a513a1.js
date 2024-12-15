"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[34365],{52333:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"2300-2399/find-closest-node-to-given-two-nodes-medium","title":"2359 - Find Closest Node to Given Two Nodes (Medium)","description":"Author: @wingkwong | https://leetcode.com/problems/find-closest-node-to-given-two-nodes","source":"@site/solutions/2300-2399/2359-find-closest-node-to-given-two-nodes-medium.md","sourceDirName":"2300-2399","slug":"/2300-2399/find-closest-node-to-given-two-nodes-medium","permalink":"/solutions/2300-2399/find-closest-node-to-given-two-nodes-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2300-2399/2359-find-closest-node-to-given-two-nodes-medium.md","tags":[],"version":"current","sidebarPosition":2359,"frontMatter":{"description":"Author: @wingkwong | https://leetcode.com/problems/find-closest-node-to-given-two-nodes"},"sidebar":"tutorialSidebar","previous":{"title":"2358 - Maximum Number of Groups Entering a Competition (Medium)","permalink":"/solutions/2300-2399/maximum-number-of-groups-entering-a-competition-medium"},"next":{"title":"2360 - Longest Cycle in a Graph (Hard)","permalink":"/solutions/2300-2399/longest-cycle-in-a-graph-hard"}}');var d=i(74848),t=i(28453);const o={description:"Author: @wingkwong | https://leetcode.com/problems/find-closest-node-to-given-two-nodes"},r="2359 - Find Closest Node to Given Two Nodes (Medium)",a={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DFS x 2",id:"approach-1-dfs-x-2",level:2},{value:"Approach: Dijkstra x 2",id:"approach-dijkstra-x-2",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{SolutionAuthor:i,TabItem:s,Tabs:o}=n;return i||u("SolutionAuthor",!0),s||u("TabItem",!0),o||u("Tabs",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"2359---find-closest-node-to-given-two-nodes-medium",children:"2359 - Find Closest Node to Given Two Nodes (Medium)"})}),"\n",(0,d.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://leetcode.com/problems/find-closest-node-to-given-two-nodes",children:"https://leetcode.com/problems/find-closest-node-to-given-two-nodes"})}),"\n",(0,d.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,d.jsxs)(n.p,{children:["You are given a ",(0,d.jsx)(n.strong,{children:"directed"})," graph of ",(0,d.jsx)(n.code,{children:"n"})," nodes numbered from ",(0,d.jsx)(n.code,{children:"0"})," to ",(0,d.jsx)(n.code,{children:"n - 1"}),", where each node has ",(0,d.jsx)(n.strong,{children:"at most one"})," outgoing edge."]}),"\n",(0,d.jsxs)(n.p,{children:["The graph is represented with a given ",(0,d.jsx)(n.strong,{children:"0-indexed"})," array ",(0,d.jsx)(n.code,{children:"edges"})," of size ",(0,d.jsx)(n.code,{children:"n"}),", indicating that there is a directed edge from node ",(0,d.jsx)(n.code,{children:"i"})," to node ",(0,d.jsx)(n.code,{children:"edges[i]"}),". If there is no outgoing edge from ",(0,d.jsx)(n.code,{children:"i"}),", then ",(0,d.jsx)(n.code,{children:"edges[i] == -1"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["You are also given two integers ",(0,d.jsx)(n.code,{children:"node1"})," and ",(0,d.jsx)(n.code,{children:"node2"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Return ",(0,d.jsxs)(n.em,{children:["the ",(0,d.jsx)(n.strong,{children:"index"})," of the node that can be reached from both"]})," ",(0,d.jsx)(n.code,{children:"node1"})," ",(0,d.jsx)(n.em,{children:"and"})," ",(0,d.jsx)(n.code,{children:"node2"}),(0,d.jsxs)(n.em,{children:[", such that the ",(0,d.jsx)(n.strong,{children:"maximum"})," between the distance from"]})," ",(0,d.jsx)(n.code,{children:"node1"})," ",(0,d.jsx)(n.em,{children:"to that node, and from"})," ",(0,d.jsx)(n.code,{children:"node2"})," ",(0,d.jsxs)(n.em,{children:["to that node is ",(0,d.jsx)(n.strong,{children:"minimized"})]}),". If there are multiple answers, return the node with the ",(0,d.jsx)(n.strong,{children:"smallest"})," index, and if no possible answer exists, return ",(0,d.jsx)(n.code,{children:"-1"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Note that ",(0,d.jsx)(n.code,{children:"edges"})," may contain cycles."]}),"\n",(0,d.jsx)(n.p,{children:" "}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2022/06/07/graph4drawio-2.png",alt:""})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"Input: edges = [2,2,3,-1], node1 = 0, node2 = 1\nOutput: 2\nExplanation: The distance from node 0 to node 2 is 1, and the distance from node 1 to node 2 is 1.\nThe maximum of those two distances is 1. It can be proven that we cannot get a node with a smaller maximum distance than 1, so we return node 2.\n"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2022/06/07/graph4drawio-4.png",alt:""})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"Input: edges = [1,2,-1], node1 = 0, node2 = 2\nOutput: 2\nExplanation: The distance from node 0 to node 2 is 2, and the distance from node 2 to itself is 0.\nThe maximum of those two distances is 2. It can be proven that we cannot get a node with a smaller maximum distance than 2, so we return node 2.\n"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"n == edges.length"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"2 <= n <= 10^5"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"-1 <= edges[i] < n"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"edges[i] != i"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"0 <= node1, node2 < n"})}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"approach-1-dfs-x-2",children:"Approach 1: DFS x 2"}),"\n",(0,d.jsx)(n.p,{children:"Since there is only at most 1 outgoing edge, we can simply use DFS."}),"\n",(0,d.jsxs)(o,{children:[(0,d.jsxs)(s,{value:"cpp",label:"C++",children:[(0,d.jsx)(i,{name:"@wingkwong"}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    void dfs(int u, vector<int>& d, vector<int>& vis, vector<int>& edges) {\n        // mark it visited\n        vis[u] = 1;\n        // check the outgoing edge\n        int v = edges[u];\n        // -1 means there is no outgoing edge, so we skip it\n        // if it is visited, we also skip it\n        if (v != -1 && !vis[v]) {\n            // the dist going to node v form node u is simply d[u] + 1\n            d[v] = d[u] + 1;\n            // dfs on neigbour node `v`\n            dfs(v, d, vis, edges);\n        }\n    }\n    \n    int closestMeetingNode(vector<int>& edges, int node1, int node2) {\n        int n = edges.size();\n        // d1[i]: shortest dist to node i starting from node 1\n        // d2[i]: shortest dist to nodes i starting from node 2\n        vector<int> d1(n, INT_MAX), d2(n, INT_MAX);\n        // vis1[i]: true if node i is visited else false. used for building d1\n        // vis2[i]: true if node i is visited else false. used for building d2\n        vector<int> vis1(n, 0), vis2(n, 0);\n        // dist to node1 from node1 is 0, same as node2 \n        d1[node1] = 0, d2[node2] = 0;\n        // build the dist for d1\n        dfs(node1, d1, vis1, edges);\n        // build the dist for d2\n        dfs(node2, d2, vis2, edges);\n        // iterate each node to find the min max dist\n        int ans = -1, mi = INT_MAX;\n        for (int i = 0; i < n; i++) {\n            if (max(d1[i], d2[i]) < mi) {\n                mi = max(d1[i], d2[i]);\n                ans = i;\n            }\n        }\n        return ans;\n    }\n};\n"})})]}),(0,d.jsxs)(s,{value:"java",label:"Java",children:[(0,d.jsx)(i,{name:"@wingkwong"}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-java",children:"class Solution {\n    public void dfs(int u, int[] d, boolean[] vis, int[] edges) {\n        // mark it visited\n        vis[u] = true;\n        // check the outgoing edge\n        int v = edges[u];\n        // -1 means there is no outgoing edge, so we skip it\n        if (v != -1 && !vis[v]) {\n            // the dist going to node v form node u is simply d[u] + 1\n            d[v] = d[u] + 1;\n            // dfs on neigbour node `v`\n            dfs(v, d, vis, edges);\n        }\n    }\n    \n    public int closestMeetingNode(int[] edges, int node1, int node2) {\n        int n = edges.length;\n        // d1[i]: shortest dist to node i starting from node 1\n        // d2[i]: shortest dist to nodes i starting from node 2\n        int[] d1 = new int[n];\n        int[] d2 = new int[n];\n        // vis1[i]: true if node i is visited else false. used for building d1\n        // vis2[i]: true if node i is visited else false. used for building d2\n        boolean[] vis1 = new boolean[n];\n        boolean[] vis2 = new boolean[n];\n        Arrays.fill(d1, Integer.MAX_VALUE);\n        Arrays.fill(d2, Integer.MAX_VALUE);\n        // dist to node1 from node1 is 0, same as node2 \n        d1[node1] = d2[node2] = 0;\n        // build the dist for d1\n        dfs(node1, d1, vis1, edges);\n        // build the dist for d2\n        dfs(node2, d2, vis2, edges);\n        // iterate each node to find the min max dist\n        int ans = -1, mi = Integer.MAX_VALUE;\n        for (int i = 0; i < n; i++) {\n            if (Math.max(d1[i], d2[i]) < mi) {\n                mi = Math.max(d1[i], d2[i]);\n                ans = i;\n            }\n        }\n        return ans;\n    }\n}\n"})})]}),(0,d.jsxs)(s,{value:"py",label:"Python",children:[(0,d.jsx)(i,{name:"@wingkwong"}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-py",children:'class Solution:\n    def closestMeetingNode(self, edges: List[int], node1: int, node2: int) -> int:\n        def dfs(u: int, d: List[int], vis: List[bool], edges: List[int]) -> None:\n            # mark it visited\n            vis[u] = True\n            # check the outgoing edge\n            v = edges[u]\n            # -1 means there is no outgoing edge, so we skip it\n            # if it is visited, we also skip it\n            if v != -1 and not vis[v]:\n                # the dist going to node v form node u is simply d[u] + 1\n                d[v] = d[u] + 1\n                # dfs on neigbour node `v`\n                dfs(v, d, vis, edges)\n        n = len(edges)\n        # d1[i]: shortest dist to node i starting from node 1\n        # d2[i]: shortest dist to nodes i starting from node 2\n        d1, d2 = [float("inf")] * n, [float("inf")] * n\n        # vis1[i]: true if node i is visited else false. used for building d1\n        # vis2[i]: true if node i is visited else false. used for building d2\n        vis1, vis2 = [False] * n, [False] * n\n        # dist to node1 from node1 is 0, same as node2 \n        d1[node1], d2[node2] = 0, 0\n        # build the dist for d1\n        dfs(node1, d1, vis1, edges)\n        # build the dist for d2\n        dfs(node2, d2, vis2, edges)\n        # iterate each node to find the min max dist\n        ans = -1\n        mi = float("inf")\n        for i in range(n):\n            if max(d1[i], d2[i]) < mi:\n                mi = max(d1[i], d2[i])\n                ans = i\n        return ans\n'})})]}),(0,d.jsxs)(s,{value:"rs",label:"Rust",children:[(0,d.jsx)(i,{name:"@wingkwong"}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-rs",children:"use std::cmp::max;\n\nimpl Solution {\n    fn dfs(u: i32, d: &mut Vec<i32>, vis: &mut Vec<bool>, edges: &Vec<i32>) {\n        // mark it visited\n        vis[u as usize] = true;\n        // check the outgoing edge\n        let v = edges[u as usize];\n        // -1 means there is no outgoing edge, so we skip it\n        // if it is visited, we also skip it\n        if v != -1 && !vis[v as usize] {\n            // the dist going to node v form node u is simply d[u] + 1\n            d[v as usize] = d[u as usize] + 1;\n            // dfs on neigbour node `v`\n            Self::dfs(v, d, vis, edges);\n        }\n    }\n    \n    pub fn closest_meeting_node(edges: Vec<i32>, node1: i32, node2: i32) -> i32 {\n        let n = edges.len();\n        // d1[i]: shortest dist to node i starting from node 1\n        // d2[i]: shortest dist to nodes i starting from node 2\n        let mut d1 = vec![i32::MAX; n];\n        let mut d2 = vec![i32::MAX; n];\n        // vis1[i]: true if node i is visited else false. used for building d1\n        // vis2[i]: true if node i is visited else false. used for building d2\n        let mut vis1 = vec![false; n];\n        let mut vis2 = vec![false; n];\n        // dist to node1 from node1 is 0, same as node2 \n        d1[node1 as usize] = 0;\n        d2[node2 as usize] = 0;\n        // build the dist for d1\n        Self::dfs(node1, &mut d1, &mut vis1, &edges);\n        // build the dist for d2\n        Self::dfs(node2, &mut d2, &mut vis2, &edges);\n        // iterate each node to find the min max dist\n        let mut ans = -1;\n        let mut mi = i32::MAX;\n        for i in 0..n {\n            if max(d1[i], d2[i]) < mi {\n                mi = max(d1[i], d2[i]);\n                ans = i as i32;\n            }\n        }\n        return ans;\n    }\n}\n"})})]})]}),"\n",(0,d.jsx)(n.h2,{id:"approach-dijkstra-x-2",children:"Approach: Dijkstra x 2"}),"\n",(0,d.jsx)(n.p,{children:"Dijkstra approach in this question is not recommended but here's how we do in case there are multiple outgoing edges."}),"\n",(0,d.jsx)(o,{children:(0,d.jsxs)(s,{value:"cpp",label:"C++",children:[(0,d.jsx)(i,{name:"@wingkwong"}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    // https://leetcodethehardway.com/tutorials/graph-theory/dijkstra\n    template<typename T_pair, typename T_vector>\n    void dijkstra(T_pair &g, T_vector &dist, int start) {\n      priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;\n      dist[start] = 0;\n      pq.push({start, 0});\n      while (!pq.empty()) {\n        auto [u_node, u_cost] = pq.top(); pq.pop();\n        if (u_cost > dist[u_node]) continue;\n        for (auto [v_node, v_cost] : g[u_node]) {\n          if (dist[v_node] > dist[u_node] + v_cost) {\n            dist[v_node] = dist[u_node] + v_cost;\n            pq.push({v_node, dist[v_node]});\n          }\n        }\n      }\n    }\n    \n    int closestMeetingNode(vector<int>& edges, int node1, int node2) {\n        int n = edges.size();\n        // d1[i]: shortest dist to node i starting from node 1\n        // d2[i]: shortest dist to nodes i starting from node 2\n        vector<int> d1(n, INT_MAX), d2(n, INT_MAX);\n        // build the graph\n        vector<vector<pair<int, int>>> g(n);\n        // iterate each node\n        for (int i = 0; i < n; i++) {\n            // if there is outgoing edge from node i\n            if (edges[i] != -1) {\n                // by default, we define the dist to edges[i] is 1\n                g[i].push_back({edges[i], 1});\n            }\n        }\n        // build the dist for d1\n        dijkstra(g, d1, node1);\n        // build the dist for d2\n        dijkstra(g, d2, node2);\n        // iterate each node to find the min max dist\n        int ans = -1, mi = INT_MAX;\n        for (int i = 0; i < n; i++) {\n            if (max(d1[i], d2[i]) < mi) {\n                mi = max(d1[i], d2[i]);\n                ans = i;\n            }\n        }\n        return ans;\n    }\n};\n"})})]})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var s=i(96540);const d={},t=s.createContext(d);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);