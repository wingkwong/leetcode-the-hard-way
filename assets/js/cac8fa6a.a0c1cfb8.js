"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[53794],{42537:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"2200-2299/minimum-average-difference-medium","title":"2256 - Minimum Average Difference (Medium)","description":"Author: @wkw | https://leetcode.com/problems/minimum-average-difference/","source":"@site/solutions/2200-2299/2256-minimum-average-difference-medium.md","sourceDirName":"2200-2299","slug":"/2200-2299/minimum-average-difference-medium","permalink":"/solutions/2200-2299/minimum-average-difference-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2256-minimum-average-difference-medium.md","tags":[{"inline":true,"label":"Array","permalink":"/solutions/tags/array"},{"inline":true,"label":"Prefix Sum","permalink":"/solutions/tags/prefix-sum"}],"version":"current","sidebarPosition":2256,"frontMatter":{"description":"Author: @wkw | https://leetcode.com/problems/minimum-average-difference/","tags":["Array","Prefix Sum"]},"sidebar":"tutorialSidebar","previous":{"title":"2255 - Count Prefixes of a Given String (Easy)","permalink":"/solutions/2200-2299/count-prefixes-of-a-given-string-easy"},"next":{"title":"2259 - Remove Digit From Number to Maximize Result (Easy)","permalink":"/solutions/2200-2299/remove-digit-from-number-to-maximize-result-easy"}}');var s=i(86070),t=i(32790);const a={description:"Author: @wkw | https://leetcode.com/problems/minimum-average-difference/",tags:["Array","Prefix Sum"]},o="2256 - Minimum Average Difference (Medium)",l={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Prefix Sum",id:"approach-1-prefix-sum",level:2}];function d(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{SolutionAuthor:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"2256---minimum-average-difference-medium",children:"2256 - Minimum Average Difference (Medium)"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/minimum-average-difference/",children:"https://leetcode.com/problems/minimum-average-difference/"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(n.p,{children:["You are given a ",(0,s.jsx)(n.strong,{children:"0-indexed"})," integer array ",(0,s.jsx)(n.code,{children:"nums"})," of length ",(0,s.jsx)(n.code,{children:"n"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"average difference"})," of the index ",(0,s.jsx)(n.code,{children:"i"})," is the ",(0,s.jsx)(n.strong,{children:"absolute"})," ",(0,s.jsx)(n.strong,{children:"difference"})," between the average of the ",(0,s.jsx)(n.strong,{children:"first"})," ",(0,s.jsx)(n.code,{children:"i + 1"})," elements of ",(0,s.jsx)(n.code,{children:"nums"})," and the average of the ",(0,s.jsx)(n.strong,{children:"last"})," ",(0,s.jsx)(n.code,{children:"n - i - 1"})," elements. Both averages should be ",(0,s.jsx)(n.strong,{children:"rounded down"})," to the nearest integer."]}),"\n",(0,s.jsxs)(n.p,{children:["Return ",(0,s.jsxs)(n.em,{children:["the index with the ",(0,s.jsx)(n.strong,{children:"minimum average difference"})]}),". If there are multiple such indices, return the ",(0,s.jsx)(n.strong,{children:"smallest"})," one."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Note:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.strong,{children:"absolute difference"})," of two numbers is the absolute value of their difference."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.strong,{children:"average"})," of ",(0,s.jsx)(n.code,{children:"n"})," elements is the ",(0,s.jsx)(n.strong,{children:"sum"})," of the ",(0,s.jsx)(n.code,{children:"n"})," elements divided (",(0,s.jsx)(n.strong,{children:"integer division"}),") by ",(0,s.jsx)(n.code,{children:"n"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The average of ",(0,s.jsx)(n.code,{children:"0"})," elements is considered to be ",(0,s.jsx)(n.code,{children:"0"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: nums = [2,5,3,9,5,3]\nOutput: 3\nExplanation:\n- The average difference of index 0 is: |2 / 1 - (5 + 3 + 9 + 5 + 3) / 5| = |2 / 1 - 25 / 5| = |2 - 5| = 3.\n- The average difference of index 1 is: |(2 + 5) / 2 - (3 + 9 + 5 + 3) / 4| = |7 / 2 - 20 / 4| = |3 - 5| = 2.\n- The average difference of index 2 is: |(2 + 5 + 3) / 3 - (9 + 5 + 3) / 3| = |10 / 3 - 17 / 3| = |3 - 5| = 2.\n- The average difference of index 3 is: |(2 + 5 + 3 + 9) / 4 - (5 + 3) / 2| = |19 / 4 - 8 / 2| = |4 - 4| = 0.\n- The average difference of index 4 is: |(2 + 5 + 3 + 9 + 5) / 5 - 3 / 1| = |24 / 5 - 3 / 1| = |4 - 3| = 1.\n- The average difference of index 5 is: |(2 + 5 + 3 + 9 + 5 + 3) / 6 - 0| = |27 / 6 - 0| = |4 - 0| = 4.\nThe average difference of index 3 is the minimum average difference so return 3.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: nums = [0]\nOutput: 0\nExplanation:\nThe only index is 0 so return 0.\nThe average difference of index 0 is: |0 / 1 - 0| = |0 - 0| = 0.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= nums.length <= 10^5"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"0 <= nums[i] <= 10^5"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"approach-1-prefix-sum",children:"Approach 1: Prefix Sum"}),"\n",(0,s.jsxs)(n.p,{children:["For the example we can see that we need a range of sum of the input. Hence, we can calculate the prefix sum first. Then for each index, we split ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mi,{children:"n"}),(0,s.jsx)(n.mi,{children:"u"}),(0,s.jsx)(n.mi,{children:"m"}),(0,s.jsx)(n.mi,{children:"s"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"nums"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"u"}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"m"}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"s"})]})})]})," into two parts and calculate the average difference."]}),"\n",(0,s.jsx)(i,{name:"@wkw"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int minimumAverageDifference(vector<int>& nums) {\n        int ans = 0, n = nums.size(), mi = INT_MAX;\n        // since we need the sum for first i + 1 and last n - i - 1 elements\n        // we can pre-calculate it first\n        // it is called prefix sum and suffix sum\n        vector<long long> pref(n);\n        // prev[0] is the first element\n        pref[0] = nums[0];\n        // starting from i = 1, pref[i] is the sum + the current element\n        for (int i = 1; i < n; i++) pref[i] = pref[i - 1] + nums[i];\n        // then we can iterate each number\n        for (int i = 0; i < n; i++) {\n            // now we know the prefix sum\n            // the suffix sum is simply pref[n - 1] - pref[i]\n            long long k = abs((pref[i] / (i + 1)) - ((pref[n - 1] - pref[i]) / max(n - i - 1, 1)));\n            // check the min and update ans\n            if (k < mi) {\n                mi = k;\n                ans = i;\n            }\n        }\n        return ans;\n    }\n};\n"})})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},32790:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var r=i(30758);const s={},t=r.createContext(s);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);