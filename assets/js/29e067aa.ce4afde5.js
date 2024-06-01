"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[80385],{81812:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var s=t(85893),i=t(11151);const r={description:"Author: @wingkwong | https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/",tags:["Hash Table","Tree","Depth-First Search","Breadth-First Search","Counting"]},o="1519 - Number of Nodes in the Sub-Tree With the Same Label (Medium)",l={id:"1500-1599/number-of-nodes-in-the-sub-tree-with-the-same-label-medium",title:"1519 - Number of Nodes in the Sub-Tree With the Same Label (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/",source:"@site/solutions/1500-1599/1519-number-of-nodes-in-the-sub-tree-with-the-same-label-medium.md",sourceDirName:"1500-1599",slug:"/1500-1599/number-of-nodes-in-the-sub-tree-with-the-same-label-medium",permalink:"/solutions/1500-1599/number-of-nodes-in-the-sub-tree-with-the-same-label-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1500-1599/1519-number-of-nodes-in-the-sub-tree-with-the-same-label-medium.md",tags:[{inline:!0,label:"Hash Table",permalink:"/solutions/tags/hash-table"},{inline:!0,label:"Tree",permalink:"/solutions/tags/tree"},{inline:!0,label:"Depth-First Search",permalink:"/solutions/tags/depth-first-search"},{inline:!0,label:"Breadth-First Search",permalink:"/solutions/tags/breadth-first-search"},{inline:!0,label:"Counting",permalink:"/solutions/tags/counting"}],version:"current",sidebarPosition:1519,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/",tags:["Hash Table","Tree","Depth-First Search","Breadth-First Search","Counting"]},sidebar:"tutorialSidebar",previous:{title:"1514 - Path with Maximum Probability (Medium)",permalink:"/solutions/1500-1599/path-with-maximum-probability"},next:{title:"1523 - Count Odd Numbers in an Interval Range (Easy)",permalink:"/solutions/1500-1599/count-odd-numbers-in-an-interval-range-easy"}},a={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DFS",id:"approach-1-dfs",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{SolutionAuthor:t,TabItem:r,Tabs:o}=n;return t||u("SolutionAuthor",!0),r||u("TabItem",!0),o||u("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"1519---number-of-nodes-in-the-sub-tree-with-the-same-label-medium",children:"1519 - Number of Nodes in the Sub-Tree With the Same Label (Medium)"}),"\n",(0,s.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/",children:"https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(n.p,{children:["You are given a tree (i.e. a connected, undirected graph that has no cycles) consisting of ",(0,s.jsx)(n.code,{children:"n"})," nodes numbered from ",(0,s.jsx)(n.code,{children:"0"})," to ",(0,s.jsx)(n.code,{children:"n - 1"})," and exactly ",(0,s.jsx)(n.code,{children:"n - 1"})," ",(0,s.jsx)(n.code,{children:"edges"}),". The ",(0,s.jsx)(n.strong,{children:"root"})," of the tree is the node ",(0,s.jsx)(n.code,{children:"0"}),", and each node of the tree has ",(0,s.jsx)(n.strong,{children:"a label"})," which is a lower-case character given in the string ",(0,s.jsx)(n.code,{children:"labels"})," (i.e. The node with the number ",(0,s.jsx)(n.code,{children:"i"})," has the label ",(0,s.jsx)(n.code,{children:"labels[i]"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"edges"})," array is given on the form ",(0,s.jsx)(n.code,{children:"edges[i] = [ai, bi]"}),", which means there is an edge between nodes ",(0,s.jsx)(n.code,{children:"ai"})," and ",(0,s.jsx)(n.code,{children:"bi"})," in the tree."]}),"\n",(0,s.jsxs)(n.p,{children:["Return ",(0,s.jsx)(n.em,{children:"an array of size n"})," where ",(0,s.jsx)(n.code,{children:"ans[i]"})," is the number of nodes in the subtree of the ",(0,s.jsx)(n.code,{children:"ith"})," node which have the same label as node ",(0,s.jsx)(n.code,{children:"i"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["A subtree of a tree ",(0,s.jsx)(n.code,{children:"T"})," is the tree consisting of a node in ",(0,s.jsx)(n.code,{children:"T"})," and all of its descendant nodes."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], labels = \"abaedcd\"\nOutput: [2,1,1,1,1,1,1]\nExplanation: Node 0 has label 'a' and its sub-tree has node 2 with label 'a' as well, thus the answer is 2. Notice that any node is part of its sub-tree.\nNode 1 has a label 'b'. The sub-tree of node 1 contains nodes 1,4 and 5, as nodes 4 and 5 have different labels than node 1, the answer is just 1 (the node itself).\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: n = 4, edges = [[0,1],[1,2],[0,3]], labels = \"bbbb\"\nOutput: [4,2,1,1]\nExplanation: The sub-tree of node 2 contains only node 2, so the answer is 1.\nThe sub-tree of node 3 contains only node 3, so the answer is 1.\nThe sub-tree of node 1 contains nodes 1 and 2, both have label 'b', thus the answer is 2.\nThe sub-tree of node 0 contains nodes 0, 1, 2 and 3, all with label 'b', thus the answer is 4.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Input: n = 5, edges = [[0,1],[0,2],[1,3],[0,4]], labels = "aabab"\nOutput: [3,2,1,1,1]\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= n <= 10^5"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"edges.length == n - 1"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"edges[i].length == 2"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"0 <= ai, bi < n"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ai != bi"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"labels.length == n"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"labels"})," is consisting of only of lowercase English letters."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"approach-1-dfs",children:"Approach 1: DFS"}),"\n",(0,s.jsx)(o,{children:(0,s.jsxs)(r,{value:"cpp",label:"C++",children:[(0,s.jsx)(t,{name:"@wingkwong"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> countSubTrees(int n, vector<vector<int>>& edges, string labels) {\n        vector<int> ans(n);\n        vector<vector<int>> g(n);\n        for (auto x : edges) {\n\t\t\t// x[0] can go to x[1]\n            g[x[0]].push_back(x[1]);\n\t\t\t// x[1] can go to x[0]\n            g[x[1]].push_back(x[0]);\n        }\n        // u = current vertex\n        // p = parent vertex\n        function<vector<int>(int, int)> dfs = [&] (int u, int p) {\n            // count each label in the subtree\n            vector<int> cnt(26);\n            // init the current label\n            cnt[labels[u] - 'a'] = 1;\n            // traverse the children of u\n            for (auto v : g[u]) {\n                // if v is not same as p\n                if (p ^ v) {\n                    // get the count of labels in subtree\n                    vector<int> cnt2 = dfs(v, u);\n                    // add it back to cnt\n                    for (int i = 0; i < 26; i++) cnt[i] += cnt2[i];\n                }\n            }\n            // set the answer\n            ans[u] = cnt[labels[u] - 'a'];\n            return cnt;\n        };\n        dfs(0, -1);\n        return ans;\n    }\n};\n"})})]})})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var s=t(67294);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);