"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[41786],{44665:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>t,default:()=>d,frontMatter:()=>m,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"3000-3099/number-of-subarrays-that-match-a-pattern-i-medium","title":"3034 - Number of Subarrays That Match a Pattern I (Medium)","description":"Author: @wingkwong | https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-i/","source":"@site/solutions/3000-3099/3034-number-of-subarrays-that-match-a-pattern-i-medium.md","sourceDirName":"3000-3099","slug":"/3000-3099/number-of-subarrays-that-match-a-pattern-i-medium","permalink":"/solutions/3000-3099/number-of-subarrays-that-match-a-pattern-i-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/3000-3099/3034-number-of-subarrays-that-match-a-pattern-i-medium.md","tags":[],"version":"current","sidebarPosition":3034,"frontMatter":{"description":"Author: @wingkwong | https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-i/"},"sidebar":"tutorialSidebar","previous":{"title":"3033 - Modify the Matrix (Easy)","permalink":"/solutions/3000-3099/modify-the-matrix-easy"},"next":{"title":"3035 - Maximum Palindromes After Operations (Medium)","permalink":"/solutions/3000-3099/maximum-palindromes-after-operations-medium"}}');var l=a(74848),r=a(28453);const m={description:"Author: @wingkwong | https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-i/"},t="3034 - Number of Subarrays That Match a Pattern I (Medium)",i={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Brute Force",id:"approach-1-brute-force",level:2}];function h(s){const e={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.R)(),...s.components},{SolutionAuthor:a,TabItem:n,Tabs:m}=e;return a||x("SolutionAuthor",!0),n||x("TabItem",!0),m||x("Tabs",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"3034---number-of-subarrays-that-match-a-pattern-i-medium",children:"3034 - Number of Subarrays That Match a Pattern I (Medium)"})}),"\n",(0,l.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.a,{href:"https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-i/",children:"https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-i/"})}),"\n",(0,l.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,l.jsxs)(e.p,{children:["You are given a ",(0,l.jsx)(e.strong,{children:"0-indexed"})," integer array ",(0,l.jsx)(e.code,{children:"nums"})," of size ",(0,l.jsx)(e.code,{children:"n"}),", and a ",(0,l.jsx)(e.strong,{children:"0-indexed"})," integer array ",(0,l.jsx)(e.code,{children:"pattern"})," of size ",(0,l.jsx)(e.code,{children:"m"})," consisting of integers ",(0,l.jsx)(e.code,{children:"-1"}),", ",(0,l.jsx)(e.code,{children:"0"}),", and ",(0,l.jsx)(e.code,{children:"1"}),"."]}),"\n",(0,l.jsxs)(e.p,{children:["A subarray ",(0,l.jsx)(e.code,{children:"nums[i..j]"})," of size ",(0,l.jsx)(e.code,{children:"m + 1"})," is said to match the ",(0,l.jsx)(e.code,{children:"pattern"})," if the following conditions hold for each element ",(0,l.jsx)(e.code,{children:"pattern[k]"}),":"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"nums[i + k + 1] > nums[i + k]"})," if ",(0,l.jsx)(e.code,{children:"pattern[k] == 1"}),"."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"nums[i + k + 1] == nums[i + k]"})," if ",(0,l.jsx)(e.code,{children:"pattern[k] == 0"}),"."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"nums[i + k + 1] < nums[i + k]"})," if ",(0,l.jsx)(e.code,{children:"pattern[k] == -1"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["Return ",(0,l.jsxs)(e.em,{children:["the",(0,l.jsx)(e.strong,{children:"count"})," of subarrays in"]})," ",(0,l.jsx)(e.code,{children:"nums"})," ",(0,l.jsx)(e.em,{children:"that match the"})," ",(0,l.jsx)(e.code,{children:"pattern"}),"."]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"Input: nums = [1,2,3,4,5,6], pattern = [1,1]\nOutput: 4\nExplanation: The pattern [1,1] indicates that we are looking for strictly increasing subarrays of size 3. In the array nums, the subarrays [1,2,3], [2,3,4], [3,4,5], and [4,5,6] match this pattern.\nHence, there are 4 subarrays in nums that match the pattern.\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"Input: nums = [1,4,4,1,3,5,5,3], pattern = [1,0,-1]\nOutput: 2\nExplanation: Here, the pattern [1,0,-1] indicates that we are looking for a sequence where the first number is smaller than the second, the second is equal to the third, and the third is greater than the fourth. In the array nums, the subarrays [1,4,4,1], and [3,5,5,3] match this pattern.\nHence, there are 2 subarrays in nums that match the pattern.\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mn,{children:"2"}),(0,l.jsx)(e.mo,{children:"<"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mi,{children:"u"}),(0,l.jsx)(e.mi,{children:"m"}),(0,l.jsx)(e.mi,{children:"s"}),(0,l.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,l.jsx)(e.mi,{children:"l"}),(0,l.jsx)(e.mi,{children:"e"}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mi,{children:"g"}),(0,l.jsx)(e.mi,{children:"t"}),(0,l.jsx)(e.mi,{children:"h"}),(0,l.jsx)(e.mo,{children:"<"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mn,{children:"100"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"2 <= n == nums.length <= 100"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6835em",verticalAlign:"-0.0391em"}}),(0,l.jsx)(e.span,{className:"mord",children:"2"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"<="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"=="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,l.jsx)(e.span,{className:"mord",children:"."}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"<="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord",children:"100"})]})]})]})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mo,{children:"<"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mi,{children:"u"}),(0,l.jsx)(e.mi,{children:"m"}),(0,l.jsx)(e.mi,{children:"s"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,l.jsx)(e.mo,{children:"<"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mn,{children:"0"}),(0,l.jsx)(e.mn,{children:"9"})]})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"1 <= nums[i] <= 10 ^ 9"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6835em",verticalAlign:"-0.0391em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"<="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"<="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:"0"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"9"})})]})})})})})]})]})]})]})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mo,{children:"<"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mi,{children:"m"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mi,{children:"p"}),(0,l.jsx)(e.mi,{children:"a"}),(0,l.jsx)(e.mi,{children:"t"}),(0,l.jsx)(e.mi,{children:"t"}),(0,l.jsx)(e.mi,{children:"e"}),(0,l.jsx)(e.mi,{children:"r"}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,l.jsx)(e.mi,{children:"l"}),(0,l.jsx)(e.mi,{children:"e"}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mi,{children:"g"}),(0,l.jsx)(e.mi,{children:"t"}),(0,l.jsx)(e.mi,{children:"h"}),(0,l.jsx)(e.mo,{children:"<"}),(0,l.jsx)(e.mi,{children:"n"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"1 <= m == pattern.length < n"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6835em",verticalAlign:"-0.0391em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"<="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"=="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"tt"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"er"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"mord",children:"."}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"<"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"})]})]})]})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mo,{children:"\u2212"}),(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mo,{children:"<"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mi,{children:"p"}),(0,l.jsx)(e.mi,{children:"a"}),(0,l.jsx)(e.mi,{children:"t"}),(0,l.jsx)(e.mi,{children:"t"}),(0,l.jsx)(e.mi,{children:"e"}),(0,l.jsx)(e.mi,{children:"r"}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,l.jsx)(e.mo,{children:"<"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mn,{children:"1"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"-1 <= pattern[i] <= 1"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord",children:"\u2212"}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"<="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"tt"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"er"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"<="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"})]})]})]})}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"approach-1-brute-force",children:"Approach 1: Brute Force"}),"\n",(0,l.jsxs)(e.p,{children:["Since the constraints are small, we can just brute force it. The idea is to test all subarrays. We iterate in ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mi,{children:"u"}),(0,l.jsx)(e.mi,{children:"m"}),(0,l.jsx)(e.mi,{children:"s"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"nums"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"s"})]})})]}),". For each starting point ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"i"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})})]})," in ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mn,{children:"0"}),(0,l.jsx)(e.mo,{separator:"true",children:","}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mo,{children:"\u2212"}),(0,l.jsx)(e.mi,{children:"m"}),(0,l.jsx)(e.mo,{children:"\u2212"}),(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"[0, n - m - 1]"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord",children:"0"}),(0,l.jsx)(e.span,{className:"mpunct",children:","}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"})]})]})]})," where ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"n"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"})]})})]})," is the size of ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mi,{children:"u"}),(0,l.jsx)(e.mi,{children:"m"}),(0,l.jsx)(e.mi,{children:"s"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"nums"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"s"})]})})]})," and ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"m"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"m"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"m"})]})})]})," is the size of ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"p"}),(0,l.jsx)(e.mi,{children:"a"}),(0,l.jsx)(e.mi,{children:"t"}),(0,l.jsx)(e.mi,{children:"t"}),(0,l.jsx)(e.mi,{children:"e"}),(0,l.jsx)(e.mi,{children:"r"}),(0,l.jsx)(e.mi,{children:"n"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"pattern"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8095em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"tt"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"er"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"})]})})]}),", we iterate each element in pattern to check the condition. If it isn't valid, then that means the entire subarray is not valid, so we can break it and try the next one, else we increase ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"a"}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mi,{children:"s"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"ans"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"an"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"s"})]})})]})," by ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mn,{children:"1"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"})]})})]})," and move onto the next one."]}),"\n",(0,l.jsxs)(e.p,{children:["For larger constraints, one may use Z Algo or KMP to achieve ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"O"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"mclose",children:")"})]})})]}),"."]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Time Complexity: ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"O"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mn,{children:"2"})]}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n ^ 2)"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,l.jsxs)(e.li,{children:["Space Complexity: ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"O"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"mclose",children:")"})]})})]})]}),"\n"]}),"\n",(0,l.jsx)(m,{children:(0,l.jsxs)(n,{value:"cpp",label:"C++",children:[(0,l.jsx)(a,{name:"@wingkwong"}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int countMatchingSubarrays(vector<int>& nums, vector<int>& pattern) {\n        int ans = 0, n = nums.size(), m = pattern.size();\n        // we start from each `i` to check the subarray\n        // if the pattern size is `m`, \n        // the valid starting point is [0, n - m - 1]\n        for (int i = 0; i < n - m; i++) {\n            int ok = 1;\n            // iterate each element in `pattern`\n            for (int k = 0; k < m; k++) {\n                // just check those 3 cases defined the the problem statement\n                // if it cannot fulfil, then set `ok` to `0` then break the loop\n                if ((pattern[k] == 1 && !(nums[i + k] < nums[i + k + 1])) ||\n                    (pattern[k] == 0 && !(nums[i + k] == nums[i + k + 1])) ||\n                    (pattern[k] == -1 && !(nums[i + k] > nums[i + k + 1]))) {\n                    ok = 0;\n                    break;\n                }\n            }\n            // if `ok` is 1, that means the subarray [i, i + m - 1] matching the `pattern`\n            ans += ok;\n        }\n        return ans;\n    }\n};\n"})})]})})]})}function d(s={}){const{wrapper:e}={...(0,r.R)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(h,{...s})}):h(s)}function x(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(s,e,a)=>{a.d(e,{R:()=>m,x:()=>t});var n=a(96540);const l={},r=n.createContext(l);function m(s){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function t(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:m(s.components),n.createElement(r.Provider,{value:e},s.children)}}}]);