/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    //create a empty stack 
    let stack = [];
    //iterate to string
    for(let ch of s){
        //check the opening bracket
        if(ch === '(' || ch === '{' || ch === '['){
            stack.push(ch);
        }
        else{
            //edge case
            if(stack.length === 0) return false;
            let top = stack.pop();
            if((ch === ')' && top !== '(') || (ch === '}' && top !== '{') || (ch === ']' && top !== '[')){
                return false;
            }
        }
    }
    return stack.length === 0;
};