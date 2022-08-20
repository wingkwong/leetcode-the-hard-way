"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[2269],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},38542:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=t(8539),s=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/first-bad-version/"},u="0278 - First Bad Version (Easy)",p={unversionedId:"0200-0299/first-bad-version-easy",id:"0200-0299/first-bad-version-easy",title:"0278 - First Bad Version (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/first-bad-version/",source:"@site/solutions/0200-0299/0278-first-bad-version-easy.md",sourceDirName:"0200-0299",slug:"/0200-0299/first-bad-version-easy",permalink:"/leetcode-the-hard-way/solutions/0200-0299/first-bad-version-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0278-first-bad-version-easy.md",tags:[],version:"current",sidebarPosition:278,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/first-bad-version/"},sidebar:"tutorialSidebar",previous:{title:"0268 - Missing Number (Easy)",permalink:"/leetcode-the-hard-way/solutions/0200-0299/missing-number-easy"},next:{title:"0283 - Move Zeroes (Easy)",permalink:"/leetcode-the-hard-way/solutions/0200-0299/move-zeroes-easy"}},c={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Binary Search",id:"approach-1-binary-search",level:2}],m={toc:d};function f(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0278---first-bad-version-easy"},"0278 - First Bad Version (Easy)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/first-bad-version/"},"https://leetcode.com/problems/first-bad-version/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad."),(0,a.kt)("p",null,"Suppose you have ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," versions ",(0,a.kt)("inlineCode",{parentName:"p"},"[1, 2, ..., n]")," and you want to find out the first bad one, which causes all the following ones to be bad."),(0,a.kt)("p",null,"You are given an API ",(0,a.kt)("inlineCode",{parentName:"p"},"bool isBadVersion(version)")," which returns whether ",(0,a.kt)("inlineCode",{parentName:"p"},"version")," is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: n = 5, bad = 4\nOutput: 4\nExplanation:\ncall isBadVersion(3) -> false\ncall isBadVersion(5) -> true\ncall isBadVersion(4) -> true\nThen 4 is the first bad version.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: n = 1, bad = 1\nOutput: 1\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= bad <= n <= 2^31 - 1"))),(0,a.kt)("h2",{id:"approach-1-binary-search"},"Approach 1: Binary Search"),(0,a.kt)("p",null,"Prerequisite: ",(0,a.kt)("a",{parentName:"p",href:"../../tutorials/basic-topics/binary-search"},"Binary Search")),(0,a.kt)(i.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// The API isBadVersion is defined for you.\n// bool isBadVersion(int version);\n\nclass Solution {\npublic:\n    int firstBadVersion(int n) {\n        // init possible range\n        int l = 1, r = n;\n        while (l < r) {\n            int m = l + (r - l) / 2;\n            // [F,F,..,F,T,T,T,..,T]\n            // exclude m\n            if (!isBadVersion(m)) l = m + 1;\n            // include m\n            else r = m;\n        }\n        return l;\n    }\n};\n")))}f.isMDXComponent=!0},8539:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(67294);function o(e){var n=e.name;return r.createElement("div",{className:"solution-author-wrapper"},r.createElement("span",null,"This solution is written by ",n))}}}]);