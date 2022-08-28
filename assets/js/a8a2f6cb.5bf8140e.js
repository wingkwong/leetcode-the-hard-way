"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[4436],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),h=a,f=c["".concat(s,".").concat(h)]||c[h]||m[h]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},30561:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=r(8539),l=["components"],s={description:"Author: @wingkwong | https://leetcode.com/problems/rank-transform-of-an-array",tags:["Sorting"]},p="1331 - Rank Transform of an Array (Easy)",u={unversionedId:"1300-1399/rank-transform-of-an-array-easy",id:"1300-1399/rank-transform-of-an-array-easy",title:"1331 - Rank Transform of an Array (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/rank-transform-of-an-array",source:"@site/solutions/1300-1399/1331-rank-transform-of-an-array-easy.md",sourceDirName:"1300-1399",slug:"/1300-1399/rank-transform-of-an-array-easy",permalink:"/leetcode-the-hard-way/solutions/1300-1399/rank-transform-of-an-array-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1300-1399/1331-rank-transform-of-an-array-easy.md",tags:[{label:"Sorting",permalink:"/leetcode-the-hard-way/solutions/tags/sorting"}],version:"current",sidebarPosition:1331,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/rank-transform-of-an-array",tags:["Sorting"]},sidebar:"tutorialSidebar",previous:{title:"1329 - Sort the Matrix Diagonally (Medium)",permalink:"/leetcode-the-hard-way/solutions/1300-1399/sort-the-matrix-diagonally-medium"},next:{title:"1334 - Find the City With the Smallest Number of Neighbors at a Threshold Distance (Medium)",permalink:"/leetcode-the-hard-way/solutions/1300-1399/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance-medium"}},m={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sorting with Hash Map",id:"approach-1-sorting-with-hash-map",level:2},{value:"Approach 2: Sorting without Hash Map",id:"approach-2-sorting-without-hash-map",level:2}],h={toc:c};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1331---rank-transform-of-an-array-easy"},"1331 - Rank Transform of an Array (Easy)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/rank-transform-of-an-array"},"https://leetcode.com/problems/rank-transform-of-an-array")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Given an array of integers ",(0,o.kt)("inlineCode",{parentName:"p"},"arr"),", replace each element with its rank."),(0,o.kt)("p",null,"The rank represents how large the element is. The rank has the following rules:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Rank is an integer starting from 1."),(0,o.kt)("li",{parentName:"ul"},"The larger the element, the larger the rank. If two elements are equal, their rank must be the same."),(0,o.kt)("li",{parentName:"ul"},"Rank should be as small as possible.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: arr = [40,10,20,30]\nOutput: [4,1,2,3]\nExplanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: arr = [100,100,100]\nOutput: [1,1,1]\nExplanation: Same elements share the same rank.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: arr = [37,12,28,9,100,56,80,5,12]\nOutput: [5,3,4,2,8,6,7,1,3]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0 <= arr.length <= 10^5")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-10^9 <= arr[i] <= 10^9"))),(0,o.kt)("h2",{id:"approach-1-sorting-with-hash-map"},"Approach 1: Sorting with Hash Map"),(0,o.kt)(i.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> arrayRankTransform(vector<int>& arr) {\n        vector<int> ans, sorted_arr { arr };\n        // hash map\n        unordered_map<int, int> m;\n        // sort input arr\n        sort(sorted_arr.begin(), sorted_arr.end());\n        // [40,10,20,30] -> [10,20,30,40]\n        // use hash map to map the sorted element with its index\n        // use emplace to handle cases like [100,100,100]\n        for (auto& x : sorted_arr) m.emplace(x, (int) m.size() + 1);\n        // build the final output\n        for (auto& x : arr) ans.push_back(m[x]);\n        return ans;\n    }\n};\n")),(0,o.kt)("h2",{id:"approach-2-sorting-without-hash-map"},"Approach 2: Sorting without Hash Map"),(0,o.kt)(i.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> arrayRankTransform(vector<int>& arr) {\n        int n = (int) arr.size();\n        vector<pair<int, int>> v; // {val, index}\n        for (int i = 0; i < n; i++) v.push_back({arr[i], i});\n        // sort by value\n        sort(v.begin(), v.end());\n        // init rank\n        int rank = 1;\n        for (int i = 0; i < n; i++) {\n            // increase rank only when the cur val is different than the prev one\n            rank += i > 0 && v[i].first != v[i - 1].first;\n            // in-place update arr\n            arr[v[i].second] = rank;\n        }\n        return arr;\n    }\n};\n")))}f.isMDXComponent=!0},8539:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(67294);function a(e){var t=e.name;return n.createElement("div",{className:"solution-author-wrapper"},n.createElement("span",null,"This solution is written by ",t))}}}]);