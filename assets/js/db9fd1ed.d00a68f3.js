"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[3114],{15953:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"0300-0399/increasing-triplet-subsequence-medium","title":"0334 - Increasing Triplet Subsequence (Medium)","description":"Author: @wkw, @radojicic23, @vigneshshiv | https://leetcode.com/problems/increasing-triplet-subsequence/","source":"@site/solutions/0300-0399/0334-increasing-triplet-subsequence-medium.md","sourceDirName":"0300-0399","slug":"/0300-0399/increasing-triplet-subsequence-medium","permalink":"/solutions/0300-0399/increasing-triplet-subsequence-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0300-0399/0334-increasing-triplet-subsequence-medium.md","tags":[],"version":"current","sidebarPosition":334,"frontMatter":{"description":"Author: @wkw, @radojicic23, @vigneshshiv | https://leetcode.com/problems/increasing-triplet-subsequence/"},"sidebar":"tutorialSidebar","previous":{"title":"0332 - Reconstruct Itinerary (Hard)","permalink":"/solutions/0300-0399/reconstruct-itinerary-hard"},"next":{"title":"0338 - Counting Bits (Easy)","permalink":"/solutions/0300-0399/counting-bits-easy"}}');var r=s(86070),i=s(32790);const l={description:"Author: @wkw, @radojicic23, @vigneshshiv | https://leetcode.com/problems/increasing-triplet-subsequence/"},o="0334 - Increasing Triplet Subsequence (Medium)",c={},a=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Greedy",id:"approach-1-greedy",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{SolutionAuthor:s,TabItem:t,Tabs:l}=n;return s||h("SolutionAuthor",!0),t||h("TabItem",!0),l||h("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"0334---increasing-triplet-subsequence-medium",children:"0334 - Increasing Triplet Subsequence (Medium)"})}),"\n",(0,r.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/increasing-triplet-subsequence/",children:"https://leetcode.com/problems/increasing-triplet-subsequence/"})}),"\n",(0,r.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsxs)(n.p,{children:["Given an integer array ",(0,r.jsx)(n.code,{children:"nums"}),", return ",(0,r.jsx)(n.code,{children:"true"})," ",(0,r.jsx)(n.em,{children:"if there exists a triple of indices"})," ",(0,r.jsx)(n.code,{children:"(i, j, k)"})," ",(0,r.jsx)(n.em,{children:"such that"})," ",(0,r.jsx)(n.code,{children:"i < j < k"})," ",(0,r.jsx)(n.em,{children:"and"})," ",(0,r.jsx)(n.code,{children:"nums[i] < nums[j] < nums[k]"}),". If no such indices exists, return ",(0,r.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: nums = [1,2,3,4,5]\nOutput: true\nExplanation: Any triplet where i < j < k is valid.\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: nums = [5,4,3,2,1]\nOutput: false\nExplanation: No triplet exists.\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: nums = [2,1,5,0,4,6]\nOutput: true\nExplanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"1 <= nums.length <= 5 * 10^5"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"-2^31 <= nums[i] <= 2^31 - 1"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Follow up:"})," Could you implement a solution that runs in ",(0,r.jsx)(n.code,{children:"O(n)"})," time complexity and ",(0,r.jsx)(n.code,{children:"O(1)"})," space complexity?"]}),"\n",(0,r.jsx)(n.h2,{id:"approach-1-greedy",children:"Approach 1: Greedy"}),"\n",(0,r.jsx)(n.p,{children:"Find the first two smallest numbers. If there is a number greater than them, then we can return true. Otherwise, return false at the end."}),"\n",(0,r.jsxs)(l,{children:[(0,r.jsxs)(t,{value:"c++",label:"C++",children:[(0,r.jsx)(s,{name:"@wkw"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool increasingTriplet(vector<int>& nums) {\n        int first = INT_MAX, second = INT_MAX;\n        for (auto x : nums) {\n            // update the first smallest number\n            if (x <= first) first = x;\n            // update the second smallest number\n            else if (x <= second) second = x;\n            // x > first && x > second -> found the answer\n            else return true;\n        }\n        return false;\n    }\n};\n"})})]}),(0,r.jsxs)(t,{value:"python",label:"Python",children:[(0,r.jsx)(s,{name:"@radojicic23"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'class Solution:\n    def increasingTriplet(self, nums: List[int]) -> bool:\n        threshold1 = threshold2 = float("inf")\n        for num in nums:\n            # update the first smallest threshold\n            if num <= threshold1:\n                threshold1 = num\n            # update the second smallest threshold\n            elif num <= threshold2:\n                threshold2 = num\n            # if it\'s greater than both thresholds\n            else:\n                return True\n        return False\n'})})]}),(0,r.jsxs)(t,{value:"javascript",label:"JavaScript",children:[(0,r.jsx)(s,{name:"@radojicic23"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"/**\n * @param {number[]} nums\n * @return {boolean}\n */\nvar increasingTriplet = function (nums) {\n  let threshold1 = Infinity;\n  let threshold2 = Infinity;\n  for (n of nums) {\n    // update the first smallest threshold\n    if (n <= threshold1) threshold1 = n;\n    // update the second smallest threshold\n    else if (n <= threshold2) threshold2 = n;\n    // if it's greater than both tresholds\n    else return true;\n  }\n  return false;\n};\n"})})]}),(0,r.jsxs)(t,{value:"java",label:"Java",children:[(0,r.jsx)(s,{name:"@vigneshshiv"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"class Solution {\n    public boolean increasingTriplet(int[] nums) {\n        int first = Integer.MAX_VALUE, second = Integer.MAX_VALUE;\n        for (int x : nums) {\n            // update the first smallest number\n            if (x <= first) first = x;\n            // update the second smallest number\n            else if (x <= second) second = x;\n            // if x > first && x > second, then found the answer\n            else return true;\n        }\n        return false;\n    }\n}\n"})})]})]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},32790:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var t=s(30758);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);