"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[54103],{49659:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>s});const i=JSON.parse('{"id":"0000-0099/rotate-image-medium","title":"0048 - Rotate Image (Medium)","description":"Author: @wkw, @radojicic23 | https://leetcode.com/problems/rotate-image/","source":"@site/solutions/0000-0099/0048-rotate-image-medium.md","sourceDirName":"0000-0099","slug":"/0000-0099/rotate-image-medium","permalink":"/solutions/0000-0099/rotate-image-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0048-rotate-image-medium.md","tags":[{"inline":true,"label":"Array","permalink":"/solutions/tags/array"},{"inline":true,"label":"Math","permalink":"/solutions/tags/math"},{"inline":true,"label":"Matrix","permalink":"/solutions/tags/matrix"}],"version":"current","sidebarPosition":48,"frontMatter":{"description":"Author: @wkw, @radojicic23 | https://leetcode.com/problems/rotate-image/","tags":["Array","Math","Matrix"]},"sidebar":"tutorialSidebar","previous":{"title":"0046 - Permutations (Medium)","permalink":"/solutions/0000-0099/permutations-medium"},"next":{"title":"0049 - Group Anagrams (Medium)","permalink":"/solutions/0000-0099/group-anagrams-medium"}}');var r=n(86070),o=n(32790);const a={description:"Author: @wkw, @radojicic23 | https://leetcode.com/problems/rotate-image/",tags:["Array","Math","Matrix"]},l="0048 - Rotate Image (Medium)",m={},s=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Rotate 4 Cells in a Round",id:"approach-1-rotate-4-cells-in-a-round",level:2}];function c(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...t.components},{SolutionAuthor:n,TabItem:i,Tabs:a}=e;return n||d("SolutionAuthor",!0),i||d("TabItem",!0),a||d("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"0048---rotate-image-medium",children:"0048 - Rotate Image (Medium)"})}),"\n",(0,r.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://leetcode.com/problems/rotate-image/",children:"https://leetcode.com/problems/rotate-image/"})}),"\n",(0,r.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsxs)(e.p,{children:["You are given an ",(0,r.jsx)(e.code,{children:"n x n"})," 2D ",(0,r.jsx)(e.code,{children:"matrix"})," representing an image, rotate the image by ",(0,r.jsx)(e.strong,{children:"90"})," degrees (clockwise)."]}),"\n",(0,r.jsxs)(e.p,{children:["You have to rotate the image ",(0,r.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/In-place_algorithm",children:(0,r.jsx)(e.strong,{children:"in-place"})}),", which means you have to modify the input 2D matrix directly. ",(0,r.jsx)(e.strong,{children:"DO NOT"})," allocate another 2D matrix and do the rotation."]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]\nOutput: [[7,4,1],[8,5,2],[9,6,3]]\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]\nOutput: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"n == matrix.length == matrix[i].length"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"1 <= n <= 20"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"-1000 <= matrix[i][j] <= 1000"})}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"approach-1-rotate-4-cells-in-a-round",children:"Approach 1: Rotate 4 Cells in a Round"}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsxs)(i,{value:"cpp",label:"C++",children:[(0,r.jsx)(n,{name:"@wkw"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    void rotate(vector<vector<int>>& matrix) {\n        // round 1:\n        // -------------------\n        // tmp <- 1\n        // top left cell matrix[i][j] (1) <- bottom left 7 cell (matrix[n - j - 1][i])\n        // bottom left 7 cell (matrix[n - j - 1][i]) <- bottom right cell 9 (matrix[n - i - 1][n - j - 1])\n        // bottom right cell 9 (matrix[n - i - 1][n - j - 1]) <- top right cell 3 (matrix[j][n - i - 1])\n        // top right cell 3 (matrix[j][n - i - 1]) <- 1 (tmp)\n\n        // 1 2 3    7 2 1\n        // 4 5 6 => 4 5 6\n        // 7 8 9    9 8 7\n\n        // // round 2:\n        // -------------------\n        // tmp <- 2\n        // 2 (matrix[i][j]) <- 4 (matrix[n - j - 1][i])\n        // 4 (matrix[n - j - 1][i]) <- 8 (matrix[n - i - 1][n - j - 1])\n        // 8 (matrix[n - i - 1][n - j - 1]) <- 6 (matrix[j][n - i - 1])\n        // 6 (matrix[j][n - i - 1]) <- 2 (tmp)\n\n        // 1 2 3    7 2 1    7 4 1\n        // 4 5 6 => 4 5 6 => 8 5 2\n        // 7 8 9    9 8 7    9 6 3\n        int n = matrix.size(), tmp;\n\t\tfor(int i = 0; i < n / 2; i++) {\n            for(int j = i; j < n - i - 1; j++) {\n\t\t\t\ttmp = matrix[i][j];\n\t\t\t\tmatrix[i][j] = matrix[n - j - 1][i];\n\t\t\t\tmatrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];\n\t\t\t\tmatrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];\n\t\t\t\tmatrix[j][n - i - 1] = tmp;\n\t\t\t}\n        }\n\n    }\n};\n\n"})})]}),(0,r.jsxs)(i,{value:"python",label:"Python",children:[(0,r.jsx)(n,{name:"@radojicic23"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def rotate(self, matrix: List[List[int]]) -> None:\n        left, right = 0, len(matrix) - 1\n\n        while left < right:\n            for i in range(right - left):\n                top, bottom = left, right\n                # save the top left value\n                topleft = matrix[top][left + i]\n                # move bottom left into top left\n                matrix[top][left + i] = matrix[bottom - i][left]\n                # move bottom right into bottom left\n                matrix[bottom - i][left] = matrix[bottom][right - i]\n                # move top right into bottom right\n                matrix[bottom][right - i] = matrix[top + i][right]\n                # move top left into top right\n                matrix[top + i][right] = topleft\n            left += 1\n            right -= 1\n"})})]}),(0,r.jsxs)(i,{value:"js",label:"JavaScrip",children:[(0,r.jsx)(n,{name:"@radojicic23"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"/**\n * @param {number[][]} matrix\n * @return {void} Do not return anything, modify matrix in-place instead.\n */\nvar rotate = function (matrix) {\n  let left = 0;\n  let right = matrix.length - 1;\n  while (left < right) {\n    for (i = 0; i < right - left; i++) {\n      let top = left;\n      let bottom = right;\n      // save the top left value\n      let top_left = matrix[top][left + i];\n      // move bottom left into top left\n      matrix[top][left + i] = matrix[bottom - i][left];\n      // move bottom right into bottom left\n      matrix[bottom - i][left] = matrix[bottom][right - i];\n      // move top right into bottom right\n      matrix[bottom][right - i] = matrix[top + i][right];\n      // move top left into top right\n      matrix[top + i][right] = top_left;\n    }\n    // update pointers\n    left++;\n    right--;\n  }\n};\n"})})]})]})]})}function h(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(c,{...t})}):c(t)}function d(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}},32790:(t,e,n)=>{n.d(e,{R:()=>a,x:()=>l});var i=n(30758);const r={},o=i.createContext(r);function a(t){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:a(t.components),i.createElement(o.Provider,{value:e},t.children)}}}]);