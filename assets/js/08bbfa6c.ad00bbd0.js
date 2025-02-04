"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[72385],{50525:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"2300-2399/count-special-integers-hard","title":"2376 - Count Special Integers (Hard)","description":"Author: @wkw | https://leetcode.com/problems/count-special-integers/","source":"@site/solutions/2300-2399/2376-count-special-integers-hard.md","sourceDirName":"2300-2399","slug":"/2300-2399/count-special-integers-hard","permalink":"/solutions/2300-2399/count-special-integers-hard","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2300-2399/2376-count-special-integers-hard.md","tags":[{"inline":true,"label":"Math","permalink":"/solutions/tags/math"},{"inline":true,"label":"Dynamic Programming","permalink":"/solutions/tags/dynamic-programming"}],"version":"current","sidebarPosition":2376,"frontMatter":{"description":"Author: @wkw | https://leetcode.com/problems/count-special-integers/","tags":["Math","Dynamic Programming"]},"sidebar":"tutorialSidebar","previous":{"title":"2373 - Largest Local Values in a Matrix (Easy)","permalink":"/solutions/2300-2399/largest-local-values-in-a-matrix-easy"},"next":{"title":"2379 - Minimum Recolors to Get K Consecutive Black Blocks (Easy)","permalink":"/solutions/2300-2399/minimum-recolors-to-get-k-consecutive-black-blocks-easy"}}');var s=t(86070),r=t(32790);const a={description:"Author: @wkw | https://leetcode.com/problems/count-special-integers/",tags:["Math","Dynamic Programming"]},o="2376 - Count Special Integers (Hard)",l={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Digit DP + BitMasking",id:"approach-1-digit-dp--bitmasking",level:2}];function d(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{SolutionAuthor:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"2376---count-special-integers-hard",children:"2376 - Count Special Integers (Hard)"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(n.p,{children:["We call a positive integer ",(0,s.jsx)(n.strong,{children:"special"})," if all of its digits are ",(0,s.jsx)(n.strong,{children:"distinct"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Given a ",(0,s.jsx)(n.strong,{children:"positive"})," integer ",(0,s.jsx)(n.code,{children:"n"}),", return ",(0,s.jsx)(n.em,{children:"the number of special integers that belong to the interval"}),(0,s.jsx)(n.code,{children:"[1, n]"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: n = 20\nOutput: 19\nExplanation: All the integers from 1 to 20, except 11, are special. Thus, there are 19 special integers.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: n = 5\nOutput: 5\nExplanation: All the integers from 1 to 5 are special.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: n = 135\nOutput: 110\nExplanation: There are 110 integers from 1 to 135 that are special.\nSome of the integers that are not special are: 22, 114, and 131.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= n <= 2 * 10^9"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"approach-1-digit-dp--bitmasking",children:"Approach 1: Digit DP + BitMasking"}),"\n",(0,s.jsx)(t,{name:"@wkw"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int dp[11][1 << 10][2];\n    int dfs(string s, int i, int mask, int tight) {\n        // if it can reach to the end, check if the value is 0\n        if (i == s.size()) return mask == 0 ? 0 : 1;\n        // if it is calculated before, return it directly\n        if (dp[i][mask][tight] != -1) return dp[i][mask][tight];\n        // if `tight` is true, that means the range is only from 0 to s[i]\n        // fo example, n = 20 - we cannot put any digit greater than 2 on the first place\n        // if `tight` is false, that means we can put 0 - 9 in position i\n        int mxDigit = tight ? s[i] - '0' : 9;\n        int ans = 0;\n        for (int d = 0; d <= mxDigit; d++) {\n            //if this digit is already included, skip this digit\n            if ((1 << d) & mask) continue;\n            int newMask = mask;\n            // skip leading 0\n            // set the new mask\n            if (!(d == 0 && mask == 0)) newMask |= (1 << d);\n            // find the new tight\n            int newTight = tight ? s[i] - '0' == d : 0;\n            // try the next position\n            ans += dfs(s, i + 1, newMask, newTight);\n        }\n        // memoize the answer\n        return dp[i][mask][tight] = ans;\n    }\n\n    int countSpecialNumbers(int n) {\n        // init dp with value -1\n        memset(dp, -1, sizeof(dp));\n        // dfs from position 0\n        return dfs(to_string(n), 0, 0, 1);\n    }\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},32790:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(30758);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);