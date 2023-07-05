"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[52741],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,f=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},28383:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={description:"Author: @wingkwong | https://leetcode.com/problems/as-far-from-land-as-possible/"},o="1162 -  As Far from Land as Possible (Medium)",l={unversionedId:"1100-1199/as-far-from-land-as-possible-medium",id:"1100-1199/as-far-from-land-as-possible-medium",title:"1162 -  As Far from Land as Possible (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/as-far-from-land-as-possible/",source:"@site/solutions/1100-1199/1162-as-far-from-land-as-possible-medium.md",sourceDirName:"1100-1199",slug:"/1100-1199/as-far-from-land-as-possible-medium",permalink:"/solutions/1100-1199/as-far-from-land-as-possible-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1100-1199/1162-as-far-from-land-as-possible-medium.md",tags:[],version:"current",sidebarPosition:1162,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/as-far-from-land-as-possible/"},sidebar:"tutorialSidebar",previous:{title:"1155 - Number of Dice Rolls With Target Sum (Medium)",permalink:"/solutions/1100-1199/number-of-dice-rolls-with-target-sum-medium"},next:{title:"1168 - Optimize Water Distribution in a Village (Hard)",permalink:"/solutions/1100-1199/optimize-water-distribution-in-a-village-hard"}},s={},p=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: BFS",id:"approach-1-bfs",level:2}],d=(m="SolutionAuthor",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var m;const u={toc:p},c="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1162----as-far-from-land-as-possible-medium"},"1162 -  As Far from Land as Possible (Medium)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/as-far-from-land-as-possible/"},"https://leetcode.com/problems/as-far-from-land-as-possible/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Given an ",(0,a.kt)("inlineCode",{parentName:"p"},"n x n")," ",(0,a.kt)("inlineCode",{parentName:"p"},"grid")," containing only values ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," represents water and ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," represents land, find a water cell such that its distance to the nearest land cell is maximized, and return the distance. If no land or water exists in the grid, return ",(0,a.kt)("inlineCode",{parentName:"p"},"-1"),"."),(0,a.kt)("p",null,"The distance used in this problem is the Manhattan distance: the distance between two cells ",(0,a.kt)("inlineCode",{parentName:"p"},"(x0, y0)")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"(x1, y1)")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"|x0 - x1| + |y0 - y1|"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2019/05/03/1336_ex1.JPG",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: grid = [[1,0,1],[0,0,0],[1,0,1]]\nOutput: 2\nExplanation: The cell (1, 1) is as far as possible from all the land with distance 2.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2019/05/03/1336_ex2.JPG",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: grid = [[1,0,0],[0,0,0],[0,0,0]]\nOutput: 4\nExplanation: The cell (2, 2) is as far as possible from all the land with distance 4.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"n == grid.length")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"n == grid[i].length")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= n <= 100")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"grid[i][j]")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"1"))),(0,a.kt)("h2",{id:"approach-1-bfs"},"Approach 1: BFS"),(0,a.kt)("p",null,"We use a queue to store all coordinates for each $$1$$. If the size of the queue is $$n * n$$, then we can return $$-1$$. Otherwise, we can walk the grid and mark $$dist$$ for those cells with $$0$$. The answer would be $$dist - 1$$."),(0,a.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int maxDistance(vector<vector<int>>& grid) {\n        int n = grid.size();\n        queue<pair<int, int>> q, q1;\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                if (grid[i][j] == 1) {\n                    // put all starting points\n                    q.push({i, j});\n                }\n            }\n        }\n        // early exit. return -1\n        if (q.size() == n * n) {\n            return -1;\n        }\n        int dist = 0;\n        int dirx[4] = {-1, 0, 0, 1};\n        int diry[4] = {0, 1, -1, 0};\n        // standard bfs\n        while (!q.empty()) {\n            // walk the grid\n            dist++;\n            int m = q.size();\n            for (int it = 0 ; it < m; it++) {\n                auto [i, j] = q.front(); q.pop();\n                for (int k = 0; k < 4; k++) {\n                    int ni = i + dirx[k];\n                    int nj = j + diry[k];\n                     if (ni >= 0 && nj >= 0 && ni < n && nj < n && grid[ni][nj] == 0) {\n                        // mark dist to avoid from visiting again\n                        grid[ni][nj] = dist;\n                        // next point to start\n                        q.push({ni, nj});\n                     }\n                }\n            }\n        }\n        return --dist;\n    }\n};\n")))}f.isMDXComponent=!0}}]);