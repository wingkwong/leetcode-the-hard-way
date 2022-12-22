"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[65500],{3905:function(e,t,a){a.d(t,{Zo:function(){return i},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),d=l(a),h=r,u=d["".concat(p,".").concat(h)]||d[h]||c[h]||s;return a?n.createElement(u,o(o({ref:t},i),{},{components:a})):n.createElement(u,o({ref:t},i))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:r,o[1]=m;for(var l=2;l<s;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},19707:function(e,t,a){a.r(t),a.d(t,{assets:function(){return i},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return m},metadata:function(){return l},toc:function(){return c}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),o=["components"],m={description:"Author: @dhanu084 | https://leetcode.com/problems/remove-nodes-from-linked-list/",tags:["Linked List","Stack"]},p="2487 - Remove Nodes From Linked List (Medium)",l={unversionedId:"2400-2499/remove-nodes-from-linked-list-medium",id:"2400-2499/remove-nodes-from-linked-list-medium",title:"2487 - Remove Nodes From Linked List (Medium)",description:"Author: @dhanu084 | https://leetcode.com/problems/remove-nodes-from-linked-list/",source:"@site/solutions/2400-2499/2487-remove-nodes-from-linked-list-medium.md",sourceDirName:"2400-2499",slug:"/2400-2499/remove-nodes-from-linked-list-medium",permalink:"/leetcode-the-hard-way/solutions/2400-2499/remove-nodes-from-linked-list-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2400-2499/2487-remove-nodes-from-linked-list-medium.md",tags:[{label:"Linked List",permalink:"/leetcode-the-hard-way/solutions/tags/linked-list"},{label:"Stack",permalink:"/leetcode-the-hard-way/solutions/tags/stack"}],version:"current",sidebarPosition:2487,frontMatter:{description:"Author: @dhanu084 | https://leetcode.com/problems/remove-nodes-from-linked-list/",tags:["Linked List","Stack"]},sidebar:"tutorialSidebar",previous:{title:"2486 - Append Characters to String to Make Subsequence (Medium)",permalink:"/leetcode-the-hard-way/solutions/2400-2499/append-characters-to-string-to-make-subsequence-medium"},next:{title:"2500 - 2599",permalink:"/leetcode-the-hard-way/solutions/category/2500---2599"}},i={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Straight Forward",id:"approach-1-straight-forward",level:2},{value:"Approach 2: Stack",id:"approach-2-stack",level:2}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)}},h=d("Tabs"),u=d("TabItem"),k=d("SolutionAuthor"),N={toc:c};function f(e){var t=e.components,a=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"2487---remove-nodes-from-linked-list-medium"},"2487 - Remove Nodes From Linked List (Medium)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/remove-nodes-from-linked-list/"},"https://leetcode.com/problems/remove-nodes-from-linked-list/")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"You are given the head of a linked list."),(0,s.kt)("p",null,"Remove every node which has a node with a strictly greater value anywhere to the right side of it."),(0,s.kt)("p",null,"Return the head of the modified linked list."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: head = [5,2,13,3,8]\nOutput: [13,8]\nExplanation: The nodes that should be removed are 5, 2 and 3.\n- Node 13 is to the right of node 5.\n- Node 13 is to the right of node 2.\n- Node 8 is to the right of node 3.\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: head = [1,1,1,1]\nOutput: [1,1,1,1]\nExplanation: Every node has value 1, so no nodes are removed.\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The number of the nodes in the given list is in the range ","[1, 105]","."),(0,s.kt)("li",{parentName:"ul"},"1 <= Node.val <= 105")),(0,s.kt)("h2",{id:"approach-1-straight-forward"},"Approach 1: Straight Forward"),(0,s.kt)("p",null,"Time Complexity: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,s.kt)("p",null,"Space Complexity: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,s.kt)(h,{mdxType:"Tabs"},(0,s.kt)(u,{value:"py",label:"Python",mdxType:"TabItem"},(0,s.kt)(k,{name:"@dhanu084",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def removeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:\n\n        '''\n            * If we see the question and expected answer we can always see that the tail of the linked list is included in the output.\n            * So reverse the linked list and connect nodes which are\n            less / equal than the current node.\n            * Since we have reversed the linked list , we do less / equal\n            checking instead of strictly increase check mentioned in the question\n            * finally reverse the linked list again and return to get the answer in expected order\n        '''\n        def reverse(node):\n            curr = node\n            prev = None\n\n            while curr:\n                next = curr.next\n                curr.next = prev\n                prev = curr\n                curr = next\n            return prev\n\n        reverse_head = reverse(head)\n        current_reverse_head = reverse_head\n\n        while current_reverse_head:\n            ch = current_reverse_head.next\n            '''\n                iterate till we find a node greater than current node\n                and connect it to current node\n            '''\n            while ch and ch.val < current_reverse_head.val:\n                ch = ch.next\n            current_reverse_head.next = ch\n            current_reverse_head = ch\n\n        head = reverse(reverse_head)\n        return head\n\n")))),(0,s.kt)("h2",{id:"approach-2-stack"},"Approach 2: Stack"),(0,s.kt)("p",null,"Time Complexity: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,s.kt)("p",null,"Space Complexity: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," if all nodes have same value"),(0,s.kt)(h,{mdxType:"Tabs"},(0,s.kt)(u,{value:"py",label:"Python",mdxType:"TabItem"},(0,s.kt)(k,{name:"@dhanu084",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def removeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:\n\n        '''\n            * Idea here is to create a stack which is monotonously decreasing,\n            any thing that defers are popped from the stack\n            * as and when we append or remove from stack we update\n            next pointer appropriately\n        '''\n        dummy = ListNode(inf)\n        stack = [dummy]\n\n        while head:\n            while stack and stack[-1].val < head.val:\n                stack.pop()\n            stack[-1].next = head\n            stack.append(head)\n            head = head.next\n        return dummy.next\n")))))}f.isMDXComponent=!0}}]);