"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[12167],{85425:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"0400-0499/maximum-xor-of-two-numbers-in-an-array","title":"0421 - Maximum XOR of Two Numbers in an Array","description":"Author: @wingkwong | https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/","source":"@site/solutions/0400-0499/0421-maximum-xor-of-two-numbers-in-an-array.md","sourceDirName":"0400-0499","slug":"/0400-0499/maximum-xor-of-two-numbers-in-an-array","permalink":"/solutions/0400-0499/maximum-xor-of-two-numbers-in-an-array","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0400-0499/0421-maximum-xor-of-two-numbers-in-an-array.md","tags":[],"version":"current","sidebarPosition":421,"frontMatter":{"description":"Author: @wingkwong | https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/"},"sidebar":"tutorialSidebar","previous":{"title":"0417 - Pacific Atlantic Water Flow (Medium)","permalink":"/solutions/0400-0499/pacific-atlantic-water-flow-medium"},"next":{"title":"0424 - Longest Repeating Character Replacement (Medium)","permalink":"/solutions/0400-0499/longest-repeating-character-replacement-medium"}}');var i=t(74848),s=t(28453);const o={description:"Author: @wingkwong | https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/"},a="0421 - Maximum XOR of Two Numbers in an Array",m={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Bit Masking + Set + Two Sum Idea",id:"approach-1-bit-masking--set--two-sum-idea",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"0421---maximum-xor-of-two-numbers-in-an-array",children:"0421 - Maximum XOR of Two Numbers in an Array"})}),"\n",(0,i.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/",children:"https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/"})}),"\n",(0,i.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(n.p,{children:["Given an integer array ",(0,i.jsx)(n.code,{children:"nums"}),", return ",(0,i.jsx)(n.em,{children:"the maximum result of"})," ",(0,i.jsx)(n.code,{children:"nums[i] XOR nums[j]"}),", where ",(0,i.jsx)(n.code,{children:"0 <= i <= j < n"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: nums = [3,10,5,25,2,8]\nOutput: 28\nExplanation: The maximum result is 5 XOR 25 = 28.\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: nums = [14,70,53,83,49,91,36,80,92,51,66,70]\nOutput: 127 \n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"1 <= nums.length <= 2 * 10^5"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"0 <= nums[i] <= 2^31 - 1"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"approach-1-bit-masking--set--two-sum-idea",children:"Approach 1: Bit Masking + Set + Two Sum Idea"}),"\n",(0,i.jsxs)(n.p,{children:["In order to maximise the answer, we can construct the max XOR from the leftmost bit. The best answer is always all bits set. Hence, we can check bit by bit. We need to find two numbers such that its XOR starts with ",(0,i.jsx)(n.code,{children:"1000...000"}),", then find ",(0,i.jsx)(n.code,{children:"1100..000,"})," then ",(0,i.jsx)(n.code,{children:"1110...000"}),", ",(0,i.jsx)(n.code,{children:"1111...000"})," and till ",(0,i.jsx)(n.code,{children:"1111...111"}),". We build each mask to extract the prefix of length ",(0,i.jsx)(n.code,{children:"(L - i)"})," in binary representation of each number by using ",(0,i.jsx)(n.code,{children:"num & mask"}),". Then apply Two Sum idea, if the complement exists in the set, then we can update answer."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int findMaximumXOR(vector<int>& nums) {\n        int ans = 0, mask = 0;\n        for(int i = 31; i >= 0; i--){\n           unordered_set<int> s;\n            mask |= (1 << i);\n            for (auto x : nums) s.insert(mask & x);\n            int best = ans | (1 << i);\n            for(auto pref : s){\n                if(s.find(pref ^ best) != s.end()){\n                    ans = best;\n                    break;\n                }\n            }\n        }\n        return ans;\n    }\n};\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(96540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);