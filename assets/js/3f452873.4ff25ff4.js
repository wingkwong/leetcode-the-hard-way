"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[37484],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>w});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,w=m["".concat(l,".").concat(u)]||m[u]||h[u]||i;return n?r.createElement(w,a(a({ref:t},p),{},{components:n})):r.createElement(w,a({ref:t},p))}));function w(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[m]="string"==typeof e?e:o,a[1]=d;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1764:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={description:"Author: @wingkwong, @ColeB2 | https://leetcode.com/problems/word-ladder/",tags:["Hash Table","String","Breadth-First Search"]},a="0127 - Word Ladder (Hard)",d={unversionedId:"0100-0199/word-ladder-hard",id:"0100-0199/word-ladder-hard",title:"0127 - Word Ladder (Hard)",description:"Author: @wingkwong, @ColeB2 | https://leetcode.com/problems/word-ladder/",source:"@site/solutions/0100-0199/0127-word-ladder-hard.md",sourceDirName:"0100-0199",slug:"/0100-0199/word-ladder-hard",permalink:"/solutions/0100-0199/word-ladder-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0127-word-ladder-hard.md",tags:[{label:"Hash Table",permalink:"/solutions/tags/hash-table"},{label:"String",permalink:"/solutions/tags/string"},{label:"Breadth-First Search",permalink:"/solutions/tags/breadth-first-search"}],version:"current",sidebarPosition:127,frontMatter:{description:"Author: @wingkwong, @ColeB2 | https://leetcode.com/problems/word-ladder/",tags:["Hash Table","String","Breadth-First Search"]},sidebar:"tutorialSidebar",previous:{title:"0125 - Valid Palindrome (Easy)",permalink:"/solutions/0100-0199/valid-palindrome"},next:{title:"0130 Surrounded Regions (Medium)",permalink:"/solutions/0100-0199/surrounded-regions-medium"}},l={},s=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: BFS",id:"approach-1-bfs",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},m=p("Tabs"),h=p("TabItem"),u=p("SolutionAuthor"),w={toc:s},c="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0127---word-ladder-hard"},"0127 - Word Ladder (Hard)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/word-ladder/"},"https://leetcode.com/problems/word-ladder/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"transformation sequence")," from word ",(0,o.kt)("inlineCode",{parentName:"p"},"beginWord")," to word ",(0,o.kt)("inlineCode",{parentName:"p"},"endWord")," using a dictionary ",(0,o.kt)("inlineCode",{parentName:"p"},"wordList")," is a sequence of words ",(0,o.kt)("inlineCode",{parentName:"p"},"beginWord -> s1 -> s2 -> ... -> sk")," such that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Every adjacent pair of words differs by a single letter."),(0,o.kt)("li",{parentName:"ul"},"Every ",(0,o.kt)("inlineCode",{parentName:"li"},"si")," for ",(0,o.kt)("inlineCode",{parentName:"li"},"1 <= i <= k")," is in ",(0,o.kt)("inlineCode",{parentName:"li"},"wordList"),". Note that ",(0,o.kt)("inlineCode",{parentName:"li"},"beginWord")," does not need to be in ",(0,o.kt)("inlineCode",{parentName:"li"},"wordList"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sk == endWord"))),(0,o.kt)("p",null,"Given two words, ",(0,o.kt)("inlineCode",{parentName:"p"},"beginWord")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"endWord"),", and a dictionary ",(0,o.kt)("inlineCode",{parentName:"p"},"wordList"),", return ",(0,o.kt)("em",{parentName:"p"},"the ",(0,o.kt)("strong",{parentName:"em"},"number of words")," in the ",(0,o.kt)("strong",{parentName:"em"},"shortest transformation sequence")," from")," ",(0,o.kt)("inlineCode",{parentName:"p"},"beginWord")," ",(0,o.kt)("em",{parentName:"p"},"to")," ",(0,o.kt)("inlineCode",{parentName:"p"},"endWord"),(0,o.kt)("em",{parentName:"p"},", or")," ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," ",(0,o.kt)("em",{parentName:"p"},"if no such sequence exists.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]\nOutput: 5\nExplanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]\nOutput: 0\nExplanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= beginWord.length <= 10")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"endWord.length == beginWord.length")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= wordList.length <= 5000")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"wordList[i].length == beginWord.length")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"beginWord"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"endWord"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"wordList[i]")," consist of lowercase English letters."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"beginWord != endWord")),(0,o.kt)("li",{parentName:"ul"},"All the words in ",(0,o.kt)("inlineCode",{parentName:"li"},"wordList")," are ",(0,o.kt)("strong",{parentName:"li"},"unique"),".")),(0,o.kt)("h2",{id:"approach-1-bfs"},"Approach 1: BFS"),(0,o.kt)("p",null,'Imaginate $$beginWord$$ is a starting node and $$endWord$$ is the ending node of a graph with some other nodes between them. The node is connected to each other by only one letter difference. The problem is same as "finding the shortest path between the starting node and the ending node in an undirected and unweighted graph".'),(0,o.kt)("p",null,"Since we are looking for the shortest path, then we should use BFS instead of DFS. Before that, we need to pre-process on the words of the given $$wordList$$. If a word is $$hot$$, then there could be three forms which are $$",(0,o.kt)("em",{parentName:"p"},"ot$$, $$h"),"t$$, and $$ho",(0,o.kt)("em",{parentName:"p"},"$$ where $$"),"$$ can be any alphabet. To implement this, we can use a hash map where the key is the form and the value is the list of word which has the same form. Example: $$*ot: ","[hot , dot, lot]","$$."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Graph:\nhit----hot---dot---dog---cog\n        |   /        |   / \n        |  /         |  /\n        lot----------log\n")),(0,o.kt)(m,{mdxType:"Tabs"},(0,o.kt)(h,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,o.kt)(u,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"// 1. build the combination of words that can be formed \nint m = (int) beginWord.size();\nmap<string, vector<string>> comb;\nint n = (int) wordList.size();\nfor (auto s : wordList) {\n    for (int i = 0; i < m; i++) {\n        string t = s.substr(0, i) + '*' + s.substr(i + 1);\n        comb[t].push_back(s);\n    }\n}\n"))),(0,o.kt)(h,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(u,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"wordList.append(beginWord)\n# word map will be formatted in the format key:value\n# key: combinations of words, ie hit: --\x3e '_it', 'h_t', 'hi_'\n# value: word from word list, 'hit'\nword_map = defaultdict(list)\nfor word in wordList:\n    for i in range(len(word)):\n        string = word[:i] + '_' + word[i + 1:]\n        word_map[string].append(word)\n")))),(0,o.kt)("p",null,"Then, we can perform BFS using queue. We take the word, build its form and get the list of next nodes. If the next word is $$endWord$$, then we can return the answer which is $$level + 1$$. Otherwise, we check if the next word is visited or not, then push it to the queue and mark it as visited if it hasn't been reached before."),(0,o.kt)(m,{mdxType:"Tabs"},(0,o.kt)(h,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,o.kt)(u,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"// 2. BFS \nqueue<pair<string, int>> q; // {word, level}\n// check if it is visited already\nunordered_map<string, int> vis;\n// push the first node with level 1\nq.push({beginWord, 1});\n// mark it visited so we won't visit it again\nvis[beginWord] = 1;\nwhile (!q.empty()) {\n    // get the first pair\n    auto [s, level] = q.front(); q.pop();\n    for (int i = 0; i < m; i++) {\n        // build the form\n        string t = s.substr(0, i) + '*' + s.substr(i + 1);\n        // iterate each possible words\n        for (auto w : comb[t]) {\n            // if it reaches the ending node, then we got the answer\n            if (w == endWord) {\n                return level + 1;\n            }\n            // else if it is not visited, then mark it visited \n            // and push it to the queue for next traversal\n            if (!vis.count(w)) {\n                vis[w] = 1;\n                q.push({w, level + 1});\n            }\n        }\n    }\n}\n"))),(0,o.kt)(h,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(u,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"# visited set initialized with beingWord\nvisited = set([beginWord])\n# queue formatted as (word, level) where the level.\nq = deque([(beginWord, 1)])\nwhile q:\n    # get first word, level in queue.\n    word, level = q.popleft()\n    # check if we reached the end node, endWord.\n    if word == endWord:\n        return level\n    # iterated each character in word\n    for i in range(len(word)):\n        # recreate all words options ie hit: _it, h_t, hi_\n        string = word[:i] + '_' + word[i + 1:]\n        # all word combinations are our keys to our hash map, use those\n        # to access the word lists held inside our map.\n        for new_word in word_map[string]:\n            # if we haven't visited the word\n            if new_word not in visited:\n                # add word to visited so we don't return twice, if we\n                # visited at a later time, we know it will take longer\n                # to reach the end node from there anyway, and add to queue.\n                visited.add(new_word)\n                q.append((new_word, level + 1))\n")))),(0,o.kt)("p",null,"Full version"),(0,o.kt)("p",null,"Time Complexity: $$O(M^2 * N)$$ where $$M$$ is the length of each word, and $$N$$ is the total number of words in $$wordList$$."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For each word in word list, we iterate each character, $$M ",(0,o.kt)("em",{parentName:"li"}," N$$ and to recreate each combination of each word to add to our hash map takes $$M$$ time -> $$O(M^2 ")," N)$$"),(0,o.kt)("li",{parentName:"ul"},"BFS might traverse every node $$N$$, and similarily, we must check each character $$M$$ and recreated the intermediate words --\x3e $$O(M^2 * N)$$")),(0,o.kt)("p",null,"Space Complexity: $$O(M^2 * N)$$. The space will be dominated by our hash map as each word $$N$$, has $$M$$ combinations of words which will be our keys, and each key will have the original word of sized $$M$$ as a value. Meaning each word will need $$M^2$$ space, and we need to do that for $$N$$ words."),(0,o.kt)(m,{mdxType:"Tabs"},(0,o.kt)(h,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,o.kt)(u,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int ladderLength(string beginWord, string endWord, vector<string>& wordList) {\n        // 1. build the combination of words that can be formed \n        int m = (int) beginWord.size();\n        map<string, vector<string>> comb;\n        int n = (int) wordList.size();\n        for (auto s : wordList) {\n            for (int i = 0; i < m; i++) {\n                string t = s.substr(0, i) + '*' + s.substr(i + 1);\n                comb[t].push_back(s);\n            }\n        }\n        // 2. BFS \n        queue<pair<string, int>> q; // {word, level}\n        unordered_map<string, int> vis;\n        q.push({beginWord, 1});\n        vis[beginWord] = 1;\n        while (!q.empty()) {\n            auto [s, level] = q.front(); q.pop();\n            for (int i = 0; i < m; i++) {\n                string t = s.substr(0, i) + '*' + s.substr(i + 1);\n                for (auto w : comb[t]) {\n                    if (w == endWord) {\n                        return level + 1;\n                    }\n                    if (!vis.count(w)) {\n                        vis[w] = 1;\n                        q.push({w, level + 1});\n                    }\n                }\n            }\n        }\n        return 0;\n    }\n};\n"))),(0,o.kt)(h,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(u,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:\n        # Early termination, endWord isn't in wordList, return 0\n        if endWord not in wordList:\n            return 0\n        # Add all words in wordlist to defaultdict\n        # Ex word hit, keys: _it, h_t, hi_, value: hit\n        wordList.append(beginWord)\n        word_map = defaultdict(list)\n        for word in wordList:\n            for i in range(len(word)):\n                string = word[:i] + '_' + word[i + 1:]\n                word_map[string].append(word)\n        # BFS -> visited set to prevent visiting same word twice.\n        visited = set([beginWord])\n        # Queue formatted as (word, level)\n        q = deque([(beginWord, 1)])\n        while q:\n            word, level = q.popleft()\n            if word == endWord:\n                return level\n            for i in range(len(word)):\n                string = word[:i] + '_' + word[i + 1:]\n                for new_word in word_map[string]:\n                    if new_word not in visited:\n                        visited.add(new_word)\n                        q.append((new_word, level + 1))\n        return 0\n")))))}g.isMDXComponent=!0}}]);