"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[21593],{38149:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>m});const a=JSON.parse('{"id":"2900-2999/find-indices-with-index-and-value-difference-i-easy","title":"2903 - Find Indices With Index and Value Difference I (Easy)","description":"Author: @wingkwong | https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/","source":"@site/solutions/2900-2999/2903-find-indices-with-index-and-value-difference-i-easy.md","sourceDirName":"2900-2999","slug":"/2900-2999/find-indices-with-index-and-value-difference-i-easy","permalink":"/solutions/2900-2999/find-indices-with-index-and-value-difference-i-easy","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2900-2999/2903-find-indices-with-index-and-value-difference-i-easy.md","tags":[{"inline":true,"label":"Array","permalink":"/solutions/tags/array"}],"version":"current","sidebarPosition":2903,"frontMatter":{"description":"Author: @wingkwong | https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/","tags":["Array"]},"sidebar":"tutorialSidebar","previous":{"title":"2905 - Find Indices With Index and Value Difference II (Medium)","permalink":"/solutions/2900-2999/find-indices-with-index-and-value-difference-ii-medium"},"next":{"title":"2913 - Subarrays Distinct Element Sum of Squares I (Easy)","permalink":"/solutions/2900-2999/subarrays-distinct-element-sum-of-squares-i-easy"}}');var i=n(74848),r=n(28453);const l={description:"Author: @wingkwong | https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/",tags:["Array"]},c="2903 - Find Indices With Index and Value Difference I (Easy)",t={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Brute Force",id:"approach-1-brute-force",level:2},{value:"Approach 2: One Pass",id:"approach-2-one-pass",level:2}];function d(e){const s={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{SolutionAuthor:n,TabItem:a,Tabs:l}=s;return n||x("SolutionAuthor",!0),a||x("TabItem",!0),l||x("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"2903---find-indices-with-index-and-value-difference-i-easy",children:"2903 - Find Indices With Index and Value Difference I (Easy)"})}),"\n",(0,i.jsx)(s.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/",children:"https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/"})}),"\n",(0,i.jsx)(s.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(s.p,{children:["You are given a ",(0,i.jsx)(s.strong,{children:"0-indexed"})," integer array ",(0,i.jsx)(s.code,{children:"nums"})," having length ",(0,i.jsx)(s.code,{children:"n"}),", an integer ",(0,i.jsx)(s.code,{children:"indexDifference"}),", and an integer ",(0,i.jsx)(s.code,{children:"valueDifference"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Your task is to find ",(0,i.jsx)(s.strong,{children:"two"})," indices ",(0,i.jsx)(s.code,{children:"i"})," and ",(0,i.jsx)(s.code,{children:"j"}),", both in the range ",(0,i.jsx)(s.code,{children:"[0, n - 1]"}),", that satisfy the following conditions:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"abs(i - j) >= indexDifference"}),", and"]}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"abs(nums[i] - nums[j]) >= valueDifference"})}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Return ",(0,i.jsx)(s.em,{children:"an integer array"})," ",(0,i.jsx)(s.code,{children:"answer"}),", ",(0,i.jsx)(s.em,{children:"where"})," ",(0,i.jsx)(s.code,{children:"answer = [i, j]"})," ",(0,i.jsx)(s.em,{children:"if there are two such indices"}),", ",(0,i.jsx)(s.em,{children:"and"})," ",(0,i.jsx)(s.code,{children:"answer = [-1, -1]"})," ",(0,i.jsx)(s.em,{children:"otherwise"}),". If there are multiple choices for the two indices, return ",(0,i.jsx)(s.em,{children:"any of them"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note:"})," ",(0,i.jsx)(s.code,{children:"i"})," and ",(0,i.jsx)(s.code,{children:"j"})," may be ",(0,i.jsx)(s.strong,{children:"equal"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"Input: nums = [5,1,4,1], indexDifference = 2, valueDifference = 4\nOutput: [0,3]\nExplanation: In this example, i = 0 and j = 3 can be selected.\nabs(0 - 3) >= 2 and abs(nums[0] - nums[3]) >= 4.\nHence, a valid answer is [0,3].\n[3,0] is also a valid answer.\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"Input: nums = [2,1], indexDifference = 0, valueDifference = 0\nOutput: [0,0]\nExplanation: In this example, i = 0 and j = 0 can be selected.\nabs(0 - 0) >= 0 and abs(nums[0] - nums[0]) >= 0.\nHence, a valid answer is [0,0].\nOther valid answers are [0,1], [1,0], and [1,1].\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Example 3:"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"Input: nums = [1,2,3], indexDifference = 2, valueDifference = 4\nOutput: [-1,-1]\nExplanation: In this example, it can be shown that it is impossible to find two indices that satisfy both conditions.\nHence, [-1,-1] is returned.\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"1 <= n == nums.length <= 100"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"0 <= nums[i] <= 50"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"0 <= indexDifference <= 100"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"0 <= valueDifference <= 50"})}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"approach-1-brute-force",children:"Approach 1: Brute Force"}),"\n",(0,i.jsxs)(s.p,{children:["Basically just follow the instruction - iterate ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"i"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6595em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"i"})]})})]})," and ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"j"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"j"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})]})})]})," and check if the given conditions are satisfied, return ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mo,{stretchy:"false",children:"["}),(0,i.jsx)(s.mi,{children:"i"}),(0,i.jsx)(s.mo,{separator:"true",children:","}),(0,i.jsx)(s.mi,{children:"j"}),(0,i.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"[i, j]"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(s.span,{className:"mopen",children:"["}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(s.span,{className:"mpunct",children:","}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,i.jsx)(s.span,{className:"mclose",children:"]"})]})})]})," if found, else ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mo,{stretchy:"false",children:"["}),(0,i.jsx)(s.mo,{children:"\u2212"}),(0,i.jsx)(s.mn,{children:"1"}),(0,i.jsx)(s.mo,{separator:"true",children:","}),(0,i.jsx)(s.mo,{children:"\u2212"}),(0,i.jsx)(s.mn,{children:"1"}),(0,i.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"[-1, -1]"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(s.span,{className:"mopen",children:"["}),(0,i.jsx)(s.span,{className:"mord",children:"\u2212"}),(0,i.jsx)(s.span,{className:"mord",children:"1"}),(0,i.jsx)(s.span,{className:"mpunct",children:","}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,i.jsx)(s.span,{className:"mord",children:"\u2212"}),(0,i.jsx)(s.span,{className:"mord",children:"1"}),(0,i.jsx)(s.span,{className:"mclose",children:"]"})]})})]}),"."]}),"\n",(0,i.jsx)(l,{children:(0,i.jsxs)(a,{value:"py",label:"Python",children:[(0,i.jsx)(n,{name:"@wingkwong"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-py",children:"class Solution:\n    def findIndices(self, nums: List[int], indexDifference: int, valueDifference: int) -> List[int]:\n        n = len(nums)\n        for i in range(n):\n            for j in range(i, n):\n                if abs(i - j) >= indexDifference and abs(nums[i] - nums[j]) >= valueDifference:\n                    return [i, j]\n        return [-1, -1]\n"})})]})}),"\n",(0,i.jsx)(s.h2,{id:"approach-2-one-pass",children:"Approach 2: One Pass"}),"\n",(0,i.jsxs)(s.p,{children:["The brute force approach takes ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"O"}),(0,i.jsx)(s.mo,{stretchy:"false",children:"("}),(0,i.jsxs)(s.msup,{children:[(0,i.jsx)(s.mi,{children:"n"}),(0,i.jsx)(s.mn,{children:"2"})]}),(0,i.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n ^ 2)"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(s.span,{className:"mopen",children:"("}),(0,i.jsxs)(s.span,{className:"mord",children:[(0,i.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(s.span,{className:"msupsub",children:(0,i.jsx)(s.span,{className:"vlist-t",children:(0,i.jsx)(s.span,{className:"vlist-r",children:(0,i.jsx)(s.span,{className:"vlist",style:{height:"0.8141em"},children:(0,i.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(s.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,i.jsx)(s.span,{className:"mclose",children:")"})]})})]})," complexity. We can further optimize to ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"O"}),(0,i.jsx)(s.mo,{stretchy:"false",children:"("}),(0,i.jsx)(s.mi,{children:"n"}),(0,i.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(s.span,{className:"mopen",children:"("}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(s.span,{className:"mclose",children:")"})]})})]}),". Since we know that ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"a"}),(0,i.jsx)(s.mi,{children:"b"}),(0,i.jsx)(s.mi,{children:"s"}),(0,i.jsx)(s.mo,{stretchy:"false",children:"("}),(0,i.jsx)(s.mi,{children:"i"}),(0,i.jsx)(s.mo,{children:"\u2212"}),(0,i.jsx)(s.mi,{children:"j"}),(0,i.jsx)(s.mo,{stretchy:"false",children:")"}),(0,i.jsx)(s.mo,{children:">"}),(0,i.jsx)(s.mo,{children:"="}),(0,i.jsx)(s.mi,{children:"i"}),(0,i.jsx)(s.mi,{children:"n"}),(0,i.jsx)(s.mi,{children:"d"}),(0,i.jsx)(s.mi,{children:"e"}),(0,i.jsx)(s.mi,{children:"x"}),(0,i.jsx)(s.mi,{children:"D"}),(0,i.jsx)(s.mi,{children:"i"}),(0,i.jsx)(s.mi,{children:"f"}),(0,i.jsx)(s.mi,{children:"f"}),(0,i.jsx)(s.mi,{children:"e"}),(0,i.jsx)(s.mi,{children:"r"}),(0,i.jsx)(s.mi,{children:"e"}),(0,i.jsx)(s.mi,{children:"n"}),(0,i.jsx)(s.mi,{children:"c"}),(0,i.jsx)(s.mi,{children:"e"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"abs(i - j) >= indexDifference"})]})})}),(0,i.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"ab"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,i.jsx)(s.span,{className:"mopen",children:"("}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(s.span,{className:"mbin",children:"\u2212"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,i.jsx)(s.span,{className:"mclose",children:")"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(s.span,{className:"mrel",children:">="}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"in"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"ff"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"ere"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"ce"})]})]})]}),", we can start iterating from ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"i"}),(0,i.jsx)(s.mi,{children:"n"}),(0,i.jsx)(s.mi,{children:"d"}),(0,i.jsx)(s.mi,{children:"e"}),(0,i.jsx)(s.mi,{children:"x"}),(0,i.jsx)(s.mi,{children:"D"}),(0,i.jsx)(s.mi,{children:"i"}),(0,i.jsx)(s.mi,{children:"f"}),(0,i.jsx)(s.mi,{children:"f"}),(0,i.jsx)(s.mi,{children:"e"}),(0,i.jsx)(s.mi,{children:"r"}),(0,i.jsx)(s.mi,{children:"e"}),(0,i.jsx)(s.mi,{children:"n"}),(0,i.jsx)(s.mi,{children:"c"}),(0,i.jsx)(s.mi,{children:"e"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"indexDifference"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"in"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"ff"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"ere"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"ce"})]})})]}),", then find the current min index and max index in ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"n"}),(0,i.jsx)(s.mi,{children:"u"}),(0,i.jsx)(s.mi,{children:"m"}),(0,i.jsx)(s.mi,{children:"s"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"nums"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"s"})]})})]}),". If the second condition is satisfied, then return the current index and the target index (either min index or max index depending on the case). See below code for better understanding."]}),"\n",(0,i.jsx)(l,{children:(0,i.jsxs)(a,{value:"py",label:"Python",children:[(0,i.jsx)(n,{name:"@wingkwong"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-py",children:"class Solution:\n    def findIndices(self, nums: List[int], indexDifference: int, valueDifference: int) -> List[int]:\n        mi_i, mx_i = 0, 0\n        for i in range(indexDifference, len(nums)):\n            if nums[i - indexDifference] < nums[mi_i]: mi_i = i - indexDifference\n            if nums[i - indexDifference] > nums[mx_i]: mx_i = i - indexDifference\n            if nums[i] - nums[mi_i] >= valueDifference: return [i, mi_i]\n            if nums[mx_i] - nums[i] >= valueDifference: return [i, mx_i]\n        return [-1, -1]\n"})})]})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function x(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>c});var a=n(96540);const i={},r=a.createContext(i);function l(e){const s=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);