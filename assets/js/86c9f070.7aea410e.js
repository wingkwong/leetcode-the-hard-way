"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[93492],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(n),u=i,m=c["".concat(s,".").concat(u)]||c[u]||h[u]||r;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:i,o[1]=p;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},90188:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const r={description:"Author: @SkollRyu | https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/"},o="1011 - Capacity to Ship Packages within d days (Medium)",p={unversionedId:"1000-1099/capacity-to-ship-packages-within-d-days-medium",id:"1000-1099/capacity-to-ship-packages-within-d-days-medium",title:"1011 - Capacity to Ship Packages within d days (Medium)",description:"Author: @SkollRyu | https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",source:"@site/solutions/1000-1099/1011-capacity-to-ship-packages-within-d-days-medium.md",sourceDirName:"1000-1099",slug:"/1000-1099/capacity-to-ship-packages-within-d-days-medium",permalink:"/solutions/1000-1099/capacity-to-ship-packages-within-d-days-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1000-1099/1011-capacity-to-ship-packages-within-d-days-medium.md",tags:[],version:"current",sidebarPosition:1011,frontMatter:{description:"Author: @SkollRyu | https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/"},sidebar:"tutorialSidebar",previous:{title:"1004 - Max Consecutive Ones III (Medium)",permalink:"/solutions/1000-1099/max-consecutive-ones-iii-medium"},next:{title:"1019 - Next Greater Node In Linked List (Medium)",permalink:"/solutions/1000-1099/next-greater-node-in-linked-list"}},s={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Binary Seach",id:"approach-1-binary-seach",level:2}],d=(c="SolutionAuthor",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var c;const h={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1011---capacity-to-ship-packages-within-d-days-medium"},"1011 - Capacity to Ship Packages within d days (Medium)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/"},"https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"A conveyor belt has packages that must be shipped from one port to another within ",(0,i.kt)("inlineCode",{parentName:"p"},"days")," days."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ith")," package on the conveyor belt has a weight of ",(0,i.kt)("inlineCode",{parentName:"p"},"weights[i]"),". Each day, we load the ship with packages on the conveyor belt (in the order given by ",(0,i.kt)("inlineCode",{parentName:"p"},"weights"),"). We may not load more weight than the maximum weight capacity of the ship."),(0,i.kt)("p",null,"Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within ",(0,i.kt)("inlineCode",{parentName:"p"},"days")," days."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: weights = [1,2,3,4,5,6,7,8,9,10], days = 5\nOutput: 15\nExplanation: A ship capacity of 15 is the minimum to ship all the packages in 5 days like this:\n1st day: 1, 2, 3, 4, 5\n2nd day: 6, 7\n3rd day: 8\n4th day: 9\n5th day: 10\n\nNote that the cargo must be shipped in the order given, so using a ship of capacity 14 and splitting the packages into parts like (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) is not allowed.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: weights = [3,2,2,4,1,4], days = 3\nOutput: 6\nExplanation: A ship capacity of 6 is the minimum to ship all the packages in 3 days like this:\n1st day: 3, 2\n2nd day: 2, 4\n3rd day: 1, 4\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 3:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: weights = [1,2,3,1,1], days = 4\nOutput: 3\nExplanation:\n1st day: 1\n2nd day: 2\n3rd day: 3\n4th day: 1, 1\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= days <= weights.length <= 5 * 10^4")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= weights[i] <= 500"))),(0,i.kt)("h2",{id:"approach-1-binary-seach"},"Approach 1: Binary Seach"),(0,i.kt)("admonition",{title:"Prerequisite",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../tutorials/graph-theory/binary-tree"},"Binary Tree")))),(0,i.kt)("p",null,"We set the boundary from the largest package weight to the sum of the packages' weights. In each round, we try the middle value (ship capacity) $$m = l + ((r - l) / 2)$$ with the function $$count_days$$. This helper function helps us to count how many days are needed to ship packages with specific capacity (middle value). If the ",(0,i.kt)("inlineCode",{parentName:"p"},"days_needed")," is less than ",(0,i.kt)("inlineCode",{parentName:"p"},"days"),", it means the ship capacity is too large and we need to reduce it, then move the right pointer to $$m$$, else move the left pointer to $$m + 1$$. At the end, the index would be $$l$$."),(0,i.kt)(d,{name:"@SkollRyu",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def shipWithinDays(self, weights: List[int], days: int) -> int:\n        def count_days(target_cap):\n            curr = 0\n            days_needed = 1\n            # day starts from 1st\n            \n            for weight in weights:\n                if weight + curr > target_cap:\n                    days_needed += 1\n                    curr = 0\n                curr += weight\n            \n            return days_needed\n            \n        l = max(weights)     \n        r = sum(weights)\n        # if days = 1, the capacity needed is the sum of weights\n        \n        while l < r:\n            mid  = l + ((r-l) // 2)\n            days_needed = count_days(mid)\n            if days_needed <= days:\n                # it means the capacity is too large\n                # so we finish the shipping too eailer\n                r = mid\n            else:\n                l = mid + 1\n        \n        return l\n")))}m.isMDXComponent=!0}}]);