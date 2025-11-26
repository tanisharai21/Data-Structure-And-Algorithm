/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for(let c of s){
        //push all opening characters in the stack
        if(c === '(' || c === '{' || c === '['){
            stack.push(c);
        }
        //check all closing characters
        else if(c === ')'|| c === '}' || c === ']'){
            if (stack.length === 0) return false;
            let top = stack[stack.length-1];
            if((c === ')' && top !== '(') ||
               (c === '}' && top !== '{') ||
               (c === ']' && top !== '[')) {
                return false;
               }
               stack.pop();
        }
    }
    return stack.length === 0;
};