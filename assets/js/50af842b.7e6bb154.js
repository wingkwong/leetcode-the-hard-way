"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[64265],{58318:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>m});const a=JSON.parse('{"id":"0100-0199/best-time-to-buy-and-sell-stock-easy","title":"0121 - Best Time to Buy and Sell Stock (Easy)","description":"Author: @jeremiaaxel, @ColeB2, @radojicic23 | https://leetcode.com/problems/best-time-to-buy-and-sell-stock/","source":"@site/solutions/0100-0199/0121-best-time-to-buy-and-sell-stock-easy.md","sourceDirName":"0100-0199","slug":"/0100-0199/best-time-to-buy-and-sell-stock-easy","permalink":"/solutions/0100-0199/best-time-to-buy-and-sell-stock-easy","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0121-best-time-to-buy-and-sell-stock-easy.md","tags":[],"version":"current","sidebarPosition":121,"frontMatter":{"description":"Author: @jeremiaaxel, @ColeB2, @radojicic23 | https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"},"sidebar":"tutorialSidebar","previous":{"title":"0118 - Pascal\'s Triangle (Easy)","permalink":"/solutions/0100-0199/pascals-triangle-easy"},"next":{"title":"0124 - Binary Tree Maximum Path Sum (Hard)","permalink":"/solutions/0100-0199/binary-tree-maximum-path-sum-hard"}}');var i=n(74848),r=n(28453);const t={description:"Author: @jeremiaaxel, @ColeB2, @radojicic23 | https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"},l="0121 - Best Time to Buy and Sell Stock (Easy)",c={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1 : Linear Iteration",id:"approach-1--linear-iteration",level:2},{value:"Time Complexity",id:"time-complexity",level:4},{value:"Space Complexity",id:"space-complexity",level:4}];function o(e){const s={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{SolutionAuthor:n,TabItem:a,Tabs:t}=s;return n||d("SolutionAuthor",!0),a||d("TabItem",!0),t||d("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"0121---best-time-to-buy-and-sell-stock-easy",children:"0121 - Best Time to Buy and Sell Stock (Easy)"})}),"\n",(0,i.jsx)(s.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",children:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"})}),"\n",(0,i.jsx)(s.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(s.p,{children:["You are given an array ",(0,i.jsx)(s.code,{children:"prices"})," where ",(0,i.jsx)(s.code,{children:"prices[i]"})," is the price of a given stock on the ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsxs)(s.msup,{children:[(0,i.jsx)(s.mi,{children:"i"}),(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"t"}),(0,i.jsx)(s.mi,{children:"h"})]})]})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"i^{th}"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.8491em"}}),(0,i.jsxs)(s.span,{className:"mord",children:[(0,i.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(s.span,{className:"msupsub",children:(0,i.jsx)(s.span,{className:"vlist-t",children:(0,i.jsx)(s.span,{className:"vlist-r",children:(0,i.jsx)(s.span,{className:"vlist",style:{height:"0.8491em"},children:(0,i.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsxs)(s.span,{className:"mord mtight",children:[(0,i.jsx)(s.span,{className:"mord mathnormal mtight",children:"t"}),(0,i.jsx)(s.span,{className:"mord mathnormal mtight",children:"h"})]})})]})})})})})]})]})})]})," day."]}),"\n",(0,i.jsxs)(s.p,{children:["You want to maximize your profit by choosing a ",(0,i.jsx)(s.strong,{children:"single"})," day to buy one stock and choosing a ",(0,i.jsx)(s.strong,{children:"different day in the future"})," to sell that stock."]}),"\n",(0,i.jsxs)(s.p,{children:["Return ",(0,i.jsx)(s.em,{children:"the maximum profit you can achieve from this transaction"}),". If you cannot achieve any profit, return ",(0,i.jsx)(s.code,{children:"0"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"Input: prices = [7,1,5,3,6,4]\nOutput: 5\nExplanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.\nNote that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"Input: prices = [7,6,4,3,1]\nOutput: 0\nExplanation: In this case, no transactions are done and the max profit = 0.\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"1 <= prices.length <= 10 ^ 5"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"0 <= prices[i] <= 10 ^ 4"})}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"approach-1--linear-iteration",children:"Approach 1 : Linear Iteration"}),"\n",(0,i.jsxs)(s.p,{children:["We are going to iterate through the ",(0,i.jsx)(s.code,{children:"prices"})," array."]}),"\n",(0,i.jsxs)(s.p,{children:["In this example, we use ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"b"}),(0,i.jsx)(s.mi,{children:"u"}),(0,i.jsx)(s.mi,{children:"y"}),(0,i.jsx)(s.mi,{children:"P"}),(0,i.jsx)(s.mi,{children:"r"}),(0,i.jsx)(s.mi,{children:"i"}),(0,i.jsx)(s.mi,{children:"c"}),(0,i.jsx)(s.mi,{children:"e"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"buyPrice"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"b"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"ce"})]})})]})," variable to store the minimum price so far and ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"c"}),(0,i.jsx)(s.mi,{children:"u"}),(0,i.jsx)(s.mi,{children:"r"}),(0,i.jsx)(s.mi,{children:"r"}),(0,i.jsx)(s.mi,{children:"e"}),(0,i.jsx)(s.mi,{children:"n"}),(0,i.jsx)(s.mi,{children:"t"}),(0,i.jsx)(s.mi,{children:"M"}),(0,i.jsx)(s.mi,{children:"a"}),(0,i.jsx)(s.mi,{children:"x"}),(0,i.jsx)(s.mi,{children:"P"}),(0,i.jsx)(s.mi,{children:"r"}),(0,i.jsx)(s.mi,{children:"o"}),(0,i.jsx)(s.mi,{children:"f"}),(0,i.jsx)(s.mi,{children:"i"}),(0,i.jsx)(s.mi,{children:"t"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"currentMaxProfit"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"c"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"rre"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"tM"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"ro"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"t"})]})})]})," variable to store the maximum profit so far."]}),"\n",(0,i.jsxs)(s.p,{children:["While finding the minimum value of price as the ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"b"}),(0,i.jsx)(s.mi,{children:"u"}),(0,i.jsx)(s.mi,{children:"y"}),(0,i.jsx)(s.mi,{children:"P"}),(0,i.jsx)(s.mi,{children:"r"}),(0,i.jsx)(s.mi,{children:"i"}),(0,i.jsx)(s.mi,{children:"c"}),(0,i.jsx)(s.mi,{children:"e"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"buyPrice"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"b"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"ce"})]})})]}),". We are going to check on each day's profit and save the maximum profit as the ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"c"}),(0,i.jsx)(s.mi,{children:"u"}),(0,i.jsx)(s.mi,{children:"r"}),(0,i.jsx)(s.mi,{children:"r"}),(0,i.jsx)(s.mi,{children:"e"}),(0,i.jsx)(s.mi,{children:"n"}),(0,i.jsx)(s.mi,{children:"t"}),(0,i.jsx)(s.mi,{children:"M"}),(0,i.jsx)(s.mi,{children:"a"}),(0,i.jsx)(s.mi,{children:"x"}),(0,i.jsx)(s.mi,{children:"P"}),(0,i.jsx)(s.mi,{children:"r"}),(0,i.jsx)(s.mi,{children:"o"}),(0,i.jsx)(s.mi,{children:"f"}),(0,i.jsx)(s.mi,{children:"i"}),(0,i.jsx)(s.mi,{children:"t"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"currentMaxProfit"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"c"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"rre"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"tM"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"ro"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"t"})]})})]}),". Since we could only sell after we buy the stock, we don't have to check back the previous days' profits."]}),"\n",(0,i.jsxs)(s.p,{children:["Solving this in linear time is also known as ",(0,i.jsx)(s.strong,{children:"Kadane's algorithm."})]}),"\n",(0,i.jsx)(s.h4,{id:"time-complexity",children:"Time Complexity"}),"\n",(0,i.jsxs)(s.p,{children:["The time complexity for this solution is ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"O"}),(0,i.jsx)(s.mo,{stretchy:"false",children:"("}),(0,i.jsx)(s.mi,{children:"n"}),(0,i.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(s.span,{className:"mopen",children:"("}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(s.span,{className:"mclose",children:")"})]})})]}),", where ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"n"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"n"})]})})]})," is the length of the ",(0,i.jsx)(s.code,{children:"prices"})," array."]}),"\n",(0,i.jsx)(s.h4,{id:"space-complexity",children:"Space Complexity"}),"\n",(0,i.jsxs)(s.p,{children:["The space complexity is ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"O"}),(0,i.jsx)(s.mo,{stretchy:"false",children:"("}),(0,i.jsx)(s.mn,{children:"1"}),(0,i.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(s.span,{className:"mopen",children:"("}),(0,i.jsx)(s.span,{className:"mord",children:"1"}),(0,i.jsx)(s.span,{className:"mclose",children:")"})]})})]})," since we only use a constant amount of space."]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsxs)(a,{value:"java",label:"Java",children:[(0,i.jsx)(n,{name:"@jeremiaaxel"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-java",children:"class Solution {\n    public int maxProfit(int[] prices) {\n        /* Initialize buy price with the highest amount of value \n        and the current maximum profit with zero */\n        int buyPrice = Integer.MAX_VALUE;\n        int currentMaxProfit = 0;\n        \n        for (int price : prices) {\n            /* if a price is smaller than the current buy price, update the buy price, \n            and continue to the next loop since it is obviously zero profit. */\n            if (price < buyPrice) {\n                buyPrice = price;\n                continue;\n            }\n            /* check if the profit from current price is bigger than the current max profit, \n            and update accordingly. */\n            int profit = price - buyPrice;\n            if (profit > currentMaxProfit) {\n                currentMaxProfit = profit;\n            }\n        }\n        \n        return currentMaxProfit;\n    }\n}\n"})})]}),(0,i.jsxs)(a,{value:"python",label:"Python",children:[(0,i.jsx)(n,{name:"@ColeB2"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-py",children:'class Solution:\n    def maxProfit(self, prices: List[int]) -> int:\n        # initialize buy_price as first price in prices, and a max_profit of 0.\n        buy_price = prices[0]\n        max_profit = 0\n        # iterate through all prices.\n        # note we start at 1, as we already "bought" the first stock.\n        for i in range(1, len(prices)):\n            # get current price we are looking at.\n            cur_price = prices[i]\n            # calculate current profit, by subtracting our buy price from our current price.\n            cur_profit = cur_price - buy_price\n            # update our max profit, using max profit, and current profit we calculated.\n            max_profit = max(max_profit, cur_profit)\n            # update the price to be the minimum of the price we bought at, and current price.\n            buy_price = min(buy_price, cur_price)\n        # return our answer.\n        return max_profit\n'})})]}),(0,i.jsxs)(a,{value:"js",label:"JavaScript",children:[(0,i.jsx)(n,{name:"@radojicic23"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"/**\n * @param {number[]} prices\n * @return {number}\n */\nvar maxProfit = function(prices) {\n    let buyPrice = prices[0];\n    let maxProfit = 0;\n    for (let i = 1; i < prices.length; i++) {\n        let currPrice = prices[i];\n        let currProfit = currPrice - buyPrice;\n        maxProfit = Math.max(maxProfit, currProfit);\n        buyPrice = Math.min(buyPrice, currPrice);\n    }\n    return maxProfit;\n};\n"})})]}),(0,i.jsxs)(a,{value:"cpp",label:"C++",children:[(0,i.jsx)(n,{name:"@radojicic23"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        int buyPrice = prices[0];\n        int maxProfit = 0;\n        for (int i = 1; i < prices.size(); i++) {\n            int currPrice = prices[i];\n            int currProfit = currPrice - buyPrice;\n            maxProfit = max(maxProfit, currProfit);\n            buyPrice = min(buyPrice, currPrice);\n        }\n        return maxProfit;\n    }\n};\n"})})]})]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}function d(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>l});var a=n(96540);const i={},r=a.createContext(i);function t(e){const s=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);