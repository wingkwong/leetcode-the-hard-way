"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[41972],{62243:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"2000-2099/minimum-number-of-operations-to-make-array-continuous-hard","title":"2009 - Minimum Number of Operations to Make Array Continuous (Hard)","description":"Author: @wingkwong | https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/","source":"@site/solutions/2000-2099/2009-minimum-number-of-operations-to-make-array-continuous-hard.md","sourceDirName":"2000-2099","slug":"/2000-2099/minimum-number-of-operations-to-make-array-continuous-hard","permalink":"/solutions/2000-2099/minimum-number-of-operations-to-make-array-continuous-hard","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2000-2099/2009-minimum-number-of-operations-to-make-array-continuous-hard.md","tags":[{"inline":true,"label":"Array","permalink":"/solutions/tags/array"},{"inline":true,"label":"Binary Search","permalink":"/solutions/tags/binary-search"}],"version":"current","sidebarPosition":2009,"frontMatter":{"description":"Author: @wingkwong | https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/","tags":["Array","Binary Search"]},"sidebar":"tutorialSidebar","previous":{"title":"2007 - Find Original Array From Doubled Array (Medium)","permalink":"/solutions/2000-2099/find-original-array-from-doubled-array-medium"},"next":{"title":"2013 - Detect Squares (Medium)","permalink":"/solutions/2000-2099/detect-squares-medium"}}');var i=r(74848),t=r(28453);const s={description:"Author: @wingkwong | https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/",tags:["Array","Binary Search"]},a="2009 - Minimum Number of Operations to Make Array Continuous (Hard)",l={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sliding Window",id:"approach-1-sliding-window",level:2}];function m(n){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components},{SolutionAuthor:r,TabItem:o,Tabs:s}=e;return r||d("SolutionAuthor",!0),o||d("TabItem",!0),s||d("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"2009---minimum-number-of-operations-to-make-array-continuous-hard",children:"2009 - Minimum Number of Operations to Make Array Continuous (Hard)"})}),"\n",(0,i.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/",children:"https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/"})}),"\n",(0,i.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(e.p,{children:["You are given an integer array ",(0,i.jsx)(e.code,{children:"nums"}),". In one operation, you can replace ",(0,i.jsx)(e.strong,{children:"any"})," element in ",(0,i.jsx)(e.code,{children:"nums"})," with ",(0,i.jsx)(e.strong,{children:"any"})," integer."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"nums"})," is considered ",(0,i.jsx)(e.strong,{children:"continuous"})," if both of the following conditions are fulfilled:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["All elements in ",(0,i.jsx)(e.code,{children:"nums"})," are ",(0,i.jsx)(e.strong,{children:"unique"}),"."]}),"\n",(0,i.jsxs)(e.li,{children:["The difference between the ",(0,i.jsx)(e.strong,{children:"maximum"})," element and the ",(0,i.jsx)(e.strong,{children:"minimum"})," element in ",(0,i.jsx)(e.code,{children:"nums"})," equals ",(0,i.jsx)(e.code,{children:"nums.length - 1"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["For example, ",(0,i.jsx)(e.code,{children:"nums = [4, 2, 5, 3]"})," is ",(0,i.jsx)(e.strong,{children:"continuous"}),", but ",(0,i.jsx)(e.code,{children:"nums = [1, 2, 3, 5, 6]"})," is ",(0,i.jsx)(e.strong,{children:"not continuous"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["Return ",(0,i.jsxs)(e.em,{children:["the ",(0,i.jsx)(e.strong,{children:"minimum"})," number of operations to make"]}),(0,i.jsx)(e.code,{children:"nums"}),(0,i.jsx)(e.strong,{children:"continuous"}),"."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Input: nums = [4,2,5,3]\nOutput: 0\nExplanation:\xa0nums is already continuous.\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Input: nums = [1,2,3,5,6]\nOutput: 1\nExplanation:\xa0One possible solution is to change the last element to 4.\nThe resulting array is [1,2,3,5,4], which is continuous.\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 3:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Input: nums = [1,10,100,1000]\nOutput: 3\nExplanation:\xa0One possible solution is to:\n- Change the second element to 2.\n- Change the third element to 3.\n- Change the fourth element to 4.\nThe resulting array is [1,2,3,4], which is continuous.\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"1 <= nums.length <= 1e5"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"1 <= nums[i] <= 1e9"})}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"approach-1-sliding-window",children:"Approach 1: Sliding Window"}),"\n",(0,i.jsx)(s,{children:(0,i.jsxs)(o,{value:"kotlin",label:"Kotlin",children:[(0,i.jsx)(r,{name:"@wingkwong"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-kt",children:"class Solution {\n    fun minOperations(nums: IntArray): Int {\n        val n = nums.size\n        val v = nums.toSortedSet().toIntArray()\n        val m = v.size\n        var ans = n\n        var r = 0\n        for (l in 0 until m) {\n            // assuming v[l] is the min element in the continuous array\n            // the maximum element v[r] would be v[r] - v[l] + 1 = n -> v[r] = v[l] + n - 1\n            // find the target `r` / use binary search here\n            while (r < m && v[r] <= v[l] + n - 1) r++\n            // now we got r - l elements are within the range\n            // the rest of the elements `n - (r - l)` will be replaced\n            // i.e. replace all elements to v[l] in [0 .. l) and v[r] in [r .. m)\n            ans = min(ans, n - (r - l))\n        }        \n        return ans\n    }\n}\n"})})]})})]})}function c(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(m,{...n})}):m(n)}function d(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(n,e,r)=>{r.d(e,{R:()=>s,x:()=>a});var o=r(96540);const i={},t=o.createContext(i);function s(n){const e=o.useContext(t);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),o.createElement(t.Provider,{value:e},n.children)}}}]);