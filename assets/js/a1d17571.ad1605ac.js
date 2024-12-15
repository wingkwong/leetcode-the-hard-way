"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[34300],{81645:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"0900-0999/stamping-the-sequence-hard","title":"0936 - Stamping The Sequence (Hard)","description":"Author: @wingkwong | https://leetcode.com/problems/stamping-the-sequence/","source":"@site/solutions/0900-0999/0936-stamping-the-sequence-hard.md","sourceDirName":"0900-0999","slug":"/0900-0999/stamping-the-sequence-hard","permalink":"/solutions/0900-0999/stamping-the-sequence-hard","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0900-0999/0936-stamping-the-sequence-hard.md","tags":[],"version":"current","sidebarPosition":936,"frontMatter":{"description":"Author: @wingkwong | https://leetcode.com/problems/stamping-the-sequence/"},"sidebar":"tutorialSidebar","previous":{"title":"0935 - Knight Dialer (Medium)","permalink":"/solutions/0900-0999/knight-dialer-medium"},"next":{"title":"0941 - Valid Mountain Array (Easy)","permalink":"/solutions/0900-0999/valid-mountain-array-easy"}}');var a=t(74848),r=t(28453);const c={description:"Author: @wingkwong | https://leetcode.com/problems/stamping-the-sequence/"},i="0936 - Stamping The Sequence (Hard)",o={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Greedy",id:"approach-1-greedy",level:2}];function d(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{SolutionAuthor:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"0936---stamping-the-sequence-hard",children:"0936 - Stamping The Sequence (Hard)"})}),"\n",(0,a.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://leetcode.com/problems/stamping-the-sequence",children:"https://leetcode.com/problems/stamping-the-sequence"})}),"\n",(0,a.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsxs)(n.p,{children:["You are given two strings ",(0,a.jsx)(n.code,{children:"stamp"})," and ",(0,a.jsx)(n.code,{children:"target"}),". Initially, there is a string ",(0,a.jsx)(n.code,{children:"s"})," of length ",(0,a.jsx)(n.code,{children:"target.length"})," with all ",(0,a.jsx)(n.code,{children:"s[i] == '?'"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["In one turn, you can place ",(0,a.jsx)(n.code,{children:"stamp"})," over ",(0,a.jsx)(n.code,{children:"s"})," and replace every letter in the ",(0,a.jsx)(n.code,{children:"s"})," with the corresponding letter from ",(0,a.jsx)(n.code,{children:"stamp"}),"."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["For example, if ",(0,a.jsx)(n.code,{children:'stamp = "abc"'})," and ",(0,a.jsx)(n.code,{children:'target = "abcba"'}),", then ",(0,a.jsx)(n.code,{children:"s"})," is ",(0,a.jsx)(n.code,{children:'"?????"'})," initially. In one turn you can:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["place ",(0,a.jsx)(n.code,{children:"stamp"})," at index ",(0,a.jsx)(n.code,{children:"0"})," of ",(0,a.jsx)(n.code,{children:"s"})," to obtain ",(0,a.jsx)(n.code,{children:'"abc??"'}),","]}),"\n",(0,a.jsxs)(n.li,{children:["place ",(0,a.jsx)(n.code,{children:"stamp"})," at index ",(0,a.jsx)(n.code,{children:"1"})," of ",(0,a.jsx)(n.code,{children:"s"})," to obtain ",(0,a.jsx)(n.code,{children:'"?abc?"'}),", or"]}),"\n",(0,a.jsxs)(n.li,{children:["place ",(0,a.jsx)(n.code,{children:"stamp"})," at index ",(0,a.jsx)(n.code,{children:"2"})," of ",(0,a.jsx)(n.code,{children:"s"})," to obtain ",(0,a.jsx)(n.code,{children:'"??abc"'}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Note that ",(0,a.jsx)(n.code,{children:"stamp"})," must be fully contained in the boundaries of ",(0,a.jsx)(n.code,{children:"s"})," in order to stamp (i.e., you cannot place ",(0,a.jsx)(n.code,{children:"stamp"})," at index ",(0,a.jsx)(n.code,{children:"3"})," of ",(0,a.jsx)(n.code,{children:"s"}),")."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["We want to convert ",(0,a.jsx)(n.code,{children:"s"})," to ",(0,a.jsx)(n.code,{children:"target"})," using ",(0,a.jsx)(n.strong,{children:"at most"})," ",(0,a.jsx)(n.code,{children:"10 * target.length"})," turns."]}),"\n",(0,a.jsxs)(n.p,{children:["Return ",(0,a.jsx)(n.em,{children:"an array of the index of the left-most letter being stamped at each turn"}),". If we cannot obtain ",(0,a.jsx)(n.code,{children:"target"})," from ",(0,a.jsx)(n.code,{children:"s"})," within ",(0,a.jsx)(n.code,{children:"10 * target.length"})," turns, return an empty array."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'Input: stamp = "abc", target = "ababc"\nOutput: [0,2]\nExplanation: Initially s = "?????".\n- Place stamp at index 0 to get "abc??".\n- Place stamp at index 2 to get "ababc".\n[1,0,2] would also be accepted as an answer, as well as some other answers.\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'Input: stamp = "abca", target = "aabcaca"\nOutput: [3,0,1]\nExplanation: Initially s = "???????".\n- Place stamp at index 3 to get "???abca".\n- Place stamp at index 0 to get "abcabca".\n- Place stamp at index 1 to get "aabcaca".\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"1 <= stamp.length <= target.length <= 1000"})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"stamp"})," and ",(0,a.jsx)(n.code,{children:"target"})," consist of lowercase English letters."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"approach-1-greedy",children:"Approach 1: Greedy"}),"\n",(0,a.jsxs)(n.p,{children:["We first try the first stamp and mark those characters to",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mo,{children:"\u2217"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"*"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.4653em"}}),(0,a.jsx)(n.span,{className:"mord",children:"\u2217"})]})})]}),". Then build some new stamps to check if they exist in target, if so mark them and repeat the process until all characters are stamped."]}),"\n",(0,a.jsx)(t,{name:"@wingkwong"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> movesToStamp(string stamp, string target) {\n        int n = stamp.size(), total = 0, k = -1;\n        vector<int> ans;\n        // \"abca\"\n        // \"aabcaca\"\n        while (k) {\n            k = 0;\n            for (int j = n; j > 0; j--) {\n                for (int i = 0; i <= n - j; i++) {\n                    // build the new stamp\n                    string new_stamp = string(i, '*') + stamp.substr(i, j) + string(n - j - i, '*');\n                    // abca\n                    // abc*\n                    // *bca\n                    // ab**\n                    // *bc*\n                    // **ca\n                    // a***\n                    // *b**\n                    // **c*\n                    // ***a\n                    \n                    // check if we can use this new_stamp to cover some characters\n                    auto p = target.find(new_stamp);\n                    while (p != string::npos) {\n                        // if so, mark this position\n                        ans.push_back(p);\n                        // and replace those characters\n                        // e.g.\n                        // aabcaca\n                        // a****ca\n                        // a****ca\n                        // a******\n                        // a******\n                        // *******\n                        fill(target.begin() + p, target.begin() + p + n, '*');\n                        // try to find if we can cover another set\n                        p = target.find(new_stamp);\n                        // j is how many characters we've covered\n                        k += j;\n                    }\n                }\n            }\n            // update the total covered characters\n            total += k;\n        }\n        reverse(ans.begin(), ans.end());\n        return total == target.size() ? ans : vector<int>{};\n    }\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var s=t(96540);const a={},r=s.createContext(a);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);