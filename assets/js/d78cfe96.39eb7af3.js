"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[57729],{86598:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>t,contentTitle:()=>r,default:()=>o,frontMatter:()=>l,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"2100-2199/removing-minimum-number-of-magic-beans-medium","title":"2171 - Removing Minimum Number of Magic Beans (Medium)","description":"Author: @wkw | https://leetcode.com/problems/removing-minimum-number-of-magic-beans/","source":"@site/solutions/2100-2199/2171-removing-minimum-number-of-magic-beans-medium.md","sourceDirName":"2100-2199","slug":"/2100-2199/removing-minimum-number-of-magic-beans-medium","permalink":"/solutions/2100-2199/removing-minimum-number-of-magic-beans-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2171-removing-minimum-number-of-magic-beans-medium.md","tags":[],"version":"current","sidebarPosition":2171,"frontMatter":{"description":"Author: @wkw | https://leetcode.com/problems/removing-minimum-number-of-magic-beans/"},"sidebar":"tutorialSidebar","previous":{"title":"2170 - Minimum Operations to Make the Array Alternating (Medium)","permalink":"/solutions/2100-2199/minimum-operations-to-make-the-array-alternating-medium"},"next":{"title":"2172 - Maximum AND Sum of Array (Hard)","permalink":"/solutions/2100-2199/maximum-and-sum-of-array-hard"}}');var m=a(86070),i=a(32790);const l={description:"Author: @wkw | https://leetcode.com/problems/removing-minimum-number-of-magic-beans/"},r="2171 - Removing Minimum Number of Magic Beans (Medium)",t={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sorting",id:"approach-1-sorting",level:2}];function h(s){const e={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.R)(),...s.components},{SolutionAuthor:a}=e;return a||function(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(e.header,{children:(0,m.jsx)(e.h1,{id:"2171---removing-minimum-number-of-magic-beans-medium",children:"2171 - Removing Minimum Number of Magic Beans (Medium)"})}),"\n",(0,m.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,m.jsx)(e.p,{children:(0,m.jsx)(e.a,{href:"https://leetcode.com/problems/removing-minimum-number-of-magic-beans/",children:"https://leetcode.com/problems/removing-minimum-number-of-magic-beans/"})}),"\n",(0,m.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,m.jsxs)(e.p,{children:["You are given an array of ",(0,m.jsx)(e.strong,{children:"positive"})," integers ",(0,m.jsx)(e.code,{children:"beans"}),", where each integer represents the number of magic beans found in a particular magic bag."]}),"\n",(0,m.jsxs)(e.p,{children:[(0,m.jsx)(e.strong,{children:"Remove"})," any number of beans (",(0,m.jsx)(e.strong,{children:"possibly none"}),") from each bag such that the number of beans in each remaining ",(0,m.jsx)(e.strong,{children:"non-empty"})," bag (still containing ",(0,m.jsx)(e.strong,{children:"at least one"})," bean) is ",(0,m.jsx)(e.strong,{children:"equal"}),". Once a bean has been removed from a bag, you are ",(0,m.jsx)(e.strong,{children:"not"})," allowed to return it to any of the bags."]}),"\n",(0,m.jsxs)(e.p,{children:["Return ",(0,m.jsxs)(e.em,{children:["the ",(0,m.jsx)(e.strong,{children:"minimum"})," number of magic beans that you have to remove"]}),"."]}),"\n",(0,m.jsx)(e.p,{children:(0,m.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,m.jsx)(e.pre,{children:(0,m.jsx)(e.code,{children:"Input: beans = [4,1,6,5]\nOutput: 4\nExplanation:\n- We remove 1 bean from the bag with only 1 bean.\n  This results in the remaining bags: [4,0,6,5]\n- Then we remove 2 beans from the bag with 6 beans.\n  This results in the remaining bags: [4,0,4,5]\n- Then we remove 1 bean from the bag with 5 beans.\n  This results in the remaining bags: [4,0,4,4]\nWe removed a total of 1 + 2 + 1 = 4 beans to make the remaining non-empty bags have an equal number of beans.\nThere are no other solutions that remove 4 beans or fewer.\n"})}),"\n",(0,m.jsx)(e.p,{children:(0,m.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,m.jsx)(e.pre,{children:(0,m.jsx)(e.code,{children:"Input: beans = [2,10,3,2]\nOutput: 7\nExplanation:\n- We remove 2 beans from one of the bags with 2 beans.\n  This results in the remaining bags: [0,10,3,2]\n- Then we remove 2 beans from the other bag with 2 beans.\n  This results in the remaining bags: [0,10,3,0]\n- Then we remove 3 beans from the bag with 3 beans.\n  This results in the remaining bags: [0,10,0,0]\nWe removed a total of 2 + 2 + 3 = 7 beans to make the remaining non-empty bags have an equal number of beans.\nThere are no other solutions that removes 7 beans or fewer.\n"})}),"\n",(0,m.jsx)(e.p,{children:(0,m.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,m.jsxs)(e.ul,{children:["\n",(0,m.jsx)(e.li,{children:(0,m.jsx)(e.code,{children:"1 <= beans.length <= 10^5"})}),"\n",(0,m.jsx)(e.li,{children:(0,m.jsx)(e.code,{children:"1 <= beans[i] <= 10^5"})}),"\n"]}),"\n",(0,m.jsx)(e.h2,{id:"approach-1-sorting",children:"Approach 1: Sorting"}),"\n",(0,m.jsx)(e.p,{children:"The number of beans in remaining non-empty bag must be one of the values in the input. We sort the array and iterate each one to see how many beans we need to remove in order to fulfil the case."}),"\n",(0,m.jsxs)(e.p,{children:["For example, if ",(0,m.jsxs)(e.span,{className:"katex",children:[(0,m.jsx)(e.span,{className:"katex-mathml",children:(0,m.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,m.jsxs)(e.semantics,{children:[(0,m.jsxs)(e.mrow,{children:[(0,m.jsx)(e.mi,{children:"a"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"["}),(0,m.jsx)(e.mi,{children:"i"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,m.jsx)(e.annotation,{encoding:"application/x-tex",children:"a[i]"})]})})}),(0,m.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,m.jsx)(e.span,{className:"mopen",children:"["}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,m.jsx)(e.span,{className:"mclose",children:"]"})]})})]})," is selected, then all beans before index ",(0,m.jsxs)(e.span,{className:"katex",children:[(0,m.jsx)(e.span,{className:"katex-mathml",children:(0,m.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,m.jsxs)(e.semantics,{children:[(0,m.jsx)(e.mrow,{children:(0,m.jsx)(e.mi,{children:"i"})}),(0,m.jsx)(e.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,m.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})})]})," need to be removed. i.e. ",(0,m.jsxs)(e.span,{className:"katex",children:[(0,m.jsx)(e.span,{className:"katex-mathml",children:(0,m.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,m.jsxs)(e.semantics,{children:[(0,m.jsxs)(e.mrow,{children:[(0,m.jsx)(e.mi,{children:"a"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"["}),(0,m.jsx)(e.mn,{children:"0"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,m.jsx)(e.mo,{children:"+"}),(0,m.jsx)(e.mi,{children:"a"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"["}),(0,m.jsx)(e.mn,{children:"1"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,m.jsx)(e.mo,{children:"+"}),(0,m.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,m.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,m.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,m.jsx)(e.mo,{children:"+"}),(0,m.jsx)(e.mi,{children:"a"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"["}),(0,m.jsx)(e.mi,{children:"i"}),(0,m.jsx)(e.mo,{children:"\u2212"}),(0,m.jsx)(e.mn,{children:"1"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,m.jsx)(e.annotation,{encoding:"application/x-tex",children:"a[0] + a[1] + ... + a[i - 1]"})]})})}),(0,m.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,m.jsx)(e.span,{className:"mopen",children:"["}),(0,m.jsx)(e.span,{className:"mord",children:"0"}),(0,m.jsx)(e.span,{className:"mclose",children:"]"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.jsx)(e.span,{className:"mbin",children:"+"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,m.jsx)(e.span,{className:"mopen",children:"["}),(0,m.jsx)(e.span,{className:"mord",children:"1"}),(0,m.jsx)(e.span,{className:"mclose",children:"]"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.jsx)(e.span,{className:"mbin",children:"+"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,m.jsx)(e.span,{className:"mord",children:"..."}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.jsx)(e.span,{className:"mbin",children:"+"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,m.jsx)(e.span,{className:"mopen",children:"["}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.jsx)(e.span,{className:"mord",children:"1"}),(0,m.jsx)(e.span,{className:"mclose",children:"]"})]})]})]}),". For those beans starting from index ",(0,m.jsxs)(e.span,{className:"katex",children:[(0,m.jsx)(e.span,{className:"katex-mathml",children:(0,m.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,m.jsxs)(e.semantics,{children:[(0,m.jsx)(e.mrow,{children:(0,m.jsx)(e.mi,{children:"i"})}),(0,m.jsx)(e.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,m.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})})]}),", we just need to remove some to make them equal to ",(0,m.jsxs)(e.span,{className:"katex",children:[(0,m.jsx)(e.span,{className:"katex-mathml",children:(0,m.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,m.jsxs)(e.semantics,{children:[(0,m.jsxs)(e.mrow,{children:[(0,m.jsx)(e.mi,{children:"a"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"["}),(0,m.jsx)(e.mi,{children:"i"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,m.jsx)(e.annotation,{encoding:"application/x-tex",children:"a[i]"})]})})}),(0,m.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,m.jsx)(e.span,{className:"mopen",children:"["}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,m.jsx)(e.span,{className:"mclose",children:"]"})]})})]}),", i.e. ",(0,m.jsxs)(e.span,{className:"katex",children:[(0,m.jsx)(e.span,{className:"katex-mathml",children:(0,m.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,m.jsxs)(e.semantics,{children:[(0,m.jsxs)(e.mrow,{children:[(0,m.jsx)(e.mi,{children:"a"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"["}),(0,m.jsx)(e.mi,{children:"i"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,m.jsx)(e.mo,{children:"+"}),(0,m.jsx)(e.mi,{children:"a"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"["}),(0,m.jsx)(e.mi,{children:"i"}),(0,m.jsx)(e.mo,{children:"+"}),(0,m.jsx)(e.mn,{children:"1"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,m.jsx)(e.mo,{children:"+"}),(0,m.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,m.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,m.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,m.jsx)(e.mo,{children:"+"}),(0,m.jsx)(e.mi,{children:"a"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"["}),(0,m.jsx)(e.mi,{children:"n"}),(0,m.jsx)(e.mo,{children:"\u2212"}),(0,m.jsx)(e.mn,{children:"1"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,m.jsx)(e.mo,{children:"\u2212"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"("}),(0,m.jsx)(e.mi,{children:"n"}),(0,m.jsx)(e.mo,{children:"\u2217"}),(0,m.jsx)(e.mi,{children:"i"}),(0,m.jsx)(e.mo,{stretchy:"false",children:")"}),(0,m.jsx)(e.mo,{children:"\u2217"}),(0,m.jsx)(e.mi,{children:"a"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"["}),(0,m.jsx)(e.mi,{children:"i"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,m.jsx)(e.annotation,{encoding:"application/x-tex",children:"a[i] + a[i + 1] + ... + a[n - 1] - (n * i) * a[i]"})]})})}),(0,m.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,m.jsx)(e.span,{className:"mopen",children:"["}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,m.jsx)(e.span,{className:"mclose",children:"]"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.jsx)(e.span,{className:"mbin",children:"+"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,m.jsx)(e.span,{className:"mopen",children:"["}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.jsx)(e.span,{className:"mbin",children:"+"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.jsx)(e.span,{className:"mord",children:"1"}),(0,m.jsx)(e.span,{className:"mclose",children:"]"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.jsx)(e.span,{className:"mbin",children:"+"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,m.jsx)(e.span,{className:"mord",children:"..."}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.jsx)(e.span,{className:"mbin",children:"+"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,m.jsx)(e.span,{className:"mopen",children:"["}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.jsx)(e.span,{className:"mord",children:"1"}),(0,m.jsx)(e.span,{className:"mclose",children:"]"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.jsx)(e.span,{className:"mopen",children:"("}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,m.jsx)(e.span,{className:"mclose",children:")"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,m.jsx)(e.span,{className:"mopen",children:"["}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,m.jsx)(e.span,{className:"mclose",children:"]"})]})]})]}),". In other words, that would be ",(0,m.jsxs)(e.span,{className:"katex",children:[(0,m.jsx)(e.span,{className:"katex-mathml",children:(0,m.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,m.jsxs)(e.semantics,{children:[(0,m.jsxs)(e.mrow,{children:[(0,m.jsx)(e.mi,{children:"s"}),(0,m.jsx)(e.mi,{children:"u"}),(0,m.jsxs)(e.msub,{children:[(0,m.jsx)(e.mi,{children:"m"}),(0,m.jsx)(e.mi,{children:"a"})]}),(0,m.jsx)(e.mo,{children:"\u2212"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"("}),(0,m.jsx)(e.mi,{children:"n"}),(0,m.jsx)(e.mo,{children:"\u2212"}),(0,m.jsx)(e.mi,{children:"i"}),(0,m.jsx)(e.mo,{stretchy:"false",children:")"}),(0,m.jsx)(e.mo,{children:"\u2217"}),(0,m.jsx)(e.mi,{children:"a"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"["}),(0,m.jsx)(e.mi,{children:"i"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,m.jsx)(e.annotation,{encoding:"application/x-tex",children:"sum_a - (n - i) * a[i]"})]})})}),(0,m.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.7333em",verticalAlign:"-0.15em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,m.jsxs)(e.span,{className:"mord",children:[(0,m.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,m.jsx)(e.span,{className:"msupsub",children:(0,m.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,m.jsxs)(e.span,{className:"vlist-r",children:[(0,m.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,m.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,m.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,m.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,m.jsx)(e.span,{className:"mord mathnormal mtight",children:"a"})})]})}),(0,m.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,m.jsx)(e.span,{className:"vlist-r",children:(0,m.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,m.jsx)(e.span,{})})})]})})]}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.jsx)(e.span,{className:"mopen",children:"("}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,m.jsx)(e.span,{className:"mclose",children:")"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,m.jsx)(e.span,{className:"mopen",children:"["}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,m.jsx)(e.span,{className:"mclose",children:"]"})]})]})]}),"."]}),"\n",(0,m.jsx)(a,{name:"@wkw"}),"\n",(0,m.jsx)(e.pre,{children:(0,m.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    long long minimumRemoval(vector<int>& beans) {\n        long long n = beans.size();\n        long long ans = 1e18;\n        long long sum = accumulate(beans.begin(),beans.end(), 0LL);\n        sort(beans.begin(),beans.end());\n        for (int i = 0; i < n; ++i) ans = min(ans, sum - (n - i) * beans[i]);\n        return ans;\n    }\n};\n"})})]})}function o(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,m.jsx)(e,{...s,children:(0,m.jsx)(h,{...s})}):h(s)}},32790:(s,e,a)=>{a.d(e,{R:()=>l,x:()=>r});var n=a(30758);const m={},i=n.createContext(m);function l(s){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(m):s.components||m:l(s.components),n.createElement(i.Provider,{value:e},s.children)}}}]);