"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[89386],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,h=u["".concat(l,".").concat(d)]||u[d]||c[d]||a;return n?r.createElement(h,o(o({ref:t},m),{},{components:n})):r.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15431:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>k,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={description:"Author: @wingkwong | https://leetcode.com/problems/prime-pairs-with-target-sum/"},o="2761 - Prime Pairs With Target Sum (Medium)",p={unversionedId:"2700-2799/prime-pairs-with-target-sum-medium",id:"2700-2799/prime-pairs-with-target-sum-medium",title:"2761 - Prime Pairs With Target Sum (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/prime-pairs-with-target-sum/",source:"@site/solutions/2700-2799/2761-prime-pairs-with-target-sum-medium.md",sourceDirName:"2700-2799",slug:"/2700-2799/prime-pairs-with-target-sum-medium",permalink:"/solutions/2700-2799/prime-pairs-with-target-sum-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2700-2799/2761-prime-pairs-with-target-sum-medium.md",tags:[],version:"current",sidebarPosition:2761,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/prime-pairs-with-target-sum/"},sidebar:"tutorialSidebar",previous:{title:"2700 - 2799",permalink:"/solutions/category/2700---2799"}},l={},s=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sieve of Eratosthenes",id:"approach-1-sieve-of-eratosthenes",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},u=m("Tabs"),c=m("TabItem"),d=m("SolutionAuthor"),h={toc:s},f="wrapper";function k(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2761---prime-pairs-with-target-sum-medium"},"2761 - Prime Pairs With Target Sum (Medium)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/prime-pairs-with-target-sum/"},"https://leetcode.com/problems/prime-pairs-with-target-sum/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"You are given an integer ",(0,i.kt)("inlineCode",{parentName:"p"},"n"),". We say that two integers ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," form a prime number pair if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= x <= y <= n")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x + y == n")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"y")," are prime numbers")),(0,i.kt)("p",null,"Return ",(0,i.kt)("em",{parentName:"p"},"the 2D sorted list of prime number pairs")," ",(0,i.kt)("inlineCode",{parentName:"p"},"[xi, yi]"),". The list should be sorted in ",(0,i.kt)("strong",{parentName:"p"},"increasing")," order of ",(0,i.kt)("inlineCode",{parentName:"p"},"xi"),". If there are no prime number pairs at all, return ",(0,i.kt)("em",{parentName:"p"},"an empty array"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," A prime number is a natural number greater than ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," with only two factors, itself and ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: n = 10\nOutput: [[3,7],[5,5]]\nExplanation: In this example, there are two prime pairs that satisfy the criteria. \nThese pairs are [3,7] and [5,5], and we return them in the sorted order as described in the problem statement.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: n = 2\nOutput: []\nExplanation: We can show that there is no prime number pair that gives a sum of 2, so we return an empty array.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= n <= 10^6"))),(0,i.kt)("h2",{id:"approach-1-sieve-of-eratosthenes"},"Approach 1: Sieve of Eratosthenes"),(0,i.kt)("p",null,"First thought - we may think that we can brute force by Iterating $x$ and iterating $y$, then checking if $x + y == n$ and if $x$ and $y$ is prime. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"for (int x = 1; x <= n; x++) {\n    for (int y = x; y <= n; y++) {\n        if (x + y == n && isPrime(x) && isPrime(y)) {\n            // now we got [x, y]\n        }\n    }\n}\n")),(0,i.kt)("p",null,"However, $n$ can be up to $10^6$ and O(n ^ 2) solution is a no go. Also checking if a number is a prime number on the fly is expensive. "),(0,i.kt)("p",null,"Hence, now we have two things to think about"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"how to optimize the solution without Iterating $x$ and $y$ "),(0,i.kt)("li",{parentName:"ol"},"how to check if $x$ and $y$ are prime numbers efficiently")),(0,i.kt)("p",null,"To solve the first problem, by looking at Example 1, we know that we don't need to output $","[7, 3]","$ since it is covered with $","[3, 7]","$. Also, it is easy to see $y == n - x$ by deriving from $x + y == n$. With these info, we don't need to iterate in $O(n^2)$. We just need to check $i$ in $","[1 .. n / 2]","$. The pair is simply $i$ and $n - i$."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"for (int i = 1; i <= n / 2; i++) {\n    int x = i;\n    int y = n - i;\n    if (isPrime(x) && isPrime(y)) {\n        // we got [x, y]\n    }\n}\n")),(0,i.kt)("p",null,"To solve the second problem we can pre-compute all prime numbers up to $n$ by using Sieve of Eatosthenes so that we don't need to calculate each time on the fly. "),(0,i.kt)(u,{mdxType:"Tabs"},(0,i.kt)(c,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,i.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'class Solution {\npublic:\n    vector<bool> sieveOfEratosthenes(const int n) {\n      assert(n >= 2 && "N must be greater or equal to 2");\n      vector<bool> isPrime(n + 1, true);\n      isPrime[0] = isPrime[1] = false;\n      for (int i = 2; i * i <= n; i++) {\n        if (isPrime[i]) {\n          for (int j = i * i; j <= n; j += i) {\n            isPrime[j] = false;\n          }\n        }\n      }\n      return isPrime;\n    }\n\n\n    vector<vector<int>> findPrimePairs(int n) {\n        vector<vector<int>> ans;\n        if (n == 1) return ans;\n        vector<bool> p = sieveOfEratosthenes(n);\n        for (int i = 1; i <= n / 2; i++) {\n            if (p[i] && p[n - i]) {\n                ans.push_back({i, n - i});\n            }\n        }\n        return ans;\n    }\n};\n')))))}k.isMDXComponent=!0}}]);