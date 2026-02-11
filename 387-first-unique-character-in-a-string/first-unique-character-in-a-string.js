/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = new Map();
    //find the frequency of each element
    for(let ch of s){
        map.set(ch, (map.get(ch) || 0)+1);
    }
    //find first non repeating 
    for(let i = 0;i<s.length;i++){ //we need to return the index so we are using i to traverse not ch
        if(map.get(s[i]) === 1){
            return i;
        }
    }
    return -1;
};