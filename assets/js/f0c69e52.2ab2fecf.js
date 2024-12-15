"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[70185],{66441:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>t,metadata:()=>n,toc:()=>m});const n=JSON.parse('{"id":"0000-0099/integer-to-roman-medium","title":"0012 - Integer to Roman (Medium)","description":"Author: @jessicaribeiroalves, @radojicic23 | https://leetcode.com/problems/integer-to-roman/","source":"@site/solutions/0000-0099/0012-integer-to-roman-medium.md","sourceDirName":"0000-0099","slug":"/0000-0099/integer-to-roman-medium","permalink":"/solutions/0000-0099/integer-to-roman-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0012-integer-to-roman-medium.md","tags":[{"inline":true,"label":"Hash Table","permalink":"/solutions/tags/hash-table"},{"inline":true,"label":"Math","permalink":"/solutions/tags/math"},{"inline":true,"label":"String","permalink":"/solutions/tags/string"}],"version":"current","sidebarPosition":12,"frontMatter":{"description":"Author: @jessicaribeiroalves, @radojicic23 | https://leetcode.com/problems/integer-to-roman/","tags":["Hash Table","Math","String"]},"sidebar":"tutorialSidebar","previous":{"title":"0011 - Container With Most Water (Medium)","permalink":"/solutions/0000-0099/container-with-most-water-medium"},"next":{"title":"0013 - Roman to Integer (Easy)","permalink":"/solutions/0000-0099/roman-to-integer-easy"}}');var i=a(74848),l=a(28453);const t={description:"Author: @jessicaribeiroalves, @radojicic23 | https://leetcode.com/problems/integer-to-roman/",tags:["Hash Table","Math","String"]},r="0012 - Integer to Roman (Medium)",c={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Iterating over a list",id:"approach-1-iterating-over-a-list",level:2}];function h(s){const e={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,l.R)(),...s.components},{SolutionAuthor:a,TabItem:n,Tabs:t}=e;return a||x("SolutionAuthor",!0),n||x("TabItem",!0),t||x("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"0012---integer-to-roman-medium",children:"0012 - Integer to Roman (Medium)"})}),"\n",(0,i.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://leetcode.com/problems/integer-to-roman/",children:"https://leetcode.com/problems/integer-to-roman/"})}),"\n",(0,i.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(e.p,{children:["Roman numerals are represented by seven different symbols: ",(0,i.jsx)(e.code,{children:"I"}),", ",(0,i.jsx)(e.code,{children:"V"}),", ",(0,i.jsx)(e.code,{children:"X"}),", ",(0,i.jsx)(e.code,{children:"L"}),", ",(0,i.jsx)(e.code,{children:"C"}),", ",(0,i.jsx)(e.code,{children:"D"})," and ",(0,i.jsx)(e.code,{children:"M"}),"."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Python",children:"Symbol       Value\nI             1\nV             5\nX             10\nL             50\nC             100\nD             500\nM             1000\n"})}),"\n",(0,i.jsxs)(e.p,{children:["For example, ",(0,i.jsx)(e.code,{children:"2"})," is written as ",(0,i.jsx)(e.code,{children:"II"})," in Roman numeral, just two ones added together. ",(0,i.jsx)(e.code,{children:"12"})," is written as ",(0,i.jsx)(e.code,{children:"XII"}),", which is simply ",(0,i.jsx)(e.code,{children:"X + II"}),". The number ",(0,i.jsx)(e.code,{children:"27"})," is written as ",(0,i.jsx)(e.code,{children:"XXVII"}),", which is ",(0,i.jsx)(e.code,{children:"XX + V + II"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not ",(0,i.jsx)(e.code,{children:"IIII"}),". Instead, the number four is written as ",(0,i.jsx)(e.code,{children:"IV"}),". Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as ",(0,i.jsx)(e.code,{children:"IX"}),". There are six instances where subtraction is used:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"I"})," can be placed before ",(0,i.jsx)(e.code,{children:"V"})," (5) and ",(0,i.jsx)(e.code,{children:"X"})," (10) to make 4 and 9."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"X"})," can be placed before ",(0,i.jsx)(e.code,{children:"L"})," (50) and ",(0,i.jsx)(e.code,{children:"C"})," (100) to make 40 and 90."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"C"})," can be placed before ",(0,i.jsx)(e.code,{children:"D"})," (500) and ",(0,i.jsx)(e.code,{children:"M"})," (1000) to make 400 and 900."]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Given an integer, convert it to a roman numeral."}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Python",children:'Input: num = 3\nOutput: "III"\nExplanation: 3 is represented as 3 ones.\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Python",children:'Input: num = 58\nOutput: "LVIII"\nExplanation: L = 50, V = 5, III = 3.\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 3:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Python",children:'Input: num = 1994\nOutput: "MCMXCIV"\nExplanation: M = 1000, CM = 900, XC = 90 and IV = 4.\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"1 <= num <= 3999"})}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"approach-1-iterating-over-a-list",children:"Approach 1: Iterating over a list"}),"\n",(0,i.jsxs)(e.p,{children:["The solution used was iterating over a tuples list created to map the integers and their respective Roman numerals. So when iterating over the list, while the ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"r"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{children:"m"}),(0,i.jsx)(e.mi,{children:"a"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{children:"g"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"remaining"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"re"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"mainin"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"})]})})]})," value is greater than or equal to the first tuple element (which is the integer value), append the corresponding character(s) (the second tuple element) to ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"r"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mi,{children:"u"}),(0,i.jsx)(e.mi,{children:"l"}),(0,i.jsx)(e.mi,{children:"t"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"result"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"res"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"lt"})]})})]})," and subtract the value from ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"r"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{children:"m"}),(0,i.jsx)(e.mi,{children:"a"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{children:"g"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"remaining"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"re"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"mainin"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"})]})})]}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["For example, if we consider the given integer ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{children:"u"}),(0,i.jsx)(e.mi,{children:"m"}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsx)(e.mn,{children:"17"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"num = 17"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"="}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"17"})]})]})]}),", after starting the iteration over the list, the algorithm checks if the integer ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mn,{children:"17"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"17"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"17"})]})})]})," is greater than or equal to the first integer value from the first list element, which is ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mn,{children:"1000"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"1000"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"1000"})]})})]}),". Since it's not, the code in the while loop is not executed and the next iteration starts checking if ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mn,{children:"17"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"17"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"17"})]})})]})," is greater than or equal to ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mn,{children:"900"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"900"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"900"})]})})]})," and so on until the iteration checks if ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mn,{children:"17"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"17"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"17"})]})})]})," is greater than or equal to ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mn,{children:"10"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"10"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"10"})]})})]}),". In this iteration the code in the while loop is executed so that the ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"r"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mi,{children:"u"}),(0,i.jsx)(e.mi,{children:"l"}),(0,i.jsx)(e.mi,{children:"t"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"result"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"res"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"lt"})]})})]})," variable is concatenated with the respective Roman numeral which is ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsxs)(e.msup,{children:[(0,i.jsx)(e.mrow,{}),(0,i.jsx)(e.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]}),(0,i.jsxs)(e.msup,{children:[(0,i.jsx)(e.mi,{children:"X"}),(0,i.jsx)(e.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"'X'"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.7519em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsx)(e.span,{className:"vlist-t",children:(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.7519em"},children:(0,i.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsx)(e.span,{className:"vlist-t",children:(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.7519em"},children:(0,i.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]})]})})]})," and ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"r"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{children:"m"}),(0,i.jsx)(e.mi,{children:"a"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{children:"g"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"remaining"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"re"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"mainin"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"})]})})]})," becomes ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mn,{children:"7"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"7"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"7"})]})})]}),". For the next iteration, ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mn,{children:"7"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"7"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"7"})]})})]})," is not greater than or equal to ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mn,{children:"9"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"9"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"9"})]})})]})," but on the next one, when it's greater than ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mn,{children:"5"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"5"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"5"})]})})]}),", ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"r"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mi,{children:"u"}),(0,i.jsx)(e.mi,{children:"l"}),(0,i.jsx)(e.mi,{children:"t"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"result"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"res"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"lt"})]})})]})," becomes ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsxs)(e.msup,{children:[(0,i.jsx)(e.mrow,{}),(0,i.jsx)(e.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]}),(0,i.jsx)(e.mi,{children:"X"}),(0,i.jsxs)(e.msup,{children:[(0,i.jsx)(e.mi,{children:"V"}),(0,i.jsx)(e.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"'XV'"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.7519em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsx)(e.span,{className:"vlist-t",children:(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.7519em"},children:(0,i.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsx)(e.span,{className:"vlist-t",children:(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.7519em"},children:(0,i.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]})]})})]})," and ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"r"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{children:"m"}),(0,i.jsx)(e.mi,{children:"a"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{children:"g"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"remaining"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"re"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"mainin"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"})]})})]})," becomes ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mn,{children:"2"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"2"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"2"})]})})]}),". So keeping that logic, after the final iteration ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"r"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mi,{children:"u"}),(0,i.jsx)(e.mi,{children:"l"}),(0,i.jsx)(e.mi,{children:"t"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"result"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"res"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"lt"})]})})]})," will be ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsxs)(e.msup,{children:[(0,i.jsx)(e.mrow,{}),(0,i.jsx)(e.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]}),(0,i.jsx)(e.mi,{children:"X"}),(0,i.jsx)(e.mi,{children:"V"}),(0,i.jsx)(e.mi,{children:"I"}),(0,i.jsxs)(e.msup,{children:[(0,i.jsx)(e.mi,{children:"I"}),(0,i.jsx)(e.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"'XVII'"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.7519em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsx)(e.span,{className:"vlist-t",children:(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.7519em"},children:(0,i.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"I"}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"I"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsx)(e.span,{className:"vlist-t",children:(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.7519em"},children:(0,i.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]})]})})]}),"."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsxs)(e.strong,{children:["Time Complexity: ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"O"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mn,{children:"1"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord",children:"1"}),(0,i.jsx)(e.span,{className:"mclose",children:")"})]})})]})]})}),"\n",(0,i.jsxs)(e.p,{children:["The time complexity for this solution is ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"O"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mn,{children:"1"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord",children:"1"}),(0,i.jsx)(e.span,{className:"mclose",children:")"})]})})]})," as the algorithm execution time is independent of the size of the input."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsxs)(e.strong,{children:["Space Complexity: ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"O"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mn,{children:"1"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord",children:"1"}),(0,i.jsx)(e.span,{className:"mclose",children:")"})]})})]})]})}),"\n",(0,i.jsxs)(e.p,{children:["The space complexity for this solution is also ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"O"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mn,{children:"1"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord",children:"1"}),(0,i.jsx)(e.span,{className:"mclose",children:")"})]})})]}),"."]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsxs)(n,{value:"py",label:"Python",children:[(0,i.jsx)(a,{name:"@jessicaribeiroalves"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-py",children:"numbersDict = [\n    (1000, 'M'),\n    (900, 'CM'),\n    (500, 'D'),\n    (400, 'CD'),\n    (100, 'C'),\n    (90, 'XC'),\n    (50, 'L'),\n    (40, 'XL'),\n    (10, 'X'),\n    (9, 'IX'),\n    (5, 'V'),\n    (4, 'IV'),\n    (1, 'I')\n]\n\nclass Solution(object):\n    def intToRoman(self, num):\n        remaining = num\n        result = ''\n        for integerValue, romanNumeral in numbersDict:\n            while remaining >= integerValue:\n                result += romanNumeral\n                remaining -= integerValue\n        return result\n"})})]}),(0,i.jsxs)(n,{value:"js",label:"JavaScript",children:[(0,i.jsx)(a,{name:"@jessicaribeiroalves"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"const numbersDict = [\n    [1000, 'M'],\n    [900, 'CM'],\n    [500, 'D'],\n    [400, 'CD'],\n    [100, 'C'],\n    [90, 'XC'],\n    [50, 'L'],\n    [40, 'XL'],\n    [10, 'X'],\n    [9, 'IX'],\n    [5, 'V'],\n    [4, 'IV'],\n    [1, 'I']\n];\n\nconst intToRoman = (num) => {\n    let remaining = num;\n    let result = '';\n\n    for (let [integerValue, romanNumeral] of numbersDict) {\n        while (remaining >= integerValue) {\n            result += romanNumeral;\n            remaining -= integerValue;\n        }\n    }\n    return result;\n};\n"})})]}),(0,i.jsxs)(n,{value:"cpp",label:"C++",children:[(0,i.jsx)(a,{name:"@radojicic23"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:'class Solution {\npublic:\n    string intToRoman(int num) {\n        vector<pair<int, string>> numbers = {\n            {1000, "M"}, \n            {900, "CM"}, \n            {500, "D"},\n            {400, "CD"}, \n            {100, "C"}, \n            {90, "XC"}, \n            {50, "L"}, \n            {40, "XL"}, \n            {10, "X"}, \n            {9, "IX"}, \n            {5, "V"}, \n            {4, "IV"}, \n            {1, "I"} \n        };\n        string ans = "";\n        while (num > 0) {\n            for (auto [integer, roman] : numbers) {\n                if (num >= integer) {\n                    ans += roman;\n                    num -= integer;\n                    break;\n                }\n            }\n        }\n        return ans;\n    }\n};\n'})})]})]})]})}function d(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,i.jsx)(e,{...s,children:(0,i.jsx)(h,{...s})}):h(s)}function x(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(s,e,a)=>{a.d(e,{R:()=>t,x:()=>r});var n=a(96540);const i={},l=n.createContext(i);function t(s){const e=n.useContext(l);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:t(s.components),n.createElement(l.Provider,{value:e},s.children)}}}]);