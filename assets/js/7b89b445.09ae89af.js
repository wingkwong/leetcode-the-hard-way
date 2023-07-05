"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[26812],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,s(s({ref:t},l),{},{components:n})):r.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={description:"Author: @dhanu084 | https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/",tags:["Two Pointers"]},s="2486 - Append Characters to String to Make Subsequence (Medium)",i={unversionedId:"2400-2499/append-characters-to-string-to-make-subsequence-medium",id:"2400-2499/append-characters-to-string-to-make-subsequence-medium",title:"2486 - Append Characters to String to Make Subsequence (Medium)",description:"Author: @dhanu084 | https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/",source:"@site/solutions/2400-2499/2486-append-characters-to-string-to-make-subsequence-medium.md",sourceDirName:"2400-2499",slug:"/2400-2499/append-characters-to-string-to-make-subsequence-medium",permalink:"/solutions/2400-2499/append-characters-to-string-to-make-subsequence-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2400-2499/2486-append-characters-to-string-to-make-subsequence-medium.md",tags:[{label:"Two Pointers",permalink:"/solutions/tags/two-pointers"}],version:"current",sidebarPosition:2486,frontMatter:{description:"Author: @dhanu084 | https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/",tags:["Two Pointers"]},sidebar:"tutorialSidebar",previous:{title:"2485 - Find the Pivot Integer (Easy)",permalink:"/solutions/2400-2499/find-the-pivot-integer-easy"},next:{title:"2487 - Remove Nodes From Linked List (Medium)",permalink:"/solutions/2400-2499/remove-nodes-from-linked-list-medium"}},p={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Two Pointers",id:"approach-1-two-pointers",level:2}],l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},u=l("Tabs"),d=l("TabItem"),m=l("SolutionAuthor"),h={toc:c},b="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2486---append-characters-to-string-to-make-subsequence-medium"},"2486 - Append Characters to String to Make Subsequence (Medium)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/"},"https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"You are given two strings s and t consisting of only lowercase English letters."),(0,o.kt)("p",null,"Return the minimum number of characters that need to be appended to the end of s so that t becomes a subsequence of s."),(0,o.kt)("p",null,"A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: s = "coaching", t = "coding"\nOutput: 4\nExplanation: Append the characters "ding" to the end of s so that s = "coachingding".\nNow, t is a subsequence of s ("coachingding").\nIt can be shown that appending any 3 characters to the end of s will never make t a subsequence.\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: s = "abcde", t = "a"\nOutput: 0\nExplanation: t is already a subsequence of s ("abcde").\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: s = "z", t = "abcde"\nOutput: 5\nExplanation: Append the characters "abcde" to the end of s so that s = "zabcde".\nNow, t is a subsequence of s ("zabcde").\nIt can be shown that appending any 4 characters to the end of s will never make t a subsequence.\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1 <= s.length, t.length <= 105"),(0,o.kt)("li",{parentName:"ul"},"s and t consist only of lowercase English letters.")),(0,o.kt)("h2",{id:"approach-1-two-pointers"},"Approach 1: Two Pointers"),(0,o.kt)("p",null,"Time Complexity: $$O(min(s.length, t.length))$$"),(0,o.kt)("p",null,"Space Complexity: $$O(1)$$"),(0,o.kt)(u,{mdxType:"Tabs"},(0,o.kt)(d,{value:"py",label:"Python",mdxType:"TabItem"},(0,o.kt)(m,{name:"@dhanu084",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def appendCharacters(self, s: str, t: str) -> int:\n        i = j = 0\n        '''\n            * Iterate through the both strings\n            * if both letters of s and t match increase both pointers\n            * if not matching increment i pointer to check if there is any possible match\n            in future - this also ensures that order is maintained\n            * return len(t) - current j position to find the number of letters that needs to be appened\n            * for input s = \"coaching\", t = \"coding\"\n            i pointer will reach end of s and j pointer will point to d as it was the last mismatch position\n            so return 6-2 = 4\n        '''\n        while i < len(s) and j < len(t):\n            if s[i] == t[j]:\n                i += 1\n                j += 1\n            else:\n                i += 1\n\n        return len(t) - j\n")))))}g.isMDXComponent=!0}}]);