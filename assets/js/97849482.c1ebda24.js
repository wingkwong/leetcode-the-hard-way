"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[92355],{69350:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=s(85893),i=s(11151);const r={description:"Author: @heder, @wingkwong | https://leetcode.com/problems/determine-if-string-halves-are-alike/",tags:["String","Counting"]},l="1704 - Determine if String Halves Are Alike (Easy)",a={id:"1700-1799/determine-if-string-halves-are-alike-easy",title:"1704 - Determine if String Halves Are Alike (Easy)",description:"Author: @heder, @wingkwong | https://leetcode.com/problems/determine-if-string-halves-are-alike/",source:"@site/solutions/1700-1799/1704-determine-if-string-halves-are-alike-easy.md",sourceDirName:"1700-1799",slug:"/1700-1799/determine-if-string-halves-are-alike-easy",permalink:"/solutions/1700-1799/determine-if-string-halves-are-alike-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1700-1799/1704-determine-if-string-halves-are-alike-easy.md",tags:[{inline:!0,label:"String",permalink:"/solutions/tags/string"},{inline:!0,label:"Counting",permalink:"/solutions/tags/counting"}],version:"current",sidebarPosition:1704,frontMatter:{description:"Author: @heder, @wingkwong | https://leetcode.com/problems/determine-if-string-halves-are-alike/",tags:["String","Counting"]},sidebar:"tutorialSidebar",previous:{title:"1700 - 1799",permalink:"/solutions/category/1700---1799"},next:{title:"1706 - Where Will the Ball Fall (Medium)",permalink:"/solutions/1700-1799/where-will-the-ball-fall-medium"}},o={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Counting",id:"approach-1-counting",level:2}];function h(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{SolutionAuthor:s,TabItem:r,Tabs:l}=n;return s||m("SolutionAuthor",!0),r||m("TabItem",!0),l||m("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"1704---determine-if-string-halves-are-alike-easy",children:"1704 - Determine if String Halves Are Alike (Easy)"}),"\n",(0,t.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/determine-if-string-halves-are-alike/",children:"https://leetcode.com/problems/determine-if-string-halves-are-alike/"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(n.p,{children:["You are given a string ",(0,t.jsx)(n.code,{children:"s"})," of even length. Split this string into two halves of equal lengths, and let ",(0,t.jsx)(n.code,{children:"a"})," be the first half and ",(0,t.jsx)(n.code,{children:"b"})," be the second half."]}),"\n",(0,t.jsxs)(n.p,{children:["Two strings are ",(0,t.jsx)(n.strong,{children:"alike"})," if they have the same number of vowels (",(0,t.jsx)(n.code,{children:"'a'"}),", ",(0,t.jsx)(n.code,{children:"'e'"}),", ",(0,t.jsx)(n.code,{children:"'i'"}),", ",(0,t.jsx)(n.code,{children:"'o'"}),", ",(0,t.jsx)(n.code,{children:"'u'"}),", ",(0,t.jsx)(n.code,{children:"'A'"}),", ",(0,t.jsx)(n.code,{children:"'E'"}),", ",(0,t.jsx)(n.code,{children:"'I'"}),", ",(0,t.jsx)(n.code,{children:"'O'"}),", ",(0,t.jsx)(n.code,{children:"'U'"}),"). Notice that ",(0,t.jsx)(n.code,{children:"s"})," contains uppercase and lowercase letters."]}),"\n",(0,t.jsxs)(n.p,{children:["Return ",(0,t.jsx)(n.code,{children:"true"}),(0,t.jsx)(n.em,{children:"if"}),(0,t.jsx)(n.code,{children:"a"}),(0,t.jsx)(n.em,{children:"and"}),(0,t.jsx)(n.code,{children:"b"}),(0,t.jsxs)(n.em,{children:["are ",(0,t.jsx)(n.strong,{children:"alike"})]}),". Otherwise, return ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'Input: s = "book"\nOutput: true\nExplanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'Input: s = "textbook"\nOutput: false\nExplanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.\nNotice that the vowel o is counted twice.\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"2 <= s.length <= 1000"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"s.length"})," is even."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"s"})," consists of ",(0,t.jsx)(n.strong,{children:"uppercase and lowercase"})," letters."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"approach-1-counting",children:"Approach 1: Counting"}),"\n",(0,t.jsx)(n.p,{children:"Well, just count the vowels in each half and compare. Using string_view avoids make a copy of the input."}),"\n",(0,t.jsxs)(n.p,{children:["Clang seems to produce fairly efficient code for isVowel: ",(0,t.jsx)(n.a,{href:"https://godbolt.org/z/MWra5vb6G",children:"https://godbolt.org/z/MWra5vb6G"})," -- much shorter than I though it would be and branch-free. @jit posted a nice analysis about the generated code ",(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/determine-if-string-halves-are-alike/solutions/2865500/c-counting-vowels-and-looking-at-some-assembly/comments/1702118",children:"here"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Time complexity is ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"O"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"("}),(0,t.jsx)(n.mi,{children:"n"}),(0,t.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(n.span,{className:"mopen",children:"("}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(n.span,{className:"mclose",children:")"})]})})]})," and the"]}),"\n",(0,t.jsxs)(n.li,{children:["Space complexity is ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"O"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"("}),(0,t.jsx)(n.mn,{children:"1"}),(0,t.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(n.span,{className:"mopen",children:"("}),(0,t.jsx)(n.span,{className:"mord",children:"1"}),(0,t.jsx)(n.span,{className:"mclose",children:")"})]})})]}),"."]}),"\n"]}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsxs)(r,{value:"cpp",label:"C++",children:[(0,t.jsx)(s,{name:"@heder"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"static bool halvesAreAlike(const string_view s) noexcept {\n    return vowelCount(s.substr(0, size(s) / 2)) == vowelCount(s.substr(size(s) / 2));\n}\n\nstatic int vowelCount(const string_view s) noexcept {\n    return count_if(begin(s), end(s), isVowel);\n}\n\nstatic bool isVowel(char ch) noexcept {\n    return\n        ch == 'a' || ch == 'e' || ch == 'i'  || ch == 'o' || ch == 'u' ||\n        ch == 'A' || ch == 'E' || ch == 'I'  || ch == 'O' || ch == 'U' ;\n}\n"})})]}),(0,t.jsxs)(r,{value:"rs",label:"Rust",children:[(0,t.jsx)(s,{name:"@wingkwong"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rs",children:'impl Solution {\n    pub fn halves_are_alike(s: String) -> bool {\n        // count the number of vowels in the given string\n        let go = |s: &str| s.chars().filter(|&c| "aeiouAEIOU".contains(c)).count();\n        // check if the count of the first half is same as that of the second half\n        go(&s[..s.len() / 2]) == go(&s[s.len() / 2..])\n    }\n}\n'})})]})]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>l});var t=s(67294);const i={},r=t.createContext(i);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);