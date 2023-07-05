"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[69196],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),h=i,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},71416:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const a={description:"Author: @vigneshshiv | https://leetcode.com/problems/implement-trie-prefix-tree/",tags:["Hash Table","String","Design","Trie"]},o="0208 - Implement Trie (Prefix Tree) (Medium)",l={unversionedId:"0200-0299/implement-trie-medium",id:"0200-0299/implement-trie-medium",title:"0208 - Implement Trie (Prefix Tree) (Medium)",description:"Author: @vigneshshiv | https://leetcode.com/problems/implement-trie-prefix-tree/",source:"@site/solutions/0200-0299/0208-implement-trie-medium.md",sourceDirName:"0200-0299",slug:"/0200-0299/implement-trie-medium",permalink:"/solutions/0200-0299/implement-trie-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0208-implement-trie-medium.md",tags:[{label:"Hash Table",permalink:"/solutions/tags/hash-table"},{label:"String",permalink:"/solutions/tags/string"},{label:"Design",permalink:"/solutions/tags/design"},{label:"Trie",permalink:"/solutions/tags/trie"}],version:"current",sidebarPosition:208,frontMatter:{description:"Author: @vigneshshiv | https://leetcode.com/problems/implement-trie-prefix-tree/",tags:["Hash Table","String","Design","Trie"]},sidebar:"tutorialSidebar",previous:{title:"0207 - Course Schedule (Medium)",permalink:"/solutions/0200-0299/course-schedule-medium"},next:{title:"0210 - Course Schedule II (Medium)",permalink:"/solutions/0200-0299/course-schedule-ii-medium"}},s={},p=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Trie Structure",id:"approach-1-trie-structure",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},d=c("Tabs"),u=c("TabItem"),h=c("SolutionAuthor"),m={toc:p},f="wrapper";function k(e){let{components:t,...r}=e;return(0,i.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"0208---implement-trie-prefix-tree-medium"},"0208 - Implement Trie (Prefix Tree) (Medium)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/implement-trie-prefix-tree/"},"https://leetcode.com/problems/implement-trie-prefix-tree/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"trie"),' (pronounced as "try") or ',(0,i.kt)("strong",{parentName:"p"},"prefix tree")," is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker."),(0,i.kt)("p",null,"Implement the Trie class:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Trie()")," Initializes the trie object."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"void insert(String word)")," Inserts the string ",(0,i.kt)("inlineCode",{parentName:"li"},"word")," into the trie."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"boolean search(String word)")," Returns ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," if the string ",(0,i.kt)("inlineCode",{parentName:"li"},"word")," is in the trie (i.e., was inserted before), and ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," otherwise."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"boolean startsWith(String prefix)")," Returns ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," if there is a previously inserted string ",(0,i.kt)("inlineCode",{parentName:"li"},"word")," that has the prefix ",(0,i.kt)("inlineCode",{parentName:"li"},"prefix"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," otherwise.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input\n["Trie", "insert", "search", "search", "startsWith", "insert", "search"]\n[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]\nOutput\n[null, null, true, false, true, null, true]\n\nExplanation\nTrie trie = new Trie();\ntrie.insert("apple");\ntrie.search("apple");   // return True\ntrie.search("app");     // return False\ntrie.startsWith("app"); // return True\ntrie.insert("app");\ntrie.search("app");     // return True\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= word.length, prefix.length <= 2000")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"word")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"prefix")," consist only of lowercase English letters."),(0,i.kt)("li",{parentName:"ul"},"At most ",(0,i.kt)("inlineCode",{parentName:"li"},"3 * 10^4")," calls in total will be made to ",(0,i.kt)("inlineCode",{parentName:"li"},"insert"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"search"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"startsWith"),".")),(0,i.kt)("h2",{id:"approach-1-trie-structure"},"Approach 1: Trie Structure"),(0,i.kt)("p",null,"A trie, or a prefix tree, is a type of search tree that is usually used to store strings. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each path from the root to leaves forms a word."),(0,i.kt)("li",{parentName:"ul"},"Each node except for the root node contains a value."),(0,i.kt)("li",{parentName:"ul"},"All the descendants of a node share a common prefix associated to that node. ")),(0,i.kt)("p",null,"For example, when trie stores ","[ape,apple,are,art, ...]",", ",(0,i.kt)("inlineCode",{parentName:"p"},"are")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"art")," share ",(0,i.kt)("inlineCode",{parentName:"p"},"ar")," as the prefix."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"So we can form a tree of characters represents a value and connecting from top to bottom to form a string."),"\nThere are two operations provided by a trie: ",(0,i.kt)("inlineCode",{parentName:"p"},"insert")," a new string and ",(0,i.kt)("inlineCode",{parentName:"p"},"search")," for a given string. "),(0,i.kt)("p",null,"Here, we are using ASCII key based character store in tree, since the constraint given is all characters are english lowercase letters, we can covert each character to integer value represents corresponding to a char. While inserting a string, we are constructing a tree to form a string and at the end, mark the word as completes. This helps to search for a string weather it is a complete word or prefix. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Wiki Reference - ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Trie"},"https://en.wikipedia.org/wiki/Trie"))),(0,i.kt)("p",null,"Time Complexity for insert and search: $O(L)$, where $L$ is the length of the word\nSpace Complexity: $O(K*N)$, where $K$ is the no. of characters and $N$ is the no. of nodes in the tree. "),(0,i.kt)("p",null,"Side note, all of our Google searches performs similar to Trie structure implementation and Google search autocomplete is a great example. "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/users/images/1d1bc396-05a2-4d8c-b8b0-e707c5790fde_1604920548.2461913.png",alt:"Alt text"})),(0,i.kt)(d,{mdxType:"Tabs"},(0,i.kt)(u,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)(h,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"class Trie {\n    \n    // The root of this Trie\n    private TrieNode root;\n\n    public Trie() {\n        root = new TrieNode('\\0'); // Forms as Root\n    }\n    \n    public void insert(String word) {\n        TrieNode current = root;\n        for (char c : word.toCharArray()) {\n            int idx = c - 'a';\n            if (current.nodes[idx] == null) {\n                current.nodes[idx] = new TrieNode(c);\n            }\n            current = current.nodes[idx];\n        }\n        current.isWord = true;\n    }\n    \n    public boolean search(String word) {\n        return contains(word, false);\n    }\n    \n    public boolean startsWith(String prefix) {\n        return contains(prefix, true);\n    }\n    \n    private boolean contains(String prefix, boolean startsWith) {\n        TrieNode current = root;\n        for (char c : prefix.toCharArray()) {\n            current = current.nodes[c - 'a'];\n            if (current == null) {\n                return false;\n            }\n        }\n        return startsWith ? true : current.isWord;\n    }\n    \n    /**\n     * Node in the Trie\n     */\n    private class TrieNode {\n        private char character;\n        private TrieNode[] nodes = new TrieNode[26];\n        private boolean isWord;\n\n        public TrieNode(char character) {\n            this.character = character;\n        }\n    }\n}\n"))),(0,i.kt)(u,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)(h,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"class TrieNode:\n    # Utilize a linked list DS --\x3e One where the next\n    # nodes can be reached via a hash map\n    # Contains a char as an optional parameter\n    # Also utilizes attributes of is_word to denote\n    # whether it is a word. \n    # Ex: If we have the word apple in our trie. a->p->p->l->e\n    # 'e' node will have is_word = True, to denote that\n    # apple is a word in our map. Letters, a,p,p,l,e won't be True\n    # as they are not complete words in our Trie.\n    def __init__(self, char=None):\n        self.char = char\n        self.is_word = False\n        self.nodes = {}\n        \nclass Trie:\n    # Total Space Complexity\n    # O(k*n) where k is the number of characters we insert into our hashmap.\n    # where n is the number of nodes in our Trie.\n    def __init__(self):\n        # initialize root as a TrieNode with None char.\n        self.root = TrieNode()\n        \n\n    def insert(self, word: str) -> None:\n        # Time: O(l) where l is the length of the word.\n        # a current node pointer to trace our linked list\n        node = self.root\n        # iterate through every character in the word, word.\n        for ch in word:\n            # current character is not in current TrieNode's\n            # hashmap of nodes -> create that node and add\n            # it to the hash map.\n            if ch not in node.nodes:\n                node.nodes[ch] = TrieNode(ch)\n            # move our current node pointer to the character\n            # we are looking at's node.\n            node = node.nodes[ch]\n        # When we reached the end set the is_word boolean to True.\n        node.is_word = True\n        \n\n    def search(self, word: str) -> bool:\n        # Time: O(l) where l is the length of the word.\n        # current node pointer to trace our linked list.\n        node = self.root\n        # iterate each character in word.\n        for ch in word:\n            # if character is not in the current nodes hashmap of nodes.\n            if ch not in node.nodes:\n                # That means word won't be in the Trie, return False\n                return False\n            # move our current node pointer to next ch node.\n            node = node.nodes[ch]\n        # Reached end of word, return boolean is_word.\n        return node.is_word\n        \n\n    def startsWith(self, prefix: str) -> bool:\n        # Time: O(l) where l is length of the prefix\n        # current node pointer to track our linked list/\n        node = self.root\n        # iterate each character in prefix\n        for ch in prefix:\n            # character is not in the nodes hash map\n            if ch not in node.nodes:\n                # return false isn't a prefix\n                return False\n            # move our current node pointer\n            node = node.nodes[ch]\n        # Reached the end, it means all characters of prefix exist\n        # inside our Trie --\x3e return True.\n        return True\n")))))}k.isMDXComponent=!0}}]);