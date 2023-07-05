"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[33638],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(t),d=a,h=c["".concat(p,".").concat(d)]||c[d]||u[d]||o;return t?r.createElement(h,i(i({ref:n},m),{},{components:t})):r.createElement(h,i({ref:n},m))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},52790:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const o={description:"Author: @wingkwong | https://leetcode.com/problems/replace-non-coprime-numbers-in-array/"},i="2197 - Replace Non-Coprime Numbers in Array (Hard)",l={unversionedId:"2100-2199/replace-non-coprime-numbers-in-array-hard",id:"2100-2199/replace-non-coprime-numbers-in-array-hard",title:"2197 - Replace Non-Coprime Numbers in Array (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/replace-non-coprime-numbers-in-array/",source:"@site/solutions/2100-2199/2197-replace-non-coprime-numbers-in-array-hard.md",sourceDirName:"2100-2199",slug:"/2100-2199/replace-non-coprime-numbers-in-array-hard",permalink:"/solutions/2100-2199/replace-non-coprime-numbers-in-array-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2197-replace-non-coprime-numbers-in-array-hard.md",tags:[],version:"current",sidebarPosition:2197,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/replace-non-coprime-numbers-in-array/"},sidebar:"tutorialSidebar",previous:{title:"2196 - Create Binary Tree From Descriptions (Medium)",permalink:"/solutions/2100-2199/create-binary-tree-from-descriptions-medium"},next:{title:"2200 - Find All K-Distant Indices in an Array (Easy)",permalink:"/solutions/2100-2199/find-all-k-distant-indices-in-an-array-easy"}},p={},s=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Simulation",id:"approach-1-simulation",level:2}],m=(c="SolutionAuthor",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var c;const u={toc:s},d="wrapper";function h(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2197---replace-non-coprime-numbers-in-array-hard"},"2197 - Replace Non-Coprime Numbers in Array (Hard)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/replace-non-coprime-numbers-in-array/"},"https://leetcode.com/problems/replace-non-coprime-numbers-in-array/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"You are given an array of integers ",(0,a.kt)("inlineCode",{parentName:"p"},"nums"),". Perform the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Find ",(0,a.kt)("strong",{parentName:"li"},"any")," two ",(0,a.kt)("strong",{parentName:"li"},"adjacent")," numbers in ",(0,a.kt)("inlineCode",{parentName:"li"},"nums")," that are ",(0,a.kt)("strong",{parentName:"li"},"non-coprime"),"."),(0,a.kt)("li",{parentName:"ol"},"If no such numbers are found, ",(0,a.kt)("strong",{parentName:"li"},"stop")," the process."),(0,a.kt)("li",{parentName:"ol"},"Otherwise, delete the two numbers and ",(0,a.kt)("strong",{parentName:"li"},"replace")," them with their ",(0,a.kt)("strong",{parentName:"li"},"LCM (Least Common Multiple)"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Repeat")," this process as long as you keep finding two adjacent non-coprime numbers.")),(0,a.kt)("p",null,"Return ",(0,a.kt)("em",{parentName:"p"},"the ",(0,a.kt)("strong",{parentName:"em"},"final")," modified array.")," It can be shown that replacing adjacent non-coprime numbers in ",(0,a.kt)("strong",{parentName:"p"},"any")," arbitrary order will lead to the same result."),(0,a.kt)("p",null,"The test cases are generated such that the values in the final array are ",(0,a.kt)("strong",{parentName:"p"},"less than or equal")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"108"),"."),(0,a.kt)("p",null,"Two values ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"y")," are ",(0,a.kt)("strong",{parentName:"p"},"non-coprime")," if ",(0,a.kt)("inlineCode",{parentName:"p"},"GCD(x, y) > 1")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"GCD(x, y)")," is the ",(0,a.kt)("strong",{parentName:"p"},"Greatest Common Divisor")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"y"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [6,4,3,2,7,6,2]\nOutput: [12,7,6]\nExplanation: \n- (6, 4) are non-coprime with LCM(6, 4) = 12. Now, nums = [12,3,2,7,6,2].\n- (12, 3) are non-coprime with LCM(12, 3) = 12. Now, nums = [12,2,7,6,2].\n- (12, 2) are non-coprime with LCM(12, 2) = 12. Now, nums = [12,7,6,2].\n- (6, 2) are non-coprime with LCM(6, 2) = 6. Now, nums = [12,7,6].\nThere are no more adjacent non-coprime numbers in nums.\nThus, the final modified array is [12,7,6].\nNote that there are other ways to obtain the same resultant array.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [2,2,1,1,3,3,3]\nOutput: [2,1,1,3]\nExplanation: \n- (3, 3) are non-coprime with LCM(3, 3) = 3. Now, nums = [2,2,1,1,3,3].\n- (3, 3) are non-coprime with LCM(3, 3) = 3. Now, nums = [2,2,1,1,3].\n- (2, 2) are non-coprime with LCM(2, 2) = 2. Now, nums = [2,1,1,3].\nThere are no more adjacent non-coprime numbers in nums.\nThus, the final modified array is [2,1,1,3].\nNote that there are other ways to obtain the same resultant array.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 10^5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= nums[i] <= 10^5")),(0,a.kt)("li",{parentName:"ul"},"The test cases are generated such that the values in the final array are ",(0,a.kt)("strong",{parentName:"li"},"less than or equal")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"108"),".")),(0,a.kt)("h2",{id:"approach-1-simulation"},"Approach 1: Simulation"),(0,a.kt)("p",null,"We iterate each number and check if the gcd of this number $$x$$ and the last element $$y$$ of $$ans$$ is non co-prime, i.e. $$gcd(x, y) > 1$$.  If so, replace them with their LCM and keep doing the same process till they are co-prime."),(0,a.kt)(m,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> replaceNonCoprimes(vector<int>& nums) {\n        int n = nums.size();\n        vector<int> ans;\n        for (int i = 0; i < n; i++) {\n            // check if the last element of ans\n            // and nums[i] are non co-prime\n            while (ans.size() && gcd(ans.back(), nums[i]) > 1) {\n                // replace them with their LCM\n                nums[i] = lcm(ans.back(), nums[i]);\n                // delete the last element\n                ans.pop_back();\n            }\n            // insert nums[i] to ans for the next round\n            ans.push_back(nums[i]);\n        }\n        return ans;\n    }\n};\n")))}h.isMDXComponent=!0}}]);