"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[64050],{44902:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"2400-2499/number-of-nodes-with-value-one-medium","title":"2445 - Number of Nodes With Value One (Medium)","description":"Author: @wingkwong | https://leetcode.com/problems/number-of-nodes-with-value-one/","source":"@site/solutions/2400-2499/2445-number-of-nodes-with-value-one-medium.md","sourceDirName":"2400-2499","slug":"/2400-2499/number-of-nodes-with-value-one-medium","permalink":"/solutions/2400-2499/number-of-nodes-with-value-one-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2400-2499/2445-number-of-nodes-with-value-one-medium.md","tags":[],"version":"current","sidebarPosition":2445,"frontMatter":{"description":"Author: @wingkwong | https://leetcode.com/problems/number-of-nodes-with-value-one/"},"sidebar":"tutorialSidebar","previous":{"title":"2441 - Largest Positive Integer That Exists With Its Negative (Easy)","permalink":"/solutions/2400-2499/largest-positive-integer-that-exists-with-its-negative-easy"},"next":{"title":"2455 - Average Value of Even Numbers That Are Divisible by Three (Easy)","permalink":"/solutions/2400-2499/average-value-of-even-numbers-that-are-divisible-by-three-easy"}}');var o=t(74848),i=t(28453);const s={description:"Author: @wingkwong | https://leetcode.com/problems/number-of-nodes-with-value-one/"},l="2445 - Number of Nodes With Value One (Medium)",d={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DFS",id:"approach-1-dfs",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{SolutionAuthor:t,TabItem:r,Tabs:s}=n;return t||c("SolutionAuthor",!0),r||c("TabItem",!0),s||c("Tabs",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"2445---number-of-nodes-with-value-one-medium",children:"2445 - Number of Nodes With Value One (Medium)"})}),"\n",(0,o.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://leetcode.com/problems/number-of-nodes-with-value-one/",children:"https://leetcode.com/problems/number-of-nodes-with-value-one/"})}),"\n",(0,o.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,o.jsxs)(n.p,{children:["There is an ",(0,o.jsx)(n.strong,{children:"undirected"})," connected tree with ",(0,o.jsx)(n.code,{children:"n"})," nodes labeled from ",(0,o.jsx)(n.code,{children:"1"})," to ",(0,o.jsx)(n.code,{children:"n"})," and ",(0,o.jsx)(n.code,{children:"n - 1"})," edges. You are given the integer ",(0,o.jsx)(n.code,{children:"n"}),". The parent node of a node with a label ",(0,o.jsx)(n.code,{children:"v"})," is the node with the label ",(0,o.jsx)(n.code,{children:"floor (v / 2)"}),". The root of the tree is the node with the label ",(0,o.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["For example, if ",(0,o.jsx)(n.code,{children:"n = 7"}),", then the node with the label ",(0,o.jsx)(n.code,{children:"3"})," has the node with the label ",(0,o.jsx)(n.code,{children:"floor(3 / 2) = 1"})," as its parent, and the node with the label ",(0,o.jsx)(n.code,{children:"7"})," has the node with the label ",(0,o.jsx)(n.code,{children:"floor(7 / 2) = 3"})," as its parent."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["You are also given an integer array ",(0,o.jsx)(n.code,{children:"queries"}),". Initially, every node has a value ",(0,o.jsx)(n.code,{children:"0"})," on it. For each query ",(0,o.jsx)(n.code,{children:"queries[i]"}),", you should flip all values in the subtree of the node with the label ",(0,o.jsx)(n.code,{children:"queries[i]"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Return ",(0,o.jsx)(n.em,{children:"the total number of nodes with the value"}),(0,o.jsx)(n.code,{children:"1"}),(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"after processing all the queries"})}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note"})," that:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Flipping the value of a node means that the node with the value ",(0,o.jsx)(n.code,{children:"0"})," becomes ",(0,o.jsx)(n.code,{children:"1"})," and vice versa."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"floor(x)"})," is equivalent to rounding ",(0,o.jsx)(n.code,{children:"x"})," down to the nearest integer."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Input: n = 5 , queries = [1,2,5]\nOutput: 3\nExplanation: The diagram above shows the tree structure and its status after performing the queries. The blue node represents the value 0, and the red node represents the value 1.\nAfter processing the queries, there are three red nodes (nodes with value 1): 1, 3, and 5.\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Input: n = 3, queries = [2,3,3]\nOutput: 1\nExplanation: The diagram above shows the tree structure and its status after performing the queries. The blue node represents the value 0, and the red node represents the value 1.\nAfter processing the queries, there are one red node (node with value 1): 2.\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"1 <= n <= 10 ^ 5"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"1 <= queries.length <= 10 ^ 5"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"1 <= queries[i] <= n"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"approach-1-dfs",children:"Approach 1: DFS"}),"\n",(0,o.jsx)(s,{children:(0,o.jsxs)(r,{value:"cpp",label:"C++",children:[(0,o.jsx)(t,{name:"@wingkwong"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int numberOfNodes(int n, vector<int>& queries) {\n        // f[i] = 1 means we need to flip all values in the subtree of the node i\n        vector<int> f(n + 1);\n        // if we flip the node even times, the value would be same as the original value\n        // e.g. 0 (original value) -> 1 -> 0\n        // if we flip the node odd times, the value would be the the opposite of the original value\n        // e.g.  0 (original value) -> 1 -> 0 -> 1\n        // therefore, we can first process the queries to obtain the final flips\n        for (auto q : queries) f[q] ^= 1;\n        function<int(int, int)> dfs = [&](int u, int v) {\n            // u is the current node label\n            // if u is greater than n, then return 0\n            if (u > n) return 0;\n            // do we need to flip the node u? \n            // we flip the value if f[u] is 1\n            v ^= f[u];\n            // the result would be the value of u, i.e. v \n            // plus the result of the left subtree, i.e dfs(u * 2, v)\n            // plus the result of the right subtree, i.e. dfs(u * 2 + 1, v)\n            return v + dfs(u * 2, v) + dfs(u * 2 + 1, v);\n        };\n        // we start from node 1 with inital value 0\n        return dfs(1, 0);\n    }\n};\n"})})]})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(96540);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);