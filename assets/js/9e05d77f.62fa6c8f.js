"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[76128],{83641:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"2100-2199/count-equal-and-divisible-pairs-in-an-array-easy","title":"2176 - Count Equal and Divisible Pairs in an Array (Easy)","description":"Author: @wkw | https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/","source":"@site/solutions/2100-2199/2176-count-equal-and-divisible-pairs-in-an-array-easy.md","sourceDirName":"2100-2199","slug":"/2100-2199/count-equal-and-divisible-pairs-in-an-array-easy","permalink":"/solutions/2100-2199/count-equal-and-divisible-pairs-in-an-array-easy","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2176-count-equal-and-divisible-pairs-in-an-array-easy.md","tags":[],"version":"current","sidebarPosition":2176,"frontMatter":{"description":"Author: @wkw | https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/"},"sidebar":"tutorialSidebar","previous":{"title":"2172 - Maximum AND Sum of Array (Hard)","permalink":"/solutions/2100-2199/maximum-and-sum-of-array-hard"},"next":{"title":"2177 - Find Three Consecutive Integers That Sum to a Given Number (Medium)","permalink":"/solutions/2100-2199/find-three-consecutive-integers-that-sum-to-a-given-number-medium"}}');var s=i(86070),t=i(32790);const a={description:"Author: @wkw | https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/"},o="2176 - Count Equal and Divisible Pairs in an Array (Easy)",l={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Brute Force",id:"approach-1-brute-force",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{SolutionAuthor:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"2176---count-equal-and-divisible-pairs-in-an-array-easy",children:"2176 - Count Equal and Divisible Pairs in an Array (Easy)"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/",children:"https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(n.p,{children:["Given a ",(0,s.jsx)(n.strong,{children:"0-indexed"})," integer array ",(0,s.jsx)(n.code,{children:"nums"})," of length ",(0,s.jsx)(n.code,{children:"n"})," and an integer ",(0,s.jsx)(n.code,{children:"k"}),", return ",(0,s.jsxs)(n.em,{children:["the ",(0,s.jsx)(n.strong,{children:"number of pairs"})]})," ",(0,s.jsx)(n.code,{children:"(i, j)"})," ",(0,s.jsx)(n.em,{children:"where"})," ",(0,s.jsx)(n.code,{children:"0 <= i < j < n"}),", ",(0,s.jsx)(n.em,{children:"such that"})," ",(0,s.jsx)(n.code,{children:"nums[i] == nums[j]"})," ",(0,s.jsx)(n.em,{children:"and"})," ",(0,s.jsx)(n.code,{children:"(i * j)"})," ",(0,s.jsx)(n.em,{children:"is divisible by"})," ",(0,s.jsx)(n.code,{children:"k"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: nums = [3,1,2,2,2,1,3], k = 2\nOutput: 4\nExplanation:\nThere are 4 pairs that meet all the requirements:\n- nums[0] == nums[6], and 0 * 6 == 0, which is divisible by 2.\n- nums[2] == nums[3], and 2 * 3 == 6, which is divisible by 2.\n- nums[2] == nums[4], and 2 * 4 == 8, which is divisible by 2.\n- nums[3] == nums[4], and 3 * 4 == 12, which is divisible by 2.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: nums = [1,2,3,4], k = 1\nOutput: 0\nExplanation: Since no value in nums is repeated, there are no pairs (i,j) that meet all the requirements.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= nums.length <= 100"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= nums[i], k <= 100"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"approach-1-brute-force",children:"Approach 1: Brute Force"}),"\n",(0,s.jsx)(n.p,{children:"Just do what it says."}),"\n",(0,s.jsx)(i,{name:"@wkw"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int countPairs(vector<int>& nums, int k) {\n        int n = nums.size(), ans = 0;\n        for (int i = 0; i < n; i++) {\n            for (int j = i + 1; j < n; j++) {\n                ans += nums[i] == nums[j] && (i * j) % k == 0;\n            }\n        }\n        return ans;\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},32790:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var r=i(30758);const s={},t=r.createContext(s);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);