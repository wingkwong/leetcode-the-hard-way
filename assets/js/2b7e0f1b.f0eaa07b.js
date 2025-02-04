"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[10464],{89066:(s,a,e)=>{e.r(a),e.d(a,{assets:()=>r,contentTitle:()=>c,default:()=>d,frontMatter:()=>m,metadata:()=>n,toc:()=>t});const n=JSON.parse('{"id":"2200-2299/maximum-bags-with-full-capacity-of-rock-medium","title":"2279 - Maximum Bags With Full Capacity of Rocks (Medium)","description":"Author: @wkw, @radojicic23 | https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks","source":"@site/solutions/2200-2299/2279-maximum-bags-with-full-capacity-of-rock-medium.md","sourceDirName":"2200-2299","slug":"/2200-2299/maximum-bags-with-full-capacity-of-rock-medium","permalink":"/solutions/2200-2299/maximum-bags-with-full-capacity-of-rock-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2279-maximum-bags-with-full-capacity-of-rock-medium.md","tags":[],"version":"current","sidebarPosition":2279,"frontMatter":{"description":"Author: @wkw, @radojicic23 | https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks"},"sidebar":"tutorialSidebar","previous":{"title":"2278 - Percentage of Letter in String (Easy)","permalink":"/solutions/2200-2299/percentage-of-letter-in-string"},"next":{"title":"2280 - Minimum Lines to Represent a Line Chart (Medium)","permalink":"/solutions/2200-2299/minimum-lines-to-represent-a-line-chart-medium"}}');var i=e(86070),l=e(32790);const m={description:"Author: @wkw, @radojicic23 | https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks"},c="2279 - Maximum Bags With Full Capacity of Rocks (Medium)",r={},t=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Greedy",id:"approach-1-greedy",level:2}];function h(s){const a={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,l.R)(),...s.components},{SolutionAuthor:e,TabItem:n,Tabs:m}=a;return e||o("SolutionAuthor",!0),n||o("TabItem",!0),m||o("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.header,{children:(0,i.jsx)(a.h1,{id:"2279---maximum-bags-with-full-capacity-of-rocks-medium",children:"2279 - Maximum Bags With Full Capacity of Rocks (Medium)"})}),"\n",(0,i.jsx)(a.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.a,{href:"https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks",children:"https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks"})}),"\n",(0,i.jsx)(a.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsx)(a.p,{children:"You have n bags numbered from 0 to n - 1. You are given two 0-indexed integer arrays capacity and rocks. The ith bag can hold a maximum of capacity[i] rocks and currently contains rocks[i] rocks. You are also given an integer additionalRocks, the number of additional rocks you can place in any of the bags."}),"\n",(0,i.jsx)(a.p,{children:"Return the maximum number of bags that could have full capacity after placing the additional rocks in some bags."}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{children:"Input: capacity = [2,3,4,5], rocks = [1,2,4,4], additionalRocks = 2\nOutput: 3\nExplanation:\nPlace 1 rock in bag 0 and 1 rock in bag 1.\nThe number of rocks in each bag are now [2,3,4,4].\nBags 0, 1, and 2 have full capacity.\nThere are 3 bags at full capacity, so we return 3.\nIt can be shown that it is not possible to have more than 3 bags at full capacity.\nNote that there may be other ways of placing the rocks that result in an answer of 3.\n"})}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{children:"Input: capacity = [10,2,2], rocks = [2,2,0], additionalRocks = 100\nOutput: 3\nExplanation:\nPlace 8 rocks in bag 0 and 2 rocks in bag 2.\nThe number of rocks in each bag are now [10,2,2].\nBags 0, 1, and 2 have full capacity.\nThere are 3 bags at full capacity, so we return 3.\nIt can be shown that it is not possible to have more than 3 bags at full capacity.\nNote that we did not use all of the additional rocks.\n"})}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:(0,i.jsxs)(a.span,{className:"katex",children:[(0,i.jsx)(a.span,{className:"katex-mathml",children:(0,i.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(a.semantics,{children:[(0,i.jsxs)(a.mrow,{children:[(0,i.jsx)(a.mi,{children:"n"}),(0,i.jsx)(a.mo,{children:"="}),(0,i.jsx)(a.mo,{children:"="}),(0,i.jsx)(a.mi,{children:"c"}),(0,i.jsx)(a.mi,{children:"a"}),(0,i.jsx)(a.mi,{children:"p"}),(0,i.jsx)(a.mi,{children:"a"}),(0,i.jsx)(a.mi,{children:"c"}),(0,i.jsx)(a.mi,{children:"i"}),(0,i.jsx)(a.mi,{children:"t"}),(0,i.jsx)(a.mi,{children:"y"}),(0,i.jsx)(a.mi,{mathvariant:"normal",children:"."}),(0,i.jsx)(a.mi,{children:"l"}),(0,i.jsx)(a.mi,{children:"e"}),(0,i.jsx)(a.mi,{children:"n"}),(0,i.jsx)(a.mi,{children:"g"}),(0,i.jsx)(a.mi,{children:"t"}),(0,i.jsx)(a.mi,{children:"h"}),(0,i.jsx)(a.mo,{children:"="}),(0,i.jsx)(a.mo,{children:"="}),(0,i.jsx)(a.mi,{children:"r"}),(0,i.jsx)(a.mi,{children:"o"}),(0,i.jsx)(a.mi,{children:"c"}),(0,i.jsx)(a.mi,{children:"k"}),(0,i.jsx)(a.mi,{children:"s"}),(0,i.jsx)(a.mi,{mathvariant:"normal",children:"."}),(0,i.jsx)(a.mi,{children:"l"}),(0,i.jsx)(a.mi,{children:"e"}),(0,i.jsx)(a.mi,{children:"n"}),(0,i.jsx)(a.mi,{children:"g"}),(0,i.jsx)(a.mi,{children:"t"}),(0,i.jsx)(a.mi,{children:"h"})]}),(0,i.jsx)(a.annotation,{encoding:"application/x-tex",children:"n == capacity.length == rocks.length"})]})})}),(0,i.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(a.span,{className:"base",children:[(0,i.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(a.span,{className:"mrel",children:"=="}),(0,i.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(a.span,{className:"base",children:[(0,i.jsx)(a.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"c"}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"p"}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"c"}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,i.jsx)(a.span,{className:"mord",children:"."}),(0,i.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"e"}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"h"}),(0,i.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(a.span,{className:"mrel",children:"=="}),(0,i.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(a.span,{className:"base",children:[(0,i.jsx)(a.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"roc"}),(0,i.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,i.jsx)(a.span,{className:"mord",children:"."}),(0,i.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"e"}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"h"})]})]})]})}),"\n",(0,i.jsx)(a.li,{children:(0,i.jsxs)(a.span,{className:"katex",children:[(0,i.jsx)(a.span,{className:"katex-mathml",children:(0,i.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(a.semantics,{children:[(0,i.jsxs)(a.mrow,{children:[(0,i.jsx)(a.mn,{children:"1"}),(0,i.jsx)(a.mo,{children:"<"}),(0,i.jsx)(a.mo,{children:"="}),(0,i.jsx)(a.mi,{children:"n"}),(0,i.jsx)(a.mo,{children:"<"}),(0,i.jsx)(a.mo,{children:"="}),(0,i.jsx)(a.mn,{children:"5"}),(0,i.jsx)(a.mo,{children:"\u2217"}),(0,i.jsx)(a.mn,{children:"1"}),(0,i.jsxs)(a.msup,{children:[(0,i.jsx)(a.mn,{children:"0"}),(0,i.jsx)(a.mn,{children:"4"})]})]}),(0,i.jsx)(a.annotation,{encoding:"application/x-tex",children:"1 <= n <= 5 * 10^4"})]})})}),(0,i.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(a.span,{className:"base",children:[(0,i.jsx)(a.span,{className:"strut",style:{height:"0.6835em",verticalAlign:"-0.0391em"}}),(0,i.jsx)(a.span,{className:"mord",children:"1"}),(0,i.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(a.span,{className:"mrel",children:"<="}),(0,i.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(a.span,{className:"base",children:[(0,i.jsx)(a.span,{className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(a.span,{className:"mrel",children:"<="}),(0,i.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(a.span,{className:"base",children:[(0,i.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(a.span,{className:"mord",children:"5"}),(0,i.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(a.span,{className:"mbin",children:"\u2217"}),(0,i.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(a.span,{className:"base",children:[(0,i.jsx)(a.span,{className:"strut",style:{height:"0.8141em"}}),(0,i.jsx)(a.span,{className:"mord",children:"1"}),(0,i.jsxs)(a.span,{className:"mord",children:[(0,i.jsx)(a.span,{className:"mord",children:"0"}),(0,i.jsx)(a.span,{className:"msupsub",children:(0,i.jsx)(a.span,{className:"vlist-t",children:(0,i.jsx)(a.span,{className:"vlist-r",children:(0,i.jsx)(a.span,{className:"vlist",style:{height:"0.8141em"},children:(0,i.jsxs)(a.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(a.span,{className:"mord mtight",children:"4"})})]})})})})})]})]})]})]})}),"\n",(0,i.jsx)(a.li,{children:(0,i.jsxs)(a.span,{className:"katex",children:[(0,i.jsx)(a.span,{className:"katex-mathml",children:(0,i.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(a.semantics,{children:[(0,i.jsxs)(a.mrow,{children:[(0,i.jsx)(a.mn,{children:"1"}),(0,i.jsx)(a.mo,{children:"<"}),(0,i.jsx)(a.mo,{children:"="}),(0,i.jsx)(a.mi,{children:"c"}),(0,i.jsx)(a.mi,{children:"a"}),(0,i.jsx)(a.mi,{children:"p"}),(0,i.jsx)(a.mi,{children:"a"}),(0,i.jsx)(a.mi,{children:"c"}),(0,i.jsx)(a.mi,{children:"i"}),(0,i.jsx)(a.mi,{children:"t"}),(0,i.jsx)(a.mi,{children:"y"}),(0,i.jsx)(a.mo,{stretchy:"false",children:"["}),(0,i.jsx)(a.mi,{children:"i"}),(0,i.jsx)(a.mo,{stretchy:"false",children:"]"}),(0,i.jsx)(a.mo,{children:"<"}),(0,i.jsx)(a.mo,{children:"="}),(0,i.jsx)(a.mn,{children:"1"}),(0,i.jsxs)(a.msup,{children:[(0,i.jsx)(a.mn,{children:"0"}),(0,i.jsx)(a.mn,{children:"9"})]})]}),(0,i.jsx)(a.annotation,{encoding:"application/x-tex",children:"1 <= capacity[i] <= 10^9"})]})})}),(0,i.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(a.span,{className:"base",children:[(0,i.jsx)(a.span,{className:"strut",style:{height:"0.6835em",verticalAlign:"-0.0391em"}}),(0,i.jsx)(a.span,{className:"mord",children:"1"}),(0,i.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(a.span,{className:"mrel",children:"<="}),(0,i.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(a.span,{className:"base",children:[(0,i.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"c"}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"p"}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"c"}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,i.jsx)(a.span,{className:"mopen",children:"["}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(a.span,{className:"mclose",children:"]"}),(0,i.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(a.span,{className:"mrel",children:"<="}),(0,i.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(a.span,{className:"base",children:[(0,i.jsx)(a.span,{className:"strut",style:{height:"0.8141em"}}),(0,i.jsx)(a.span,{className:"mord",children:"1"}),(0,i.jsxs)(a.span,{className:"mord",children:[(0,i.jsx)(a.span,{className:"mord",children:"0"}),(0,i.jsx)(a.span,{className:"msupsub",children:(0,i.jsx)(a.span,{className:"vlist-t",children:(0,i.jsx)(a.span,{className:"vlist-r",children:(0,i.jsx)(a.span,{className:"vlist",style:{height:"0.8141em"},children:(0,i.jsxs)(a.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(a.span,{className:"mord mtight",children:"9"})})]})})})})})]})]})]})]})}),"\n",(0,i.jsx)(a.li,{children:(0,i.jsxs)(a.span,{className:"katex",children:[(0,i.jsx)(a.span,{className:"katex-mathml",children:(0,i.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(a.semantics,{children:[(0,i.jsxs)(a.mrow,{children:[(0,i.jsx)(a.mn,{children:"0"}),(0,i.jsx)(a.mo,{children:"<"}),(0,i.jsx)(a.mo,{children:"="}),(0,i.jsx)(a.mi,{children:"r"}),(0,i.jsx)(a.mi,{children:"o"}),(0,i.jsx)(a.mi,{children:"c"}),(0,i.jsx)(a.mi,{children:"k"}),(0,i.jsx)(a.mi,{children:"s"}),(0,i.jsx)(a.mo,{stretchy:"false",children:"["}),(0,i.jsx)(a.mi,{children:"i"}),(0,i.jsx)(a.mo,{stretchy:"false",children:"]"}),(0,i.jsx)(a.mo,{children:"<"}),(0,i.jsx)(a.mo,{children:"="}),(0,i.jsx)(a.mi,{children:"c"}),(0,i.jsx)(a.mi,{children:"a"}),(0,i.jsx)(a.mi,{children:"p"}),(0,i.jsx)(a.mi,{children:"a"}),(0,i.jsx)(a.mi,{children:"c"}),(0,i.jsx)(a.mi,{children:"i"}),(0,i.jsx)(a.mi,{children:"t"}),(0,i.jsx)(a.mi,{children:"y"}),(0,i.jsx)(a.mo,{stretchy:"false",children:"["}),(0,i.jsx)(a.mi,{children:"i"}),(0,i.jsx)(a.mo,{stretchy:"false",children:"]"})]}),(0,i.jsx)(a.annotation,{encoding:"application/x-tex",children:"0 <= rocks[i] <= capacity[i]"})]})})}),(0,i.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(a.span,{className:"base",children:[(0,i.jsx)(a.span,{className:"strut",style:{height:"0.6835em",verticalAlign:"-0.0391em"}}),(0,i.jsx)(a.span,{className:"mord",children:"0"}),(0,i.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(a.span,{className:"mrel",children:"<="}),(0,i.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(a.span,{className:"base",children:[(0,i.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"roc"}),(0,i.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,i.jsx)(a.span,{className:"mopen",children:"["}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(a.span,{className:"mclose",children:"]"}),(0,i.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(a.span,{className:"mrel",children:"<="}),(0,i.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(a.span,{className:"base",children:[(0,i.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"c"}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"p"}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"c"}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,i.jsx)(a.span,{className:"mopen",children:"["}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(a.span,{className:"mclose",children:"]"})]})]})]})}),"\n",(0,i.jsx)(a.li,{children:(0,i.jsxs)(a.span,{className:"katex",children:[(0,i.jsx)(a.span,{className:"katex-mathml",children:(0,i.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(a.semantics,{children:[(0,i.jsxs)(a.mrow,{children:[(0,i.jsx)(a.mn,{children:"1"}),(0,i.jsx)(a.mo,{children:"<"}),(0,i.jsx)(a.mo,{children:"="}),(0,i.jsx)(a.mi,{children:"a"}),(0,i.jsx)(a.mi,{children:"d"}),(0,i.jsx)(a.mi,{children:"d"}),(0,i.jsx)(a.mi,{children:"i"}),(0,i.jsx)(a.mi,{children:"t"}),(0,i.jsx)(a.mi,{children:"i"}),(0,i.jsx)(a.mi,{children:"o"}),(0,i.jsx)(a.mi,{children:"n"}),(0,i.jsx)(a.mi,{children:"a"}),(0,i.jsx)(a.mi,{children:"l"}),(0,i.jsx)(a.mi,{children:"R"}),(0,i.jsx)(a.mi,{children:"o"}),(0,i.jsx)(a.mi,{children:"c"}),(0,i.jsx)(a.mi,{children:"k"}),(0,i.jsx)(a.mi,{children:"s"}),(0,i.jsx)(a.mo,{children:"<"}),(0,i.jsx)(a.mo,{children:"="}),(0,i.jsx)(a.mn,{children:"1"}),(0,i.jsxs)(a.msup,{children:[(0,i.jsx)(a.mn,{children:"0"}),(0,i.jsx)(a.mn,{children:"9"})]})]}),(0,i.jsx)(a.annotation,{encoding:"application/x-tex",children:"1 <= additionalRocks <= 10^9"})]})})}),(0,i.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(a.span,{className:"base",children:[(0,i.jsx)(a.span,{className:"strut",style:{height:"0.6835em",verticalAlign:"-0.0391em"}}),(0,i.jsx)(a.span,{className:"mord",children:"1"}),(0,i.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(a.span,{className:"mrel",children:"<="}),(0,i.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(a.span,{className:"base",children:[(0,i.jsx)(a.span,{className:"strut",style:{height:"0.7335em",verticalAlign:"-0.0391em"}}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"dd"}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"o"}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"na"}),(0,i.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.00773em"},children:"lR"}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"oc"}),(0,i.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,i.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(a.span,{className:"mrel",children:"<="}),(0,i.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(a.span,{className:"base",children:[(0,i.jsx)(a.span,{className:"strut",style:{height:"0.8141em"}}),(0,i.jsx)(a.span,{className:"mord",children:"1"}),(0,i.jsxs)(a.span,{className:"mord",children:[(0,i.jsx)(a.span,{className:"mord",children:"0"}),(0,i.jsx)(a.span,{className:"msupsub",children:(0,i.jsx)(a.span,{className:"vlist-t",children:(0,i.jsx)(a.span,{className:"vlist-r",children:(0,i.jsx)(a.span,{className:"vlist",style:{height:"0.8141em"},children:(0,i.jsxs)(a.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(a.span,{className:"mord mtight",children:"9"})})]})})})})})]})]})]})]})}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"approach-1-greedy",children:"Approach 1: Greedy"}),"\n",(0,i.jsxs)(m,{children:[(0,i.jsxs)(n,{value:"cpp",label:"C++",children:[(0,i.jsx)(e,{name:"@wkw"}),(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int maximumBags(vector<int>& capacity, vector<int>& rocks, int additionalRocks) {\n        int n = capacity.size(), ans = 0;\n        vector<int> diff(n);\n        // calculate how many additional rocks it needs for position i\n        for (int i = 0; i < n; i++) diff[i] = capacity[i] - rocks[i];\n        // sort it as we wanna take it greedily\n        sort(diff.begin(), diff.end());\n        for (int i = 0; i < n; i++) {\n            // if we can make it to full capacity, then make it\n            if (additionalRocks >= diff[i]) {\n                additionalRocks -= diff[i];\n                ans += 1;\n            } else {\n                // otherwise, break it as we won't be able to make full capacity for other bags\n                break;\n            }\n        }\n        return ans;\n    }\n};\n"})})]}),(0,i.jsxs)(n,{value:"py",label:"Python",children:[(0,i.jsx)(e,{name:"@radojicic23"}),(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-py",children:"class Solution:\n    def maximumBags(self, capacity: List[int], rocks: List[int], additionalRocks: int) -> int:\n        for i in range(len(capacity)):\n            capacity[i] -= rocks[i]\n\n        capacity.sort()\n        count = 0\n        while count < len(capacity) and additionalRocks - capacity[count] >= 0:\n            additionalRocks -= capacity[count]\n            count += 1\n        return count\n"})})]}),(0,i.jsxs)(n,{value:"js",label:"JavaScript",children:[(0,i.jsx)(e,{name:"@radojicic23"}),(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-js",children:"/**\n * @param {number[]} capacity\n * @param {number[]} rocks\n * @param {number} additionalRocks\n * @return {number}\n */\nvar maximumBags = function (capacity, rocks, additionalRocks) {\n  for (let i = 0; i < capacity.length; i++) {\n    capacity[i] -= rocks[i];\n  }\n  let res = 0;\n  capacity.sort(function (a, b) {\n    return a - b;\n  });\n  while (res < capacity.length && additionalRocks - capacity[res] >= 0) {\n    additionalRocks -= capacity[res];\n    res += 1;\n  }\n  return res;\n};\n"})})]})]})]})}function d(s={}){const{wrapper:a}={...(0,l.R)(),...s.components};return a?(0,i.jsx)(a,{...s,children:(0,i.jsx)(h,{...s})}):h(s)}function o(s,a){throw new Error("Expected "+(a?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},32790:(s,a,e)=>{e.d(a,{R:()=>m,x:()=>c});var n=e(30758);const i={},l=n.createContext(i);function m(s){const a=n.useContext(l);return n.useMemo((function(){return"function"==typeof s?s(a):{...a,...s}}),[a,s])}function c(s){let a;return a=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:m(s.components),n.createElement(l.Provider,{value:a},s.children)}}}]);