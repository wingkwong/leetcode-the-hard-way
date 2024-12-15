"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[12868],{15761:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>l,metadata:()=>a,toc:()=>m});const a=JSON.parse('{"id":"0000-0099/rotate-list-medium","title":"0061 - Rotate List (Medium)","description":"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/rotate-list/","source":"@site/solutions/0000-0099/0061-rotate-list-medium.md","sourceDirName":"0000-0099","slug":"/0000-0099/rotate-list-medium","permalink":"/solutions/0000-0099/rotate-list-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0061-rotate-list-medium.md","tags":[],"version":"current","sidebarPosition":61,"frontMatter":{"description":"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/rotate-list/"},"sidebar":"tutorialSidebar","previous":{"title":"0058 - Length of Last Word","permalink":"/solutions/0000-0099/length-of-last-word-easy"},"next":{"title":"0062 - Unique Paths (Medium)","permalink":"/solutions/0000-0099/unique-paths-medium"}}');var t=s(74848),i=s(28453);const l={description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/rotate-list/"},r="0061 - Rotate List (Medium)",c={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Connect and Cut",id:"approach-1-connect-and-cut",level:2}];function h(e){const n={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",mspace:"mspace",mtext:"mtext",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{SolutionAuthor:s,TabItem:a,Tabs:l}=n;return s||d("SolutionAuthor",!0),a||d("TabItem",!0),l||d("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"0061---rotate-list-medium",children:"0061 - Rotate List (Medium)"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/rotate-list/",children:"https://leetcode.com/problems/rotate-list/"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(n.p,{children:["Given the ",(0,t.jsx)(n.code,{children:"head"})," of a linked list, rotate the list to the right by ",(0,t.jsx)(n.code,{children:"k"})," places."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2020/11/13/rotate1.jpg",alt:""})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: head = [1,2,3,4,5], k = 2\nOutput: [4,5,1,2,3]\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2020/11/13/roate2.jpg",alt:""})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: head = [0,1,2], k = 4\nOutput: [2,0,1]\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The number of nodes in the list is in the range ",(0,t.jsx)(n.code,{children:"[0, 500]"}),"."]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"-100 <= Node.val <= 100"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"0 <= k <= 2 * 10^9"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"approach-1-connect-and-cut",children:"Approach 1: Connect and Cut"}),"\n",(0,t.jsxs)(n.p,{children:["First we iterate each node till the end and connect the tail to the head. At the same time we calculate how many nodes there, says ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mi,{children:"n"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"})]})})]}),". After that, we find a point to cut the list. The point to cut is ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"n"}),(0,t.jsx)(n.mo,{children:"\u2212"}),(0,t.jsx)(n.mi,{children:"k"}),(0,t.jsx)(n.mspace,{}),(0,t.jsx)(n.mspace,{width:"0.6667em"}),(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{mathvariant:"normal",children:"m"}),(0,t.jsx)(n.mi,{mathvariant:"normal",children:"o"}),(0,t.jsx)(n.mi,{mathvariant:"normal",children:"d"})]}),(0,t.jsx)(n.mtext,{children:"\u2009"}),(0,t.jsx)(n.mtext,{children:"\u2009"}),(0,t.jsx)(n.mi,{children:"n"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"n - k \\mod n"})]})})}),(0,t.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(n.span,{className:"mbin",children:"\u2212"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6944em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,t.jsx)(n.span,{className:"mspace allowbreak"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.6667em"}})]}),(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6944em"}}),(0,t.jsx)(n.span,{className:"mord",children:(0,t.jsx)(n.span,{className:"mord",children:(0,t.jsx)(n.span,{className:"mord mathrm",children:"mod"})})}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"})]})]})]}),". As ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mi,{children:"k"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"k"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6944em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})})]})," can be greater or equal to ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mi,{children:"n"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"})]})})]}),", so the new head will be located at ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"n"}),(0,t.jsx)(n.mo,{children:"\u2212"}),(0,t.jsx)(n.mi,{children:"k"}),(0,t.jsx)(n.mspace,{}),(0,t.jsx)(n.mspace,{width:"0.6667em"}),(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{mathvariant:"normal",children:"m"}),(0,t.jsx)(n.mi,{mathvariant:"normal",children:"o"}),(0,t.jsx)(n.mi,{mathvariant:"normal",children:"d"})]}),(0,t.jsx)(n.mtext,{children:"\u2009"}),(0,t.jsx)(n.mtext,{children:"\u2009"}),(0,t.jsx)(n.mi,{children:"n"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"n - k \\mod n"})]})})}),(0,t.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(n.span,{className:"mbin",children:"\u2212"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6944em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,t.jsx)(n.span,{className:"mspace allowbreak"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.6667em"}})]}),(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6944em"}}),(0,t.jsx)(n.span,{className:"mord",children:(0,t.jsx)(n.span,{className:"mord",children:(0,t.jsx)(n.span,{className:"mord mathrm",children:"mod"})})}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"})]})]})]}),". Then we link the new tail->next to null and return the new head."]}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsxs)(a,{value:"cpp",label:"C++",children:[(0,t.jsx)(s,{name:"@wingkwong"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    ListNode* rotateRight(ListNode* head, int k) {\n        if (!head) return NULL;\n        ListNode *p = head;\n        int n = 1;\n        while (p->next) {\n            p = p->next;\n            n++;\n        }\n        // connect tail to head - like a ring\n        p->next = head;\n        // find the location to cut\n        k = len - k % len;\n        // move to that location\n        while (k--) p = p->next;\n        // p->next is the new head\n        head = p->next;\n        // make it as the new tail\n        p->next = NULL;\n        // return the new head\n        return head;\n    }\n};\n"})})]}),(0,t.jsxs)(a,{value:"py",label:"Python",children:[(0,t.jsx)(s,{name:"@radojicic23"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\nclass Solution:\n    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:\n        curr = head\n        n = 1\n        if not head: return None\n        while curr.next:\n            curr = curr.next\n            n += 1\n        curr.next = head\n        k = n - k % n\n        while k:\n            curr = curr.next\n            k -= 1\n        head = curr.next\n        curr.next = None\n        return head\n"})})]}),(0,t.jsxs)(a,{value:"js",label:"JavaScript",children:[(0,t.jsx)(s,{name:"@radojicic23"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @param {ListNode} head\n * @param {number} k\n * @return {ListNode}\n */\nvar rotateRight = function(head, k) {\n    let curr = head;\n    let n = 1;\n    if (!head) return null;\n    while (curr.next) {\n        curr = curr.next;\n        n++;\n    }\n    curr.next = head;\n    k = n - k % n;\n    while (k) {\n        curr = curr.next;\n        k--;\n    }\n    head = curr.next;\n    curr.next = null;\n    return head;\n}\n"})})]})]})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}function d(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>r});var a=s(96540);const t={},i=a.createContext(t);function l(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);