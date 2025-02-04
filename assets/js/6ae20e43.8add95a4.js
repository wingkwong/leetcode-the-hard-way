"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[51775],{50508:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>s,suggestedProblems:()=>l,toc:()=>h});const s=JSON.parse('{"id":"basic-topics/queue-and-stack","title":"Queue & Stack","description":"Stack is the data structure The first item that comes in will be the first to go out.","source":"@site/tutorials/basic-topics/queue-and-stack.md","sourceDirName":"basic-topics","slug":"/basic-topics/queue-and-stack","permalink":"/tutorials/basic-topics/queue-and-stack","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/tutorials/basic-topics/queue-and-stack.md","tags":[],"version":"current","frontMatter":{"title":"Queue & Stack","description":"Stack is the data structure The first item that comes in will be the first to go out.","keywords":["leetcode","tutorial","queue","stack","data structure"]},"sidebar":"tutorialSidebar","previous":{"title":"Prefix Sum","permalink":"/tutorials/basic-topics/prefix-sum"},"next":{"title":"Sliding Window","permalink":"/tutorials/basic-topics/sliding-window"}}');var i=n(86070),a=n(32790);const r={title:"Queue & Stack",description:"Stack is the data structure The first item that comes in will be the first to go out.",keywords:["leetcode","tutorial","queue","stack","data structure"]},c=void 0,o={},l=[{problemName:"0155 - Min Stack",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/min-stack/",solutionLink:"../../solutions/0100-0199/min-stack-easy"},{problemName:"0496 - Next Greater Element I",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/next-greater-element-i/",solutionLink:"../../solutions/0400-0499/next-greater-element-i-easy"},{problemName:"1475 - Final Prices With a Special Discount in a Shop",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/",solutionLink:"../../solutions/1400-1499/final-prices-with-a-special-discount-in-a-shop-easy"}],h=[{value:"Stack",id:"stack",level:3},{value:"Queue",id:"queue",level:3}];function d(e){const t={a:"a",annotation:"annotation",blockquote:"blockquote",code:"code",h3:"h3",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,a.R)(),...e.components},{Table:n,TutorialCredits:s}=t;return n||p("Table",!0),s||p("TutorialCredits",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{authors:"@heiheihang"}),"\n",(0,i.jsx)(t.h3,{id:"stack",children:"Stack"}),"\n",(0,i.jsxs)(t.p,{children:["Stack is the data structure The first item that comes in will be the first to go out. Let's look at this question (",(0,i.jsx)(t.a,{href:"https://leetcode.com/problems/valid-parentheses/",children:"LeetCode Link"}),")"]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Given a string ",(0,i.jsx)(t.code,{children:"s"})," containing just the characters ",(0,i.jsx)(t.code,{children:"'('"}),", ",(0,i.jsx)(t.code,{children:"')'"}),", ",(0,i.jsx)(t.code,{children:"'{'"}),", ",(0,i.jsx)(t.code,{children:"'}'"}),", ",(0,i.jsx)(t.code,{children:"'['"})," and ",(0,i.jsx)(t.code,{children:"']'"}),", determine if the input string is valid."]}),"\n",(0,i.jsx)(t.p,{children:"An input string is valid if:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Open brackets must be closed by the same type of brackets."}),"\n",(0,i.jsx)(t.li,{children:"Open brackets must be closed in the correct order."}),"\n",(0,i.jsx)(t.li,{children:"Every close bracket has a corresponding open bracket of the same type."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"To validate a string of parentheses is valid, we must have a corresponding opening bracket when we see a closing bracket. Lets look at some examples:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'valid_string_1 = "([])"\n'})}),"\n",(0,i.jsx)(t.p,{children:"We can process the string in the following way:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'#1st character from valid_string_1\nvalid_string_1_step_1 = ["("]\n'})}),"\n",(0,i.jsx)(t.p,{children:"We have the first character first. We do not need to do anything if it is an opening bracket."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'#2nd character from valid_string_1\nvalid_string_1_step_2 = ["(", "["]\n'})}),"\n",(0,i.jsx)(t.p,{children:"We have the second character now. Again, we do not need to do anything if it is an opening bracket."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'#3rd character from valid_string_1\nvalid_string_1_step_3a = ["(", "[", "]"]\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Here, we see a matching pair ",(0,i.jsx)(t.code,{children:'"["'})," and ",(0,i.jsx)(t.code,{children:'"]"'}),", so we can cancel them out."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'#3rd character from valid_string_1 (removing valid pair)\nvalid_string_1_step_3b = ["("]\n'})}),"\n",(0,i.jsx)(t.p,{children:"We have removed the two last seen elements form the stack."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'#4th character from valid_string_1 (after removing 2nd and 3rd)\nvalid_string_1_step_4a = ["(", ")"]\n'})}),"\n",(0,i.jsx)(t.p,{children:"After adding the fourth character, we see a matching pair between the 1st character and the 4th character. We can remove it now."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"#4th character from valid_string_1 (after removing 1st and 4th)\nvalid_string_1_step_4a = []\n"})}),"\n",(0,i.jsx)(t.p,{children:"With no more character to process and with an empty stack, we know that there are no remaining opening and closing brackets. Hence, we can validate this string."}),"\n",(0,i.jsx)(t.p,{children:"Now let's look at a counter example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'invalid_string_1 = "[()}"\n'})}),"\n",(0,i.jsx)(t.p,{children:"Similar to the scenario above, we can skip the first two characters and have:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'invalid_string_1_step3a = ["[", "(", ")"]\n'})}),"\n",(0,i.jsx)(t.p,{children:"We see a matching pair in the 2nd character and the 3rd character, so we can remove them."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'invalid_string_1_step3b = ["["]\n'})}),"\n",(0,i.jsx)(t.p,{children:"Now we look at the 4th character:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'invalid_string_1_step4 = ["[", "}"]\n'})}),"\n",(0,i.jsxs)(t.p,{children:["We have a closing bracket, and it is not matching its corresponding opening bracket (",(0,i.jsx)(t.code,{children:'"{"'}),"), so we know that this string is invalid."]}),"\n",(0,i.jsx)(t.p,{children:"Are you able to code the solution out after looking at these two examples?"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'class Solution:\n    def isValid(self, s: str) -> bool:\n\n        #we use a stack to keep track of brackets\n        stack = []\n\n        #iterate the characters in the string\n        for c in s:\n\n            #we store the character in the stack if it is an opening bracket\n            if(c == "(" or c == "[" or c == "{"):\n                stack.append(c)\n\n            #we check if there is a matching opening bracket\n            #when we see a closing bracket\n            elif(c == ")"):\n                if(len(stack) == 0 or stack[-1] != "("):\n                    return False\n                else:\n                    stack.pop()\n\n            #we check if there is a matching opening bracket\n            #when we see a closing bracket\n            elif(c == "]"):\n                if(len(stack) == 0 or stack[-1] != "["):\n                    return False\n                else:\n                    stack.pop()\n\n            #we check if there is a matching opening bracket\n            #when we see a closing bracket\n            elif(c == "}"):\n                if(len(stack) == 0 or stack[-1] != "{"):\n                    return False\n                else:\n                    stack.pop()\n\n        #if the stack is not empty, there are some unmatched opening brackets\n        #this suggests it is not valid\n        if(len(stack) != 0):\n            return False\n        return True\n'})}),"\n",(0,i.jsx)(t.h3,{id:"queue",children:"Queue"}),"\n",(0,i.jsx)(t.p,{children:"Queue is the data structure that is First-In-First-Out. The first person who enters the queue should be the first person to leave the queue."}),"\n",(0,i.jsxs)(t.p,{children:["We can look at the following problem (",(0,i.jsx)(t.a,{href:"https://leetcode.com/problems/time-needed-to-buy-tickets/",children:"LeetCode Link"}),")"]}),"\n",(0,i.jsx)(t.p,{children:"As the problem statement and examples are quite long, we kindly ask you to read them on LeetCode."}),"\n",(0,i.jsxs)(t.p,{children:["To implement a Queue, we must have a data structure that handles adding element on the left in ",(0,i.jsxs)(t.span,{className:"katex",children:[(0,i.jsx)(t.span,{className:"katex-mathml",children:(0,i.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(t.semantics,{children:[(0,i.jsxs)(t.mrow,{children:[(0,i.jsx)(t.mi,{children:"O"}),(0,i.jsx)(t.mo,{stretchy:"false",children:"("}),(0,i.jsx)(t.mn,{children:"1"}),(0,i.jsx)(t.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(t.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,i.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(t.span,{className:"base",children:[(0,i.jsx)(t.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(t.span,{className:"mopen",children:"("}),(0,i.jsx)(t.span,{className:"mord",children:"1"}),(0,i.jsx)(t.span,{className:"mclose",children:")"})]})})]})," __ time. These are the options in different languages:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Python: ",(0,i.jsx)(t.code,{children:"queue = deque([]) # queue.appendleft(x) , queue.pop()"})]}),"\n",(0,i.jsxs)(t.li,{children:["C++: ",(0,i.jsx)(t.code,{children:"queue<int> q; // q.push(x), q.pop()"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"We can use these data structures to simulate this problem"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def timeRequiredToBuy(self, tickets: List[int], k: int) -> int:\n\n\n        queue = deque([])\n\n        #we initialize the queue first\n        #as we need to keep track of the kth person, we add the index as well\n        for i in range(len(tickets)):\n            ticket_needed = tickets[i]\n            queue.appendleft([i,ticket_needed])\n\n        #keep track of overall time\n        time = 0\n\n        #we continue until queue is empty\n        while(queue):\n\n            #each person spends one second for purchase\n            time += 1\n\n            #access the first person and her ticket needed from the queue\n            first_person_in_queue, tickets_remaining = queue[-1]\n\n            #the first person buys one ticket , so she needs one less ticket\n            tickets_remaining -= 1\n\n            #we remove the first person from the queue\n            queue.pop()\n\n            #if the first person still needs to buy more tickets, we move her back to the end of the queue\n            if(tickets_remaining != 0):\n                queue.appendleft([first_person_in_queue, tickets_remaining])\n            #if the first person is the target and she has bought all the tickets, we return the time\n            else:\n                if(first_person_in_queue == k):\n                    return time\n\n        return time\n"})}),"\n","\n",(0,i.jsx)(n,{title:"Suggested Problems",data:l})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},32790:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(30758);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);