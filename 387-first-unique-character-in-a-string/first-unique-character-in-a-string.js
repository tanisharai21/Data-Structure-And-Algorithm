/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = new Map();
    //find frequency of each element
    for(let ch of s){
        map.set(ch, (map.get(ch) || 0) + 1);
    }
    //first non repeating character
    for(let i =0;i<s.length;i++){
        if(map.get(s[i]) === 1){
            return i;
        }
    }
    return -1;
};