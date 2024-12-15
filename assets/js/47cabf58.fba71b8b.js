"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[75163],{3013:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>t,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"0000-0099/regular-expression-matching-hard","title":"0010 - Regular Expression Matching (Hard)","description":"Author: @ColeB2 | https://leetcode.com/problems/regular-expression-matching/","source":"@site/solutions/0000-0099/0010-regular-expression-matching-hard.md","sourceDirName":"0000-0099","slug":"/0000-0099/regular-expression-matching-hard","permalink":"/solutions/0000-0099/regular-expression-matching-hard","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0010-regular-expression-matching-hard.md","tags":[{"inline":true,"label":"String","permalink":"/solutions/tags/string"},{"inline":true,"label":"Dynamic Programming","permalink":"/solutions/tags/dynamic-programming"},{"inline":true,"label":"Recursion","permalink":"/solutions/tags/recursion"}],"version":"current","sidebarPosition":10,"frontMatter":{"description":"Author: @ColeB2 | https://leetcode.com/problems/regular-expression-matching/","tags":["String","Dynamic Programming","Recursion"]},"sidebar":"tutorialSidebar","previous":{"title":"0009 - Palindrome Number (Easy)","permalink":"/solutions/0000-0099/palindrome-number-easy"},"next":{"title":"0011 - Container With Most Water (Medium)","permalink":"/solutions/0000-0099/container-with-most-water-medium"}}');var r=a(74848),i=a(28453);const t={description:"Author: @ColeB2 | https://leetcode.com/problems/regular-expression-matching/",tags:["String","Dynamic Programming","Recursion"]},l="0010 - Regular Expression Matching (Hard)",c={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Dynamic Programming - Memoization",id:"approach-1-dynamic-programming---memoization",level:2}];function m(s){const e={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",msup:"msup",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.R)(),...s.components},{SolutionAuthor:a,TabItem:n,Tabs:t}=e;return a||o("SolutionAuthor",!0),n||o("TabItem",!0),t||o("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"0010---regular-expression-matching-hard",children:"0010 - Regular Expression Matching (Hard)"})}),"\n",(0,r.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://leetcode.com/problems/regular-expression-matching/",children:"https://leetcode.com/problems/regular-expression-matching/"})}),"\n",(0,r.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsxs)(e.p,{children:["Given an input string ",(0,r.jsx)(e.code,{children:"s"})," and a pattern ",(0,r.jsx)(e.code,{children:"p"}),", implement regular expression matching with support for ",(0,r.jsx)(e.code,{children:"'.'"})," and ",(0,r.jsx)(e.code,{children:"'*'"})," where:"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"'.'"})," Matches any single character.\u200b\u200b\u200b\u200b"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"'*'"})," Matches zero or more of the preceding element."]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["The matching should cover the ",(0,r.jsx)(e.strong,{children:"entire"})," input string (not partial)."]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'Input: s = "aa", p = "a"\nOutput: false\nExplanation: "a" does not match the entire string "aa".\n'})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Input: s = \"aa\", p = \"a*\"\nOutput: true\nExplanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes \"aa\".\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Example 3:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'Input: s = "ab", p = ".*"\nOutput: true\nExplanation: ".*" means "zero or more (*) of any character (.)".\n'})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"1 <= s.length <= 20"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"1 <= p.length <= 20"})}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"s"})," contains only lowercase English letters."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"p"})," contains only lowercase English letters, ",(0,r.jsx)(e.code,{children:"'.'"}),", and ",(0,r.jsx)(e.code,{children:"'*'"}),"."]}),"\n",(0,r.jsxs)(e.li,{children:["It is guaranteed for each appearance of the character ",(0,r.jsx)(e.code,{children:"'*'"}),", there will be a previous valid character to match."]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"approach-1-dynamic-programming---memoization",children:"Approach 1: Dynamic Programming - Memoization"}),"\n",(0,r.jsxs)(e.p,{children:["We can solve this recursively, using a dfs/backtracking approach, where we check each character against each other, if they match, or match up to an ",(0,r.jsxs)(e.span,{className:"katex",children:[(0,r.jsx)(e.span,{className:"katex-mathml",children:(0,r.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(e.semantics,{children:[(0,r.jsxs)(e.mrow,{children:[(0,r.jsxs)(e.msup,{children:[(0,r.jsx)(e.mrow,{}),(0,r.jsx)(e.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]}),(0,r.jsxs)(e.msup,{children:[(0,r.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,r.jsx)(e.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]})]}),(0,r.jsx)(e.annotation,{encoding:"application/x-tex",children:"'.'"})]})})}),(0,r.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"0.7519em"}}),(0,r.jsxs)(e.span,{className:"mord",children:[(0,r.jsx)(e.span,{}),(0,r.jsx)(e.span,{className:"msupsub",children:(0,r.jsx)(e.span,{className:"vlist-t",children:(0,r.jsx)(e.span,{className:"vlist-r",children:(0,r.jsx)(e.span,{className:"vlist",style:{height:"0.7519em"},children:(0,r.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,r.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,r.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,r.jsx)(e.span,{className:"mord mtight",children:(0,r.jsx)(e.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]}),(0,r.jsxs)(e.span,{className:"mord",children:[(0,r.jsx)(e.span,{className:"mord",children:"."}),(0,r.jsx)(e.span,{className:"msupsub",children:(0,r.jsx)(e.span,{className:"vlist-t",children:(0,r.jsx)(e.span,{className:"vlist-r",children:(0,r.jsx)(e.span,{className:"vlist",style:{height:"0.7519em"},children:(0,r.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,r.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,r.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,r.jsx)(e.span,{className:"mord mtight",children:(0,r.jsx)(e.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]})]})})]})," character, we can move on to the next character. When we reach a ",(0,r.jsxs)(e.span,{className:"katex",children:[(0,r.jsx)(e.span,{className:"katex-mathml",children:(0,r.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(e.semantics,{children:[(0,r.jsxs)(e.mrow,{children:[(0,r.jsxs)(e.msup,{children:[(0,r.jsx)(e.mrow,{}),(0,r.jsx)(e.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]}),(0,r.jsxs)(e.msup,{children:[(0,r.jsx)(e.mo,{children:"\u2217"}),(0,r.jsx)(e.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]})]}),(0,r.jsx)(e.annotation,{encoding:"application/x-tex",children:"'*'"})]})})}),(0,r.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"0.7519em"}}),(0,r.jsxs)(e.span,{className:"mord",children:[(0,r.jsx)(e.span,{}),(0,r.jsx)(e.span,{className:"msupsub",children:(0,r.jsx)(e.span,{className:"vlist-t",children:(0,r.jsx)(e.span,{className:"vlist-r",children:(0,r.jsx)(e.span,{className:"vlist",style:{height:"0.7519em"},children:(0,r.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,r.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,r.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,r.jsx)(e.span,{className:"mord mtight",children:(0,r.jsx)(e.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]}),(0,r.jsxs)(e.span,{className:"mord",children:[(0,r.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,r.jsx)(e.span,{className:"msupsub",children:(0,r.jsx)(e.span,{className:"vlist-t",children:(0,r.jsx)(e.span,{className:"vlist-r",children:(0,r.jsx)(e.span,{className:"vlist",style:{height:"0.7519em"},children:(0,r.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,r.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,r.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,r.jsx)(e.span,{className:"mord mtight",children:(0,r.jsx)(e.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]})]})})]})," character is our trick case. That is the case where we have to  either skip the current character and not match it at all, or match it up several times to the same character in ",(0,r.jsxs)(e.span,{className:"katex",children:[(0,r.jsx)(e.span,{className:"katex-mathml",children:(0,r.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(e.semantics,{children:[(0,r.jsx)(e.mrow,{children:(0,r.jsx)(e.mi,{children:"s"})}),(0,r.jsx)(e.annotation,{encoding:"application/x-tex",children:"s"})]})})}),(0,r.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"s"})]})})]}),"."]}),"\n",(0,r.jsx)(e.p,{children:"The way we can handle that is simply by checking both cases:"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"Where we can just ignore the asterisk and the current character completely, and recursively call our helper function"}),"\n",(0,r.jsx)(e.li,{children:"If the current character matches, just check the star against the next character in our string."}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["The memoization comes in by storing in a cache the keys of ",(0,r.jsxs)(e.span,{className:"katex",children:[(0,r.jsx)(e.span,{className:"katex-mathml",children:(0,r.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(e.semantics,{children:[(0,r.jsxs)(e.mrow,{children:[(0,r.jsx)(e.mo,{stretchy:"false",children:"("}),(0,r.jsx)(e.mi,{children:"i"}),(0,r.jsx)(e.mo,{separator:"true",children:","}),(0,r.jsx)(e.mi,{children:"j"}),(0,r.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,r.jsx)(e.annotation,{encoding:"application/x-tex",children:"(i, j)"})]})})}),(0,r.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(e.span,{className:"mopen",children:"("}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,r.jsx)(e.span,{className:"mpunct",children:","}),(0,r.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,r.jsx)(e.span,{className:"mclose",children:")"})]})})]})," where ",(0,r.jsxs)(e.span,{className:"katex",children:[(0,r.jsx)(e.span,{className:"katex-mathml",children:(0,r.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(e.semantics,{children:[(0,r.jsx)(e.mrow,{children:(0,r.jsx)(e.mi,{children:"i"})}),(0,r.jsx)(e.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,r.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})})]})," is the index we are at in ",(0,r.jsxs)(e.span,{className:"katex",children:[(0,r.jsx)(e.span,{className:"katex-mathml",children:(0,r.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(e.semantics,{children:[(0,r.jsx)(e.mrow,{children:(0,r.jsx)(e.mi,{children:"s"})}),(0,r.jsx)(e.annotation,{encoding:"application/x-tex",children:"s"})]})})}),(0,r.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"s"})]})})]})," and ",(0,r.jsxs)(e.span,{className:"katex",children:[(0,r.jsx)(e.span,{className:"katex-mathml",children:(0,r.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(e.semantics,{children:[(0,r.jsx)(e.mrow,{children:(0,r.jsx)(e.mi,{children:"j"})}),(0,r.jsx)(e.annotation,{encoding:"application/x-tex",children:"j"})]})})}),(0,r.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,r.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})]})})]})," is the index we are at in ",(0,r.jsxs)(e.span,{className:"katex",children:[(0,r.jsx)(e.span,{className:"katex-mathml",children:(0,r.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(e.semantics,{children:[(0,r.jsx)(e.mrow,{children:(0,r.jsx)(e.mi,{children:"p"})}),(0,r.jsx)(e.annotation,{encoding:"application/x-tex",children:"p"})]})})}),(0,r.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"p"})]})})]}),". By storing whether or not we have matches at these ",(0,r.jsxs)(e.span,{className:"katex",children:[(0,r.jsx)(e.span,{className:"katex-mathml",children:(0,r.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(e.semantics,{children:[(0,r.jsxs)(e.mrow,{children:[(0,r.jsx)(e.mo,{stretchy:"false",children:"("}),(0,r.jsx)(e.mi,{children:"i"}),(0,r.jsx)(e.mo,{separator:"true",children:","}),(0,r.jsx)(e.mi,{children:"j"}),(0,r.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,r.jsx)(e.annotation,{encoding:"application/x-tex",children:"(i, j)"})]})})}),(0,r.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(e.span,{className:"mopen",children:"("}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,r.jsx)(e.span,{className:"mpunct",children:","}),(0,r.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,r.jsx)(e.span,{className:"mclose",children:")"})]})})]})," positions, it prevents us from having to redo work in cases where we may have to go over the string multiple times because of asterisks."]}),"\n",(0,r.jsxs)(e.p,{children:["Time Complexity: ",(0,r.jsxs)(e.span,{className:"katex",children:[(0,r.jsx)(e.span,{className:"katex-mathml",children:(0,r.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(e.semantics,{children:[(0,r.jsxs)(e.mrow,{children:[(0,r.jsx)(e.mi,{children:"O"}),(0,r.jsx)(e.mo,{stretchy:"false",children:"("}),(0,r.jsx)(e.mi,{children:"s"}),(0,r.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,r.jsx)(e.mi,{children:"l"}),(0,r.jsx)(e.mi,{children:"e"}),(0,r.jsx)(e.mi,{children:"n"}),(0,r.jsx)(e.mi,{children:"g"}),(0,r.jsx)(e.mi,{children:"t"}),(0,r.jsx)(e.mi,{children:"h"}),(0,r.jsx)(e.mo,{children:"\u2217"}),(0,r.jsx)(e.mi,{children:"p"}),(0,r.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,r.jsx)(e.mi,{children:"l"}),(0,r.jsx)(e.mi,{children:"e"}),(0,r.jsx)(e.mi,{children:"n"}),(0,r.jsx)(e.mi,{children:"g"}),(0,r.jsx)(e.mi,{children:"t"}),(0,r.jsx)(e.mi,{children:"h"}),(0,r.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,r.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(s.length * p.length)"})]})})}),(0,r.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,r.jsx)(e.span,{className:"mopen",children:"("}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,r.jsx)(e.span,{className:"mord",children:"."}),(0,r.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,r.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,r.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,r.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,r.jsx)(e.span,{className:"mord",children:"."}),(0,r.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,r.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,r.jsx)(e.span,{className:"mclose",children:")"})]})]})]}),". We are going to be checking through all indexes of length ",(0,r.jsxs)(e.span,{className:"katex",children:[(0,r.jsx)(e.span,{className:"katex-mathml",children:(0,r.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(e.semantics,{children:[(0,r.jsx)(e.mrow,{children:(0,r.jsx)(e.mi,{children:"s"})}),(0,r.jsx)(e.annotation,{encoding:"application/x-tex",children:"s"})]})})}),(0,r.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"s"})]})})]})," and ",(0,r.jsxs)(e.span,{className:"katex",children:[(0,r.jsx)(e.span,{className:"katex-mathml",children:(0,r.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(e.semantics,{children:[(0,r.jsx)(e.mrow,{children:(0,r.jsx)(e.mi,{children:"p"})}),(0,r.jsx)(e.annotation,{encoding:"application/x-tex",children:"p"})]})})}),(0,r.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"p"})]})})]}),", but we will be reusing the working by storing those values inside our  hash map."]}),"\n",(0,r.jsxs)(e.p,{children:["Space Complexity: ",(0,r.jsxs)(e.span,{className:"katex",children:[(0,r.jsx)(e.span,{className:"katex-mathml",children:(0,r.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(e.semantics,{children:[(0,r.jsxs)(e.mrow,{children:[(0,r.jsx)(e.mi,{children:"O"}),(0,r.jsx)(e.mo,{stretchy:"false",children:"("}),(0,r.jsx)(e.mi,{children:"s"}),(0,r.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,r.jsx)(e.mi,{children:"l"}),(0,r.jsx)(e.mi,{children:"e"}),(0,r.jsx)(e.mi,{children:"n"}),(0,r.jsx)(e.mi,{children:"g"}),(0,r.jsx)(e.mi,{children:"t"}),(0,r.jsx)(e.mi,{children:"h"}),(0,r.jsx)(e.mo,{children:"\u2217"}),(0,r.jsx)(e.mi,{children:"p"}),(0,r.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,r.jsx)(e.mi,{children:"l"}),(0,r.jsx)(e.mi,{children:"e"}),(0,r.jsx)(e.mi,{children:"n"}),(0,r.jsx)(e.mi,{children:"g"}),(0,r.jsx)(e.mi,{children:"t"}),(0,r.jsx)(e.mi,{children:"h"}),(0,r.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,r.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(s.length * p.length)"})]})})}),(0,r.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,r.jsx)(e.span,{className:"mopen",children:"("}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,r.jsx)(e.span,{className:"mord",children:"."}),(0,r.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,r.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,r.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,r.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,r.jsx)(e.span,{className:"mord",children:"."}),(0,r.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,r.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,r.jsx)(e.span,{className:"mclose",children:")"})]})]})]}),". Our cache will store the whether the work from checking each character against each other."]}),"\n",(0,r.jsx)(t,{children:(0,r.jsxs)(n,{value:"python",label:"Python",children:[(0,r.jsx)(a,{name:"@ColeB2"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-py",children:"class Solution:\n    def isMatch(self, s: str, p: str) -> bool:\n        # initialize our cache for memoization purposes\n        cache = {}\n        # recursive backtracking function, 2 parameters i and j\n        # i = index we are at in string s.\n        # j = index we are at in string p.\n        def match(i, j):\n            # if key (i,j) inside our cache, return the work we have\n            # for this position.\n            if (i, j) in cache:\n                return cache[(i, j)]\n            # if we reached end of our pattern string:\n            if j >= len(p):\n                # return i == len(s)\n                # True, if we reached the end of s, meaning our character\n                # matched up properly.\n                # False if i isn't at the end of the string, meaning\n                # we didn't match our pattern to our string.\n                return i == len(s)\n\n            # check if current char is in bounds, and matches to\n            # correct character, or a '.'.\n            current_char_match = i < len(s) and ((s[i] == p[j] or p[j] == '.'))\n            # next char is star, we may have to match multiple current chars.\n            if j + 1 < len(p) and p[j + 1] == '*':\n                # match where we skip asterisk, and don't skip the asterisk.\n                # (i, j + 2) handles skipping the asterisk,\n                # only not skipping asterisk if current characters match.\n                matches = match(i, j + 2) or (current_char_match and match(i + 1, j))\n            # else clause, don't have an asterisk character next.\n            else:\n                # if our current character at i and j match, check\n                # the next characters in the string and pattern.\n                matches = current_char_match and match(i + 1, j + 1)\n            # cache our work so we don't have to redo it and return.\n            cache[(i, j)] = matches\n            return matches\n        # return our function starting at 0,0\n        return match(0, 0)\n"})})]})})]})}function d(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,r.jsx)(e,{...s,children:(0,r.jsx)(m,{...s})}):m(s)}function o(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(s,e,a)=>{a.d(e,{R:()=>t,x:()=>l});var n=a(96540);const r={},i=n.createContext(r);function t(s){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function l(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(r):s.components||r:t(s.components),n.createElement(i.Provider,{value:e},s.children)}}}]);