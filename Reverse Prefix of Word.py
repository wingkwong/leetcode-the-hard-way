class Solution:
    def reversePrefix(self, word: str, ch: str) -> str:
        if ch in word:
            j=word.find(ch)
            return word[:j+1][::-1]+word[j+1:]
        return word
        
