"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[50969],{58084:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>u,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"1400-1499/running-sum-of-1d-array-easy","title":"1480 - Running Sum of 1d Array (Easy)","description":"Author: @heiheihang, @wkw, @radojicic23 | https://leetcode.com/problems/running-sum-of-1d-array/","source":"@site/solutions/1400-1499/1480-running-sum-of-1d-array-easy.md","sourceDirName":"1400-1499","slug":"/1400-1499/running-sum-of-1d-array-easy","permalink":"/solutions/1400-1499/running-sum-of-1d-array-easy","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1400-1499/1480-running-sum-of-1d-array-easy.md","tags":[],"version":"current","sidebarPosition":1480,"frontMatter":{"description":"Author: @heiheihang, @wkw, @radojicic23 | https://leetcode.com/problems/running-sum-of-1d-array/"},"sidebar":"tutorialSidebar","previous":{"title":"1475 - Final Prices With a Special Discount in a Shop (Easy)","permalink":"/solutions/1400-1499/final-prices-with-a-special-discount-in-a-shop-easy"},"next":{"title":"1482 - Minimum Number of Days to Make m Bouquets (Medium)","permalink":"/solutions/1400-1499/minimum-number-of-days-to-make-m-bouquets-medium"}}');var t=r(86070),s=r(32790);const a={description:"Author: @heiheihang, @wkw, @radojicic23 | https://leetcode.com/problems/running-sum-of-1d-array/"},u="1480 - Running Sum of 1d Array (Easy)",o={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Prefix Sum",id:"approach-1-prefix-sum",level:2},{value:"Approach 2: Partial Sum",id:"approach-2-partial-sum",level:2},{value:"Approach 3: Iteration",id:"approach-3-iteration",level:2}];function c(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components},{SolutionAuthor:r,TabItem:i,Tabs:a}=e;return r||m("SolutionAuthor",!0),i||m("TabItem",!0),a||m("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"1480---running-sum-of-1d-array-easy",children:"1480 - Running Sum of 1d Array (Easy)"})}),"\n",(0,t.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://leetcode.com/problems/running-sum-of-1d-array/",children:"https://leetcode.com/problems/running-sum-of-1d-array/"})}),"\n",(0,t.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(e.p,{children:["Given an array ",(0,t.jsx)(e.code,{children:"nums"}),". We define a running sum of an array as ",(0,t.jsx)(e.code,{children:"runningSum[i] = sum(nums[0]\u2026nums[i])"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["Return the running sum of ",(0,t.jsx)(e.code,{children:"nums"}),"."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"Input: nums = [1,2,3,4]\nOutput: [1,3,6,10]\nExplanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"Input: nums = [1,1,1,1,1]\nOutput: [1,2,3,4,5]\nExplanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example 3:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"Input: nums = [3,1,2,10,1]\nOutput: [3,4,6,16,17]\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"1 <= nums.length <= 1000"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"-10^6 <= nums[i] <= 10^6"})}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"approach-1-prefix-sum",children:"Approach 1: Prefix Sum"}),"\n",(0,t.jsx)(a,{children:(0,t.jsxs)(i,{value:"cpp",label:"C++",children:[(0,t.jsx)(r,{name:"@wkw"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    // for full tutorial, please go to\n    // https://wingkwong.github.io/leetcode-the-hard-way/tutorials/basic-topics/prefix-sum\n    vector<int> generatePrefixSum(vector<int>& a) {\n        int n = a.size();\n\t\t// we need a vector of size n\n        vector<int> pref(n);\n\t\t// the first element is same as that in `a`\n        pref[0] = a[0];\n\t\t// starting the second one, we add the prefix sum `pref[i - 1]` and the current value `a[i]`\n        for (int i = 1; i < n; i++) pref[i] = pref[i - 1] + a[i];\n        return pref;\n    }\n\n    vector<int> runningSum(vector<int>& nums) {\n\t    // use the pre-defined function directly\n        return generatePrefixSum(nums);\n    }\n};\n"})})]})}),"\n",(0,t.jsx)(e.h2,{id:"approach-2-partial-sum",children:"Approach 2: Partial Sum"}),"\n",(0,t.jsxs)(e.p,{children:["Using C++ STL. Bbasically it does the same thing mentioned above. See ",(0,t.jsx)(e.a,{href:"https://cplusplus.com/reference/numeric/partial_sum/",children:"here"})," for more details."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"y0 = x0\ny1 = x0 + x1\ny2 = x0 + x1 + x2\ny3 = x0 + x1 + x2 + x3\ny4 = x0 + x1 + x2 + x3 + x4\n"})}),"\n",(0,t.jsxs)(a,{children:[(0,t.jsxs)(i,{value:"cpp",label:"C++",children:[(0,t.jsx)(r,{name:"@wkw"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> runningSum(vector<int>& nums) {\n\t\t// use STL directly\n        partial_sum(nums.begin(), nums.end(), nums.begin());\n        return nums;\n    }\n};\n"})})]}),(0,t.jsxs)(i,{value:"py",label:"Python",children:[(0,t.jsx)(r,{name:"@radojicic23"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-py",children:"class Solution:\n    def runningSum(self, nums: List[int]) -> List[int]:\n        return accumulate(nums)\n\n"})})]})]}),"\n",(0,t.jsx)(e.h2,{id:"approach-3-iteration",children:"Approach 3: Iteration"}),"\n",(0,t.jsxs)(e.p,{children:["We need to define an accumulator (",(0,t.jsx)(e.code,{children:"running_sum"})," in this problem) to save the sum of all numbers in ",(0,t.jsx)(e.code,{children:"nums"}),". After calculating the latest ",(0,t.jsx)(e.code,{children:"running_sum"}),", we put that number to our result list."]}),"\n",(0,t.jsxs)(e.p,{children:["The trick here is that we need to add the number from ",(0,t.jsx)(e.code,{children:"nums"})," to ",(0,t.jsx)(e.code,{children:"running_sum"})," first before adding ",(0,t.jsx)(e.code,{children:"running_sum"})," to ",(0,t.jsx)(e.code,{children:"result"}),". This is because the ",(0,t.jsx)(e.code,{children:"ith"})," position from ",(0,t.jsx)(e.code,{children:"result"})," should include the ",(0,t.jsx)(e.code,{children:"ith"})," number in ",(0,t.jsx)(e.code,{children:"nums"})," ."]}),"\n",(0,t.jsxs)(a,{children:[(0,t.jsxs)(i,{value:"py",label:"Python",children:[(0,t.jsx)(r,{name:"@heiheihang"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"def runningSum(self, nums: List[int]) -> List[int]:\n\n        #initialize the running_sum\n        running_sum = 0\n\n        #initialize the result list\n        result = []\n\n        #we iterage each number in nums\n        for i in range(len(nums)):\n\n            #the current number is defined by nums[i]\n            current_number = nums[i]\n\n            #add the current_number to running_sum\n            running_sum += current_number\n\n            #add the running_sum to the result list\n            result.append(running_sum)\n\n        #return result\n        return result\n"})})]}),(0,t.jsxs)(i,{value:"cpp",label:"C++",children:[(0,t.jsx)(r,{name:"@wkw"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> runningSum(vector<int>& nums) {\n\t\t// we don't actually need to generate a prefix sum vector\n\t\t// instead we can modify the value in place.\n        for(int i = 1; i < nums.size(); i++) {\n            // add the previous result to the current element.\n            nums[i] += nums[i - 1];\n        }\n        return nums;\n    }\n};\n"})})]}),(0,t.jsxs)(i,{value:"js",label:"JavaScript",children:[(0,t.jsx)(r,{name:"@radojicic23"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"/**\n * @param {number[]} nums\n * @return {number[]}\n */\nvar runningSum = function (nums) {\n  let total = 0;\n  let res = [];\n  for (let i = 0; i < nums.length; i++) {\n    total += nums[i];\n    res.push(total);\n  }\n  return res;\n};\n"})})]})]})]})}function d(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}function m(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},32790:(n,e,r)=>{r.d(e,{R:()=>a,x:()=>u});var i=r(30758);const t={},s=i.createContext(t);function a(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function u(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);