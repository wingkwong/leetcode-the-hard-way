"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[42590],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return t?r.createElement(h,o(o({ref:n},m),{},{components:t})):r.createElement(h,o({ref:n},m))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},38898:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const i={description:"Author: @jessicaribeiroalves, @radojicic23 | https://leetcode.com/problems/roman-to-integer/"},o="0013 - Roman to Integer (Easy)",l={unversionedId:"0000-0099/roman-to-integer-easy",id:"0000-0099/roman-to-integer-easy",title:"0013 - Roman to Integer (Easy)",description:"Author: @jessicaribeiroalves, @radojicic23 | https://leetcode.com/problems/roman-to-integer/",source:"@site/solutions/0000-0099/0013-roman-to-integer-easy.md",sourceDirName:"0000-0099",slug:"/0000-0099/roman-to-integer-easy",permalink:"/solutions/0000-0099/roman-to-integer-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0013-roman-to-integer-easy.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{description:"Author: @jessicaribeiroalves, @radojicic23 | https://leetcode.com/problems/roman-to-integer/"},sidebar:"tutorialSidebar",previous:{title:"0012 - Integer to Roman (Medium)",permalink:"/solutions/0000-0099/integer-to-roman-medium"},next:{title:"0014 - Longest Common Prefix (Easy)",permalink:"/solutions/0000-0099/longest-common-prefix-easy"}},s={},p=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Iterating over the string",id:"approach-1-iterating-over-the-string",level:2}],m=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",n)},u=m("Tabs"),c=m("TabItem"),d=m("SolutionAuthor"),h={toc:p},k="wrapper";function g(e){let{components:n,...t}=e;return(0,a.kt)(k,(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0013---roman-to-integer-easy"},"0013 - Roman to Integer (Easy)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/roman-to-integer/"},"https://leetcode.com/problems/roman-to-integer/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Roman numerals are represented by seven different symbols: ",(0,a.kt)("inlineCode",{parentName:"p"},"I"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"V"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"X"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"L"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"C"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"D")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"M"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Python"},"Symbol       Value\nI             1\nV             5\nX             10\nL             50\nC             100\nD             500\nM             1000\n")),(0,a.kt)("p",null,"For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"2")," is written as ",(0,a.kt)("inlineCode",{parentName:"p"},"II")," in Roman numeral, just two ones added together. ",(0,a.kt)("inlineCode",{parentName:"p"},"12")," is written as ",(0,a.kt)("inlineCode",{parentName:"p"},"XII"),", which is simply ",(0,a.kt)("inlineCode",{parentName:"p"},"X + II"),". The number ",(0,a.kt)("inlineCode",{parentName:"p"},"27")," is written as ",(0,a.kt)("inlineCode",{parentName:"p"},"XXVII"),", which is ",(0,a.kt)("inlineCode",{parentName:"p"},"XX + V + II"),"."),(0,a.kt)("p",null,"Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not ",(0,a.kt)("inlineCode",{parentName:"p"},"IIII"),". Instead, the number four is written as ",(0,a.kt)("inlineCode",{parentName:"p"},"IV"),". Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as ",(0,a.kt)("inlineCode",{parentName:"p"},"IX"),". There are six instances where subtraction is used:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"I")," can be placed before ",(0,a.kt)("inlineCode",{parentName:"li"},"V")," (5) and ",(0,a.kt)("inlineCode",{parentName:"li"},"X")," (10) to make 4 and 9."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"X")," can be placed before ",(0,a.kt)("inlineCode",{parentName:"li"},"L")," (50) and ",(0,a.kt)("inlineCode",{parentName:"li"},"C")," (100) to make 40 and 90."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"C")," can be placed before ",(0,a.kt)("inlineCode",{parentName:"li"},"D")," (500) and ",(0,a.kt)("inlineCode",{parentName:"li"},"M")," (1000) to make 400 and 900.")),(0,a.kt)("p",null,"Given a roman numeral, convert it to an integer."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Python"},'Input: s = "III"\nOutput: 3\nExplanation: III = 3.\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Python"},'Input: s = "LVIII"\nOutput: 58\nExplanation: L = 50, V= 5, III = 3.\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 3:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Python"},'Input: s = "MCMXCIV"\nOutput: 1994\nExplanation: M = 1000, CM = 900, XC = 90 and IV = 4.\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= s.length <= 15")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"s")," contains only the characters ",(0,a.kt)("inlineCode",{parentName:"li"},"('I', 'V', 'X', 'L', 'C', 'D', 'M')"),"."),(0,a.kt)("li",{parentName:"ul"},"It is ",(0,a.kt)("strong",{parentName:"li"},"guaranteed")," that ",(0,a.kt)("inlineCode",{parentName:"li"},"s")," is a valid roman numeral in the range ",(0,a.kt)("inlineCode",{parentName:"li"},"[1, 3999]"),".")),(0,a.kt)("h2",{id:"approach-1-iterating-over-the-string"},"Approach 1: Iterating over the string"),(0,a.kt)("p",null,"The solution used was iterating over the string and executing a condition that meets the subtraction principles described above in the problem statement, in order to return the result corresponding to the final sum."),(0,a.kt)("p",null,"The condition says: if the current character is greater than the previous character then subtract the previous character value from the $result$, otherwise increment the value of the previous character to the $result$."),(0,a.kt)("p",null,"For example, if we consider the string $s = 'XIV'$, the first character ",(0,a.kt)("inlineCode",{parentName:"p"},"'X'")," whose value is ",(0,a.kt)("inlineCode",{parentName:"p"},"10")," will satisfy the condition, since the $previousChar$ variable is initialized with ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),", then $result$ still remains ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),".\nThe second character ",(0,a.kt)("inlineCode",{parentName:"p"},"'I'")," whose value is ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," won't satisfy the condition once ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," isn't greater than $previousChar$ which is now ",(0,a.kt)("inlineCode",{parentName:"p"},"10"),". So $result$ is incremented by ",(0,a.kt)("inlineCode",{parentName:"p"},"10")," and $previousChar$ is updated to ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),".\nFinally, the third character ",(0,a.kt)("inlineCode",{parentName:"p"},"'V'")," whose value is ",(0,a.kt)("inlineCode",{parentName:"p"},"5")," will satisfy the condition because is greater than $previousChar$. So from the $result$ is subtracted ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," and $previousChar$ is updated to 5.\nThe code finishes the loop with $result = 9$ and finally increments the value of $previousChar$ to the $result$. So our final $result$ becomes ",(0,a.kt)("inlineCode",{parentName:"p"},"14"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Time Complexity: $O(n)$")),(0,a.kt)("p",null,"This solution will be $O(n)$ as the time varies proportionally to the length of the string."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Space Complexity: $O(1)$")),(0,a.kt)("p",null,"The space complexity for this solution is $O(1)$ as we only created variables for the counters and they're not related to the input size."),(0,a.kt)(u,{mdxType:"Tabs"},(0,a.kt)(c,{value:"py",label:"Python",mdxType:"TabItem"},(0,a.kt)(d,{name:"@jessicaribeiroalves",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'romanNumeralsDict = {\n    "I": 1,\n    "V": 5,\n    "X": 10,\n    "L": 50,\n    "C": 100,\n    "D": 500,\n    "M": 1000\n}\n\nclass Solution(object):    \n    def romanToInt(self, s):\n        result = 0\n        previousChar = 0\n\n        for char in s:\n            if romanNumeralsDict[char] > previousChar:\n                result -= previousChar\n            else:\n                result += previousChar\n\n            previousChar = romanNumeralsDict[char]\n\n        result += previousChar\n        return result\n\n'))),(0,a.kt)(c,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)(d,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * @param {string} s\n * @return {number}\n */\nvar romanToInt = function(s) {\n    const roman = {\n        "I": 1, \n        "V": 5, \n        "X": 10, \n        "L": 50, \n        "C": 100, \n        "D": 500, \n        "M": 1000};\n    let res = 0;\n    for (i = 0; i < s.length; i++) {\n        if (i + 1 < s.length && roman[s[i]] < roman[s[i + 1]]) {\n            res -= roman[s[i]];\n        } else {\n            res += roman[s[i]];\n        }\n    }\n    return res;\n};\n'))),(0,a.kt)(c,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)(d,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int romanToInt(string s) {\n        unordered_map<char, int> roman = {\n            {'I', 1}, \n            {'V', 5}, \n            {'X', 10}, \n            {'L', 50}, \n            {'C', 100}, \n            {'D', 500}, \n            {'M', 1000}\n        };\n        int res = 0;\n        for (int i = 0; i < s.length(); i++) {\n            if (i + 1 < s.length() && roman[s[i]] < roman[s[i + 1]]) {\n                res -= roman[s[i]];\n            } else {\n                res += roman[s[i]];\n            }\n        }\n        return res;\n    }\n}; \n")))))}g.isMDXComponent=!0}}]);