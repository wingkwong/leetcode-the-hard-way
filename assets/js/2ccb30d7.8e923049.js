"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[573],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),c=l(n),k=r,d=c["".concat(s,".").concat(k)]||c[k]||u[k]||o;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m.mdxType="string"==typeof e?e:r,i[1]=m;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},54892:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(8539),m=["components"],s={description:"Author: @wingkwong | https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts"},l="2357 - Make Array Zero by Subtracting Equal Amounts (Easy)",p={unversionedId:"2300-2399/make-array-zero-by-subtracting-equal-amounts-easy",id:"2300-2399/make-array-zero-by-subtracting-equal-amounts-easy",title:"2357 - Make Array Zero by Subtracting Equal Amounts (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts",source:"@site/solutions/2300-2399/2357-make-array-zero-by-subtracting-equal-amounts-easy.md",sourceDirName:"2300-2399",slug:"/2300-2399/make-array-zero-by-subtracting-equal-amounts-easy",permalink:"/leetcode-the-hard-way/solutions/2300-2399/make-array-zero-by-subtracting-equal-amounts-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2300-2399/2357-make-array-zero-by-subtracting-equal-amounts-easy.md",tags:[],version:"current",sidebarPosition:2357,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts"},sidebar:"tutorialSidebar",previous:{title:"2354 - Number of Excellent Pairs (Hard)",permalink:"/leetcode-the-hard-way/solutions/2300-2399/number-of-excellent-pairs-hard"},next:{title:"2358 - Maximum Number of Groups Entering a Competition (Medium)",permalink:"/leetcode-the-hard-way/solutions/2300-2399/maximum-number-of-groups-entering-a-competition-medium"}},u={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach: Counting",id:"approach-counting",level:2}],k={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,m);return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2357---make-array-zero-by-subtracting-equal-amounts-easy"},"2357 - Make Array Zero by Subtracting Equal Amounts (Easy)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts"},"https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"You are given a non-negative integer array ",(0,o.kt)("inlineCode",{parentName:"p"},"nums"),". In one operation, you must:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Choose a positive integer ",(0,o.kt)("inlineCode",{parentName:"li"},"x")," such that ",(0,o.kt)("inlineCode",{parentName:"li"},"x")," is less than or equal to the ",(0,o.kt)("strong",{parentName:"li"},"smallest non-zero")," element in ",(0,o.kt)("inlineCode",{parentName:"li"},"nums"),"."),(0,o.kt)("li",{parentName:"ul"},"Subtract ",(0,o.kt)("inlineCode",{parentName:"li"},"x")," from every ",(0,o.kt)("strong",{parentName:"li"},"positive")," element in ",(0,o.kt)("inlineCode",{parentName:"li"},"nums"),".")),(0,o.kt)("p",null,"Return ",(0,o.kt)("em",{parentName:"p"},"the ",(0,o.kt)("strong",{parentName:"em"},"minimum")," number of operations to make every element in")," ",(0,o.kt)("inlineCode",{parentName:"p"},"nums")," ",(0,o.kt)("em",{parentName:"p"},"equal to")," ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [1,5,0,3,5]\nOutput: 3\nExplanation:\nIn the first operation, choose x = 1. Now, nums = [0,4,0,2,4].\nIn the second operation, choose x = 2. Now, nums = [0,2,0,0,2].\nIn the third operation, choose x = 2. Now, nums = [0,0,0,0,0].\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [0]\nOutput: 0\nExplanation: Each element in nums is already 0 so no operations are needed.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 100")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0 <= nums[i] <= 100"))),(0,o.kt)("h2",{id:"approach-counting"},"Approach: Counting"),(0,o.kt)("p",null,"Observations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We can remove all numbers ",(0,o.kt)("inlineCode",{parentName:"li"},"x")," in one go"),(0,o.kt)("li",{parentName:"ul"},"We need ",(0,o.kt)("span",{parentName:"li",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"n")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," moves to remove ",(0,o.kt)("span",{parentName:"li",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"n")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," distinct numbers "),(0,o.kt)("li",{parentName:"ul"},"Hence, the problem is to find out the number of different positive numbers")),(0,o.kt)(i.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func minimumOperations(nums []int) int {\n    s := make(map[int]bool)\n    for _, v := range nums {\n        if v > 0 { \n            s[v] = true\n        }\n    }\n    return len(s)\n}\n")))}d.isMDXComponent=!0},8539:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.name;return a.createElement("div",{className:"solution-author-wrapper"},a.createElement("span",null,"This solution is written by ",t))}}}]);