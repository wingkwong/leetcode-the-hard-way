"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[9489],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,h=c["".concat(u,".").concat(d)]||c[d]||p[d]||o;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},11442:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return c}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(8539),l=["components"],u={description:"Author: @heiheihang | https://leetcode.com/problems/matrix-diagonal-sum/"},s="1572 - Matrix Diagonal Sum (Easy)",m={unversionedId:"1500-1599/matrix-diagonal-sum-easy",id:"1500-1599/matrix-diagonal-sum-easy",title:"1572 - Matrix Diagonal Sum (Easy)",description:"Author: @heiheihang | https://leetcode.com/problems/matrix-diagonal-sum/",source:"@site/solutions/1500-1599/1572-matrix-diagonal-sum-easy.md",sourceDirName:"1500-1599",slug:"/1500-1599/matrix-diagonal-sum-easy",permalink:"/leetcode-the-hard-way/solutions/1500-1599/matrix-diagonal-sum-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1500-1599/1572-matrix-diagonal-sum-easy.md",tags:[],version:"current",sidebarPosition:1572,frontMatter:{description:"Author: @heiheihang | https://leetcode.com/problems/matrix-diagonal-sum/"},sidebar:"tutorialSidebar",previous:{title:"1547 - Minimum Cost to Cut a Stick (Hard)",permalink:"/leetcode-the-hard-way/solutions/1500-1599/minimum-cost-to-cut-a-stick-hard"},next:{title:"1575 - Count All Possible Routes (Hard)",permalink:"/leetcode-the-hard-way/solutions/1500-1599/count-all-possible-routes-hard"}},p={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Iteration",id:"approach-1-iteration",level:2}],d={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1572---matrix-diagonal-sum-easy"},"1572 - Matrix Diagonal Sum (Easy)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/matrix-diagonal-sum/"},"https://leetcode.com/problems/matrix-diagonal-sum/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Given a square matrix ",(0,o.kt)("inlineCode",{parentName:"p"},"mat"),", return the sum of the matrix diagonals."),(0,o.kt)("p",null,"Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/08/14/sample_1911.png",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: mat = [[1,2,3],\n              [4,5,6],\n              [7,8,9]]\nOutput: 25\nExplanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25\nNotice that element mat[1][1] = 5 is counted only once.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: mat = [[1,1,1,1],\n              [1,1,1,1],\n              [1,1,1,1],\n              [1,1,1,1]]\nOutput: 8\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: mat = [[5]]\nOutput: 5\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"n == mat.length == mat[i].length")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= n <= 100")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= mat[i][j] <= 100"))),(0,o.kt)("h2",{id:"approach-1-iteration"},"Approach 1: Iteration"),(0,o.kt)("p",null,"We have to first iterate the primary diagonal first. In the primary diagonal, the row number equals to the column number, so it is pretty straightforward to get the numbers on the primary diagonal. On the secondary diagonal, the column number decreases as row number increases, and you should be able to obtain the relation ",(0,o.kt)("inlineCode",{parentName:"p"},"col = len(mat) - row - 1"),". We also have to be mindful to avoid computing the element at ",(0,o.kt)("inlineCode",{parentName:"p"},"mat[len(mat)//2][len(mat)//2]")," twice, so we add a conditional check to skip if it exists. Note that this does not always exist (if the dimension of the matrix is two even numbers)"),(0,o.kt)(i.Z,{name:"@heiheihang",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def diagonalSum(self, mat: List[List[int]]) -> int:\n        \n        #initialize result\n        result = 0\n        \n        #add all values in primary diagonal\n        for row in range(len(mat)):\n            #col = row in primary diagonal\n            col = row \n            \n            #add the value to result\n            result += mat[row][col]\n        \n        #add all values in secondary diagonal\n        for row in range(len(mat)):\n            \n            #col is the the opposite end of row in secondary diagonal\n            col = len(mat) - row - 1\n            \n            #to avoid adding the center number twice, we skip if row == col\n            if(row == col):\n                continue\n                \n            #add the value to result\n            result += mat[row][col]\n        \n        #return result\n        return result\n")))}h.isMDXComponent=!0},8539:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.name;return a.createElement("div",{className:"solution-author-wrapper"},a.createElement("span",null,"This solution is written by ",t))}}}]);