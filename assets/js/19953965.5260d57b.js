"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[89040],{43171:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>m});const i=JSON.parse('{"id":"1100-1199/stone-game-ii-medium","title":"1140 - Stone Game II (Medium)","description":"Author: @wkw | https://leetcode.com/problems/stone-game-ii/","source":"@site/solutions/1100-1199/1140-stone-game-ii-medium.md","sourceDirName":"1100-1199","slug":"/1100-1199/stone-game-ii-medium","permalink":"/solutions/1100-1199/stone-game-ii-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1100-1199/1140-stone-game-ii-medium.md","tags":[{"inline":true,"label":"Array","permalink":"/solutions/tags/array"},{"inline":true,"label":"Math","permalink":"/solutions/tags/math"},{"inline":true,"label":"Dynamic Programming","permalink":"/solutions/tags/dynamic-programming"},{"inline":true,"label":"Game Theory","permalink":"/solutions/tags/game-theory"}],"version":"current","sidebarPosition":1140,"frontMatter":{"description":"Author: @wkw | https://leetcode.com/problems/stone-game-ii/","tags":["Array","Math","Dynamic Programming","Game Theory"]},"sidebar":"tutorialSidebar","previous":{"title":"1137 - N-th Tribonacci Number (Easy)","permalink":"/solutions/1100-1199/n-th-tribonacci-number-easy"},"next":{"title":"1143 - Longest Common Subsequence (Medium)","permalink":"/solutions/1100-1199/longest-common-subsequence-medium"}}');var s=t(86070),o=t(32790);const a={description:"Author: @wkw | https://leetcode.com/problems/stone-game-ii/",tags:["Array","Math","Dynamic Programming","Game Theory"]},r="1140 - Stone Game II (Medium)",l={},m=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Dynamic Programming",id:"approach-1-dynamic-programming",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{SolutionAuthor:t,TabItem:i,Tabs:a}=n;return t||d("SolutionAuthor",!0),i||d("TabItem",!0),a||d("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"1140---stone-game-ii-medium",children:"1140 - Stone Game II (Medium)"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(n.p,{children:["Alice and Bob continue their\xa0games with piles of stones.\xa0 There are a number of\xa0piles\xa0",(0,s.jsx)(n.strong,{children:"arranged in a row"}),", and each pile has a positive integer number of stones\xa0",(0,s.jsx)(n.code,{children:"piles[i]"}),".\xa0 The objective of the game is to end with the most\xa0stones."]}),"\n",(0,s.jsxs)(n.p,{children:["Alice\xa0and Bob take turns, with Alice starting first.\xa0 Initially, ",(0,s.jsx)(n.code,{children:"M = 1"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["On each player's turn, that player\xa0can take ",(0,s.jsx)(n.strong,{children:"all the stones"})," in the ",(0,s.jsx)(n.strong,{children:"first"})," ",(0,s.jsx)(n.code,{children:"X"})," remaining piles, where ",(0,s.jsx)(n.code,{children:"1 <= X <= 2M"}),".\xa0 Then, we set\xa0",(0,s.jsx)(n.code,{children:"M = max(M, X)"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The game continues until all the stones have been taken."}),"\n",(0,s.jsx)(n.p,{children:"Assuming Alice and Bob play optimally, return the maximum number of stones Alice\xa0can get."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: piles = [2,7,9,4,4]\nOutput: 10\nExplanation:  If Alice takes one pile at the beginning, Bob takes two piles, then Alice takes 2 piles again. Alice can get 2 + 4 + 4 = 10 piles in total. If Alice takes two piles at the beginning, then Bob can take all three piles left. In this case, Alice get 2 + 7 = 9 piles in total. So we return 10 since it's larger.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: piles = [1,2,3,4,5,100]\nOutput: 104\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= piles.length <= 100"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= piles[i]\xa0<= 10^4"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"approach-1-dynamic-programming",children:"Approach 1: Dynamic Programming"}),"\n",(0,s.jsxs)(a,{children:[(0,s.jsxs)(i,{value:"cpp",label:"C++",children:[(0,s.jsx)(t,{name:"@wkw"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    // dp[i][j] = max stones you can get from piles[i:] with M = j\n    int dp[101][200], n;\n    int dfs(vector<int>& piles, int i, int m, int total) {\n        // if we calculated the result before, use it directly\n        if (dp[i][m] != -1) return dp[i][m];\n        // res: used to compare the max number of stones\n        // taken: used to record how many stones we've taken\n        int res = 0, taken = 0;\n        // i is the starting position\n        // we can take at most i + 2 * m piles\n        // however, it may exceed the size of piles\n        // hence use min to get the max limit\n        for (int j = i; j < min(i + 2 * m, n); j++) {\n            // take this pile of stones\n            taken += piles[j];\n            // move to the next position\n            // with the new M = max(M, X)\n            // where X is how many piles we've taken so far which is j - i + 1\n            res = max(res, total - dfs(piles, j + 1, max(m, j - i + 1), total - taken));\n        }\n        // memoize the result\n        return dp[i][m] = res;\n    }\n\n    int stoneGameII(vector<int>& piles) {\n        // init dp with value -1\n        memset(dp, -1, sizeof(dp));\n        n = piles.size();\n        return dfs(piles, 0, 1, accumulate(piles.begin(), piles.end(), 0));\n    }\n};\n"})})]}),(0,s.jsxs)(i,{value:"py",label:"Python",children:[(0,s.jsx)(t,{name:"@wkw"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"class Solution:\n    def stoneGameII(self, piles: List[int]) -> int:\n        n = len(piles)\n        @cache\n        def dfs(i, m, total):\n            # used to compare the max number of stones\n            res = 0\n            # used to record how many stones we've taken\n            taken = 0\n            # i is the starting position\n            # we can take at most i + 2 * m piles\n            # however, it may exceed the size of piles\n            # hence use min to get the max limit\n            for j in range(i, min(i + 2 * m, n)):\n                # take this pile of stones\n                taken += piles[j]\n                # move to the next position\n                # with the new M = max(M, X)\n                # where X is how many piles we've taken so far which is j - i + 1\n                res = max(res, total - dfs(j + 1, max(m, j - i + 1), total - taken))\n            return res\n        return dfs(0, 1, sum(piles))\n"})})]})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}function d(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},32790:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(30758);const s={},o=i.createContext(s);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);