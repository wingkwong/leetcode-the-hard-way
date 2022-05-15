"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[4810],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(k,o(o({ref:t},l),{},{components:n})):a.createElement(k,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2239:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],p={description:"Author: @wingkwong"},s="Backtracking",c={unversionedId:"basic-topics/backtracking",id:"basic-topics/backtracking",title:"Backtracking",description:"Author: @wingkwong",source:"@site/tutorials/basic-topics/backtracking.md",sourceDirName:"basic-topics",slug:"/basic-topics/backtracking",permalink:"/leetcode-the-hard-way/tutorials/basic-topics/backtracking",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tutorials/basic-topics/backtracking.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652607870,formattedLastUpdatedAt:"5/15/2022",frontMatter:{description:"Author: @wingkwong"},sidebar:"tutorialSidebar",previous:{title:"Arrays",permalink:"/leetcode-the-hard-way/tutorials/basic-topics/arrays"},next:{title:"Binary Search",permalink:"/leetcode-the-hard-way/tutorials/basic-topics/binary-search"}},l={},u=[{value:"Suggested Problems",id:"suggested-problems",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"backtracking"},"Backtracking"),(0,i.kt)("p",null,"A backtracking algorithm is used to construct a solution recursively by starting with an empty solution and adding solution one by one. Let's take ",(0,i.kt)("a",{parentName:"p",href:"../../solutions/0000-0099/permutations-medium"},"0046 - Permutations (Medium)")," as an example, if we have an array ",(0,i.kt)("inlineCode",{parentName:"p"},"nums")," of distinct integers, what are all the possible permutations? If the input is ",(0,i.kt)("inlineCode",{parentName:"p"},"[1,2,3]"),", then the permutations would be ",(0,i.kt)("inlineCode",{parentName:"p"},"[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]"),". In C++, it is easy to solve this problem by using the built-in STL ",(0,i.kt)("inlineCode",{parentName:"p"},"next_permutation"),". However, we can also solve it using backtracking."),(0,i.kt)("p",null,"The general steps are as follows."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Sort the input array if necessary. However, in this example, sorting is not necessary.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"sort(nums.begin(), nums.end());\n")),(0,i.kt)("p",null,"2","."," Define ",(0,i.kt)("inlineCode",{parentName:"p"},"ans")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"tmp")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"ans")," is the array storing all final permutations and ",(0,i.kt)("inlineCode",{parentName:"p"},"tmp")," is used to store possible permutations at some point."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"vector<vector<int>> ans;\nvector<int> tmp;\n")),(0,i.kt)("p",null,"3","."," Call ",(0,i.kt)("inlineCode",{parentName:"p"},"backtrack()")," function in main"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"backtrack(nums, ans, tmp);\n")),(0,i.kt)("p",null,"4","."," Let's add logic in ",(0,i.kt)("inlineCode",{parentName:"p"},"backtrack()")," function. First we need to define the exit criteria. When should we push ",(0,i.kt)("inlineCode",{parentName:"p"},"tmp")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"ans"),"? If ",(0,i.kt)("inlineCode",{parentName:"p"},"tmp")," already got enough candidates, then we can push ",(0,i.kt)("inlineCode",{parentName:"p"},"tmp")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"ans"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"if ((int) tmp.size() == (int) nums.size()) {\n    ans.push_back(tmp);\n    return;\n}\n")),(0,i.kt)("p",null,"5","."," Iterate each number, check If the candidate has been used or not, skip it if it is already in ",(0,i.kt)("inlineCode",{parentName:"p"},"tmp"),". Otherwise, push it to ",(0,i.kt)("inlineCode",{parentName:"p"},"tmp")," and call ",(0,i.kt)("inlineCode",{parentName:"p"},"backtrack()")," again. After that, remove the previous candidate from ",(0,i.kt)("inlineCode",{parentName:"p"},"tmp")," and move to the next candidate."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"for (auto x : nums) {\n    if (find(tmp.begin(), tmp.end(), x) != tmp.end()) continue;\n    tmp.push_back(x);\n    backtrack(nums, ans, tmp);\n    tmp.pop_back();   \n}\n")),(0,i.kt)("h3",{id:"suggested-problems"},"Suggested Problems"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../solutions/0000-0099/combination-sum-medium"},"0039 - Combination Sum (Medium)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../solutions/0000-0099/combination-sum-ii-medium"},"0040 - Combination Sum II (Medium)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../solutions/0000-0099/permutations-medium"},"0046 - Permutations (Medium)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../solutions/0000-0099/subsets-medium"},"0078 - Subsets (Medium)"))))}d.isMDXComponent=!0}}]);