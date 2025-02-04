"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[23544],{7376:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"2100-2199/minimum-number-of-moves-to-make-palindrome-hard","title":"2193 - Minimum Number of Moves to Make Palindrome (Hard)","description":"Author: @heiheihang | https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/","source":"@site/solutions/2100-2199/2193-minimum-number-of-moves-to-make-palindrome-hard.md","sourceDirName":"2100-2199","slug":"/2100-2199/minimum-number-of-moves-to-make-palindrome-hard","permalink":"/solutions/2100-2199/minimum-number-of-moves-to-make-palindrome-hard","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2193-minimum-number-of-moves-to-make-palindrome-hard.md","tags":[],"version":"current","sidebarPosition":2193,"frontMatter":{"description":"Author: @heiheihang | https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/"},"sidebar":"tutorialSidebar","previous":{"title":"2192 - All Ancestors of a Node in a Directed Acyclic Graph (Medium)","permalink":"/solutions/2100-2199/all-ancestors-of-a-node-in-a-directed-acyclic-graph-medium"},"next":{"title":"2194 - Cells in a Range on an Excel Sheet (Easy)","permalink":"/solutions/2100-2199/cells-in-a-range-on-an-excel-sheet-easy"}}');var a=t(86070),r=t(32790);const i={description:"Author: @heiheihang | https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/"},o="2193 - Minimum Number of Moves to Make Palindrome (Hard)",l={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Brute Force",id:"approach-1-brute-force",level:2}];function m(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{SolutionAuthor:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"2193---minimum-number-of-moves-to-make-palindrome-hard",children:"2193 - Minimum Number of Moves to Make Palindrome (Hard)"})}),"\n",(0,a.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/",children:"https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/"})}),"\n",(0,a.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsxs)(n.p,{children:["You are given a string ",(0,a.jsx)(n.code,{children:"s"})," consisting only of lowercase English letters."]}),"\n",(0,a.jsxs)(n.p,{children:["In one ",(0,a.jsx)(n.strong,{children:"move"}),", you can select any two ",(0,a.jsx)(n.strong,{children:"adjacent"})," characters of ",(0,a.jsx)(n.code,{children:"s"})," and swap them."]}),"\n",(0,a.jsxs)(n.p,{children:["Return ",(0,a.jsxs)(n.em,{children:["the ",(0,a.jsx)(n.strong,{children:"minimum number of moves"})," needed to make"]})," ",(0,a.jsx)(n.code,{children:"s"})," ",(0,a.jsx)(n.em,{children:"a palindrome"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note"})," that the input will be generated such that ",(0,a.jsx)(n.code,{children:"s"})," can always be converted to a palindrome."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'Input: s = "aabb"\nOutput: 2\nExplanation:\nWe can obtain two palindromes from s, "abba" and "baab".\n- We can obtain "abba" from s in 2 moves: "aabb" -> "abab" -> "abba".\n- We can obtain "baab" from s in 2 moves: "aabb" -> "abab" -> "baab".\nThus, the minimum number of moves needed to make s a palindrome is 2.\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'Input: s = "letelt"\nOutput: 2\nExplanation:\nOne of the palindromes we can obtain from s in 2 moves is "lettel".\nOne of the ways we can obtain it is "letelt" -> "letetl" -> "lettel".\nOther palindromes such as "tleelt" can also be obtained in 2 moves.\nIt can be shown that it is not possible to obtain a palindrome in less than 2 moves.\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"1 <= s.length <= 2000"})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"s"})," consists only of lowercase English letters."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"s"})," can be converted to a palindrome using a finite number of moves."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"approach-1-brute-force",children:"Approach 1: Brute Force"}),"\n",(0,a.jsxs)(n.p,{children:["The first solution solves it in ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"O"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsxs)(n.msup,{children:[(0,a.jsx)(n.mi,{children:"N"}),(0,a.jsx)(n.mn,{children:"2"})]}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(N^2)"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsxs)(n.span,{className:"mord",children:[(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,a.jsx)(n.span,{className:"msupsub",children:(0,a.jsx)(n.span,{className:"vlist-t",children:(0,a.jsx)(n.span,{className:"vlist-r",children:(0,a.jsx)(n.span,{className:"vlist",style:{height:"0.8141em"},children:(0,a.jsxs)(n.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(n.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})})]})," time brute force. The general logic is the following:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Count the number of occurrences of each character"}),"\n",(0,a.jsx)(n.li,{children:"Start iterating rightward from the left character, skip if it does not have an available matching character"}),"\n",(0,a.jsx)(n.li,{children:"Start iterating leftward from the right-most unmatched character, and find the first matching character"}),"\n",(0,a.jsx)(n.li,{children:"When found, swap the characters in between to its appropriate position"}),"\n",(0,a.jsx)(n.li,{children:"If we have skipped the odd character, we need to add its disposition from the middle position to the result"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"This greedy approach is hard to justify that it produces the smallest amount of move, perhaps a harder analysis is needed."}),"\n",(0,a.jsx)(t,{name:"@heiheihang"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"def minMovesToMakePalindrome(self, s: str) -> int:\n\n        #initialize the number of counts\n        res = 0\n\n        #keep track of the right pointer of unused character\n        rp = len(s) - 1\n\n        #count the frequency of characters\n        d = defaultdict(int)\n\n        #change the string to a list for swapping\n        s = list(s)\n\n        #calculate the frequency of characters\n        for i in range(len(s)):\n            c = s[i]\n            d[c] += 1\n\n        #initialize the position of the odd character (middle)\n        odd_position = -1\n\n        #we only need to look up to the middle of the palindrome form left side\n        for i in range((len(s)+1)//2):\n\n            left_character = s[i]\n\n            #we skip if the character is the odd one\n            if(d[left_character] == 1):\n                odd_position = i\n                continue\n\n            #we find the matching\n            for j in range(rp, -1, -1):\n\n                #stop when we find a matching character\n                if(s[j] == left_character):\n\n                    #swap the characters until the target position\n                    for k in range(j, rp):\n                        s[k] = s[k+1]\n                    #set the character at the target position\n                    s[rp] = left_character\n\n                    #add the distance travelled for the target character\n                    res += rp - j\n                    break\n            #decrease the count of that character by 2\n            d[left_character] -= 2\n\n            #decrease right pointer by 1\n            rp -= 1\n            # print(s, res, i)\n\n        #if there is an odd character\n        if(odd_position != -1):\n\n            #add its distance to the center position\n            res += (len(s)) // 2 - left_over\n\n        return res\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},32790:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(30758);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);