"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[6673],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(t),d=r,g=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return t?a.createElement(g,o(o({ref:n},m),{},{components:t})):a.createElement(g,o({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},32277:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=(t(8539),["components"]),l={description:"Author: @wingkwong | https://leetcode.com/problems/find-all-anagrams-in-a-string/"},s="0438 - Find All Anagrams in a String (Medium)",p={unversionedId:"0400-0499/find-all-anagrams-in-a-string-medium",id:"0400-0499/find-all-anagrams-in-a-string-medium",title:"0438 - Find All Anagrams in a String (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/find-all-anagrams-in-a-string/",source:"@site/solutions/0400-0499/0438-find-all-anagrams-in-a-string-medium.md",sourceDirName:"0400-0499",slug:"/0400-0499/find-all-anagrams-in-a-string-medium",permalink:"/leetcode-the-hard-way/solutions/0400-0499/find-all-anagrams-in-a-string-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0400-0499/0438-find-all-anagrams-in-a-string-medium.md",tags:[],version:"current",sidebarPosition:438,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/find-all-anagrams-in-a-string/"},sidebar:"tutorialSidebar",previous:{title:"0435 - Non-overlapping Intervals (Medium)",permalink:"/leetcode-the-hard-way/solutions/0400-0499/non-overlapping-intervals-medium"},next:{title:"0441 - Arranging Coins (Easy)",permalink:"/leetcode-the-hard-way/solutions/0400-0499/arranging-coins-easy"}},m={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sliding Window",id:"approach-1-sliding-window",level:2}],c={toc:u};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"0438---find-all-anagrams-in-a-string-medium"},"0438 - Find All Anagrams in a String (Medium)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/find-all-anagrams-in-a-string/"},"https://leetcode.com/problems/find-all-anagrams-in-a-string/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"Given two strings ",(0,i.kt)("inlineCode",{parentName:"p"},"s")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"p"),", return ",(0,i.kt)("em",{parentName:"p"},"an array of all the start indices of")," ",(0,i.kt)("inlineCode",{parentName:"p"},"p"),(0,i.kt)("em",{parentName:"p"},"'s anagrams in")," ",(0,i.kt)("inlineCode",{parentName:"p"},"s"),". You may return the answer in ",(0,i.kt)("strong",{parentName:"p"},"any order"),"."),(0,i.kt)("p",null,"An ",(0,i.kt)("strong",{parentName:"p"},"Anagram")," is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: s = "cbaebabacd", p = "abc"\nOutput: [0,6]\nExplanation:\nThe substring with start index = 0 is "cba", which is an anagram of "abc".\nThe substring with start index = 6 is "bac", which is an anagram of "abc".\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: s = "abab", p = "ab"\nOutput: [0,1,2]\nExplanation:\nThe substring with start index = 0 is "ab", which is an anagram of "ab".\nThe substring with start index = 1 is "ba", which is an anagram of "ab".\nThe substring with start index = 2 is "ab", which is an anagram of "ab".\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= s.length, p.length <= 3 * 104")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"p")," consist of lowercase English letters.")),(0,i.kt)("h2",{id:"approach-1-sliding-window"},"Approach 1: Sliding Window"),(0,i.kt)("p",null,"First we build the count ",(0,i.kt)("inlineCode",{parentName:"p"},"m2")," of each character in string ",(0,i.kt)("inlineCode",{parentName:"p"},"p"),". Then we keep the window size as ",(0,i.kt)("inlineCode",{parentName:"p"},"m"),". If it is within the window, then we update ",(0,i.kt)("inlineCode",{parentName:"p"},"m1")," until the pointer ",(0,i.kt)("inlineCode",{parentName:"p"},"j")," is out of the window. If ",(0,i.kt)("inlineCode",{parentName:"p"},"m1")," is equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"m2"),", then we can add the current ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," to the answer vector. After that, we need to move decrease ",(0,i.kt)("inlineCode",{parentName:"p"},"m1[s[i] - 'a']]")," by 1 as the character ",(0,i.kt)("inlineCode",{parentName:"p"},"s[i]")," will be out of the window."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\n public:\n  vector<int> findAnagrams(string s, string p) {\n      vector<int> ans, m1(26, 0), m2(26, 0);\n      int n = (int) s.size(), m = (int) p.size(), j = 0;\n      for (auto x : p) m2[x - 'a']++;\n      for (int i = 0; i < n; i++) {\n          while (j < n && j - i + 1 <= m) m1[s[j++] - 'a']++;\n          if (m1 == m2) ans.push_back(i);\n          m1[s[i] - 'a']--;\n      }\n      return ans;\n  }\n};\n")),(0,i.kt)("p",null,"Time Complexity: O(n + m)"),(0,i.kt)("p",null,"Space Complexity: O(1)"))}d.isMDXComponent=!0},8539:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(67294);function r(e){var n=e.name;return a.createElement("div",{className:"solution-author-wrapper"},a.createElement("span",null,"This solution is written by ",n))}}}]);