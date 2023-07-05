"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[64969],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(r),u=o,m=p["".concat(s,".").concat(u)]||p[u]||h[u]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},55462:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>w,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const a={description:"Author: @ColeB2 | https://leetcode.com/problems/word-search/",tags:["Array","Backtracking","Matrix"]},i="0079 - Word Search (Medium)",l={unversionedId:"0000-0099/word-search-medium",id:"0000-0099/word-search-medium",title:"0079 - Word Search (Medium)",description:"Author: @ColeB2 | https://leetcode.com/problems/word-search/",source:"@site/solutions/0000-0099/0079-word-search-medium.md",sourceDirName:"0000-0099",slug:"/0000-0099/word-search-medium",permalink:"/solutions/0000-0099/word-search-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0079-word-search-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Backtracking",permalink:"/solutions/tags/backtracking"},{label:"Matrix",permalink:"/solutions/tags/matrix"}],version:"current",sidebarPosition:79,frontMatter:{description:"Author: @ColeB2 | https://leetcode.com/problems/word-search/",tags:["Array","Backtracking","Matrix"]},sidebar:"tutorialSidebar",previous:{title:"0078 - Subsets (Medium)",permalink:"/solutions/0000-0099/subsets-medium"},next:{title:"0084 - Largest Rectangle in Histogram (Hard)",permalink:"/solutions/0000-0099/largest-rectangle-in-histogram-hard"}},s={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Backtracking",id:"approach-1-backtracking",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},p=c("Tabs"),h=c("TabItem"),u=c("SolutionAuthor"),m={toc:d},f="wrapper";function w(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0079---word-search-medium"},"0079 - Word Search (Medium)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/word-search/"},"https://leetcode.com/problems/word-search/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Given an ",(0,o.kt)("inlineCode",{parentName:"p"},"m x n")," grid of characters ",(0,o.kt)("inlineCode",{parentName:"p"},"board")," and a string ",(0,o.kt)("inlineCode",{parentName:"p"},"word"),", return ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if ",(0,o.kt)("inlineCode",{parentName:"p"},"word")," ",(0,o.kt)("em",{parentName:"p"},"exists in the grid"),"."),(0,o.kt)("p",null,"The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/11/04/word2.jpg",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"\nOutput: true\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/11/04/word-1.jpg",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"\nOutput: true\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/10/15/word3.jpg",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"\nOutput: false\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"m == board.length")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"n = board[i].length")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= m, n <= 6")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= word.length <= 15")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"board")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"word")," consists of only lowercase and uppercase English letters.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Follow up"),": Could you use search pruning to make your solution faster with a larger ",(0,o.kt)("inlineCode",{parentName:"p"},"board"),"?"),(0,o.kt)("h2",{id:"approach-1-backtracking"},"Approach 1: Backtracking"),(0,o.kt)("p",null,"To solve this, we can very simply traverse the board, and when we find our starting letter, run our backtracking/DFS function at that letter, and if we find the word, return True."),(0,o.kt)("p",null,"Inside our DFS, we would need to track some edge cases, if our position on the board is within bounds, if we have visited that position on the board before, and that the character we are looking at is the letter we need, and if everything checks out, we can check all 4 adjacent corners."),(0,o.kt)("p",null,"Depending on how it is implemented though, the backtracking solution will be very slow, or even TLE. That is where the follow-up of search pruning comes into play."),(0,o.kt)("p",null,"There are 3 things we can edge cases we can check to ensure our algorithm is efficient."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First, we can check if the word is larger than the number of characters on the board. If so we have no reason to continue."),(0,o.kt)("li",{parentName:"ol"},"Second, we can count both the characters on the board and in the word and compare the 2. If a character in the word isn't on the board, or there isn't enough of them on the board, we can terminate early again."),(0,o.kt)("li",{parentName:"ol"},"Finally, we can flip the word if there are fewer characters on the board of the word's last letter, than its first we can flip the word. For example: If we have the word $$cat$$ and our board has a lot of $$c$$ characters, and only 1 $$t$$ character, it makes more sense to search for the $$t$$ character, as we will only have to run our DFS algorithm once, instead of several times for each $$c$$ we find.  ")),(0,o.kt)("p",null,"Time Complexity: $$O(m",(0,o.kt)("em",{parentName:"p"},"n"),"3^L)$$ Where m is the number of rows, n is the number of columns, and L is the length of the word. Note it is $$3^L$$ instead of 4, as after the first DFS call, we only check 3 paths, as the 4th path would be a visited position that will terminate early."),(0,o.kt)("p",null,"Space Complexity: $$O(L)$$ for our DFS call stack and our visited set, where L is the length of the word as the size of those will depend on the length of our word. The pruning also adds $$O(L + m*n)$$ to create Counters for the word, and the board."),(0,o.kt)(p,{mdxType:"Tabs"},(0,o.kt)(h,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(u,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def exist(self, board: List[List[str]], word: str) -> bool:\n        ROWS, COLS = len(board), len(board[0])\n        # 1st search pruning: word is larger than the board.\n        if len(word) > ROWS*COLS:\n            return False\n        # get counter of all characters on the board\n        board_chars = {}\n        for r in range(ROWS):\n            for c in range(COLS):\n                if board[r][c] not in board_chars:\n                    board_chars[board[r][c]] = 0\n                board_chars[board[r][c]] += 1\n        # counter of all characters in word\n        word_chars = Counter(word)\n        # 2nd search pruning: For each letter in our word, there\n        # isn't enough on the board to create the word.\n        for ch in word_chars:\n            if ch not in board_chars or board_chars[ch] < word_chars[ch]:\n                return False\n        # 3rd search pruning: If there are less characters on the\n        # board of the character than the first, flip the word.\n        if (word[0] in board_chars and word[-1] in board_chars\n            and board_chars[word[0]] > board_chars[word[-1]]\n            ):\n            word = word[::-1]\n        # DFS function\n        def dfs(row, col, idx, visited):\n            # Reached end of word, found the word statement\n            if idx == len(word):\n                return True\n            # False clauses, boundary check, already visited, wrong letter.\n            if (row < 0 or col < 0\n                or row == ROWS or col == COLS\n                or (row,col) in visited\n                or board[row][col] != word[idx]\n                ):\n                return False\n            # add the position to the visited set\n            visited.add((row,col))\n            # check all 4 positions\n            if (dfs(row + 1, col, idx + 1, visited) or\n                dfs(row - 1, col, idx + 1, visited) or\n                dfs(row, col + 1, idx + 1, visited) or\n                dfs(row, col - 1, idx + 1, visited)\n                ):\n                # if 1 is true, we found the word.\n                return True\n            # backtrack, remove the current position from set.\n            visited.remove((row,col))\n        # search the board looking for first character to start DFS.\n        for r in range(ROWS):\n            for c in range(COLS):\n                if board[r][c] == word[0]:\n                    if dfs(r,c, 0, set()):\n                        return True\n        # Reach the end, didn't find the word, return False.\n        return False\n        \n")))))}w.isMDXComponent=!0}}]);