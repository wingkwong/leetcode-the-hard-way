"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[3881],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},32173:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return m}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=t(8539),l=["components"],p={description:"Author: @heiheihang | https://leetcode.com/problems/concatenation-of-array/"},s="1929 - Concatenation of Array (Easy)",u={unversionedId:"1900-1999/concatenation-of-array-easy",id:"1900-1999/concatenation-of-array-easy",title:"1929 - Concatenation of Array (Easy)",description:"Author: @heiheihang | https://leetcode.com/problems/concatenation-of-array/",source:"@site/solutions/1900-1999/1929-concatenation-of-array-easy.md",sourceDirName:"1900-1999",slug:"/1900-1999/concatenation-of-array-easy",permalink:"/leetcode-the-hard-way/solutions/1900-1999/concatenation-of-array-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1900-1999/1929-concatenation-of-array-easy.md",tags:[],version:"current",sidebarPosition:1929,frontMatter:{description:"Author: @heiheihang | https://leetcode.com/problems/concatenation-of-array/"},sidebar:"tutorialSidebar",previous:{title:"1900 - 1999",permalink:"/leetcode-the-hard-way/solutions/category/1900---1999"},next:{title:"1980 - Find Unique Binary String (Medium)",permalink:"/leetcode-the-hard-way/solutions/1900-1999/find-unique-binary-string-medium"}},c={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Iteration",id:"approach-1-iteration",level:2}],d={toc:m};function f(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1929---concatenation-of-array-easy"},"1929 - Concatenation of Array (Easy)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/concatenation-of-array/"},"https://leetcode.com/problems/concatenation-of-array/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Given an integer array ",(0,o.kt)("inlineCode",{parentName:"p"},"nums")," of length ",(0,o.kt)("inlineCode",{parentName:"p"},"n"),", you want to create an array ",(0,o.kt)("inlineCode",{parentName:"p"},"ans")," of length ",(0,o.kt)("inlineCode",{parentName:"p"},"2n")," where ",(0,o.kt)("inlineCode",{parentName:"p"},"ans[i] == nums[i]")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ans[i + n] == nums[i]")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"0 <= i < n")," (",(0,o.kt)("strong",{parentName:"p"},"0-indexed"),")."),(0,o.kt)("p",null,"Specifically, ",(0,o.kt)("inlineCode",{parentName:"p"},"ans")," is the ",(0,o.kt)("strong",{parentName:"p"},"concatenation")," of two ",(0,o.kt)("inlineCode",{parentName:"p"},"nums")," arrays."),(0,o.kt)("p",null,"Return ",(0,o.kt)("em",{parentName:"p"},"the array")," ",(0,o.kt)("inlineCode",{parentName:"p"},"ans"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [1,2,1]\nOutput: [1,2,1,1,2,1]\nExplanation: The array ans is formed as follows:\n- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]\n- ans = [1,2,1,1,2,1]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [1,3,2,1]\nOutput: [1,3,2,1,1,3,2,1]\nExplanation: The array ans is formed as follows:\n- ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]\n- ans = [1,3,2,1,1,3,2,1]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"n == nums.length")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= n <= 1000")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= nums[i] <= 1000"))),(0,o.kt)("h2",{id:"approach-1-iteration"},"Approach 1: Iteration"),(0,o.kt)("p",null,"We need to look at ",(0,o.kt)("inlineCode",{parentName:"p"},"nums")," two times to create the desired result. The simplest approach is to perform two for-loops in ",(0,o.kt)("inlineCode",{parentName:"p"},"nums")," and copy the numbers to ",(0,o.kt)("inlineCode",{parentName:"p"},"result")," ."),(0,o.kt)(i.Z,{name:"@heiheihang",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def getConcatenation(self, nums: List[int]) -> List[int]:\n        \n        #initialize result\n        result = []\n        \n        #first iteration of nums\n        for i in range(len(nums)):\n            result.append(nums[i])\n        \n        #second iteration of nums\n        for i in range(len(nums)):\n            result.append(nums[i])\n        \n        #return result\n        return result\n")))}f.isMDXComponent=!0},8539:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(67294);function a(e){var n=e.name;return r.createElement("div",{className:"solution-author-wrapper"},r.createElement("span",null,"This solution is written by ",n))}}}]);