"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[95468],{1739:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"2100-2199/sort-even-and-odd-indices-independently-easy","title":"2164 - Sort Even and Odd Indices Independently (Easy)","description":"Author: @heiheihang | https://leetcode.com/problems/sort-even-and-odd-indices-independently/","source":"@site/solutions/2100-2199/2164-sort-even-and-odd-indices-independently-easy.md","sourceDirName":"2100-2199","slug":"/2100-2199/sort-even-and-odd-indices-independently-easy","permalink":"/solutions/2100-2199/sort-even-and-odd-indices-independently-easy","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2164-sort-even-and-odd-indices-independently-easy.md","tags":[],"version":"current","sidebarPosition":2164,"frontMatter":{"description":"Author: @heiheihang | https://leetcode.com/problems/sort-even-and-odd-indices-independently/"},"sidebar":"tutorialSidebar","previous":{"title":"2163 - Minimum Difference in Sums After Removal of Elements (Hard)","permalink":"/solutions/2100-2199/minimum-difference-in-sums-after-removal-of-elements-hard"},"next":{"title":"2165 - Smallest Value of the Rearranged Number (Medium)","permalink":"/solutions/2100-2199/smallest-value-of-the-rearranged-number-medium"}}');var d=s(74848),t=s(28453);const i={description:"Author: @heiheihang | https://leetcode.com/problems/sort-even-and-odd-indices-independently/"},o="2164 - Sort Even and Odd Indices Independently (Easy)",l={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Iteration",id:"approach-1-iteration",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{SolutionAuthor:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"2164---sort-even-and-odd-indices-independently-easy",children:"2164 - Sort Even and Odd Indices Independently (Easy)"})}),"\n",(0,d.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://leetcode.com/problems/sort-even-and-odd-indices-independently/",children:"https://leetcode.com/problems/sort-even-and-odd-indices-independently/"})}),"\n",(0,d.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,d.jsxs)(n.p,{children:["You are given a ",(0,d.jsx)(n.strong,{children:"0-indexed"})," integer array ",(0,d.jsx)(n.code,{children:"nums"}),". Rearrange the values of ",(0,d.jsx)(n.code,{children:"nums"})," according to the following rules:"]}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["Sort the values at ",(0,d.jsx)(n.strong,{children:"odd indices"})," of ",(0,d.jsx)(n.code,{children:"nums"})," in ",(0,d.jsx)(n.strong,{children:"non-increasing"})," order.","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["For example, if ",(0,d.jsx)(n.code,{children:"nums = [4,"}),(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"1"})}),(0,d.jsx)(n.code,{children:",2,"}),(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"3"})}),(0,d.jsx)(n.code,{children:"]"})," before this step, it becomes ",(0,d.jsx)(n.code,{children:"[4,"}),(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"3"})}),(0,d.jsx)(n.code,{children:",2,"}),(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"1"})}),(0,d.jsx)(n.code,{children:"]"})," after. The values at odd indices ",(0,d.jsx)(n.code,{children:"1"})," and ",(0,d.jsx)(n.code,{children:"3"})," are sorted in non-increasing order."]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["Sort the values at ",(0,d.jsx)(n.strong,{children:"even indices"})," of ",(0,d.jsx)(n.code,{children:"nums"})," in ",(0,d.jsx)(n.strong,{children:"non-decreasing"})," order.","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["For example, if ",(0,d.jsx)(n.code,{children:"nums = ["}),(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"4"})}),(0,d.jsx)(n.code,{children:",1,"}),(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"2"})}),(0,d.jsx)(n.code,{children:",3]"})," before this step, it becomes ",(0,d.jsx)(n.code,{children:"["}),(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"2"})}),(0,d.jsx)(n.code,{children:",1,"}),(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"4"})}),(0,d.jsx)(n.code,{children:",3]"})," after. The values at even indices ",(0,d.jsx)(n.code,{children:"0"})," and ",(0,d.jsx)(n.code,{children:"2"})," are sorted in non-decreasing order."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Return ",(0,d.jsx)(n.em,{children:"the array formed after rearranging the values of"})," ",(0,d.jsx)(n.code,{children:"nums"}),"."]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"Input: nums = [4,1,2,3]\nOutput: [2,3,4,1]\nExplanation: \nFirst, we sort the values present at odd indices (1 and 3) in non-increasing order.\nSo, nums changes from [4,1,2,3] to [4,3,2,1].\nNext, we sort the values present at even indices (0 and 2) in non-decreasing order.\nSo, nums changes from [4,1,2,3] to [2,3,4,1].\nThus, the array formed after rearranging the values is [2,3,4,1].\n"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"Input: nums = [2,1]\nOutput: [2,1]\nExplanation: \nSince there is exactly one odd index and one even index, no rearrangement of values takes place.\nThe resultant array formed is [2,1], which is the same as the initial array.  \n"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"1 <= nums.length <= 100"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"1 <= nums[i] <= 100"})}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"approach-1-iteration",children:"Approach 1: Iteration"}),"\n",(0,d.jsxs)(n.p,{children:["The simplest approach is to store odd-indexed numbers and even-indexed numbers separately, then sort them and merge them. One approach to store them separately is to check the parity (odd or even) of the iterating variable ( ",(0,d.jsx)(n.code,{children:"i"})," in this example solution), and store them to their corresponding lists."]}),"\n",(0,d.jsxs)(n.p,{children:["We then sort the two lists. We note that odd-indexed numbers need to be ",(0,d.jsx)(n.strong,{children:"non-increasing"}),", so we need to call ",(0,d.jsx)(n.code,{children:"reverse"}),". Another approach to sort in reverse order is ",(0,d.jsx)(n.code,{children:"odds.sort(reverse = True)"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["We then put the numbers back to ",(0,d.jsx)(n.code,{children:"nums"})," using a similar method of retrieving the parity of the iterating variable."]}),"\n",(0,d.jsx)(s,{name:"@heiheihang"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"def sortEvenOdd(self, nums: List[int]) -> List[int]:\n        \n        #initialize the two lists for odd-indexed numbers and even-indexed numbers\n        odds = []\n        evens = []\n        \n        #place the numbers into the two lists accordingly\n        for i in range(len(nums)):\n            if(i % 2 == 1):\n                odds.append(nums[i])\n            else:\n                evens.append(nums[i])\n                \n        #sort the two lists        \n        odds.sort()\n        evens.sort()\n        \n        #as we want odd-indexed numbers to be non-increasing, we need to reverse it\n        odds.reverse()\n        \n        #initialize result\n        result = []\n        \n        #iterate all numbers\n        for i in range(len(nums)):\n            \n            #put the numbers back \n            #we have i//2 because we take turns visiting odds and evens\n            if(i % 2 == 1):\n                result.append(odds[i//2])\n            else:\n                result.append(evens[i//2])\n        \n        #return result\n        return result\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var r=s(96540);const d={},t=r.createContext(d);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);