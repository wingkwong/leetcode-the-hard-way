"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[5109],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return k}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=a.createContext({}),o=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=o(e.components);return a.createElement(m.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,m=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=o(t),k=r,d=c["".concat(m,".").concat(k)]||c[k]||u[k]||s;return t?a.createElement(d,i(i({ref:n},l),{},{components:t})):a.createElement(d,i({ref:n},l))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=c;var p={};for(var m in n)hasOwnProperty.call(n,m)&&(p[m]=n[m]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<s;o++)i[o]=t[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},26502:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return m},metadata:function(){return l},toc:function(){return c}});var a=t(87462),r=t(63366),s=(t(67294),t(3905)),i=t(8539),p=["components"],m={description:"Author: @wingkwong | https://leetcode.com/problems/find-unique-binary-string/"},o="1980 - Find Unique Binary String (Medium)",l={unversionedId:"1900-1999/find-unique-binary-string-medium",id:"1900-1999/find-unique-binary-string-medium",title:"1980 - Find Unique Binary String (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/find-unique-binary-string/",source:"@site/solutions/1900-1999/1980-find-unique-binary-string-medium.md",sourceDirName:"1900-1999",slug:"/1900-1999/find-unique-binary-string-medium",permalink:"/leetcode-the-hard-way/solutions/1900-1999/find-unique-binary-string-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1900-1999/1980-find-unique-binary-string-medium.md",tags:[],version:"current",sidebarPosition:1980,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/find-unique-binary-string/"},sidebar:"tutorialSidebar",previous:{title:"1929 - Concatenation of Array (Easy)",permalink:"/leetcode-the-hard-way/solutions/1900-1999/concatenation-of-array-easy"},next:{title:"2000 - 2099",permalink:"/leetcode-the-hard-way/solutions/category/2000---2099"}},u={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Hash Map",id:"approach-1-hash-map",level:2}],k={toc:c};function d(e){var n=e.components,t=(0,r.Z)(e,p);return(0,s.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"1980---find-unique-binary-string-medium"},"1980 - Find Unique Binary String (Medium)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/find-unique-binary-string/"},"https://leetcode.com/problems/find-unique-binary-string/")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"Given an array of strings ",(0,s.kt)("inlineCode",{parentName:"p"},"nums")," containing ",(0,s.kt)("inlineCode",{parentName:"p"},"n")," ",(0,s.kt)("strong",{parentName:"p"},"unique")," binary strings each of length ",(0,s.kt)("inlineCode",{parentName:"p"},"n"),", return ",(0,s.kt)("em",{parentName:"p"},"a binary string of length")," ",(0,s.kt)("inlineCode",{parentName:"p"},"n")," ",(0,s.kt)("em",{parentName:"p"},"that ",(0,s.kt)("strong",{parentName:"em"},"does not appear")," in")," ",(0,s.kt)("inlineCode",{parentName:"p"},"nums"),(0,s.kt)("em",{parentName:"p"},". If there are multiple answers, you may return ",(0,s.kt)("strong",{parentName:"em"},"any")," of them"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: nums = ["01","10"]\nOutput: "11"\nExplanation: "11" does not appear in nums. "00" would also be correct.\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: nums = ["00","01"]\nOutput: "11"\nExplanation: "11" does not appear in nums. "10" would also be correct.\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 3:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: nums = ["111","011","001"]\nOutput: "101"\nExplanation: "101" does not appear in nums. "000", "010", "100", and "110" would also be correct.\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"n == nums.length")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1 <= n <= 16")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"nums[i].length == n")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"nums[i]")," is either ",(0,s.kt)("inlineCode",{parentName:"li"},"'0'")," or ",(0,s.kt)("inlineCode",{parentName:"li"},"'1'"),"."),(0,s.kt)("li",{parentName:"ul"},"All the strings of ",(0,s.kt)("inlineCode",{parentName:"li"},"nums")," are ",(0,s.kt)("strong",{parentName:"li"},"unique"),".")),(0,s.kt)("h2",{id:"approach-1-hash-map"},"Approach 1: Hash Map"),(0,s.kt)("p",null,"First we store the existing binary string into a hash map. Then we try to build all binary strings one by one and check if it exists in the hash map or not. If so, we return the answer."),(0,s.kt)("p",null,"As ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," is at most ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"16")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"16")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"16"))))),", there would be at most ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"2"),(0,s.kt)("mn",{parentName:"msup"},"16")),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"65536")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2 ^ {16} = 65536")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"16"))))))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"65536")))))," possibilities. To find all of them, we can do the following."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"// try all 2 ^ n possibilities\nfor (int i = 0; i < 1 << n; i ++) {\n    string s;\n    // if the bit is set, mark it as one\n    if (i & (1 << j)) s += '1';\n    // else mark it as zero\n    else s += '0'\n    // TODO: do something with s\n    // s here would be one of the binary string\n}\n")),(0,s.kt)(i.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    string findDifferentBinaryString(vector<string>& nums) {\n        string ans;\n        // put existing binary strings into a hash map\n        unordered_map<string, int> m;\n        for (auto x : nums) m[x]++;\n        int n = nums.size();\n        // build all binary strings\n        for (int i = 0; i < 1 << n; i++) {\n            string s;\n            for (int j = 0; j < n; j++) {\n                s += (i & (1 << j)) ? '1' : '0';\n            }\n            // not found in hash map -> found the answer\n            if (!m.count(s)) {\n                ans = s;\n                break;\n            }\n        }\n        return ans;\n    }\n};\n")))}d.isMDXComponent=!0},8539:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(67294);function r(e){var n=e.name;return a.createElement("div",{className:"solution-author-wrapper"},a.createElement("span",null,"This solution is written by ",n))}}}]);