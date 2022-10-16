class MinStack {
public:
    stack<long long int>s;
    
        long long int min = 0;
    
    void push(int val) {
        
        if(s.size()==0)
        {
            s.push(val);
            
            min = val;
        }
        
        else if(val>=min)
        {
            s.push(val);
        }
        
        else
        {
            long long int p = 2*(long long)val-min;
            
            s.push(p);
            
            min = val;
        }
    }
    
    void pop() {
        if(s.size()==0) return;
        
        else
        {
            if(s.top()>=min)
            {
                s.pop();
            }
            
            else
            {
                int ov = min;
                
                min = 2*min-s.top();
                
                s.pop();
            }
        }
    }
    
    int top() {
        if(s.size()==0) return -1;
        
        else
        {
            if(s.top()>=min)
            {
                return s.top();
            }
            
            else
            {
                return min;
            }
        }
    }
    
    int getMin() {
        return min;
    } 
};
 

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(val);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->getMin();
 */