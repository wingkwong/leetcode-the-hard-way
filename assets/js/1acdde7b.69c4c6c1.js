"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[6974],{48377:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"1400-1499/minimum-number-of-days-to-make-m-bouquets-medium","title":"1482 - Minimum Number of Days to Make m Bouquets (Medium)","description":"Author: @wkw, @jit | https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/description/","source":"@site/solutions/1400-1499/1482-minimum-number-of-days-to-make-m-bouquets-medium.md","sourceDirName":"1400-1499","slug":"/1400-1499/minimum-number-of-days-to-make-m-bouquets-medium","permalink":"/solutions/1400-1499/minimum-number-of-days-to-make-m-bouquets-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1400-1499/1482-minimum-number-of-days-to-make-m-bouquets-medium.md","tags":[{"inline":true,"label":"Array","permalink":"/solutions/tags/array"},{"inline":true,"label":"Binary Search","permalink":"/solutions/tags/binary-search"}],"version":"current","sidebarPosition":1482,"frontMatter":{"description":"Author: @wkw, @jit | https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/description/","tags":["Array","Binary Search"]},"sidebar":"tutorialSidebar","previous":{"title":"1480 - Running Sum of 1d Array (Easy)","permalink":"/solutions/1400-1499/running-sum-of-1d-array-easy"},"next":{"title":"1491 - Average Salary Excluding the Minimum and Maximum Salary (Easy)","permalink":"/solutions/1400-1499/average-salary-excluding-the-minimum-and-maximum-salary-easy"}}');var r=s(86070),t=s(32790);const i={description:"Author: @wkw, @jit | https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/description/",tags:["Array","Binary Search"]},o="1482 - Minimum Number of Days to Make m Bouquets (Medium)",m={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Binary Search",id:"approach-1-binary-search",level:2}];function d(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{SolutionAuthor:s,TabItem:a,Tabs:i}=n;return s||h("SolutionAuthor",!0),a||h("TabItem",!0),i||h("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"1482---minimum-number-of-days-to-make-m-bouquets-medium",children:"1482 - Minimum Number of Days to Make m Bouquets (Medium)"})}),"\n",(0,r.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/description/",children:"https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/description/"})}),"\n",(0,r.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsxs)(n.p,{children:["You are given an integer array ",(0,r.jsx)(n.code,{children:"bloomDay"}),", an integer ",(0,r.jsx)(n.code,{children:"m"})," and an integer ",(0,r.jsx)(n.code,{children:"k"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["You want to make ",(0,r.jsx)(n.code,{children:"m"})," bouquets. To make a bouquet, you need to use ",(0,r.jsx)(n.code,{children:"k"})," ",(0,r.jsx)(n.strong,{children:"adjacent flowers"})," from the garden."]}),"\n",(0,r.jsxs)(n.p,{children:["The garden consists of ",(0,r.jsx)(n.code,{children:"n"})," flowers, the ",(0,r.jsx)(n.code,{children:"ith"})," flower will bloom in the ",(0,r.jsx)(n.code,{children:"bloomDay[i]"})," and then can be used in ",(0,r.jsx)(n.strong,{children:"exactly one"})," bouquet."]}),"\n",(0,r.jsxs)(n.p,{children:["Return ",(0,r.jsx)(n.em,{children:"the minimum number of days you need to wait to be able to make"}),(0,r.jsx)(n.code,{children:"m"}),(0,r.jsx)(n.em,{children:"bouquets from the garden"}),". If it is impossible to make m bouquets return ",(0,r.jsx)(n.code,{children:"-1"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: bloomDay = [1,10,3,10,2], m = 3, k = 1\nOutput: 3\nExplanation: Let us see what happened in the first three days. x means flower bloomed and _ means flower did not bloom in the garden.\nWe need 3 bouquets each should contain 1 flower.\nAfter day 1: [x, _, _, _, _]   // we can only make one bouquet.\nAfter day 2: [x, _, _, _, x]   // we can only make two bouquets.\nAfter day 3: [x, _, x, _, x]   // we can make 3 bouquets. The answer is 3.\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: bloomDay = [1,10,3,10,2], m = 3, k = 2\nOutput: -1\nExplanation: We need 3 bouquets each has 2 flowers, that means we need 6 flowers. We only have 5 flowers so it is impossible to get the needed bouquets and we return -1.\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: bloomDay = [7,7,7,7,12,7,7], m = 2, k = 3\nOutput: 12\nExplanation: We need 2 bouquets each should have 3 flowers.\nHere is the garden after the 7 and 12 days:\nAfter day 7: [x, x, x, x, _, x, x]\nWe can make one bouquet of the first three flowers that bloomed. We cannot make another bouquet from the last three flowers that bloomed because they are not adjacent.\nAfter day 12: [x, x, x, x, x, x, x]\nIt is obvious that we can make two bouquets in different ways.\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"bloomDay.length == n"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"1 <= n <= 10^5"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"1 <= bloomDay[i] <= 10^9"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"1 <= m <= 10^6"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"1 <= k <= n"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"approach-1-binary-search",children:"Approach 1: Binary Search"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Time Complexity: ",(0,r.jsxs)(n.span,{className:"katex",children:[(0,r.jsx)(n.span,{className:"katex-mathml",children:(0,r.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(n.semantics,{children:[(0,r.jsxs)(n.mrow,{children:[(0,r.jsx)(n.mi,{children:"O"}),(0,r.jsx)(n.mo,{stretchy:"false",children:"("}),(0,r.jsx)(n.mi,{children:"n"}),(0,r.jsx)(n.mi,{children:"l"}),(0,r.jsx)(n.mi,{children:"o"}),(0,r.jsx)(n.mi,{children:"g"}),(0,r.jsx)(n.mi,{children:"m"}),(0,r.jsx)(n.mi,{children:"a"}),(0,r.jsx)(n.mi,{children:"x"}),(0,r.jsx)(n.mo,{stretchy:"false",children:"("}),(0,r.jsx)(n.mi,{children:"b"}),(0,r.jsx)(n.mi,{children:"l"}),(0,r.jsx)(n.mi,{children:"o"}),(0,r.jsx)(n.mi,{children:"o"}),(0,r.jsx)(n.mi,{children:"m"}),(0,r.jsx)(n.mi,{children:"D"}),(0,r.jsx)(n.mi,{children:"a"}),(0,r.jsx)(n.mi,{children:"y"}),(0,r.jsx)(n.mo,{stretchy:"false",children:")"}),(0,r.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,r.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n log max(bloomDay))"})]})})}),(0,r.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(n.span,{className:"base",children:[(0,r.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,r.jsx)(n.span,{className:"mopen",children:"("}),(0,r.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,r.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,r.jsx)(n.span,{className:"mord mathnormal",children:"o"}),(0,r.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,r.jsx)(n.span,{className:"mord mathnormal",children:"ma"}),(0,r.jsx)(n.span,{className:"mord mathnormal",children:"x"}),(0,r.jsx)(n.span,{className:"mopen",children:"("}),(0,r.jsx)(n.span,{className:"mord mathnormal",children:"b"}),(0,r.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,r.jsx)(n.span,{className:"mord mathnormal",children:"oo"}),(0,r.jsx)(n.span,{className:"mord mathnormal",children:"m"}),(0,r.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"}),(0,r.jsx)(n.span,{className:"mord mathnormal",children:"a"}),(0,r.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,r.jsx)(n.span,{className:"mclose",children:"))"})]})})]})]}),"\n",(0,r.jsxs)(n.li,{children:["Space Complexity: ",(0,r.jsxs)(n.span,{className:"katex",children:[(0,r.jsx)(n.span,{className:"katex-mathml",children:(0,r.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(n.semantics,{children:[(0,r.jsxs)(n.mrow,{children:[(0,r.jsx)(n.mi,{children:"O"}),(0,r.jsx)(n.mo,{stretchy:"false",children:"("}),(0,r.jsx)(n.mn,{children:"1"}),(0,r.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,r.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,r.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(n.span,{className:"base",children:[(0,r.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,r.jsx)(n.span,{className:"mopen",children:"("}),(0,r.jsx)(n.span,{className:"mord",children:"1"}),(0,r.jsx)(n.span,{className:"mclose",children:")"})]})})]})]}),"\n"]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsxs)(a,{value:"py",label:"Python",children:[(0,r.jsx)(s,{name:"@wkw"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"class Solution:\n    def minDays(self, bloomDay: List[int], m: int, k: int) -> int:\n        if m * k > len(bloomDay): return -1\n        l, r = 1, max(bloomDay)\n        while l < r:\n            mid = (l + r) // 2\n            flowers, bouquets = 0, 0\n            for x in bloomDay:\n                if x > mid:\n                    flowers = 0\n                else:\n                    flowers += 1\n                    if flowers == k:\n                        bouquets += 1\n                        flowers = 0\n            if bouquets < m:\n                l = mid + 1\n            else:\n                r = mid\n        return l\n"})})]}),(0,r.jsxs)(a,{value:"ruby",label:"Ruby",children:[(0,r.jsx)(s,{name:"@jit"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",children:"def min_days(bloom_day, m, k)\n  (0..bloom_day.max).bsearch do |d|\n    runs = bloom_day.chunk { |day| 1 if d >= day }\n    runs.sum { |_, r| r.size / k } >= m\n  end || -1\nend\n"})})]})]})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},32790:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var a=s(30758);const r={},t=a.createContext(r);function i(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);