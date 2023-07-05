"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[53237],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,h=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return r?n.createElement(h,i(i({ref:t},m),{},{components:r})):n.createElement(h,i({ref:t},m))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},95713:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={description:"Author: @jessicaribeiroalves | https://leetcode.com/problems/transpose-matrix/",tags:["Array","Matrix","Simulation"]},i="0867 - Transpose Matrix (Easy)",s={unversionedId:"0800-0899/transpose-matrix-easy",id:"0800-0899/transpose-matrix-easy",title:"0867 - Transpose Matrix (Easy)",description:"Author: @jessicaribeiroalves | https://leetcode.com/problems/transpose-matrix/",source:"@site/solutions/0800-0899/0867-transpose-matrix-easy.md",sourceDirName:"0800-0899",slug:"/0800-0899/transpose-matrix-easy",permalink:"/solutions/0800-0899/transpose-matrix-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0800-0899/0867-transpose-matrix-easy.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Matrix",permalink:"/solutions/tags/matrix"},{label:"Simulation",permalink:"/solutions/tags/simulation"}],version:"current",sidebarPosition:867,frontMatter:{description:"Author: @jessicaribeiroalves | https://leetcode.com/problems/transpose-matrix/",tags:["Array","Matrix","Simulation"]},sidebar:"tutorialSidebar",previous:{title:"0853 - Car Fleet (Medium)",permalink:"/solutions/0800-0899/car-fleet-medium"},next:{title:"0869 - Reordered Power of 2 (Medium)",permalink:"/solutions/0800-0899/reordered-power-of-2-medium"}},l={},p=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Iterating over the columns and rows",id:"approach-1-iterating-over-the-columns-and-rows",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=m("Tabs"),c=m("TabItem"),d=m("SolutionAuthor"),h={toc:p},f="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0867---transpose-matrix-easy"},"0867 - Transpose Matrix (Easy)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/transpose-matrix/"},"https://leetcode.com/problems/transpose-matrix/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Given a 2D integer array ",(0,a.kt)("inlineCode",{parentName:"p"},"matrix"),", return ",(0,a.kt)("em",{parentName:"p"},"the ",(0,a.kt)("strong",{parentName:"em"},"transpose")," of")," ",(0,a.kt)("inlineCode",{parentName:"p"},"matrix"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"transpose")," of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/02/10/hint_transpose.png",alt:"Representation of matrix transposition"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Python"},"**Input:** matrix = [[1,2,3],[4,5,6],[7,8,9]]\n**Output:** [[1,4,7],[2,5,8],[3,6,9]]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Python"},"**Input:** matrix = [[1,2,3],[4,5,6]]\n**Output:** [[1,4],[2,5],[3,6]]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"m == matrix.length")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"n == matrix[i].length")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= m, n <= 1000")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= m * n <= 10 ^ 5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-10 ^ 9 <= matrix[i][j] <= 10 ^ 9"))),(0,a.kt)("h2",{id:"approach-1-iterating-over-the-columns-and-rows"},"Approach 1: Iterating over the columns and rows"),(0,a.kt)("p",null,"The solution used was iterating over the columns and rows of the original matrix switching their indexes and creating a new row for each column from the original matrix in order to obtain its transposed matrix."),(0,a.kt)("p",null,"For example, consider the given matrix $[","[1, 2, 4]",", ","[5, 7, 8]","]$ as the input. Starting from the first element of the first column we assign it to the first element of the first row of the transposed matrix $transposed","[0][0]"," = matrix","[0][0]","$. Then we go to the second element of the first column and assign it to the second element of the first row of the transposed matrix $transposed","[0][1]"," = matrix","[1][0]","$. And we repeat this process for every column of the original matrix until we get the final result of $transposed$ which will be $[","[1, 5]",", ","[2, 7]",", ","[4, 8]","]$."),(0,a.kt)(u,{mdxType:"Tabs"},(0,a.kt)(c,{value:"py",label:"Python",mdxType:"TabItem"},(0,a.kt)(d,{name:"@jessicaribeiroalves",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def transpose(self, matrix: List[List[int]]) -> List[List[int]]:\n        transposed = []\n        for row in range(len(matrix[0])):\n            transposed.append([])\n            for column in range(len(matrix)):\n                transposed[row].append(matrix[column][row])\n        return transposed\n"))),(0,a.kt)(c,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)(d,{name:"@jessicaribeiroalves",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const transpose = (matrix) => {\n    const transposed = [];\n    for (const row in matrix[0]) {\n        transposed.push([]);\n        for (const column of matrix) {\n            transposed[row].push(column[row]);\n        }\n    }\n    return transposed;\n};\n")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Time Complexity: $O(m*n)$")),(0,a.kt)("p",null,"The time complexity for this solution is $O(m*n)$ considering $m$ as the number of rows and $n$ as the number of columns in the original matrix."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Space Complexity: $O(m*n)$")),(0,a.kt)("p",null,"The space complexity for this solution is also $O(m*n)$ considering $m$ as the number of rows and $n$ as the number of columns in the original matrix."))}g.isMDXComponent=!0}}]);