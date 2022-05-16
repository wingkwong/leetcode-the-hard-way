"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[3855],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=m(n),h=r,f=u["".concat(p,".").concat(h)]||u[h]||c[h]||s;return n?a.createElement(f,o(o({ref:t},l),{},{components:n})):a.createElement(f,o({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var m=2;m<s;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2114:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return c}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),o=["components"],i={description:"Author: @wingkwong | https://leetcode.com/problems/sum-of-scores-of-built-strings/"},p="2223 - Sum of Scores of Built Strings (Hard)",m={unversionedId:"2200-2299/sum-of-scores-of-built-strings-hard",id:"2200-2299/sum-of-scores-of-built-strings-hard",title:"2223 - Sum of Scores of Built Strings (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/sum-of-scores-of-built-strings/",source:"@site/solutions/2200-2299/2223-sum-of-scores-of-built-strings-hard.md",sourceDirName:"2200-2299",slug:"/2200-2299/sum-of-scores-of-built-strings-hard",permalink:"/leetcode-the-hard-way/solutions/2200-2299/sum-of-scores-of-built-strings-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2200-2299/2223-sum-of-scores-of-built-strings-hard.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652705137,formattedLastUpdatedAt:"5/16/2022",sidebarPosition:2223,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/sum-of-scores-of-built-strings/"},sidebar:"tutorialSidebar",previous:{title:"2200 - 2299",permalink:"/leetcode-the-hard-way/solutions/category/2200---2299"},next:{title:"2231 -  Largest Number After Digit Swaps by Parity (Easy)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/largest-number-after-digit-swaps-by-parity-easy"}},l={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Z Algorithm",id:"approach-1-z-algorithm",level:2}],u={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"2223---sum-of-scores-of-built-strings-hard"},"2223 - Sum of Scores of Built Strings (Hard)"),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"You are ",(0,s.kt)("strong",{parentName:"p"},"building")," a string ",(0,s.kt)("inlineCode",{parentName:"p"},"s")," of length ",(0,s.kt)("inlineCode",{parentName:"p"},"n")," ",(0,s.kt)("strong",{parentName:"p"},"one")," character at a time, ",(0,s.kt)("strong",{parentName:"p"},"prepending")," each new character to the ",(0,s.kt)("strong",{parentName:"p"},"front")," of the string. The strings are labeled from ",(0,s.kt)("inlineCode",{parentName:"p"},"1")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"n"),", where the string with length ",(0,s.kt)("inlineCode",{parentName:"p"},"i")," is labeled ",(0,s.kt)("inlineCode",{parentName:"p"},"si"),"."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"For example, for ",(0,s.kt)("inlineCode",{parentName:"li"},'s = "abaca"'),", ",(0,s.kt)("inlineCode",{parentName:"li"},'s1 == "a"'),", ",(0,s.kt)("inlineCode",{parentName:"li"},'s2 == "ca"'),", ",(0,s.kt)("inlineCode",{parentName:"li"},'s3 == "aca"'),", etc.")),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"score")," of ",(0,s.kt)("inlineCode",{parentName:"p"},"si")," is the length of the ",(0,s.kt)("strong",{parentName:"p"},"longest common prefix")," between ",(0,s.kt)("inlineCode",{parentName:"p"},"si")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"sn")," (Note that ",(0,s.kt)("inlineCode",{parentName:"p"},"s == sn"),")."),(0,s.kt)("p",null,"Given the final string ",(0,s.kt)("inlineCode",{parentName:"p"},"s"),", return ",(0,s.kt)("em",{parentName:"p"},"the ",(0,s.kt)("strong",{parentName:"em"},"sum")," of the ",(0,s.kt)("strong",{parentName:"em"},"score")," of every")," ",(0,s.kt)("inlineCode",{parentName:"p"},"si"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: s = "babab"\nOutput: 9\nExplanation:\nFor s1 == "b", the longest common prefix is "b" which has a score of 1.\nFor s2 == "ab", there is no common prefix so the score is 0.\nFor s3 == "bab", the longest common prefix is "bab" which has a score of 3.\nFor s4 == "abab", there is no common prefix so the score is 0.\nFor s5 == "babab", the longest common prefix is "babab" which has a score of 5.\nThe sum of the scores is 1 + 0 + 3 + 0 + 5 = 9, so we return 9.\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: s = "azbazbzaz"\nOutput: 14\nExplanation: \nFor s2 == "az", the longest common prefix is "az" which has a score of 2.\nFor s6 == "azbzaz", the longest common prefix is "azb" which has a score of 3.\nFor s9 == "azbazbzaz", the longest common prefix is "azbazbzaz" which has a score of 9.\nFor all other si, the score is 0.\nThe sum of the scores is 2 + 3 + 9 = 14, so we return 14.\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1 <= s.length <= 10^5")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"s")," consists of lowercase English letters.")),(0,s.kt)("h2",{id:"approach-1-z-algorithm"},"Approach 1: Z Algorithm"),(0,s.kt)("p",null,"The sum of the score of every ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"s"),(0,s.kt)("mi",{parentName:"msub"},"i"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s_i")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"}))))))))))," would be the sum of the values in ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"Z")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"Z")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"Z")))))," array."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    template <typename T>\n    vector<int> z_function(int n, const T &s) {\n      vector<int> z(n, n);\n      int l = 0, r = 0;\n      for (int i = 1; i < n; i++) {\n        z[i] = (i > r ? 0 : min(r - i + 1, z[i - l]));\n        while (i + z[i] < n && s[z[i]] == s[i + z[i]]) {\n          z[i]++;\n        }\n        if (i + z[i] - 1 > r) {\n          l = i;\n          r = i + z[i] - 1;\n        }\n      }\n      return z;\n    }\n\n    template <typename T>\n    vector<int> z_function(const T &s) {\n      return z_function((int)s.size(), s);\n    }\n\n    long long sumScores(string s) {\n        long long ans = 0;\n        vector<int> z = z_function(s);\n        for (auto x : z) ans += x;\n        return ans; \n    }\n};\n")))}h.isMDXComponent=!0}}]);