"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[5112],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72534:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(8539),l=["components"],u={description:"Author: @wingkwong | https://leetcode.com/problems/sign-of-the-product-of-an-array/"},p="1822 - Sign of the Product of an Array (Easy)",s={unversionedId:"1800-1899/sign-of-the-product-of-an-array-easy",id:"1800-1899/sign-of-the-product-of-an-array-easy",title:"1822 - Sign of the Product of an Array (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/sign-of-the-product-of-an-array/",source:"@site/solutions/1800-1899/1822-sign-of-the-product-of-an-array-easy.md",sourceDirName:"1800-1899",slug:"/1800-1899/sign-of-the-product-of-an-array-easy",permalink:"/leetcode-the-hard-way/solutions/1800-1899/sign-of-the-product-of-an-array-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1800-1899/1822-sign-of-the-product-of-an-array-easy.md",tags:[],version:"current",sidebarPosition:1822,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/sign-of-the-product-of-an-array/"},sidebar:"tutorialSidebar",previous:{title:"1800 - Maximum Ascending Subarray Sum (Easy)",permalink:"/leetcode-the-hard-way/solutions/1800-1899/maximum-ascending-subarray-sum-easy"},next:{title:"1854 - Maximum Population Year (Easy)",permalink:"/leetcode-the-hard-way/solutions/1800-1899/maximum-population-year-easy"}},c={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Check the sign",id:"approach-1-check-the-sign",level:2}],d={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1822---sign-of-the-product-of-an-array-easy"},"1822 - Sign of the Product of an Array (Easy)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/sign-of-the-product-of-an-array/"},"https://leetcode.com/problems/sign-of-the-product-of-an-array/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"There is a function ",(0,o.kt)("inlineCode",{parentName:"p"},"signFunc(x)")," that returns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1")," if ",(0,o.kt)("inlineCode",{parentName:"li"},"x")," is positive."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-1")," if ",(0,o.kt)("inlineCode",{parentName:"li"},"x")," is negative."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0")," if ",(0,o.kt)("inlineCode",{parentName:"li"},"x")," is equal to ",(0,o.kt)("inlineCode",{parentName:"li"},"0"),".")),(0,o.kt)("p",null,"You are given an integer array ",(0,o.kt)("inlineCode",{parentName:"p"},"nums"),". Let ",(0,o.kt)("inlineCode",{parentName:"p"},"product")," be the product of all values in the array ",(0,o.kt)("inlineCode",{parentName:"p"},"nums"),"."),(0,o.kt)("p",null,"Return ",(0,o.kt)("inlineCode",{parentName:"p"},"signFunc(product)"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [-1,-2,-3,-4,3,2,1]\nOutput: 1\nExplanation: The product of all values in the array is 144, and signFunc(144) = 1\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [1,5,0,2,-3]\nOutput: 0\nExplanation: The product of all values in the array is 0, and signFunc(0) = 0\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [-1,1,-1,1,-1]\nOutput: -1\nExplanation: The product of all values in the array is -1, and signFunc(-1) = -1\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 1000")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-100 <= nums[i] <= 100"))),(0,o.kt)("h2",{id:"approach-1-check-the-sign"},"Approach 1: Check the sign"),(0,o.kt)("p",null,"We don't need to calculate the final product. Instead, we check the sign only."),(0,o.kt)(i.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int arraySign(vector<int>& nums) {\n        int ans = 1;\n        for (auto x : nums) {\n            if (x > 0) ans *= 1;\n            else if (x < 0) ans *= -1;\n            else ans = 0;\n        }\n        return ans;\n    }\n};\n")))}f.isMDXComponent=!0},8539:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294);function a(e){var t=e.name;return r.createElement("div",{className:"solution-author-wrapper"},r.createElement("span",null,"This solution is written by ",t))}}}]);