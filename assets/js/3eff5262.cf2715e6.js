"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[34258],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89351:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={description:"Author: @ColeB2 | https://leetcode.com/problems/daily-temperatures/",tags:["Array","Stack","Monotonic Stack"]},i="0739 - Daily Temperatures",p={unversionedId:"0700-0799/daily-temperatures-medium",id:"0700-0799/daily-temperatures-medium",title:"0739 - Daily Temperatures",description:"Author: @ColeB2 | https://leetcode.com/problems/daily-temperatures/",source:"@site/solutions/0700-0799/0739-daily-temperatures-medium.md",sourceDirName:"0700-0799",slug:"/0700-0799/daily-temperatures-medium",permalink:"/solutions/0700-0799/daily-temperatures-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0700-0799/0739-daily-temperatures-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Stack",permalink:"/solutions/tags/stack"},{label:"Monotonic Stack",permalink:"/solutions/tags/monotonic-stack"}],version:"current",sidebarPosition:739,frontMatter:{description:"Author: @ColeB2 | https://leetcode.com/problems/daily-temperatures/",tags:["Array","Stack","Monotonic Stack"]},sidebar:"tutorialSidebar",previous:{title:"0733 - Flood Fill (Easy)",permalink:"/solutions/0700-0799/flood-fill-easy"},next:{title:"0740 - Delete and Earn (Medium)",permalink:"/solutions/0700-0799/delete-and-earn-medium"}},l={},s=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Monotonic Stack",id:"approach-1-monotonic-stack",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=u("Tabs"),c=u("TabItem"),d=u("SolutionAuthor"),h={toc:s},k="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(k,(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0739---daily-temperatures"},"0739 - Daily Temperatures"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/daily-temperatures/"},"https://leetcode.com/problems/daily-temperatures/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Given an array of integers ",(0,a.kt)("inlineCode",{parentName:"p"},"temperatures")," represents the daily temperatures, ",(0,a.kt)("em",{parentName:"p"},"return an array")," ",(0,a.kt)("inlineCode",{parentName:"p"},"answer")," ",(0,a.kt)("em",{parentName:"p"},"such that")," ",(0,a.kt)("inlineCode",{parentName:"p"},"answer[i]")," ",(0,a.kt)("em",{parentName:"p"},"is the number of days you have to wait after the")," ",(0,a.kt)("inlineCode",{parentName:"p"},"ith")," ",(0,a.kt)("em",{parentName:"p"},"day to get a warmer temperature"),". If there is no future day for which this is possible, keep ",(0,a.kt)("inlineCode",{parentName:"p"},"answer[i] == 0")," instead."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: temperatures = [73,74,75,71,69,72,76,73]\nOutput: [1,1,4,2,1,1,0,0]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: temperatures = [30,40,50,60]\nOutput: [1,1,1,0]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 3:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: temperatures = [30,60,90]\nOutput: [1,1,0]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= temperatures.length <= 10^5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"30 <= temperatures[i] <= 100"))),(0,a.kt)("h2",{id:"approach-1-monotonic-stack"},"Approach 1: Monotonic Stack"),(0,a.kt)("p",null,"To solve this problem, we will use a Monotonic Decreasing Stack. That is a stack, where all the values inside the stack, are ordered from largest, to smallest. Meaning, we only add to the stack when the stack is either:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Empty, or"),(0,a.kt)("li",{parentName:"ol"},"If the incoming value is smaller or equal to the value on top of the stack. ")),(0,a.kt)("p",null,"That means that if any incoming value is larger, we must pop values off the top of the stack, until it satisfies rules 1 or 2 before we can add it to our stack."),(0,a.kt)("p",null,"It is during the popping phase, that we will do the majority of our work in solving our problem. By also adding the indexes with the temperature to the stack, we know where they exist in our output array, and can also use the indexes to gauge the relative distance in terms of days from other temperatures. So while popping them, we can calculate the incoming index, ",(0,a.kt)("inlineCode",{parentName:"p"},"i")," minus the popped items index, ",(0,a.kt)("inlineCode",{parentName:"p"},"i2")," and overwrite the values in our output array at ",(0,a.kt)("inlineCode",{parentName:"p"},"i2")," with the difference, that is ",(0,a.kt)("inlineCode",{parentName:"p"},"i-i2"),"."),(0,a.kt)("p",null,"Time Complexity: $$O(n)$$ where n is the length of the input, temperatures."),(0,a.kt)("p",null,"Space Complexity: $$O(n)$$ which will be the size of our output array, and our stack in the worst case."),(0,a.kt)(m,{mdxType:"Tabs"},(0,a.kt)(c,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)(d,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:\n        # Here we will utilize a monotonic decreasing stack, meaning everything\n        # in the stack will be ordered from 'hottest' to 'coldest', and any \n        # incoming element, 'warmer' than the top of the stack, will force us\n        # to remove the 'colder' days from the top of our stack, and calculate\n        # the difference in how many days apart they were for our output array.\n        # Initialize output array of 0's the size of temperatures array. We use\n        # 0's as default, as if we don't find a warmer day going forward, we are\n        # to return 0 in that position instead.\n        output = [0] * len(temperatures)\n        stack = []\n        # Loop through temperatures, tracking index, i and temperature, temp.\n        for i, temp in enumerate(temperatures):\n            # While the incoming temperature is 'warmer' than the temperature on \n            # top of the stack: We can start popping.\n            # Note our stack values are formatted with tuples in the form:\n            # (index, temperature).\n            while stack and stack[-1][1] < temp:\n                # Pop temperature, tracking its index in temperatures, i2 and\n                # the temperature itself.\n                i2, temp2 = stack.pop()\n                # Add to out output at the index of the popped value, the\n                # difference of the current temperature index, minus popped\n                # value difference. This will be the number of days in between\n                # them.\n                output[i2] = i-i2\n            # Once the top of the stack is either empty or no longer has days\n            # colder than the incoming temperature, we can add our temperature\n            # to the stack.\n            # Again note that we are tracking index, i, and temperature, temp\n            # inside our stack.\n            stack.append((i, temp))\n        # return our output.\n        return output\n")))))}f.isMDXComponent=!0}}]);