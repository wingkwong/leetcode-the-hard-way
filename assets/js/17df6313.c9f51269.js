"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[24212],{38609:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>m,default:()=>d,frontMatter:()=>t,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"1100-1199/longest-common-subsequence-medium","title":"1143 - Longest Common Subsequence (Medium)","description":"Author: @wingkwong , @deepanshu-rawat6, @radojicic23 | https://leetcode.com/problems/longest-common-subsequence/","source":"@site/solutions/1100-1199/1143-longest-common-subsequence-medium.md","sourceDirName":"1100-1199","slug":"/1100-1199/longest-common-subsequence-medium","permalink":"/solutions/1100-1199/longest-common-subsequence-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1100-1199/1143-longest-common-subsequence-medium.md","tags":[{"inline":true,"label":"String","permalink":"/solutions/tags/string"},{"inline":true,"label":"Dynamic Programming","permalink":"/solutions/tags/dynamic-programming"}],"version":"current","sidebarPosition":1143,"frontMatter":{"description":"Author: @wingkwong , @deepanshu-rawat6, @radojicic23 | https://leetcode.com/problems/longest-common-subsequence/","tags":["String","Dynamic Programming"]},"sidebar":"tutorialSidebar","previous":{"title":"1140 - Stone Game II (Medium)","permalink":"/solutions/1100-1199/stone-game-ii-medium"},"next":{"title":"1147 - Longest Chunked Palindrome Decomposition (Hard)","permalink":"/solutions/1100-1199/longest-chunked-palindrome-decomposition-hard"}}');var l=n(74848),i=n(28453);const t={description:"Author: @wingkwong , @deepanshu-rawat6, @radojicic23 | https://leetcode.com/problems/longest-common-subsequence/",tags:["String","Dynamic Programming"]},m="1143 - Longest Common Subsequence (Medium)",r={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DP",id:"approach-1-dp",level:2}];function h(s){const e={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.R)(),...s.components},{SolutionAuthor:n,TabItem:a,Tabs:t}=e;return n||o("SolutionAuthor",!0),a||o("TabItem",!0),t||o("Tabs",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"1143---longest-common-subsequence-medium",children:"1143 - Longest Common Subsequence (Medium)"})}),"\n",(0,l.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.a,{href:"https://leetcode.com/problems/longest-common-subsequence",children:"https://leetcode.com/problems/longest-common-subsequence"})}),"\n",(0,l.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,l.jsxs)(e.p,{children:["Given two strings ",(0,l.jsx)(e.code,{children:"text1"})," and ",(0,l.jsx)(e.code,{children:"text2"}),", return ",(0,l.jsxs)(e.em,{children:["the length of their longest ",(0,l.jsx)(e.strong,{children:"common subsequence"}),"."]})," If there is no ",(0,l.jsx)(e.strong,{children:"common subsequence"}),", return ",(0,l.jsx)(e.code,{children:"0"}),"."]}),"\n",(0,l.jsxs)(e.p,{children:["A ",(0,l.jsx)(e.strong,{children:"subsequence"})," of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters."]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["For example, ",(0,l.jsx)(e.code,{children:'"ace"'})," is a subsequence of ",(0,l.jsx)(e.code,{children:'"abcde"'}),"."]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["A ",(0,l.jsx)(e.strong,{children:"common subsequence"})," of two strings is a subsequence that is common to both strings."]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:'Input: text1 = "abcde", text2 = "ace" \nOutput: 3  \nExplanation: The longest common subsequence is "ace" and its length is 3.\n'})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:'Input: text1 = "abc", text2 = "abc"\nOutput: 3\nExplanation: The longest common subsequence is "abc" and its length is 3.\n'})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Example 3:"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:'Input: text1 = "abc", text2 = "def"\nOutput: 0\nExplanation: There is no such common subsequence, so the result is 0.\n'})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"1 <= text1.length, text2.length <= 1000"})}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"text1"})," and ",(0,l.jsx)(e.code,{children:"text2"})," consist of only lowercase English characters."]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"approach-1-dp",children:"Approach 1: DP"}),"\n",(0,l.jsxs)(e.p,{children:["LCS is a classic problem. Let ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"d"}),(0,l.jsx)(e.mi,{children:"p"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mi,{children:"j"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"dp[i][j]"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"})]})})]})," be the LCS for string ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"t"}),(0,l.jsx)(e.mi,{children:"e"}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mi,{children:"t"}),(0,l.jsx)(e.mn,{children:"1"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"text1"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(e.span,{className:"mord",children:"1"})]})})]})," ends at index ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"i"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})})]})," and string ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"t"}),(0,l.jsx)(e.mi,{children:"e"}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mi,{children:"t"}),(0,l.jsx)(e.mn,{children:"2"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"text2"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(e.span,{className:"mord",children:"2"})]})})]})," ends at index ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"j"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"j"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})]})})]}),". If ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"t"}),(0,l.jsx)(e.mi,{children:"e"}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mi,{children:"t"}),(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mi,{children:"t"}),(0,l.jsx)(e.mi,{children:"e"}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mi,{children:"t"}),(0,l.jsx)(e.mn,{children:"2"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mi,{children:"j"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"text1[i] == text2[j]"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"=="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(e.span,{className:"mord",children:"2"}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"})]})]})]}),", then ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"d"}),(0,l.jsx)(e.mi,{children:"p"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mi,{children:"j"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"dp[i][j]"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"})]})})]})," would be ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mi,{children:"d"}),(0,l.jsx)(e.mi,{children:"p"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mo,{children:"\u2212"}),(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mi,{children:"j"}),(0,l.jsx)(e.mo,{children:"\u2212"}),(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"1 + dp[i - 1][j - 1]"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"})]})]})]}),". Otherwise, we target the largest LCS if we skip one character from either ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"t"}),(0,l.jsx)(e.mi,{children:"e"}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mi,{children:"t"}),(0,l.jsx)(e.mn,{children:"1"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"text1"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(e.span,{className:"mord",children:"1"})]})})]})," or ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"t"}),(0,l.jsx)(e.mi,{children:"e"}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mi,{children:"t"}),(0,l.jsx)(e.mn,{children:"2"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"text2"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(e.span,{className:"mord",children:"2"})]})})]}),", i.e. ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"d"}),(0,l.jsx)(e.mi,{children:"p"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mi,{children:"j"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mi,{children:"m"}),(0,l.jsx)(e.mi,{children:"a"}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"d"}),(0,l.jsx)(e.mi,{children:"p"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mo,{children:"\u2212"}),(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mi,{children:"j"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,l.jsx)(e.mo,{separator:"true",children:","}),(0,l.jsx)(e.mi,{children:"d"}),(0,l.jsx)(e.mi,{children:"p"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mi,{children:"j"}),(0,l.jsx)(e.mo,{children:"\u2212"}),(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"ma"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"}),(0,l.jsx)(e.span,{className:"mpunct",children:","}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"mclose",children:"])"})]})]})]}),"."]}),"\n",(0,l.jsxs)(t,{children:[(0,l.jsxs)(a,{value:"cpp",label:"C++",children:[(0,l.jsx)(n,{name:"@wingkwong"}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int longestCommonSubsequence(string text1, string text2) {\n        int n = text1.size(), m = text2.size();\n        vector<vector<int>> dp(n + 1, vector<int>(m + 1));\n        for(int i = 1; i <= n; i++) {\n            for(int j = 1; j <= m; j++) {\n                if(text1[i - 1] == text2[j - 1]) {\n                    dp[i][j] = dp[i - 1][j - 1] + 1;\n                } else {\n                    dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);\n                }\n            }\n        }\n        return dp[n][m];\n    }\n};\n"})})]}),(0,l.jsxs)(a,{value:"java",label:"Java",children:[(0,l.jsx)(n,{name:"@deepanshu-rawat6"}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-java",children:"class Solution {\n    public int longestCommonSubsequence(String text1, String text2) {\n        int m = text1.length();\n        int n = text2.length();\n        // dp[][] array for storing records of every charcters\n        int[][] dp = new int[m + 1][n + 1];\n        for (int i = 0; i <= m; i++) {\n            for (int j = 0; j <= n; j++) {\n                if (i == 0 || j ==0) {\n                    // setting first row and first column to be zero(initial readings)\n                    dp[i][j] = 0;\n                } else if (text1.charAt(i - 1) == text2.charAt(j - 1)) {\n                    /*\n                    if match found, then store value of previous diagonal element(dp[i - 1][j - 1]) \n                    and increase the value by 1 i.e. a new character match is found\n                    */\n                    dp[i][j] = dp[i - 1][j - 1] + 1;\n                } else {\n                    /*\n                    otherwise, choose maximum of either previous element, either in \n                    row(dp[i][j -1]) or column(dp[i][j - 1])\n                    */\n                    dp[i][j] = Math.max(dp[i][j - 1],dp[i - 1][j]);\n                }\n            }\n        }\n        // dp[m][n] would hold the value of the LCS obtained\n        return dp[m][n];\n    }\n}\n"})})]}),(0,l.jsxs)(a,{value:"js",label:"JavaScript",children:[(0,l.jsx)(n,{name:"@radojicic23"}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"/**\n * @param {string} text1\n * @param {string} text2\n * @return {number}\n */\nvar longestCommonSubsequence = function(text1, text2) {\n    let n = text1.length;\n    let m = text2.length;\n    let dp = new Array(n + 1).fill(0).map(x => new Array(m + 1).fill(0));\n    for (i = 1; i <= n; i++) {\n        for (j = 1; j <= m; j++) {\n            if (text1[i - 1] != text2[j - 1]) {\n                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n            } else {\n                dp[i][j] = 1 + dp[i - 1][j - 1];\n            }\n        }\n    }\n    return dp[n][m];\n};  \n"})})]}),(0,l.jsxs)(a,{value:"py",label:"Python",children:[(0,l.jsx)(n,{name:"@radojicic23"}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-py",children:"class Solution:\n    def longestCommonSubsequence(self, text1: str, text2: str) -> int:\n        dp = [[0 for _ in range(len(text2) + 1)] for _ in range(len(text1) + 1)]\n        \n        for i in range(len(text1) - 1, -1, -1):\n            for j in range(len(text2) - 1, -1, -1):\n                if text1[i] == text2[j]:\n                    dp[i][j] = 1 + dp[i + 1][j + 1]\n                else:\n                    dp[i][j] = max(dp[i + 1][j], dp[i][j + 1])\n        return dp[0][0]\n"})})]})]})]})}function d(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(h,{...s})}):h(s)}function o(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(s,e,n)=>{n.d(e,{R:()=>t,x:()=>m});var a=n(96540);const l={},i=a.createContext(l);function t(s){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function m(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:t(s.components),a.createElement(i.Provider,{value:e},s.children)}}}]);