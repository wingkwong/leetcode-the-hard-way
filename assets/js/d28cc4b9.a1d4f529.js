"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[31152],{19734:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"2200-2299/maximum-candies-allocated-to-k-children-medium","title":"2226 - Maximum Candies Allocated to K Children (Medium)","description":"Author: @wingkwong | https://leetcode.com/problems/maximum-candies-allocated-to-k-children/","source":"@site/solutions/2200-2299/2226-maximum-candies-allocated-to-k-children-medium.md","sourceDirName":"2200-2299","slug":"/2200-2299/maximum-candies-allocated-to-k-children-medium","permalink":"/solutions/2200-2299/maximum-candies-allocated-to-k-children-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2226-maximum-candies-allocated-to-k-children-medium.md","tags":[],"version":"current","sidebarPosition":2226,"frontMatter":{"description":"Author: @wingkwong | https://leetcode.com/problems/maximum-candies-allocated-to-k-children/"},"sidebar":"tutorialSidebar","previous":{"title":"2225 - Find Players With Zero or One Losses (Medium)","permalink":"/solutions/2200-2299/find-players-with-zero-or-one-losses-medium"},"next":{"title":"2227 - Encrypt and Decrypt Strings (Hard)","permalink":"/solutions/2200-2299/encrypt-and-decrypt-strings-hard"}}');var o=i(74848),s=i(28453);const a={description:"Author: @wingkwong | https://leetcode.com/problems/maximum-candies-allocated-to-k-children/"},l="2226 - Maximum Candies Allocated to K Children (Medium)",r={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Binary Search",id:"approach-1-binary-search",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{SolutionAuthor:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"2226---maximum-candies-allocated-to-k-children-medium",children:"2226 - Maximum Candies Allocated to K Children (Medium)"})}),"\n",(0,o.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://leetcode.com/problems/maximum-candies-allocated-to-k-children/",children:"https://leetcode.com/problems/maximum-candies-allocated-to-k-children/"})}),"\n",(0,o.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,o.jsxs)(n.p,{children:["You are given a ",(0,o.jsx)(n.strong,{children:"0-indexed"})," integer array ",(0,o.jsx)(n.code,{children:"candies"}),". Each element in the array denotes a pile of candies of size ",(0,o.jsx)(n.code,{children:"candies[i]"}),". You can divide each pile into any number of ",(0,o.jsx)(n.strong,{children:"sub piles"}),", but you ",(0,o.jsx)(n.strong,{children:"cannot"})," merge two piles together."]}),"\n",(0,o.jsxs)(n.p,{children:["You are also given an integer ",(0,o.jsx)(n.code,{children:"k"}),". You should allocate piles of candies to ",(0,o.jsx)(n.code,{children:"k"})," children such that each child gets the ",(0,o.jsx)(n.strong,{children:"same"})," number of candies. Each child can take ",(0,o.jsx)(n.strong,{children:"at most one"})," pile of candies and some piles of candies may go unused."]}),"\n",(0,o.jsxs)(n.p,{children:["Return ",(0,o.jsxs)(n.em,{children:["the ",(0,o.jsx)(n.strong,{children:"maximum number of candies"})," each child can get."]})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Input: candies = [5,8,6], k = 3\nOutput: 5\nExplanation: We can divide candies[1] into 2 piles of size 5 and 3, and candies[2] into 2 piles of size 5 and 1. We now have five piles of candies of sizes 5, 5, 3, 5, and 1. We can allocate the 3 piles of size 5 to 3 children. It can be proven that each child cannot receive more than 5 candies.\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Input: candies = [2,5], k = 11\nOutput: 0\nExplanation: There are 11 children but only 7 candies in total, so it is impossible to ensure each child receives at least one candy. Thus, each child gets no candy and the answer is 0.\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"1 <= candies.length <= 10^5"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"1 <= candies[i] <= 10^7"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"1 <= k <= 10^12"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"approach-1-binary-search",children:"Approach 1: Binary Search"}),"\n",(0,o.jsx)(n.p,{children:"We can use binary search to find out the maximum number of candies in a single pile."}),"\n",(0,o.jsx)(i,{name:"@wingkwong"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int maximumCandies(vector<int>& candies, long long k) {\n        long long l = 0, r = 1e12;\n        while (l < r) {\n            // tips: + 1 here is required to find the max valid element\n            long long m = l + (r - l + 1) / 2, cnt = 0;\n            // if each child get m candies, \n            // is it possible to allocate to k children?\n            for (auto x : candies) cnt += x / m;\n            // m is too large\n            if (cnt < k) r = m - 1;\n            // m is too small\n            else l = m;\n        }\n        return l;\n    }\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var t=i(96540);const o={},s=t.createContext(o);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);