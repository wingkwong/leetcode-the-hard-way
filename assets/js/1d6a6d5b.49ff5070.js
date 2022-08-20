"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[7689],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,d=m["".concat(l,".").concat(c)]||m[c]||u[c]||i;return n?r.createElement(d,o(o({ref:t},h),{},{components:n})):r.createElement(d,o({ref:t},h))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58548:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return h},toc:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(8539),s=["components"],l={description:"Author: @la-la-Cute | https://leetcode.com/problems/implement-strstr/"},p="0028 - Implement strStr() (Easy)",h={unversionedId:"0000-0099/implement-strstr-easy",id:"0000-0099/implement-strstr-easy",title:"0028 - Implement strStr() (Easy)",description:"Author: @la-la-Cute | https://leetcode.com/problems/implement-strstr/",source:"@site/solutions/0000-0099/0028-implement-strstr-easy.md",sourceDirName:"0000-0099",slug:"/0000-0099/implement-strstr-easy",permalink:"/leetcode-the-hard-way/solutions/0000-0099/implement-strstr-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0028-implement-strstr-easy.md",tags:[],version:"current",sidebarPosition:28,frontMatter:{description:"Author: @la-la-Cute | https://leetcode.com/problems/implement-strstr/"},sidebar:"tutorialSidebar",previous:{title:"0024 - Swap Nodes in Pairs (Medium)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/swap-nodes-in-pairs-medium"},next:{title:"0034 - Find First and Last Position of Element in Sorted Array (Medium)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/find-first-and-last-position-of-element-in-sorted-array-medium"}},u={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Rolling Hash",id:"approach-1-rolling-hash",level:2}],c={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"0028---implement-strstr-easy"},"0028 - Implement strStr() (Easy)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/implement-strstr/"},"https://leetcode.com/problems/implement-strstr/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"Implement ",(0,i.kt)("a",{parentName:"p",href:"http://www.cplusplus.com/reference/cstring/strstr/"},"strStr()"),"."),(0,i.kt)("p",null,"Return the index of the first occurrence of needle in haystack, or ",(0,i.kt)("inlineCode",{parentName:"p"},"-1")," if ",(0,i.kt)("inlineCode",{parentName:"p"},"needle")," is not part of ",(0,i.kt)("inlineCode",{parentName:"p"},"haystack"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Clarification:")),(0,i.kt)("p",null,"What should we return when ",(0,i.kt)("inlineCode",{parentName:"p"},"needle")," is an empty string? This is a great question to ask during an interview."),(0,i.kt)("p",null,"For the purpose of this problem, we will return 0 when ",(0,i.kt)("inlineCode",{parentName:"p"},"needle")," is an empty string. This is consistent to C's ",(0,i.kt)("a",{parentName:"p",href:"http://www.cplusplus.com/reference/cstring/strstr/"},"strstr()")," and Java's ",(0,i.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/7/docs/api/java/lang/String.html#indexOf(java.lang.String)"},"indexOf()"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: haystack = "hello", needle = "ll"\nOutput: 2\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: haystack = "aaaaa", needle = "bba"\nOutput: -1\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 3:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: haystack = "", needle = ""\nOutput: 0\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0 <= haystack.length, needle.length <= 5 * 10^4")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"haystack")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"needle")," consist of only lower-case English characters.")),(0,i.kt)("h2",{id:"approach-1-rolling-hash"},"Approach 1: Rolling Hash"),(0,i.kt)(o.Z,{name:"@la-la-Cute",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class Solution:\n    """Searching for substring in a string - using Rolling hash (the Rabin-Karp algorithm)"""\n\n    def strStr(self, s: str, pattern: str) -> int:\n        # Before anything else, check if `pattern` is an empty string, in which case we return 0 as required by the problem.\n        if not pattern:\n            return 0\n        # Choose a prime number for the base and a modulus, denoted by d and q respectively.\n        PRIME, MOD = 100007, 500000\n        # For better readability, here we assign the lengths of `s` and `pattern` to the variables n and m respectively.\n        n, m = len(s), len(pattern)\n        # Precompute d ^ (m - 1) mod q, where d is the base chosen, m is len(pattern) and q is the modulus chosen.\n        #   Note: it is important this value be computed efficiently. One way is to use the built-in pow.\n        h = pow(PRIME, m - 1, MOD)\n        # Compute the hash value of `pattern`. This can be done by simply applying the formula.\n        hash_val = sum(ord(c) * pow(PRIME, m - 1 - i, MOD) for i, c in enumerate(pattern)) % MOD\n        # Initialize a dictionary which maps indices to the hash values of their respective substrings.\n        #   Specifically, t[i] is the hash value of s[i: i + m] (i.e., an m-sized substring of `s` starting at index `i`)\n        t = {}\n\n        # Calculate the hash value of all substrings of `s`, the number of which is n - m.\n        for idx in range(n - m + 1):\n            # If idx == 0, compute the hash value of the first substring. Just like the way we do it for `pattern` above.\n            if idx == 0:\n                t[0] = sum(ord(s[j]) * pow(PRIME, m - 1 - j, MOD) for j in range(m)) % MOD\n            else:\n                # For i > 0, here comes the essence of "rolling hash", \n                #   whereby we manage to compute t[i - 1] with little work.\n                #\n                # EXPLANATION:\n                #   The formula for t[i] is given by:\n                #       (the sum of s_k * d ^ (m + i - 1 - k) for i <= k < i + m) mod q\n                #       where s_k is the numerical value for the s[k] (here we use the ASCII value).\n                #   Then, observe that, for two successive substrings of length m,\n                #       or using Python\'s slicing syntax, s[i: i + m] and s[i + 1: i + m + 1],\n                #       one can say they differ by \n                #           i) the previously leftmost character, which is now dropped, and,\n                #           ii) the currently rightmost character, which is new part of the substring.\n                #   In other words, the other m - 1 characters are basically unaffected \n                #       except that their positions are shifted leftward by one index.\n                #       These charachers, alongside the differing ones, make up of both t[i - 1] and t[i], \n                #       with the only difference of the power that is increased by 1.\n                #   To compute t[i] from t[i - 1],\n                #       firstly, find s_k * d ^ (m + i - 1 - k) for the leftmost character to be dropped,\n                #           that is, to multiply ord(s[i - 1]) by d ^ (m - 1) = h (precomputed),\n                #           and take that amount off t[i - 1];\n                #       secondly, multiply the result by d, adjusting for the power of d having increased by one \n                #           (with respect to each characher).\n                #       thirdly, add the last part of t[i], that of the character on the right end, \n                #           given by ord(s[i + m - 1]), to the sum.\n                #       finally, don\'t forget the modulo operation.\n                t[idx] = (PRIME * (t[idx - 1] - ord(s[idx - 1]) * h) + ord(s[idx + m - 1])) % MOD\n            # If two strings are identical, they must have the same hash value.\n            # However, beware of "spurious hits", where two different strings happen to share the same hash value.\n            # As such, we compare the substring against `pattern` to verify the result.\n            if t[idx] == hash_val and s[idx : idx + m] == pattern:\n                return idx\n        return -1\n')))}d.isMDXComponent=!0},8539:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294);function a(e){var t=e.name;return r.createElement("div",{className:"solution-author-wrapper"},r.createElement("span",null,"This solution is written by ",t))}}}]);