"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[4183],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),c=s(n),h=a,d=c["".concat(l,".").concat(h)]||c[h]||p[h]||o;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},98868:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],u={description:"Author: @heiheihang | https://leetcode.com/problems/minimum-operations-to-halve-array-sum/"},l="2208 -  Minimum Operations to Halve Array Sum (Medium)",s={unversionedId:"2200-2299/Minimum-Operations-to-Halve-Array-Sum",id:"2200-2299/Minimum-Operations-to-Halve-Array-Sum",title:"2208 -  Minimum Operations to Halve Array Sum (Medium)",description:"Author: @heiheihang | https://leetcode.com/problems/minimum-operations-to-halve-array-sum/",source:"@site/solutions/2200-2299/2208-Minimum-Operations-to-Halve-Array-Sum.md",sourceDirName:"2200-2299",slug:"/2200-2299/Minimum-Operations-to-Halve-Array-Sum",permalink:"/leetcode-the-hard-way/solutions/2200-2299/Minimum-Operations-to-Halve-Array-Sum",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2200-2299/2208-Minimum-Operations-to-Halve-Array-Sum.md",tags:[],version:"current",sidebarPosition:2208,frontMatter:{description:"Author: @heiheihang | https://leetcode.com/problems/minimum-operations-to-halve-array-sum/"},sidebar:"tutorialSidebar",previous:{title:"2200 - 2299",permalink:"/leetcode-the-hard-way/solutions/category/2200---2299"},next:{title:"2223 - Sum of Scores of Built Strings (Hard)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/sum-of-scores-of-built-strings-hard"}},m={},p=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Max Heap",id:"approach-1-max-heap",level:2}],c={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2208----minimum-operations-to-halve-array-sum-medium"},"2208 -  Minimum Operations to Halve Array Sum (Medium)"),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"You are given an array nums of positive integers. In one operation, you can choose any number from nums and reduce it to exactly half the number. (Note that you may choose this reduced number in future operations.)"),(0,o.kt)("p",null,"Return the minimum number of operations to reduce the sum of nums by at least half."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [5,19,8,1]\nOutput: 3\nExplanation: The initial sum of nums is equal to 5 + 19 + 8 + 1 = 33.\nThe following is one of the ways to reduce the sum by at least half:\nPick the number 19 and reduce it to 9.5.\nPick the number 9.5 and reduce it to 4.75.\nPick the number 8 and reduce it to 4.\nThe final array is [5, 4.75, 4, 1] with a total sum of 5 + 4.75 + 4 + 1 = 14.75. \nThe sum of nums has been reduced by 33 - 14.75 = 18.25, which is at least half of the initial sum, 18.25 >= 33/2 = 16.5.\nOverall, 3 operations were used so we return 3.\nIt can be shown that we cannot reduce the sum by at least half in less than 3 operations.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [3,8,20]\nOutput: 3\nExplanation: The initial sum of nums is equal to 3 + 8 + 20 = 31.\nThe following is one of the ways to reduce the sum by at least half:\nPick the number 20 and reduce it to 10.\nPick the number 10 and reduce it to 5.\nPick the number 3 and reduce it to 1.5.\nThe final array is [1.5, 8, 5] with a total sum of 1.5 + 8 + 5 = 14.5. \nThe sum of nums has been reduced by 31 - 14.5 = 16.5, which is at least half of the initial sum, 16.5 >= 31/2 = 16.5.\nOverall, 3 operations were used so we return 3.\nIt can be shown that we cannot reduce the sum by at least half in less than 3 operations.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 105")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= nums[i] <= 107"))),(0,o.kt)("h2",{id:"approach-1-max-heap"},"Approach 1: Max Heap"),(0,o.kt)("p",null,"We can keep track of the current largest number, and perform the division on the largest number while keeping track of the sum"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def halveArray(self, nums: List[int]) -> int:\n        s = sum(nums)\n        \n        target = s / 2\n        h = []\n        \n        for n in nums:\n            heappush(h, -n)\n            \n        val = s\n        res = 0\n        while(val > target):\n            res += 1\n            top = -(h[0] / 2)\n            val -= top\n            heappop(h)\n            heappush(h, - top)\n\n        return res\n")))}h.isMDXComponent=!0}}]);