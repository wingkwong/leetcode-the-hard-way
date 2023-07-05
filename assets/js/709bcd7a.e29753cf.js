"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[30439],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,b=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return n?r.createElement(b,i(i({ref:t},l),{},{components:n})):r.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var m={};for(var c in t)hasOwnProperty.call(t,c)&&(m[c]=t[c]);m.originalType=e,m[p]="string"==typeof e?e:a,i[1]=m;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79963:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>m,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={description:"Author: @hirotake111 | https://leetcode.com/problems/maximum-ice-cream-bars/"},i="1833 - Maximum Ice Cream Bars (Medium)",m={unversionedId:"1800-1899/maximum-ice-cream-bars-medium",id:"1800-1899/maximum-ice-cream-bars-medium",title:"1833 - Maximum Ice Cream Bars (Medium)",description:"Author: @hirotake111 | https://leetcode.com/problems/maximum-ice-cream-bars/",source:"@site/solutions/1800-1899/1833-maximum-ice-cream-bars-medium.md",sourceDirName:"1800-1899",slug:"/1800-1899/maximum-ice-cream-bars-medium",permalink:"/solutions/1800-1899/maximum-ice-cream-bars-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1800-1899/1833-maximum-ice-cream-bars-medium.md",tags:[],version:"current",sidebarPosition:1833,frontMatter:{description:"Author: @hirotake111 | https://leetcode.com/problems/maximum-ice-cream-bars/"},sidebar:"tutorialSidebar",previous:{title:"1822 - Sign of the Product of an Array (Easy)",permalink:"/solutions/1800-1899/sign-of-the-product-of-an-array-easy"},next:{title:"1851 - Minimum Interval to Include Each Query",permalink:"/solutions/1800-1899/minimum-interval-to-include-each-query-hard"}},c={},s=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Frequency",id:"approach-1-frequency",level:2}],l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},p=l("Tabs"),u=l("TabItem"),d=l("SolutionAuthor"),b={toc:s},y="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(y,(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1833---maximum-ice-cream-bars-medium"},"1833 - Maximum Ice Cream Bars (Medium)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/maximum-ice-cream-bars/"},"https://leetcode.com/problems/maximum-ice-cream-bars/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"It is a sweltering summer day, and a boy wants to buy some ice cream bars."),(0,a.kt)("p",null,"At the store, there are ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," ice cream bars. You are given an array ",(0,a.kt)("inlineCode",{parentName:"p"},"costs")," of length ",(0,a.kt)("inlineCode",{parentName:"p"},"n"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"costs[i]")," is the price of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ith")," ice cream bar in coins. The boy initially has ",(0,a.kt)("inlineCode",{parentName:"p"},"coins")," coins to spend, and he wants to buy as many ice cream bars as possible."),(0,a.kt)("p",null,"Return the maximum number of ice cream bars the boy can buy with ",(0,a.kt)("inlineCode",{parentName:"p"},"coins")," coins."),(0,a.kt)("p",null,"Note: The boy can buy the ice cream bars in any order."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: costs = [1,3,2,4,1], coins = 7\nOutput: 4\nExplanation: The boy can buy ice cream bars at indices 0,1,2,4 for a total price of 1 + 3 + 2 + 1 = 7.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: costs = [10,6,8,7,7,8], coins = 5\nOutput: 0\nExplanation: The boy cannot afford any of the ice cream bars.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 3:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: costs = [1,6,3,1,2,5], coins = 20\nOutput: 6\nExplanation: The boy can buy all the ice cream bars for a total price of 1 + 6 + 3 + 1 + 2 + 5 = 18.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"costs.length == n")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= n <= 10^5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= costs[i] <= 10^5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= coins <= 10^8"))),(0,a.kt)("h2",{id:"approach-1-frequency"},"Approach 1: Frequency"),(0,a.kt)("p",null,"Time Complexity: $O(n + m)$ ",(0,a.kt)("sub",null,"(where ",(0,a.kt)("inlineCode",{parentName:"p"},"n"),": length of costs, ",(0,a.kt)("inlineCode",{parentName:"p"},"m"),": maximum value among ",(0,a.kt)("inlineCode",{parentName:"p"},"costs"),")"),"\nSpace Complexity: $O(m)$ ",(0,a.kt)("sub",null,"(where ",(0,a.kt)("inlineCode",{parentName:"p"},"m"),": maximum value among ",(0,a.kt)("inlineCode",{parentName:"p"},"costs"),")")),(0,a.kt)(p,{mdxType:"Tabs"},(0,a.kt)(u,{value:"py",label:"Python",mdxType:"TabItem"},(0,a.kt)(d,{name:"@hirotake111",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def maxIceCream(self, costs: List[int], coins: int) -> int:\n        # Fill in the list of frequency\n        # Each index is cost of icecream - so the length must be max(costs) + 1\n        freq = [0] * (max(costs) + 1)\n        answer = 0\n\n        # Count each cost's frequency\n        for cost in costs:\n            freq[cost] += 1\n\n        for cost, amount in enumerate(freq):\n            # If frequency is 0, skip it\n            if freq[cost] == 0:\n                continue\n            # If cost * amount is less than coins,\n            # simply decrease the coins by cost * amount\n            if cost * amount <= coins:\n                coins -= cost * amount\n                answer += amount\n                continue\n            # At this point we can't buy amount * cost\n            # So coins // cost should be the amount of icecream we can buy\n            answer += coins // cost\n            # And don't forget to exit loop (as we can't buy icecreams anymore)\n            break\n\n        return answer\n")))))}f.isMDXComponent=!0}}]);