"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[86227],{70400:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(85893),r=t(11151);const o={description:"Author: @wingkwong | https://leetcode.com/problems/unique-paths-ii/",tags:["Array","Dynamic Programming","Matrix"]},s="0063 - Unique Paths II (Medium)",a={id:"0000-0099/unique-paths-ii-medium",title:"0063 - Unique Paths II (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/unique-paths-ii/",source:"@site/solutions/0000-0099/0063-unique-paths-ii-medium.md",sourceDirName:"0000-0099",slug:"/0000-0099/unique-paths-ii-medium",permalink:"/solutions/0000-0099/unique-paths-ii-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0063-unique-paths-ii-medium.md",tags:[{inline:!0,label:"Array",permalink:"/solutions/tags/array"},{inline:!0,label:"Dynamic Programming",permalink:"/solutions/tags/dynamic-programming"},{inline:!0,label:"Matrix",permalink:"/solutions/tags/matrix"}],version:"current",sidebarPosition:63,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/unique-paths-ii/",tags:["Array","Dynamic Programming","Matrix"]},sidebar:"tutorialSidebar",previous:{title:"0062 - Unique Paths (Medium)",permalink:"/solutions/0000-0099/unique-paths-medium"},next:{title:"0066 - Plus One (Easy)",permalink:"/solutions/0000-0099/plus-one-easy"}},l={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Dynamic Programming",id:"approach-1-dynamic-programming",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{SolutionAuthor:t,TabItem:o,Tabs:s}=n;return t||u("SolutionAuthor",!0),o||u("TabItem",!0),s||u("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"0063---unique-paths-ii-medium",children:"0063 - Unique Paths II (Medium)"}),"\n",(0,i.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/unique-paths-ii/",children:"https://leetcode.com/problems/unique-paths-ii/"})}),"\n",(0,i.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(n.p,{children:["You are given an ",(0,i.jsx)(n.code,{children:"m x n"})," integer array ",(0,i.jsx)(n.code,{children:"grid"}),". There is a robot initially located at the ",(0,i.jsx)(n.strong,{children:"top-left corner"})," (i.e., ",(0,i.jsx)(n.code,{children:"grid[0][0]"}),"). The robot tries to move to the ",(0,i.jsx)(n.strong,{children:"bottom-right corner"})," (i.e., ",(0,i.jsx)(n.code,{children:"grid[m - 1][n - 1]"}),"). The robot can only move either down or right at any point in time."]}),"\n",(0,i.jsxs)(n.p,{children:["An obstacle and space are marked as ",(0,i.jsx)(n.code,{children:"1"})," or ",(0,i.jsx)(n.code,{children:"0"})," respectively in ",(0,i.jsx)(n.code,{children:"grid"}),". A path that the robot takes cannot include ",(0,i.jsx)(n.strong,{children:"any"})," square that is an obstacle."]}),"\n",(0,i.jsxs)(n.p,{children:["Return ",(0,i.jsx)(n.em,{children:"the number of possible unique paths that the robot can take to reach the bottom-right corner"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The testcases are generated so that the answer will be less than or equal to ",(0,i.jsx)(n.code,{children:"2 * 109"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]\nOutput: 2\nExplanation: There is one obstacle in the middle of the 3x3 grid above.\nThere are two ways to reach the bottom-right corner:\n1. Right -> Right -> Down -> Down\n2. Down -> Down -> Right -> Right\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: obstacleGrid = [[0,1],[0,0]]\nOutput: 1\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"m == obstacleGrid.length"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"n == obstacleGrid[i].length"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"1 <= m, n <= 100"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"obstacleGrid[i][j]"})," is ",(0,i.jsx)(n.code,{children:"0"})," or ",(0,i.jsx)(n.code,{children:"1"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"approach-1-dynamic-programming",children:"Approach 1: Dynamic Programming"}),"\n",(0,i.jsx)(s,{children:(0,i.jsxs)(o,{value:"cpp",label:"C++",children:[(0,i.jsx)(t,{name:"@wingkwong"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int uniquePathsWithObstacles(vector<vector<int>>& obstacleGrid) {\n        // DP - O(N * M)\n        int n = obstacleGrid.size(), m = obstacleGrid[0].size();\n        // dp[i][j]: the number of possible unique paths to reach grid[i][j]\n        vector<vector<int>> dp(n, vector<int>(m));\n        // base case - there is only one way to reach grid[0][0]\n        dp[0][0] = 1;\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < m; j++) {\n                if (obstacleGrid[i][j]) {\n                    // if there is an obstacle at grid[i][j], \n                    // then we couldn't reach grid[i][j],\n                    // hence setting dp[i][j] to 0\n                    dp[i][j] = 0;\n                } else {\n                    // otherwise, we can either reach grid[i][j] from the left cell dp[i][j - 1]\n                    if (j) dp[i][j] += dp[i][j - 1];\n                    // or from the top cell dp[i - 1][j]\n                    if (i) dp[i][j] += dp[i - 1][j];\n                }\n            }\n        }\n        // the number of possible unique paths \n        // that the robot can take to reach the bottom-right corner\n        return dp[n - 1][m - 1];\n    }\n};\n"})})]})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(67294);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);