"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[48835],{3905:function(e,a,t){t.d(a,{Zo:function(){return l},kt:function(){return h}});var n=t(67294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=n.createContext({}),o=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},l=function(e){var a=o(e.components);return n.createElement(i.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),k=o(t),h=s,u=k["".concat(i,".").concat(h)]||k[h]||c[h]||r;return t?n.createElement(u,m(m({ref:a},l),{},{components:t})):n.createElement(u,m({ref:a},l))}));function h(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,m=new Array(r);m[0]=k;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p.mdxType="string"==typeof e?e:s,m[1]=p;for(var o=2;o<r;o++)m[o]=t[o];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},56931:function(e,a,t){t.r(a),t.d(a,{assets:function(){return l},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return c}});var n=t(87462),s=t(63366),r=(t(67294),t(3905)),m=["components"],p={description:"Author: @wingkwong | https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/"},i="1790 - Check if One String Swap Can Make Strings Equal (Easy)",o={unversionedId:"1700-1799/check-if-one-string-swap-can-make-strings-equal-easy",id:"1700-1799/check-if-one-string-swap-can-make-strings-equal-easy",title:"1790 - Check if One String Swap Can Make Strings Equal (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/",source:"@site/solutions/1700-1799/1790-check-if-one-string-swap-can-make-strings-equal-easy.md",sourceDirName:"1700-1799",slug:"/1700-1799/check-if-one-string-swap-can-make-strings-equal-easy",permalink:"/leetcode-the-hard-way/solutions/1700-1799/check-if-one-string-swap-can-make-strings-equal-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1700-1799/1790-check-if-one-string-swap-can-make-strings-equal-easy.md",tags:[],version:"current",sidebarPosition:1790,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/"},sidebar:"tutorialSidebar",previous:{title:"1770 - Maximum Score from Performing Multiplication Operations (Medium)",permalink:"/leetcode-the-hard-way/solutions/1700-1799/maximum-score-from-performing-multiplication-operations-medium"},next:{title:"1900 - 1999",permalink:"/leetcode-the-hard-way/solutions/category/1900---1999"}},l={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Simulation",id:"approach-1-simulation",level:2}],k=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)}},h=k("Tabs"),u=k("TabItem"),N=k("SolutionAuthor"),d={toc:c};function g(e){var a=e.components,t=(0,s.Z)(e,m);return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"1790---check-if-one-string-swap-can-make-strings-equal-easy"},"1790 - Check if One String Swap Can Make Strings Equal (Easy)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/"},"https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"You are given two strings ",(0,r.kt)("inlineCode",{parentName:"p"},"s1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"s2")," of equal length. A ",(0,r.kt)("strong",{parentName:"p"},"string swap")," is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices."),(0,r.kt)("p",null,"Return ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," ",(0,r.kt)("em",{parentName:"p"},"if it is possible to make both strings equal by performing ",(0,r.kt)("strong",{parentName:"em"},"at most one string swap")," on ",(0,r.kt)("strong",{parentName:"em"},"exactly one")," of the strings.")," Otherwise, return ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: s1 = "bank", s2 = "kanb"\nOutput: true\nExplanation: For example, swap the first character with the last character of s2 to make "bank".\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: s1 = "attack", s2 = "defend"\nOutput: false\nExplanation: It is impossible to make them equal with one string swap.\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 3:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: s1 = "kelb", s2 = "kelb"\nOutput: true\nExplanation: The two strings are already equal, so no string swap operation is required.\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= s1.length, s2.length <= 100")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s1.length == s2.length")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s1")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"s2")," consist of only lowercase English letters.")),(0,r.kt)("h2",{id:"approach-1-simulation"},"Approach 1: Simulation"),(0,r.kt)("p",null,"We iterate each index ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"i")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i")))))," and look for the first difference, mark the index as ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"l"),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mi",{parentName:"mrow"},"t")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"last")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"))))),". If we have another difference at index ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"j")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"j")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"))))),", then swap ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,r.kt)("mi",{parentName:"mrow"},"j"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s1[j]")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"["),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,r.kt)("span",{parentName:"span",className:"mclose"},"]")))))," with ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,r.kt)("mi",{parentName:"mrow"},"l"),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s1[last]")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"["),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mclose"},"]")))))," and check if it is same as ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mn",{parentName:"mrow"},"2")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s2")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mord"},"2")))))," (as we can only make at most one swap). At the end, check if both string is equal to handle the case that we don't swap."),(0,r.kt)(h,{mdxType:"Tabs"},(0,r.kt)(u,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)(N,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool areAlmostEqual(string s1, string s2) {\n        int n = s1.size(), last = -1;\n        for (int i = 0; i < n; i++) {\n            // potentially need to swap\n            if (s1[i] != s2[i]) {\n                // any previous character to swap?\n                if (last == -1) {\n                    // if not found, mark the current index as last\n                    last = i;\n                } else {\n                    // if found, swap it and check if they are same\n                    swap(s1[last], s1[i]);\n                    return s1 == s2;\n                }\n            }\n        }\n        // no swap is needed\n        return s1 == s2;\n    }\n};\n"))),(0,r.kt)(u,{value:"rs",label:"Rust",mdxType:"TabItem"},(0,r.kt)(N,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rs"},"impl Solution {\n    pub fn are_almost_equal(s1: String, s2: String) -> bool {\n        let n = s1.len();\n        let mut last = usize::MAX;\n        let mut c1: Vec<_> = s1.chars().collect();\n        let c2: Vec<_> = s2.chars().collect();\n        for i in 0 .. n { \n            if c1[i] != c2[i] {\n                if last == usize::MAX {\n                    last = i;\n                } else {\n                    c1.swap(i, last);\n                    return c1 == c2;\n                }\n            }\n        }\n        c1 == c2\n    }\n}\n")))))}g.isMDXComponent=!0}}]);