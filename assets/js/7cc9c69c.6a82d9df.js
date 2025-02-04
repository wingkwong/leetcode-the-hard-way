"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[92246],{51438:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"1400-1499/final-prices-with-a-special-discount-in-a-shop-easy","title":"1475 - Final Prices With a Special Discount in a Shop (Easy)","description":"Author: @heiheihang | https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/","source":"@site/solutions/1400-1499/1475-final-prices-with-a-special-discount-in-a-shop-easy.md","sourceDirName":"1400-1499","slug":"/1400-1499/final-prices-with-a-special-discount-in-a-shop-easy","permalink":"/solutions/1400-1499/final-prices-with-a-special-discount-in-a-shop-easy","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1400-1499/1475-final-prices-with-a-special-discount-in-a-shop-easy.md","tags":[],"version":"current","sidebarPosition":1475,"frontMatter":{"description":"Author: @heiheihang | https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/"},"sidebar":"tutorialSidebar","previous":{"title":"1470 - Shuffle the Array (Easy)","permalink":"/solutions/1400-1499/shuffle-the-array-easy"},"next":{"title":"1480 - Running Sum of 1d Array (Easy)","permalink":"/solutions/1400-1499/running-sum-of-1d-array-easy"}}');var s=n(86070),r=n(32790);const c={description:"Author: @heiheihang | https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/"},o="1475 - Final Prices With a Special Discount in a Shop (Easy)",a={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Stack",id:"approach-1-stack",level:2}];function h(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{SolutionAuthor:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"1475---final-prices-with-a-special-discount-in-a-shop-easy",children:"1475 - Final Prices With a Special Discount in a Shop (Easy)"})}),"\n",(0,s.jsx)(i.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/",children:"https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/"})}),"\n",(0,s.jsx)(i.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(i.p,{children:["Given the array ",(0,s.jsx)(i.code,{children:"prices"})," where ",(0,s.jsx)(i.code,{children:"prices[i]"})," is the price of the ",(0,s.jsx)(i.code,{children:"ith"})," item in a shop. There is a special discount for items in the shop, if you buy the ",(0,s.jsx)(i.code,{children:"ith"})," item, then you will receive a discount equivalent to ",(0,s.jsx)(i.code,{children:"prices[j]"})," where ",(0,s.jsx)(i.code,{children:"j"})," is the ",(0,s.jsx)(i.strong,{children:"minimum"})," index such that ",(0,s.jsx)(i.code,{children:"j > i"})," and ",(0,s.jsx)(i.code,{children:"prices[j] <= prices[i]"}),", otherwise, you will not receive any discount at all."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsxs)(i.em,{children:["Return an array where the ",(0,s.jsx)(i.code,{children:"ith"})," element is the final price you will pay for the ",(0,s.jsx)(i.code,{children:"ith"})," item of the shop considering the special discount."]})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"Input: prices = [8,4,6,2,3]\nOutput: [4,2,4,2,3]\nExplanation:\nFor item 0 with price[0]=8 you will receive a discount equivalent to prices[1]=4, therefore, the final price you will pay is 8 - 4 = 4.\nFor item 1 with price[1]=4 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 4 - 2 = 2.\nFor item 2 with price[2]=6 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 6 - 2 = 4.\nFor items 3 and 4 you will not receive any discount at all.\n"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"Input: prices = [1,2,3,4,5]\nOutput: [1,2,3,4,5]\nExplanation: In this case, for all items, you will not receive any discount at all.\n"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Example 3:"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"Input: prices = [10,1,1,6]\nOutput: [9,0,1,6]\n"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"1 <= prices.length <= 500"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"1 <= prices[i] <= 10^3"})}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"approach-1-stack",children:"Approach 1: Stack"}),"\n",(0,s.jsxs)(i.p,{children:["We first initialize the ",(0,s.jsx)(i.code,{children:"result"})," list to be a copy of ",(0,s.jsx)(i.code,{children:"prices"}),". The reason of choosing to copy ",(0,s.jsx)(i.code,{children:"prices"})," is that it is convenient to not change anything if an item does not have a discount."]}),"\n",(0,s.jsxs)(i.p,{children:["Then we initalize a stack and iterate ",(0,s.jsx)(i.code,{children:"prices"}),". If the last element of the stack if greater than or equal to the ",(0,s.jsx)(i.code,{children:"current_price"})," , we have found a discount for the last element of the stack. We calculate the discounted price, and put it in the result array (its index is stored as the second element). We ",(0,s.jsx)(i.code,{children:"pop"})," that element from the ",(0,s.jsx)(i.code,{children:"stack"}),"."]}),"\n",(0,s.jsx)(i.p,{children:"We then add the new item to the stack with its value and its index."}),"\n",(0,s.jsx)(n,{name:"@heiheihang"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-python",children:"def finalPrices(self, prices: List[int]) -> List[int]:\n\n        #initialize the result list to be a copy of prices\n        result = prices.copy()\n\n        #initialize stack\n        stack = []\n\n        #iterate prices\n        for i in range(len(prices)):\n\n            #declare current_price\n            current_price = prices[i]\n\n            #identify the prices that have not found a discount yet\n            while(stack and stack[-1][0] >= current_price):\n\n                #get the item's index\n                item_index = stack[-1][1]\n\n                #set its discounted price\n                result[item_index] = stack[-1][0] - current_price\n\n                #remove the item as it has found a discount\n                stack.pop()\n\n            #add the current item to the stack\n            stack.append([current_price, i])\n\n        #return result\n        return result\n"})})]})}function d(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},32790:(e,i,n)=>{n.d(i,{R:()=>c,x:()=>o});var t=n(30758);const s={},r=t.createContext(s);function c(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);