"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[82328],{38599:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>t,contentTitle:()=>m,default:()=>o,frontMatter:()=>r,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"2200-2299/minimum-lines-to-represent-a-line-chart-medium","title":"2280 - Minimum Lines to Represent a Line Chart (Medium)","description":"Author: @wingkwong | https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart","source":"@site/solutions/2200-2299/2280-minimum-lines-to-represent-a-line-chart-medium.md","sourceDirName":"2200-2299","slug":"/2200-2299/minimum-lines-to-represent-a-line-chart-medium","permalink":"/solutions/2200-2299/minimum-lines-to-represent-a-line-chart-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2280-minimum-lines-to-represent-a-line-chart-medium.md","tags":[],"version":"current","sidebarPosition":2280,"frontMatter":{"description":"Author: @wingkwong | https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart"},"sidebar":"tutorialSidebar","previous":{"title":"2279 - Maximum Bags With Full Capacity of Rocks (Medium)","permalink":"/solutions/2200-2299/maximum-bags-with-full-capacity-of-rock-medium"},"next":{"title":"2300 - 2399","permalink":"/solutions/category/2300---2399"}}');var i=n(74848),l=n(28453);const r={description:"Author: @wingkwong | https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart"},m="2280 - Minimum Lines to Represent a Line Chart (Medium)",t={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Greedy",id:"approach-1-greedy",level:2}];function h(s){const e={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,l.R)(),...s.components},{SolutionAuthor:n}=e;return n||function(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"2280---minimum-lines-to-represent-a-line-chart-medium",children:"2280 - Minimum Lines to Represent a Line Chart (Medium)"})}),"\n",(0,i.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart",children:"https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart"})}),"\n",(0,i.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsx)(e.p,{children:"You are given a 2D integer array stockPrices where stockPrices[i] = [dayi, pricei] indicates the price of the stock on day dayi is pricei. A line chart is created from the array by plotting the points on an XY plane with the X-axis representing the day and the Y-axis representing the price and connecting adjacent points. One such example is shown below:"}),"\n",(0,i.jsx)(e.p,{children:"Return the minimum number of lines needed to represent the line chart."}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Input: stockPrices = [[1,7],[2,6],[3,5],[4,4],[5,4],[6,3],[7,2],[8,1]]\nOutput: 3\nExplanation:\nThe diagram above represents the input, with the X-axis representing the day and Y-axis representing the price.\nThe following 3 lines can be drawn to represent the line chart:\n- Line 1 (in red) from (1,7) to (4,4) passing through (1,7), (2,6), (3,5), and (4,4).\n- Line 2 (in blue) from (4,4) to (5,4).\n- Line 3 (in green) from (5,4) to (8,1) passing through (5,4), (6,3), (7,2), and (8,1).\nIt can be shown that it is not possible to represent the line chart using less than 3 lines.\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Input: stockPrices = [[3,4],[1,2],[7,8],[2,3]]\nOutput: 1\nExplanation:\nAs shown in the diagram above, the line chart can be represented with a single line.\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mn,{children:"1"}),(0,i.jsx)(e.mo,{children:"<"}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mi,{children:"t"}),(0,i.jsx)(e.mi,{children:"o"}),(0,i.jsx)(e.mi,{children:"c"}),(0,i.jsx)(e.mi,{children:"k"}),(0,i.jsx)(e.mi,{children:"P"}),(0,i.jsx)(e.mi,{children:"r"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"c"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,i.jsx)(e.mi,{children:"l"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{children:"g"}),(0,i.jsx)(e.mi,{children:"t"}),(0,i.jsx)(e.mi,{children:"h"}),(0,i.jsx)(e.mo,{children:"<"}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsx)(e.mn,{children:"1"}),(0,i.jsxs)(e.msup,{children:[(0,i.jsx)(e.mn,{children:"0"}),(0,i.jsx)(e.mn,{children:"5"})]})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"1 <= stockPrices.length <= 10^5"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6835em",verticalAlign:"-0.0391em"}}),(0,i.jsx)(e.span,{className:"mord",children:"1"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"<="}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"oc"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"ces"}),(0,i.jsx)(e.span,{className:"mord",children:"."}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"<="}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,i.jsx)(e.span,{className:"mord",children:"1"}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord",children:"0"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsx)(e.span,{className:"vlist-t",children:(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,i.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:"5"})})]})})})})})]})]})]})]})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mi,{children:"t"}),(0,i.jsx)(e.mi,{children:"o"}),(0,i.jsx)(e.mi,{children:"c"}),(0,i.jsx)(e.mi,{children:"k"}),(0,i.jsx)(e.mi,{children:"P"}),(0,i.jsx)(e.mi,{children:"r"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"c"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"["}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,i.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,i.jsx)(e.mi,{children:"l"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{children:"g"}),(0,i.jsx)(e.mi,{children:"t"}),(0,i.jsx)(e.mi,{children:"h"}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsx)(e.mn,{children:"2"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"stockPrices[i].length == 2"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"oc"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"ces"}),(0,i.jsx)(e.span,{className:"mopen",children:"["}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(e.span,{className:"mclose",children:"]"}),(0,i.jsx)(e.span,{className:"mord",children:"."}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"=="}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"2"})]})]})]})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mn,{children:"1"}),(0,i.jsx)(e.mo,{children:"<"}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsx)(e.mi,{children:"d"}),(0,i.jsx)(e.mi,{children:"a"}),(0,i.jsxs)(e.msub,{children:[(0,i.jsx)(e.mi,{children:"y"}),(0,i.jsx)(e.mi,{children:"i"})]}),(0,i.jsx)(e.mo,{separator:"true",children:","}),(0,i.jsx)(e.mi,{children:"p"}),(0,i.jsx)(e.mi,{children:"r"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"c"}),(0,i.jsxs)(e.msub,{children:[(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{children:"i"})]}),(0,i.jsx)(e.mo,{children:"<"}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsx)(e.mn,{children:"1"}),(0,i.jsxs)(e.msup,{children:[(0,i.jsx)(e.mn,{children:"0"}),(0,i.jsx)(e.mn,{children:"9"})]})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"1 <= day_i, price_i <= 10^9"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6835em",verticalAlign:"-0.0391em"}}),(0,i.jsx)(e.span,{className:"mord",children:"1"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"<="}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,i.jsx)(e.span,{})})})]})})]}),(0,i.jsx)(e.span,{className:"mpunct",children:","}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"c"}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,i.jsx)(e.span,{})})})]})})]}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"<="}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,i.jsx)(e.span,{className:"mord",children:"1"}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord",children:"0"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsx)(e.span,{className:"vlist-t",children:(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,i.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:"9"})})]})})})})})]})]})]})]})}),"\n",(0,i.jsx)(e.li,{children:"All day_i are distinct."}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"approach-1-greedy",children:"Approach 1: Greedy"}),"\n",(0,i.jsx)(n,{name:"@wingkwong"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int minimumLines(vector<vector<int>>& stockPrices) {\n        int n = stockPrices.size();\n        // one point = no line\n        if (n == 1) return 0;\n        // > 1 point means at least one line\n        long long ans = 1;\n        // sort it first as it doesn't mention it's sorted\n        // and we want to compare adjacent points\n        sort(stockPrices.begin(), stockPrices.end());\n        // slope = (y1 - y0) / (x1 - x0)\n        // a line is needed when the slope is different\n        // to check if the slope is same \n        // use integer multiplcation instead of float dvision to avoid precision problem\n        // hence, \n        // slope1 = (y1 - y0) / (x1 - x0)\n        // slope2 = (y2 - y1) / (x2 - x1)\n        // slope1 = slope2 \n        // (y1 - y0) / (x1 - x0) = (y2 - y1) / (x2 - x1)\n        // (y1 - y0) * (x2 - x1) = (y2 - y1) * (x1 - x0)\n\n        // the slope for the first line\n        long long prev_x = (stockPrices[1][0] - stockPrices[0][0]);\n        long long prev_y = (stockPrices[1][1] - stockPrices[0][1]);\n        for (int i = 1; i < n; i++) {\n            long long cur_x = (stockPrices[i][0] - stockPrices[i - 1][0]);\n            long long cur_y = (stockPrices[i][1] - stockPrices[i - 1][1]);\n            // different slope -> need a new line\n            if (cur_x * prev_y != cur_y * prev_x) {\n                ans += 1;\n            }\n            // update prev_x & prev_y\n            prev_x = cur_x;\n            prev_y = cur_y;\n        }\n        return ans;\n    }\n};\n"})})]})}function o(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,i.jsx)(e,{...s,children:(0,i.jsx)(h,{...s})}):h(s)}},28453:(s,e,n)=>{n.d(e,{R:()=>r,x:()=>m});var a=n(96540);const i={},l=a.createContext(i);function r(s){const e=a.useContext(l);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function m(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:r(s.components),a.createElement(l.Provider,{value:e},s.children)}}}]);