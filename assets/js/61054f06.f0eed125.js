"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[2135],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=o,d=c["".concat(l,".").concat(h)]||c[h]||u[h]||i;return n?r.createElement(d,a(a({ref:t},m),{},{components:n})):r.createElement(d,a({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},32380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={description:"Author: @vigneshshiv, @radojicic23 | https://leetcode.com/problems/longest-common-prefix/"},a="0014 - Longest Common Prefix (Easy)",s={unversionedId:"0000-0099/longest-common-prefix-easy",id:"0000-0099/longest-common-prefix-easy",title:"0014 - Longest Common Prefix (Easy)",description:"Author: @vigneshshiv, @radojicic23 | https://leetcode.com/problems/longest-common-prefix/",source:"@site/solutions/0000-0099/0014-longest-common-prefix-easy.md",sourceDirName:"0000-0099",slug:"/0000-0099/longest-common-prefix-easy",permalink:"/solutions/0000-0099/longest-common-prefix-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0014-longest-common-prefix-easy.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{description:"Author: @vigneshshiv, @radojicic23 | https://leetcode.com/problems/longest-common-prefix/"},sidebar:"tutorialSidebar",previous:{title:"0013 - Roman to Integer (Easy)",permalink:"/solutions/0000-0099/roman-to-integer-easy"},next:{title:"0017 - Letter Combinations of a Phone Number (Hard)",permalink:"/solutions/0000-0099/letter-combinations-of-a-phone-number-medium"}},l={},p=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sorting",id:"approach-1-sorting",level:2},{value:"Approach 2: Linear Search",id:"approach-2-linear-search",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},c=m("Tabs"),u=m("TabItem"),h=m("SolutionAuthor"),d={toc:p},f="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0014---longest-common-prefix-easy"},"0014 - Longest Common Prefix (Easy)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/longest-common-prefix/"},"https://leetcode.com/problems/longest-common-prefix/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Write a function to find the longest common prefix string amongst an array of strings."),(0,o.kt)("p",null,"If there is no common prefix, return an empty string ",(0,o.kt)("inlineCode",{parentName:"p"},'""'),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: strs = ["flower","flow","flight"]\nOutput: "fl"\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: strs = ["dog","racecar","car"]\nOutput: ""\nExplanation: There is no common prefix among the input strings.\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= strs.length <= 200")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0 <= strs[i].length <= 200")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"strs[i]")," consists of only lowercase English letters.")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"approach-1-sorting"},"Approach 1: Sorting"),(0,o.kt)("p",null,"Sorting becomes handy to solve this problem, after sorting strings ordered in lexicographic order. "),(0,o.kt)("p",null,"Since we need to find the longest common prefix of the all words, The first char of ",(0,o.kt)("strong",{parentName:"p"},"each word in the array"),", should be same. Following that the 2nd char and 3rd char and it continues till last char. "),(0,o.kt)("p",null,"In the example 1, all of first char starts with ",(0,o.kt)("inlineCode",{parentName:"p"},"'f'")," and then ",(0,o.kt)("inlineCode",{parentName:"p"},"'l'"),", but next char ",(0,o.kt)("inlineCode",{parentName:"p"},"'o'")," match with 2 words, not with ",(0,o.kt)("inlineCode",{parentName:"p"},"flight"),". The same goes to example 2, the very first character of each word is not matching, so there is no common prefix found. "),(0,o.kt)("p",null,"Instead of comparing every word with other words in the array, starting from first, which makes algorithm to run $O(n^2)$ time. We can do better by comparing first and last word in the array to find the common prefix. "),(0,o.kt)("p",null,"Since strings are ordered, the least common prefix we can find with first and last word in the array. "),(0,o.kt)("p",null,"Time Complexity: $O(n log(n))$, where $n$ - # of words in the array"),(0,o.kt)("p",null,"Space complexity: $O(1)$"),(0,o.kt)(c,{mdxType:"Tabs"},(0,o.kt)(u,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(h,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'class Solution {\n    public String longestCommonPrefix(String[] strs) {\n        int n = strs.length;\n        if (n == 0) return "";\n        // Sorting provides lexicographic order of strings.\n        Arrays.sort(strs);\n        String first = strs[0], last = strs[n - 1];\n        int i = 0;\n        while (i < first.length()) {\n            if (first.charAt(i) == last.charAt(i)) {\n                i += 1;\n            } else {\n                break;\n            }\n        }\n        return i == 0 ? "" : first.substring(0, i);\n    }\n}\n'))),(0,o.kt)(u,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)(h,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * @param {string[]} strs\n * @return {string}\n */\nvar longestCommonPrefix = function(strs) {\n    if (strs.length == 0) return "";\n    strs.sort();\n    let first = strs[0];\n    let last = strs[strs.length - 1];\n    let i = 0;\n    while (i < first.length) {\n        if (first.charAt(i) == last.charAt(i)) {\n            i += 1;\n        } else {\n            break;\n        }\n    }\n    return i == 0 ? "" : first.slice(0, i);\n};\n'))),(0,o.kt)(u,{value:"py",label:"Python",mdxType:"TabItem"},(0,o.kt)(h,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'class Solution:\n    def longestCommonPrefix(self, strs: List[str]) -> str:\n        if len(strs) == 0: return \n        strs.sort()\n        first, last = strs[0], strs[-1]\n        i = 0\n        while i < len(first):\n            if first[i] == last[i]:\n                i += 1\n            else:\n                break\n        return "" if i == 0 else first[:i]\n'))),(0,o.kt)(u,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,o.kt)(h,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'class Solution {\npublic:\n    string longestCommonPrefix(vector<string>& strs) {\n        if (!strs.size()) {\n            return "";\n        }\n        sort(strs.begin(), strs.end());\n        string ans = "";\n        string first = strs[0];\n        string last = strs[strs.size() - 1];\n        for (int i = 0; i < first.size(); i++) {\n            if (first[i] == last[i]) {\n                ans += first[i];\n            } else {\n                break;\n            }\n        }\n        return ans;\n    }\n};\n')))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"approach-2-linear-search"},"Approach 2: Linear Search"),(0,o.kt)("p",null,"Compare any two words, find the common prefix and keep moving forward with the next word in the array, at the end we have found the common prefix. "),(0,o.kt)("p",null,"In the middle, if we find a common prefix is ",(0,o.kt)("inlineCode",{parentName:"p"},'""')," then break the loop and return it.  "),(0,o.kt)("p",null,"Time complexity: $O(n * s)$, where n - # of elements in the array, s - length of the substring"),(0,o.kt)("p",null,"Space complexity: $O(1)$"),(0,o.kt)(c,{mdxType:"Tabs"},(0,o.kt)(u,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(h,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'class Solution {\n    public String longestCommonPrefix(String[] strs) {\n        if (strs.length == 0) return "";\n        String word = strs[0];\n        for (int i = 1; i < strs.length; i++) {\n            // Keep minimize the prefix word (previous) which match starting position with the current word.\n            while (!strs[i].startsWith(word)) {\n                word = word.substring(0, word.length() - 1);\n            }\n            // If word has no matching prefix with the current word, then there is no common prefix,\n            // which implies there won\'t be any common prefix in the subsequent non-processed words.\n            if ("".equals(word)) {\n                return "";\n            }\n        }\n        return word;\n    }\n}\n')))))}g.isMDXComponent=!0}}]);