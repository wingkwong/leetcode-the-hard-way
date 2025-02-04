"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[52097],{77517:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"1600-1699/path-with-minimum-effort-medium","title":"1631 - Path With Minimum Effort (Medium)","description":"Author: @wkw | https://leetcode.com/problems/path-with-minimum-effort/","source":"@site/solutions/1600-1699/1631-path-with-minimum-effort-medium.md","sourceDirName":"1600-1699","slug":"/1600-1699/path-with-minimum-effort-medium","permalink":"/solutions/1600-1699/path-with-minimum-effort-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1600-1699/1631-path-with-minimum-effort-medium.md","tags":[{"inline":true,"label":"Array","permalink":"/solutions/tags/array"},{"inline":true,"label":"Binary Search","permalink":"/solutions/tags/binary-search"},{"inline":true,"label":"Depth-First Search","permalink":"/solutions/tags/depth-first-search"},{"inline":true,"label":"Breadth-First Search","permalink":"/solutions/tags/breadth-first-search"},{"inline":true,"label":"Union Find","permalink":"/solutions/tags/union-find"},{"inline":true,"label":"Heap (Priority Queue)","permalink":"/solutions/tags/heap-priority-queue"},{"inline":true,"label":"Matrix","permalink":"/solutions/tags/matrix"}],"version":"current","sidebarPosition":1631,"frontMatter":{"description":"Author: @wkw | https://leetcode.com/problems/path-with-minimum-effort/","tags":["Array","Binary Search","Depth-First Search","Breadth-First Search","Union Find","Heap (Priority Queue)","Matrix"]},"sidebar":"tutorialSidebar","previous":{"title":"1630 - Arithmetic Subarrays (Medium)","permalink":"/solutions/1600-1699/arithmetic-subarrays-medium"},"next":{"title":"1633 - Smallest String With A Given Numeric Value (Medium)","permalink":"/solutions/1600-1699/smallest-string-with-a-given-numeric-value-medium"}}');var s=i(86070),r=i(32790);const a={description:"Author: @wkw | https://leetcode.com/problems/path-with-minimum-effort/",tags:["Array","Binary Search","Depth-First Search","Breadth-First Search","Union Find","Heap (Priority Queue)","Matrix"]},l="1631 - Path With Minimum Effort (Medium)",h={},o=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DFS + Binary Search",id:"approach-1-dfs--binary-search",level:2}];function c(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{SolutionAuthor:i,TabItem:t,Tabs:a}=n;return i||d("SolutionAuthor",!0),t||d("TabItem",!0),a||d("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"1631---path-with-minimum-effort-medium",children:"1631 - Path With Minimum Effort (Medium)"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/path-with-minimum-effort/",children:"https://leetcode.com/problems/path-with-minimum-effort/"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(n.p,{children:["You are a hiker preparing for an upcoming hike. You are given ",(0,s.jsx)(n.code,{children:"heights"}),", a 2D array of size ",(0,s.jsx)(n.code,{children:"rows x columns"}),", where ",(0,s.jsx)(n.code,{children:"heights[row][col]"})," represents the height of cell ",(0,s.jsx)(n.code,{children:"(row, col)"}),". You are situated in the top-left cell, ",(0,s.jsx)(n.code,{children:"(0, 0)"}),", and you hope to travel to the bottom-right cell, ",(0,s.jsx)(n.code,{children:"(rows-1, columns-1)"})," (i.e., ",(0,s.jsx)(n.strong,{children:"0-indexed"}),"). You can move ",(0,s.jsx)(n.strong,{children:"up"}),", ",(0,s.jsx)(n.strong,{children:"down"}),", ",(0,s.jsx)(n.strong,{children:"left"}),", or ",(0,s.jsx)(n.strong,{children:"right"}),", and you wish to find a route that requires the minimum ",(0,s.jsx)(n.strong,{children:"effort"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["A route's ",(0,s.jsx)(n.strong,{children:"effort"})," is the ",(0,s.jsx)(n.strong,{children:"maximum absolute difference"})," in heights between two consecutive cells of the route."]}),"\n",(0,s.jsxs)(n.p,{children:["Return ",(0,s.jsxs)(n.em,{children:["the minimum ",(0,s.jsx)(n.strong,{children:"effort"})," required to travel from the top-left cell to the bottom-right cell."]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2020/10/04/ex1.png",alt:""})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: heights = [[1,2,2],[3,8,2],[5,3,5]]\nOutput: 2\nExplanation: The route of [1,3,5,3,5] has a maximum absolute difference of 2 in consecutive cells.\nThis is better than the route of [1,2,2,2,5], where the maximum absolute difference is 3.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2020/10/04/ex2.png",alt:""})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: heights = [[1,2,3],[3,8,4],[5,3,5]]\nOutput: 1\nExplanation: The route of [1,2,3,4,5] has a maximum absolute difference of 1 in consecutive cells, which is better than route [1,3,5,3,5].\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2020/10/04/ex3.png",alt:""})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: heights = [[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]]\nOutput: 0\nExplanation: This route does not require any effort.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"rows == heights.length"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"columns == heights[i].length"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= rows, columns <= 100"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= heights[i][j] <= 10^6"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"approach-1-dfs--binary-search",children:"Approach 1: DFS + Binary Search"}),"\n",(0,s.jsxs)(n.p,{children:["Give the constraints, we know the absolute difference values would be between ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mo,{stretchy:"false",children:"["}),(0,s.jsx)(n.mn,{children:"0"}),(0,s.jsx)(n.mo,{separator:"true",children:","}),(0,s.jsx)(n.mn,{children:"1"}),(0,s.jsx)(n.mi,{children:"e"}),(0,s.jsx)(n.mn,{children:"6"}),(0,s.jsx)(n.mo,{stretchy:"false",children:"]"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"[0, 1e6]"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(n.span,{className:"mopen",children:"["}),(0,s.jsx)(n.span,{className:"mord",children:"0"}),(0,s.jsx)(n.span,{className:"mpunct",children:","}),(0,s.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.jsx)(n.span,{className:"mord",children:"1"}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"e"}),(0,s.jsx)(n.span,{className:"mord",children:"6"}),(0,s.jsx)(n.span,{className:"mclose",children:"]"})]})})]}),". Also looking for min max value gives a hint that we can use Binary Search to look for the possible absolute difference ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsx)(n.mrow,{children:(0,s.jsx)(n.mi,{children:"k"})}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"k"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"0.6944em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})})]}),", adn use DFS to walk the grid to see if the destination can be reached given ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsx)(n.mrow,{children:(0,s.jsx)(n.mi,{children:"k"})}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"k"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"0.6944em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})})]}),"."]}),"\n",(0,s.jsxs)(a,{children:[(0,s.jsxs)(t,{value:"cpp",label:"C++",children:[(0,s.jsx)(i,{name:"@wkw"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int dirx[4] = { -1, 0, 0, 1 };\n    int diry[4] = { 0, 1, -1, 0 };\n    void dfs(vector<vector<int>>& heights, vector<vector<int>>& vis, int i, int j, int mid) {\n        vis[i][j] = 1;\n        for (int d = 0; d < 4; d++) {\n            int x = i + dirx[d], y = j + diry[d];\n            if (x < 0 || x >= heights.size() || y < 0 || y >= heights[0].size() || vis[x][y]) continue;\n            // if it is out of the target mid, then skip\n            if (abs(heights[i][j] - heights[x][y]) > mid) continue;\n            dfs(heights, vis, x, y, mid);\n        }\n    }\n\n    int minimumEffortPath(vector<vector<int>>& heights) {\n        int m = (int) heights.size(), n = m ? (int) heights[0].size() : 0;\n        // init possible range\n        int l = 0, r = 1e6;\n        while(l < r) {\n            // get the middle one\n            // for even number of elements, take the lower one\n            int mid = l + (r - l) / 2;\n            vector<vector<int>> vis(m, vector<int>(n, 0));\n            // call dfs to check if the dist can be reached or not\n            dfs(heights, vis, 0, 0, mid);\n            // exclude mid\n            if(!vis[m - 1][n - 1]) l = mid + 1;\n            // include mid\n            else r = mid;\n        }\n        return l;\n    }\n};\n"})})]}),(0,s.jsxs)(t,{value:"kt",label:"Kotlin",children:[(0,s.jsx)(i,{name:"@wkw"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kt",children:"class Solution {\n    private val dirx = intArrayOf(-1, 0, 0, 1)\n    private val diry = intArrayOf(0, 1, -1, 0)\n    private fun dfs(heights: Array<IntArray>, vis: Array<BooleanArray>, i: Int, j: Int, mid: Int) {\n        vis[i][j] = true\n        for (d in 0 until 4) {\n            val x = i + dirx[d]\n            val y = j + diry[d]\n            // if it is out of the target mid, then skip\n            if (x < 0 || x >= heights.size || y < 0 || y >= heights[0].size || vis[x][y] ||\n                Math.abs(heights[i][j] - heights[x][y]) > mid\n            ) continue\n            dfs(heights, vis, x, y, mid)\n        }\n    }\n    fun minimumEffortPath(heights: Array<IntArray>): Int {\n        val n = heights.size\n        val m = heights[0].size\n        // init possible range\n        var l = 0\n        var r = 1e6.toInt()\n        // binary search\n        while (l < r) {\n            val mid = (l + r) / 2\n            val vis = Array(n) { BooleanArray(m) }\n            // call dfs to check if the dist can be reached or not\n            dfs(heights, vis, 0, 0, mid)\n            // exclude mid\n            if (!vis[n - 1][m - 1]) l = mid + 1\n            // include mid\n            else r = mid\n        }\n        return l\n    }\n}\n"})})]})]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}function d(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},32790:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var t=i(30758);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);