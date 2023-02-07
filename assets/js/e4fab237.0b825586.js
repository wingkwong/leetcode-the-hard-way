"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[4946],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),c=a,k=m["".concat(l,".").concat(c)]||m[c]||u[c]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10247:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={description:"Author: @wingkwong | https://leetcode.com/problems/snakes-and-ladders/",tags:["Array","Breadth-First Search","Matrix"]},l="0909 - Snakes and Ladders (Medium)",d={unversionedId:"0900-0999/snakes-and-ladders-medium",id:"0900-0999/snakes-and-ladders-medium",title:"0909 - Snakes and Ladders (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/snakes-and-ladders/",source:"@site/solutions/0900-0999/0909-snakes-and-ladders-medium.md",sourceDirName:"0900-0999",slug:"/0900-0999/snakes-and-ladders-medium",permalink:"/solutions/0900-0999/snakes-and-ladders-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0900-0999/0909-snakes-and-ladders-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Breadth-First Search",permalink:"/solutions/tags/breadth-first-search"},{label:"Matrix",permalink:"/solutions/tags/matrix"}],version:"current",sidebarPosition:909,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/snakes-and-ladders/",tags:["Array","Breadth-First Search","Matrix"]},sidebar:"tutorialSidebar",previous:{title:"0904 - Fruit Into Baskets (Medium)",permalink:"/solutions/0900-0999/fruit-into-baskets-medium"},next:{title:"0912 - Sort an Array (Medium)",permalink:"/solutions/0900-0999/sort-an-array-medium"}},p={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Dijkstra",id:"approach-1-dijkstra",level:2}],m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},c=m("Tabs"),k=m("TabItem"),h=m("SolutionAuthor"),f={toc:u};function b(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0909---snakes-and-ladders-medium"},"0909 - Snakes and Ladders (Medium)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/snakes-and-ladders/"},"https://leetcode.com/problems/snakes-and-ladders/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"You are given an ",(0,o.kt)("inlineCode",{parentName:"p"},"n x n")," integer matrix ",(0,o.kt)("inlineCode",{parentName:"p"},"board")," where the cells are labeled from ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"n2")," in a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Boustrophedon"},(0,o.kt)("strong",{parentName:"a"},"Boustrophedon style"))," starting from the bottom left of the board (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"board[n - 1][0]"),") and alternating direction each row."),(0,o.kt)("p",null,"You start on square ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," of the board. In each move, starting from square ",(0,o.kt)("inlineCode",{parentName:"p"},"curr"),", do the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Choose a destination square ",(0,o.kt)("inlineCode",{parentName:"p"},"next")," with a label in the range ",(0,o.kt)("inlineCode",{parentName:"p"},"[curr + 1, min(curr + 6, n2)]"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"This choice simulates the result of a standard **6-sided die roll**: i.e., there are always at most 6 destinations, regardless of the size of the board.\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If ",(0,o.kt)("inlineCode",{parentName:"p"},"next")," has a snake or ladder, you ",(0,o.kt)("strong",{parentName:"p"},"must")," move to the destination of that snake or ladder. Otherwise, you move to ",(0,o.kt)("inlineCode",{parentName:"p"},"next"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The game ends when you reach the square ",(0,o.kt)("inlineCode",{parentName:"p"},"n2"),"."))),(0,o.kt)("p",null,"A board square on row ",(0,o.kt)("inlineCode",{parentName:"p"},"r")," and column ",(0,o.kt)("inlineCode",{parentName:"p"},"c")," has a snake or ladder if ",(0,o.kt)("inlineCode",{parentName:"p"},"board[r][c] != -1"),". The destination of that snake or ladder is ",(0,o.kt)("inlineCode",{parentName:"p"},"board[r][c]"),". Squares ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"n2")," do not have a snake or ladder."),(0,o.kt)("p",null,"Note that you only take a snake or ladder at most once per move. If the destination to a snake or ladder is the start of another snake or ladder, you do ",(0,o.kt)("strong",{parentName:"p"},"not")," follow the subsequent\xa0snake or ladder."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For example, suppose the board is ",(0,o.kt)("inlineCode",{parentName:"li"},"[[-1,4],[-1,3]]"),", and on the first move, your destination square is ",(0,o.kt)("inlineCode",{parentName:"li"},"2"),". You follow the ladder to square ",(0,o.kt)("inlineCode",{parentName:"li"},"3"),", but do ",(0,o.kt)("strong",{parentName:"li"},"not")," follow the subsequent ladder to ",(0,o.kt)("inlineCode",{parentName:"li"},"4"),".")),(0,o.kt)("p",null,"Return ",(0,o.kt)("em",{parentName:"p"},"the least number of moves required to reach the square"),(0,o.kt)("inlineCode",{parentName:"p"},"n2"),(0,o.kt)("em",{parentName:"p"},". If it is not possible to reach the square, return"),(0,o.kt)("inlineCode",{parentName:"p"},"-1"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: board = [[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]]\nOutput: 4\nExplanation: \nIn the beginning, you start at square 1 (at row 5, column 0).\nYou decide to move to square 2 and must take the ladder to square 15.\nYou then decide to move to square 17 and must take the snake to square 13.\nYou then decide to move to square 14 and must take the ladder to square 35.\nYou then decide to move to square 36, ending the game.\nThis is the lowest possible number of moves to reach the last square, so return 4.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: board = [[-1,-1],[-1,3]]\nOutput: 1\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"n == board.length == board[i].length")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"2 <= n <= 20")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"grid[i][j]")," is either ",(0,o.kt)("inlineCode",{parentName:"li"},"-1")," or in the range ",(0,o.kt)("inlineCode",{parentName:"li"},"[1, n2]"),"."),(0,o.kt)("li",{parentName:"ul"},"The squares labeled ",(0,o.kt)("inlineCode",{parentName:"li"},"1")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"n2")," do not have any ladders or snakes.")),(0,o.kt)("h2",{id:"approach-1-dijkstra"},"Approach 1: Dijkstra"),(0,o.kt)(c,{mdxType:"Tabs"},(0,o.kt)(k,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,o.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int snakesAndLadders(vector<vector<int>>& board) {\n        int n = board.size();\n        // reconstruct board to 1D array\n        vector<int> g(n * n + 1);\n        for (int i = n - 1, k = 1, d = 1; i >= 0; i--, d ^= 1) {\n            if (d % 2 == 0) {\n                // if the direction is even,\n                // we iterate columns from the right to the left\n                // e.g. 12 <- 11 <- 10 <- 9 <- 8 <- 7\n                for (int j = n - 1; j >= 0; j--) {\n                    g[k++] = board[i][j];\n                }\n            } else {\n                // if the direction is odd, \n                // we iterate columns from the left to the right\n                // e.g. 1 -> 2 -> 3 -> 4 -> 5 -> 6\n                for (int j = 0; j < n; j++) {\n                    g[k++] = board[i][j];\n                }\n            }\n        }\n        // dijkstra\n        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> q;\n        q.push({0, 1}); // {dist, pos}\n        unordered_map<int, int> vis;\n        while (!q.empty()) {\n            auto [dist, cur_pos] = q.top(); q.pop();\n            // skip if the current position is visited and the dist is greater than that\n            if (vis.count(cur_pos) && dist >= vis[cur_pos]) continue;\n            // if the current position reaches the square, return dist\n            if (cur_pos == n * n) return dist;\n            // we need `dist` to reach `cur_pos`\n            vis[cur_pos] = dist;\n            // we can have at most 6 destinations, try each step\n            for (int i = 1; i <= 6; i++) {\n                // since we reconstruct the input as a 1D array,\n                // we can calculate next_pos by adding `i` to `cur_pos`\n                int next_pos = cur_pos + i;\n                // skip if it is out of bound\n                // e.g. in 34, you can only go to 35 and 36, not any cells after 36 (see example 1)\n                if (next_pos > n * n) continue;\n                // if the next position is -1, then we can go there\n                if (g[next_pos] == -1) {\n                    q.push({dist + 1, next_pos});\n                } else {\n                    // otherwise, there is a ladder / snake which leads to `g[next_pos]`\n                    q.push({dist + 1, g[next_pos]});\n                }\n            }\n        }\n        // not possible to reach the square\n        return -1;\n    }\n};\n")))))}b.isMDXComponent=!0}}]);