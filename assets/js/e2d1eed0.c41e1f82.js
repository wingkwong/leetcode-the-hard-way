"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[67559],{3478:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var o=t(85893),r=t(11151);const i={description:"Author: @wingkwong | https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",tags:["Depth-First Search","Breadth-First Search","Union Find","Graph"]},s="0323 - Number of Connected Components in an Undirected Graph (Medium)",c={id:"0300-0399/number-of-connected-components-in-an-undirected-graph-medium",title:"0323 - Number of Connected Components in an Undirected Graph (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",source:"@site/solutions/0300-0399/0323-number-of-connected-components-in-an-undirected-graph-medium.md",sourceDirName:"0300-0399",slug:"/0300-0399/number-of-connected-components-in-an-undirected-graph-medium",permalink:"/solutions/0300-0399/number-of-connected-components-in-an-undirected-graph-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0300-0399/0323-number-of-connected-components-in-an-undirected-graph-medium.md",tags:[{inline:!0,label:"Depth-First Search",permalink:"/solutions/tags/depth-first-search"},{inline:!0,label:"Breadth-First Search",permalink:"/solutions/tags/breadth-first-search"},{inline:!0,label:"Union Find",permalink:"/solutions/tags/union-find"},{inline:!0,label:"Graph",permalink:"/solutions/tags/graph"}],version:"current",sidebarPosition:323,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",tags:["Depth-First Search","Breadth-First Search","Union Find","Graph"]},sidebar:"tutorialSidebar",previous:{title:"0322 - Coin Change (Medium)",permalink:"/solutions/0300-0399/coin-change-medium"},next:{title:"0327 - Count of Range Sum (Hard)",permalink:"/solutions/0300-0399/count-of-range-sum-hard"}},d={},a=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DSU",id:"approach-1-dsu",level:2}];function l(n){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...n.components},{SolutionAuthor:t,TabItem:i,Tabs:s}=e;return t||u("SolutionAuthor",!0),i||u("TabItem",!0),s||u("Tabs",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"0323---number-of-connected-components-in-an-undirected-graph-medium",children:"0323 - Number of Connected Components in an Undirected Graph (Medium)"}),"\n",(0,o.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",children:"https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/"})}),"\n",(0,o.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,o.jsxs)(e.p,{children:["You have a graph of ",(0,o.jsx)(e.code,{children:"n"})," nodes. You are given an integer ",(0,o.jsx)(e.code,{children:"n"})," and an array ",(0,o.jsx)(e.code,{children:"edges"})," where ",(0,o.jsx)(e.code,{children:"edges[i] = [ai, bi]"})," indicates that there is an edge between ",(0,o.jsx)(e.code,{children:"ai"})," and ",(0,o.jsx)(e.code,{children:"bi"})," in the graph."]}),"\n",(0,o.jsxs)(e.p,{children:["Return ",(0,o.jsx)(e.em,{children:"the number of connected components in the graph"}),"."]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"Input: n = 5, edges = [[0,1],[1,2],[3,4]]\nOutput: 2\n"})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"Input: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]\nOutput: 1\n"})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"1 <= n <= 2000"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"1 <= edges.length <= 5000"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"edges[i].length == 2"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"0 <= ai <= bi < n"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"ai != bi"})}),"\n",(0,o.jsx)(e.li,{children:"There are no repeated edges."}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"approach-1-dsu",children:"Approach 1: DSU"}),"\n",(0,o.jsxs)(e.p,{children:["Eventually the connected components would belong to its own group. We can use DSU to unite those nodes and count how many groups at the end. See ",(0,o.jsx)(e.a,{href:"../../tutorials/graph-theory/disjoint-set-union",children:"Disjoint Set Union (DSU)"})," for basic understanding."]}),"\n",(0,o.jsx)(s,{children:(0,o.jsxs)(i,{value:"cpp",label:"C++",children:[(0,o.jsx)(t,{name:"@wingkwong"}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-cpp",children:"class dsu {\n public:\n  vector<int> root, rank;\n  int n;\n  int cnt;\n\n  dsu(int _n) : n(_n) {\n    root.resize(n);\n    rank.resize(n);\n    for(int i = 0; i < n; i++) {\n        root[i] = i;\n        rank[i] = 1;\n    }\n    cnt = n;\n  }\n\n  inline int getCount() { return cnt; }\n\n  inline int get(int x) { return (x == root[x] ? x : (root[x] = get(root[x]))); }\n\n  inline bool unite(int x, int y) {\n    x = get(x);\n    y = get(y);\n    if (x != y) {\n        if (rank[x] > rank[y]) {\n            root[y] = x;\n        } else if (rank[x] < rank[y]) {\n            root[x] = y;\n        } else {\n            root[y] = x;\n            rank[x] += 1;\n        }\n        cnt--;\n      return true;\n    }\n    return false;\n  }\n};\n\nclass Solution {\npublic:\n    int countComponents(int n, vector<vector<int>>& edges) {\n        // init dsu\n        dsu d = dsu(n);\n        // unite each node\n        for (auto x: edges) d.unite(x[0], x[1]);\n        // return the number of connected components\n        return d.cnt;\n    }\n};\n"})})]})})]})}function h(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}function u(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(n,e,t)=>{t.d(e,{Z:()=>c,a:()=>s});var o=t(67294);const r={},i=o.createContext(r);function s(n){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),o.createElement(i.Provider,{value:e},n.children)}}}]);