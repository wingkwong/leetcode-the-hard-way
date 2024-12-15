"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[7504],{73183:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>t,contentTitle:()=>m,default:()=>d,frontMatter:()=>l,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"1000-1099/partition-array-for-maximum-sum-medium","title":"1043 - Partition Array for Maximum Sum (Medium)","description":"Author: @Dhanu084 | https://leetcode.com/problems/partition-array-for-maximum-sum/description/","source":"@site/solutions/1000-1099/1043-partition-array-for-maximum-sum-medium.md","sourceDirName":"1000-1099","slug":"/1000-1099/partition-array-for-maximum-sum-medium","permalink":"/solutions/1000-1099/partition-array-for-maximum-sum-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1000-1099/1043-partition-array-for-maximum-sum-medium.md","tags":[{"inline":true,"label":"Recursion","permalink":"/solutions/tags/recursion"},{"inline":true,"label":"Dynamic Programming","permalink":"/solutions/tags/dynamic-programming"}],"version":"current","sidebarPosition":1043,"frontMatter":{"description":"Author: @Dhanu084 | https://leetcode.com/problems/partition-array-for-maximum-sum/description/","tags":["Recursion","Dynamic Programming"]},"sidebar":"tutorialSidebar","previous":{"title":"1029 - Two City Scheduling (Medium)","permalink":"/solutions/1000-1099/two-city-scheduling-medium"},"next":{"title":"1046 - Last Stone Weight (Easy)","permalink":"/solutions/1000-1099/last-stone-weight-easy"}}');var r=a(74848),i=a(28453);const l={description:"Author: @Dhanu084 | https://leetcode.com/problems/partition-array-for-maximum-sum/description/",tags:["Recursion","Dynamic Programming"]},m="1043 - Partition Array for Maximum Sum (Medium)",t={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Recursion",id:"approach-1-recursion",level:2},{value:"Approach 2: Memoization",id:"approach-2-memoization",level:2},{value:"Approach 3: Iterative DP",id:"approach-3-iterative-dp",level:2},{value:"References",id:"references",level:2}];function h(s){const e={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.R)(),...s.components},{SolutionAuthor:a,TabItem:n,Tabs:l}=e;return a||o("SolutionAuthor",!0),n||o("TabItem",!0),l||o("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"1043---partition-array-for-maximum-sum-medium",children:"1043 - Partition Array for Maximum Sum (Medium)"})}),"\n",(0,r.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://leetcode.com/problems/partition-array-for-maximum-sum/",children:"https://leetcode.com/problems/partition-array-for-maximum-sum/"})}),"\n",(0,r.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsx)(e.p,{children:"Given an integer array arr, partition the array into (contiguous) subarrays of length at most k. After partitioning, each subarray has their values changed to become the maximum value of that subarray."}),"\n",(0,r.jsx)(e.p,{children:"Return the largest sum of the given array after partitioning. Test cases are generated so that the answer fits in a 32-bit integer."}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Input: arr = [1,15,7,9,2,5,10], k = 3\nOutput: 84\nExplanation: arr becomes [15,15,15,9,10,10,10]\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Input: arr = [1,4,1,5,7,3,6,1,9,9,3], k = 4\nOutput: 83\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Example 3:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Input: arr = [1], k = 1\nOutput: 1\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsxs)(e.span,{className:"katex",children:[(0,r.jsx)(e.span,{className:"katex-mathml",children:(0,r.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(e.semantics,{children:[(0,r.jsxs)(e.mrow,{children:[(0,r.jsx)(e.mn,{children:"1"}),(0,r.jsx)(e.mo,{children:"<"}),(0,r.jsx)(e.mo,{children:"="}),(0,r.jsx)(e.mi,{children:"a"}),(0,r.jsx)(e.mi,{children:"r"}),(0,r.jsx)(e.mi,{children:"r"}),(0,r.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,r.jsx)(e.mi,{children:"l"}),(0,r.jsx)(e.mi,{children:"e"}),(0,r.jsx)(e.mi,{children:"n"}),(0,r.jsx)(e.mi,{children:"g"}),(0,r.jsx)(e.mi,{children:"t"}),(0,r.jsx)(e.mi,{children:"h"}),(0,r.jsx)(e.mo,{children:"<"}),(0,r.jsx)(e.mo,{children:"="}),(0,r.jsx)(e.mn,{children:"500"})]}),(0,r.jsx)(e.annotation,{encoding:"application/x-tex",children:"1 <= arr.length <= 500"})]})})}),(0,r.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"0.6835em",verticalAlign:"-0.0391em"}}),(0,r.jsx)(e.span,{className:"mord",children:"1"}),(0,r.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.jsx)(e.span,{className:"mrel",children:"<="}),(0,r.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,r.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"rr"}),(0,r.jsx)(e.span,{className:"mord",children:"."}),(0,r.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,r.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,r.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.jsx)(e.span,{className:"mrel",children:"<="}),(0,r.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,r.jsx)(e.span,{className:"mord",children:"500"})]})]})]})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsxs)(e.span,{className:"katex",children:[(0,r.jsx)(e.span,{className:"katex-mathml",children:(0,r.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(e.semantics,{children:[(0,r.jsxs)(e.mrow,{children:[(0,r.jsx)(e.mn,{children:"0"}),(0,r.jsx)(e.mo,{children:"<"}),(0,r.jsx)(e.mo,{children:"="}),(0,r.jsx)(e.mi,{children:"a"}),(0,r.jsx)(e.mi,{children:"r"}),(0,r.jsx)(e.mi,{children:"r"}),(0,r.jsx)(e.mo,{stretchy:"false",children:"["}),(0,r.jsx)(e.mi,{children:"i"}),(0,r.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,r.jsx)(e.mo,{children:"<"}),(0,r.jsx)(e.mo,{children:"="}),(0,r.jsx)(e.mn,{children:"1"}),(0,r.jsxs)(e.msup,{children:[(0,r.jsx)(e.mn,{children:"0"}),(0,r.jsx)(e.mn,{children:"9"})]})]}),(0,r.jsx)(e.annotation,{encoding:"application/x-tex",children:"0 <= arr[i] <= 10^9"})]})})}),(0,r.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"0.6835em",verticalAlign:"-0.0391em"}}),(0,r.jsx)(e.span,{className:"mord",children:"0"}),(0,r.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.jsx)(e.span,{className:"mrel",children:"<="}),(0,r.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,r.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"rr"}),(0,r.jsx)(e.span,{className:"mopen",children:"["}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,r.jsx)(e.span,{className:"mclose",children:"]"}),(0,r.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.jsx)(e.span,{className:"mrel",children:"<="}),(0,r.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,r.jsx)(e.span,{className:"mord",children:"1"}),(0,r.jsxs)(e.span,{className:"mord",children:[(0,r.jsx)(e.span,{className:"mord",children:"0"}),(0,r.jsx)(e.span,{className:"msupsub",children:(0,r.jsx)(e.span,{className:"vlist-t",children:(0,r.jsx)(e.span,{className:"vlist-r",children:(0,r.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,r.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,r.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,r.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,r.jsx)(e.span,{className:"mord mtight",children:"9"})})]})})})})})]})]})]})]})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsxs)(e.span,{className:"katex",children:[(0,r.jsx)(e.span,{className:"katex-mathml",children:(0,r.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(e.semantics,{children:[(0,r.jsxs)(e.mrow,{children:[(0,r.jsx)(e.mn,{children:"1"}),(0,r.jsx)(e.mo,{children:"<"}),(0,r.jsx)(e.mo,{children:"="}),(0,r.jsx)(e.mi,{children:"k"}),(0,r.jsx)(e.mo,{children:"<"}),(0,r.jsx)(e.mo,{children:"="}),(0,r.jsx)(e.mi,{children:"a"}),(0,r.jsx)(e.mi,{children:"r"}),(0,r.jsx)(e.mi,{children:"r"}),(0,r.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,r.jsx)(e.mi,{children:"l"}),(0,r.jsx)(e.mi,{children:"e"}),(0,r.jsx)(e.mi,{children:"n"}),(0,r.jsx)(e.mi,{children:"g"}),(0,r.jsx)(e.mi,{children:"t"}),(0,r.jsx)(e.mi,{children:"h"})]}),(0,r.jsx)(e.annotation,{encoding:"application/x-tex",children:"1 <= k <= arr.length"})]})})}),(0,r.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"0.6835em",verticalAlign:"-0.0391em"}}),(0,r.jsx)(e.span,{className:"mord",children:"1"}),(0,r.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.jsx)(e.span,{className:"mrel",children:"<="}),(0,r.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"0.7335em",verticalAlign:"-0.0391em"}}),(0,r.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,r.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.jsx)(e.span,{className:"mrel",children:"<="}),(0,r.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,r.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"rr"}),(0,r.jsx)(e.span,{className:"mord",children:"."}),(0,r.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,r.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"h"})]})]})]})}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"approach-1-recursion",children:"Approach 1: Recursion"}),"\n",(0,r.jsxs)(e.p,{children:["Time complexity: ",(0,r.jsxs)(e.span,{className:"katex",children:[(0,r.jsx)(e.span,{className:"katex-mathml",children:(0,r.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(e.semantics,{children:[(0,r.jsxs)(e.mrow,{children:[(0,r.jsx)(e.mi,{children:"O"}),(0,r.jsx)(e.mo,{stretchy:"false",children:"("}),(0,r.jsx)(e.mi,{children:"n"}),(0,r.jsx)(e.mo,{children:"\u2217"}),(0,r.jsxs)(e.msup,{children:[(0,r.jsx)(e.mi,{children:"k"}),(0,r.jsx)(e.mi,{children:"n"})]}),(0,r.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,r.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n * k ^ n)"})]})})}),(0,r.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,r.jsx)(e.span,{className:"mopen",children:"("}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,r.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,r.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsxs)(e.span,{className:"mord",children:[(0,r.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,r.jsx)(e.span,{className:"msupsub",children:(0,r.jsx)(e.span,{className:"vlist-t",children:(0,r.jsx)(e.span,{className:"vlist-r",children:(0,r.jsx)(e.span,{className:"vlist",style:{height:"0.6644em"},children:(0,r.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,r.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,r.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,r.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})]})})})})})]}),(0,r.jsx)(e.span,{className:"mclose",children:")"})]})]})]})]}),"\n",(0,r.jsxs)(e.p,{children:["Space complexity: ",(0,r.jsxs)(e.span,{className:"katex",children:[(0,r.jsx)(e.span,{className:"katex-mathml",children:(0,r.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(e.semantics,{children:[(0,r.jsxs)(e.mrow,{children:[(0,r.jsx)(e.mi,{children:"O"}),(0,r.jsx)(e.mo,{stretchy:"false",children:"("}),(0,r.jsx)(e.mi,{children:"n"}),(0,r.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,r.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,r.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,r.jsx)(e.span,{className:"mopen",children:"("}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,r.jsx)(e.span,{className:"mclose",children:")"})]})})]})," + auxilary recursive stack space"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Note:"}),"\nThis soution will give Time Limit Exceeded at leetcode as it is exponential in nature"]}),"\n",(0,r.jsx)(l,{children:(0,r.jsxs)(n,{value:"py",label:"Python",children:[(0,r.jsx)(a,{name:"@dhanu084"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-py",children:"class Solution:\n    def maxSumAfterPartitioning(self, arr: List[int], k: int) -> int:\n        def dfs(ind, k):\n            if ind == len(arr):\n                return 0\n\n            maxi = max_sum = length = 0\n\n            '''\n                for eg Input : [1,15,7,9,2,5,10]\n                From every index loop till index + k\n                Find the maximum in the subarray [index : index+k]\n                multiply it with the current subarray length to get the current sum\n                If current sum is greater than maximum sum , update it\n\n                there are lot of decisions in recursion, below is the working of the optimal one:\n                for subarray [1,15,7] of size k , the maximum in the subarray is 15 and length is 3\n                so the sum will be 15 * 3 = 45\n                for the next Partition keep just [9] as a subarray with sum 9 * 1 = 9\n                for the next partition keep subarray [2,5,10], the maximum is 10 and length is 3\n                so the sum is 10 * 3 = 30\n\n                So the total sum is 45 + 9 + 30 = 84\n\n                Please try out other partitions like\n                [1] [15] [7,9,2,5,10] = (1 * 1) + (15 * 1) + (10 * 5) = 67\n                [1,15] [7] [9,2,5,10] = (15 * 1) + (7 * 1) + (10 * 4) = 62\n                [1,15,7] [9,2,5] [10] = (15 * 1) + (9 * 3) + (10 * 1) = 52\n                [1,15,7] [9,2] [5,10] = (15 * 3) + (9 * 2) + (10 * 2) = 73\n                etc for better understanding\n            '''\n\n            for i in range(ind, min(ind + k, len(arr))):\n                length += 1\n                maxi = max(maxi, arr[i])\n                curr_sum = length * maxi + dfs(i + 1, k)\n                max_sum = max(curr_sum, max_sum)\n            return max_sum\n        return dfs(0, k)\n"})})]})}),"\n",(0,r.jsx)(e.h2,{id:"approach-2-memoization",children:"Approach 2: Memoization"}),"\n",(0,r.jsxs)(e.p,{children:["Time complexity: ",(0,r.jsxs)(e.span,{className:"katex",children:[(0,r.jsx)(e.span,{className:"katex-mathml",children:(0,r.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(e.semantics,{children:[(0,r.jsxs)(e.mrow,{children:[(0,r.jsx)(e.mi,{children:"O"}),(0,r.jsx)(e.mo,{stretchy:"false",children:"("}),(0,r.jsx)(e.mi,{children:"n"}),(0,r.jsx)(e.mo,{children:"\u2217"}),(0,r.jsx)(e.mi,{children:"k"}),(0,r.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,r.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n * k)"})]})})}),(0,r.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,r.jsx)(e.span,{className:"mopen",children:"("}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,r.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,r.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,r.jsx)(e.span,{className:"mclose",children:")"})]})]})]})]}),"\n",(0,r.jsxs)(e.p,{children:["Space complexity: ",(0,r.jsxs)(e.span,{className:"katex",children:[(0,r.jsx)(e.span,{className:"katex-mathml",children:(0,r.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(e.semantics,{children:[(0,r.jsxs)(e.mrow,{children:[(0,r.jsx)(e.mi,{children:"O"}),(0,r.jsx)(e.mo,{stretchy:"false",children:"("}),(0,r.jsx)(e.mi,{children:"n"}),(0,r.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,r.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,r.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,r.jsx)(e.span,{className:"mopen",children:"("}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,r.jsx)(e.span,{className:"mclose",children:")"})]})})]})," + auxilary recursive stack space"]}),"\n",(0,r.jsx)(l,{children:(0,r.jsxs)(n,{value:"py",label:"Python",children:[(0,r.jsx)(a,{name:"@dhanu084"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-py",children:"class Solution:\n    def maxSumAfterPartitioning(self, arr: List[int], k: int) -> int:\n        n = len(arr)\n        dp = [-1] * n\n\n        def dfs(ind, k):\n            if ind == len(arr):\n                return 0\n\n            '''\n                 if decision tree is drawn for the above recursive solution,\n                 a lot of overlapping subproblems can be found\n                 To avoid subsequent recursive calls to find the result\n                 which is already calculated cache the results once calculated and return it later\n                 when the same result is required.\n\n                 For caching consider the changing parameters in the function,\n                 for this problem only index changes during recursion so\n                 create an array of size n and cache the results one found\n\n                 if k also changes then create 2D array for caching both index and k\n            '''\n            if dp[ind] != -1:\n                return dp[ind]\n\n            maxi = max_sum = length = 0\n\n            for i in range(ind, min(ind + k, len(arr))):\n                length += 1\n                maxi = max(maxi, arr[i])\n                curr_sum = length * maxi + dfs(i + 1, k)\n                max_sum = max(curr_sum, max_sum)\n            dp[ind] = max_sum\n            # cache the results\n            return dp[ind]\n\n        return dfs(0, k)\n"})})]})}),"\n",(0,r.jsx)(e.h2,{id:"approach-3-iterative-dp",children:"Approach 3: Iterative DP"}),"\n",(0,r.jsxs)(e.p,{children:["Time complexity: ",(0,r.jsxs)(e.span,{className:"katex",children:[(0,r.jsx)(e.span,{className:"katex-mathml",children:(0,r.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(e.semantics,{children:[(0,r.jsxs)(e.mrow,{children:[(0,r.jsx)(e.mi,{children:"O"}),(0,r.jsx)(e.mo,{stretchy:"false",children:"("}),(0,r.jsx)(e.mi,{children:"n"}),(0,r.jsx)(e.mo,{children:"\u2217"}),(0,r.jsx)(e.mi,{children:"k"}),(0,r.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,r.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n * k)"})]})})}),(0,r.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,r.jsx)(e.span,{className:"mopen",children:"("}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,r.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,r.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,r.jsx)(e.span,{className:"mclose",children:")"})]})]})]})]}),"\n",(0,r.jsxs)(e.p,{children:["Space complexity: ",(0,r.jsxs)(e.span,{className:"katex",children:[(0,r.jsx)(e.span,{className:"katex-mathml",children:(0,r.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(e.semantics,{children:[(0,r.jsxs)(e.mrow,{children:[(0,r.jsx)(e.mi,{children:"O"}),(0,r.jsx)(e.mo,{stretchy:"false",children:"("}),(0,r.jsx)(e.mi,{children:"n"}),(0,r.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,r.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,r.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,r.jsx)(e.span,{className:"mopen",children:"("}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,r.jsx)(e.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,r.jsx)(l,{children:(0,r.jsxs)(n,{value:"py",label:"Python",children:[(0,r.jsx)(a,{name:"@dhanu084"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-py",children:"class Solution:\n    def maxSumAfterPartitioning(self, arr: List[int], k: int) -> int:\n        n = len(arr)\n        dp = [0] * (n + 1)\n        ans = 0\n\n        for i in range(n-1, -1, -1):\n            maxi = max_sum = length = 0\n            for j in range(i, min(i + k, n)):\n                length += 1\n                maxi = max(maxi, arr[j])\n                curr_sum = length * maxi + dp[j+1]\n                max_sum = max(max_sum, curr_sum)\n            dp[i] = max_sum\n\n        return dp[0]\n"})})]})}),"\n",(0,r.jsx)(e.h2,{id:"references",children:"References"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://www.youtube.com/watch?v=PhWWJmaKfMc",children:"Striver DP playlist - takeyouforward youtube channel"})})]})}function d(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,r.jsx)(e,{...s,children:(0,r.jsx)(h,{...s})}):h(s)}function o(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(s,e,a)=>{a.d(e,{R:()=>l,x:()=>m});var n=a(96540);const r={},i=n.createContext(r);function l(s){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function m(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(r):s.components||r:l(s.components),n.createElement(i.Provider,{value:e},s.children)}}}]);