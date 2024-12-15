"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[25169],{65972:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"2400-2499/longest-subarray-with-maximum-bitwise-and-medium","title":"2419 - Longest Subarray With Maximum Bitwise AND (Medium)","description":"Author: @wingkwong, @ganajayant | https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/","source":"@site/solutions/2400-2499/2419-longest-subarray-with-maximum-bitwise-and-medium.md","sourceDirName":"2400-2499","slug":"/2400-2499/longest-subarray-with-maximum-bitwise-and-medium","permalink":"/solutions/2400-2499/longest-subarray-with-maximum-bitwise-and-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2400-2499/2419-longest-subarray-with-maximum-bitwise-and-medium.md","tags":[],"version":"current","sidebarPosition":2419,"frontMatter":{"description":"Author: @wingkwong, @ganajayant | https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/"},"sidebar":"tutorialSidebar","previous":{"title":"2418 - Sort the People (Easy)","permalink":"/solutions/2400-2499/sort-the-people-easy"},"next":{"title":"2420 - Find All Good Indices (Medium)","permalink":"/solutions/2400-2499/find-all-good-indices-medium"}}');var i=t(74848),r=t(28453);const a={description:"Author: @wingkwong, @ganajayant | https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/"},o="2419 - Longest Subarray With Maximum Bitwise AND (Medium)",l={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Consecutive Max Element",id:"approach-1-consecutive-max-element",level:2}];function u(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{SolutionAuthor:t,TabItem:s,Tabs:a}=n;return t||d("SolutionAuthor",!0),s||d("TabItem",!0),a||d("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"2419---longest-subarray-with-maximum-bitwise-and-medium",children:"2419 - Longest Subarray With Maximum Bitwise AND (Medium)"})}),"\n",(0,i.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/",children:"https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/"})}),"\n",(0,i.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(n.p,{children:["You are given an integer array ",(0,i.jsx)(n.code,{children:"nums"})," of size ",(0,i.jsx)(n.code,{children:"n"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Consider a ",(0,i.jsx)(n.strong,{children:"non-empty"})," subarray from ",(0,i.jsx)(n.code,{children:"nums"})," that has the ",(0,i.jsx)(n.strong,{children:"maximum"})," possible ",(0,i.jsx)(n.strong,{children:"bitwise AND"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["In other words, let ",(0,i.jsx)(n.code,{children:"k"})," be the maximum value of the bitwise AND of ",(0,i.jsx)(n.strong,{children:"any"})," subarray of ",(0,i.jsx)(n.code,{children:"nums"}),". Then, only subarrays with a bitwise AND equal to ",(0,i.jsx)(n.code,{children:"k"})," should be considered."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Return ",(0,i.jsxs)(n.em,{children:["the length of the ",(0,i.jsx)(n.strong,{children:"longest"})," such subarray"]}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The bitwise AND of an array is the bitwise AND of all the numbers in it."}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.strong,{children:"subarray"})," is a contiguous sequence of elements within an array."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: nums = [1,2,3,3,2,2]\nOutput: 2\nExplanation:\nThe maximum possible bitwise AND of a subarray is 3.\nThe longest subarray with that value is [3,3], so we return 2.\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: nums = [1,2,3,4]\nOutput: 1\nExplanation:\nThe maximum possible bitwise AND of a subarray is 4.\nThe longest subarray with that value is [4], so we return 1.\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"1 <= nums.length <= 105"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"1 <= nums[i] <= 10^6"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"approach-1-consecutive-max-element",children:"Approach 1: Consecutive Max Element"}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsxs)(s,{value:"cpp",label:"C++",children:[(0,i.jsx)(t,{name:"@wingkwong"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int longestSubarray(vector<int>& nums) {\n        // the bitwise AND of two different numbers will always be strictly less than the maximum of those two numbers\n        // so the longest subarray with max bitwise AND would be the subarray containing only the max numbers\n        int mx = *max_element(nums.begin(), nums.end());\n        int ans, cnt = 0;\n        for (auto &x : nums) {\n            // increase the count by 1 if it is same as the max number\n            if (x == mx) cnt += 1;\n            // else reset it\n            else cnt = 0;\n            // update ans\n            ans = max(ans, cnt);\n        }\n        return ans;\n    }\n};\n"})})]}),(0,i.jsxs)(s,{value:"java",label:"Java",children:[(0,i.jsx)(t,{name:"@ganajayant"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n    public int longestSubarray(int[] nums) {\n        int max = 0, longest = 1, current = 0;\n        for (int num : nums) {\n            max = Math.max(max, num);\n        }\n        for (int num : nums) {\n            if (num == max) {\n                longest = Math.max(longest, ++current);\n            } else {\n                current = 0;\n            }\n        }\n        return longest;\n    }\n}\n"})})]})]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}function d(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(96540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);