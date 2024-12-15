"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[68266],{51721:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"0400-0499/longest-repeating-character-replacement-medium","title":"0424 - Longest Repeating Character Replacement (Medium)","description":"Author: @ColeB2 | https://leetcode.com/problems/longest-substring-without-repeating-characters/","source":"@site/solutions/0400-0499/0424-longest-repeating-character-replacement-medium.md","sourceDirName":"0400-0499","slug":"/0400-0499/longest-repeating-character-replacement-medium","permalink":"/solutions/0400-0499/longest-repeating-character-replacement-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0400-0499/0424-longest-repeating-character-replacement-medium.md","tags":[{"inline":true,"label":"Hash Table","permalink":"/solutions/tags/hash-table"},{"inline":true,"label":"String","permalink":"/solutions/tags/string"},{"inline":true,"label":"Sliding Window","permalink":"/solutions/tags/sliding-window"}],"version":"current","sidebarPosition":424,"frontMatter":{"description":"Author: @ColeB2 | https://leetcode.com/problems/longest-substring-without-repeating-characters/","tags":["Hash Table","String","Sliding Window"]},"sidebar":"tutorialSidebar","previous":{"title":"0421 - Maximum XOR of Two Numbers in an Array","permalink":"/solutions/0400-0499/maximum-xor-of-two-numbers-in-an-array"},"next":{"title":"0429 - N-ary Tree Level Order Traversal (Medium)","permalink":"/solutions/0400-0499/n-ary-tree-level-order-traversal-medium"}}');var a=s(74848),r=s(28453);const l={description:"Author: @ColeB2 | https://leetcode.com/problems/longest-substring-without-repeating-characters/",tags:["Hash Table","String","Sliding Window"]},i="0424 - Longest Repeating Character Replacement (Medium)",c={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sliding Window - Get the Most Frequent Letter Count",id:"approach-1-sliding-window---get-the-most-frequent-letter-count",level:2},{value:"Approach 2: Sliding Window - Track Most Frequent Letter Count",id:"approach-2-sliding-window---track-most-frequent-letter-count",level:2}];function o(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{SolutionAuthor:s,TabItem:t,Tabs:l}=n;return s||d("SolutionAuthor",!0),t||d("TabItem",!0),l||d("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"0424---longest-repeating-character-replacement-medium",children:"0424 - Longest Repeating Character Replacement (Medium)"})}),"\n",(0,a.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://leetcode.com/problems/longest-repeating-character-replacement/",children:"https://leetcode.com/problems/longest-repeating-character-replacement/"})}),"\n",(0,a.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsxs)(n.p,{children:["You are given a string ",(0,a.jsx)(n.code,{children:"s"})," and an integer ",(0,a.jsx)(n.code,{children:"k"}),". You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most ",(0,a.jsx)(n.code,{children:"k"})," times."]}),"\n",(0,a.jsxs)(n.p,{children:["Return ",(0,a.jsx)(n.em,{children:"the length of the longest substring containing the same letter you can get after performing the above operations."})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Input: s = \"ABAB\", k = 2\nOutput: 4\nExplanation: Replace the two 'A's with two 'B's or vice versa.\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'Input: s = "AABABBA", k = 1\nOutput: 4\nExplanation: Replace the one \'A\' in the middle with \'B\' and form "AABBBBA".\nThe substring "BBBB" has the longest repeating letters, which is 4.\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"1 <= s.length <= 10^5"})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"s"})," consists of only uppercase English letters."]}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"0 <= k <= s.length"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"approach-1-sliding-window---get-the-most-frequent-letter-count",children:"Approach 1: Sliding Window - Get the Most Frequent Letter Count"}),"\n",(0,a.jsxs)(n.p,{children:["We need to create a window, where the letters inside of the window are all the exact same letters, except for ",(0,a.jsx)(n.code,{children:"k"})," number of letters, which can be converted to the letter we need them to be to maintain a window of the same letter."]}),"\n",(0,a.jsxs)(n.p,{children:["We can do that by tracking the left side of our window, and looping through the letters of ",(0,a.jsx)(n.code,{children:"s"}),". On each iteration we need to update our hashmap with the incoming letter, check the value of the most commonly used letter inside hash map, check that the size of our window minus the value of most commonly used letter is less than or equal to k. If it isn't we know we have too many letters that need replacing so we can decrement the left most letter of our window's count inside the hash map and move the left side pointer forward."]}),"\n",(0,a.jsx)(n.p,{children:"Finally we can update our longest length of window counter."}),"\n",(0,a.jsx)(n.p,{children:"Note: We have no need to continuously check that our window is in compliance after the first check, as we don't care about windows smaller than the longest window we created so far, so by shrinking it once, we know it won't falsely set a window length longer than the max length found so far."}),"\n",(0,a.jsxs)(n.p,{children:["Time complexity: ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"O"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mn,{children:"26"}),(0,a.jsx)(n.mo,{children:"\u2217"}),(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(26*n)"})]})})}),(0,a.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord",children:"26"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(n.span,{className:"mbin",children:"\u2217"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})]})]})," Where ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mi,{children:"n"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"})]})})]})," is the number of characters in the string, and ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mn,{children:"26"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"26"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(n.span,{className:"mord",children:"26"})]})})]})," is the length of the time to find the most commonly value of our hash map, as their are only ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mn,{children:"26"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"26"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(n.span,{className:"mord",children:"26"})]})})]})," uppercase English letters."]}),"\n",(0,a.jsxs)(n.p,{children:["Space complexity: ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"O"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mn,{children:"26"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(26)"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord",children:"26"}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})})]}),", As our counter will only ever get ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mn,{children:"26"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"26"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(n.span,{className:"mord",children:"26"})]})})]})," keys large, to handle the ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mn,{children:"26"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"26"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(n.span,{className:"mord",children:"26"})]})})]})," uppercase English letters."]}),"\n",(0,a.jsx)(l,{children:(0,a.jsxs)(t,{value:"python",label:"Python",children:[(0,a.jsx)(s,{name:"ColeB2"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"class Solution:\n    def characterReplacement(self, s: str, k: int) -> int:        \n        # initialize variables.\n        # l, left pointer, tracks the left side of our sliding window.\n        l = 0\n        # length, to track the longest window we end up creating.\n        length = 0\n        # counter, hash map to track count of each letter inside our window.\n        counter = {}\n        # loop to expand right side of our window, tracking the character to enter window.\n        for r, ch in enumerate(s):\n            # First add character to hash map, it it isn't in there initialize it\n            # with a value of 0.\n            if ch not in counter:\n                counter[ch] = 0\n            counter[ch] += 1\n            # get the size of our current window.\n            # number of replacements will be equal to \n            # window_length - highest frequency value character.\n            window_length = (r-l) + 1\n            if window_length - max(counter.values()) > k:\n                # decrement value in counter of left most character.\n                counter[s[l]] -= 1\n                # move left pointer up\n                l += 1\n            # update max length\n            length = max(length, (r-l)+1)\n        return length\n"})})]})}),"\n",(0,a.jsx)(n.h2,{id:"approach-2-sliding-window---track-most-frequent-letter-count",children:"Approach 2: Sliding Window - Track Most Frequent Letter Count"}),"\n",(0,a.jsxs)(n.p,{children:["Similar to Approach 1, with 1 little change related to the note. Since we don't really care about windows smaller than the longest window so far, we don't need to get the most common character in the window, we can just track the value outside of the loop, and update it as we update our hash map with the incoming letter. By doing this we save ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"O"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mn,{children:"26"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(26)"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord",children:"26"}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})})]})," time searching for the highest value. Improving our time complexity."]}),"\n",(0,a.jsx)(n.p,{children:"Note: most_frequent will track the max value of the most frequently used character that is inside of our max length window we ever reached. So for example if a previous window's most_frequent was 4, and we only have 3 most frequenct characters in current window, we know it isn't accurate, but we know that the 3 isn't large enough to overwrite our max length, so we can reuse the 4 anyways, which will only tie our max length, and won't increment it further above the max length."}),"\n",(0,a.jsxs)(n.p,{children:["Time complexity: ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"O"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})})]})," Where ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mi,{children:"n"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"})]})})]})," is the number of characters in the string."]}),"\n",(0,a.jsxs)(n.p,{children:["Space complexity: ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"O"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mn,{children:"26"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(26)"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord",children:"26"}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})})]}),", As our counter will only ever get ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mn,{children:"26"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"26"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(n.span,{className:"mord",children:"26"})]})})]})," keys large, to handle the ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mn,{children:"26"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"26"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(n.span,{className:"mord",children:"26"})]})})]})," uppercase English letters."]}),"\n",(0,a.jsx)(l,{children:(0,a.jsxs)(t,{value:"python",label:"Python",children:[(0,a.jsx)(s,{name:"ColeB2"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"class Solution:\n    def characterReplacement(self, s: str, k: int) -> int:        \n        # initialize variables.\n        # l, left pointer, tracks the left side of our sliding window.\n        l = 0\n        # length, to track the max length of the longest window we end up creating.\n        length = 0\n        # counter, hash map to track count of each letter inside our window.\n        counter = {}\n        # most_frequent, tracks value of most frequent letter inside our window.\n        most_frequent = 0\n        # loop to expand right side of our window, tracking the character to enter window.\n        for r, ch in enumerate(s):\n            # First add character to hash map, it it isn't in there initialize it\n            # with a value of 0.\n            if ch not in counter:\n                counter[ch] = 0\n            counter[ch] += 1\n            # update most_frequent to reflect the frequency of most frequently\n            # used character inside our window.\n            most_frequent = max(most_frequent, counter[ch])\n            # get the size of our current window.\n            # number of replacements will be equal to \n            # window_length - most_frequenct character.\n            window_length = (r-l) + 1\n            if window_length - most_frequent > k:\n                # decrement value of in counter of left most character.\n                counter[s[l]] -= 1\n                # move left pointer up\n                l += 1\n            # update max length\n            length = max(length, (r-l)+1)\n        return length\n"})})]})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}function d(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var t=s(96540);const a={},r=t.createContext(a);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);