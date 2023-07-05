"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[90590],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=r.createContext({}),p=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,m=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=i,h=s["".concat(m,".").concat(d)]||s[d]||c[d]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10308:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={description:"Author: @wingkwong | https://leetcode.com/problems/3sum-with-multiplicity/"},o="0923 - 3Sum With Multiplicity (Medium)",l={unversionedId:"0900-0999/0923-3sum-with-multiplicity-medium",id:"0900-0999/0923-3sum-with-multiplicity-medium",title:"0923 - 3Sum With Multiplicity (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/3sum-with-multiplicity/",source:"@site/solutions/0900-0999/0923-3sum-with-multiplicity-medium.md",sourceDirName:"0900-0999",slug:"/0900-0999/0923-3sum-with-multiplicity-medium",permalink:"/solutions/0900-0999/0923-3sum-with-multiplicity-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0900-0999/0923-3sum-with-multiplicity-medium.md",tags:[],version:"current",frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/3sum-with-multiplicity/"},sidebar:"tutorialSidebar",previous:{title:"0994 - Rotting Oranges (Medium)",permalink:"/solutions/0900-0999/rotting-oranges-medium"},next:{title:"1000 - 1099",permalink:"/solutions/category/1000---1099"}},m={},p=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Hash Map + Binomial",id:"approach-1-hash-map--binomial",level:2}],u=(s="SolutionAuthor",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var s;const c={toc:p},d="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"0923---3sum-with-multiplicity-medium"},"0923 - 3Sum With Multiplicity (Medium)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/3sum-with-multiplicity/"},"https://leetcode.com/problems/3sum-with-multiplicity/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"Given an integer array ",(0,i.kt)("inlineCode",{parentName:"p"},"arr"),", and an integer ",(0,i.kt)("inlineCode",{parentName:"p"},"target"),", return the number of tuples ",(0,i.kt)("inlineCode",{parentName:"p"},"i, j, k")," such that ",(0,i.kt)("inlineCode",{parentName:"p"},"i < j < k")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"arr[i] + arr[j] + arr[k] == target"),"."),(0,i.kt)("p",null,"As the answer can be very large, return it ",(0,i.kt)("strong",{parentName:"p"},"modulo")," ",(0,i.kt)("inlineCode",{parentName:"p"},"10^9 + 7"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: arr = [1,1,2,2,3,3,4,4,5,5], target = 8\nOutput: 20\nExplanation: \nEnumerating by the values (arr[i], arr[j], arr[k]):\n(1, 2, 5) occurs 8 times;\n(1, 3, 4) occurs 8 times;\n(2, 2, 4) occurs 2 times;\n(2, 3, 3) occurs 2 times.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: arr = [1,1,2,2,2,2], target = 5\nOutput: 12\nExplanation: \narr[i] = 1, arr[j] = arr[k] = 2 occurs 12 times:\nWe choose one 1 from [1,1] in 2 ways,\nand two 2s from [2,2,2,2] in 6 ways.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"3 <= arr.length <= 3000")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0 <= arr[i] <= 100")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0 <= target <= 300"))),(0,i.kt)("h2",{id:"approach-1-hash-map--binomial"},"Approach 1: Hash Map + Binomial"),(0,i.kt)("p",null,"We can use hash map to store the frequency for each number. As we know $$x + y + z == target$$, we can break it down into 4 cases, which are"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Case 1: $$i + i + i == target$$"),(0,i.kt)("li",{parentName:"ul"},"Case 2: $$i + i + j == target$$"),(0,i.kt)("li",{parentName:"ul"},"Case 3: $$i + j + j == target$$"),(0,i.kt)("li",{parentName:"ul"},"Case 4: $$i + j + k == target$$")),(0,i.kt)("p",null,"where $$i < j < k$$."),(0,i.kt)("p",null,"For case 1, how many ways we can choose three different indices with value $$i$$? It is same as choosing $$3$$ elements from $$m","[i]","$$, which is equivalent to $$m","[i]"," ",(0,i.kt)("em",{parentName:"p"}," (m","[i]"," - 1) ")," (m","[i]"," - 2) / 6$$."),(0,i.kt)("p",null,"Let's define our nChooseK function here."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"  template <typename T>\n  T binomial(int64_t N, int64_t K) {\n    if (K < 0 || N < K) return 0;\n    T ret = 1;\n    for (T i = 1; i <= K; ++i) {\n      ret *= N--;\n      ret /= i;\n    }\n    return ret;\n  }\n")),(0,i.kt)("p",null,"For case 2, we need to choose $$2$$ elements from $$m","[i]","$$ and multiply by $$m","[j]","$$."),(0,i.kt)("p",null,"For case 3, we need to choose $$2$$ elements from $$m","[j]","$$ and multiply by $$m","[i]","$$."),(0,i.kt)("p",null,"For case 4, there are $$m","[i]"," ",(0,i.kt)("em",{parentName:"p"}," m","[j]"," ")," m","[k]","$$ ways."),(0,i.kt)(u,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"int threeSumMulti(vector<int>& arr, int target) {\n    unordered_map<int, long> m;\n    long ans = 0;\n    int M = 1e9 + 7;\n    // count the frequency for each number\n    for(int x : arr) m[x]++;\n    // iterate i\n    for(int i = 0; i <= 100; i++) {\n        // case 1: i + i + i == target\n        // choose 3 from m[i]\n        if(i + i + i == target) ans += binomial<long>(m[i], 3);\n        // iterate j \n        // make sure i < j\n        for(int j = i + 1; j <= 100; j++) {\n            int k = target - i - j;\n            // case 2: i + i + j == target\n            // choose 2 from m[i] * m[j]\n            if(i + i + j == target) ans += binomial<long>(m[i], 2) * m[j];\n            // case 3: i + j + j == target\n            // choose 2 from m[j] * m[i]\n            else if (i + j + j == target) ans += m[i] * binomial<long>(m[j], 2);\n            // case 4: i + j + k == target\n            // make sure j < k\n            // choose 1 from m[i], 1 from [j] and 1 from m[k]\n            else if(j < k && i + j + k == target) ans += m[i] * m[j] * m[k];\n        }\n    }\n    return ans % M;\n")))}h.isMDXComponent=!0}}]);