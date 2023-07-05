"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[93993],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(n),u=a,c=h["".concat(p,".").concat(u)]||h[u]||m[u]||i;return n?r.createElement(c,o(o({ref:t},d),{},{components:n})):r.createElement(c,o({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[h]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},33048:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={description:"Author: @wingkwong | https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/"},o="2203 - Minimum Weighted Subgraph With the Required Paths (Hard)",s={unversionedId:"2100-2199/minimum-weighted-subgraph-with-the-required-paths-hard",id:"2100-2199/minimum-weighted-subgraph-with-the-required-paths-hard",title:"2203 - Minimum Weighted Subgraph With the Required Paths (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/",source:"@site/solutions/2100-2199/2203-minimum-weighted-subgraph-with-the-required-paths-hard.md",sourceDirName:"2100-2199",slug:"/2100-2199/minimum-weighted-subgraph-with-the-required-paths-hard",permalink:"/solutions/2100-2199/minimum-weighted-subgraph-with-the-required-paths-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2203-minimum-weighted-subgraph-with-the-required-paths-hard.md",tags:[],version:"current",sidebarPosition:2203,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/"},sidebar:"tutorialSidebar",previous:{title:"2202 - Maximize the Topmost Element After K Moves (Medium)",permalink:"/solutions/2100-2199/maximize-the-topmost-element-after-k-moves-medium"},next:{title:"2206 - Divide Array Into Equal Pairs (Easy)",permalink:"/solutions/2100-2199/divide-array-into-equal-pairs-easy"}},p={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Dijkstra x 3",id:"approach-1-dijkstra-x-3",level:2}],d=(h="SolutionAuthor",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var h;const m={toc:l},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2203---minimum-weighted-subgraph-with-the-required-paths-hard"},"2203 - Minimum Weighted Subgraph With the Required Paths (Hard)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/"},"https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"You are given an integer ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," denoting the number of nodes of a ",(0,a.kt)("strong",{parentName:"p"},"weighted directed")," graph. The nodes are numbered from ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"n - 1"),"."),(0,a.kt)("p",null,"You are also given a 2D integer array ",(0,a.kt)("inlineCode",{parentName:"p"},"edges")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"edges[i] = [fromi, toi, weighti]")," denotes that there exists a ",(0,a.kt)("strong",{parentName:"p"},"directed")," edge from ",(0,a.kt)("inlineCode",{parentName:"p"},"fromi")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"toi")," with weight ",(0,a.kt)("inlineCode",{parentName:"p"},"weighti"),"."),(0,a.kt)("p",null,"Lastly, you are given three ",(0,a.kt)("strong",{parentName:"p"},"distinct")," integers ",(0,a.kt)("inlineCode",{parentName:"p"},"src1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"src2"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"dest")," denoting three distinct nodes of the graph."),(0,a.kt)("p",null,"Return ",(0,a.kt)("em",{parentName:"p"},"the ",(0,a.kt)("strong",{parentName:"em"},"minimum weight")," of a subgraph of the graph such that it is ",(0,a.kt)("strong",{parentName:"em"},"possible")," to reach")," ",(0,a.kt)("inlineCode",{parentName:"p"},"dest")," ",(0,a.kt)("em",{parentName:"p"},"from both")," ",(0,a.kt)("inlineCode",{parentName:"p"},"src1")," ",(0,a.kt)("em",{parentName:"p"},"and")," ",(0,a.kt)("inlineCode",{parentName:"p"},"src2")," ",(0,a.kt)("em",{parentName:"p"},"via a set of edges of this subgraph"),". In case such a subgraph does not exist, return ",(0,a.kt)("inlineCode",{parentName:"p"},"-1"),"."),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"subgraph")," is a graph whose vertices and edges are subsets of the original graph. The ",(0,a.kt)("strong",{parentName:"p"},"weight")," of a subgraph is the sum of weights of its constituent edges."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2022/02/17/example1drawio.png",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: n = 6, edges = [[0,2,2],[0,5,6],[1,0,3],[1,4,5],[2,1,1],[2,3,3],[2,3,4],[3,4,2],[4,5,1]], src1 = 0, src2 = 1, dest = 5\nOutput: 9\nExplanation:\nThe above figure represents the input graph.\nThe blue edges represent one of the subgraphs that yield the optimal answer.\nNote that the subgraph [[1,0,3],[0,5,6]] also yields the optimal answer. It is not possible to get a subgraph with less weight satisfying all the constraints.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2022/02/17/example2-1drawio.png",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: n = 3, edges = [[0,1,1],[2,1,1]], src1 = 0, src2 = 1, dest = 2\nOutput: -1\nExplanation:\nThe above figure represents the input graph.\nIt can be seen that there does not exist any path from node 1 to node 2, hence there are no subgraphs satisfying all the constraints.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"3 <= n <= 10^5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0 <= edges.length <= 10^5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"edges[i].length == 3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0 <= fromi, toi, src1, src2, dest <= n - 1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fromi != toi")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src1"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"src2"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"dest")," are pairwise distinct."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= weight[i] <= 10^5"))),(0,a.kt)("h2",{id:"approach-1-dijkstra-x-3"},"Approach 1: Dijkstra x 3"),(0,a.kt)("p",null,"We calculate the shortest paths for each node from $$src1$$, $$src2$$ and $$dest$$. For $$dest$$, we need to do it in a reversed order. If we cannot reach $$src1$$ or $$src2$$ from $$dest$$, then the answer is $$-1$$. Otherwise, we iterate each node to find the distances and sum them together to take the minimal one."),(0,a.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"using ll = long long;\n\nclass Solution {\npublic:\n    template<typename T_pair, typename T_vector>\n    void dijkstra(T_pair &g, T_vector &dist, ll start) {\n      priority_queue<pair<ll, ll>, vector<pair<ll, ll>>, greater<pair<ll, ll>>> pq;\n      dist[start] = 0;\n      pq.push({start, 0});\n      while (!pq.empty()) {\n        auto [u_node, u_cost] = pq.top(); pq.pop();\n        if (u_cost > dist[u_node]) continue;\n        for (auto [v_node, v_cost] : g[u_node]) {\n          if (dist[v_node] > dist[u_node] + v_cost) {\n            dist[v_node] = dist[u_node] + v_cost;\n            pq.push({v_node, dist[v_node]});\n          }\n        }\n      }\n    }\n\n    long long minimumWeight(int n, vector<vector<int>>& edges, int src1, int src2, int dest) {\n        ll inf = 1e18;\n        vector<ll> d1(n, inf), d2(n, inf), d3(n, inf);\n        vector<vector<pair<ll, ll>>> g(n);\n        vector<vector<pair<ll, ll>>> rev_g(n);\n        for (auto x : edges) {\n            g[x[0]].push_back({x[1], x[2]});\n            // reversed order\n            rev_g[x[1]].push_back({x[0], x[2]});\n        }\n        // calculate shortest paths for each node from src1\n        dijkstra(g, d1, src1);\n        // calculate shortest paths for each node from src2\n        dijkstra(g, d2, src2);\n        // calculate shortest paths for each node from dest\n        dijkstra(rev_g, d3, dest);\n        // cannot reach src1 / src2 from dest\n        if (d3[src1] == inf || d3[src2] == inf) return -1;\n        ll ans = inf;\n        for (int i = 0; i < n; i++) {\n            ans = min(ans, d1[i] + d2[i] + d3[i]);\n        }\n        return ans;\n    }\n};\n")))}c.isMDXComponent=!0}}]);