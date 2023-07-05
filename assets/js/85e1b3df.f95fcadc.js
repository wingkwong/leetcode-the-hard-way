"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[85723],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>v});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(t),c=i,v=u["".concat(l,".").concat(c)]||u[c]||d[c]||o;return t?r.createElement(v,a(a({ref:n},m),{},{components:t})):r.createElement(v,a({ref:n},m))}));function v(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},12675:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>v,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(87462),i=(t(67294),t(3905));const o={description:"Author: @wingkwong | https://leetcode.com/problems/compare-version-numbers/"},a="0165 - Compare Version Numbers (Medium)",s={unversionedId:"0100-0199/compare-version-numbers-medium",id:"0100-0199/compare-version-numbers-medium",title:"0165 - Compare Version Numbers (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/compare-version-numbers/",source:"@site/solutions/0100-0199/0165-compare-version-numbers-medium.md",sourceDirName:"0100-0199",slug:"/0100-0199/compare-version-numbers-medium",permalink:"/solutions/0100-0199/compare-version-numbers-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0165-compare-version-numbers-medium.md",tags:[],version:"current",sidebarPosition:165,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/compare-version-numbers/"},sidebar:"tutorialSidebar",previous:{title:"0162 - Find Peak Element (Medium)",permalink:"/solutions/0100-0199/find-peak-element-medium"},next:{title:"0169 - Majority Element (Easy)",permalink:"/solutions/0100-0199/majority-element-easy"}},l={},p=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Split",id:"approach-1-split",level:2}],m=(u="SolutionAuthor",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var u;const d={toc:p},c="wrapper";function v(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"0165---compare-version-numbers-medium"},"0165 - Compare Version Numbers (Medium)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/compare-version-numbers/"},"https://leetcode.com/problems/compare-version-numbers/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"Given two version numbers, ",(0,i.kt)("inlineCode",{parentName:"p"},"version1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"version2"),", compare them."),(0,i.kt)("p",null,"Version numbers consist of ",(0,i.kt)("strong",{parentName:"p"},"one or more revisions")," joined by a dot ",(0,i.kt)("inlineCode",{parentName:"p"},"'.'"),". Each revision consists of ",(0,i.kt)("strong",{parentName:"p"},"digits")," and may contain leading ",(0,i.kt)("strong",{parentName:"p"},"zeros"),". Every revision contains ",(0,i.kt)("strong",{parentName:"p"},"at least one character"),". Revisions are ",(0,i.kt)("strong",{parentName:"p"},"0-indexed from left to right"),", with the leftmost revision being revision 0, the next revision being revision 1, and so on. For example ",(0,i.kt)("inlineCode",{parentName:"p"},"2.5.33")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"0.1")," are valid version numbers."),(0,i.kt)("p",null,"To compare version numbers, compare their revisions in ",(0,i.kt)("strong",{parentName:"p"},"left-to-right order"),". Revisions are compared using their ",(0,i.kt)("strong",{parentName:"p"},"integer value ignoring any leading zeros"),". This means that revisions ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"001")," are considered ",(0,i.kt)("strong",{parentName:"p"},"equal"),". If a version number does not specify a revision at an index, then ",(0,i.kt)("strong",{parentName:"p"},"treat the revision as ",(0,i.kt)("inlineCode",{parentName:"strong"},"0")),". For example, version ",(0,i.kt)("inlineCode",{parentName:"p"},"1.0")," is less than version ",(0,i.kt)("inlineCode",{parentName:"p"},"1.1")," because their revision 0s are the same, but their revision 1s are ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," respectively, and ",(0,i.kt)("inlineCode",{parentName:"p"},"0 < 1"),"."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Return the following:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"version1 < version2"),", return ",(0,i.kt)("inlineCode",{parentName:"li"},"-1"),"."),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"version1 > version2"),", return ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},"Otherwise, return ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: version1 = "1.01", version2 = "1.001"\nOutput: 0\nExplanation: Ignoring leading zeroes, both "01" and "001" represent the same integer "1".\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: version1 = "1.0", version2 = "1.0.0"\nOutput: 0\nExplanation: version1 does not specify revision 2, which means it is treated as "0".\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 3:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: version1 = "0.1", version2 = "1.1"\nOutput: -1\nExplanation: version1\'s revision 0 is "0", while version2\'s revision 0 is "1". 0 < 1, so version1 < version2.\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= version1.length, version2.length <= 500")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"version1")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"version2")," only contain digits and ",(0,i.kt)("inlineCode",{parentName:"li"},"'.'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"version1")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"version2")," ",(0,i.kt)("strong",{parentName:"li"},"are valid version numbers"),"."),(0,i.kt)("li",{parentName:"ul"},"All the given revisions in ",(0,i.kt)("inlineCode",{parentName:"li"},"version1")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"version2")," can be stored in a ",(0,i.kt)("strong",{parentName:"li"},"32-bit integer"),".")),(0,i.kt)("h2",{id:"approach-1-split"},"Approach 1: Split"),(0,i.kt)("p",null,'We split the input strings by "." and store the digit into a list. Then we pad 0s to the shortest list to make the length for both list equal. Then we can compare both list. In Python3, $$cmp(a, b)$$ is gone so the equivalent for it is $$(a > b) - (a < b)$$.'),(0,i.kt)(m,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class Solution:\n    def compareVersion(self, version1: str, version2: str) -> int:\n        v1 = [int(i) for i in version1.split(".")]\n        v2 = [int(i) for i in version2.split(".")]\n        l1, l2 = len(v1), len(v2)\n        if l1 < l2: v1 += [0] * (l2 - l1)\n        else: v2 += [0] * (l1 - l2)\n        return (v1 > v2) - (v1 < v2)\n')))}v.isMDXComponent=!0}}]);