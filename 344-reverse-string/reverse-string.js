/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let stack =[];
    for(let ch of s){
        stack.push(ch);
    }
    for(let i=0;i<s.length;i++){
        s[i] = stack.pop();
    }
    return s;
};