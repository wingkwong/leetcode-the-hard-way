"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[65500],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19707:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>v,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const a={description:"Author: @dhanu084 | https://leetcode.com/problems/remove-nodes-from-linked-list/",tags:["Linked List","Stack"]},i="2487 - Remove Nodes From Linked List (Medium)",l={unversionedId:"2400-2499/remove-nodes-from-linked-list-medium",id:"2400-2499/remove-nodes-from-linked-list-medium",title:"2487 - Remove Nodes From Linked List (Medium)",description:"Author: @dhanu084 | https://leetcode.com/problems/remove-nodes-from-linked-list/",source:"@site/solutions/2400-2499/2487-remove-nodes-from-linked-list-medium.md",sourceDirName:"2400-2499",slug:"/2400-2499/remove-nodes-from-linked-list-medium",permalink:"/solutions/2400-2499/remove-nodes-from-linked-list-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2400-2499/2487-remove-nodes-from-linked-list-medium.md",tags:[{label:"Linked List",permalink:"/solutions/tags/linked-list"},{label:"Stack",permalink:"/solutions/tags/stack"}],version:"current",sidebarPosition:2487,frontMatter:{description:"Author: @dhanu084 | https://leetcode.com/problems/remove-nodes-from-linked-list/",tags:["Linked List","Stack"]},sidebar:"tutorialSidebar",previous:{title:"2486 - Append Characters to String to Make Subsequence (Medium)",permalink:"/solutions/2400-2499/append-characters-to-string-to-make-subsequence-medium"},next:{title:"2500 - 2599",permalink:"/solutions/category/2500---2599"}},s={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Straight Forward",id:"approach-1-straight-forward",level:2},{value:"Approach 2: Stack",id:"approach-2-stack",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},c=p("Tabs"),u=p("TabItem"),m=p("SolutionAuthor"),h={toc:d},k="wrapper";function v(e){let{components:t,...n}=e;return(0,o.kt)(k,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2487---remove-nodes-from-linked-list-medium"},"2487 - Remove Nodes From Linked List (Medium)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/remove-nodes-from-linked-list/"},"https://leetcode.com/problems/remove-nodes-from-linked-list/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"You are given the head of a linked list."),(0,o.kt)("p",null,"Remove every node which has a node with a strictly greater value anywhere to the right side of it."),(0,o.kt)("p",null,"Return the head of the modified linked list."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: head = [5,2,13,3,8]\nOutput: [13,8]\nExplanation: The nodes that should be removed are 5, 2 and 3.\n- Node 13 is to the right of node 5.\n- Node 13 is to the right of node 2.\n- Node 8 is to the right of node 3.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: head = [1,1,1,1]\nOutput: [1,1,1,1]\nExplanation: Every node has value 1, so no nodes are removed.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The number of the nodes in the given list is in the range ","[1, 105]","."),(0,o.kt)("li",{parentName:"ul"},"1 <= Node.val <= 105")),(0,o.kt)("h2",{id:"approach-1-straight-forward"},"Approach 1: Straight Forward"),(0,o.kt)("p",null,"Time Complexity: $$O(n)$$"),(0,o.kt)("p",null,"Space Complexity: $$O(1)$$"),(0,o.kt)(c,{mdxType:"Tabs"},(0,o.kt)(u,{value:"py",label:"Python",mdxType:"TabItem"},(0,o.kt)(m,{name:"@dhanu084",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def removeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:\n\n        '''\n            * If we see the question and expected answer we can always see that the tail of the linked list is included in the output.\n            * So reverse the linked list and connect nodes which are\n            less / equal than the current node.\n            * Since we have reversed the linked list , we do less / equal\n            checking instead of strictly increase check mentioned in the question\n            * finally reverse the linked list again and return to get the answer in expected order\n        '''\n        def reverse(node):\n            curr = node\n            prev = None\n\n            while curr:\n                next = curr.next\n                curr.next = prev\n                prev = curr\n                curr = next\n            return prev\n\n        reverse_head = reverse(head)\n        current_reverse_head = reverse_head\n\n        while current_reverse_head:\n            ch = current_reverse_head.next\n            '''\n                iterate till we find a node greater than current node\n                and connect it to current node\n            '''\n            while ch and ch.val < current_reverse_head.val:\n                ch = ch.next\n            current_reverse_head.next = ch\n            current_reverse_head = ch\n\n        head = reverse(reverse_head)\n        return head\n\n")))),(0,o.kt)("h2",{id:"approach-2-stack"},"Approach 2: Stack"),(0,o.kt)("p",null,"Time Complexity: $$O(n)$$"),(0,o.kt)("p",null,"Space Complexity: $$O(n)$$ if all nodes have same value"),(0,o.kt)(c,{mdxType:"Tabs"},(0,o.kt)(u,{value:"py",label:"Python",mdxType:"TabItem"},(0,o.kt)(m,{name:"@dhanu084",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def removeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:\n\n        '''\n            * Idea here is to create a stack which is monotonously decreasing,\n            any thing that defers are popped from the stack\n            * as and when we append or remove from stack we update\n            next pointer appropriately\n        '''\n        dummy = ListNode(inf)\n        stack = [dummy]\n\n        while head:\n            while stack and stack[-1].val < head.val:\n                stack.pop()\n            stack[-1].next = head\n            stack.append(head)\n            head = head.next\n        return dummy.next\n")))))}v.isMDXComponent=!0}}]);