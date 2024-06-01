"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[58316],{33469:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=t(85893),a=t(11151);const i={description:"Author: @hirotake111, @wingkwong | https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/",tags:["Tree","Depth-First Search","Backtracking"]},r="1443 - Minimum Time to Collect All Apples in a Tree (Medium)",l={id:"1400-1499/minimum-time-to-collect-all-apples-in-a-tree",title:"1443 - Minimum Time to Collect All Apples in a Tree (Medium)",description:"Author: @hirotake111, @wingkwong | https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/",source:"@site/solutions/1400-1499/1443-minimum-time-to-collect-all-apples-in-a-tree.md",sourceDirName:"1400-1499",slug:"/1400-1499/minimum-time-to-collect-all-apples-in-a-tree",permalink:"/solutions/1400-1499/minimum-time-to-collect-all-apples-in-a-tree",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1400-1499/1443-minimum-time-to-collect-all-apples-in-a-tree.md",tags:[{inline:!0,label:"Tree",permalink:"/solutions/tags/tree"},{inline:!0,label:"Depth-First Search",permalink:"/solutions/tags/depth-first-search"},{inline:!0,label:"Backtracking",permalink:"/solutions/tags/backtracking"}],version:"current",sidebarPosition:1443,frontMatter:{description:"Author: @hirotake111, @wingkwong | https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/",tags:["Tree","Depth-First Search","Backtracking"]},sidebar:"tutorialSidebar",previous:{title:"1434 - Number of Ways to Wear Different Hats to Each Other (Hard)",permalink:"/solutions/1400-1499/number-of-ways-to-wear-different-hats-to-each-other-hard"},next:{title:"1448 - Count Good Nodes in Binary Tree (Medium)",permalink:"/solutions/1400-1499/count-good-nodes-in-binary-tree-medium"}},o={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DFS + Backtracking",id:"approach-1-dfs--backtracking",level:2}];function d(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{SolutionAuthor:t,TabItem:i,Tabs:r}=n;return t||p("SolutionAuthor",!0),i||p("TabItem",!0),r||p("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"1443---minimum-time-to-collect-all-apples-in-a-tree-medium",children:"1443 - Minimum Time to Collect All Apples in a Tree (Medium)"}),"\n",(0,s.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/",children:"https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(n.p,{children:["Given an undirected tree consisting of ",(0,s.jsx)(n.code,{children:"n"})," vertices numbered from ",(0,s.jsx)(n.code,{children:"0"})," to ",(0,s.jsx)(n.code,{children:"n-1"}),", which has some apples in their vertices. You spend 1 second to walk over one edge of the tree. ",(0,s.jsxs)(n.em,{children:["Return the minimum time in seconds you have to spend to collect all apples in the tree, starting at ",(0,s.jsx)(n.strong,{children:"vertex 0"})," and coming back to this vertex."]})]}),"\n",(0,s.jsxs)(n.p,{children:["The edges of the undirected tree are given in the array ",(0,s.jsx)(n.code,{children:"edges"}),", where ",(0,s.jsx)(n.code,{children:"edges[i] = [ai, bi]"})," means that exists an edge connecting the vertices ",(0,s.jsx)(n.code,{children:"ai"})," and ",(0,s.jsx)(n.code,{children:"bi"}),". Additionally, there is a boolean array ",(0,s.jsx)(n.code,{children:"hasApple"}),", where ",(0,s.jsx)(n.code,{children:"hasApple[i] = true"})," means that vertex ",(0,s.jsx)(n.code,{children:"i"})," has an apple; otherwise, it does not have any apple."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2020/04/23/min_time_collect_apple_1.png",alt:""})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,true,true,false]\nOutput: 8\nExplanation: The figure above represents the given tree where red vertices have an apple. One optimal path to collect all apples is shown by the green arrows.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2020/04/23/min_time_collect_apple_2.png",alt:""})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,false,true,false]\nOutput: 6\nExplanation: The figure above represents the given tree where red vertices have an apple. One optimal path to collect all apples is shown by the green arrows.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,false,false,false,false,false]\nOutput: 0\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= n <= 105"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"edges.length == n - 1"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"edges[i].length == 2"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"0 <= ai < bi <= n - 1"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"fromi < toi"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"hasApple.length == n"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"approach-1-dfs--backtracking",children:"Approach 1: DFS + Backtracking"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Let's make another array out of ",(0,s.jsx)(n.code,{children:"edges"})," and call it ",(0,s.jsx)(n.code,{children:"graph"}),", where each element ",(0,s.jsx)(n.code,{children:"graph[i]"})," contains neighbour edges."]}),"\n",(0,s.jsxs)(n.li,{children:["Perform DFS + backtracking to calculate the minimum time in second using ",(0,s.jsx)(n.code,{children:"graph"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Time Complexity: ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mi,{children:"O"}),(0,s.jsx)(n.mo,{stretchy:"false",children:"("}),(0,s.jsx)(n.mi,{children:"n"}),(0,s.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,s.jsx)(n.span,{className:"mopen",children:"("}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,s.jsx)(n.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Space Complexity: ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mi,{children:"O"}),(0,s.jsx)(n.mo,{stretchy:"false",children:"("}),(0,s.jsx)(n.mi,{children:"n"}),(0,s.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,s.jsx)(n.span,{className:"mopen",children:"("}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,s.jsx)(n.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsxs)(i,{value:"py",label:"Python",children:[(0,s.jsx)(t,{name:"@hirotake111"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"class Solution:\n    def minTime(self, n: int, edges: List[List[int]], hasApple: List[bool]) -> int:\n        # Edge case: no apples - just return 0\n        if len(list(filter(lambda edge: edge, hasApple))) == 0:\n            return 0\n\n        # Create a graph using edges\n        graph: List[List[int]] = [[] for _ in range(n)]\n        for edge_a, edge_b in edges:\n            if edge_b not in graph[edge_a]:\n                graph[edge_a].append(edge_b)\n            if edge_a not in graph[edge_b]:\n                graph[edge_b].append(edge_a)\n\n        def dfs(current: int, parent: int) -> int:\n            sub_total = 0\n\n            for child in graph[current]:\n                # If child == parent, do nothing to prevent going back to the parent\n                # If not, this should be an index of a child edge\n                # -> perform dfs and add the result to sub total\n                if child != parent:\n                    sub_total += dfs(child, current)\n\n            # If the edge has apples in it, or  if children has apples,\n            # we need to visit it -> add extra 2\n            if hasApple[current] or 0 < sub_total:\n                return sub_total + 2\n            # Else, this edge has no apples, or no children that have apples.\n            # So we don't have to visit this edge -> just return 0\n            return 0\n\n        # In this approach dfs() assumes there is always a parent edge connected to it.\n        # But since root doesn't have it - the result has 2 extra unit of seconds.\n        # Therefore subtract 2 from the result of dfs()\n        return dfs(0, -1) - 2\n"})})]}),(0,s.jsxs)(i,{value:"go",label:"Go",children:[(0,s.jsx)(t,{name:"@hirotake111"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"func minTime(n int, edges [][]int, hasApple []bool) int {\n\t// Edge case: no nodes containing apple\n\tflag := false\n\tfor _, apple := range hasApple {\n\t\tflag = flag || apple\n\t}\n\tif !flag {\n\t\treturn 0\n\t}\n\n\t// Create a graph\n\tgraph := make([][]int, n)\n\tfor _, edgeIndexes := range edges {\n\t\tedgeA := edgeIndexes[0]\n\t\tedgeB := edgeIndexes[1]\n\t\tif !contains(graph[edgeA], edgeB) {\n\t\t\tgraph[edgeA] = append(graph[edgeA], edgeB)\n\t\t}\n\t\tif !contains(graph[edgeB], edgeA) {\n\t\t\tgraph[edgeB] = append(graph[edgeB], edgeA)\n\t\t}\n\t}\n\n\tvar dfs func(current, parent int) int\n\tdfs = func(current, parent int) int {\n\t\tsubTotal := 0\n\t\tfor _, child := range graph[current] {\n\t\t\tif child != parent {\n\t\t\t\t// child index points to a child edge\n\t\t\t\tsubTotal += dfs(child, current)\n\t\t\t}\n\t\t}\n\t\tif hasApple[current] || 0 < subTotal {\n\t\t\treturn subTotal + 2\n\t\t}\n\t\treturn 0\n\t}\n\n\treturn dfs(0, -1) - 2\n}\n\nfunc contains(edges []int, target int) bool {\n\tfor edge := range edges {\n\t\tif edge == target {\n\t\t\treturn true\n\t\t}\n\t}\n\treturn false\n}\n\n"})})]}),(0,s.jsxs)(i,{value:"cpp",label:"C++",children:[(0,s.jsx)(t,{name:"@wingkwong"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int minTime(int n, vector<vector<int>>& edges, vector<bool>& hasApple) {\n        vector<vector<int>> g(n);\n        for (auto x : edges) {\n            g[x[0]].push_back(x[1]);\n            g[x[1]].push_back(x[0]);\n        }\n        // u = currenct vertex\n        // p = parent vertex\n        function<int(int, int)> dfs = [&] (int u, int p) {\n            int res = 0, t = 0;\n            for (auto v : g[u]) {\n                // if v is not same as p\n                if (p ^ v) {\n                    // calculate the child time\n                    t = dfs(v, u);\n                    // if there is an apple in the subtree, we need 2 seconds to collect it and head back\n                    // if we are in vertex 1, we need 4 seconds to collect all the apples in 4 & 5 \n                    // i.e. (1 -> 4, 4 -> 1, 1 -> 5, 5 -> 1)\n                    // how does 0 know that 1 has collected the apple? check the time, i.e. `t`\n                    // if t > 0, it means we got some apples in sub trees\n                    if (t > 0 || hasApple[v]) {\n                        res += t + 2;\n                    }\n                }\n            }\n            return res;\n        };\n        return dfs(0, -1);\n    }\n};\n"})})]})]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var s=t(67294);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);