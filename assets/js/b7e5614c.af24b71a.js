"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[22176],{3599:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"0700-0799/is-graph-bipartite-medium","title":"0785 -  Is Graph Bipartite? (Medium)","description":"Author: @wingkwong | https://leetcode.com/problems/is-graph-bipartite","source":"@site/solutions/0700-0799/0785-is-graph-bipartite-medium.md","sourceDirName":"0700-0799","slug":"/0700-0799/is-graph-bipartite-medium","permalink":"/solutions/0700-0799/is-graph-bipartite-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0700-0799/0785-is-graph-bipartite-medium.md","tags":[],"version":"current","sidebarPosition":785,"frontMatter":{"description":"Author: @wingkwong | https://leetcode.com/problems/is-graph-bipartite"},"sidebar":"tutorialSidebar","previous":{"title":"0778 - Swim in Rising Water (Hard)","permalink":"/solutions/0700-0799/swim-in-rising-water-hard"},"next":{"title":"0787 - Cheapest Flights Within K Stops (Medium)","permalink":"/solutions/0700-0799/cheapest-flights-within-k-stops-medium"}}');var t=s(74848),r=s(28453);const a={description:"Author: @wingkwong | https://leetcode.com/problems/is-graph-bipartite"},o="0785 -  Is Graph Bipartite? (Medium)",c={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DSF Colouring",id:"approach-1-dsf-colouring",level:2},{value:"Approach 2: BFS Colouring",id:"approach-2-bfs-colouring",level:2},{value:"Approach 3: Custom Template",id:"approach-3-custom-template",level:2}];function d(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",math:"math",mn:"mn",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:s,SolutionAuthor:i}=n;return s||p("Details",!0),i||p("SolutionAuthor",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"0785----is-graph-bipartite-medium",children:"0785 -  Is Graph Bipartite? (Medium)"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/is-graph-bipartite",children:"https://leetcode.com/problems/is-graph-bipartite"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(n.p,{children:["There is an ",(0,t.jsx)(n.strong,{children:"undirected"})," graph with ",(0,t.jsx)(n.code,{children:"n"})," nodes, where each node is numbered between ",(0,t.jsx)(n.code,{children:"0"})," and ",(0,t.jsx)(n.code,{children:"n - 1"}),". You are given a 2D array ",(0,t.jsx)(n.code,{children:"graph"}),", where ",(0,t.jsx)(n.code,{children:"graph[u]"})," is an array of nodes that node ",(0,t.jsx)(n.code,{children:"u"})," is adjacent to. More formally, for each ",(0,t.jsx)(n.code,{children:"v"})," in ",(0,t.jsx)(n.code,{children:"graph[u]"}),", there is an undirected edge between node ",(0,t.jsx)(n.code,{children:"u"})," and node ",(0,t.jsx)(n.code,{children:"v"}),". The graph has the following properties:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["There are no self-edges (",(0,t.jsx)(n.code,{children:"graph[u]"})," does not contain ",(0,t.jsx)(n.code,{children:"u"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:["There are no parallel edges (",(0,t.jsx)(n.code,{children:"graph[u]"})," does not contain duplicate values)."]}),"\n",(0,t.jsxs)(n.li,{children:["If ",(0,t.jsx)(n.code,{children:"v"})," is in ",(0,t.jsx)(n.code,{children:"graph[u]"}),", then ",(0,t.jsx)(n.code,{children:"u"})," is in ",(0,t.jsx)(n.code,{children:"graph[v]"})," (the graph is undirected)."]}),"\n",(0,t.jsxs)(n.li,{children:["The graph may not be connected, meaning there may be two nodes ",(0,t.jsx)(n.code,{children:"u"})," and ",(0,t.jsx)(n.code,{children:"v"})," such that there is no path between them."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["A graph is ",(0,t.jsx)(n.strong,{children:"bipartite"})," if the nodes can be partitioned into two independent sets ",(0,t.jsx)(n.code,{children:"A"})," and ",(0,t.jsx)(n.code,{children:"B"})," such that ",(0,t.jsx)(n.strong,{children:"every"})," edge in the graph connects a node in set ",(0,t.jsx)(n.code,{children:"A"})," and a node in set ",(0,t.jsx)(n.code,{children:"B"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Return ",(0,t.jsx)(n.code,{children:"true"})," ",(0,t.jsxs)(n.em,{children:["if and only if it is ",(0,t.jsx)(n.strong,{children:"bipartite"})]}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2020/10/21/bi2.jpg",alt:""})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: graph = [[1,2,3],[0,2],[0,1,3],[0,2]]\nOutput: false\nExplanation: There is no way to partition the nodes into two independent sets such that every edge connects a node in one and a node in the other.\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2020/10/21/bi1.jpg",alt:""})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: graph = [[1,3],[0,2],[1,3],[0,2]]\nOutput: true\nExplanation: We can partition the nodes into two sets: {0, 2} and {1, 3}.\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"graph.length == n"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"1 <= n <= 100"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"0 <= graph[u].length < n"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"0 <= graph[u][i] <= n - 1"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"graph[u]"})," does not contain ",(0,t.jsx)(n.code,{children:"u"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["All the values of ",(0,t.jsx)(n.code,{children:"graph[u]"})," are ",(0,t.jsx)(n.strong,{children:"unique"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["If ",(0,t.jsx)(n.code,{children:"graph[u]"})," contains ",(0,t.jsx)(n.code,{children:"v"}),", then ",(0,t.jsx)(n.code,{children:"graph[v]"})," contains ",(0,t.jsx)(n.code,{children:"u"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"approach-1-dsf-colouring",children:"Approach 1: DSF Colouring"}),"\n",(0,t.jsxs)(n.p,{children:["We can colour each set, says ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mn,{children:"0"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"0"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(n.span,{className:"mord",children:"0"})]})})]})," and ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mn,{children:"1"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(n.span,{className:"mord",children:"1"})]})})]}),". For example, in example 2, we can colour ",2," to ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mn,{children:"0"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"0"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(n.span,{className:"mord",children:"0"})]})})]})," and ",3," to ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mn,{children:"1"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(n.span,{className:"mord",children:"1"})]})})]}),". Therefore, we greedily colour them - if the current node is marked as ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mn,{children:"0"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"0"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(n.span,{className:"mord",children:"0"})]})})]}),", then all neighbours would be ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mn,{children:"1"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(n.span,{className:"mord",children:"1"})]})})]})," and so on."]}),"\n",(0,t.jsx)(i,{name:"@wingkwong"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool isBipartite(vector<vector<int>>& graph) {\n        int n = graph.size();\n        // {-1, 0, 1}\n        // -1: uncoloured\n        // 0: red\n        // 1: blue\n        vector<int> vis(n, -1); \n        function<int(int,int)> dfs = [&](int u, int colour) -> int {\n            // check if it is coloured or not\n            if (vis[u] != -1) {\n                // if the colour is same as previous one -> return 1\n                if (vis[u] == (color ^ 1)) return 1;\n                // the colour is correct -> return 0 \n                else return 0;\n            }\n            // set the colour\n            vis[u] = colour;\n            // iterate each neighbours\n            for (auto& v : graph[u]) {\n                // the expected colour for neighbours would be colour ^ 1\n                // i.e. 0 -> 1 or 1 -> 0\n                if (dfs(v, colour ^ 1)) {\n                    return 1;\n                }\n            }\n            return 0;\n        };\n        // iterate each node\n        for (int i = 0; i < n; i++) {\n            // check if it is coloured\n            if (vis[i] == -1) {\n                // if not, then colour it\n                // set 0 by default\n                if (dfs(i, 0)) {\n                    // found neighbours also have the same colour\n                    // then return 0 \n                    return 0;\n                }\n            }\n        }\n        return 1;\n    }\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"approach-2-bfs-colouring",children:"Approach 2: BFS Colouring"}),"\n",(0,t.jsx)(n.p,{children:"Same idea but using BFS."}),"\n",(0,t.jsx)(i,{name:"@wingkwong"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool isBipartite(vector<vector<int>>& graph) {\n        int n = graph.size();\n        vector<int> vis(n, -1);\n        queue<int> q; \n        for (int i = 0; i < n; i++) {\n            if (vis[i] == -1) {\n                vis[i] = 0;\n                q.push(i);\n                while (!q.empty()) {\n                    int u = q.front(); q.pop();\n                    for (int v : graph[u])  {\n                        if (vis[v] == -1) { \n                            vis[v] = vis[u] ^ 1; \n                            q.push(v); \n                        }  else if (vis[v] == vis[u]) {\n                            return false;\n                        }\n                    }\n                }\n            } \n        }\n        return true;\n    }\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"approach-3-custom-template",children:"Approach 3: Custom Template"}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"is_bipartite Template"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"struct is_bipartite {\n  int V;\n  vector<vector<int>> adj;\n  vector<int> depth;\n  vector<bool> visited;\n\n  is_bipartite(int v = -1) {\n    if (v >= 0) init(v);\n  }\n\n  void init(int v) {\n    V = v;\n    adj.assign(V, {});\n  }\n\n  void add(int a, int b) {\n    adj[a].push_back(b);\n    adj[b].push_back(a);\n  }\n\n  vector<array<vector<int>, 2>> components;\n\n  bool dfs(int node, int parent) {\n    assert(!visited[node]);\n    visited[node] = true;\n    depth[node] = parent < 0 ? 0 : depth[parent] + 1;\n    components.back()[depth[node] % 2].push_back(node);\n    for (int h : adj[node])\n      if (h != parent) {\n        if (!visited[h] && !dfs(h, node)) return false;\n        if (depth[node] % 2 == depth[h] % 2) return false;\n      }\n    return true;\n  }\n\n  bool solve() {\n    depth.assign(V, -1);\n    visited.assign(V, false);\n    components = {};\n    for (int i = 0; i < V; i++)\n      if (!visited[i]) {\n        components.emplace_back();\n        if (!dfs(i, -1)) return false;\n      }\n    return true;\n  }\n}; \n"})})]}),"\n",(0,t.jsx)(i,{name:"@wingkwong"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool isBipartite(vector<vector<int>>& graph) {\n        int n = graph.size();\n        // init is_bipartite\n        is_bipartite c(n);\n        // iterate input and build the edges\n        for (int i = 0; i < n; i++) {\n            int from = i;\n            for (auto& to : graph[from]) {\n                c.add(from, to);\n                c.add(to, from);\n            }\n        }\n        // call solve to get the answer\n        return c.solve();\n    }\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var i=s(96540);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);